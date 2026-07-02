"use client";

import { useState } from "react";

import { Footer as SiteFooter, Header as SiteHeader } from "../../site-components";

const services = [
  {
    title: "Financial Commitment Consolidation",
    image: "/Penyatuan-Komitmen-Kewangan.png",
    description: "Helping customers restructure existing financial commitments so cash flow becomes more organised and easier to manage.",
    bullets: ["Current commitment review", "More structured financial organisation", "Focus on financial stability"],
  },
  {
    title: "Personal Financing Management",
    image: "/Pembiayaan-Peribadi.png",
    description: "Helping customers understand suitable financing options based on current needs, affordability and financial goals.",
    bullets: ["Basic eligibility review", "Documentation guidance", "Application process support"],
  },
  {
    title: "SME Solutions",
    image: "/Penyelesaian-SME.png",
    description: "Designed for business owners and entrepreneurs who need a clearer financial approach to support operations and growth.",
    bullets: ["Business needs review", "Suitable solution options", "Review and documentation support"],
  },
  {
    title: "Henry's Asset Approach",
    label: "Papaipay Signature Approach",
    image: "/Henry-Asset-Approach.png",
    description: "Papaipay’s signature approach focuses on how financial commitments can be managed more strategically to create room for asset building and long-term planning.",
    bullets: ["Focus on asset development", "More sustainable financial planning", "Helping customers plan future asset ownership opportunities"],
  },
];

const processSteps = [
  ["01", "Understand Your Situation", "We review the customer’s financial position, current commitments and goals in a holistic way."],
  ["02", "Assess Available Options", "We help identify suitable options based on the customer’s profile and needs."],
  ["03", "Recommend a Suitable Strategy", "Recommendations are provided with clearer direction so customers can make decisions with greater confidence."],
  ["04", "Guidance & Follow-Up", "We help customers through the next process and provide guidance until follow-up actions are completed."],
];

const situationCards = [
  ["Inconsistent Payment Record", "An inconsistent payment record can affect the review process and available options."],
  ["High Credit Usage", "Using credit facilities close to their limits can affect the overall financial position."],
  ["High Financial Commitments", "Existing commitments that are high compared with income can limit financial flexibility."],
  ["Incomplete Documentation", "Complete information and documents help speed up the review and assessment process."],
];

const challenges = ["Overlapping financial commitments", "Unbalanced cash flow", "Less consistent payment records", "Unclear financial options"];
const approaches = ["More organised commitment structuring", "Financial review and planning", "Guidance based on individual circumstances", "Assessment of suitable options"];
const requirements = [
  "Warganegara Malaysia berumur 21 hingga 60 tahun.",
  "Mempunyai pendapatan tetap setiap bulan.",
  "Has an active bank loan or credit card record for more than 6 months.",
  "Tidak mempunyai tunggakan bayaran bank melebihi 2 bulan berturut-turut.",
  "Open to Government, GLC and Private sector employees.",
  "Provides supporting documents such as an identity card copy, latest payslips and 3 to 6 months of bank statements.",
];
const tableTenures = ["2 Years", "3 Years", "4 Years", "5 Years", "6 Years", "7 Years", "8 Years", "9 Years", "10 Years"];
const tableRows = [
  ["RM50,000", "2,212", "1,517", "1,177", "969", "832", "733", "660", "603", "558"],
  ["RM55,000", "2,433", "1,669", "1,295", "1,066", "915", "807", "726", "664", "614"],
  ["RM60,000", "2,654", "1,820", "1,412", "1,163", "998", "880", "792", "724", "670"],
  ["RM65,000", "2,875", "1,972", "1,530", "1,260", "1,081", "953", "858", "784", "725"],
  ["RM70,000", "3,097", "2,124", "1,648", "1,357", "1,164", "1,026", "924", "844", "781"],
  ["RM75,000", "3,318", "2,275", "1,765", "1,454", "1,247", "1,100", "990", "905", "837"],
  ["RM80,000", "3,539", "2,427", "1,883", "1,551", "1,330", "1,173", "1,056", "965", "893"],
  ["RM90,000", "3,981", "2,730", "2,118", "1,745", "1,496", "1,320", "1,188", "1,085", "1,004"],
  ["RM100,000", "4,424", "3,034", "2,354", "1,938", "1,663", "1,466", "1,320", "1,206", "1,116"],
  ["RM150,000", "6,635", "4,550", "3,530", "2,907", "2,494", "2,199", "1,979", "1,809", "1,673"],
  ["RM200,000", "8,847", "6,067", "4,707", "3,876", "3,325", "2,932", "2,639", "2,412", "2,231"],
  ["RM250,000", "11,058", "7,583", "5,883", "4,845", "4,156", "3,665", "3,298", "3,014", "2,789"],
];
const faqCategories = [
  { category: "Eligibility", items: [["Who is eligible to apply through Papaipay?", "Malaysian citizens aged 21–60 with fixed income."], ["What factors can affect the review process?", "Late payment records, high financial commitments, high credit card utilisation, or incomplete documents."], ["Can I apply again if an application was not successful?", "Yes, after improving financial records or updating the required documents."]] },
  { category: "Application", items: [["How does Papaipay help customers?", "Papaipay acts as a consultant by assisting with review, document preparation and guidance throughout the application process."], ["What documents should be prepared?", "Identity card copy, latest payslips, bank statements and relevant employment supporting documents."], ["Are there charges for this service?", "Charges depend on the type of service required and will be explained clearly before any process begins."]] },
  { category: "Process", items: [["How long does the review usually take?", "Usually between 1 and 3 working days after complete documents are received and submitted for review."], ["Does Papaipay approve applications?", "No. Approval is subject to the relevant financial institution. Papaipay assists with review and application preparation."], ["How will I receive review status?", "Review status will be shared via WhatsApp, email or phone call."]] },
];

function SectionHeading({ eyebrow, title, intro, light = false }: { eyebrow?: string; title: string; intro?: string; light?: boolean }) {
  return <div className="mx-auto max-w-3xl text-center">{eyebrow && <p className={`text-xs font-bold uppercase tracking-[0.28em] ${light ? "text-[#d6b95f]" : "text-brand-700"}`}>{eyebrow}</p>}<h2 className={`mt-4 text-3xl font-bold leading-[1.04] tracking-[-0.045em] md:text-5xl ${light ? "text-white" : "text-slate-950"}`}>{title}</h2>{intro && <p className={`mt-5 text-base leading-8 md:text-lg ${light ? "text-white/72" : "text-slate-600"}`}>{intro}</p>}</div>;
}

function CheckIcon({ muted = false }: { muted?: boolean }) { return <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-black ${muted ? "bg-white/10 text-white/70" : "bg-brand-700/10 text-brand-700"}`}>✓</span>; }

function ChevronIcon({ open }: { open: boolean }) {
  return <svg viewBox="0 0 20 20" aria-hidden="true" className={`h-5 w-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}><path d="M5 7.5 10 12.5 15 7.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" /></svg>;
}

function ServiceTabs() {
  const [active, setActive] = useState(0);
  const service = services[active];

  return <section className="bg-white px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Services" title="Structured Financial Solutions" intro="Each service is designed to help customers understand their financial position before making clearer and more responsible decisions." />
    <div className="mt-12 hidden md:block"><div className="flex gap-3 rounded-[2rem] border border-emerald-100 bg-[#f7fbf8] p-3">{services.map((item, index) => <button key={item.title} onClick={() => setActive(index)} className={`rounded-[1.35rem] px-5 py-4 text-sm font-bold transition md:flex-1 md:text-center ${active === index ? "bg-brand-700 text-white shadow-lg shadow-emerald-950/15" : "bg-white text-slate-700 hover:text-brand-700"}`}>{item.title}</button>)}</div><article className="mt-8 grid gap-8 rounded-[2rem] border border-emerald-100 bg-white p-5 shadow-2xl shadow-emerald-950/5 md:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-700">{service.label ?? "Papaipay Advisory Service"}</p><h3 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.045em] text-slate-950 md:text-4xl">{service.title}</h3><p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{service.description}</p><ul className="mt-8 grid gap-4">{service.bullets.map((bullet) => <li key={bullet} className="flex items-start gap-3 text-sm font-semibold text-slate-700"><CheckIcon /> <span>{bullet}</span></li>)}</ul></div><div className="overflow-hidden rounded-[1.5rem] bg-emerald-950/5"><img src={service.image} alt={service.title} className="aspect-[5/3] h-full w-full object-cover" /></div></article></div>
    <div className="mt-10 grid gap-4 md:hidden">{services.map((item, index) => { const open = active === index; return <article key={item.title} className={`overflow-hidden rounded-[1.5rem] border transition ${open ? "border-brand-700/35 bg-white shadow-xl shadow-emerald-950/10" : "border-emerald-100 bg-[#f7fbf8] shadow-lg shadow-emerald-950/5"}`}><button type="button" onClick={() => setActive(index)} aria-expanded={open} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"><span><span className="block text-[11px] font-extrabold uppercase tracking-[0.22em] text-brand-700">Services 0{index + 1}</span><span className="mt-1 block text-base font-extrabold leading-tight tracking-[-0.025em] text-slate-950">{item.title}</span></span><span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition ${open ? "border-brand-700 bg-brand-700 text-white" : "border-emerald-100 bg-white text-brand-700"}`}><ChevronIcon open={open} /></span></button>{open && <div className="border-t border-emerald-100 px-5 pb-6 pt-5"><div className="overflow-hidden rounded-[1.1rem] bg-emerald-950/5"><img src={item.image} alt={item.title} className="aspect-[5/3] w-full object-cover" /></div>{item.label && <p className="mt-5 text-[11px] font-extrabold uppercase tracking-[0.24em] text-brand-700">{item.label}</p>}<p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p><ul className="mt-5 grid gap-3">{item.bullets.map((bullet) => <li key={bullet} className="flex items-start gap-3 text-sm font-semibold leading-6 text-slate-700"><CheckIcon /> <span>{bullet}</span></li>)}</ul></div>}</article>; })}</div>
  </div></section>;
}

export default function ServicesPage() {
  return <main className="min-h-screen bg-[#f7fbf8] text-slate-950"><SiteHeader active="services" locale="en" />
    <section className="relative flex min-h-[190px] items-center justify-center overflow-hidden pt-16 text-center text-white md:min-h-[320px] md:pt-16"><div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero-service.png')" }} /><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,26,14,0.9)_0%,rgba(3,26,14,0.72)_48%,rgba(3,26,14,0.88)_100%)]" /><div className="absolute inset-0 bg-gradient-to-t from-[#031a0e]/82 via-black/10 to-black/30" /><div className="relative mx-auto w-full max-w-7xl px-5 py-8 md:py-16 lg:px-8"><h1 className="text-3xl font-bold leading-[1.05] tracking-[-0.05em] md:text-4xl lg:text-5xl">Our Services</h1></div></section>
    <ServiceTabs />
    <section className="bg-[#f7fbf8] px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><SectionHeading title="How We Help" intro="Our approach begins with understanding the customer’s situation before recommending more suitable and structured options." /><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{processSteps.map(([num, title, text]) => <article key={num} className="rounded-[1.75rem] border border-emerald-100 bg-white p-7 shadow-xl shadow-emerald-950/5"><div className="text-5xl font-bold tracking-[-0.08em] text-brand-700/20">{num}</div><h3 className="mt-8 text-xl font-bold leading-tight tracking-[-0.04em]">{title}</h3><p className="mt-4 text-sm leading-7 text-slate-600">{text}</p></article>)}</div></div></section>
    <section className="bg-white px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><SectionHeading title="Are You Facing These Situations?" intro="The following factors often influence the review process and available financial options." /><div className="mt-12 grid gap-5 md:grid-cols-2">{situationCards.map(([title, text], index) => <article key={title} className="rounded-[1.75rem] border border-emerald-100 bg-[#f7fbf8] p-7 shadow-xl shadow-emerald-950/5"><div className="grid h-11 w-11 place-items-center rounded-full bg-white text-sm font-bold text-brand-700 shadow-lg shadow-emerald-950/5">0{index + 1}</div><h3 className="mt-6 text-xl font-bold tracking-[-0.035em]">{title}</h3><p className="mt-4 text-sm leading-7 text-slate-600">{text}</p></article>)}</div></div></section>
    <section className="relative overflow-hidden bg-[#02140c] px-5 py-20 text-white lg:px-8 lg:py-24"><div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(31,143,77,0.36),transparent_34%),radial-gradient(circle_at_84%_24%,rgba(214,185,95,0.18),transparent_30%)]" /><div className="relative mx-auto max-w-7xl"><SectionHeading light title="From Challenges to Solutions" intro="Papaipay helps customers review their financial position through a more structured, clear and responsible approach." /><div className="mt-12 grid gap-5 lg:grid-cols-2"><div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-md"><h3 className="text-2xl font-bold tracking-[-0.04em]">Common Challenges</h3><ul className="mt-7 grid gap-4">{challenges.map((item) => <li key={item} className="flex gap-3 text-white/78"><span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#d6b95f]/70" />{item}</li>)}</ul></div><div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-md"><h3 className="text-2xl font-bold tracking-[-0.04em]">Papaipay Approach</h3><ul className="mt-7 grid gap-4">{approaches.map((item) => <li key={item} className="flex gap-3 text-white/82"><CheckIcon muted />{item}</li>)}</ul></div></div></div></section>
    <section className="bg-[#f7fbf8] px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><SectionHeading title="Basic Requirements for Review" intro="These requirements help customers understand initial eligibility before the review process continues." /><div className="mt-12 grid gap-4 md:grid-cols-2">{requirements.map((item) => <div key={item} className="flex gap-4 rounded-[1.35rem] border border-emerald-100 bg-white p-5 shadow-lg shadow-emerald-950/5"><CheckIcon /><p className="text-sm font-semibold leading-7 text-slate-700">{item}</p></div>)}</div><p className="mt-6 text-center text-sm font-semibold text-slate-500">Subject to further review based on customer profile and documents.</p></div></section>
    <section className="bg-white px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><SectionHeading title="Example Estimated Monthly Commitments" intro="The following table shows example estimated monthly commitments based on different financing amounts and tenures." /><div className="mt-10 inline-flex rounded-full border border-emerald-100 bg-[#f7fbf8] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-brand-700">Indicative rate: 2.6% per annum</div><div className="mt-5 overflow-x-auto rounded-[1.5rem] border border-emerald-100 shadow-xl shadow-emerald-950/5"><table className="w-full min-w-[760px] border-collapse bg-white text-left text-[11px] md:text-xs"><thead className="bg-[#082314] text-white"><tr><th className="sticky left-0 z-10 bg-[#082314] px-2 py-3 font-extrabold md:px-4 md:py-4">Financing Amount</th>{tableTenures.map((head) => <th key={head} className="px-2 py-3 text-center font-extrabold md:px-4 md:py-4">{head}</th>)}</tr></thead><tbody>{tableRows.map((row) => <tr key={row[0]} className="border-b border-emerald-100 last:border-0"><td className="sticky left-0 bg-white px-2 py-2 font-extrabold text-brand-900 shadow-[8px_0_12px_-12px_rgba(2,20,12,0.45)] md:px-4 md:py-3">{row[0]}</td>{row.slice(1).map((cell, index) => <td key={`${row[0]}-${tableTenures[index]}`} className="px-2 py-2 text-center font-semibold text-slate-700 md:px-4 md:py-3">RM{cell}</td>)}</tr>)}</tbody></table></div><p className="mt-6 text-sm leading-7 text-slate-500">The information shown is for illustration and general reference only. Actual rates, financing amounts and monthly commitments are subject to assessment, eligibility and approval by the relevant financial institution.</p></div></section>
    <section id="faq" className="bg-[#f7fbf8] px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-5xl"><SectionHeading title="Frequently Asked Questions" intro="Short answers to common questions about eligibility, applications and the review process." /><div className="mt-12 space-y-8">{faqCategories.map((group) => <div key={group.category}><h3 className="mb-4 text-xl font-bold text-brand-900">{group.category}</h3><div className="space-y-3">{group.items.map(([question, answer]) => <details key={question} className="group rounded-[1.25rem] border border-emerald-100 bg-white p-5 shadow-lg shadow-emerald-950/5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-slate-950">{question}<span className="text-brand-700 transition group-open:rotate-45">+</span></summary><p className="mt-4 text-sm leading-7 text-slate-600">{answer}</p></details>)}</div></div>)}</div></div></section>
    <section className="bg-white px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#082314] p-8 text-center text-white shadow-2xl shadow-emerald-950/20 md:p-14"><p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d6b95f]">Contact Papaipay</p><h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.045em] md:text-5xl">Need Guidance on Your Financial Options?</h2><p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/72">Our team is ready to help you understand suitable options based on your current financial situation and future goals.</p><a href="/en/contact" className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.12em] text-brand-900 shadow-xl transition hover:-translate-y-0.5 hover:bg-white/90">Contact Us</a></div></section>
    <SiteFooter locale="en" /></main>;
}
