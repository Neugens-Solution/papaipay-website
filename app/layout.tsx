import type { Metadata } from "next";
import "./globals.css";
import { metadataBase } from "../lib/seo";

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
      <body>{children}</body>
    </html>
  );
}
