"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Footer as SiteFooter, Header as SiteHeader } from "../site-components";
const navItems = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Team", "/team"],
  ["Careers", "/careers"],
  ["Contact Us", "/contact"],
];

const socialLinks = [
  ["Facebook", "https://www.facebook.com/papaipay.my"],
  ["Instagram", "https://www.instagram.com/official.papaipay/"],
  ["TikTok", "https://www.tiktok.com/@papaipay.official"],
];

const leadershipTeam = [
  { name: "VICKI O", role: "Manager", quote: "Learn & Live", image: "/vicky-o.jpg" },
  { name: "KENNETH", role: "Pay Advisor", quote: "Lead With Purpose", image: "/kenneth.jpg" },
  { name: "NURUL IZANIS (ANIS)", role: "Team Leader", quote: "Ex-Banker", image: "/nurul-izanis.jpg", href: "/anis" },
  { name: "BRYAN", role: "Team Leader", quote: "You Only Live Once", image: "/bryan.jpg" },
];

const advisoryTeam = [
  { name: "ZANE", role: "Plan Advisor", quote: "Daily Improve Infinity", image: "/zane.jpg" },
  { name: "MANDY", role: "Plan Advisor", quote: "Professional & Problem Solve", image: "/mandy.jpg" },
  { name: "YI JUN", role: "Plan Advisor", quote: "Everything in Professional", image: "/yi-jun.jpg" },
  { name: "ASHIKIN", role: "Plan Advisor", quote: "Keep Moving Forward", image: "/ashikin.jpg" },
  { name: "FATEN", role: "Plan Advisor", quote: "Positive Vibe", image: "/faten.jpg", href: "/kakros" },
  { name: "NURUL", role: "Plan Advisor", quote: "Embrace Your Journey", image: "/nurul.jpg" },
  { name: "ALEX", role: "Plan Advisor", quote: "Focus and Win", image: "/alex.jpg" },
  { name: "SYAHYRAN", role: "Plan Advisor", quote: "Calm, Principled, Mysterious", image: "/shahyran.jpg" },
  { name: "IZZAH", role: "Plan Advisor", quote: "Focus and Win", image: "/izzah.jpg" },
  { name: "JEREMY", role: "Plan Advisor", quote: "Rise & Thrive", image: "/jeremy.jpg" },
];

const operationsTeam = [
  { name: "SYAIFUL", role: "Operation Marketing", quote: "Move With Momentum", image: "/syaiful.jpg" },
  { name: "JENEY TEE", role: "Admin", quote: "Friendly", image: "/jeney-tee.jpg" },
  { name: "IDAYU", role: "Operation Admin", quote: "Sabar, Sopan, Senyum", image: "/idayu.jpg" },
];

const networkStats = [
  ["10+", "Years Experience"],
  ["80+", "Financial Advisors"],
  ["16,000+", "Customers Served"],
  ["RM450 Mil", "Assets Under Advisory"],
];

function BrandLogo({ dark = false }: { dark?: boolean }) {
  return <div className="flex items-center"><img src="/papaipay-logo.svg" alt="Papaipay" className={`h-11 w-auto object-contain md:h-14 ${dark ? "brightness-0 invert" : ""}`} /></div>;
}

function SocialIcon({ name, className = "" }: { name: string; className?: string }) {
  const common = { fill: "currentColor" };
  return <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>{name === "Facebook" && <path {...common} d="M14 8.4V6.7c0-.8.6-1.1 1.1-1.1h1.7V2.5L14.4 2.5c-3 0-4.4 1.8-4.4 4.3v1.6H7v3.5h3V22h3.7V11.9h2.7l.5-3.5H14Z" />}{name === "Instagram" && <><path {...common} d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Z" /><path {...common} d="M12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6ZM17.1 6.6a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" /></>}{name === "TikTok" && <path {...common} d="M17.3 5.6c-.8-.9-1.3-2-1.4-3.2h-3.2v12.7a2.8 2.8 0 1 1-2-2.7V9.1a6 6 0 1 0 5.2 6V8.7a8 8 0 0 0 4.2 1.2V6.7a4.9 4.9 0 0 1-2.8-1.1Z" />}</svg>;
}

function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow?: string; title: string; description: string; light?: boolean }) {
  return <div className="mx-auto max-w-3xl text-center">{eyebrow && <p className={`text-xs font-extrabold uppercase tracking-[0.28em] ${light ? "text-[#d6b95f]" : "text-brand-700"}`}>{eyebrow}</p>}<h2 className={`mt-4 text-3xl font-extrabold leading-[1.04] tracking-[-0.045em] md:text-5xl ${light ? "text-white" : "text-slate-950"}`}>{title}</h2><p className={`mt-5 text-base leading-8 md:text-lg ${light ? "text-white/72" : "text-slate-600"}`}>{description}</p></div>;
}

function TeamCard({ member, featured = false }: { member: { name: string; role: string; quote: string; image: string; href?: string }; featured?: boolean }) {
  const cardContent = <><div className="relative aspect-[4/5] overflow-hidden bg-[#edf6f0]"><Image src={member.image} alt={member.name} fill sizes={featured ? "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"} className="object-cover object-top transition duration-500 group-hover:scale-105" /></div><div className={featured ? "p-7" : "p-6"}><div className="mb-5 h-1 w-12 rounded-full bg-[#d6b95f]" /><h3 className={`font-extrabold leading-tight tracking-[-0.04em] text-slate-950 ${featured ? "text-2xl" : "text-xl"}`}>{member.name}</h3><p className="mt-2 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-700">{member.role}</p><p className="mt-4 text-sm italic leading-6 text-slate-500">&ldquo;{member.quote}&rdquo;</p>{member.href && <span className="mt-5 inline-flex rounded-full border border-brand-700/15 bg-brand-50 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand-700 transition group-hover:border-brand-700/35 group-hover:bg-brand-700 group-hover:text-white">View Profile</span>}</div></>;

  if (member.href) {
    return <a href={member.href} className={`group block cursor-pointer overflow-hidden rounded-[1.75rem] border border-emerald-100 bg-white shadow-xl shadow-emerald-950/5 transition duration-300 hover:-translate-y-1.5 hover:border-brand-700/35 hover:shadow-2xl hover:shadow-emerald-950/15 focus:outline-none focus:ring-4 focus:ring-brand-700/15 ${featured ? "md:rounded-[2rem]" : ""}`}>{cardContent}</a>;
  }

  return <article className={`group overflow-hidden rounded-[1.75rem] border border-emerald-100 bg-white shadow-xl shadow-emerald-950/5 transition duration-300 hover:-translate-y-1 hover:border-brand-700/25 hover:shadow-2xl hover:shadow-emerald-950/12 ${featured ? "md:rounded-[2rem]" : ""}`}>{cardContent}</article>;
}

export default function TeamPage() {
  return <main className="min-h-screen bg-[#f7fbf8] text-slate-950"><SiteHeader active="Team" />
    <section className="relative flex min-h-[190px] items-center justify-center overflow-hidden pt-16 text-center text-white md:min-h-[320px] md:pt-16"><div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero-team.png')" }} /><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,26,14,0.9)_0%,rgba(3,26,14,0.72)_48%,rgba(3,26,14,0.88)_100%)]" /><div className="absolute inset-0 bg-gradient-to-t from-[#031a0e]/82 via-black/10 to-black/30" /><div className="relative mx-auto w-full max-w-7xl px-5 py-8 md:py-16 lg:px-8"><h1 className="text-3xl font-extrabold leading-[1.05] tracking-[-0.05em] md:text-4xl lg:text-5xl">Our Team</h1></div></section>
    <section className="bg-white px-5 py-16 lg:px-8 lg:py-20"><SectionHeading eyebrow="MEET THE PEOPLE" title="The Team Behind Papaipay" description="Papaipay disokong oleh pasukan profesional yang komited membantu pelanggan membuat keputusan kewangan yang lebih jelas, lebih yakin dan lebih tersusun." /></section>
    <section className="bg-[#f7fbf8] px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><SectionHeading title="Leadership Team" description="Pasukan kepimpinan yang membantu memacu hala tuju, pertumbuhan dan pengalaman pelanggan Papaipay." /><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{leadershipTeam.map((member) => <TeamCard key={member.name} member={member} featured />)}</div></div></section>
    <section className="bg-white px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><SectionHeading title="Advisory Team" description="Pasukan penasihat yang membantu pelanggan memahami pilihan dan peluang yang sesuai dengan keperluan mereka." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{advisoryTeam.map((member) => <TeamCard key={member.name} member={member} />)}</div></div></section>
    <section className="bg-[#f7fbf8] px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><SectionHeading title="Operations Team" description="Pasukan operasi yang memastikan proses harian berjalan lancar dan pengalaman pelanggan kekal konsisten." /><div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">{operationsTeam.map((member) => <TeamCard key={member.name} member={member} featured />)}</div></div></section>
    <section className="relative overflow-hidden bg-[#02140c] px-5 py-20 text-white lg:px-8 lg:py-24"><div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(31,143,77,0.36),transparent_34%),radial-gradient(circle_at_84%_24%,rgba(214,185,95,0.18),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_24px)]" /><div className="relative mx-auto max-w-7xl"><SectionHeading light title="Our Advisory Network" description="Pengalaman, kepakaran dan rangkaian penasihat kami membantu lebih ramai pelanggan membuat keputusan kewangan dengan lebih yakin." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{networkStats.map(([value, label]) => <div key={label} className="rounded-[1.75rem] border border-white/10 bg-white/10 p-7 text-center shadow-2xl shadow-black/10 backdrop-blur-md"><p className="text-3xl font-extrabold leading-tight tracking-[-0.05em] text-white md:text-4xl">{value}</p><p className="mt-4 text-xs font-extrabold uppercase tracking-[0.2em] text-[#d6b95f]">{label}</p></div>)}</div></div></section>
    <section className="bg-white px-5 py-20 lg:px-8 lg:py-24"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#082314_0%,#0b301d_52%,#031a0e_100%)] p-8 text-center text-white shadow-2xl shadow-emerald-950/20 md:p-14"><div className="absolute inset-0 bg-cover bg-center opacity-[0.1]" style={{ backgroundImage: "url('/hero-team.png')" }} /><div className="absolute inset-0 bg-black/25" /><div className="relative"><h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.045em] md:text-5xl">Ready To Speak With Our Team?</h2><p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/78">Connect with Papaipay and discover financial solutions tailored to your goals.</p><a href="/contact" className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-900 shadow-xl transition hover:-translate-y-0.5 hover:bg-white/90">Contact Us</a></div></div></section>
    <SiteFooter /></main>;
}
