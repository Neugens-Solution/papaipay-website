import type { FormSubmission } from "./form-submission";

const REQUEST_TIMEOUT_MS = 15_000;

type AppsScriptResult = {
  ok?: unknown;
  success?: unknown;
};

function env(name: string) {
  return process.env[name]?.trim() || "";
}

function isValidAppsScriptUrl(value: string) {
  try {
    const url = new URL(value);
    return (
      url.protocol === "https:" &&
      url.hostname === "script.google.com" &&
      url.pathname.startsWith("/macros/s/") &&
      url.pathname.endsWith("/exec")
    );
  } catch {
    return false;
  }
}

function getGoogleSheetsConfig() {
  const url = env("GOOGLE_SHEETS_WEB_APP_URL");
  const secret = env("GOOGLE_SHEETS_FORM_SECRET");

  if (!url || !secret || !isValidAppsScriptUrl(url)) return null;
  return { url, secret };
}

function languageFromSource(source: string) {
  return /(^|[\s:(])\/en(?:\/|$|[?#])/.test(source.toLowerCase())
    ? "EN"
    : "BM";
}

export function assertGoogleSheetsConfig() {
  return Boolean(getGoogleSheetsConfig());
}

export async function saveGoogleSheetsSubmission(
  submission: FormSubmission,
) {
  const config = getGoogleSheetsConfig();
  if (!config)
    throw new Error("Google Sheets configuration is incomplete or invalid.");

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(config.url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: config.secret,
        ...submission,
        language: languageFromSource(submission.source),
      }),
      redirect: "follow",
      cache: "no-store",
      signal: controller.signal,
    });

    const responseText = await response.text();
    let result: AppsScriptResult | null = null;

    if (responseText) {
      try {
        const parsed = JSON.parse(responseText) as unknown;
        if (parsed && typeof parsed === "object")
          result = parsed as AppsScriptResult;
      } catch {
        result = null;
      }
    }

    if (
      !response.ok ||
      !result ||
      (result.ok !== true && result.success !== true)
    )
      throw new Error("Google Sheets submission failed.");
  } finally {
    clearTimeout(timeout);
  }
}
