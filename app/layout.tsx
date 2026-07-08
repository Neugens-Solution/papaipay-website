import type { Metadata, Viewport } from "next";
import "./globals.css";
import { metadataBase, ogImage } from "../lib/seo";
import { ComplaintWidget } from "./complaint-widget";

export const viewport: Viewport = {
  themeColor: "#06321c",
};

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Papaipay | Perunding Kewangan & Perancangan Aset",
    template: "%s",
  },
  description:
    "Papaipay membantu individu dan keluarga mengurus komitmen kewangan, memahami pilihan pembiayaan, dan merancang peluang aset dengan lebih teratur.",
  openGraph: {
    title: "Papaipay | Perunding Kewangan & Perancangan Aset",
    description:
      "Papaipay membantu individu dan keluarga mengurus komitmen kewangan, memahami pilihan pembiayaan, dan merancang peluang aset dengan lebih teratur.",
    url: "/",
    siteName: "Papaipay",
    locale: "ms_MY",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Papaipay | Perunding Kewangan & Perancangan Aset",
    description:
      "Papaipay membantu individu dan keluarga mengurus komitmen kewangan, memahami pilihan pembiayaan, dan merancang peluang aset dengan lebih teratur.",
    images: [ogImage.url],
  },
  icons: {
    icon: [
      { url: "/papaipay-icon.svg", type: "image/svg+xml" },
    ],
    apple: "/papaipay-icon.svg",
    shortcut: "/papaipay-icon.svg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms">
      <body>{children}<ComplaintWidget /></body>
    </html>
  );
}
