"use client";

import { FormEvent, useState } from "react";

import { Footer as SiteFooter, Header as SiteHeader } from "../site-components";
const whyJoinCards = [
  [
    "Perkembangan Profesional",
    "Peluang untuk terus belajar dan membangunkan kemahiran profesional.",
  ],
  [
    "Budaya Kerjasama",
    "Bekerja dalam persekitaran yang menyokong dan menghargai kerjasama.",
  ],
  [
    "Impak Bermakna",
    "Membantu pelanggan membuat keputusan kewangan yang lebih baik.",
  ],
  [
    "Peluang Jangka Panjang",
    "Membina kerjaya bersama organisasi yang sedang berkembang.",
  ],
];

const values = [
  [
    "Integriti",
    "Kami mengutamakan kejujuran, ketelusan dan tanggungjawab dalam setiap tindakan.",
  ],
  [
    "Profesionalisme",
    "Kami berusaha memberikan pengalaman terbaik melalui standard kerja yang tinggi.",
  ],
  [
    "Pembelajaran Berterusan",
    "Kami percaya pembelajaran berterusan adalah kunci kepada pertumbuhan individu dan organisasi.",
  ],
  [
    "Komitmen Jangka Panjang",
    "Kami membina hubungan yang berkekalan dengan pelanggan dan pasukan kami.",
  ],
];

const opportunities = [
  [
    "Financial Advisor",
    "Membantu pelanggan memahami pilihan kewangan dan menyediakan panduan yang sesuai berdasarkan keperluan mereka.",
  ],
  [
    "Business Development Executive",
    "Membina hubungan baharu dan menyokong pertumbuhan perniagaan melalui peluang strategik.",
  ],
  [
    "Customer Support Executive",
    "Memberikan pengalaman pelanggan yang profesional dan membantu menguruskan pertanyaan pelanggan.",
  ],
  [
    "Administrative Executive",
    "Menyokong operasi harian syarikat melalui pengurusan dokumentasi dan proses pentadbiran.",
  ],
];

const cultureItems = [
  ["users", "Persekitaran yang sihat"],
  ["shield", "Tanggungjawab bersama"],
  ["target", "Fokus kepada pelanggan"],
];

const positions = [...opportunities.map(([title]) => title), "Permohonan Umum"];

function CultureIcon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
  };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      {name === "users" && (
        <>
          <circle {...common} cx="9" cy="8" r="3" />
          <circle {...common} cx="17" cy="9" r="2.5" />
          <path {...common} d="M3.5 19a5.5 5.5 0 0 1 11 0" />
          <path {...common} d="M14 16.5a4.5 4.5 0 0 1 6.5 2.5" />
        </>
      )}
      {name === "shield" && (
        <>
          <path
            {...common}
            d="M12 3 19 6v5.2c0 4.4-2.8 7.9-7 9.8-4.2-1.9-7-5.4-7-9.8V6l7-3Z"
          />
          <path {...common} d="m9 12 2 2 4-4" />
        </>
      )}
      {name === "target" && (
        <>
          <circle {...common} cx="12" cy="12" r="8" />
          <circle {...common} cx="12" cy="12" r="4" />
          <path {...common} d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        </>
      )}
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p
          className={`text-xs font-bold uppercase tracking-[0.28em] ${light ? "text-[#d6b95f]" : "text-brand-700"}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-4 text-3xl font-bold leading-[1.04] tracking-[-0.045em] md:text-5xl ${light ? "text-white" : "text-slate-950"}`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-base leading-8 md:text-lg ${light ? "text-white/72" : "text-slate-600"}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-extrabold text-slate-800">
      <span>{label}</span>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="h-14 rounded-2xl border border-emerald-100 bg-white px-5 text-sm font-semibold text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-700 focus:ring-4 focus:ring-brand-700/10"
      />
    </label>
  );
}

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function CareersPage() {
  const [status, setStatus] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const position = String(formData.get("position") || "");
    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "Career Application",
          source: "/careers",
          name: String(formData.get("name") || ""),
          email: String(formData.get("email") || ""),
          phone: String(formData.get("phone") || ""),
          enquiryType: position
            ? `Career Application: ${position}`
            : "Career Application",
          message: String(formData.get("message") || ""),
          details: { position },
        }),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
      };
      if (!response.ok || !result.ok)
        throw new Error(
          result.error ||
            "Maaf, permohonan tidak dapat dihantar. Sila cuba lagi sebentar nanti.",
        );
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Maaf, permohonan tidak dapat dihantar. Sila cuba lagi sebentar nanti.",
      );
    }
  }
  return (
    <main className="min-h-screen bg-[#f7fbf8] text-slate-950">
      <SiteHeader active="careers" />

      <section className="relative flex min-h-[190px] items-center justify-center overflow-hidden pt-16 text-center text-white md:min-h-[320px] md:pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-career.png')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,26,14,0.9)_0%,rgba(3,26,14,0.72)_48%,rgba(3,26,14,0.88)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031a0e]/82 via-black/10 to-black/30" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-8 md:py-16 lg:px-8">
          <h1 className="text-3xl font-bold leading-[1.05] tracking-[-0.05em] md:text-4xl lg:text-5xl">
            Kerjaya
          </h1>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-700">
              Kerjaya Di Papaipay
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-5xl">
              Bina Kerjaya Anda Bersama Papaipay
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Kami percaya kejayaan syarikat bermula dengan pasukan yang hebat.
              Di Papaipay, kami menyediakan persekitaran yang menyokong
              pembelajaran, perkembangan profesional dan peluang untuk memberi
              impak yang bermakna kepada pelanggan.
            </p>
          </div>
          <div className="rounded-[2rem] border border-emerald-100 bg-[#f7fbf8] p-8 shadow-2xl shadow-emerald-950/10 md:p-10">
            <div className="h-1 w-14 rounded-full bg-[#d6b95f]" />
            <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.28em] text-brand-700">
              Berkembang Bersama
            </p>
            <h3 className="mt-4 text-2xl font-bold leading-tight tracking-[-0.04em] text-slate-950">
              Setiap peranan menyumbang kepada pengalaman pelanggan yang lebih
              baik.
            </h3>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              Di Papaipay, setiap ahli pasukan memainkan peranan dalam membantu
              pelanggan memahami pilihan kewangan dengan lebih jelas dan yakin.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbf8] px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Kenapa Sertai Papaipay"
            intro="Kami menyediakan ruang untuk individu yang ingin berkembang, belajar dan membina kerjaya dalam persekitaran profesional yang berorientasikan impak."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whyJoinCards.map(([title, text]) => (
              <article
                key={title}
                className="rounded-[1.5rem] border border-emerald-100 bg-white p-7 shadow-xl shadow-emerald-950/5"
              >
                <div className="mb-7 h-1 w-12 rounded-full bg-[#d6b95f]" />
                <h3 className="text-xl font-bold leading-tight tracking-[-0.04em] text-slate-950">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-700">
              Nilai Kami
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-5xl">
              Nilai Kami
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-slate-600">
              Nilai kami membentuk cara kami bekerja, berinteraksi dan
              memberikan perkhidmatan kepada pelanggan.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {values.map(([title, text]) => (
              <article
                key={title}
                className="rounded-[1.5rem] border border-emerald-100 bg-[#f7fbf8] p-7 shadow-xl shadow-emerald-950/5"
              >
                <div className="mb-7 h-1 w-12 rounded-full bg-[#d6b95f]" />
                <h3 className="text-xl font-bold leading-tight tracking-[-0.04em] text-slate-950">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#02140c] px-5 py-20 text-white lg:px-8 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(31,143,77,0.36),transparent_34%),radial-gradient(circle_at_84%_24%,rgba(214,185,95,0.18),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_24px)]" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            title="Budaya Kami"
            intro="Kami menghargai integriti, profesionalisme dan komitmen jangka panjang dalam setiap perkara yang kami lakukan. Setiap ahli pasukan digalakkan untuk terus berkembang, berkongsi idea dan menyumbang kepada kejayaan bersama."
            light
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {cultureItems.map(([icon, item]) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/10 p-6 text-left shadow-2xl shadow-black/10"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#d6b95f]/30 bg-white/10 text-[#d6b95f]">
                  <CultureIcon name={icon} className="h-5 w-5" />
                </div>
                <p className="text-base font-extrabold leading-6 text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbf8] px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Peluang Kerjaya Semasa"
            intro="Terokai peluang kerjaya bersama Papaipay dan sertai pasukan yang komited untuk memberi nilai kepada pelanggan."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {opportunities.map(([title, text]) => (
              <article
                key={title}
                className="rounded-[1.75rem] border border-emerald-100 bg-white p-7 shadow-xl shadow-emerald-950/5"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold leading-tight tracking-[-0.04em] text-slate-950">
                    {title}
                  </h3>
                  <span className="rounded-full bg-emerald-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-700">
                    Dibuka Untuk Permohonan
                  </span>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600">{text}</p>
                <a
                  href="#submit-resume"
                  className="mt-7 inline-flex rounded-full bg-brand-700 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-emerald-950/15 transition hover:-translate-y-0.5 hover:bg-brand-900"
                >
                  Mohon Sekarang
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-emerald-100 bg-[#f7fbf8] p-8 text-center shadow-2xl shadow-emerald-950/10 md:p-12">
          <h2 className="text-3xl font-bold leading-tight tracking-[-0.045em] text-slate-950 md:text-5xl">
            Tidak Menemui Jawatan Yang Sesuai?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600">
            Kami sentiasa berminat untuk berhubung dengan individu yang berbakat
            dan bermotivasi. Jika anda percaya anda boleh menyumbang kepada
            Papaipay, kami mengalu-alukan permohonan anda.
          </p>
          <a
            href="#submit-resume"
            className="mt-8 inline-flex rounded-full bg-brand-700 px-8 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-xl shadow-emerald-950/15 transition hover:-translate-y-0.5 hover:bg-brand-900"
          >
            Hantar Maklumat Kerjaya Anda
          </a>
        </div>
      </section>

      <section
        id="submit-resume"
        className="bg-[#f7fbf8] px-5 py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.25rem] border border-emerald-100 bg-white shadow-2xl shadow-emerald-950/10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden bg-[linear-gradient(135deg,#082314_0%,#0b301d_55%,#031a0e_100%)] p-8 text-white md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(214,185,95,0.22),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(31,143,77,0.35),transparent_36%)]" />
            <div className="relative">
              <span className="inline-flex rounded-full border border-[#d6b95f]/30 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#d6b95f]">
                BORANG PERMOHONAN
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-[1.04] tracking-[-0.045em] md:text-5xl">
                Hantar Maklumat Kerjaya Anda
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/74">
                Lengkapkan maklumat anda dan e-melkan resume ke papaipay.my@gmail.com untuk pertimbangan
                pasukan kami.
              </p>
              <ul className="mt-8 grid gap-3 text-sm font-semibold text-white/82">
                {[
                  "Terbuka kepada individu yang bermotivasi",
                  "Peluang perkembangan profesional",
                  "Calon yang disenarai pendek akan dihubungi",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#d6b95f]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10 rounded-2xl border border-white/10 bg-white/10 p-5 text-sm font-semibold leading-7 text-white/78">
                Pasukan kami akan menyemak maklumat anda bersama resume yang dihantar melalui e-mel dan menghubungi calon
                yang disenarai pendek.
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-[#f7fbf8] p-6 md:p-10">
            <div className="grid gap-5 md:grid-cols-2">
              <Field
                label="Nama Penuh"
                name="name"
                placeholder="Nama penuh anda"
              />
              <Field
                label="Alamat E-mel"
                name="email"
                placeholder="you@example.com"
                type="email"
              />
              <Field
                label="Nombor Telefon"
                name="phone"
                placeholder="012-345 6789"
                type="tel"
              />
              <label className="grid gap-2 text-sm font-extrabold text-slate-800">
                <span>Jawatan Dipohon</span>
                <select
                  required
                  name="position"
                  className="h-14 rounded-2xl border border-emerald-100 bg-white px-5 text-sm font-semibold text-slate-800 outline-none transition focus:border-brand-700 focus:ring-4 focus:ring-brand-700/10"
                >
                  {positions.map((position) => (
                    <option key={position}>{position}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-extrabold text-slate-800">
              <span>Mesej</span>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Ceritakan secara ringkas tentang pengalaman dan minat kerjaya anda."
                className="resize-none rounded-2xl border border-emerald-100 bg-white px-5 py-4 text-sm font-semibold text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-700 focus:ring-4 focus:ring-brand-700/10"
              />
            </label>
            {status === "success" && (
              <p
                role="status"
                className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-bold leading-7 text-emerald-900"
              >
                Terima kasih. Maklumat anda telah dihantar kepada pasukan
                Papaipay. Sila e-melkan resume anda ke papaipay.my@gmail.com.
              </p>
            )}
            {status === "error" && (
              <p
                role="alert"
                className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-bold leading-7 text-red-800"
              >
                {errorMessage}
              </p>
            )}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-7 inline-flex w-full justify-center rounded-full bg-brand-700 px-8 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-white shadow-xl shadow-emerald-950/15 transition hover:-translate-y-0.5 hover:bg-brand-900 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
            >
              {status === "submitting" ? "Menghantar..." : "Hantar Permohonan"}
            </button>
          </form>
        </div>
      </section>

      <section className="bg-white px-5 pb-20 lg:px-8 lg:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#082314_0%,#0b301d_52%,#031a0e_100%)] p-8 text-center text-white shadow-2xl shadow-emerald-950/20 md:p-14">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
            style={{ backgroundImage: "url('/hero-career.png')" }}
          />
          <div className="absolute inset-0 bg-black/25" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-[-0.045em] md:text-5xl">
              Sedia Menyertai Papaipay?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/78">
              Ambil langkah seterusnya dalam perjalanan kerjaya anda dan
              berkembang bersama kami.
            </p>
            <a
              href="#submit-resume"
              className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.12em] text-brand-900 shadow-xl transition hover:-translate-y-0.5 hover:bg-white/90"
            >
              Mohon Sekarang
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
