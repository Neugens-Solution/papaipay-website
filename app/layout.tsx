import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { metadataBase } from "../lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const heading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Papaipay | Perunding Kewangan & Perancangan Aset",
    template: "%s",
  },
  description:
    "Papaipay membantu individu dan keluarga mengurus komitmen kewangan, memahami pilihan pembiayaan, dan merancang peluang aset dengan lebih teratur.",
  icons: {
    icon: "/papaipay-icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms">
      <body className={`${inter.variable} ${heading.variable}`}>{children}</body>
    </html>
  );
}
