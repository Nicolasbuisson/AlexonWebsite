import type { NextRequest } from "next/server";

// Instagram long-lived access tokens are valid for 60 days and can be refreshed
// whenever they are between 24 hours and 60 days old. A refresh returns a token
// valid for another 60 days starting from the moment of the refresh, and the
// previous token keeps working until its own original expiry.
// A token left unrefreshed for 60 days expires permanently and can only be
// replaced by redoing the OAuth flow by hand, so this must not silently stop.
//
// Invoked by the cron defined in vercel.json (the 1st and 15th of each month),
// so the token is never older than ~15 days and a single missed invocation
// still leaves ~45 days of slack.
//
// Flow: refresh with Instagram -> write the new value back onto the Vercel
// project env vars -> trigger a deploy hook so the running deployment picks it
// up. Because the old token stays valid, the redeploy is never time critical.
//
// The Vercel credentials are read straight from process.env here rather than
// from src/config/config.tsx: that module is imported into the component tree,
// and these are server-only secrets that should never be reachable from there.

export const dynamic = "force-dynamic";
export const maxDuration = 30;

const VERCEL_API = "https://api.vercel.com";
const DAY_MS = 86_400_000;

// Vercel documents cron delivery as best effort and warns that the same
// scheduled run can occasionally fire more than once, so refuse to refresh a
// token that was just rotated. Keeps duplicate invocations from stacking up
// redeploys.
const MIN_AGE_BEFORE_REFRESH_DAYS = 7;

const TOKEN_KEY = "INSTA_ACCESS_TOKEN";
const REFRESHED_AT_KEY = "INSTA_TOKEN_REFRESHED_AT";

interface VercelEnvEntry {
  id: string;
  key: string;
}

/** Never log a token, only enough of it to tell two tokens apart in the logs. */
const fingerprint = (token: string) =>
  `${token.slice(0, 6)}…${token.slice(-4)} (len ${token.length})`;

const json = (body: unknown, status: number) =>
  Response.json(body, { status, headers: { "cache-control": "no-store" } });

export async function GET(request: NextRequest) {
  // Vercel sends the value of CRON_SECRET as a bearer token when it invokes a
  // cron job, which is what keeps this route from being publicly callable.
  const cronSecret = process.env.CRON_SECRET;
  const authHeader = request.headers.get("authorization");

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return json({ ok: false, error: "unauthorized" }, 401);
  }

  const instaToken = process.env.INSTA_ACCESS_TOKEN;
  const vercelApiToken = process.env.VERCEL_API_TOKEN;
  const deployHookURL = process.env.VERCEL_DEPLOY_HOOK_URL;
  // Exposed automatically as a system env var, at build time and at runtime.
  const projectId = process.env.VERCEL_PROJECT_ID;
  // Only needed when the project sits under a Vercel team rather than a
  // personal account. Vercel does not expose this one automatically.
  const teamId = process.env.VERCEL_TEAM_ID;

  const missing = Object.entries({
    INSTA_ACCESS_TOKEN: instaToken,
    VERCEL_API_TOKEN: vercelApiToken,
    VERCEL_DEPLOY_HOOK_URL: deployHookURL,
    VERCEL_PROJECT_ID: projectId,
  })
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (!instaToken || !vercelApiToken || !deployHookURL || !projectId) {
    console.error(`[insta-token] missing env vars: ${missing.join(", ")}`);
    return json({ ok: false, error: "misconfigured", missing }, 500);
  }

  const refreshedAt = process.env[REFRESHED_AT_KEY];
  if (refreshedAt) {
    const ageMs = Date.now() - Date.parse(refreshedAt);
    if (
      Number.isFinite(ageMs) &&
      ageMs < MIN_AGE_BEFORE_REFRESH_DAYS * DAY_MS
    ) {
      console.log(
        `[insta-token] skipped, token was refreshed ${Math.floor(
          ageMs / DAY_MS
        )} day(s) ago`
      );
      return json({ ok: true, refreshed: false, reason: "too recent" }, 200);
    }
  }

  // 1. Ask Instagram for a fresh 60 day token.
  const refreshURL = new URL(
    "https://graph.instagram.com/refresh_access_token"
  );
  refreshURL.searchParams.set("grant_type", "ig_refresh_token");
  refreshURL.searchParams.set("access_token", instaToken);

  const refreshRes = await fetch(refreshURL, { cache: "no-store" });
  const refreshBody = await refreshRes.json().catch(() => null);
  const newToken: unknown = refreshBody?.access_token;

  if (!refreshRes.ok || typeof newToken !== "string" || !newToken) {
    console.error(
      `[insta-token] refresh failed (${refreshRes.status}): ${
        refreshBody?.error?.message ?? "unexpected response shape"
      }`
    );
    return json({ ok: false, error: "instagram refresh failed" }, 502);
  }

  const expiresInSeconds = Number(refreshBody?.expires_in);
  const expiresAt = Number.isFinite(expiresInSeconds)
    ? new Date(Date.now() + expiresInSeconds * 1000).toISOString()
    : null;

  console.log(
    `[insta-token] refreshed ${fingerprint(instaToken)} -> ${fingerprint(
      newToken
    )}, expires ${expiresAt ?? "unknown"}`
  );

  // 2. Persist it on the Vercel project so it survives the next build.
  const query = teamId ? `?teamId=${encodeURIComponent(teamId)}` : "";
  const authHeaders = {
    Authorization: `Bearer ${vercelApiToken}`,
    "Content-Type": "application/json",
  };

  const listRes = await fetch(
    `${VERCEL_API}/v9/projects/${projectId}/env${query}`,
    { headers: authHeaders, cache: "no-store" }
  );

  if (!listRes.ok) {
    console.error(
      `[insta-token] could not list project env vars (${listRes.status})`
    );
    return json({ ok: false, error: "vercel env list failed" }, 502);
  }

  const { envs }: { envs?: VercelEnvEntry[] } = await listRes.json();

  const upsertEnvVar = async (key: string, value: string) => {
    const existing = envs?.find((env) => env.key === key);

    // Every field in the PATCH body is optional, so sending only `value`
    // leaves the variable's existing targets and type untouched.
    const res = existing
      ? await fetch(
          `${VERCEL_API}/v9/projects/${projectId}/env/${existing.id}${query}`,
          {
            method: "PATCH",
            headers: authHeaders,
            body: JSON.stringify({ value }),
            cache: "no-store",
          }
        )
      : await fetch(`${VERCEL_API}/v10/projects/${projectId}/env${query}`, {
          method: "POST",
          headers: authHeaders,
          body: JSON.stringify({
            key,
            value,
            type: "encrypted",
            target: ["production", "preview", "development"],
          }),
          cache: "no-store",
        });

    if (!res.ok) {
      throw new Error(
        `${existing ? "PATCH" : "POST"} ${key} failed (${res.status})`
      );
    }
  };

  try {
    await upsertEnvVar(TOKEN_KEY, newToken);
    await upsertEnvVar(REFRESHED_AT_KEY, new Date().toISOString());
  } catch (error) {
    console.error(`[insta-token] ${(error as Error).message}`);
    // The token currently in use is still valid, so the next scheduled run
    // simply refreshes again from it. Nothing to unwind here.
    return json({ ok: false, error: "vercel env update failed" }, 502);
  }

  // 3. Redeploy, otherwise the new value sits in the project settings while the
  // running deployment keeps serving with the token baked in at its own build.
  const deployRes = await fetch(deployHookURL, {
    method: "POST",
    cache: "no-store",
  });

  if (!deployRes.ok) {
    console.error(`[insta-token] deploy hook failed (${deployRes.status})`);
    return json(
      { ok: false, error: "deploy hook failed", envUpdated: true },
      502
    );
  }

  console.log("[insta-token] env vars updated and redeploy triggered");

  return json({ ok: true, refreshed: true, expiresAt }, 200);
}
