"use client";

import { useEffect, useState } from "react";

const navItems = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Team", "#team"],
  ["Careers", "#careers"],
  ["Contact Us", "/contact"],
];

const socials = ["Facebook", "Instagram", "LinkedIn"];
const contactCards = [
  ["Call Us", "+60 12-345 6789", "Speak with our advisory support team during business hours."],
  ["Email Us", "hello@papaipay.com", "Send your enquiry and we will respond with the next steps."],
  ["Office Hours", "Mon–Fri, 9:00 AM–6:00 PM", "Appointments are encouraged for focused consultation sessions."],
];
const enquiryTypes = ["Financial Advisory", "Debt Consolidation", "SME Solution", "Henry's Asset Approach"];
const trustPoints = [
  ["Confidential Review", "Your information is handled with care before any advisory discussion begins."],
  ["Clear Next Steps", "Our team explains the document checklist and consultation flow upfront."],
  ["Professional Guidance", "Advice is aligned with your current profile, goals and available options."],
];

function BrandLogo({ dark = false }: { dark?: boolean }) {
  return <div className="flex items-center"><img src="/papaipay-logo.svg" alt="Papaipay" className={`h-11 w-auto object-contain md:h-14 ${dark ? "brightness-0 invert" : ""}`} /></div>;
}

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/30 bg-white/75 shadow-sm shadow-emerald-950/5 backdrop-blur-md" : "border-b border-transparent bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
        <a href="/" aria-label="Papaipay Home"><BrandLogo dark={!scrolled} /></a>
        <nav className={`hidden items-center gap-7 text-[13px] font-semibold tracking-[-0.01em] lg:flex ${scrolled ? "text-slate-700" : "text-white/90"}`}>
          {navItems.map(([item, href]) => <a key={item} href={href} className={`group relative py-3 transition ${scrolled ? "hover:text-brand-700" : "hover:text-white"}`}><span>{item}</span><span className={`absolute inset-x-0 bottom-1 h-0.5 origin-left scale-x-0 rounded-full transition group-hover:scale-x-100 ${item === "Contact Us" ? "scale-x-100" : ""} ${scrolled ? "bg-brand-700" : "bg-white"}`} /></a>)}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <button className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${scrolled ? "border-slate-200 bg-white/70 text-slate-700 hover:border-brand-700 hover:text-brand-700" : "border-white/30 bg-white/10 text-white hover:bg-white/15"}`}>BM | EN</button>
          <a href="#contact-form" className={`rounded-full px-5 py-3 text-xs font-extrabold uppercase tracking-[0.08em] shadow-lg transition hover:-translate-y-0.5 ${scrolled ? "bg-brand-700 text-white shadow-emerald-900/20 hover:bg-brand-900" : "bg-white text-brand-900 shadow-black/10 hover:bg-white/90"}`}>Book Consultation</a>
        </div>
        <button className={`rounded-2xl border px-4 py-3 text-xs font-black lg:hidden ${scrolled ? "border-slate-200 text-slate-800" : "border-white/30 text-white"}`}>MENU</button>
      </div>
    </header>
  );
}

function SocialIcon({ name, className = "" }: { name: string; className?: string }) {
  const common = { fill: "currentColor" };
  return <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>{name === "Facebook" && <path {...common} d="M14 8.4V6.7c0-.8.6-1.1 1.1-1.1h1.7V2.5L14.4 2.5c-3 0-4.4 1.8-4.4 4.3v1.6H7v3.5h3V22h3.7V11.9h2.7l.5-3.5H14Z" />}{name === "Instagram" && <><path {...common} d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Z" /><path {...common} d="M12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6ZM17.1 6.6a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" /></>}{name === "LinkedIn" && <><path {...common} d="M5.1 8.6H2V22h3.1V8.6ZM3.6 2A1.8 1.8 0 1 0 3.6 5.6 1.8 1.8 0 0 0 3.6 2ZM22 14.2c0-3.6-1.9-5.9-5-5.9-2 0-3.2 1.1-3.7 2.1V8.6h-3.1V22h3.1v-7.2c0-2 .9-3.3 2.7-3.3 1.6 0 2.5 1.1 2.5 3.2V22H22v-7.8Z" /></>}</svg>;
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return <label className="grid gap-2 text-sm font-extrabold text-slate-800"><span>{label}</span><input type={type} placeholder={placeholder} className="rounded-2xl border border-emerald-100 bg-white px-5 py-4 text-sm font-semibold text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-700 focus:ring-4 focus:ring-brand-700/10" /></label>;
}

function Footer() {
  return <footer className="bg-[#082314] px-5 py-14 text-white lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4"><div className="md:col-span-2"><BrandLogo dark /><p className="mt-6 max-w-md text-sm leading-6 text-white/60">Papaipay sentiasa bersedia membantu anda. Sama ada untuk pertanyaan pinjaman, semakan kelayakan, atau maklumat lanjut mengenai perkhidmatan kami.</p></div><div><h4 className="font-extrabold">Links</h4><div className="mt-4 grid gap-2 text-sm text-white/65"><a href="/about">About</a><a href="/services">Services</a><a href="#team">Team</a><a href="#careers">Careers</a><a href="/contact">Contact Us</a></div></div><div><h4 className="font-extrabold">Follow Us</h4><div className="mt-4 flex flex-wrap gap-5">{socials.map((social) => <a key={social} href="#" aria-label={social} className="text-white/65 transition hover:-translate-y-0.5 hover:text-[#d6b95f]"><SocialIcon name={social} className="h-6 w-6" /></a>)}</div></div></div><div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between"><span>© Papaipay. All rights reserved.</span><span>Privacy Policy · Terms & Conditions · Sitemap</span></div></footer>;
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7fbf8] text-slate-950">
      <Header />
      <section className="relative overflow-hidden bg-[#031a0e] px-5 pt-32 text-white lg:px-8 lg:pt-40">
        <div className="absolute inset-0 bg-cover bg-center opacity-55" style={{ backgroundImage: "url('/hero-contact.png')" }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,26,14,0.96)_0%,rgba(3,26,14,0.84)_46%,rgba(3,26,14,0.38)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(214,185,95,0.18),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-end lg:pb-24">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.26em] text-[#d6b95f] backdrop-blur">Contact Papaipay</p>
            <h1 className="mt-7 text-4xl font-extrabold leading-[1.04] tracking-[-0.055em] md:text-6xl lg:text-7xl">Let’s discuss your financial next step.</h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/78 md:text-lg">Connect with Papaipay for a clear, professional consultation on your financial needs, documentation and advisory options.</p>
          </div>
          <div className="rounded-[2rem] border border-white/12 bg-white/10 p-6 shadow-2xl shadow-black/20 backdrop-blur-md md:p-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.26em] text-[#d6b95f]">Advisory Promise</p>
            <div className="mt-6 grid gap-5">{trustPoints.map(([title, text]) => <div key={title} className="flex gap-4"><span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-sm font-black text-[#d6b95f]">✓</span><div><h3 className="font-extrabold text-white">{title}</h3><p className="mt-1 text-sm leading-6 text-white/66">{text}</p></div></div>)}</div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">{contactCards.map(([title, value, text]) => <article key={title} className="rounded-[1.75rem] border border-emerald-100 bg-white p-7 shadow-xl shadow-emerald-950/5"><p className="text-xs font-extrabold uppercase tracking-[0.24em] text-brand-700">{title}</p><h2 className="mt-4 text-xl font-extrabold tracking-[-0.035em] text-slate-950">{value}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></article>)}</div>
      </section>

      <section id="contact-form" className="bg-white px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-700">Enquiry Form</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.04] tracking-[-0.045em] md:text-5xl">Share your details with our team.</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">Complete the form and a Papaipay advisor will follow up with a structured review process and document guidance.</p>
            <div className="mt-8 rounded-[1.5rem] bg-[#f7fbf8] p-6 text-sm leading-7 text-slate-600">For urgent enquiries, contact us by phone during office hours. All submissions are reviewed before any consultation recommendation is made.</div>
          </div>
          <form className="rounded-[2rem] border border-emerald-100 bg-[#f7fbf8] p-5 shadow-2xl shadow-emerald-950/6 md:p-8">
            <div className="grid gap-5 md:grid-cols-2"><Field label="Full Name" placeholder="Your name" /><Field label="Phone Number" placeholder="+60" type="tel" /><Field label="Email Address" placeholder="you@example.com" type="email" /><label className="grid gap-2 text-sm font-extrabold text-slate-800"><span>Enquiry Type</span><select className="rounded-2xl border border-emerald-100 bg-white px-5 py-4 text-sm font-semibold text-slate-800 outline-none transition focus:border-brand-700 focus:ring-4 focus:ring-brand-700/10">{enquiryTypes.map((type) => <option key={type}>{type}</option>)}</select></label></div>
            <label className="mt-5 grid gap-2 text-sm font-extrabold text-slate-800"><span>Message</span><textarea rows={6} placeholder="Tell us briefly about your current needs." className="resize-none rounded-2xl border border-emerald-100 bg-white px-5 py-4 text-sm font-semibold text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-700 focus:ring-4 focus:ring-brand-700/10" /></label>
            <button type="button" className="mt-7 w-full rounded-full bg-brand-700 px-8 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-white shadow-xl shadow-emerald-950/15 transition hover:-translate-y-0.5 hover:bg-brand-900 md:w-auto">Submit Enquiry</button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
