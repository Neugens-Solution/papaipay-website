"use client";

import { useEffect, useState } from "react";

const navItems = ["About", "Approach", "Services", "Team", "Careers", "FAQ"];
const socials = ["Facebook", "Instagram", "LinkedIn"];
const missionItems = [
  ["Membimbing Dengan Jelas", "Membantu pelanggan memahami pilihan kewangan yang tersedia melalui penerangan yang mudah difahami dan tersusun."],
  ["Fokus Kepada Pelanggan", "Setiap cadangan bermula dengan memahami keperluan, matlamat dan situasi sebenar pelanggan."],
  ["Didorong Oleh Impak", "Membantu pelanggan membuat keputusan yang lebih baik demi kesejahteraan kewangan jangka panjang."],
];
const coreValues = [
  ["Integriti", "Kami mengutamakan ketelusan dan kepercayaan dalam setiap urusan."],
  ["Profesionalisme", "Setiap nasihat dan panduan diberikan dengan penuh tanggungjawab dan etika."],
  ["Fokus Pelanggan", "Keperluan pelanggan sentiasa menjadi keutamaan dalam setiap cadangan."],
  ["Penambahbaikan Berterusan", "Kami sentiasa memperkukuh pengetahuan, kemahiran dan pendekatan bagi memberikan nilai yang lebih baik."],
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

function SocialIcon({ name, className = "" }: { name: string; className?: string }) {
  const common = { fill: "currentColor" };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      {name === "Facebook" && <path {...common} d="M14 8.4V6.7c0-.8.6-1.1 1.1-1.1h1.7V2.5L14.4 2.5c-3 0-4.4 1.8-4.4 4.3v1.6H7v3.5h3V22h3.7V11.9h2.7l.5-3.5H14Z" />}
      {name === "Instagram" && <><path {...common} d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Z" /><path {...common} d="M12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6ZM17.1 6.6a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" /></>}
      {name === "LinkedIn" && <><path {...common} d="M5.1 8.6H2V22h3.1V8.6ZM3.6 2A1.8 1.8 0 1 0 3.6 5.6 1.8 1.8 0 0 0 3.6 2ZM22 14.2c0-3.6-1.9-5.9-5-5.9-2 0-3.2 1.1-3.7 2.1V8.6h-3.1V22h3.1v-7.2c0-2 .9-3.3 2.7-3.3 1.6 0 2.5 1.1 2.5 3.2V22H22v-7.8Z" /></>}
    </svg>
  );
}

function Footer() {
  return (
    <footer className="bg-[#082314] px-5 py-14 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2"><BrandLogo dark /><p className="mt-6 max-w-md text-sm leading-6 text-white/60">Papaipay sentiasa bersedia membantu anda. Sama ada untuk pertanyaan pinjaman, semakan kelayakan, atau maklumat lanjut mengenai perkhidmatan kami.</p></div>
        <div><h4 className="font-extrabold">Links</h4><div className="mt-4 grid gap-2 text-sm text-white/65"><a href="#">About</a><a href="#henry">Approach</a><a href="#services">Services</a><a href="#">Team</a><a href="#">Careers</a><a href="#">FAQ</a><a href="#mohon">Apply Now</a></div></div>
        <div><h4 className="font-extrabold">Follow Us</h4><div className="mt-4 flex flex-wrap gap-5">{socials.map((social) => <a key={social} href="#" aria-label={social} className="text-white/65 transition hover:-translate-y-0.5 hover:text-[#d6b95f]"><SocialIcon name={social} className="h-6 w-6" /></a>)}</div></div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between"><span>© Papaipay. All rights reserved.</span><span>Privacy Policy · Terms & Conditions · Sitemap</span></div>
    </footer>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7fbf8] text-slate-950">
      <Header />

      <section className="relative flex min-h-[360px] items-center overflow-hidden pt-20 text-white md:min-h-[320px] md:pt-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero-about-us.png')" }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,26,14,0.95)_0%,rgba(3,26,14,0.78)_42%,rgba(3,26,14,0.32)_72%,rgba(3,26,14,0.08)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031a0e]/80 via-transparent to-black/20" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 lg:px-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-[#d6b95f]">ABOUT PAPAIPAY</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.03] tracking-[-0.055em] md:text-5xl lg:text-[56px]">Membantu Pelanggan Membuat Keputusan Dengan Lebih Yakin</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/78 md:text-lg">Kami percaya setiap keputusan kewangan yang baik bermula dengan kefahaman yang jelas, panduan yang betul dan perancangan yang tersusun.</p>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-700">Tentang Papaipay</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-5xl">Rakan Perunding Yang Dipercayai Untuk Keputusan Kewangan Yang Lebih Baik</h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
              <p>Dengan pengalaman melebihi 10 tahun dalam bidang perundingan kewangan serta rangkaian lebih 80 wakil penasihat kewangan, Papaipay telah membantu ribuan pelanggan memahami situasi kewangan mereka dan yang merancang langkah kewangan yang lebih sesuai dengan keperluan masing-masing.</p>
              <p>Kami percaya bahawa setiap situasi kewangan adalah berbeza. Atas sebab itu, pendekatan kami bermula dengan memahami keadaan pelanggan secara menyeluruh sebelum sebarang nasihat diberikan. Fokus kami bukan sekadar kepada penyelesaian jangka pendek, tetapi membantu pelanggan membuat keputusan yang lebih selamat, berbaloi dan lebih mampan untuk masa hadapan.</p>
              <p>Melalui pengalaman yang dibina bersama lebih 16,000 pelanggan berpuas hati dan nilai aset di bawah nasihat yang mencecah ratusan juta ringgit, Papaipay terus komited untuk menjadi rakan perunding yang dipercayai dalam membantu pelanggan mencapai matlamat kewangan mereka.</p>
              <p>Hari ini, Papaipay terus berkembang dengan satu matlamat yang sama iaitu membantu lebih ramai individu dan keluarga membuat keputusan kewangan yang lebih baik dengan telus, profesional dan berorientasikan hasil.</p>
            </div>
          </div>
          <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] bg-[#06321c] shadow-2xl shadow-emerald-950/15">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero-about-us.png')" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#02140c]/88 via-[#06321c]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#d6b95f]">Professional Consultation</p>
              <p className="mt-3 max-w-sm text-xl font-extrabold leading-tight tracking-[-0.04em]">Pendekatan profesional, telus dan berpusatkan pelanggan.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbf8] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand-700">Visi Kami</p>
          <h2 className="mt-6 text-3xl font-extrabold leading-[1.08] tracking-[-0.055em] text-slate-950 md:text-5xl lg:text-6xl">Memperkasakan isi rumah melalui pengurusan kewangan dan aset yang lebih strategik, mampan dan berorientasikan masa depan bagi membantu membina kestabilan kewangan jangka panjang.</h2>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-700">Misi Kami</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-5xl">Komitmen Kami Dalam Setiap Sesi Konsultasi</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {missionItems.map(([title, text]) => (
              <div key={title} className="rounded-[1.75rem] border border-emerald-100 bg-[#f7fbf8] p-8 shadow-xl shadow-emerald-950/5">
                <h3 className="text-2xl font-extrabold leading-tight tracking-[-0.04em] text-slate-950">{title}</h3>
                <p className="mt-5 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbf8] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-700">Nilai Teras</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-5xl">Nilai Yang Membentuk Cara Kami Berkhidmat</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {coreValues.map(([title, text]) => (
              <div key={title} className="rounded-[1.5rem] border border-emerald-100 bg-white p-7 shadow-xl shadow-emerald-950/5">
                <div className="mb-7 h-1 w-12 rounded-full bg-[#d6b95f]" />
                <h3 className="text-xl font-extrabold leading-tight tracking-[-0.04em] text-slate-950">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-[#02140c] px-5 py-24 text-white lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(31,143,77,0.32),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(214,185,95,0.18),transparent_28%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur md:p-12 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#d6b95f]">Strategic Partnership</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.04] tracking-[-0.045em] md:text-5xl">Mari Membina Kerjasama Yang Bermakna</h2>
            <p className="mt-5 text-base leading-8 text-white/70 md:text-lg">Papaipay sentiasa terbuka untuk menjalin kerjasama strategik bersama organisasi, institusi, persatuan dan rakan industri yang berkongsi aspirasi untuk membantu lebih ramai masyarakat membuat keputusan kewangan yang lebih baik.</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
            <a href="#" className="rounded-full bg-white px-7 py-4 text-center text-xs font-extrabold uppercase tracking-[0.1em] text-brand-900 shadow-xl shadow-black/10 transition hover:-translate-y-0.5">Hubungi Kami</a>
            <a href="#" className="rounded-full border border-white/25 px-7 py-4 text-center text-xs font-extrabold uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5 hover:bg-white/10">Jalin Kerjasama</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
