import type { Locale } from "./locales";
import { getRoute, type PageKey } from "./routes";

export const navigationLabels: Record<Locale, Record<Exclude<PageKey, "apply">, string>> = {
  ms: {
    home: "Utama",
    about: "Tentang Kami",
    services: "Perkhidmatan",
    team: "Pasukan",
    careers: "Kerjaya",
    contact: "Hubungi Kami",
  },
  en: {
    home: "Home",
    about: "About Us",
    services: "Services",
    team: "Team",
    careers: "Careers",
    contact: "Contact Us",
  },
};

export const ctaLabels: Record<Locale, string> = {
  ms: "MULAKAN SEMAKAN AWAL",
  en: "START INITIAL REVIEW",
};

export const languageLabels: Record<Locale, string> = {
  ms: "BM",
  en: "EN",
};

export const navigationKeys = ["home", "about", "services", "team", "careers", "contact"] as const;

export function getNavigationItems(locale: Locale) {
  return navigationKeys.map((key) => ({
    key,
    label: navigationLabels[locale][key],
    href: getRoute(key, locale),
  }));
}
