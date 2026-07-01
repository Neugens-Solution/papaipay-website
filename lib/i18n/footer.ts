import type { Locale } from "./locales";
import { ctaLabels, getNavigationItems } from "./navigation";
import { getRoute } from "./routes";

export const footerLabels: Record<Locale, { linksHeading: string; socialHeading: string; description: string; copyright: string; legal: { privacy: string; terms: string; sitemap: string } }> = {
  ms: {
    linksHeading: "Pautan",
    socialHeading: "Ikuti Kami",
    description: "Papaipay sentiasa bersedia membantu anda. Sama ada untuk pertanyaan pinjaman, semakan kelayakan, atau maklumat lanjut mengenai perkhidmatan kami.",
    copyright: "© Papaipay. Hak cipta terpelihara.",
    legal: {
      privacy: "Polisi Privasi",
      terms: "Terma & Syarat",
      sitemap: "Peta Laman",
    },
  },
  en: {
    linksHeading: "Links",
    socialHeading: "Follow Us",
    description: "Papaipay is always ready to help you with loan enquiries, eligibility checks, or more information about our services.",
    copyright: "© Papaipay. All rights reserved.",
    legal: {
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      sitemap: "Sitemap",
    },
  },
};

export function getFooterLinks(locale: Locale) {
  return [
    ...getNavigationItems(locale),
    { key: "apply" as const, label: ctaLabels[locale], href: getRoute("apply", locale) },
  ];
}
