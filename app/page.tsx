const navItems = ["Tentang Kami", "Henry Asset", "Perkhidmatan", "Pasukan", "Kerjaya", "FAQ"];
const trustCards = ["Kefahaman Sebelum Keputusan", "Proses Yang Tersusun", "Bimbingan Yang Jelas"];
const services = ["Perundingan Kewangan", "Perancangan Aset", "Pendidikan Kewangan", "Bimbingan Pelanggan"];
const socials = ["Facebook", "Instagram", "TikTok"];

function BrandLogo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center">
      <img
        src="/papaipay-logo.svg"
        alt="Papaipay"
        className={`h-11 w-auto object-contain md:h-14 ${dark ? "brightness-0 invert" : ""}`}
      />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/90 backdrop-blur-xl shadow-sm shadow-emerald-950/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#" aria-label="Papaipay Home">
          <BrandLogo />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-bold text-slate-700 lg:flex">
          {navItems.map((item) => <a key={item} href="#" className="transition hover:text-brand-700">{item}</a>)}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-brand-700 hover:text-brand-700">BM | EN</button>
          <a href="#mohon" className="rounded-full bg-brand-700 px-5 py-3 text-sm font-black text-white shadow-lg shadow-emerald-900/20 transition hover:bg-brand-900">Mohon Sekarang</a>
        </div>
        <button className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-black text-slate-800 lg:hidden">MENU</button>
      </div>
    </header>
  );
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-black uppercase tracking-[0.26em] text-brand-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-slate-950 md:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7fbf8] text-slate-950">
      <Header />
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-brand-900 via-brand-700 to-emerald-500 pt-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.22),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.14),transparent_24%)]" />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] backdrop-blur">Plan Advisor • Pay Advisor</div>
            <h1 className="text-4xl font-black leading-tight tracking-[-0.04em] md:text-6xl lg:text-7xl">Urus Kewangan & Aset Dengan Lebih Tersusun</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/86 md:text-xl">Papaipay membantu pelanggan memahami pilihan kewangan dan aset melalui pendekatan perundingan yang jelas, berstruktur dan dipercayai.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#mohon" className="rounded-full bg-white px-7 py-4 text-center text-sm font-black text-brand-900 shadow-2xl transition hover:-translate-y-0.5">Mohon Sekarang</a>
              <a href="#henry" className="rounded-full border border-white/30 px-7 py-4 text-center text-sm font-black text-white backdrop-blur transition hover:bg-white/10">Ketahui Pendekatan Kami</a>
            </div>
          </div>
          <div className="hidden rounded-[2.4rem] border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl lg:block">
            <div className="rounded-[2rem] bg-white p-6 text-slate-900">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-700">Semakan Awal</p>
              <h3 className="mt-2 text-2xl font-black">Bimbingan Berstruktur</h3>
              {["Kenal pasti keperluan", "Fahami pilihan yang tersedia", "Dapatkan panduan pasukan", "Buat keputusan lebih yakin"].map((item, index) => (
                <div key={item} className="mt-4 flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-700 text-sm font-black text-white">{index + 1}</div>
                  <div className="font-bold text-slate-700">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {trustCards.map((item) => (
            <div key={item} className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-xl shadow-emerald-950/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-950/10">
              <div className="mb-6 h-12 w-12 rounded-2xl bg-brand-50" />
              <h3 className="text-xl font-black">{item}</h3>
              <p className="mt-3 leading-7 text-slate-600">Pendekatan Papaipay direka untuk membantu pelanggan melihat pilihan dengan lebih teratur dan profesional.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="henry" className="bg-white px-5 py-24 lg:px-8">
        <SectionTitle eyebrow="Henry Asset Approach" title="Pendekatan Kewangan & Aset Yang Lebih Berpandu" text="Fokus utama ialah kefahaman, struktur dan susulan yang lebih jelas. Kandungan sebenar boleh dimuktamadkan selepas client review." />
        <div className="mx-auto mt-14 grid max-w-6xl gap-4 md:grid-cols-5">
          {["Fahami Keperluan", "Semak Pilihan", "Dapatkan Bimbingan", "Susun Keputusan", "Pantau Susulan"].map((step, index) => (
            <div key={step} className="rounded-[1.6rem] bg-slate-50 p-6 text-center transition hover:bg-brand-50">
              <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-brand-700 font-black text-white">{index + 1}</div>
              <p className="font-black text-slate-800">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <SectionTitle eyebrow="Perkhidmatan" title="Dibina Untuk Kepercayaan Pelanggan" text="Website corporate ini menerangkan peranan Papaipay sebagai pasukan perunding kewangan yang tersusun, moden dan mudah dihubungi." />
        <div className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service} className="rounded-[2rem] bg-white p-7 shadow-xl shadow-emerald-950/5 transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-8 h-24 rounded-[1.5rem] bg-gradient-to-br from-brand-50 to-emerald-100" />
              <h3 className="text-xl font-black">{service}</h3>
              <p className="mt-3 leading-7 text-slate-600">Penerangan premium ringkas akan dimuktamadkan selepas review client.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="mohon" className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] bg-white p-6 shadow-2xl shadow-emerald-950/10 md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-gradient-to-br from-brand-900 to-brand-700 p-8 text-white">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-white/70">Mohon Sekarang</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.035em]">Mulakan semakan awal bersama Papaipay.</h2>
            <p className="mt-5 leading-8 text-white/78">Maklumat akan disimpan ke Supabase dan notification boleh dihantar ke email rasmi Papaipay apabila integrasi backend diaktifkan.</p>
          </div>
          <form className="grid gap-4">
            <input className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-brand-700" placeholder="Nama penuh" />
            <input className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-brand-700" placeholder="Nombor telefon" />
            <input className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-brand-700" placeholder="Email" />
            <textarea className="min-h-28 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-brand-700" placeholder="Catatan ringkas" />
            <button type="button" className="rounded-full bg-brand-700 px-7 py-4 text-sm font-black text-white shadow-lg transition hover:bg-brand-900">Hantar Permohonan</button>
          </form>
        </div>
      </section>

      <footer className="bg-[#082314] px-5 py-14 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <BrandLogo dark />
            <p className="mt-6 max-w-md leading-7 text-white/65">Papaipay menyediakan pendekatan perundingan kewangan dan aset yang lebih jelas, tersusun dan berpandu melalui Henry Asset Approach.</p>
          </div>
          <div>
            <h4 className="font-black">Pautan</h4>
            <div className="mt-4 grid gap-2 text-white/65">
              <a href="#">Tentang Kami</a>
              <a href="#henry">Henry Asset</a>
              <a href="#mohon">Mohon Sekarang</a>
            </div>
          </div>
          <div>
            <h4 className="font-black">Ikuti Kami</h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {socials.map((social) => <span key={social} className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-white/70">{social}</span>)}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <span>© Papaipay. All rights reserved.</span>
          <span>Dasar Privasi · Terma & Syarat · Peta Laman</span>
        </div>
      </footer>
    </main>
  );
}
