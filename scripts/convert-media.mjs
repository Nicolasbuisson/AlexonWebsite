#!/usr/bin/env node
/**
 * Converts every .mp4 in an S3 folder to .webm, and every .jpg/.jpeg/.png to .webp,
 * writing the results back alongside the originals in the same folder.
 *
 * Usage:  npm run convert-media -- <folder> [options]
 *   e.g.  npm run convert-media -- productions/visaXEmiratesNBD
 *         npm run convert-media -- productions/visaXEmiratesNBD --dry-run
 *
 * Credentials come from the environment (see README block at the bottom of this file).
 */

import { parseArgs } from "node:util";
import { spawn, spawnSync } from "node:child_process";
import { createReadStream, createWriteStream, readdirSync } from "node:fs";
import { mkdtemp, rm, stat } from "node:fs/promises";
import { pipeline } from "node:stream/promises";
import { tmpdir } from "node:os";
import path from "node:path";

import {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import {
  CloudFrontClient,
  CreateInvalidationCommand,
  ListDistributionsCommand,
} from "@aws-sdk/client-cloudfront";

// ---------------------------------------------------------------- arguments

const { values: opts, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    mode: { type: "string", default: "lossless" },
    bucket: { type: "string" },
    region: { type: "string" },
    concurrency: { type: "string", default: "2" },
    acl: { type: "string" },
    "dry-run": { type: "boolean", default: false },
    force: { type: "boolean", default: false },
    invalidate: { type: "boolean", default: false },
    "distribution-id": { type: "string" },
    exclude: { type: "string", multiple: true, default: [] },
    "keep-audio": { type: "boolean", default: false },
    "video-crf": { type: "string", default: "32" },
    "skip-larger": { type: "boolean", default: false },
    "delete-originals": { type: "boolean", default: false },
    help: { type: "boolean", default: false },
  },
});

const USAGE = `
Usage: npm run convert-media -- <folder> [options]

  <folder>              Key prefix inside the bucket, e.g. productions/visaXEmiratesNBD
                        Use "" or "/" to walk the whole bucket.

Options:
  --mode <lossless|web> lossless (default) is mathematically bit-exact.
                        web keeps PNG lossless but uses high-quality lossy
                        encoding for JPEG and MP4, which is far smaller.
  --bucket <name>       Overrides S3_BUCKET.
  --region <name>       Overrides AWS_REGION.
  --concurrency <n>     Files converted in parallel (default 2).
  --acl <acl>           ACL for uploads, e.g. public-read. Omit on buckets
                        with ACLs disabled (Bucket owner enforced).
  --video-crf <n>       VP9 quality for --mode web, 0-63, lower is better
                        (default 32). Small, already-efficient previews can
                        come out BIGGER at 32; 40 suits short muted loops.
                        Ignored in lossless mode.
  --keep-audio          Encode the audio track as Opus instead of dropping it.
                        Audio is dropped by default, which suits silent
                        background loops but destroys a talking-head video.
  --exclude <glob>      Skip sources matching this glob, matched against the
                        path below <folder> (e.g. "*-v0.mp4", "stills/*").
                        Repeatable.
  --skip-larger         Do not upload an output that is bigger than its source.
  --force               Re-convert even when the target file already exists.
  --invalidate          Invalidate the uploaded paths in CloudFront afterwards.
                        Only needed when overwriting files that already exist,
                        since a brand new extension is a brand new cache key.
  --distribution-id <d> CloudFront distribution to invalidate. Defaults to
                        CLOUDFRONT_DISTRIBUTION_ID, else found from the bucket.
  --delete-originals    Delete each source object after a successful upload.
  --dry-run             List what would happen, convert and upload nothing.
  --help
`;

if (opts.help || positionals.length === 0) {
  console.log(USAGE);
  process.exit(opts.help ? 0 : 1);
}

if (!["lossless", "web"].includes(opts.mode)) {
  console.error(`Unknown --mode "${opts.mode}". Expected "lossless" or "web".`);
  process.exit(1);
}

const BUCKET = opts.bucket ?? process.env.S3_BUCKET;
const REGION = opts.region ?? process.env.AWS_REGION ?? "us-east-1";
const CONCURRENCY = Math.max(1, Number.parseInt(opts.concurrency, 10) || 2);
const VIDEO_CRF = Number.parseInt(opts["video-crf"], 10);

if (!Number.isInteger(VIDEO_CRF) || VIDEO_CRF < 0 || VIDEO_CRF > 63) {
  console.error(`--video-crf must be an integer 0-63, got "${opts["video-crf"]}".`);
  process.exit(1);
}

if (!BUCKET) {
  console.error("No bucket. Set S3_BUCKET in .env or pass --bucket <name>.");
  process.exit(1);
}

// Normalise "/productions/foo" and "productions/foo/" to "productions/foo/".
const rawFolder = positionals[0].replace(/^\/+/, "").replace(/\/+$/, "");
const PREFIX = rawFolder === "" ? "" : `${rawFolder}/`;

// ------------------------------------------------------------------- ffmpeg

/** winget installs ffmpeg without putting it on PATH until the shell restarts. */
function resolveFfmpeg() {
  const candidates = [];
  if (process.env.FFMPEG_PATH) candidates.push(process.env.FFMPEG_PATH);
  candidates.push("ffmpeg");

  for (const candidate of candidates) {
    const probe = spawnSync(candidate, ["-version"], { stdio: "ignore" });
    if (!probe.error && probe.status === 0) return candidate;
  }

  // Fall back to the usual Windows install locations.
  const localAppData = process.env.LOCALAPPDATA;
  const roots = [
    localAppData && path.join(localAppData, "Microsoft/WinGet/Packages"),
    "C:/ffmpeg/bin",
    "C:/ProgramData/chocolatey/bin",
  ].filter(Boolean);

  for (const root of roots) {
    const found = findFile(root, "ffmpeg.exe", 5);
    if (found) return found;
  }
  return null;
}

function findFile(dir, name, depth) {
  if (depth < 0) return null;
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return null;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isFile() && entry.name.toLowerCase() === name) return full;
  }
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const found = findFile(path.join(dir, entry.name), name, depth - 1);
    if (found) return found;
  }
  return null;
}

const FFMPEG = resolveFfmpeg();
if (!FFMPEG && !opts["dry-run"]) {
  console.error(
    "ffmpeg not found. Add it to PATH or set FFMPEG_PATH to the ffmpeg binary."
  );
  process.exit(1);
}

/**
 * Encoder settings.
 *
 * Video: VP9. `-lossless 1` reproduces the decoded source frames bit-exactly.
 * `-an` drops audio entirely, as requested.
 *
 * Full-range (yuvj420p) sources need their levels remapped to limited range,
 * not just their pixel format relabelled: `-pix_fmt yuv420p` alone leaves the
 * source's full-range tag on the VP9 stream, and Chrome's decoder rejects that
 * with PIPELINE_ERROR_DECODE, so the preview silently never plays. The scale
 * filter does the remap; `in_range=auto` takes the range from the source, so
 * already-limited sources pass through untouched.
 *
 * Images: libwebp. `-lossless 1` is bit-exact and preserves the alpha channel.
 */
function ffmpegArgs(kind, input, output) {
  if (kind === "video") {
    const codec =
      opts.mode === "lossless"
        ? ["-lossless", "1"]
        : [
            "-crf", String(VIDEO_CRF), "-b:v", "0",
            "-vf", "scale=in_range=auto:out_range=limited,format=yuv420p",
            "-color_range", "tv",
          ];
    // Opus is the standard audio codec for WebM; libvpx has no say in it.
    const audio = opts["keep-audio"]
      ? ["-c:a", "libopus", "-b:a", "128k"]
      : ["-an"];
    return [
      "-y", "-hide_banner", "-loglevel", "error",
      "-i", input,
      ...audio,
      "-c:v", "libvpx-vp9",
      ...codec,
      "-row-mt", "1",
      "-deadline", "good",
      "-cpu-used", "2",
      output,
    ];
  }

  // PNG is lossless in both modes: lossless WebP already beats PNG comfortably,
  // so there is nothing to gain from throwing pixels away.
  const isPng = input.toLowerCase().endsWith(".png");
  const quality =
    opts.mode === "lossless" || isPng
      ? ["-lossless", "1", "-compression_level", "6"]
      : ["-lossless", "0", "-quality", "82"];
  return [
    "-y", "-hide_banner", "-loglevel", "error",
    "-i", input,
    "-c:v", "libwebp",
    ...quality,
    "-frames:v", "1",
    output,
  ];
}

function runFfmpeg(args) {
  return new Promise((resolve, reject) => {
    const proc = spawn(FFMPEG, args, { stdio: ["ignore", "ignore", "pipe"] });
    let stderr = "";
    proc.stderr.on("data", (chunk) => (stderr += chunk));
    proc.on("error", reject);
    proc.on("close", (code) =>
      code === 0
        ? resolve()
        : reject(new Error(stderr.trim() || `ffmpeg exited with code ${code}`))
    );
  });
}

// ----------------------------------------------------------------------- s3

// S3_ENDPOINT points the client at an S3-compatible server instead of AWS,
// which is what the local test harness uses.
const s3 = new S3Client({
  region: REGION,
  ...(process.env.S3_ENDPOINT
    ? { endpoint: process.env.S3_ENDPOINT, forcePathStyle: true }
    : {}),
});

const VIDEO_EXT = new Set([".mp4"]);
const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png"]);

async function listFolder(prefix) {
  const objects = [];
  let ContinuationToken;
  do {
    const page = await s3.send(
      new ListObjectsV2Command({ Bucket: BUCKET, Prefix: prefix, ContinuationToken })
    );
    for (const obj of page.Contents ?? []) {
      if (!obj.Key.endsWith("/")) objects.push(obj);
    }
    ContinuationToken = page.NextContinuationToken;
  } while (ContinuationToken);
  return objects;
}

async function download(key, destination) {
  const res = await s3.send(new GetObjectCommand({ Bucket: BUCKET, Key: key }));
  await pipeline(res.Body, createWriteStream(destination));
  return { cacheControl: res.CacheControl };
}

async function upload(key, filePath, contentType, cacheControl) {
  const params = {
    Bucket: BUCKET,
    Key: key,
    Body: createReadStream(filePath),
    ContentType: contentType,
  };
  if (cacheControl) params.CacheControl = cacheControl;
  if (opts.acl) params.ACL = opts.acl;
  await new Upload({ client: s3, params }).done();
}

// --------------------------------------------------------------- cloudfront

/** CloudFront is a global service, so its control plane always lives in us-east-1. */
const cloudfront = new CloudFrontClient({ region: "us-east-1" });

async function resolveDistributionId() {
  const explicit =
    opts["distribution-id"] ?? process.env.CLOUDFRONT_DISTRIBUTION_ID;
  if (explicit) return explicit;

  // Otherwise look for the distribution whose origin is this bucket.
  const res = await cloudfront.send(new ListDistributionsCommand({}));
  const matches = (res.DistributionList?.Items ?? []).filter((dist) =>
    (dist.Origins?.Items ?? []).some((origin) =>
      origin.DomainName?.startsWith(`${BUCKET}.s3`)
    )
  );

  if (matches.length === 0) {
    throw new Error(
      `No CloudFront distribution found with ${BUCKET} as an origin. ` +
        `Pass --distribution-id or set CLOUDFRONT_DISTRIBUTION_ID.`
    );
  }
  if (matches.length > 1) {
    throw new Error(
      `${matches.length} distributions use ${BUCKET} as an origin ` +
        `(${matches.map((d) => d.Id).join(", ")}). Pass --distribution-id.`
    );
  }
  return matches[0].Id;
}

/**
 * Invalidating a long list of paths is billable past 1000 paths a month,
 * while a wildcard counts as one, so collapse large runs to a prefix wildcard.
 */
function invalidationPaths(keys) {
  if (keys.length > 50) return [`/${PREFIX}*`];
  return keys.map((key) => `/${key}`);
}

async function invalidate(keys) {
  const distributionId = await resolveDistributionId();
  const paths = invalidationPaths(keys);

  const res = await cloudfront.send(
    new CreateInvalidationCommand({
      DistributionId: distributionId,
      InvalidationBatch: {
        CallerReference: `convert-media-${Date.now()}`,
        Paths: { Quantity: paths.length, Items: paths },
      },
    })
  );

  console.log(
    `\ninvalidation ${res.Invalidation.Id} created on ${distributionId} ` +
      `for ${paths.length} path${paths.length === 1 ? "" : "s"}`
  );
  console.log("  edges usually catch up within a few minutes.");
}

// -------------------------------------------------------------------- driver

/** Globs stay deliberately simple: * and ? only, matched case-insensitively. */
function globToRegExp(glob) {
  const escaped = glob.replace(/[.+^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`^${escaped.replace(/\*/g, ".*").replace(/\?/g, ".")}$`, "i");
}

const EXCLUDE = opts.exclude.map(globToRegExp);

function isExcluded(key) {
  const relative = key.slice(PREFIX.length);
  return EXCLUDE.some((re) => re.test(relative) || re.test(key));
}

function classify(key) {
  const ext = path.extname(key).toLowerCase();
  if (VIDEO_EXT.has(ext)) return "video";
  if (IMAGE_EXT.has(ext)) return "image";
  return null;
}

function targetKey(key, kind) {
  const ext = kind === "video" ? ".webm" : ".webp";
  return key.slice(0, -path.extname(key).length) + ext;
}

const mb = (bytes) => `${(bytes / 1024 / 1024).toFixed(2)} MB`;

async function convertOne(job, workDir, results) {
  const { key, target, kind, size } = job;
  const label = key.slice(PREFIX.length) || key;
  const localIn = path.join(workDir, `in-${job.index}${path.extname(key)}`);
  const localOut = path.join(workDir, `out-${job.index}${path.extname(target)}`);

  try {
    const { cacheControl } = await download(key, localIn);
    await runFfmpeg(ffmpegArgs(kind, localIn, localOut));
    const outSize = (await stat(localOut)).size;
    const ratio = outSize / size;

    if (opts["skip-larger"] && outSize > size) {
      console.log(
        `  skip  ${label} -> output ${mb(outSize)} is larger than source ${mb(size)}`
      );
      results.skippedLarger.push({ key, size, outSize });
      return;
    }

    await upload(
      target,
      localOut,
      kind === "video" ? "video/webm" : "image/webp",
      cacheControl
    );

    if (opts["delete-originals"]) {
      await s3.send(new DeleteObjectCommand({ Bucket: BUCKET, Key: key }));
    }

    console.log(
      `  ok    ${label} -> ${path.basename(target)}  ` +
        `${mb(size)} -> ${mb(outSize)} (${ratio.toFixed(2)}x)`
    );
    results.converted.push({ key, size, outSize });
  } catch (err) {
    console.error(`  FAIL  ${label}: ${err.message.split("\n").pop()}`);
    results.failed.push({ key, error: err.message });
  } finally {
    await rm(localIn, { force: true });
    await rm(localOut, { force: true });
  }
}

/** Runs `worker` over `items`, at most `limit` at a time. */
async function pool(items, limit, worker) {
  let cursor = 0;
  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      await worker(items[cursor++]);
    }
  });
  await Promise.all(runners);
}

async function main() {
  console.log(`bucket   s3://${BUCKET}/${PREFIX}`);
  console.log(`mode     ${opts.mode}${opts["dry-run"] ? " (dry run)" : ""}`);
  console.log(`ffmpeg   ${FFMPEG ?? "n/a"}\n`);

  const objects = await listFolder(PREFIX);
  if (objects.length === 0) {
    console.log("Nothing found under that prefix. Check the folder name.");
    return;
  }

  const existing = new Set(objects.map((o) => o.Key));
  const jobs = [];
  const other = [];
  const excluded = [];
  const prune = [];
  let alreadyDone = 0;

  for (const obj of objects) {
    const kind = classify(obj.Key);
    if (!kind) {
      if (!/\.(webm|webp)$/i.test(obj.Key)) other.push(obj.Key);
      continue;
    }
    if (isExcluded(obj.Key)) {
      excluded.push(obj.Key);
      continue;
    }
    const target = targetKey(obj.Key, kind);
    if (existing.has(target) && !opts.force) {
      alreadyDone++;
      // Already converted on an earlier run. With --delete-originals there is
      // nothing to re-encode, but the source still needs removing.
      if (opts["delete-originals"]) prune.push({ key: obj.Key, size: obj.Size });
      continue;
    }
    jobs.push({ key: obj.Key, target, kind, size: obj.Size, index: jobs.length });
  }

  // "photo.jpg" and "photo.png" would both become "photo.webp" and silently
  // overwrite one another, so refuse the whole run rather than lose a file.
  const byTarget = new Map();
  for (const job of jobs) {
    byTarget.set(job.target, [...(byTarget.get(job.target) ?? []), job.key]);
  }
  const collisions = [...byTarget].filter(([, sources]) => sources.length > 1);
  if (collisions.length > 0) {
    console.error("Several sources map to the same output file:");
    for (const [target, sources] of collisions) {
      console.error(`  ${target}  <-  ${sources.join(", ")}`);
    }
    console.error("\nRename one of each pair, then re-run.");
    process.exit(1);
  }

  console.log(
    `${objects.length} objects | ${jobs.length} to convert | ` +
      `${alreadyDone} already converted | ${excluded.length} excluded | ` +
      `${other.length} other file types\n`
  );

  if (excluded.length > 0) {
    console.log(`Excluded by ${opts.exclude.map((g) => `"${g}"`).join(", ")}:`);
    for (const key of excluded) console.log(`  -  ${key}`);
    console.log("");
  }

  if (other.length > 0) {
    console.log("Not a convertible type, left untouched:");
    for (const key of other.slice(0, 10)) console.log(`  -  ${key}`);
    if (other.length > 10) console.log(`  -  ...and ${other.length - 10} more`);
    console.log("");
  }

  if (prune.length > 0) {
    const bytes = prune.reduce((sum, p) => sum + p.size, 0);
    console.log(
      `${prune.length} source file(s) already converted, ` +
        `${mb(bytes)} to delete:`
    );
    for (const p of prune.slice(0, 5)) console.log(`  -  ${p.key}`);
    if (prune.length > 5) console.log(`  -  ...and ${prune.length - 5} more`);

    if (opts["dry-run"]) {
      console.log("  (dry run, nothing deleted)\n");
    } else {
      for (const p of prune) {
        await s3.send(new DeleteObjectCommand({ Bucket: BUCKET, Key: p.key }));
      }
      console.log(`  deleted ${prune.length} originals, freed ${mb(bytes)}\n`);
    }
  }

  if (jobs.length === 0) {
    console.log("Nothing to do.");
    return;
  }

  if (opts["dry-run"]) {
    for (const job of jobs) {
      console.log(`  would convert  ${job.key}\n              -> ${job.target}`);
    }
    if (opts.invalidate) {
      const paths = invalidationPaths(jobs.map((job) => job.target));
      console.log(`\n  would invalidate ${paths.length} path(s):`);
      for (const p of paths.slice(0, 5)) console.log(`    ${p}`);
      if (paths.length > 5) console.log(`    ...and ${paths.length - 5} more`);
    }
    return;
  }

  const workDir = await mkdtemp(path.join(tmpdir(), "s3-convert-"));
  const results = { converted: [], failed: [], skippedLarger: [] };

  try {
    await pool(jobs, CONCURRENCY, (job) => convertOne(job, workDir, results));
  } finally {
    await rm(workDir, { recursive: true, force: true });
  }

  const inBytes = results.converted.reduce((sum, r) => sum + r.size, 0);
  const outBytes = results.converted.reduce((sum, r) => sum + r.outSize, 0);

  console.log(`\n${results.converted.length} converted and uploaded`);
  if (opts["delete-originals"] && results.converted.length > 0) {
    console.log(`  ${results.converted.length} originals deleted after upload`);
  }
  if (results.converted.length > 0) {
    console.log(
      `  ${mb(inBytes)} of sources -> ${mb(outBytes)} of output ` +
        `(${(outBytes / inBytes).toFixed(2)}x)`
    );
  }
  if (results.skippedLarger.length > 0) {
    console.log(`${results.skippedLarger.length} skipped for being larger than source`);
  }
  if (results.failed.length > 0) {
    console.log(`${results.failed.length} failed:`);
    for (const f of results.failed) console.log(`  -  ${f.key}`);
    process.exitCode = 1;
  }

  // Uploads already succeeded by this point, so a CloudFront failure is
  // reported without discarding the run.
  if (opts.invalidate && results.converted.length > 0) {
    try {
      await invalidate(results.converted.map((r) => targetKey(r.key, classify(r.key))));
    } catch (err) {
      console.error(`\nUploads succeeded but the invalidation failed: ${err.message}`);
      process.exitCode = 1;
    }
  }
}

main().catch((err) => {
  console.error(`\n${err.name}: ${err.message}`);
  if (err.name === "CredentialsProviderError") {
    console.error(
      "Set AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY / AWS_REGION in .env"
    );
  }
  process.exit(1);
});
