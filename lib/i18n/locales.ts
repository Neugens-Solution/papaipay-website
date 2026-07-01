export const locales = ["ms", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ms";

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "ms" ? "en" : "ms";
}
