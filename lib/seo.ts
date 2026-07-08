import type { Metadata } from "next";

import { getRoute, routeMap, type PageKey } from "./i18n/routes";
import type { Locale } from "./i18n/locales";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://papaipay.my";

export const ogImage = {
  url: "/hero-1a.png",
  width: 1600,
  height: 900,
  alt: "Papaipay financial advisory and asset planning",
};

export const metadataBase = new URL(siteUrl);

type PageSeo = {
  title: string;
  description: string;
};

const pageSeo: Record<Locale, Record<PageKey, PageSeo>> = {
  ms: {
    home: {
      title: "Papaipay | Perunding Kewangan & Perancangan Aset",
      description:
        "Papaipay membantu individu dan keluarga mengurus komitmen kewangan, memahami pilihan pembiayaan, dan merancang peluang aset dengan lebih teratur.",
    },
    about: {
      title: "Tentang Papaipay | Perunding Kewangan & Perancangan Aset",
      description:
        "Ketahui pengalaman, pendekatan dan komitmen Papaipay dalam membantu pelanggan membuat keputusan kewangan dan aset dengan lebih jelas.",
    },
    services: {
      title: "Perkhidmatan Papaipay | Penyelesaian Kewangan Berstruktur",
      description:
        "Terokai perkhidmatan Papaipay untuk penyatuan komitmen, pembiayaan peribadi, penyelesaian SME dan perancangan aset berstruktur.",
    },
    team: {
      title: "Pasukan Papaipay | Penasihat Kewangan Berpengalaman",
      description:
        "Kenali pasukan penasihat Papaipay yang membimbing pelanggan dengan pendekatan profesional, telus dan berorientasikan keperluan.",
    },
    careers: {
      title: "Kerjaya di Papaipay | Sertai Pasukan Kami",
      description:
        "Bina kerjaya bersama Papaipay dan sertai pasukan yang membantu individu serta keluarga merancang kewangan dengan lebih yakin.",
    },
    contact: {
      title: "Hubungi Papaipay | Konsultasi Kewangan",
      description:
        "Hubungi Papaipay untuk pertanyaan, konsultasi kewangan dan maklumat lanjut tentang perkhidmatan perancangan kewangan dan aset.",
    },
    apply: {
      title: "Mulakan Semakan Awal | Papaipay",
      description:
        "Hantar maklumat asas anda untuk semakan awal oleh pasukan Papaipay dan fahami pilihan kewangan yang mungkin sesuai.",
    },
    privacyPolicy: {
      title: "Dasar Privasi | Papaipay",
      description:
        "Ketahui bagaimana Papaipay menguruskan maklumat peribadi yang dikongsi melalui laman web ini.",
    },
    termsAndConditions: {
      title: "Terma & Syarat | Papaipay",
      description: "Terma penggunaan laman web dan perkhidmatan Papaipay.",
    },
    sitemap: {
      title: "Peta Laman | Papaipay",
      description: "Peta laman Papaipay untuk membantu pelawat mencari halaman penting laman web.",
    },
  },
  en: {
    home: {
      title: "Papaipay | Financial Advisory & Asset Planning",
      description:
        "Papaipay helps individuals and families manage financial commitments, understand financing options, and plan asset opportunities with greater clarity.",
    },
    about: {
      title: "About Papaipay | Financial Advisory & Asset Planning",
      description:
        "Learn about Papaipay's experience, approach and commitment to helping customers make clearer financial and asset planning decisions.",
    },
    services: {
      title: "Papaipay Services | Structured Financial Solutions",
      description:
        "Explore Papaipay services for commitment consolidation, personal financing, SME solutions and structured asset planning.",
    },
    team: {
      title: "Papaipay Team | Experienced Financial Advisors",
      description:
        "Meet the Papaipay advisory team guiding customers with a professional, transparent and needs-focused approach.",
    },
    careers: {
      title: "Careers at Papaipay | Join Our Team",
      description:
        "Build your career with Papaipay and join a team helping individuals and families plan their finances with greater confidence.",
    },
    contact: {
      title: "Contact Papaipay | Financial Consultation",
      description:
        "Contact Papaipay for enquiries, financial consultations and more information about financial and asset planning services.",
    },
    apply: {
      title: "Request an Initial Review | Papaipay",
      description:
        "Submit your basic details for an initial review by the Papaipay team and understand financial options that may suit your needs.",
    },
    privacyPolicy: {
      title: "Privacy Policy | Papaipay",
      description:
        "Learn how Papaipay manages personal information shared through this website.",
    },
    termsAndConditions: {
      title: "Terms & Conditions | Papaipay",
      description: "Terms for using the Papaipay website and services.",
    },
    sitemap: {
      title: "Sitemap | Papaipay",
      description: "Papaipay sitemap to help website visitors find important pages.",
    },
  },
};

export const seoPageKeys = Object.keys(routeMap) as PageKey[];

export function absoluteUrl(path: string) {
  return new URL(path, metadataBase).toString();
}

export function createPageMetadata(pageKey: PageKey, locale: Locale): Metadata {
  const route = getRoute(pageKey, locale);
  const bmRoute = getRoute(pageKey, "ms");
  const enRoute = getRoute(pageKey, "en");
  const seo = pageSeo[locale][pageKey];

  return {
    metadataBase,
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: route,
      languages: {
        "ms-MY": bmRoute,
        ms: bmRoute,
        en: enRoute,
        "x-default": bmRoute,
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: route,
      siteName: "Papaipay",
      locale: locale === "ms" ? "ms_MY" : "en_US",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [ogImage.url],
    },
  };
}

export function getSitemapRoutes() {
  return seoPageKeys.flatMap((pageKey) => [
    { pageKey, locale: "ms" as const, path: getRoute(pageKey, "ms") },
    { pageKey, locale: "en" as const, path: getRoute(pageKey, "en") },
  ]);
}
