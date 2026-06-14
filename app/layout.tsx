import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Papaipay | Perunding Kewangan & Henry's Asset Approach",
  description:
    "Papaipay menyediakan pendekatan perundingan kewangan dan aset yang lebih jelas, tersusun dan berpandu melalui Henry's Asset Approach.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms">
      <body>{children}</body>
    </html>
  );
}
