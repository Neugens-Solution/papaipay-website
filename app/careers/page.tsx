"use client";

import { FormEvent, useEffect, useState } from "react";

const navItems = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Team", "#team"],
  ["Careers", "/careers"],
  ["Contact Us", "/contact"],
];

const socialLinks = [
  ["Facebook", "https://www.facebook.com/papaipay.my"],
  ["Instagram", "https://www.instagram.com/official.papaipay/"],
  ["TikTok", "https://www.tiktok.com/@papaipay.official"],
];

const whyJoinCards = [
  ["Professional Growth", "Peluang untuk terus belajar dan membangunkan kemahiran profesional."],
  ["Collaborative Culture", "Bekerja dalam persekitaran yang menyokong dan menghargai kerjasama."],
  ["Meaningful Impact", "Membantu pelanggan membuat keputusan kewangan yang lebih baik."],
  ["Long-Term Opportunity", "Membina kerjaya bersama organisasi yang sedang berkembang."],
];

const values = [
  ["Integrity", "Kami mengutamakan kejujuran, ketelusan dan tanggungjawab dalam setiap tindakan."],
  ["Professionalism", "Kami berusaha memberikan pengalaman terbaik melalui standard kerja yang tinggi."],
  ["Continuous Learning", "Kami percaya pembelajaran berterusan adalah kunci kepada pertumbuhan individu dan organisasi."],
  ["Long-Term Commitment", "Kami membina hubungan yang berkekalan dengan pelanggan dan pasukan kami."],
];

const opportunities = [
  ["Financial Advisor", "Membantu pelanggan memahami pilihan kewangan dan menyediakan panduan yang sesuai berdasarkan keperluan mereka."],
  ["Business Development Executive", "Membina hubungan baharu dan menyokong pertumbuhan perniagaan melalui peluang strategik."],
  ["Customer Support Executive", "Memberikan pengalaman pelanggan yang profesional dan membantu menguruskan pertanyaan pelanggan."],
  ["Administrative Executive", "Menyokong operasi harian syarikat melalui pengurusan dokumentasi dan proses pentadbiran."],
];

const positions = [...opportunities.map(([title]) => title), "General Application"];

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
          {navItems.map(([item, href]) => <a key={item} href={href} className={`group relative py-3 transition ${scrolled ? "hover:text-brand-700" : "hover:text-white"}`}><span>{item}</span><span className={`absolute inset-x-0 bottom-1 h-0.5 origin-left scale-x-0 rounded-full transition group-hover:scale-x-100 ${item === "Careers" ? "scale-x-100" : ""} ${scrolled ? "bg-brand-700" : "bg-white"}`} /></a>)}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <button className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${scrolled ? "border-slate-200 bg-white/70 text-slate-700 hover:border-brand-700 hover:text-brand-700" : "border-white/30 bg-white/10 text-white hover:bg-white/15"}`}>BM | EN</button>
          <a href="#submit-resume" className={`rounded-full px-5 py-3 text-xs font-extrabold uppercase tracking-[0.08em] shadow-lg transition hover:-translate-y-0.5 ${scrolled ? "bg-brand-700 text-white shadow-emerald-900/20 hover:bg-brand-900" : "bg-white text-brand-900 shadow-black/10 hover:bg-white/90"}`}>Apply Now</a>
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

function SectionHeading({ eyebrow, title, intro, light = false }: { eyebrow?: string; title: string; intro?: string; light?: boolean }) {
  return <div className="mx-auto max-w-3xl text-center">{eyebrow && <p className={`text-xs font-extrabold uppercase tracking-[0.28em] ${light ? "text-[#d6b95f]" : "text-brand-700"}`}>{eyebrow}</p>}<h2 className={`mt-4 text-3xl font-extrabold leading-[1.04] tracking-[-0.045em] md:text-5xl ${light ? "text-white" : "text-slate-950"}`}>{title}</h2>{intro && <p className={`mt-5 text-base leading-8 md:text-lg ${light ? "text-white/72" : "text-slate-600"}`}>{intro}</p>}</div>;
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return <label className="grid gap-2 text-sm font-extrabold text-slate-800"><span>{label}</span><input required type={type} placeholder={placeholder} className="h-14 rounded-2xl border border-emerald-100 bg-white px-5 text-sm font-semibold text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-700 focus:ring-4 focus:ring-brand-700/10" /></label>;
}

function Footer() {
  return <footer className="bg-[#082314] px-5 py-14 text-white lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4"><div className="md:col-span-2"><BrandLogo dark /><p className="mt-6 max-w-md text-sm leading-6 text-white/60">Papaipay sentiasa bersedia membantu anda. Sama ada untuk pertanyaan pinjaman, semakan kelayakan, atau maklumat lanjut mengenai perkhidmatan kami.</p></div><div><h4 className="font-extrabold">Links</h4><div className="mt-4 grid gap-2 text-sm text-white/65"><a href="/about">About</a><a href="/services">Services</a><a href="#team">Team</a><a href="/careers">Careers</a><a href="/contact">Contact Us</a></div></div><div><h4 className="font-extrabold">Follow Us</h4><div className="mt-4 flex flex-wrap gap-5">{socialLinks.map(([social, href]) => <a key={social} href={href} aria-label={social} className="text-white/65 transition hover:-translate-y-0.5 hover:text-[#d6b95f]"><SocialIcon name={social} className="h-6 w-6" /></a>)}</div></div></div><div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between"><span>© Papaipay. All rights reserved.</span><span>Privacy Policy · Terms & Conditions · Sitemap</span></div></footer>;
}

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <main className="min-h-screen bg-[#f7fbf8] text-slate-950">
      <Header />

      <section className="relative flex min-h-[190px] items-center justify-center overflow-hidden pt-16 text-center text-white md:min-h-[320px] md:pt-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero-career.png')" }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,26,14,0.9)_0%,rgba(3,26,14,0.72)_48%,rgba(3,26,14,0.88)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031a0e]/82 via-black/10 to-black/30" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-8 md:py-16 lg:px-8">
          <h1 className="text-3xl font-extrabold leading-[1.05] tracking-[-0.05em] md:text-4xl lg:text-5xl">Careers</h1>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-700">Careers At Papaipay</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-5xl">Build Your Future With Papaipay</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">Kami percaya kejayaan syarikat bermula dengan pasukan yang hebat. Di Papaipay, kami menyediakan persekitaran yang menyokong pembelajaran, perkembangan profesional dan peluang untuk memberi impak yang bermakna kepada pelanggan.</p>
          </div>
          <div className="rounded-[2rem] border border-emerald-100 bg-[#f7fbf8] p-8 shadow-2xl shadow-emerald-950/10 md:p-10">
            <div className="h-1 w-14 rounded-full bg-[#d6b95f]" />
            <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.28em] text-brand-700">Growing Together</p>
            <h3 className="mt-4 text-2xl font-extrabold leading-tight tracking-[-0.04em] text-slate-950">Every role contributes to clearer financial decisions.</h3>
            <p className="mt-5 text-sm leading-7 text-slate-600">At Papaipay, every role contributes to helping customers make clearer and more confident financial decisions.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbf8] px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><SectionHeading title="Why Join Papaipay" intro="Kami menyediakan ruang untuk individu yang ingin berkembang, belajar dan membina kerjaya dalam persekitaran profesional yang berorientasikan impak." /><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{whyJoinCards.map(([title, text]) => <article key={title} className="rounded-[1.5rem] border border-emerald-100 bg-white p-7 shadow-xl shadow-emerald-950/5"><div className="mb-7 h-1 w-12 rounded-full bg-[#d6b95f]" /><h3 className="text-xl font-extrabold leading-tight tracking-[-0.04em] text-slate-950">{title}</h3><p className="mt-4 text-sm leading-7 text-slate-600">{text}</p></article>)}</div></div></section>

      <section className="bg-white px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start"><div className="lg:sticky lg:top-28"><p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-700">Our Values</p><h2 className="mt-4 text-3xl font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-5xl">Our Values</h2><p className="mt-6 max-w-md text-base leading-8 text-slate-600">Nilai kami membentuk cara kami bekerja, berinteraksi dan memberikan perkhidmatan kepada pelanggan.</p></div><div className="grid gap-5 md:grid-cols-2">{values.map(([title, text]) => <article key={title} className="rounded-[1.5rem] border border-emerald-100 bg-[#f7fbf8] p-7 shadow-xl shadow-emerald-950/5"><div className="mb-7 h-1 w-12 rounded-full bg-[#d6b95f]" /><h3 className="text-xl font-extrabold leading-tight tracking-[-0.04em] text-slate-950">{title}</h3><p className="mt-4 text-sm leading-7 text-slate-600">{text}</p></article>)}</div></div></section>

      <section className="relative overflow-hidden bg-[#02140c] px-5 py-20 text-white lg:px-8 lg:py-24"><div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(31,143,77,0.36),transparent_34%),radial-gradient(circle_at_84%_24%,rgba(214,185,95,0.18),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_24px)]" /><div className="relative mx-auto max-w-7xl"><SectionHeading title="Our Culture" intro="Kami menghargai integriti, profesionalisme dan komitmen jangka panjang dalam setiap perkara yang kami lakukan. Setiap ahli pasukan digalakkan untuk terus berkembang, berkongsi idea dan menyumbang kepada kejayaan bersama." light /><div className="mt-12 grid gap-4 md:grid-cols-3">{["Supportive environment", "Shared responsibility", "Customer-focused mindset"].map((item) => <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 text-center text-sm font-extrabold text-white/82 shadow-2xl shadow-black/10 backdrop-blur-md">{item}</div>)}</div></div></section>

      <section className="bg-[#f7fbf8] px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><SectionHeading title="Current Opportunities" intro="Terokai peluang kerjaya bersama Papaipay dan sertai pasukan yang komited untuk memberi nilai kepada pelanggan." /><div className="mt-12 grid gap-5 md:grid-cols-2">{opportunities.map(([title, text]) => <article key={title} className="rounded-[1.75rem] border border-emerald-100 bg-white p-7 shadow-xl shadow-emerald-950/5"><div className="flex flex-wrap items-start justify-between gap-4"><h3 className="text-2xl font-extrabold leading-tight tracking-[-0.04em] text-slate-950">{title}</h3><span className="rounded-full bg-emerald-50 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-brand-700">Open for Application</span></div><p className="mt-5 text-sm leading-7 text-slate-600">{text}</p><a href="#submit-resume" className="mt-7 inline-flex rounded-full bg-brand-700 px-6 py-3 text-xs font-extrabold uppercase tracking-[0.12em] text-white shadow-lg shadow-emerald-950/15 transition hover:-translate-y-0.5 hover:bg-brand-900">Apply Now</a></article>)}</div></div></section>

      <section className="bg-white px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl rounded-[2rem] border border-emerald-100 bg-[#f7fbf8] p-8 text-center shadow-2xl shadow-emerald-950/10 md:p-12"><h2 className="text-3xl font-extrabold leading-tight tracking-[-0.045em] text-slate-950 md:text-5xl">Don&apos;t See A Suitable Position?</h2><p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600">Kami sentiasa berminat untuk berhubung dengan individu yang berbakat dan bermotivasi. Jika anda percaya anda boleh menyumbang kepada Papaipay, kami mengalu-alukan permohonan anda.</p><a href="#submit-resume" className="mt-8 inline-flex rounded-full bg-brand-700 px-8 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-white shadow-xl shadow-emerald-950/15 transition hover:-translate-y-0.5 hover:bg-brand-900">Send Your Resume</a></div></section>

      <section id="submit-resume" className="bg-[#f7fbf8] px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start"><div className="lg:sticky lg:top-28"><p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-700">Application Form</p><h2 className="mt-4 text-3xl font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-5xl">Submit Your Resume</h2><p className="mt-5 max-w-xl text-base leading-8 text-slate-600">Lengkapkan maklumat di bawah dan kongsikan resume anda untuk pertimbangan pasukan kami.</p><div className="mt-8 rounded-[1.5rem] border border-emerald-100 bg-white p-6 text-sm font-semibold leading-7 text-slate-600 shadow-lg shadow-emerald-950/5">Please upload a current resume and select the role that best matches your career interest.</div></div><form onSubmit={handleSubmit} className="rounded-[2rem] border border-emerald-100 bg-white p-5 shadow-2xl shadow-emerald-950/10 md:p-8"><div className="grid gap-5 md:grid-cols-2"><Field label="Full Name" placeholder="Your full name" /><Field label="Email Address" placeholder="you@example.com" type="email" /><Field label="Phone Number" placeholder="012-345 6789" type="tel" /><label className="grid gap-2 text-sm font-extrabold text-slate-800"><span>Position Applied For</span><select required className="h-14 rounded-2xl border border-emerald-100 bg-white px-5 text-sm font-semibold text-slate-800 outline-none transition focus:border-brand-700 focus:ring-4 focus:ring-brand-700/10">{positions.map((position) => <option key={position}>{position}</option>)}</select></label></div><label className="mt-5 grid gap-2 text-sm font-extrabold text-slate-800"><span>Message</span><textarea rows={5} required placeholder="Tell us briefly about your experience and career interest." className="resize-none rounded-2xl border border-emerald-100 bg-white px-5 py-4 text-sm font-semibold text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-700 focus:ring-4 focus:ring-brand-700/10" /></label><label className="mt-5 grid gap-2 text-sm font-extrabold text-slate-800"><span>Upload Resume</span><input required type="file" accept=".pdf,.doc,.docx" className="rounded-2xl border border-dashed border-emerald-200 bg-[#f7fbf8] px-5 py-4 text-sm font-semibold text-slate-700 outline-none file:mr-4 file:rounded-full file:border-0 file:bg-brand-700 file:px-5 file:py-2.5 file:text-xs file:font-extrabold file:uppercase file:tracking-[0.1em] file:text-white focus:border-brand-700 focus:ring-4 focus:ring-brand-700/10" /></label><button type="submit" className="mt-7 w-full rounded-full bg-brand-700 px-8 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-white shadow-xl shadow-emerald-950/15 transition hover:-translate-y-0.5 hover:bg-brand-900 md:w-auto">Submit Application</button>{submitted && <div role="status" className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-5 text-sm font-semibold leading-7 text-brand-900"><p className="font-extrabold">Thank you for your application.</p><p>Our team will review your submission and contact shortlisted candidates.</p></div>}</form></div></section>

      <section className="bg-white px-5 pb-20 lg:px-8 lg:pb-24"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#082314_0%,#0b301d_52%,#031a0e_100%)] p-8 text-center text-white shadow-2xl shadow-emerald-950/20 md:p-14"><div className="absolute inset-0 bg-cover bg-center opacity-[0.12]" style={{ backgroundImage: "url('/hero-career.png')" }} /><div className="absolute inset-0 bg-black/25" /><div className="relative"><h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.045em] md:text-5xl">Ready To Join Papaipay?</h2><p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/78">Take the next step in your professional journey and grow together with us.</p><a href="#submit-resume" className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-900 shadow-xl transition hover:-translate-y-0.5 hover:bg-white/90">Apply Now</a></div></div></section>

      <Footer />
    </main>
  );
}
