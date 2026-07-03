"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { getFooterLinks, footerLabels } from "../lib/i18n/footer";
import { defaultLocale, getAlternateLocale, type Locale } from "../lib/i18n/locales";
import { compactCtaLabels, getNavigationItems, languageLabels } from "../lib/i18n/navigation";
import { getRoute, type PageKey } from "../lib/i18n/routes";

export const socialLinks = [
  ["Facebook", "https://www.facebook.com/papaipay.my"],
  ["Instagram", "https://www.instagram.com/official.papaipay/"],
  ["TikTok", "https://www.tiktok.com/@papaipay.official"],
];

export function BrandLogo({ dark = false }: { dark?: boolean }) {
  return <div className="flex items-center"><Image src="/papaipay-logo-header-02.svg" alt="Papaipay" width={170} height={56} priority className={`h-11 w-auto object-contain md:h-14 ${dark ? "brightness-0 invert" : ""}`} /></div>;
}

export function Header({ active, locale = defaultLocale }: { active?: PageKey; locale?: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navItems = getNavigationItems(locale);
  const applyHref = getRoute("apply", locale);
  const alternateLocale = getAlternateLocale(locale);
  const alternateHref = getRoute(active ?? "home", alternateLocale);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "border-b border-white/30 bg-white/90 shadow-sm shadow-emerald-950/5 backdrop-blur-md" : "border-b border-transparent bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
        <a href={getRoute("home", locale)} aria-label="Papaipay Home"><BrandLogo dark={!(scrolled || open)} /></a>
        <nav className={`hidden items-center gap-7 text-[13px] font-semibold tracking-[-0.01em] lg:flex ${scrolled ? "text-slate-700" : "text-white/90"}`}>
          {navItems.map(({ key, label, href }) => <a key={key} href={href} className={`group relative py-3 transition ${scrolled ? "hover:text-brand-700" : "hover:text-white"}`}><span>{label}</span><span className={`absolute inset-x-0 bottom-1 h-0.5 origin-left rounded-full transition group-hover:scale-x-100 ${key === active ? "scale-x-100" : "scale-x-0"} ${scrolled ? "bg-brand-700" : "bg-white"}`} /></a>)}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={alternateHref} className={`rounded-full border px-4 py-3 text-xs font-extrabold uppercase tracking-[0.08em] transition hover:-translate-y-0.5 ${scrolled ? "border-emerald-200 text-brand-900 hover:border-brand-700 hover:text-brand-700" : "border-white/40 text-white hover:border-white hover:bg-white/10"}`} aria-label={locale === "en" ? "Tukar kepada Bahasa Malaysia" : "Switch to English"}>{languageLabels[alternateLocale]}</a>
          <a href={applyHref} className={`rounded-full px-5 py-3 text-xs font-extrabold uppercase tracking-[0.08em] shadow-lg transition hover:-translate-y-0.5 ${scrolled ? "bg-brand-700 text-white shadow-emerald-900/20 hover:bg-brand-900" : "bg-white text-brand-900 shadow-black/10 hover:bg-white/90"}`}>{compactCtaLabels[locale]}</a>
        </div>
        <button type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)} className={`rounded-2xl border px-4 py-3 text-xs font-black lg:hidden ${scrolled || open ? "border-slate-200 text-slate-800" : "border-white/30 text-white"}`}>{open ? (locale === "en" ? "Close" : "Tutup") : "Menu"}</button>
      </div>
      {open && <div id="mobile-menu" className="border-t border-emerald-100 bg-white px-5 py-5 shadow-xl shadow-emerald-950/10 lg:hidden"><nav className="mx-auto grid max-w-7xl gap-2 text-sm font-extrabold text-slate-800">{navItems.map(({ key, label, href }) => <a key={key} href={href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 transition hover:bg-emerald-50 hover:text-brand-700">{label}</a>)}<a href={alternateHref} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 transition hover:bg-emerald-50 hover:text-brand-700" aria-label={locale === "en" ? "Tukar kepada Bahasa Malaysia" : "Switch to English"}>{languageLabels[alternateLocale]}</a><a href={applyHref} onClick={() => setOpen(false)} className="mt-2 rounded-full bg-brand-700 px-5 py-3 text-center text-xs font-extrabold uppercase tracking-[0.12em] text-white shadow-lg shadow-emerald-950/15">{compactCtaLabels[locale]}</a></nav></div>}
    </header>
  );
}

export function SocialIcon({ name, className = "" }: { name: string; className?: string }) {
  const common = { fill: "currentColor" };
  return <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>{name === "Facebook" && <path {...common} d="M14 8.4V6.7c0-.8.6-1.1 1.1-1.1h1.7V2.5L14.4 2.5c-3 0-4.4 1.8-4.4 4.3v1.6H7v3.5h3V22h3.7V11.9h2.7l.5-3.5H14Z" />}{name === "Instagram" && <><path {...common} d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Z" /><path {...common} d="M12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6ZM17.1 6.6a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" /></>}{name === "TikTok" && <path {...common} d="M17.3 5.6c-.8-.9-1.3-2-1.4-3.2h-3.2v12.7a2.8 2.8 0 1 1-2-2.7V9.1a6 6 0 1 0 5.2 6V8.7a8 8 0 0 0 4.2 1.2V6.7a4.9 4.9 0 0 1-2.8-1.1Z" />}</svg>;
}

export function Footer({ locale = defaultLocale }: { locale?: Locale }) {
  const labels = footerLabels[locale];
  const footerLinks = getFooterLinks(locale);

  return <footer className="bg-[#082314] px-5 py-14 text-white lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4"><div className="md:col-span-2"><a href={getRoute("home", locale)} aria-label="Papaipay Home"><BrandLogo dark /></a><p className="mt-6 max-w-md text-sm leading-6 text-white/60">{labels.description}</p></div><div><h4 className="font-extrabold">{labels.linksHeading}</h4><div className="mt-4 grid gap-2 text-sm text-white/65">{footerLinks.map(({ key, label, href }) => <a key={key} href={href} className="transition hover:text-white">{label}</a>)}</div></div><div><h4 className="font-extrabold">{labels.socialHeading}</h4><div className="mt-4 flex flex-wrap gap-5">{socialLinks.map(([social, href]) => <a key={social} href={href} aria-label={social} className="text-white/65 transition hover:-translate-y-0.5 hover:text-[#d6b95f]"><SocialIcon name={social} className="h-6 w-6" /></a>)}</div></div></div><div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between"><span>{labels.copyright}</span><span className="flex flex-wrap gap-x-4 gap-y-2"><a href={getRoute("privacyPolicy", locale)} className="hover:text-white">{labels.legal.privacy}</a><a href={getRoute("termsAndConditions", locale)} className="hover:text-white">{labels.legal.terms}</a><a href={getRoute("sitemap", locale)} className="hover:text-white">{labels.legal.sitemap}</a></span></div></footer>;
}
