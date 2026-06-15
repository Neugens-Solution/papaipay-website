import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Papaipay | Perunding Kewangan & Henry's Asset Approach",
  description:
    "Papaipay menyediakan pendekatan perundingan kewangan dan aset yang lebih jelas, tersusun dan berpandu melalui Henry's Asset Approach.",
  icons: {
    icon: "/papaipay-icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms">
      <body className={`${inter.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
