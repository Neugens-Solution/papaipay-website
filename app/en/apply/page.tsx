"use client";

import { FormEvent, useState } from "react";

import { Footer as SiteFooter, Header as SiteHeader } from "../../site-components";

const incomeOptions = [
  "Below RM2,000",
  "RM2,000 – RM3,999",
  "RM4,000 – RM5,999",
  "RM6,000 – RM7,999",
  "RM8,000 and above",
];

const fieldClass = "h-14 rounded-2xl border border-emerald-100 bg-white px-5 text-sm font-semibold text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-700 focus:ring-4 focus:ring-brand-700/10";
const labelClass = "grid gap-2 text-sm font-extrabold text-slate-800";

function TextField({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <label className={labelClass}>
      <span>{label}</span>
      <input required type={type} name={name} placeholder={placeholder} className={fieldClass} />
    </label>
  );
}

function RadioGroup({ legend, name }: { legend: string; name: string }) {
  return (
    <fieldset className="grid gap-3 rounded-2xl border border-emerald-100 bg-white p-5">
      <legend className="px-1 text-sm font-extrabold leading-6 text-slate-800">{legend}</legend>
      <div className="grid gap-3 sm:grid-cols-2">
        {['Yes', 'No'].map((option) => (
          <label key={option} className="flex cursor-pointer items-center gap-3 rounded-2xl border border-emerald-100 bg-[#f7fbf8] px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-brand-700/35 hover:bg-emerald-50">
            <input required type="radio" name={name} value={option} className="h-4 w-4 accent-brand-700" />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function ApplyPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setStatus("error");
      form.reportValidity();
      return;
    }

    setStatus("loading");

    window.setTimeout(() => {
      setStatus("success");
      form.reset();
    }, 700);
  }

  return (
    <main className="min-h-screen bg-[#f7fbf8] text-slate-950">
      <SiteHeader active="apply" locale="en" />

      <section className="relative flex min-h-[190px] items-center justify-center overflow-hidden pt-16 text-center text-white md:min-h-[320px] md:pt-16">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero-apply.png')" }} />
        <div className="absolute inset-0 bg-[rgba(0,35,20,0.68)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031a0e]/55 via-transparent to-black/20" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-8 md:py-16 lg:px-8">
          <h1 className="text-3xl font-extrabold leading-[1.05] tracking-[-0.05em] md:text-4xl lg:text-5xl">Start Initial Review</h1>
        </div>
      </section>

      <section className="bg-white px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-700">INITIAL REVIEW</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-5xl">Start an Initial Review With Papaipay</h2>
          <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">Complete the brief details below to help our team understand your financial situation before recommendations or next steps are shared.</p>
        </div>
      </section>

      <section className="bg-white px-5 pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.25rem] border border-emerald-100 bg-[#f7fbf8] shadow-2xl shadow-emerald-950/10 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="relative overflow-hidden bg-[linear-gradient(135deg,#082314_0%,#0b301d_55%,#031a0e_100%)] p-8 text-white md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(214,185,95,0.22),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(31,143,77,0.35),transparent_36%)]" />
            <div className="relative">
              <span className="inline-flex rounded-full border border-[#d6b95f]/30 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#d6b95f]">INITIAL REVIEW FORM</span>
              <h2 className="mt-6 text-3xl font-extrabold leading-[1.04] tracking-[-0.045em] md:text-5xl">Share Your Situation</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/74">This information helps the Papaipay team conduct an initial review based on your profile and needs.</p>
              <ul className="mt-8 grid gap-3 text-sm font-semibold text-white/82">
                {['Initial review based on your information', 'Guidance on next steps', 'No approval guarantee is provided'].map((item) => <li key={item} className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#d6b95f]" />{item}</li>)}
              </ul>
              <div className="mt-10 rounded-2xl border border-white/10 bg-white/10 p-5 text-sm font-semibold leading-7 text-white/78">Your information will be reviewed by our team.</div>

              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#d6b95f]/90">IMPORTANT NOTE</p>
                <p className="mt-4 text-xs font-medium leading-6 text-white/60 md:text-sm md:leading-7">The information submitted is for initial review only and does not guarantee approval of any financing facility, financial solution or asset participation. Any recommendation is subject to further assessment based on the customer’s profile, documents and eligibility.</p>
              </div>
            </div>
          </aside>

          <form noValidate onSubmit={handleSubmit} className="p-6 md:p-10" action="/api/apply" method="post">
            <h2 className="text-2xl font-extrabold tracking-[-0.04em] text-slate-950 md:text-3xl">Apply for Initial Review</h2>

            <div className="mt-8 space-y-8">
              <section aria-labelledby="personal-info-title">
                <h3 id="personal-info-title" className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-700">Section A: Personal Information</h3>
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <TextField label="Full Name" name="fullName" placeholder="Your full name" />
                  <TextField label="Phone Number" name="phone" type="tel" placeholder="012-345 6789" />
                  <TextField label="Email Address" name="email" type="email" placeholder="name@example.com" />
                </div>
              </section>

              <section aria-labelledby="current-situation-title">
                <h3 id="current-situation-title" className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-700">Section B: Current Situation</h3>
                <div className="mt-5 grid gap-5">
                  <RadioGroup legend="Do you have a bank loan or credit card that has been active for more than 6 months?" name="hasActiveCredit" />
                  <RadioGroup legend="Have you ever been late on payments for 2 consecutive months?" name="hasLatePayment" />
                  <label className={labelClass}>
                    <span>Monthly Income</span>
                    <select required name="monthlyIncome" defaultValue="" className={fieldClass}>
                      <option value="" disabled>Select monthly income</option>
                      {incomeOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                    </select>
                  </label>
                </div>
              </section>

              <section aria-labelledby="additional-info-title">
                <h3 id="additional-info-title" className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-700">Section C: Additional Information</h3>
                <label className="mt-5 grid gap-2 text-sm font-extrabold text-slate-800">
                  <span>Brief Notes</span>
                  <textarea name="message" rows={5} placeholder="Briefly tell us about your needs or situation." className="resize-none rounded-2xl border border-emerald-100 bg-white px-5 py-4 text-sm font-semibold text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-700 focus:ring-4 focus:ring-brand-700/10" />
                </label>
              </section>
            </div>

            {status === "success" && <p role="status" className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-bold leading-7 text-brand-900">Thank you. Your information has been received for initial review. The Papaipay team will contact you for the next steps.</p>}
            {status === "error" && <p role="alert" className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-bold leading-7 text-red-700">Please complete the required information before submitting your application.</p>}

            <button type="submit" disabled={status === "loading"} className="mt-7 w-full rounded-full bg-brand-700 px-8 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-white shadow-xl shadow-emerald-950/15 transition hover:-translate-y-0.5 hover:bg-brand-900 disabled:cursor-not-allowed disabled:opacity-70 md:w-auto">
              {status === "loading" ? "Submitting..." : "Submit Initial Review"}
            </button>
          </form>
        </div>
      </section>

      <section className="bg-white px-5 pb-20 lg:px-8 lg:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#082314_0%,#0b301d_52%,#031a0e_100%)] p-8 text-center text-white shadow-2xl shadow-emerald-950/20 md:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(214,185,95,0.2),transparent_30%),radial-gradient(circle_at_86%_16%,rgba(31,143,77,0.35),transparent_34%)]" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.045em] md:text-5xl">Need Help Before Applying?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/78">If you have questions, our team is ready to help you understand suitable options before proceeding with the review.</p>
            <a href="/en/contact" className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-900 shadow-xl transition hover:-translate-y-0.5 hover:bg-white/90">Contact Us</a>
          </div>
        </div>
      </section>

      <SiteFooter locale="en" />
    </main>
  );
}
