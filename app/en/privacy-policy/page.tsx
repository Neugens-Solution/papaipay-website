import type { Metadata } from "next";

import { Footer as SiteFooter, Header as SiteHeader } from "../../site-components";
import { createPageMetadata } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata("privacyPolicy", "en");

const sections = [
  {
    title: "Introduction",
    body: "Papaipay is operated by PICM Sdn. Bhd. [Registration No.: 1439515-D (202101039115)]. This Privacy Policy explains in general terms how we manage personal information shared through the Papaipay website.",
  },
  {
    title: "Information We Collect",
    body: "We may collect information such as your name, phone number, email address, basic details submitted through website forms, and standard technical information such as browser type and website usage activity.",
  },
  {
    title: "How We Use Information",
    body: "Information shared with us may be used to respond to enquiries, manage submitted requests, provide information about Papaipay services, improve the website experience, and support reasonable internal administrative purposes.",
  },
  {
    title: "Information Sharing",
    body: "We do not sell your personal information. Information may only be shared when needed to manage your enquiry or request, with service providers who support website operations, or when required by applicable processes or law.",
  },
  {
    title: "Data Security",
    body: "We take reasonable steps to protect information received through this website. However, no method of transmitting or storing data over the internet can be guaranteed to be completely secure.",
  },
  {
    title: "Retention",
    body: "Personal information will be retained only for as long as reasonably needed for the purpose it was collected, including responding to enquiries, maintaining administrative records, or supporting related operational needs.",
  },
  {
    title: "User Rights",
    body: "You may contact us to ask about personal information you have shared, request corrections, or ask that your information no longer be used for certain communications, subject to reasonable operational requirements.",
  },
  {
    title: "Third-Party Links",
    body: "This website may contain links to third-party websites or platforms. We are not responsible for the privacy practices, content, or security of those third-party websites.",
  },
  {
    title: "Changes To This Policy",
    body: "We may update this Privacy Policy from time to time. Any changes will be posted on this page and will take effect when published on the website.",
  },
  {
    title: "Contact Us",
    body: "For questions about this Privacy Policy or how your personal information is managed, please contact Papaipay by email at papaipay.my@gmail.com.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f7fbf8] text-slate-950">
      <SiteHeader active="privacyPolicy" locale="en" />

      <section className="relative flex min-h-[190px] items-center justify-center overflow-hidden pt-16 text-center text-white md:min-h-[320px] md:pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,185,95,0.26),transparent_34%),linear-gradient(135deg,#031a0e_0%,#0d3b24_55%,#082314_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031a0e]/70 via-transparent to-black/20" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-8 md:py-16 lg:px-8">
          <h1 className="text-3xl font-bold leading-[1.05] tracking-[-0.05em] md:text-4xl lg:text-5xl">Privacy Policy</h1>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-950/5 md:p-10">
          <div className="space-y-9">
            {sections.map((section, index) => (
              <section key={section.title} className="border-b border-emerald-100 pb-8 last:border-b-0 last:pb-0">
                <h2 className="text-xl font-extrabold tracking-[-0.03em] text-brand-900 md:text-2xl">{index + 1}. {section.title}</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter locale="en" />
    </main>
  );
}
