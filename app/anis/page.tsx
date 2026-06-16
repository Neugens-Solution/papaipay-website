import Image from "next/image";

const actions = [
  { label: "Whatsapp", href: "https://wa.me/60192676559" },
  { label: "+60192676559", href: "tel:+60192676559" },
  { label: "papaipay.my@gmail.com", href: "mailto:papaipay.my@gmail.com" },
];

export default function AnisProfilePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7fbf8] px-5 py-16 text-slate-950">
      <section className="w-full max-w-md text-center">
        <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-white bg-white shadow-2xl shadow-emerald-950/12 md:h-48 md:w-48">
          <Image src="/nurul-izanis.jpg" alt="NURUL IZANIS (ANIS)" width={240} height={240} priority className="h-full w-full object-cover object-top" />
        </div>
        <h1 className="mt-8 text-3xl font-extrabold leading-tight tracking-[-0.045em] md:text-4xl">NURUL IZANIS (ANIS)</h1>
        <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.22em] text-brand-700">PLAN ADVISOR</p>
        <div className="mt-8 grid gap-3">
          {actions.map((action) => <a key={action.href} href={action.href} className="rounded-full border border-emerald-100 bg-white px-6 py-4 text-sm font-extrabold text-slate-800 shadow-lg shadow-emerald-950/5 transition hover:-translate-y-0.5 hover:border-brand-700/30 hover:text-brand-700">{action.label}</a>)}
        </div>
      </section>
    </main>
  );
}
