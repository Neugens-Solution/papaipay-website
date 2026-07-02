"use client";

import Image from "next/image";
import { Footer as SiteFooter, Header as SiteHeader } from "../../site-components";
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
  ["10+", "Years of Experience"],
  ["80+", "Financial Advisors"],
  ["16,000+", "Customers Helped"],
  ["RM450 Juta", "Assets Under Advice"],
];

function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow?: string; title: string; description: string; light?: boolean }) {
  return <div className="mx-auto max-w-3xl text-center">{eyebrow && <p className={`text-xs font-bold uppercase tracking-[0.28em] ${light ? "text-[#d6b95f]" : "text-brand-700"}`}>{eyebrow}</p>}<h2 className={`mt-4 text-3xl font-bold leading-[1.04] tracking-[-0.045em] md:text-5xl ${light ? "text-white" : "text-slate-950"}`}>{title}</h2><p className={`mt-5 text-base leading-8 md:text-lg ${light ? "text-white/72" : "text-slate-600"}`}>{description}</p></div>;
}

function TeamCard({ member, featured = false }: { member: { name: string; role: string; quote: string; image: string; href?: string }; featured?: boolean }) {
  const cardContent = <><div className="relative aspect-[4/5] overflow-hidden bg-[#edf6f0]"><Image src={member.image} alt={member.name} fill sizes={featured ? "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"} className="object-cover object-top transition duration-500 group-hover:scale-105" /></div><div className={featured ? "p-7" : "p-6"}><div className="mb-5 h-1 w-12 rounded-full bg-[#d6b95f]" /><h3 className={`font-bold leading-tight tracking-[-0.04em] text-slate-950 ${featured ? "text-2xl" : "text-xl"}`}>{member.name}</h3><p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-700">{member.role}</p><p className="mt-4 text-sm italic leading-6 text-slate-500">&ldquo;{member.quote}&rdquo;</p>{member.href && <span className="mt-5 inline-flex rounded-full border border-brand-700/15 bg-brand-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-700 transition group-hover:border-brand-700/35 group-hover:bg-brand-700 group-hover:text-white">View Profile</span>}</div></>;

  if (member.href) {
    return <a href={member.href} className={`group block cursor-pointer overflow-hidden rounded-[1.75rem] border border-emerald-100 bg-white shadow-xl shadow-emerald-950/5 transition duration-300 hover:-translate-y-1.5 hover:border-brand-700/35 hover:shadow-2xl hover:shadow-emerald-950/15 focus:outline-none focus:ring-4 focus:ring-brand-700/15 ${featured ? "md:rounded-[2rem]" : ""}`}>{cardContent}</a>;
  }

  return <article className={`group overflow-hidden rounded-[1.75rem] border border-emerald-100 bg-white shadow-xl shadow-emerald-950/5 transition duration-300 hover:-translate-y-1 hover:border-brand-700/25 hover:shadow-2xl hover:shadow-emerald-950/12 ${featured ? "md:rounded-[2rem]" : ""}`}>{cardContent}</article>;
}

export default function TeamPage() {
  return <main className="min-h-screen bg-[#f7fbf8] text-slate-950"><SiteHeader active="team" locale="en" />
    <section className="relative flex min-h-[190px] items-center justify-center overflow-hidden pt-16 text-center text-white md:min-h-[320px] md:pt-16"><div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero-team.png')" }} /><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,26,14,0.9)_0%,rgba(3,26,14,0.72)_48%,rgba(3,26,14,0.88)_100%)]" /><div className="absolute inset-0 bg-gradient-to-t from-[#031a0e]/82 via-black/10 to-black/30" /><div className="relative mx-auto w-full max-w-7xl px-5 py-8 md:py-16 lg:px-8"><h1 className="text-3xl font-bold leading-[1.05] tracking-[-0.05em] md:text-4xl lg:text-5xl">Our Team</h1></div></section>
    <section className="bg-white px-5 py-16 lg:px-8 lg:py-20"><SectionHeading eyebrow="Meet Our Team" title="The Team Behind Papaipay" description="Papaipay is supported by a professional team committed to helping customers make clearer, more confident and more structured financial decisions." /></section>
    <section className="bg-[#f7fbf8] px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><SectionHeading title="Leadership Team" description="The leadership team helps drive Papaipay’s direction, growth and customer experience." /><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{leadershipTeam.map((member) => <TeamCard key={member.name} member={member} featured />)}</div></div></section>
    <section className="bg-white px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><SectionHeading title="Advisory Team" description="The advisory team helps customers understand options and opportunities that suit their needs." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{advisoryTeam.map((member) => <TeamCard key={member.name} member={member} />)}</div></div></section>
    <section className="bg-[#f7fbf8] px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><SectionHeading title="Operations Team" description="The operations team keeps daily processes running smoothly and the customer experience consistent." /><div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">{operationsTeam.map((member) => <TeamCard key={member.name} member={member} featured />)}</div></div></section>
    <section className="relative overflow-hidden bg-[#02140c] px-5 py-20 text-white lg:px-8 lg:py-24"><div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(31,143,77,0.36),transparent_34%),radial-gradient(circle_at_84%_24%,rgba(214,185,95,0.18),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_24px)]" /><div className="relative mx-auto max-w-7xl"><SectionHeading light title="Our Advisory Network" description="Our experience, expertise and advisory network help more customers make financial decisions with greater confidence." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{networkStats.map(([value, label]) => <div key={label} className="rounded-[1.75rem] border border-white/10 bg-white/10 p-7 text-center shadow-2xl shadow-black/10 backdrop-blur-md"><p className="text-3xl font-extrabold leading-tight tracking-[-0.05em] text-white md:text-4xl">{value}</p><p className="mt-4 text-xs font-extrabold uppercase tracking-[0.2em] text-[#d6b95f]">{label}</p></div>)}</div></div></section>
    <section className="bg-white px-5 py-20 lg:px-8 lg:py-24"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#082314_0%,#0b301d_52%,#031a0e_100%)] p-8 text-center text-white shadow-2xl shadow-emerald-950/20 md:p-14"><div className="absolute inset-0 bg-cover bg-center opacity-[0.1]" style={{ backgroundImage: "url('/hero-team.png')" }} /><div className="absolute inset-0 bg-black/25" /><div className="relative"><h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-[-0.045em] md:text-5xl">Ready to Connect With Our Team?</h2><p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/78">Contact Papaipay to understand suitable financial options based on your situation and needs.</p><a href="/en/contact" className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.12em] text-brand-900 shadow-xl transition hover:-translate-y-0.5 hover:bg-white/90">Contact Us</a></div></div></section>
    <SiteFooter locale="en" /></main>;
}
