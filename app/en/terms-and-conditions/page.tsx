import type { Metadata } from "next";

import { Footer as SiteFooter, Header as SiteHeader } from "../../site-components";
import { createPageMetadata } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata("termsAndConditions", "en");

const sections = [
  {
    title: "Introduction",
    body: "Papaipay is operated by PICM Sdn. Bhd. [Registration No.: 1439515-D (202101039115)]. These Terms & Conditions explain the use of the Papaipay website and information related to services presented on this website.",
  },
  {
    title: "Website Use",
    body: "By using this website, you agree to use it responsibly, lawfully, and without misusing any content, forms, functions, or communication channels provided by Papaipay.",
  },
  {
    title: "Website Information",
    body: "Information on this website is provided for general information only. It is not intended as legal advice, specific financial advice, or a guarantee that any option is suitable for every user circumstance.",
  },
  {
    title: "Papaipay Services",
    body: "Papaipay may provide general financial advisory, financial commitment review, asset-planning-related information, and customer guidance based on information shared by users.",
  },
  {
    title: "No Guarantee of Approval",
    body: "Papaipay does not guarantee any approval, financing, restructuring, or specific outcome. Any decision is subject to the processes, criteria, and assessment of the relevant parties.",
  },
  {
    title: "User Responsibilities",
    body: "Users are responsible for ensuring their use of this website complies with applicable laws and for not submitting false, misleading, or incomplete information through any form or communication channel.",
  },
  {
    title: "Accuracy of Information",
    body: "You should provide accurate, complete, and current information when contacting Papaipay or submitting information through the website. Papaipay may contact you based on information submitted through this website.",
  },
  {
    title: "Intellectual Property",
    body: "The content, branding, layout, design, text, graphics, and other materials on this website belong to Papaipay or PICM Sdn. Bhd. unless stated otherwise. Any unauthorised use is not permitted.",
  },
  {
    title: "Third-Party Links",
    body: "This website may contain links to third-party websites or platforms. Papaipay is not responsible for the content, practices, security, or policies of those third parties.",
  },
  {
    title: "Limitation of Liability",
    body: "To the extent permitted by law, Papaipay is not liable for any loss or damage arising from use of this website or reliance on general information displayed on the website.",
  },
  {
    title: "Changes To These Terms",
    body: "Papaipay may update these Terms & Conditions from time to time. Any changes will be posted on this page and will take effect when published on the website.",
  },
  {
    title: "Governing Law",
    body: "Use of this website and these Terms & Conditions are governed by the laws of Malaysia.",
  },
  {
    title: "Contact Us",
    body: "For questions about these Terms & Conditions, please contact Papaipay by email at papaipay.my@gmail.com.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#f7fbf8] text-slate-950">
      <SiteHeader active="termsAndConditions" locale="en" />

      <section className="relative flex min-h-[190px] items-center justify-center overflow-hidden pt-16 text-center text-white md:min-h-[320px] md:pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,185,95,0.26),transparent_34%),linear-gradient(135deg,#031a0e_0%,#0d3b24_55%,#082314_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031a0e]/70 via-transparent to-black/20" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-8 md:py-16 lg:px-8">
          <h1 className="text-3xl font-bold leading-[1.05] tracking-[-0.05em] md:text-4xl lg:text-5xl">Terms &amp; Conditions</h1>
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
