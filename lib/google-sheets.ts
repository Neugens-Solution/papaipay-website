import type { FormSubmission } from "./form-submission";

const REQUEST_TIMEOUT_MS = 15_000;
const RESPONSE_PREVIEW_LIMIT = 500;

type AppsScriptResult = {
  ok?: unknown;
  success?: unknown;
  error?: unknown;
  message?: unknown;
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

function responsePreview(value: string) {
  return value.replace(/\s+/g, " ").trim().slice(0, RESPONSE_PREVIEW_LIMIT);
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
    ) {
      const appMessage =
        typeof result?.error === "string"
          ? result.error
          : typeof result?.message === "string"
            ? result.message
            : "";
      const preview = responsePreview(responseText);

      console.error("Google Sheets web app rejected submission.", {
        status: response.status,
        contentType: response.headers.get("content-type") || "",
        redirected: response.redirected,
        finalHost: new URL(response.url).hostname,
        appMessage,
        responsePreview: preview,
      });

      throw new Error(
        `Google Sheets submission failed (HTTP ${response.status}${appMessage ? `: ${appMessage}` : ""}).`,
      );
    }
  } finally {
    clearTimeout(timeout);
  }
}
