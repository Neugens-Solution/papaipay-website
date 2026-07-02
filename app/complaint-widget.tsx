"use client";

import { FormEvent, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  category: string;
  message: string;
  website: string;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

const initialForm: FormState = {
  fullName: "",
  email: "",
  phone: "",
  category: "",
  message: "",
  website: "",
};

const copy = {
  ms: {
    trigger: "Aduan",
    title: "Hantar aduan",
    intro: "Kongsi maklum balas anda dengan pasukan Papaipay secara selamat.",
    fullName: "Nama penuh",
    email: "Email",
    phone: "No. telefon",
    category: "Kategori aduan",
    message: "Mesej aduan",
    privacy: "Jangan hantar maklumat sensitif seperti kata laluan, nombor kad penuh, atau butiran bank sulit.",
    submit: "Hantar aduan",
    submitting: "Menghantar...",
    success: "Terima kasih. Aduan anda telah dihantar kepada pasukan Papaipay.",
    error: "Maaf, aduan tidak dapat dihantar. Sila cuba lagi sebentar nanti.",
    close: "Tutup",
    categories: ["Khidmat pelanggan", "Pembiayaan", "Laman web", "Privasi atau keselamatan", "Lain-lain"],
  },
  en: {
    trigger: "Complaint",
    title: "Submit a complaint",
    intro: "Share your feedback securely with the Papaipay team.",
    fullName: "Full name",
    email: "Email",
    phone: "Phone",
    category: "Complaint category",
    message: "Message",
    privacy: "Do not submit sensitive information such as passwords, full card numbers, or confidential bank details.",
    submit: "Submit complaint",
    submitting: "Submitting...",
    success: "Thank you. Your complaint has been sent to the Papaipay team.",
    error: "Sorry, we could not send your complaint. Please try again later.",
    close: "Close",
    categories: ["Customer service", "Financing", "Website", "Privacy or safety", "Other"],
  },
};

export function ComplaintWidget() {
  const pathname = usePathname();
  const locale = pathname?.startsWith("/en") ? "en" : "ms";
  const labels = copy[locale];
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const modalTitle = useMemo(() => `complaint-modal-title-${locale}`, [locale]);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (status !== "submitting") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const submitComplaint = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/complaint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || labels.error);
      }

      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : labels.error);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full border border-white/40 bg-brand-700 px-4 py-3 text-sm font-extrabold text-white shadow-2xl shadow-emerald-950/25 transition hover:-translate-y-0.5 hover:bg-brand-900 focus:outline-none focus:ring-4 focus:ring-emerald-200 sm:bottom-6 sm:right-6"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
            <path d="M8 9h8M8 13h5" />
          </svg>
        </span>
        <span className="hidden sm:inline">{labels.trigger}</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center bg-slate-950/55 px-4 py-5 backdrop-blur-sm sm:items-center" role="dialog" aria-modal="true" aria-labelledby={modalTitle}>
          <div className="w-full max-w-lg overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-emerald-950/30">
            <div className="bg-[#082314] px-6 py-5 text-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 id={modalTitle} className="text-2xl font-black">{labels.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-white/70">{labels.intro}</p>
                </div>
                <button type="button" onClick={() => setOpen(false)} className="rounded-full border border-white/20 px-3 py-2 text-xs font-extrabold text-white/80 transition hover:bg-white/10">{labels.close}</button>
              </div>
            </div>
            <form onSubmit={submitComplaint} className="grid gap-4 px-6 py-5">
              <input className="hidden" tabIndex={-1} autoComplete="off" value={form.website} onChange={(event) => updateField("website", event.target.value)} aria-hidden="true" />
              <label className="grid gap-2 text-sm font-bold text-slate-700">{labels.fullName}<input required maxLength={120} value={form.fullName} onChange={(event) => updateField("fullName", event.target.value)} className="rounded-2xl border border-slate-200 px-4 py-3 font-medium outline-none transition focus:border-brand-700 focus:ring-4 focus:ring-emerald-100" /></label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-slate-700">{labels.email}<input required type="email" maxLength={160} value={form.email} onChange={(event) => updateField("email", event.target.value)} className="rounded-2xl border border-slate-200 px-4 py-3 font-medium outline-none transition focus:border-brand-700 focus:ring-4 focus:ring-emerald-100" /></label>
                <label className="grid gap-2 text-sm font-bold text-slate-700">{labels.phone}<input required maxLength={40} value={form.phone} onChange={(event) => updateField("phone", event.target.value)} className="rounded-2xl border border-slate-200 px-4 py-3 font-medium outline-none transition focus:border-brand-700 focus:ring-4 focus:ring-emerald-100" /></label>
              </div>
              <label className="grid gap-2 text-sm font-bold text-slate-700">{labels.category}<select required value={form.category} onChange={(event) => updateField("category", event.target.value)} className="rounded-2xl border border-slate-200 px-4 py-3 font-medium outline-none transition focus:border-brand-700 focus:ring-4 focus:ring-emerald-100"><option value="" disabled>{labels.category}</option>{labels.categories.map((category) => <option key={category} value={category}>{category}</option>)}</select></label>
              <label className="grid gap-2 text-sm font-bold text-slate-700">{labels.message}<textarea required minLength={10} maxLength={3000} rows={5} value={form.message} onChange={(event) => updateField("message", event.target.value)} className="resize-none rounded-2xl border border-slate-200 px-4 py-3 font-medium outline-none transition focus:border-brand-700 focus:ring-4 focus:ring-emerald-100" /></label>
              <p className="rounded-2xl bg-amber-50 px-4 py-3 text-xs font-semibold leading-5 text-amber-900">{labels.privacy}</p>
              {status === "success" && <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-800">{labels.success}</p>}
              {status === "error" && <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700">{errorMessage}</p>}
              <button type="submit" disabled={status === "submitting"} className="rounded-full bg-brand-700 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-white shadow-lg shadow-emerald-950/15 transition hover:bg-brand-900 disabled:cursor-not-allowed disabled:opacity-60">{status === "submitting" ? labels.submitting : labels.submit}</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
