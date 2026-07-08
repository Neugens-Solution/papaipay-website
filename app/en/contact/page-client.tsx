"use client";

import { FormEvent, useState } from "react";

import {
  Footer as SiteFooter,
  Header as SiteHeader,
} from "../../site-components";

function SocialIcon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const common = { fill: "currentColor" };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      {name === "Facebook" && (
        <path
          {...common}
          d="M14 8.4V6.7c0-.8.6-1.1 1.1-1.1h1.7V2.5L14.4 2.5c-3 0-4.4 1.8-4.4 4.3v1.6H7v3.5h3V22h3.7V11.9h2.7l.5-3.5H14Z"
        />
      )}
      {name === "Instagram" && (
        <>
          <path
            {...common}
            d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Z"
          />
          <path
            {...common}
            d="M12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6ZM17.1 6.6a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"
          />
        </>
      )}
      {name === "TikTok" && (
        <path
          {...common}
          d="M17.3 5.6c-.8-.9-1.3-2-1.4-3.2h-3.2v12.7a2.8 2.8 0 1 1-2-2.7V9.1a6 6 0 1 0 5.2 6V8.7a8 8 0 0 0 4.2 1.2V6.7a4.9 4.9 0 0 1-2.8-1.1Z"
        />
      )}
    </svg>
  );
}

const contactCards = [
  {
    title: "Contact Us",
    value: "03-6279 0080",
    description:
      "Speak with our team during office hours for enquiries and appointment assistance.",
  },
  {
    title: "Email Us",
    value: "papaipay.my@gmail.com",
    description:
      "Send your enquiry and our team will review it before getting back to you.",
  },
  {
    title: "Visit Us",
    value:
      "C-1, 5, Jalan Dataran SD 1, Bandar Sri Damansara, 52200 Kepong, Wilayah Persekutuan Kuala Lumpur",
    description:
      "Visit our office for scheduled consultation sessions and appointments.",
  },
  {
    title: "Operating Hours",
    value: "Monday – Friday\n10:00 AM – 6:00 PM\n\nSaturday – Sunday\nClosed",
    description:
      "Appointments are encouraged so our team can prepare for your consultation session.",
  },
];

const enquiryTypes = [
  "Financial Commitment Consolidation",
  "Personal Financing Management",
  "SME Solutions",
  "Henry's Asset Approach",
  "General Enquiry",
];

const socialLinks = [
  ["Facebook", "https://www.facebook.com/papaipay.my"],
  ["Instagram", "https://www.instagram.com/official.papaipay/"],
  ["TikTok", "https://www.tiktok.com/@papaipay.official"],
];

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

export default function ContactPage() {
  const [status, setStatus] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "Contact",
          source: "/en/contact",
          name: String(formData.get("name") || ""),
          phone: String(formData.get("phone") || ""),
          email: String(formData.get("email") || ""),
          enquiryType: String(formData.get("enquiryType") || ""),
          message: String(formData.get("message") || ""),
        }),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
      };
      if (!response.ok || !result.ok)
        throw new Error(
          result.error ||
            "Sorry, we could not submit your enquiry. Please try again later.",
        );
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Sorry, we could not submit your enquiry. Please try again later.",
      );
    }
  }
  return (
    <main className="min-h-screen bg-[#f7fbf8] text-slate-950">
      <SiteHeader active="contact" locale="en" />

      <section className="relative flex min-h-[190px] items-center justify-center overflow-hidden pt-16 text-center text-white md:min-h-[320px] md:pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-contact.png')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,26,14,0.9)_0%,rgba(3,26,14,0.72)_48%,rgba(3,26,14,0.88)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031a0e]/82 via-black/10 to-black/30" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-8 md:py-16 lg:px-8">
          <h1 className="text-3xl font-bold leading-[1.05] tracking-[-0.05em] md:text-4xl lg:text-5xl">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-700">
            Connect With Papaipay
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-5xl">
            We Are Ready To Help
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
            Contact Papaipay for enquiries, consultation sessions and
            appointment arrangements with our team.
          </p>
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[1.75rem] border border-emerald-100 bg-white p-7 shadow-xl shadow-emerald-950/5 transition duration-300 hover:-translate-y-1 hover:border-brand-700/25 hover:shadow-2xl hover:shadow-emerald-950/10"
            >
              <div className="mb-7 h-1 w-12 rounded-full bg-[#d6b95f]" />
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-700">
                {card.title}
              </p>
              <h3 className="mt-4 whitespace-pre-line text-lg font-bold leading-7 tracking-[-0.035em] text-slate-950">
                {card.value}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact-form"
        className="bg-white px-5 py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.25rem] border border-emerald-100 bg-[#f7fbf8] shadow-2xl shadow-emerald-950/10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden bg-[linear-gradient(135deg,#082314_0%,#0b301d_55%,#031a0e_100%)] p-8 text-white md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(214,185,95,0.22),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(31,143,77,0.35),transparent_36%)]" />
            <div className="relative">
              <span className="inline-flex rounded-full border border-[#d6b95f]/30 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#d6b95f]">
                ENQUIRY FORM
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-[1.04] tracking-[-0.045em] md:text-5xl">
                Share Your Details With Our Team
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/74">
                Complete this form and our team will review your enquiry before
                contacting you with the next steps.
              </p>
              <ul className="mt-8 grid gap-3 text-sm font-semibold text-white/82">
                {[
                  "Professional advisory support",
                  "Clearer next steps",
                  "Document guidance if needed",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#d6b95f]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10 rounded-2xl border border-white/10 bg-white/10 p-5 text-sm font-semibold leading-7 text-white/78">
                For urgent enquiries, please call us during office hours.
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="p-6 md:p-10">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full Name" name="name" placeholder="Your name" />
              <Field
                label="Phone Number"
                name="phone"
                placeholder="03-6279 0080"
                type="tel"
              />
              <Field
                label="Email Address"
                name="email"
                placeholder="name@example.com"
                type="email"
              />
              <label className="grid gap-2 text-sm font-extrabold text-slate-800">
                <span>Service of Interest</span>
                <select
                  required
                  name="enquiryType"
                  className="h-14 rounded-2xl border border-emerald-100 bg-white px-5 text-sm font-semibold text-slate-800 outline-none transition focus:border-brand-700 focus:ring-4 focus:ring-brand-700/10"
                >
                  {enquiryTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-extrabold text-slate-800">
              <span>Message</span>
              <textarea
                required
                name="message"
                rows={6}
                placeholder="Briefly tell us about your enquiry."
                className="resize-none rounded-2xl border border-emerald-100 bg-white px-5 py-4 text-sm font-semibold text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-700 focus:ring-4 focus:ring-brand-700/10"
              />
            </label>
            {status === "success" && (
              <p
                role="status"
                className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-bold leading-7 text-emerald-900"
              >
                Thank you. Your enquiry has been submitted to the Papaipay team.
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
              {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
            </button>
          </form>
        </div>
      </section>

      <section className="bg-[#f7fbf8] px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-700">
              Visit Our Office
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-5xl">
              Visit Our Office
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
              Our office is located in Bandar Sri Damansara and is available for
              scheduled consultation sessions and appointments.
            </p>
          </div>
          <div className="mt-12 overflow-hidden rounded-[2rem] border border-emerald-100 bg-white shadow-2xl shadow-emerald-950/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1991.8001775262276!2d101.61816179839475!3d3.199201799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa291ee52eb679911%3A0x9e7d9e7d1d5418fb!2sPAPA%20IPAY!5e0!3m2!1sen!2smy!4v1781586680115!5m2!1sen!2smy"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Papaipay Office Location"
              className="h-[320px] w-full md:h-[420px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-700">
            Follow Us
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-5xl">
            Stay connected with Papaipay.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {socialLinks.map(([social, href]) => (
              <a
                key={social}
                href={href}
                className="flex items-center justify-center gap-3 rounded-[1.25rem] border border-emerald-100 bg-[#f7fbf8] px-5 py-4 text-sm font-extrabold text-slate-800 shadow-lg shadow-emerald-950/5 transition hover:-translate-y-0.5 hover:border-brand-700/30 hover:text-brand-700"
              >
                <SocialIcon name={social} className="h-5 w-5" />
                {social}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 pb-20 lg:px-8 lg:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#082314_0%,#0b301d_52%,#031a0e_100%)] p-8 text-center text-white shadow-2xl shadow-emerald-950/20 md:p-14">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
            style={{ backgroundImage: "url('/hero-contact.png')" }}
          />
          <div className="absolute inset-0 bg-black/25" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-[-0.045em] md:text-5xl">
              Speak With Us
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/78">
              Connect with our team to learn more about the services we provide.
            </p>
            <a
              href="tel:0362790080"
              className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-900 shadow-xl transition hover:-translate-y-0.5 hover:bg-white/90"
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </section>

      <SiteFooter locale="en" />
    </main>
  );
}
