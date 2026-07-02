"use client";

import { useEffect, useState } from "react";

import { Footer as SiteFooter, Header as SiteHeader } from "../../site-components";
const navItems = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Team", "/team"],
  ["Careers", "/careers"],
  ["Contact Us", "/en/contact"],
];

const socialLinks = [
  ["Facebook", "https://www.facebook.com/papaipay.my"],
  ["Instagram", "https://www.instagram.com/official.papaipay/"],
  ["TikTok", "https://www.tiktok.com/@papaipay.official"],
];

const whyJoinCards = [
  ["Professional Growth", "Opportunities to keep learning and developing professional skills."],
  ["Collaborative Culture", "Work in a supportive environment that values collaboration."],
  ["Meaningful Impact", "Help customers make clearer financial decisions."],
  ["Long-Term Opportunities", "Build your career with a growing organisation."],
];

const values = [
  ["Integrity", "We prioritise honesty, transparency and accountability in every action."],
  ["Professionalism", "We strive to deliver the best experience through high standards of work."],
  ["Continuous Learning", "We believe continuous learning is key to individual and organisational growth."],
  ["Long-Term Commitment", "We build lasting relationships with our customers and our team."],
];

const opportunities = [
  ["Financial Advisor", "Help customers understand financial options and provide suitable guidance based on their needs."],
  ["Business Development Executive", "Build new relationships and support business growth through strategic opportunities."],
  ["Customer Support Executive", "Deliver a professional customer experience and help manage customer enquiries."],
  ["Administrative Executive", "Support daily company operations through documentation and administrative processes."],
];

const cultureItems = [
  ["users", "A healthy environment"],
  ["shield", "Shared responsibility"],
  ["target", "Customer focus"],
];

const positions = [...opportunities.map(([title]) => title), "General Application"];

function BrandLogo({ dark = false }: { dark?: boolean }) {
  return <div className="flex items-center"><img src="/papaipay-logo.svg" alt="Papaipay" className={`h-11 w-auto object-contain md:h-14 ${dark ? "brightness-0 invert" : ""}`} /></div>;
}

function SocialIcon({ name, className = "" }: { name: string; className?: string }) {
  const common = { fill: "currentColor" };
  return <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>{name === "Facebook" && <path {...common} d="M14 8.4V6.7c0-.8.6-1.1 1.1-1.1h1.7V2.5L14.4 2.5c-3 0-4.4 1.8-4.4 4.3v1.6H7v3.5h3V22h3.7V11.9h2.7l.5-3.5H14Z" />}{name === "Instagram" && <><path {...common} d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Z" /><path {...common} d="M12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6ZM17.1 6.6a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" /></>}{name === "TikTok" && <path {...common} d="M17.3 5.6c-.8-.9-1.3-2-1.4-3.2h-3.2v12.7a2.8 2.8 0 1 1-2-2.7V9.1a6 6 0 1 0 5.2 6V8.7a8 8 0 0 0 4.2 1.2V6.7a4.9 4.9 0 0 1-2.8-1.1Z" />}</svg>;
}

function CultureIcon({ name, className = "" }: { name: string; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeLinecap: "round" as const, strokeLinejoin: "round" as const, strokeWidth: 1.8 };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      {name === "users" && <><circle {...common} cx="9" cy="8" r="3" /><circle {...common} cx="17" cy="9" r="2.5" /><path {...common} d="M3.5 19a5.5 5.5 0 0 1 11 0" /><path {...common} d="M14 16.5a4.5 4.5 0 0 1 6.5 2.5" /></>}
      {name === "shield" && <><path {...common} d="M12 3 19 6v5.2c0 4.4-2.8 7.9-7 9.8-4.2-1.9-7-5.4-7-9.8V6l7-3Z" /><path {...common} d="m9 12 2 2 4-4" /></>}
      {name === "target" && <><circle {...common} cx="12" cy="12" r="8" /><circle {...common} cx="12" cy="12" r="4" /><path {...common} d="M12 2v3M12 19v3M2 12h3M19 12h3" /></>}
    </svg>
  );
}

function SectionHeading({ eyebrow, title, intro, light = false }: { eyebrow?: string; title: string; intro?: string; light?: boolean }) {
  return <div className="mx-auto max-w-3xl text-center">{eyebrow && <p className={`text-xs font-bold uppercase tracking-[0.28em] ${light ? "text-[#d6b95f]" : "text-brand-700"}`}>{eyebrow}</p>}<h2 className={`mt-4 text-3xl font-bold leading-[1.04] tracking-[-0.045em] md:text-5xl ${light ? "text-white" : "text-slate-950"}`}>{title}</h2>{intro && <p className={`mt-5 text-base leading-8 md:text-lg ${light ? "text-white/72" : "text-slate-600"}`}>{intro}</p>}</div>;
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return <label className="grid gap-2 text-sm font-extrabold text-slate-800"><span>{label}</span><input required type={type} placeholder={placeholder} className="h-14 rounded-2xl border border-emerald-100 bg-white px-5 text-sm font-semibold text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-700 focus:ring-4 focus:ring-brand-700/10" /></label>;
}

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#f7fbf8] text-slate-950">
      <SiteHeader active="careers" locale="en" />

      <section className="relative flex min-h-[190px] items-center justify-center overflow-hidden pt-16 text-center text-white md:min-h-[320px] md:pt-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero-career.png')" }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,26,14,0.9)_0%,rgba(3,26,14,0.72)_48%,rgba(3,26,14,0.88)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031a0e]/82 via-black/10 to-black/30" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-8 md:py-16 lg:px-8">
          <h1 className="text-3xl font-bold leading-[1.05] tracking-[-0.05em] md:text-4xl lg:text-5xl">Careers</h1>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-700">Careers At Papaipay</p>
            <h2 className="mt-4 text-3xl font-bold leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-5xl">Build Your Career With Papaipay</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">We believe company success starts with a great team. At Papaipay, we provide an environment that supports learning, professional growth and opportunities to make a meaningful impact for customers.</p>
          </div>
          <div className="rounded-[2rem] border border-emerald-100 bg-[#f7fbf8] p-8 shadow-2xl shadow-emerald-950/10 md:p-10">
            <div className="h-1 w-14 rounded-full bg-[#d6b95f]" />
            <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.28em] text-brand-700">Grow Together</p>
            <h3 className="mt-4 text-2xl font-bold leading-tight tracking-[-0.04em] text-slate-950">Every role contributes to a better customer experience.</h3>
            <p className="mt-5 text-sm leading-7 text-slate-600">At Papaipay, every team member plays a role in helping customers understand financial options with greater clarity and confidence.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbf8] px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><SectionHeading title="Why Join Papaipay" intro="We provide space for individuals who want to grow, learn and build careers in a professional, impact-oriented environment." /><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{whyJoinCards.map(([title, text]) => <article key={title} className="rounded-[1.5rem] border border-emerald-100 bg-white p-7 shadow-xl shadow-emerald-950/5"><div className="mb-7 h-1 w-12 rounded-full bg-[#d6b95f]" /><h3 className="text-xl font-bold leading-tight tracking-[-0.04em] text-slate-950">{title}</h3><p className="mt-4 text-sm leading-7 text-slate-600">{text}</p></article>)}</div></div></section>

      <section className="bg-white px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start"><div className="lg:sticky lg:top-28"><p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-700">Our Values</p><h2 className="mt-4 text-3xl font-bold leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-5xl">Our Values</h2><p className="mt-6 max-w-md text-base leading-8 text-slate-600">Our values shape how we work, interact and serve customers.</p></div><div className="grid gap-5 md:grid-cols-2">{values.map(([title, text]) => <article key={title} className="rounded-[1.5rem] border border-emerald-100 bg-[#f7fbf8] p-7 shadow-xl shadow-emerald-950/5"><div className="mb-7 h-1 w-12 rounded-full bg-[#d6b95f]" /><h3 className="text-xl font-bold leading-tight tracking-[-0.04em] text-slate-950">{title}</h3><p className="mt-4 text-sm leading-7 text-slate-600">{text}</p></article>)}</div></div></section>

      <section className="relative overflow-hidden bg-[#02140c] px-5 py-20 text-white lg:px-8 lg:py-24"><div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(31,143,77,0.36),transparent_34%),radial-gradient(circle_at_84%_24%,rgba(214,185,95,0.18),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_24px)]" /><div className="relative mx-auto max-w-7xl"><SectionHeading title="Our Culture" intro="We value integrity, professionalism and long-term commitment in everything we do. Every team member is encouraged to keep growing, share ideas and contribute to shared success." light /><div className="mt-12 grid gap-4 md:grid-cols-3">{cultureItems.map(([icon, item]) => <div key={item} className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/10 p-6 text-left shadow-2xl shadow-black/10"><div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#d6b95f]/30 bg-white/10 text-[#d6b95f]"><CultureIcon name={icon} className="h-5 w-5" /></div><p className="text-base font-extrabold leading-6 text-white">{item}</p></div>)}</div></div></section>

      <section className="bg-[#f7fbf8] px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><SectionHeading title="Current Career Opportunities" intro="Explore career opportunities with Papaipay and join a team committed to delivering value to customers." /><div className="mt-12 grid gap-5 md:grid-cols-2">{opportunities.map(([title, text]) => <article key={title} className="rounded-[1.75rem] border border-emerald-100 bg-white p-7 shadow-xl shadow-emerald-950/5"><div className="flex flex-wrap items-start justify-between gap-4"><h3 className="text-2xl font-bold leading-tight tracking-[-0.04em] text-slate-950">{title}</h3><span className="rounded-full bg-emerald-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-700">Open For Application</span></div><p className="mt-5 text-sm leading-7 text-slate-600">{text}</p><a href="#submit-resume" className="mt-7 inline-flex rounded-full bg-brand-700 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-emerald-950/15 transition hover:-translate-y-0.5 hover:bg-brand-900">Apply Now</a></article>)}</div></div></section>

      <section className="bg-white px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl rounded-[2rem] border border-emerald-100 bg-[#f7fbf8] p-8 text-center shadow-2xl shadow-emerald-950/10 md:p-12"><h2 className="text-3xl font-bold leading-tight tracking-[-0.045em] text-slate-950 md:text-5xl">Did Not Find The Right Role?</h2><p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600">We are always interested in connecting with talented and motivated individuals. If you believe you can contribute to Papaipay, we welcome your application.</p><a href="#submit-resume" className="mt-8 inline-flex rounded-full bg-brand-700 px-8 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-xl shadow-emerald-950/15 transition hover:-translate-y-0.5 hover:bg-brand-900">Send Us Your Resume</a></div></section>

      <section id="submit-resume" className="bg-[#f7fbf8] px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.25rem] border border-emerald-100 bg-white shadow-2xl shadow-emerald-950/10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden bg-[linear-gradient(135deg,#082314_0%,#0b301d_55%,#031a0e_100%)] p-8 text-white md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(214,185,95,0.22),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(31,143,77,0.35),transparent_36%)]" />
            <div className="relative">
              <span className="inline-flex rounded-full border border-[#d6b95f]/30 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#d6b95f]">APPLICATION FORM</span>
              <h2 className="mt-6 text-3xl font-bold leading-[1.04] tracking-[-0.045em] md:text-5xl">Send Us Your Resume</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/74">Complete your details and share your resume for our team’s consideration.</p>
              <ul className="mt-8 grid gap-3 text-sm font-semibold text-white/82">
                {['Open to motivated individuals', 'Professional development opportunities', 'Shortlisted candidates will be contacted'].map((item) => <li key={item} className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#d6b95f]" />{item}</li>)}
              </ul>
              <div className="mt-10 rounded-2xl border border-white/10 bg-white/10 p-5 text-sm font-semibold leading-7 text-white/78">Our team will review your application and contact shortlisted candidates.</div>
            </div>
          </div>
          <form className="bg-[#f7fbf8] p-6 md:p-10">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full Name" placeholder="Your full name" />
              <Field label="Email Address" placeholder="you@example.com" type="email" />
              <Field label="Phone Number" placeholder="012-345 6789" type="tel" />
              <label className="grid gap-2 text-sm font-extrabold text-slate-800"><span>Position Applied For</span><select required className="h-14 rounded-2xl border border-emerald-100 bg-white px-5 text-sm font-semibold text-slate-800 outline-none transition focus:border-brand-700 focus:ring-4 focus:ring-brand-700/10">{positions.map((position) => <option key={position}>{position}</option>)}</select></label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-extrabold text-slate-800"><span>Message</span><textarea rows={5} required placeholder="Briefly tell us about your experience and career interests." className="resize-none rounded-2xl border border-emerald-100 bg-white px-5 py-4 text-sm font-semibold text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-700 focus:ring-4 focus:ring-brand-700/10" /></label>
            <label className="mt-5 grid gap-2 text-sm font-extrabold text-slate-800"><span>Upload Resume</span><input required type="file" accept=".pdf,.doc,.docx" className="rounded-2xl border border-dashed border-emerald-200 bg-white px-5 py-4 text-sm font-semibold text-slate-700 outline-none file:mr-4 file:rounded-full file:border-0 file:bg-brand-700 file:px-5 file:py-2.5 file:text-xs file:font-extrabold file:uppercase file:tracking-[0.1em] file:text-white focus:border-brand-700 focus:ring-4 focus:ring-brand-700/10" /></label>
            <button type="submit" className="mt-7 w-full rounded-full bg-brand-700 px-8 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-white shadow-xl shadow-emerald-950/15 transition hover:-translate-y-0.5 hover:bg-brand-900 md:w-auto">Submit Application</button>
          </form>
        </div>
      </section>

      <section className="bg-white px-5 pb-20 lg:px-8 lg:pb-24"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#082314_0%,#0b301d_52%,#031a0e_100%)] p-8 text-center text-white shadow-2xl shadow-emerald-950/20 md:p-14"><div className="absolute inset-0 bg-cover bg-center opacity-[0.12]" style={{ backgroundImage: "url('/hero-career.png')" }} /><div className="absolute inset-0 bg-black/25" /><div className="relative"><h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-[-0.045em] md:text-5xl">Ready To Join Papaipay?</h2><p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/78">Take the next step in your career journey and grow with us.</p><a href="#submit-resume" className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.12em] text-brand-900 shadow-xl transition hover:-translate-y-0.5 hover:bg-white/90">Apply Now</a></div></div></section>

      <SiteFooter locale="en" />
    </main>
  );
}
