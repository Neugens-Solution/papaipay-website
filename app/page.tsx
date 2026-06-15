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
  ["04", "Henry's Asset Approach", "Pendekatan yang memberi fokus kepada pembinaan aset dan perancangan jangka panjang yang lebih strategik."],
];

const henryHighlights = [
  ["home", "Kenal Pasti Peluang Aset", "Kami bantu pelanggan mengenal pasti pilihan aset yang berpotensi dan sesuai dengan keadaan semasa."],
  ["clipboard", "Rancang Dengan Strategi", "Setiap langkah dirancang secara tersusun supaya keputusan dibuat dengan lebih yakin."],
  ["shield", "Bina Masa Depan Yang Lebih Stabil", "Dengan aset yang tepat, pelanggan boleh merancang masa depan dengan lebih baik."],
];
const journeySteps = [
  ["01", "edit", "Hantar Permohonan", "Isi maklumat asas melalui borang ringkas."],
  ["02", "search", "Semakan Awal", "Pasukan Papaipay menyemak situasi dan keperluan pelanggan."],
  ["03", "chat", "Sesi Konsultasi", "Perbincangan ringkas untuk memahami pilihan yang sesuai."],
  ["04", "briefcase", "Cadangan Penyelesaian", "Cadangan yang lebih jelas dan tersusun diberikan sebagai panduan seterusnya."],
];
const credibilityStats = [
  ["award", "10", "Tahun Pengalaman", "Pengalaman kukuh dalam membimbing pelanggan membuat keputusan kewangan dan aset."],
  ["users", "80", "Wakil Penasihat Kewangan", "Pasukan penasihat yang membantu pelanggan dengan pendekatan profesional."],
  ["briefcase", "16,000", "Pelanggan Berpuas Hati", "Kepercayaan pelanggan menjadi asas kepada setiap cadangan dan semakan."],
  ["shield", "RM450 Juta", "Aset Di Bawah Nasihat Kami", "Nilai aset di bawah nasihat kami mencerminkan pengalaman dan kepercayaan pelanggan."],
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
      <div className="absolute inset-0 bg-gradient-to-t from-[#031a0e]/70 via-transparent to-black/20" />
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
            <a key={title} href={title === "Henry's Asset Approach" ? "#henry" : "#mohon"} className="group flex min-h-[320px] flex-col justify-between rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-xl shadow-emerald-950/5 transition duration-300 hover:-translate-y-1 hover:border-brand-700/30 hover:shadow-2xl hover:shadow-emerald-950/10">
              <div>
                <div className="text-5xl font-extrabold tracking-[-0.08em] text-brand-700/20 transition group-hover:text-brand-700/28">{number}</div>
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

function LineIcon({ name, className = "" }: { name: string; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeLinecap: "round" as const, strokeLinejoin: "round" as const, strokeWidth: 1.8 };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      {name === "home" && <><path {...common} d="M3 11.5 12 4l9 7.5" /><path {...common} d="M5.5 10.5V20h13v-9.5" /><path {...common} d="M10 20v-5h4v5" /></>}
      {name === "clipboard" && <><path {...common} d="M9 5h6" /><path {...common} d="M9 3h6v4H9z" /><path {...common} d="M7 5H5.5A1.5 1.5 0 0 0 4 6.5v13A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 18.5 5H17" /><path {...common} d="m8 13 2 2 5-5" /><path {...common} d="M8 18h8" /></>}
      {name === "shield" && <><path {...common} d="M12 3 20 6v5c0 5-3.4 8.2-8 10-4.6-1.8-8-5-8-10V6z" /><path {...common} d="m9 12 2 2 4-4" /></>}
      {name === "edit" && <><path {...common} d="M4 20h16" /><path {...common} d="M6 16.5 17.5 5a2.1 2.1 0 0 1 3 3L9 19l-4 1z" /><path {...common} d="m15.5 7.5 3 3" /></>}
      {name === "search" && <><circle {...common} cx="10.5" cy="10.5" r="5.5" /><path {...common} d="m15 15 5 5" /><path {...common} d="M8.5 10.5h4" /><path {...common} d="M10.5 8.5v4" /></>}
      {name === "chat" && <><path {...common} d="M5 6h14v9H9l-4 4z" /><path {...common} d="M8 10h4" /><path {...common} d="M8 13h8" /></>}
      {name === "briefcase" && <><path {...common} d="M4 8h16v11H4z" /><path {...common} d="M9 8V5h6v3" /><path {...common} d="M4 12h16" /><path {...common} d="M11 12v2h2v-2" /></>}
      {name === "award" && <><circle {...common} cx="12" cy="9" r="4" /><path {...common} d="m9.5 12.5-2 7 4.5-2 4.5 2-2-7" /><path {...common} d="M12 7v4" /></>}
      {name === "users" && <><circle {...common} cx="9" cy="8" r="3" /><circle {...common} cx="17" cy="9" r="2.5" /><path {...common} d="M3.5 19a5.5 5.5 0 0 1 11 0" /><path {...common} d="M14 16.5a4.5 4.5 0 0 1 6.5 2.5" /></>}
    </svg>
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

      <section id="henry" className="relative min-h-[700px] overflow-hidden bg-[#052315] text-white lg:min-h-[760px]">
        <div className="absolute inset-0">
          <img src="/henrys-asset.png" alt="Henry's Asset Approach" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,17,10,0.98)_0%,rgba(3,35,20,0.88)_33%,rgba(3,35,20,0.52)_62%,rgba(3,35,20,0.10)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#02140c]/95 via-[#02140c]/20 to-black/10" />
        <div className="relative mx-auto flex min-h-[700px] max-w-7xl flex-col justify-between px-5 py-14 md:px-10 lg:min-h-[760px] lg:px-8 lg:py-20">
            <div className="max-w-2xl pt-10 lg:pt-14">
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#d6b95f]">Kenali Henry&apos;s Asset Approach</p>
              <h2 className="mt-5 max-w-xl text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] md:text-6xl lg:text-7xl">Bina Aset,<br />Bukan Hanya<br />Selesai Hutang.</h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-white/80 md:text-lg">Papaipay membantu pelanggan melihat peluang aset yang sesuai dan merancang langkah seterusnya dengan lebih jelas dan tersusun.</p>
              <a href="#mohon" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#d6b95f] px-6 py-2.5 text-xs font-extrabold uppercase tracking-[0.12em] text-emerald-950 shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#e5cd7a]">Ketahui Lebih Lanjut <span aria-hidden="true">→</span></a>
            </div>
            <div className="mt-14 grid gap-5 border-t border-white/10 pt-7 md:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-white/10 lg:border-t-0 lg:pt-0">
              {henryHighlights.map(([icon, title, text]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-black/25 p-6 shadow-2xl shadow-black/15 backdrop-blur-md lg:rounded-none lg:border-0 lg:bg-transparent lg:px-10 lg:shadow-none lg:first:pl-0 lg:last:pr-0">
                  <LineIcon name={icon} className="h-14 w-14 rounded-full border border-[#d6b95f]/50 p-3 text-[#d6b95f]" />
                  <h3 className="mt-4 text-xl font-extrabold leading-tight text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/70">{text}</p>
                </div>
              ))}
            </div>
          </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7fbf8] px-5 py-24 lg:px-8">
        <div className="absolute inset-x-0 top-[58%] hidden border-t border-dashed border-emerald-700/20 lg:block" />
        <SectionTitle eyebrow="Bagaimana Ia Berfungsi" title="Berurusan Dengan Papaipay Dalam 4 Langkah Mudah" text="Daripada permohonan ringkas hingga cadangan penyelesaian, setiap langkah dibimbing dengan jelas oleh pasukan Papaipay." />
        <div className="relative mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {journeySteps.map(([number, icon, title, text]) => (
            <div key={number} className="group relative rounded-[1.75rem] border border-emerald-100 bg-white/95 p-7 text-center shadow-xl shadow-emerald-950/5 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-950/10">
              <div className="flex items-start justify-between gap-4">
                <span className="text-lg font-black tracking-[-0.04em] text-brand-700">{number}</span>
                <span className="h-px flex-1 bg-emerald-100/70" />
              </div>
              <div className="mx-auto mt-4 grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-emerald-50 to-white text-brand-700 ring-1 ring-emerald-100 shadow-inner shadow-emerald-950/5">
                <LineIcon name={icon} className="h-12 w-12" />
              </div>
              <h3 className="mt-7 text-lg font-extrabold leading-tight text-slate-950">{title}</h3>
              <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">{text}</p>
              <div className="mt-5 text-lg font-bold text-brand-700 transition group-hover:translate-x-1">→</div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#02140c] px-5 py-24 text-white lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(31,143,77,0.28),transparent_34%),radial-gradient(circle_at_78%_30%,rgba(214,185,95,0.16),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_24px)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#d6b95f]">Mengapa Memilih Papaipay</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.04] tracking-[-0.045em] md:text-5xl">Pendekatan Profesional<br />Hasil Yang Terbukti</h2>
            <p className="mt-5 text-base leading-8 text-white/70 md:text-lg">Kami membantu pelanggan melihat pilihan kewangan dan aset melalui pendekatan yang diperakui dan dipercayai.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {credibilityStats.map(([icon, stat, label, text]) => (
              <div key={label} className="rounded-[1.25rem] border border-[#d6b95f]/30 bg-white/10 p-7 text-center shadow-2xl shadow-black/10 backdrop-blur-md">
                <LineIcon name={icon} className="mx-auto h-12 w-12 text-[#d6b95f]" />
                <div className="mt-5 text-5xl font-extrabold tracking-[-0.06em] text-white md:text-6xl">{stat}</div>
                <h3 className="mt-3 text-sm font-extrabold uppercase tracking-[0.08em] text-white/90">{label}</h3>
                <div className="mx-auto mt-4 h-px w-10 bg-[#d6b95f]" />
                <p className="mt-4 text-sm leading-6 text-white/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mohon" className="bg-[#f7fbf8] px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[1.75rem] border border-emerald-100 bg-white shadow-2xl shadow-emerald-950/10 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#06321c] via-[#0b4a2a] to-[#02140c] p-7 text-white md:p-8 lg:p-9">
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-emerald-300/15 blur-3xl" />
            <div className="relative">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#d6b95f]">Mulakan Hari Ini</p>
              <h2 className="mt-4 max-w-md text-3xl font-extrabold leading-[1.04] tracking-[-0.045em] md:text-4xl">Mulakan Semakan Awal Bersama Papaipay</h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/75">Isi maklumat asas anda dan pasukan Papaipay akan menghubungi anda untuk semakan awal.</p>
              <div className="mt-6 grid gap-2.5 text-sm font-semibold text-white/80">
                {["Semakan awal tanpa komitmen", "Konsultasi bersama pakar berpengalaman", "Cadangan jelas dan berpandukan fakta"].map((item) => (
                  <div key={item} className="flex items-center gap-3"><span className="grid h-6 w-6 place-items-center rounded-full border border-[#d6b95f]/50 text-[#d6b95f]">✓</span>{item}</div>
                ))}
              </div>
              <p className="mt-6 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-xs font-semibold text-white/75">Kami akan hubungi anda dalam masa 1–2 hari bekerja.</p>
            </div>
          </div>
          <form className="grid content-center gap-3 bg-white p-6 md:p-7 lg:p-8">
            {["Nama penuh", "Nombor telefon", "Email"].map((label) => (
              <label key={label} className="grid gap-1.5 text-xs font-bold text-slate-600">
                {label}
                <input className="h-10 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-700 focus:bg-white" placeholder={label} />
              </label>
            ))}
            <label className="grid gap-1.5 text-xs font-bold text-slate-600">
              Catatan ringkas
              <textarea className="min-h-20 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-700 focus:bg-white" placeholder="Catatan ringkas" />
            </label>
            <button type="button" className="mt-1 rounded-full bg-brand-700 px-6 py-2.5 text-xs font-extrabold uppercase tracking-[0.12em] text-white shadow-lg shadow-emerald-950/15 transition hover:-translate-y-0.5 hover:bg-brand-900">Hantar Permohonan</button>
          </form>
        </div>
      </section>

      <footer className="bg-[#082314] px-5 py-14 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div className="md:col-span-2"><BrandLogo dark /><p className="mt-6 max-w-md leading-7 text-white/65">Papaipay menyediakan pendekatan perundingan kewangan dan aset yang lebih jelas, tersusun dan berpandu melalui Henry's Asset Approach.</p></div>
          <div><h4 className="font-extrabold">Links</h4><div className="mt-4 grid gap-2 text-white/65"><a href="#">About</a><a href="#henry">Approach</a><a href="#mohon">Apply Now</a></div></div>
          <div><h4 className="font-extrabold">Follow Us</h4><div className="mt-4 flex flex-wrap gap-2">{socials.map((social) => <span key={social} className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-white/70">{social}</span>)}</div></div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between"><span>© Papaipay. All rights reserved.</span><span>Privacy Policy · Terms & Conditions · Sitemap</span></div>
      </footer>
    </main>
  );
}
