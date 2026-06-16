"use client";

import { useEffect, useState } from "react";

import { Footer as SiteFooter, Header as SiteHeader } from "../site-components";
const navItems = [["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Team", "/team"], ["Careers", "/careers"], ["Contact Us", "/contact"]];
const socials = ["Facebook", "Instagram", "TikTok"];
const missionItems = [
  ["target", "Bertindak untuk Perubahan", "Membantu keluarga mengurus aset dengan bijak, mengurangkan beban hutang, dan mencapai kebebasan kewangan menjadikan cabaran hari ini sebagai peluang untuk masa depan yang lebih baik."],
  ["users", "Fokus kepada Pelanggan", "Membimbing setiap isi rumah dari hutang ke arah kestabilan dan kekayaan melalui strategi aset yang disesuaikan. Kami mendengar, mendidik, dan bertindak agar setiap keputusan kewangan membawa manfaat jangka panjang."],
  ["spark", "Didorong oleh Impak", "Komited untuk memutuskan kitaran hutang dengan memanfaatkan kekuatan aset. Kami menyediakan ilmu, pembiayaan, dan strategi bagi membina masa depan kewangan yang kukuh dan mampan."],
];
const coreValues = [
  ["Integriti", "Kami mengutamakan ketelusan dan kepercayaan dalam setiap urusan."],
  ["Profesionalisme", "Setiap nasihat dan panduan diberikan dengan penuh tanggungjawab dan etika."],
  ["Komitmen Jangka Panjang", "Kami fokus kepada hubungan yang berterusan dan kejayaan pelanggan dalam jangka panjang."],
  ["Pembelajaran Berterusan", "Kami sentiasa menambah ilmu dan kemahiran untuk memberi nilai dan penyelesaian yang lebih baik."],
];

function BrandLogo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center">
      <img src="/papaipay-logo.svg" alt="Papaipay" className={`h-11 w-auto object-contain md:h-14 ${dark ? "brightness-0 invert" : ""}`} />
    </div>
  );
}

function SocialIcon({ name, className = "" }: { name: string; className?: string }) {
  const common = { fill: "currentColor" };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      {name === "Facebook" && <path {...common} d="M14 8.4V6.7c0-.8.6-1.1 1.1-1.1h1.7V2.5L14.4 2.5c-3 0-4.4 1.8-4.4 4.3v1.6H7v3.5h3V22h3.7V11.9h2.7l.5-3.5H14Z" />}
      {name === "Instagram" && <><path {...common} d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Z" /><path {...common} d="M12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6ZM17.1 6.6a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" /></>}

    </svg>
  );
}

function SmallIcon({ name, className = "" }: { name: string; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeLinecap: "round" as const, strokeLinejoin: "round" as const, strokeWidth: 1.8 };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      {name === "target" && <><circle {...common} cx="12" cy="12" r="8" /><circle {...common} cx="12" cy="12" r="4" /><path {...common} d="M12 2v3M12 19v3M2 12h3M19 12h3" /></>}
      {name === "users" && <><circle {...common} cx="9" cy="8" r="3" /><circle {...common} cx="17" cy="9" r="2.5" /><path {...common} d="M3.5 19a5.5 5.5 0 0 1 11 0" /><path {...common} d="M14 16.5a4.5 4.5 0 0 1 6.5 2.5" /></>}
      {name === "spark" && <><path {...common} d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" /><path {...common} d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" /></>}
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7fbf8] text-slate-950">
      <SiteHeader active="About" />

      <section className="relative flex min-h-[190px] items-center justify-center overflow-hidden pt-16 text-center text-white md:min-h-[320px] md:pt-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero-about-us.png')" }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,26,14,0.9)_0%,rgba(3,26,14,0.72)_48%,rgba(3,26,14,0.88)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031a0e]/82 via-black/10 to-black/30" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-8 md:py-16 lg:px-8">
          <h1 className="text-3xl font-extrabold leading-[1.05] tracking-[-0.05em] md:text-4xl lg:text-5xl">About Us</h1>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
          <div className="hidden min-h-[315px] overflow-hidden border border-emerald-100 bg-[#f7fbf8] shadow-xl shadow-emerald-950/5 md:block">
            <img src="/tentang-papaipay.png" alt="Tentang Papaipay" className="h-full min-h-[315px] w-full object-cover" />
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-700">Tentang Papaipay</p>
            <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
              <p>Dengan pengalaman melebihi 10 tahun dalam bidang perundingan kewangan serta rangkaian lebih 80 wakil penasihat kewangan, Papaipay telah membantu ribuan pelanggan memahami situasi kewangan mereka dan yang merancang langkah kewangan yang lebih sesuai dengan keperluan masing-masing.</p>
              <p>Kami percaya bahawa setiap situasi kewangan adalah berbeza. Atas sebab itu, pendekatan kami bermula dengan memahami keadaan pelanggan secara menyeluruh sebelum sebarang nasihat diberikan. Fokus kami bukan sekadar kepada penyelesaian jangka pendek, tetapi membantu pelanggan membuat keputusan yang lebih selamat, berbaloi dan lebih mampan untuk masa hadapan.</p>
              <p>Melalui pengalaman yang dibina bersama lebih 16,000 pelanggan berpuas hati dan nilai aset di bawah nasihat yang mencecah ratusan juta ringgit, Papaipay terus komited untuk menjadi rakan perunding yang dipercayai dalam membantu pelanggan mencapai matlamat kewangan mereka.</p>
              <p>Hari ini, Papaipay terus berkembang dengan satu matlamat yang sama iaitu membantu lebih ramai individu dan keluarga membuat keputusan kewangan yang lebih baik dengan telus, profesional dan berorientasikan hasil.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbf8] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-white/80 text-brand-700 ring-1 ring-emerald-100 shadow-lg shadow-emerald-950/5">
            <SmallIcon name="target" className="h-6 w-6 opacity-80" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold uppercase leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-5xl">VISI KAMI</h2>
          <blockquote className="mx-auto mt-7 max-w-4xl text-lg font-medium leading-8 tracking-[-0.02em] text-slate-700 md:text-xl md:leading-9">“Untuk memperkasakan isi rumah dengan mengubah liabiliti kewangan kepada peluang melalui pengurusan aset strategik, memupuk kesihatan kewangan yang mampan dan kestabilan jangka panjang. Kami berhasrat untuk mengurangkan beban hutang dengan melengkapkan individu dengan alat, pengetahuan dan sumber untuk mengembangkan dan memanfaatkan aset yang membuka jalan kepada kebebasan kewangan dan kemakmuran generasi.”</blockquote>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#02140c] px-5 py-24 text-white lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(31,143,77,0.36),transparent_34%),radial-gradient(circle_at_84%_24%,rgba(214,185,95,0.18),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_24px)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.32em] text-[#d6b95f]">MISI KAMI</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {missionItems.map(([icon, title, text]) => (
              <div key={title} className="rounded-[1.75rem] border border-white/10 bg-white/10 p-8 text-center shadow-2xl shadow-black/10 backdrop-blur-md">
                <div className="mx-auto grid h-11 w-11 place-items-center rounded-full border border-[#d6b95f]/35 bg-white/10 text-[#d6b95f]">
                  <SmallIcon name={icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold leading-tight tracking-[-0.04em] text-white">{title}</h3>
                <p className="mt-5 text-sm leading-7 text-white/72">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbf8] px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-700">PHILOSOPHY KAMI</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-5xl">Nilai-Nilai Yang Membentuk Cara Kami Berkhidmat</h2>
            <p className="mt-6 max-w-md text-base leading-8 text-slate-600">Prinsip ini menjadi asas kepada cara Papaipay membina kepercayaan, memberi panduan dan menyokong pelanggan dalam membuat keputusan kewangan yang lebih baik.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
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

      <SiteFooter />
    </main>
  );
}
