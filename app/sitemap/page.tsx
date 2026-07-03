import type { Metadata } from "next";

import { Footer as SiteFooter, Header as SiteHeader } from "../site-components";
import { createPageMetadata } from "../../lib/seo";

export const metadata: Metadata = createPageMetadata("sitemap", "ms");

const sitemapGroups = [
  {
    title: "Laman Utama",
    links: [
      ["Utama", "/"],
      ["Tentang Kami", "/about"],
      ["Perkhidmatan", "/services"],
      ["Pasukan Kami", "/team"],
      ["Kerjaya", "/careers"],
      ["Hubungi Kami", "/contact"],
      ["Semak Sekarang", "/apply"],
    ],
  },
  {
    title: "Maklumat Laman Web",
    links: [
      ["Dasar Privasi", "/privacy-policy"],
      ["Terma & Syarat", "/terms-and-conditions"],
      ["Peta Laman", "/sitemap"],
    ],
  },
  {
    title: "English Pages",
    links: [
      ["English Home", "/en"],
      ["About", "/en/about"],
      ["Services", "/en/services"],
      ["Team", "/en/team"],
      ["Careers", "/en/careers"],
      ["Contact", "/en/contact"],
      ["Get Started", "/en/apply"],
      ["Privacy Policy", "/en/privacy-policy"],
      ["Terms & Conditions", "/en/terms-and-conditions"],
      ["Sitemap", "/en/sitemap"],
    ],
  },
] as const;

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-[#f7fbf8] text-slate-950">
      <SiteHeader active="sitemap" />

      <section className="relative flex min-h-[190px] items-center justify-center overflow-hidden pt-16 text-center text-white md:min-h-[320px] md:pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,185,95,0.26),transparent_34%),linear-gradient(135deg,#031a0e_0%,#0d3b24_55%,#082314_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031a0e]/70 via-transparent to-black/20" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-8 md:py-16 lg:px-8">
          <h1 className="text-3xl font-bold leading-[1.05] tracking-[-0.05em] md:text-4xl lg:text-5xl">Peta Laman</h1>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-950/5 md:p-10">
          <div className="grid gap-9 md:grid-cols-2">
            {sitemapGroups.map((group) => (
              <section key={group.title} className="rounded-[1.5rem] border border-emerald-100 p-5">
                <h2 className="text-xl font-extrabold tracking-[-0.03em] text-brand-900">{group.title}</h2>
                <div className="mt-5 grid gap-3 text-base font-semibold text-slate-700">
                  {group.links.map(([label, href]) => (
                    <a key={href} href={href} className="rounded-2xl px-3 py-2 transition hover:bg-emerald-50 hover:text-brand-700">{label}</a>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
