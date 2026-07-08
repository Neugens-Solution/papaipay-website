"use client";

import { FormEvent, useState } from "react";

import { Footer as SiteFooter, Header as SiteHeader } from "../site-components";

const incomeOptions = [
  "Bawah RM2,000",
  "RM2,000 – RM3,999",
  "RM4,000 – RM5,999",
  "RM6,000 – RM7,999",
  "RM8,000 ke atas",
];

const fieldClass =
  "h-14 rounded-2xl border border-emerald-100 bg-white px-5 text-sm font-semibold text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-700 focus:ring-4 focus:ring-brand-700/10";
const labelClass = "grid gap-2 text-sm font-extrabold text-slate-800";

function TextField({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className={labelClass}>
      <span>{label}</span>
      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        className={fieldClass}
      />
    </label>
  );
}

function RadioGroup({ legend, name }: { legend: string; name: string }) {
  return (
    <fieldset className="grid gap-3 rounded-2xl border border-emerald-100 bg-white p-5">
      <legend className="px-1 text-sm font-extrabold leading-6 text-slate-800">
        {legend}
      </legend>
      <div className="grid gap-3 sm:grid-cols-2">
        {["Ya", "Tidak"].map((option) => (
          <label
            key={option}
            className="flex cursor-pointer items-center gap-3 rounded-2xl border border-emerald-100 bg-[#f7fbf8] px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-brand-700/35 hover:bg-emerald-50"
          >
            <input
              required
              type="radio"
              name={name}
              value={option}
              className="h-4 w-4 accent-brand-700"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function ApplyPage() {
  const [status, setStatus] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setStatus("error");
      setErrorMessage("Sila lengkapkan semua medan wajib sebelum menghantar.");
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const hasActiveCredit = String(formData.get("hasActiveCredit") || "");
    const hasLatePayment = String(formData.get("hasLatePayment") || "");
    const monthlyIncome = String(formData.get("monthlyIncome") || "");

    if (!hasActiveCredit || !hasLatePayment || !monthlyIncome) {
      setStatus("error");
      setErrorMessage(
        "Sila lengkapkan pilihan kredit aktif, rekod bayaran lewat dan pendapatan bulanan sebelum menghantar.",
      );
      form.reportValidity();
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "Initial Review",
          source: "/apply",
          name: String(formData.get("fullName") || ""),
          email: String(formData.get("email") || ""),
          phone: String(formData.get("phone") || ""),
          enquiryType: "Initial Review / Apply",
          message: String(formData.get("message") || ""),
          details: {
            hasActiveCredit,
            hasLatePayment,
            monthlyIncome,
          },
        }),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
      };
      if (!response.ok || !result.ok)
        throw new Error(
          result.error ||
            "Maaf, borang tidak dapat dihantar. Sila cuba lagi sebentar nanti.",
        );
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Maaf, borang tidak dapat dihantar. Sila cuba lagi sebentar nanti.",
      );
    }
  }

  return (
    <main className="min-h-screen bg-[#f7fbf8] text-slate-950">
      <SiteHeader active="apply" />

      <section className="relative flex min-h-[190px] items-center justify-center overflow-hidden pt-16 text-center text-white md:min-h-[320px] md:pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-apply.png')" }}
        />
        <div className="absolute inset-0 bg-[rgba(0,35,20,0.68)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031a0e]/55 via-transparent to-black/20" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-8 md:py-16 lg:px-8">
          <h1 className="text-3xl font-bold leading-[1.05] tracking-[-0.05em] md:text-4xl lg:text-5xl">
            Mulakan Semakan Awal
          </h1>
        </div>
      </section>

      <section className="bg-white px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-700">
            SEMAKAN AWAL
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-5xl">
            Mulakan Semakan Awal Bersama Papaipay
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
            Lengkapkan maklumat ringkas di bawah untuk membantu pasukan kami
            memahami situasi kewangan anda sebelum cadangan atau langkah
            seterusnya diberikan.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.25rem] border border-emerald-100 bg-[#f7fbf8] shadow-2xl shadow-emerald-950/10 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="relative overflow-hidden bg-[linear-gradient(135deg,#082314_0%,#0b301d_55%,#031a0e_100%)] p-8 text-white md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(214,185,95,0.22),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(31,143,77,0.35),transparent_36%)]" />
            <div className="relative">
              <span className="inline-flex rounded-full border border-[#d6b95f]/30 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#d6b95f]">
                BORANG SEMAKAN AWAL
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-[1.04] tracking-[-0.045em] md:text-5xl">
                Kongsikan Situasi Anda
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/74">
                Maklumat ini membantu pasukan Papaipay membuat semakan awal
                berdasarkan profil dan keperluan anda.
              </p>
              <ul className="mt-8 grid gap-3 text-sm font-semibold text-white/82">
                {[
                  "Semakan awal berdasarkan maklumat anda",
                  "Panduan langkah seterusnya",
                  "Tiada jaminan kelulusan diberikan",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#d6b95f]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10 rounded-2xl border border-white/10 bg-white/10 p-5 text-sm font-semibold leading-7 text-white/78">
                Maklumat anda akan disemak oleh pasukan kami.
              </div>

              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#d6b95f]/90">
                  NOTA PENTING
                </p>
                <p className="mt-4 text-xs font-medium leading-6 text-white/60 md:text-sm md:leading-7">
                  Maklumat yang dikemukakan adalah untuk tujuan semakan awal
                  sahaja dan tidak menjamin kelulusan mana-mana kemudahan
                  pembiayaan, penyelesaian kewangan atau penyertaan aset.
                  Sebarang cadangan adalah tertakluk kepada penilaian lanjut
                  berdasarkan profil, dokumen dan kelayakan pelanggan.
                </p>
              </div>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="p-6 md:p-10">
            <h2 className="text-2xl font-bold tracking-[-0.04em] text-slate-950 md:text-3xl">
              Mohon Semakan Awal
            </h2>

            <div className="mt-8 space-y-8">
              <section aria-labelledby="personal-info-title">
                <h3
                  id="personal-info-title"
                  className="text-xs font-bold uppercase tracking-[0.22em] text-brand-700"
                >
                  Bahagian A: Maklumat Peribadi
                </h3>
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <TextField
                    label="Nama Penuh"
                    name="fullName"
                    placeholder="Nama penuh anda"
                  />
                  <TextField
                    label="Nombor Telefon"
                    name="phone"
                    type="tel"
                    placeholder="012-345 6789"
                  />
                  <TextField
                    label="Alamat E-mel"
                    name="email"
                    type="email"
                    placeholder="nama@contoh.com"
                  />
                </div>
              </section>

              <section aria-labelledby="current-situation-title">
                <h3
                  id="current-situation-title"
                  className="text-xs font-bold uppercase tracking-[0.22em] text-brand-700"
                >
                  Bahagian B: Situasi Semasa
                </h3>
                <div className="mt-5 grid gap-5">
                  <RadioGroup
                    legend="Adakah anda mempunyai pinjaman bank atau kad kredit yang telah aktif melebihi 6 bulan?"
                    name="hasActiveCredit"
                  />
                  <RadioGroup
                    legend="Pernah lewat membuat bayaran selama 2 bulan berturut-turut?"
                    name="hasLatePayment"
                  />
                  <label className={labelClass}>
                    <span>Pendapatan Bulanan</span>
                    <select
                      required
                      name="monthlyIncome"
                      defaultValue=""
                      className={fieldClass}
                    >
                      <option value="" disabled>
                        Pilih pendapatan bulanan
                      </option>
                      {incomeOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </section>

              <section aria-labelledby="additional-info-title">
                <h3
                  id="additional-info-title"
                  className="text-xs font-bold uppercase tracking-[0.22em] text-brand-700"
                >
                  Bahagian C: Maklumat Tambahan
                </h3>
                <label className="mt-5 grid gap-2 text-sm font-extrabold text-slate-800">
                  <span>Catatan Ringkas</span>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Ceritakan secara ringkas keperluan atau situasi anda."
                    className="resize-none rounded-2xl border border-emerald-100 bg-white px-5 py-4 text-sm font-semibold text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-700 focus:ring-4 focus:ring-brand-700/10"
                  />
                </label>
              </section>
            </div>

            {status === "success" && (
              <p
                role="status"
                className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-bold leading-7 text-emerald-900"
              >
                Terima kasih. Maklumat anda telah dihantar kepada pasukan
                Papaipay.
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
              {status === "submitting" ? "Menghantar..." : "Hantar Semakan"}
            </button>
          </form>
        </div>
      </section>

      <section className="bg-white px-5 pb-20 lg:px-8 lg:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#082314_0%,#0b301d_52%,#031a0e_100%)] p-8 text-center text-white shadow-2xl shadow-emerald-950/20 md:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(214,185,95,0.2),transparent_30%),radial-gradient(circle_at_86%_16%,rgba(31,143,77,0.35),transparent_34%)]" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-[-0.045em] md:text-5xl">
              Perlukan Bantuan Sebelum Memohon?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/78">
              Jika anda mempunyai pertanyaan, pasukan kami sedia membantu anda
              memahami pilihan yang sesuai sebelum meneruskan semakan.
            </p>
            <a
              href="/contact"
              className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-900 shadow-xl transition hover:-translate-y-0.5 hover:bg-white/90"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
