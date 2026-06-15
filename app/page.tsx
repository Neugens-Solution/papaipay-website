"use client";

import { useEffect, useState } from "react";

const navItems = ["About", "Approach", "Services", "Team", "Careers", "FAQ"];
const services = [
  ["Financial Advisory", "Bimbingan awal untuk memahami kedudukan kewangan dan pilihan yang sesuai."],
  ["Asset Planning", "Pendekatan tersusun untuk membantu pelanggan melihat peluang dan keperluan aset."],
  ["Financial Education", "Penerangan mudah difahami supaya pelanggan lebih yakin membuat keputusan."],
  ["Client Support", "Sokongan susulan untuk memastikan setiap proses berjalan dengan lebih teratur."],
];
const socials = ["Facebook", "Instagram", "TikTok"];
const heroSlides = [
  {
    image: "/hero-1a.png",
    title: "Ubah Komitmen Kewangan yang membebankan Kepada Aset Yang Membina Nilai.",
    text: "Fahami pilihan yang tersedia dan susun strategi kewangan yang lebih teratur untuk masa hadapan.",
  },
  {
    image: "/hero-2.png",
    title: "Keluar Daripada Tekanan Kewangan. Melangkah Dengan Lebih Yakin.",
    text: "Perancangan yang tersusun hari ini membantu membentuk kedudukan kewangan yang lebih kukuh pada masa hadapan.",
  },
  {
    image: "/hero-3.png",
    title: "Lebih Sedekad Membantu Pelanggan membina masa Yang Lebih Baik.",
    text: "Dengan pengalaman melebihi 10 tahun, Papaipay telah membantu ribuan pelanggan memahami pilihan kewangan dan aset dengan lebih jelas.",
  },
];
const heroTrustItems = [
  ["Professional Consultation", "Bimbingan oleh perunding berpengalaman dan bertauliah."],
  ["Structured Approach", "Proses yang tersusun untuk setiap keputusan kewangan anda."],
  ["Client-Focused Guidance", "Keperluan anda menjadi asas kepada setiap cadangan kami."],
  ["Long-Term Support", "Kami bersama anda untuk setiap langkah sepanjang perjalanan."],
];
const whatWeDo = [
  ["01", "Penyatuan Komitmen Kewangan", "Menyusun semula komitmen sedia ada supaya aliran kewangan lebih teratur dan mudah diuruskan."],
  ["02", "Pembiayaan Peribadi", "Membantu pelanggan memahami pilihan pembiayaan yang sesuai berdasarkan keperluan dan kemampuan semasa."],
  ["03", "Penyelesaian SME", "Sokongan kepada usahawan dan pemilik perniagaan yang memerlukan struktur kewangan yang lebih jelas."],
  ["04", "Henry Asset Approach", "Pendekatan yang memberi fokus kepada pembinaan aset dan perancangan jangka panjang yang lebih strategik."],
];

function BrandLogo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center">
      <img src="/papaipay-logo.svg" alt="Papaipay" className={`h-11 w-auto object-contain md:h-14 ${dark ? "brightness-0 invert" : ""}`} />
    </div>
  );
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
        <a href="#" aria-label="Papaipay Home"><BrandLogo dark={!scrolled} /></a>
        <nav className={`hidden items-center gap-7 text-[13px] font-semibold tracking-[-0.01em] lg:flex ${scrolled ? "text-slate-700" : "text-white/90"}`}>
          {navItems.map((item) => <a key={item} href="#" className={`group relative py-3 transition ${scrolled ? "hover:text-brand-700" : "hover:text-white"}`}><span>{item}</span><span className={`absolute inset-x-0 bottom-1 h-0.5 origin-left scale-x-0 rounded-full transition group-hover:scale-x-100 ${scrolled ? "bg-brand-700" : "bg-white"}`} /></a>)}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <button className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${scrolled ? "border-slate-200 bg-white/70 text-slate-700 hover:border-brand-700 hover:text-brand-700" : "border-white/30 bg-white/10 text-white hover:bg-white/15"}`}>BM | EN</button>
          <a href="#mohon" className={`rounded-full px-5 py-3 text-xs font-extrabold uppercase tracking-[0.08em] shadow-lg transition hover:-translate-y-0.5 ${scrolled ? "bg-brand-700 text-white shadow-emerald-900/20 hover:bg-brand-900" : "bg-white text-brand-900 shadow-black/10 hover:bg-white/90"}`}>Apply Now</a>
        </div>
        <button className={`rounded-2xl border px-4 py-3 text-xs font-black lg:hidden ${scrolled ? "border-slate-200 text-slate-800" : "border-white/30 text-white"}`}>MENU</button>
      </div>
    </header>
  );
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-700">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{text}</p>
    </div>
  );
}

function HeroSlider() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div key={slide.image} className={`absolute inset-0 bg-cover bg-center opacity-0 ${index === 0 ? "animate-[heroOne_18s_infinite]" : index === 1 ? "animate-[heroTwo_18s_infinite]" : "animate-[heroThree_18s_infinite]"}`} style={{ backgroundImage: `url(${slide.image})` }} />
        ))}
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,26,14,0.96)_0%,rgba(3,26,14,0.82)_34%,rgba(3,26,14,0.34)_64%,rgba(3,26,14,0.04)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#031a0e]/70 via-transparent to-black/18" />
      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center px-5 pb-28 pt-28 lg:px-8 lg:pb-36 lg:pt-32">
        <div className="max-w-[700px]">
          <div className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.26em] text-white/90 backdrop-blur">Plan Advisor • Pay Advisor</div>
          <div className="relative min-h-[290px] md:min-h-[330px] lg:min-h-[340px]">
            {heroSlides.map((slide, index) => (
              <div key={slide.title} className={`absolute inset-0 opacity-0 ${index === 0 ? "animate-[copyOne_18s_infinite]" : index === 1 ? "animate-[copyTwo_18s_infinite]" : "animate-[copyThree_18s_infinite]"}`}>
                <h1 className="max-w-[680px] text-[31px] font-extrabold leading-[1.08] tracking-[-0.045em] md:text-[48px] lg:text-[56px] xl:text-[60px]">{slide.title}</h1>
                <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/88 md:text-lg md:leading-8">{slide.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-1 flex flex-col gap-3 sm:flex-row">
            <a href="#mohon" className="rounded-full bg-white px-7 py-4 text-center text-xs font-extrabold uppercase tracking-[0.1em] text-brand-900 shadow-2xl transition hover:-translate-y-0.5">Apply Now</a>
            <a href="#henry" className="rounded-full border border-white/30 px-7 py-4 text-center text-xs font-extrabold uppercase tracking-[0.1em] text-white backdrop-blur transition hover:bg-white/10">Learn More</a>
          </div>
          <div className="mt-9 flex gap-3">
            {heroSlides.map((slide, index) => <span key={slide.image} className={`h-2.5 rounded-full bg-white/70 ${index === 0 ? "w-10" : "w-2.5"}`} />)}
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 hidden border-t border-white/10 bg-[#06321c]/88 backdrop-blur-md lg:block">
        <div className="mx-auto grid max-w-7xl grid-cols-4 divide-x divide-white/10 px-8 py-7">
          {heroTrustItems.map(([title, text]) => (
            <div key={title} className="px-8 first:pl-0 last:pr-0">
              <div className="text-sm font-extrabold text-white">{title}</div>
              <p className="mt-2 text-sm leading-6 text-white/72">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeDoSection() {
  return (
    <section id="services" className="bg-[#f7fbf8] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-700">What We Do</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-5xl">Perkhidmatan Utama Papaipay</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600 md:text-lg lg:ml-auto">Kami membantu pelanggan memahami pilihan yang tersedia dan menyusun strategi yang lebih sesuai dengan keperluan kewangan serta aset mereka.</p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {whatWeDo.map(([number, title, text]) => (
            <a key={title} href={title === "Henry Asset Approach" ? "#henry" : "#mohon"} className="group flex min-h-[320px] flex-col justify-between rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-xl shadow-emerald-950/5 transition duration-300 hover:-translate-y-1 hover:border-brand-700/30 hover:shadow-2xl hover:shadow-emerald-950/10">
              <div>
                <div className="text-5xl font-extrabold tracking-[-0.08em] text-brand-700/18 transition group-hover:text-brand-700/28">{number}</div>
                <h3 className="mt-10 text-2xl font-extrabold leading-tight tracking-[-0.04em] text-slate-950">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
              </div>
              <div className="mt-8 inline-flex items-center text-xs font-extrabold uppercase tracking-[0.12em] text-brand-700">Ketahui Lanjut <span className="ml-2 transition group-hover:translate-x-1">→</span></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7fbf8] text-slate-950">
      <Header />
      <HeroSlider />

      <section className="px-5 py-16 lg:hidden">
        <div className="mx-auto grid max-w-7xl gap-4 rounded-[2rem] border border-emerald-100 bg-white/80 p-4 shadow-xl shadow-emerald-950/5 backdrop-blur md:grid-cols-4 md:p-5">
          {heroTrustItems.map(([title, text]) => <div key={title} className="rounded-[1.4rem] bg-slate-50 px-5 py-4"><div className="text-sm font-bold text-slate-800">{title}</div><p className="mt-1 text-sm leading-6 text-slate-600">{text}</p></div>)}
        </div>
      </section>

      <WhatWeDoSection />

      <section id="henry" className="bg-white px-5 py-24 lg:px-8">
        <SectionTitle eyebrow="Approach" title="A Clearer Way To Plan" text="Henry Asset Approach diposisikan sebagai pendekatan perundingan yang menekankan kefahaman, semakan dan bimbingan sebelum sesuatu keputusan dibuat." />
        <div className="mx-auto mt-14 grid max-w-6xl gap-4 md:grid-cols-5">
          {["Understand", "Review", "Guide", "Plan", "Follow Up"].map((step, index) => (
            <div key={step} className="rounded-[1.6rem] bg-slate-50 p-6 text-center transition hover:bg-brand-50">
              <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-brand-700 font-black text-white">{index + 1}</div>
              <p className="font-extrabold text-slate-800">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <SectionTitle eyebrow="Services" title="Advisory Support For Better Decisions" text="Peranan Papaipay adalah membantu pelanggan mendapatkan kefahaman dan bimbingan yang lebih tersusun sebelum meneruskan langkah seterusnya." />
        <div className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map(([title, text]) => (
            <div key={title} className="rounded-[2rem] bg-white p-7 shadow-xl shadow-emerald-950/5 transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-8 h-24 rounded-[1.5rem] bg-gradient-to-br from-brand-50 to-emerald-100" />
              <h3 className="text-xl font-extrabold leading-tight text-slate-950">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="mohon" className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] bg-white p-6 shadow-2xl shadow-emerald-950/10 md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-gradient-to-br from-brand-900 to-brand-700 p-8 text-white">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/70">Apply Now</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.02] tracking-[-0.045em]">Start With A Guided Review.</h2>
            <p className="mt-5 leading-8 text-white/78">Maklumat akan disimpan ke Supabase dan notification boleh dihantar ke email rasmi Papaipay apabila integrasi backend diaktifkan.</p>
          </div>
          <form className="grid gap-4">
            <input className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-brand-700" placeholder="Nama penuh" />
            <input className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-brand-700" placeholder="Nombor telefon" />
            <input className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-brand-700" placeholder="Email" />
            <textarea className="min-h-28 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-brand-700" placeholder="Catatan ringkas" />
            <button type="button" className="rounded-full bg-brand-700 px-7 py-4 text-xs font-extrabold uppercase tracking-[0.1em] text-white shadow-lg transition hover:bg-brand-900">Submit Application</button>
          </form>
        </div>
      </section>

      <footer className="bg-[#082314] px-5 py-14 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div className="md:col-span-2"><BrandLogo dark /><p className="mt-6 max-w-md leading-7 text-white/65">Papaipay menyediakan pendekatan perundingan kewangan dan aset yang lebih jelas, tersusun dan berpandu melalui Henry Asset Approach.</p></div>
          <div><h4 className="font-extrabold">Links</h4><div className="mt-4 grid gap-2 text-white/65"><a href="#">About</a><a href="#henry">Approach</a><a href="#mohon">Apply Now</a></div></div>
          <div><h4 className="font-extrabold">Follow Us</h4><div className="mt-4 flex flex-wrap gap-2">{socials.map((social) => <span key={social} className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-white/70">{social}</span>)}</div></div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between"><span>© Papaipay. All rights reserved.</span><span>Privacy Policy · Terms & Conditions · Sitemap</span></div>
      </footer>
    </main>
  );
}
