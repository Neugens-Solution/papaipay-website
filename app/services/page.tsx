"use client";

import { useEffect, useState } from "react";

const navItems = ["About", "Approach", "Services", "Team", "Careers", "FAQ"];
const socials = ["Facebook", "Instagram", "LinkedIn"];

const services = [
  {
    title: "Penyatuan Komitmen Kewangan",
    image: "/Penyatuan-Komitmen-Kewangan.png",
    description: "Membantu pelanggan menyusun semula komitmen kewangan sedia ada supaya aliran kewangan menjadi lebih teratur dan mudah diuruskan.",
    bullets: ["Semakan komitmen semasa", "Penyusunan kewangan yang lebih tersusun", "Fokus kepada kestabilan kewangan"],
  },
  {
    title: "Pembiayaan Peribadi",
    image: "/Pembiayaan-Peribadi.png",
    description: "Membantu pelanggan memahami pilihan pembiayaan yang bersesuaian berdasarkan keperluan, kemampuan dan matlamat kewangan semasa.",
    bullets: ["Semakan kelayakan asas", "Panduan dokumentasi", "Sokongan proses permohonan"],
  },
  {
    title: "Penyelesaian SME",
    image: "/Penyelesaian-SME.png",
    description: "Direka untuk pemilik perniagaan dan usahawan yang memerlukan pendekatan kewangan yang lebih jelas bagi menyokong operasi dan pertumbuhan perniagaan.",
    bullets: ["Semakan keperluan perniagaan", "Pilihan penyelesaian yang bersesuaian", "Sokongan semakan dan dokumentasi"],
  },
  {
    title: "Henry's Asset Approach",
    label: "Papaipay Signature Approach",
    image: "/Henry-Asset-Approach.png",
    description: "Pendekatan eksklusif Papaipay yang memberi fokus kepada bagaimana komitmen kewangan boleh diurus secara lebih strategik bagi membuka ruang kepada pembinaan aset dan perancangan jangka panjang.",
    bullets: ["Fokus kepada pembangunan aset", "Perancangan kewangan yang lebih mampan", "Membantu membuka peluang pemilikan aset masa hadapan"],
  },
];

const processSteps = [
  ["01", "Memahami Situasi Anda", "Kami menilai kedudukan kewangan, komitmen semasa dan matlamat pelanggan secara menyeluruh."],
  ["02", "Menilai Pilihan Yang Tersedia", "Kami membantu mengenal pasti pilihan yang bersesuaian berdasarkan profil dan keperluan pelanggan."],
  ["03", "Mencadangkan Strategi Yang Sesuai", "Cadangan diberikan secara lebih terarah supaya pelanggan boleh membuat keputusan dengan lebih yakin."],
  ["04", "Pelaksanaan & Pemantauan", "Kami membantu pelanggan melalui proses seterusnya dan memberi panduan sehingga tindakan susulan selesai."],
];

const situationCards = [
  ["Rekod Bayaran Tidak Konsisten", "Rekod pembayaran yang tidak konsisten boleh memberi kesan kepada proses semakan dan pilihan yang tersedia."],
  ["Penggunaan Kredit Yang Tinggi", "Penggunaan kemudahan kredit yang hampir kepada had maksimum boleh mempengaruhi kedudukan kewangan keseluruhan."],
  ["Komitmen Kewangan Yang Tinggi", "Komitmen sedia ada yang tinggi berbanding pendapatan boleh menghadkan fleksibiliti kewangan."],
  ["Dokumentasi Tidak Lengkap", "Maklumat dan dokumen yang lengkap membantu mempercepatkan proses semakan dan penilaian."],
];

const challenges = ["Komitmen kewangan bertindih", "Aliran tunai tidak seimbang", "Rekod pembayaran kurang konsisten", "Pilihan kewangan yang kurang jelas"];
const approaches = ["Penyusunan komitmen yang lebih teratur", "Semakan dan perancangan kewangan", "Panduan berdasarkan situasi individu", "Penilaian pilihan yang bersesuaian"];
const requirements = [
  "Warganegara Malaysia berumur 21 hingga 60 tahun.",
  "Mempunyai pendapatan tetap setiap bulan.",
  "Mempunyai rekod pinjaman bank atau kad kredit melebihi 6 bulan.",
  "Tidak mempunyai tunggakan bayaran bank melebihi 2 bulan berturut-turut.",
  "Terbuka kepada sektor Kerajaan, GLC dan Swasta.",
  "Menyediakan dokumen sokongan seperti salinan kad pengenalan, slip gaji terkini dan penyata bank 3 hingga 6 bulan.",
];
const tableRows = [
  ["RM50,000", "RM969", "RM733", "RM558"],
  ["RM100,000", "RM1,938", "RM1,466", "RM1,116"],
  ["RM150,000", "RM2,907", "RM2,199", "RM1,673"],
  ["RM200,000", "RM3,876", "RM2,932", "RM2,231"],
];
const faqCategories = [
  { category: "Kelayakan", items: [["Siapa yang layak memohon melalui Papaipay?", "Warganegara Malaysia berumur 21–60 tahun dengan pendapatan tetap."], ["Apa faktor yang boleh mempengaruhi proses semakan?", "Rekod lewat bayar, komitmen kewangan yang tinggi, penggunaan kad kredit yang tinggi, atau dokumen yang tidak lengkap."], ["Boleh mohon semula jika permohonan ditolak?", "Ya, selepas memperbaiki rekod kewangan atau mengemaskini dokumen yang diperlukan."]] },
  { category: "Permohonan", items: [["Bagaimana Papaipay membantu pelanggan?", "Papaipay bertindak sebagai perunding dengan membantu proses semakan, penyediaan dokumen dan panduan sepanjang proses permohonan."], ["Apakah dokumen yang perlu disediakan?", "Salinan Kad Pengenalan (IC), slip gaji terkini, penyata bank dan dokumen sokongan pekerjaan yang berkaitan."], ["Adakah terdapat caj untuk perkhidmatan ini?", "Caj bergantung kepada jenis perkhidmatan yang diperlukan dan akan diterangkan dengan jelas sebelum sebarang proses dimulakan."]] },
  { category: "Proses", items: [["Berapa lama proses semakan biasanya mengambil masa?", "Kebiasaannya antara 1 hingga 3 hari bekerja selepas dokumen lengkap diterima dan dihantar untuk semakan."], ["Adakah Papaipay yang membuat kelulusan?", "Tidak. Kelulusan adalah tertakluk kepada pihak institusi kewangan yang berkaitan. Papaipay membantu dalam proses semakan dan penyediaan permohonan."], ["Bagaimana saya akan menerima status semakan?", "Status semakan akan dimaklumkan melalui WhatsApp, e-mel atau panggilan telefon."]] },
];

function BrandLogo({ dark = false }: { dark?: boolean }) {
  return <div className="flex items-center"><img src="/papaipay-logo.svg" alt="Papaipay" className={`h-11 w-auto object-contain md:h-14 ${dark ? "brightness-0 invert" : ""}`} /></div>;
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/30 bg-white/75 shadow-sm shadow-emerald-950/5 backdrop-blur-md" : "border-b border-transparent bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
        <a href="/" aria-label="Papaipay Home"><BrandLogo dark={!scrolled} /></a>
        <nav className={`hidden items-center gap-7 text-[13px] font-semibold tracking-[-0.01em] lg:flex ${scrolled ? "text-slate-700" : "text-white/90"}`}>{navItems.map((item) => <a key={item} href={item === "Services" ? "/services" : "#"} className={`group relative py-3 transition ${scrolled ? "hover:text-brand-700" : "hover:text-white"}`}><span>{item}</span><span className={`absolute inset-x-0 bottom-1 h-0.5 origin-left scale-x-0 rounded-full transition group-hover:scale-x-100 ${scrolled ? "bg-brand-700" : "bg-white"}`} /></a>)}</nav>
        <div className="hidden items-center gap-3 lg:flex"><button className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${scrolled ? "border-slate-200 bg-white/70 text-slate-700 hover:border-brand-700 hover:text-brand-700" : "border-white/30 bg-white/10 text-white hover:bg-white/15"}`}>BM | EN</button><a href="/contact" className={`rounded-full px-5 py-3 text-xs font-extrabold uppercase tracking-[0.08em] shadow-lg transition hover:-translate-y-0.5 ${scrolled ? "bg-brand-700 text-white shadow-emerald-900/20 hover:bg-brand-900" : "bg-white text-brand-900 shadow-black/10 hover:bg-white/90"}`}>Apply Now</a></div>
        <button className={`rounded-2xl border px-4 py-3 text-xs font-black lg:hidden ${scrolled ? "border-slate-200 text-slate-800" : "border-white/30 text-white"}`}>MENU</button>
      </div>
    </header>
  );
}

function SocialIcon({ name, className = "" }: { name: string; className?: string }) {
  const common = { fill: "currentColor" };
  return <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>{name === "Facebook" && <path {...common} d="M14 8.4V6.7c0-.8.6-1.1 1.1-1.1h1.7V2.5L14.4 2.5c-3 0-4.4 1.8-4.4 4.3v1.6H7v3.5h3V22h3.7V11.9h2.7l.5-3.5H14Z" />}{name === "Instagram" && <><path {...common} d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Z" /><path {...common} d="M12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6ZM17.1 6.6a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" /></>}{name === "LinkedIn" && <><path {...common} d="M5.1 8.6H2V22h3.1V8.6ZM3.6 2A1.8 1.8 0 1 0 3.6 5.6 1.8 1.8 0 0 0 3.6 2ZM22 14.2c0-3.6-1.9-5.9-5-5.9-2 0-3.2 1.1-3.7 2.1V8.6h-3.1V22h3.1v-7.2c0-2 .9-3.3 2.7-3.3 1.6 0 2.5 1.1 2.5 3.2V22H22v-7.8Z" /></>}</svg>;
}

function Footer() {
  return <footer className="bg-[#082314] px-5 py-14 text-white lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4"><div className="md:col-span-2"><BrandLogo dark /><p className="mt-6 max-w-md text-sm leading-6 text-white/60">Papaipay sentiasa bersedia membantu anda. Sama ada untuk pertanyaan pinjaman, semakan kelayakan, atau maklumat lanjut mengenai perkhidmatan kami.</p></div><div><h4 className="font-extrabold">Links</h4><div className="mt-4 grid gap-2 text-sm text-white/65"><a href="#">About</a><a href="#henry">Approach</a><a href="/services">Services</a><a href="#">Team</a><a href="#">Careers</a><a href="#faq">FAQ</a><a href="/contact">Apply Now</a></div></div><div><h4 className="font-extrabold">Follow Us</h4><div className="mt-4 flex flex-wrap gap-5">{socials.map((social) => <a key={social} href="#" aria-label={social} className="text-white/65 transition hover:-translate-y-0.5 hover:text-[#d6b95f]"><SocialIcon name={social} className="h-6 w-6" /></a>)}</div></div></div><div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between"><span>© Papaipay. All rights reserved.</span><span>Privacy Policy · Terms & Conditions · Sitemap</span></div></footer>;
}

function SectionHeading({ eyebrow, title, intro, light = false }: { eyebrow?: string; title: string; intro?: string; light?: boolean }) {
  return <div className="mx-auto max-w-3xl text-center">{eyebrow && <p className={`text-xs font-extrabold uppercase tracking-[0.28em] ${light ? "text-[#d6b95f]" : "text-brand-700"}`}>{eyebrow}</p>}<h2 className={`mt-4 text-3xl font-extrabold leading-[1.04] tracking-[-0.045em] md:text-5xl ${light ? "text-white" : "text-slate-950"}`}>{title}</h2>{intro && <p className={`mt-5 text-base leading-8 md:text-lg ${light ? "text-white/72" : "text-slate-600"}`}>{intro}</p>}</div>;
}

function CheckIcon({ muted = false }: { muted?: boolean }) { return <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-black ${muted ? "bg-white/10 text-white/70" : "bg-brand-700/10 text-brand-700"}`}>✓</span>; }

function ServiceTabs() {
  const [active, setActive] = useState(0);
  const service = services[active];
  return <section className="bg-white px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Perkhidmatan" title="Penyelesaian Kewangan Yang Tersusun" intro="Setiap perkhidmatan direka untuk membantu pelanggan memahami kedudukan kewangan mereka sebelum membuat keputusan yang lebih jelas dan bertanggungjawab." /><div className="mt-12 flex flex-col gap-3 rounded-[2rem] border border-emerald-100 bg-[#f7fbf8] p-3 md:flex-row">{services.map((item, index) => <button key={item.title} onClick={() => setActive(index)} className={`rounded-[1.35rem] px-5 py-4 text-left text-sm font-extrabold transition md:flex-1 md:text-center ${active === index ? "bg-brand-700 text-white shadow-lg shadow-emerald-950/15" : "bg-white text-slate-700 hover:text-brand-700"}`}>{item.title}</button>)}</div><article className="mt-8 grid gap-8 rounded-[2rem] border border-emerald-100 bg-white p-5 shadow-2xl shadow-emerald-950/5 md:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div className="order-2 lg:order-1"><p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-700">{service.label ?? "Papaipay Advisory"}</p><h3 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-slate-950 md:text-4xl">{service.title}</h3><p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{service.description}</p><ul className="mt-8 grid gap-4">{service.bullets.map((bullet) => <li key={bullet} className="flex items-start gap-3 text-sm font-semibold text-slate-700"><CheckIcon /> <span>{bullet}</span></li>)}</ul></div><div className="order-1 overflow-hidden rounded-[1.5rem] bg-emerald-950/5 lg:order-2"><img src={service.image} alt={service.title} className="aspect-[5/3] h-full w-full object-cover" /></div></article></div></section>;
}

export default function ServicesPage() {
  return <main className="min-h-screen bg-[#f7fbf8] text-slate-950"><Header />
    <section className="relative flex min-h-[190px] items-center justify-center overflow-hidden pt-16 text-center text-white md:min-h-[320px] md:pt-16"><div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero-service.png')" }} /><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,26,14,0.9)_0%,rgba(3,26,14,0.72)_48%,rgba(3,26,14,0.88)_100%)]" /><div className="absolute inset-0 bg-gradient-to-t from-[#031a0e]/82 via-black/10 to-black/30" /><div className="relative mx-auto w-full max-w-7xl px-5 py-8 md:py-16 lg:px-8"><h1 className="text-3xl font-extrabold leading-[1.05] tracking-[-0.05em] md:text-4xl lg:text-5xl">Our Services</h1></div></section>
    <ServiceTabs />
    <section className="bg-[#f7fbf8] px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><SectionHeading title="Cara Kami Membantu" intro="Pendekatan kami bermula dengan memahami keadaan pelanggan sebelum mencadangkan pilihan yang lebih sesuai dan tersusun." /><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{processSteps.map(([num, title, text]) => <article key={num} className="rounded-[1.75rem] border border-emerald-100 bg-white p-7 shadow-xl shadow-emerald-950/5"><div className="text-5xl font-extrabold tracking-[-0.08em] text-brand-700/20">{num}</div><h3 className="mt-8 text-xl font-extrabold leading-tight tracking-[-0.04em]">{title}</h3><p className="mt-4 text-sm leading-7 text-slate-600">{text}</p></article>)}</div></div></section>
    <section className="bg-white px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><SectionHeading title="Adakah Situasi Ini Berkaitan Dengan Anda?" intro="Beberapa faktor berikut sering mempengaruhi proses semakan dan pilihan kewangan yang tersedia." /><div className="mt-12 grid gap-5 md:grid-cols-2">{situationCards.map(([title, text], index) => <article key={title} className="rounded-[1.75rem] border border-emerald-100 bg-[#f7fbf8] p-7 shadow-xl shadow-emerald-950/5"><div className="grid h-11 w-11 place-items-center rounded-full bg-white text-sm font-black text-brand-700 shadow-lg shadow-emerald-950/5">0{index + 1}</div><h3 className="mt-6 text-xl font-extrabold tracking-[-0.035em]">{title}</h3><p className="mt-4 text-sm leading-7 text-slate-600">{text}</p></article>)}</div></div></section>
    <section className="relative overflow-hidden bg-[#02140c] px-5 py-20 text-white lg:px-8 lg:py-24"><div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(31,143,77,0.36),transparent_34%),radial-gradient(circle_at_84%_24%,rgba(214,185,95,0.18),transparent_30%)]" /><div className="relative mx-auto max-w-7xl"><SectionHeading light title="Daripada Cabaran Kepada Penyelesaian" intro="Papaipay membantu pelanggan melihat semula kedudukan kewangan mereka dengan pendekatan yang lebih tersusun, jelas dan bertanggungjawab." /><div className="mt-12 grid gap-5 lg:grid-cols-2"><div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-md"><h3 className="text-2xl font-extrabold tracking-[-0.04em]">Cabaran Yang Sering Dihadapi</h3><ul className="mt-7 grid gap-4">{challenges.map((item) => <li key={item} className="flex gap-3 text-white/78"><span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#d6b95f]/70" />{item}</li>)}</ul></div><div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-md"><h3 className="text-2xl font-extrabold tracking-[-0.04em]">Pendekatan Papaipay</h3><ul className="mt-7 grid gap-4">{approaches.map((item) => <li key={item} className="flex gap-3 text-white/82"><CheckIcon muted />{item}</li>)}</ul></div></div></div></section>
    <section className="bg-[#f7fbf8] px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><SectionHeading title="Syarat Asas Untuk Semakan" intro="Syarat berikut membantu pelanggan memahami kelayakan awal sebelum proses semakan diteruskan." /><div className="mt-12 grid gap-4 md:grid-cols-2">{requirements.map((item) => <div key={item} className="flex gap-4 rounded-[1.35rem] border border-emerald-100 bg-white p-5 shadow-lg shadow-emerald-950/5"><CheckIcon /><p className="text-sm font-semibold leading-7 text-slate-700">{item}</p></div>)}</div><p className="mt-6 text-center text-sm font-semibold text-slate-500">Tertakluk kepada semakan lanjut berdasarkan profil dan dokumen pelanggan.</p></div></section>
    <section className="bg-white px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><SectionHeading title="Contoh Anggaran Komitmen Bulanan" intro="Jadual berikut menunjukkan contoh anggaran komitmen bulanan berdasarkan jumlah pembiayaan dan tempoh yang berbeza." /><div className="mt-12 overflow-x-auto rounded-[1.5rem] border border-emerald-100 shadow-xl shadow-emerald-950/5"><table className="w-full min-w-[680px] border-collapse bg-white text-left"><thead className="bg-[#082314] text-white"><tr>{["Jumlah Pembiayaan", "5 Tahun", "7 Tahun", "10 Tahun"].map((head) => <th key={head} className="px-6 py-5 text-sm font-extrabold">{head}</th>)}</tr></thead><tbody>{tableRows.map((row) => <tr key={row[0]} className="border-b border-emerald-100 last:border-0">{row.map((cell, index) => <td key={cell} className={`px-6 py-5 text-sm ${index === 0 ? "font-extrabold text-brand-900" : "font-semibold text-slate-700"}`}>{cell}</td>)}</tr>)}</tbody></table></div><p className="mt-6 text-sm leading-7 text-slate-500">Maklumat yang dipaparkan adalah untuk tujuan ilustrasi dan rujukan umum sahaja. Kadar, jumlah pembiayaan serta komitmen bulanan sebenar adalah tertakluk kepada penilaian, kelayakan dan kelulusan institusi kewangan yang berkaitan.</p></div></section>
    <section id="faq" className="bg-[#f7fbf8] px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-5xl"><SectionHeading title="FAQ" intro="Jawapan ringkas kepada soalan lazim berkaitan kelayakan, permohonan dan proses semakan." /><div className="mt-12 space-y-8">{faqCategories.map((group) => <div key={group.category}><h3 className="mb-4 text-xl font-extrabold text-brand-900">{group.category}</h3><div className="space-y-3">{group.items.map(([question, answer]) => <details key={question} className="group rounded-[1.25rem] border border-emerald-100 bg-white p-5 shadow-lg shadow-emerald-950/5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-extrabold text-slate-950">{question}<span className="text-brand-700 transition group-open:rotate-45">+</span></summary><p className="mt-4 text-sm leading-7 text-slate-600">{answer}</p></details>)}</div></div>)}</div></div></section>
    <section className="bg-white px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#082314] p-8 text-center text-white shadow-2xl shadow-emerald-950/20 md:p-14"><p className="text-xs font-extrabold uppercase tracking-[0.3em] text-[#d6b95f]">Hubungi Papaipay</p><h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.045em] md:text-5xl">Perlukan Panduan Mengenai Pilihan Kewangan Anda?</h2><p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/72">Pasukan kami sedia membantu anda memahami pilihan yang sesuai berdasarkan situasi kewangan semasa dan matlamat masa hadapan anda.</p><a href="/contact" className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-900 shadow-xl transition hover:-translate-y-0.5 hover:bg-white/90">Hubungi Kami</a></div></section>
    <Footer /></main>;
}
