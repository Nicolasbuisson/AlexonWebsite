# CLAUDE.md

## Converting media in the S3 bucket

Media lives in the `alexonmedia` S3 bucket and is served through CloudFront
(`https://d128kbp85lo7cj.cloudfront.net/...`). Raw uploads (`.mp4`, `.jpg`,
`.jpeg`, `.png`) are converted with [scripts/convert-media.mjs](scripts/convert-media.mjs),
which writes `.webm` / `.webp` next to the originals.

Always run with `--mode web --video-crf 40`:

```
npm run convert-media -- <folder> --mode web --video-crf 40 --skip-larger
```

- The script defaults to `--mode lossless`. Do not use it: re-encoding an
  already-lossy MP4 or JPEG losslessly makes the output bigger, not smaller.
- `web` mode encodes JPEG as lossy WebP (quality 82). PNG stays lossless in
  both modes, so client logos are fine with the same command.
- CRF 40 suits the short, muted grid-preview loops. Audio is dropped by default,
  so pass `--keep-audio` if a video needs sound.
- `--skip-larger` stops an output that's bigger than its source from being uploaded.

Workflow:

1. Dry run first (`--dry-run`) to check that only the expected files are picked up.
2. Run the conversion. Leave the originals in place until the user confirms.
   Then remove them with `npm run convert-media -- <folder> --delete-originals`,
   which deletes sources that already have a converted file and re-encodes nothing.
3. A new extension means a new cache key, so `--invalidate` is only needed when
   overwriting files that already exist (`--force`).

Folder conventions:

- `clientLogos/<Name>.webp`
- `productions/<project>/preview.webm`, the grid video preview (`gridVideoPreview`)
- `productions/<project>/stills/<n>.webp`

These URLs are referenced from [src/resources/projects.json](src/resources/projects.json).
