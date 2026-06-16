"use client";

import { useEffect, useState } from "react";

const navItems = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Team", "#team"],
  ["Careers", "#careers"],
  ["Contact Us", "/contact"],
];

const contactCards = [
  {
    title: "Call Us",
    value: "03-6279 0080",
    description: "Speak with our team during office hours for enquiries and appointment support.",
  },
  {
    title: "Email Us",
    value: "papaipay.my@gmail.com",
    description: "Send your enquiry and our team will review it before getting back to you.",
  },
  {
    title: "Visit Us",
    value: "C-1, 5, Jalan Dataran SD 1, Bandar Sri Damansara, 52200 Kepong, Wilayah Persekutuan Kuala Lumpur",
    description: "Visit our office for consultations and scheduled appointments.",
  },
  {
    title: "Office Hours",
    value: "Monday – Friday\n10:00 AM – 6:00 PM\n\nSaturday – Sunday\nClosed",
    description: "Appointments are encouraged so our team can prepare for your consultation.",
  },
];

const enquiryTypes = [
  "Penyatuan Komitmen Kewangan",
  "Pembiayaan Peribadi",
  "Penyelesaian SME",
  "Henry's Asset Approach",
  "General Enquiry",
];

const socialLinks = [
  ["Facebook", "https://www.facebook.com/papaipay.my"],
  ["Instagram", "https://www.instagram.com/official.papaipay/"],
  ["TikTok", "https://www.tiktok.com/@papaipay.official"],
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
          <a href="tel:0362790080" className={`rounded-full px-5 py-3 text-xs font-extrabold uppercase tracking-[0.08em] shadow-lg transition hover:-translate-y-0.5 ${scrolled ? "bg-brand-700 text-white shadow-emerald-900/20 hover:bg-brand-900" : "bg-white text-brand-900 shadow-black/10 hover:bg-white/90"}`}>Call Us Now</a>
        </div>
        <button className={`rounded-2xl border px-4 py-3 text-xs font-black lg:hidden ${scrolled ? "border-slate-200 text-slate-800" : "border-white/30 text-white"}`}>MENU</button>
      </div>
    </header>
  );
}

function SocialIcon({ name, className = "" }: { name: string; className?: string }) {
  const common = { fill: "currentColor" };
  return <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>{name === "Facebook" && <path {...common} d="M14 8.4V6.7c0-.8.6-1.1 1.1-1.1h1.7V2.5L14.4 2.5c-3 0-4.4 1.8-4.4 4.3v1.6H7v3.5h3V22h3.7V11.9h2.7l.5-3.5H14Z" />}{name === "Instagram" && <><path {...common} d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Z" /><path {...common} d="M12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6ZM17.1 6.6a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" /></>}{name === "TikTok" && <path {...common} d="M17.3 5.6c-.8-.9-1.3-2-1.4-3.2h-3.2v12.7a2.8 2.8 0 1 1-2-2.7V9.1a6 6 0 1 0 5.2 6V8.7a8 8 0 0 0 4.2 1.2V6.7a4.9 4.9 0 0 1-2.8-1.1Z" />}</svg>;
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return <label className="grid gap-2 text-sm font-extrabold text-slate-800"><span>{label}</span><input type={type} placeholder={placeholder} className="h-14 rounded-2xl border border-emerald-100 bg-white px-5 text-sm font-semibold text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-700 focus:ring-4 focus:ring-brand-700/10" /></label>;
}

function Footer() {
  return <footer className="bg-[#082314] px-5 py-14 text-white lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4"><div className="md:col-span-2"><BrandLogo dark /><p className="mt-6 max-w-md text-sm leading-6 text-white/60">Papaipay sentiasa bersedia membantu anda. Sama ada untuk pertanyaan pinjaman, semakan kelayakan, atau maklumat lanjut mengenai perkhidmatan kami.</p></div><div><h4 className="font-extrabold">Links</h4><div className="mt-4 grid gap-2 text-sm text-white/65"><a href="/about">About</a><a href="/services">Services</a><a href="#team">Team</a><a href="#careers">Careers</a><a href="/contact">Contact Us</a></div></div><div><h4 className="font-extrabold">Follow Us</h4><div className="mt-4 flex flex-wrap gap-5">{socialLinks.map(([social, href]) => <a key={social} href={href} aria-label={social} className="text-white/65 transition hover:-translate-y-0.5 hover:text-[#d6b95f]"><SocialIcon name={social} className="h-6 w-6" /></a>)}</div></div></div><div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between"><span>© Papaipay. All rights reserved.</span><span>Privacy Policy · Terms & Conditions · Sitemap</span></div></footer>;
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7fbf8] text-slate-950">
      <Header />

      <section className="relative flex min-h-[190px] items-center justify-center overflow-hidden pt-16 text-center text-white md:min-h-[320px] md:pt-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero-contact.png')" }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,26,14,0.9)_0%,rgba(3,26,14,0.72)_48%,rgba(3,26,14,0.88)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031a0e]/82 via-black/10 to-black/30" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-8 md:py-16 lg:px-8">
          <h1 className="text-3xl font-extrabold leading-[1.05] tracking-[-0.05em] md:text-4xl lg:text-5xl">Contact Us</h1>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-700">Get In Touch</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-5xl">We are ready to assist you.</h2>
          <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">Reach out to Papaipay for enquiries, consultations and appointment arrangements with our team.</p>
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => <article key={card.title} className="rounded-[1.75rem] border border-emerald-100 bg-white p-7 shadow-xl shadow-emerald-950/5 transition duration-300 hover:-translate-y-1 hover:border-brand-700/25 hover:shadow-2xl hover:shadow-emerald-950/10"><div className="mb-7 h-1 w-12 rounded-full bg-[#d6b95f]" /><p className="text-xs font-extrabold uppercase tracking-[0.24em] text-brand-700">{card.title}</p><h3 className="mt-4 whitespace-pre-line text-lg font-extrabold leading-7 tracking-[-0.035em] text-slate-950">{card.value}</h3><p className="mt-4 text-sm leading-7 text-slate-600">{card.description}</p></article>)}
        </div>
      </section>

      <section id="contact-form" className="bg-white px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-700">ENQUIRY FORM</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-5xl">Share your details with our team.</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">Complete the form and our team will review your enquiry before getting back to you with the next steps.</p>
            <div className="mt-8 rounded-[1.5rem] border border-emerald-100 bg-[#f7fbf8] p-6 text-sm font-semibold leading-7 text-slate-600 shadow-lg shadow-emerald-950/5">For urgent enquiries, please contact us by phone during office hours.</div>
          </div>
          <form className="rounded-[2rem] border border-emerald-100 bg-[#f7fbf8] p-5 shadow-2xl shadow-emerald-950/10 md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full Name" placeholder="Your name" />
              <Field label="Phone Number" placeholder="03-6279 0080" type="tel" />
              <Field label="Email Address" placeholder="you@example.com" type="email" />
              <label className="grid gap-2 text-sm font-extrabold text-slate-800"><span>Service Interested In</span><select className="h-14 rounded-2xl border border-emerald-100 bg-white px-5 text-sm font-semibold text-slate-800 outline-none transition focus:border-brand-700 focus:ring-4 focus:ring-brand-700/10">{enquiryTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-extrabold text-slate-800"><span>Message</span><textarea rows={6} placeholder="Tell us briefly about your enquiry." className="resize-none rounded-2xl border border-emerald-100 bg-white px-5 py-4 text-sm font-semibold text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-700 focus:ring-4 focus:ring-brand-700/10" /></label>
            <button type="button" className="mt-7 w-full rounded-full bg-brand-700 px-8 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-white shadow-xl shadow-emerald-950/15 transition hover:-translate-y-0.5 hover:bg-brand-900 md:w-auto">Submit Enquiry</button>
          </form>
        </div>
      </section>

      <section className="bg-[#f7fbf8] px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-700">Visit Our Office</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-5xl">Visit Our Office</h2>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">Located in Bandar Sri Damansara, our office is easily accessible for consultations and scheduled appointments.</p>
          </div>
          <div className="mt-12 overflow-hidden rounded-[2rem] border border-emerald-100 bg-white shadow-2xl shadow-emerald-950/10">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1991.8001775262276!2d101.61816179839475!3d3.199201799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa291ee52eb679911%3A0x9e7d9e7d1d5418fb!2sPAPA%20IPAY!5e0!3m2!1sen!2smy!4v1781586680115!5m2!1sen!2smy" width="100%" height="420" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Papaipay office location" className="h-[320px] w-full md:h-[420px]" />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-700">Follow Us</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-5xl">Stay connected with Papaipay.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {socialLinks.map(([social, href]) => <a key={social} href={href} className="flex items-center justify-center gap-3 rounded-[1.25rem] border border-emerald-100 bg-[#f7fbf8] px-5 py-4 text-sm font-extrabold text-slate-800 shadow-lg shadow-emerald-950/5 transition hover:-translate-y-0.5 hover:border-brand-700/30 hover:text-brand-700"><SocialIcon name={social} className="h-5 w-5" />{social}</a>)}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 pb-20 lg:px-8 lg:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#082314_0%,#0b301d_52%,#031a0e_100%)] p-8 text-center text-white shadow-2xl shadow-emerald-950/20 md:p-14">
          <div className="absolute inset-0 bg-cover bg-center opacity-[0.12]" style={{ backgroundImage: "url('/hero-contact.png')" }} />
          <div className="absolute inset-0 bg-black/25" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.045em] md:text-5xl">Let&apos;s Start The Conversation</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/78">Speak with our team to learn more about the services and solutions available through Papaipay.</p>
            <a href="tel:0362790080" className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-900 shadow-xl transition hover:-translate-y-0.5 hover:bg-white/90">Call Us Now</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
