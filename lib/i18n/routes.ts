import type { Locale } from "./locales";

export type PageKey = "home" | "about" | "services" | "team" | "careers" | "contact" | "apply";

export const routeMap: Record<PageKey, Record<Locale, string>> = {
  home: { ms: "/", en: "/en" },
  about: { ms: "/about", en: "/en/about" },
  services: { ms: "/services", en: "/en/services" },
  team: { ms: "/team", en: "/en/team" },
  careers: { ms: "/careers", en: "/en/careers" },
  contact: { ms: "/contact", en: "/en/contact" },
  apply: { ms: "/apply", en: "/en/apply" },
};

export function getRoute(pageKey: PageKey, locale: Locale): string {
  return routeMap[pageKey][locale];
}
