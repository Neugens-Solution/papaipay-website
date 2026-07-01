"use client";

import { useEffect, useState } from "react";

import { Footer as SiteFooter, Header as SiteHeader } from "../site-components";
const navItems = [["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Team", "/team"], ["Careers", "/careers"], ["Contact Us", "/contact"]];
const services = [
  ["Financial Advisory Service", "Initial guidance to understand financial position and suitable options."],
  ["Asset Planning", "A structured approach to help customers see asset opportunities and needs."],
  ["Financial Education", "Clear explanations so customers can make decisions with more confidence."],
  ["Customer Support", "Follow-up support to keep every process organised."],
];
const socials = ["Facebook", "Instagram", "TikTok"];
const heroSlides = [
  {
    image: "/hero-1a.png",
    mobileImage: "/hero-1a-mobile.png",
    title: "Turn heavy financial commitments into assets that build value.",
    text: "Understand the available options and organise a clearer financial strategy for the future.",
  },
  {
    image: "/hero-2.png",
    mobileImage: "/hero-2-mobile.png",
    title: "Move beyond financial pressure. Step forward with confidence.",
    text: "A structured plan today can help shape a stronger financial position for the future.",
  },
  {
    image: "/hero-3.png",
    mobileImage: "/hero-3-mobile.png",
    title: "More than a decade helping customers build a better future.",
    text: "With more than 10 years of experience, Papaipay has helped thousands of customers understand financial and asset options more clearly.",
  },
];
const heroTrustItems = [
  ["Professional Consultants", "Guidance from experienced and qualified consultants."],
  ["Structured Approach", "A structured process for every financial decision."],
  ["Customer Support", "Your needs form the basis of every recommendation we make."],
  ["Ongoing Support", "We stay with you at every step of the journey."],
];
const whatWeDo = [
  ["01", "Financial Commitment Consolidation", "Restructuring existing commitments so cash flow is more organised and easier to manage."],
  ["02", "Personal Financing Management", "Helping customers understand financing options that suit current needs and affordability."],
  ["03", "SME Solutions", "Support for entrepreneurs and business owners who need a clearer financial structure."],
  ["04", "Henry's Asset Approach", "An approach focused on asset building and more strategic long-term planning."],
];

const henryHighlights = [
  ["home", "Identify Asset Opportunities", "We help customers identify potential asset options that suit their current situation."],
  ["clipboard", "Rancang Dengan Strategi", "Setiap langkah dirancang secara tersusun supaya keputusan dibuat dengan lebih yakin."],
  ["shield", "Build a More Stable Future", "With the right assets, customers can plan their future more effectively."],
];
const journeySteps = [
  ["01", "edit", "Hantar Application", "Isi maklumat asas melalui borang ringkas."],
  ["02", "search", "Initial Review", "The Papaipay team reviews the customer situation and needs."],
  ["03", "chat", "Consultation Session", "A short discussion to understand suitable options."],
  ["04", "briefcase", "Proposed Solution", "A clearer and more structured proposal is provided as the next guide."],
];
const credibilityStats = [
  ["award", "10", "Years of Experience", "Strong experience guiding customers through financial and asset decisions."],
  ["users", "80", "Financial Advisory Representatives", "An advisory team that supports customers with a professional approach."],
  ["briefcase", "16,000", "Satisfied Customers", "Customer trust is the foundation of every recommendation and review."],
  ["shield", "RM450 Juta", "Assets Under Our Advice", "The value of assets under our advice reflects our experience and customer trust."],
];

function BrandLogo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center">
      <img src="/papaipay-logo.svg" alt="Papaipay" className={`h-11 w-auto object-contain md:h-14 ${dark ? "brightness-0 invert" : ""}`} />
    </div>
  );
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-700">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{text}</p>
    </div>
  );
}

function HeroSlider() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div key={slide.image}>
            <div className={`absolute inset-0 hidden bg-cover bg-center opacity-0 md:block ${index === 0 ? "animate-[heroOne_18s_infinite]" : index === 1 ? "animate-[heroTwo_18s_infinite]" : "animate-[heroThree_18s_infinite]"}`} style={{ backgroundImage: `url(${slide.image})` }} />
            <div className={`absolute inset-0 bg-cover bg-center opacity-0 md:hidden ${index === 0 ? "animate-[heroOne_18s_infinite]" : index === 1 ? "animate-[heroTwo_18s_infinite]" : "animate-[heroThree_18s_infinite]"}`} style={{ backgroundImage: `url(${slide.mobileImage})` }} />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,26,14,0.96)_0%,rgba(3,26,14,0.82)_34%,rgba(3,26,14,0.34)_64%,rgba(3,26,14,0.04)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#031a0e]/70 via-transparent to-black/20" />
      <div className="relative mx-auto grid min-h-screen max-w-7xl items-start px-5 pb-12 pt-28 md:items-center md:pb-28 md:pt-28 lg:px-8 lg:pb-36 lg:pt-32">
        <div className="flex min-h-[calc(100vh-10rem)] max-w-[700px] flex-col md:block md:min-h-0">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.26em] text-white/90 backdrop-blur">Plan Advisor • Pay Advisor</div>
          <div className="relative min-h-[310px] md:min-h-[330px] lg:min-h-[340px]">
            {heroSlides.map((slide, index) => (
              <div key={slide.title} className={`absolute inset-0 opacity-0 ${index === 0 ? "animate-[copyOne_18s_infinite]" : index === 1 ? "animate-[copyTwo_18s_infinite]" : "animate-[copyThree_18s_infinite]"}`}>
                <h1 className="max-w-[680px] text-[31px] font-extrabold leading-[1.08] tracking-[-0.045em] md:text-[48px] lg:text-[56px] xl:text-[60px]">{slide.title}</h1>
                <p className="mt-7 max-w-2xl text-[15px] leading-7 text-white/88 md:mt-5 md:text-lg md:leading-8">{slide.text}</p>
              </div>
            ))}
          </div>
          </div>
          <div className="mt-auto pt-10 md:mt-0 md:pt-0">
            <div className="flex flex-col gap-5 md:mt-1 md:gap-3 sm:flex-row">
              <a href="/apply" className="rounded-full bg-white px-7 py-4 text-center text-xs font-extrabold uppercase tracking-[0.1em] text-brand-900 shadow-2xl transition hover:-translate-y-0.5">Start Initial Review</a>
              <a href="#henry" className="rounded-full border border-white/30 px-7 py-4 text-center text-xs font-extrabold uppercase tracking-[0.1em] text-white backdrop-blur transition hover:bg-white/10">Find Out More</a>
            </div>
            <div className="mt-12 flex gap-3 md:mt-9">
              {heroSlides.map((slide, index) => <span key={slide.image} className={`h-2.5 rounded-full bg-white/70 ${index === 0 ? "w-10" : "w-2.5"}`} />)}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 hidden border-t border-white/10 bg-[#06321c]/88 backdrop-blur-md lg:block">
        <div className="mx-auto grid max-w-7xl grid-cols-4 divide-x divide-white/10 px-8 py-7">
          {heroTrustItems.map(([title, text]) => (
            <div key={title} className="px-8 first:pl-0 last:pr-0">
              <div className="text-sm font-extrabold text-white">{title}</div>
              <p className="mt-2 text-sm leading-6 text-white/72">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeDoSection() {
  return (
    <section id="services" className="bg-[#f7fbf8] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-700">Our Services</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.04] tracking-[-0.045em] text-slate-950 md:text-5xl">Services Utama Papaipay</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600 md:text-lg lg:ml-auto">We help customers understand available options and organise strategies that better fit their financial and asset needs.</p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {whatWeDo.map(([number, title, text]) => (
            <a key={title} href={title === "Henry's Asset Approach" ? "#henry" : "/apply"} className="group flex min-h-[320px] flex-col justify-between rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-xl shadow-emerald-950/5 transition duration-300 hover:-translate-y-1 hover:border-brand-700/30 hover:shadow-2xl hover:shadow-emerald-950/10">
              <div>
                <div className="text-5xl font-extrabold tracking-[-0.08em] text-brand-700/20 transition group-hover:text-brand-700/28">{number}</div>
                <h3 className="mt-10 text-2xl font-extrabold leading-tight tracking-[-0.04em] text-slate-950">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
              </div>
              <div className="mt-8 inline-flex items-center text-xs font-extrabold uppercase tracking-[0.12em] text-brand-700">Find Out More <span className="ml-2 transition group-hover:translate-x-1">→</span></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function LineIcon({ name, className = "" }: { name: string; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeLinecap: "round" as const, strokeLinejoin: "round" as const, strokeWidth: 1.8 };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      {name === "home" && <><path {...common} d="M3 11.5 12 4l9 7.5" /><path {...common} d="M5.5 10.5V20h13v-9.5" /><path {...common} d="M10 20v-5h4v5" /></>}
      {name === "clipboard" && <><path {...common} d="M9 5h6" /><path {...common} d="M9 3h6v4H9z" /><path {...common} d="M7 5H5.5A1.5 1.5 0 0 0 4 6.5v13A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 18.5 5H17" /><path {...common} d="m8 13 2 2 5-5" /><path {...common} d="M8 18h8" /></>}
      {name === "shield" && <><path {...common} d="M12 3 20 6v5c0 5-3.4 8.2-8 10-4.6-1.8-8-5-8-10V6z" /><path {...common} d="m9 12 2 2 4-4" /></>}
      {name === "edit" && <><path {...common} d="M4 20h16" /><path {...common} d="M6 16.5 17.5 5a2.1 2.1 0 0 1 3 3L9 19l-4 1z" /><path {...common} d="m15.5 7.5 3 3" /></>}
      {name === "search" && <><circle {...common} cx="10.5" cy="10.5" r="5.5" /><path {...common} d="m15 15 5 5" /><path {...common} d="M8.5 10.5h4" /><path {...common} d="M10.5 8.5v4" /></>}
      {name === "chat" && <><path {...common} d="M5 6h14v9H9l-4 4z" /><path {...common} d="M8 10h4" /><path {...common} d="M8 13h8" /></>}
      {name === "briefcase" && <><path {...common} d="M4 8h16v11H4z" /><path {...common} d="M9 8V5h6v3" /><path {...common} d="M4 12h16" /><path {...common} d="M11 12v2h2v-2" /></>}
      {name === "award" && <><circle {...common} cx="12" cy="9" r="4" /><path {...common} d="m9.5 12.5-2 7 4.5-2 4.5 2-2-7" /><path {...common} d="M12 7v4" /></>}
      {name === "users" && <><circle {...common} cx="9" cy="8" r="3" /><circle {...common} cx="17" cy="9" r="2.5" /><path {...common} d="M3.5 19a5.5 5.5 0 0 1 11 0" /><path {...common} d="M14 16.5a4.5 4.5 0 0 1 6.5 2.5" /></>}
    </svg>
  );
}

function SocialIcon({ name, className = "" }: { name: string; className?: string }) {
  const common = { fill: "currentColor" };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      {name === "Facebook" && <path {...common} d="M14 8.4V6.7c0-.8.6-1.1 1.1-1.1h1.7V2.5L14.4 2.5c-3 0-4.4 1.8-4.4 4.3v1.6H7v3.5h3V22h3.7V11.9h2.7l.5-3.5H14Z" />}
      {name === "Instagram" && <><path {...common} d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Z" /><path {...common} d="M12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6ZM17.1 6.6a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" /></>}

    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7fbf8] text-slate-950">
      <SiteHeader active="home" locale="en" />
      <HeroSlider />

      <section className="bg-[#06321c] px-5 pb-10 pt-8 text-white lg:hidden">
        <div className="mx-auto max-w-7xl">
          {heroTrustItems.map(([title, text], index) => (
            <div key={title}>
              <div className="text-sm font-extrabold tracking-[-0.01em] text-white">{title}</div>
              <p className="mt-2 text-sm leading-6 text-white/72">{text}</p>
              {index < heroTrustItems.length - 1 && <div className="my-6 h-px w-full bg-white/20" />}
            </div>
          ))}
        </div>
      </section>

      <WhatWeDoSection />

      <section id="henry" className="relative min-h-[700px] overflow-hidden bg-[#052315] text-white lg:min-h-[760px]">
        <div className="absolute inset-0">
          <picture className="block h-full w-full">
            <source media="(max-width: 767px)" srcSet="/henrys-asset-mobile.png" />
            <img src="/henrys-asset.png" alt="Henry's Asset Approach" className="h-full w-full object-cover" />
          </picture>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,17,10,0.98)_0%,rgba(3,35,20,0.88)_33%,rgba(3,35,20,0.52)_62%,rgba(3,35,20,0.10)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#02140c]/95 via-[#02140c]/20 to-black/10" />
        <div className="relative mx-auto flex min-h-[700px] max-w-7xl flex-col justify-between px-5 py-14 md:px-10 lg:min-h-[760px] lg:px-8 lg:py-20">
            <div className="max-w-2xl pt-10 lg:pt-14">
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#d6b95f]">Discover Henry&apos;s Asset Approach</p>
              <h2 className="mt-5 max-w-xl text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] md:text-6xl lg:text-7xl">Build Assets,<br />Not Just<br />Settle Debt.</h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-white/80 md:text-lg">Papaipay helps customers identify suitable asset opportunities and plan the next step with clarity, structure and guidance.</p>
              <a href="/apply" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#d6b95f] px-6 py-2.5 text-xs font-extrabold uppercase tracking-[0.12em] text-emerald-950 shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#e5cd7a]">Find Out More <span aria-hidden="true">→</span></a>
            </div>
            <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/20 backdrop-blur-md md:grid md:gap-5 md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none md:grid-cols-3 lg:mt-14 lg:gap-0 lg:divide-x lg:divide-white/10">
              {henryHighlights.map(([icon, title, text], index) => (
                <div key={title} className="text-center md:rounded-3xl md:border md:border-white/10 md:bg-black/25 md:p-6 md:text-left md:shadow-2xl md:shadow-black/15 md:backdrop-blur-md lg:rounded-none lg:border-0 lg:bg-transparent lg:px-10 lg:shadow-none lg:first:pl-0 lg:last:pr-0">
                  <LineIcon name={icon} className="mx-auto h-12 w-12 rounded-full border border-[#d6b95f]/50 p-3 text-[#d6b95f] md:mx-0 md:h-14 md:w-14" />
                  <h3 className="mt-4 text-lg font-extrabold leading-tight text-white md:text-xl">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/70">{text}</p>
                  {index < henryHighlights.length - 1 && <div className="mx-auto my-6 h-px w-[45%] bg-white/20 md:hidden" />}
                </div>
              ))}
            </div>
          </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7fbf8] px-5 py-24 lg:px-8">
        <div className="absolute inset-x-0 top-[58%] hidden border-t border-dashed border-emerald-700/20 lg:block" />
        <SectionTitle eyebrow="How It Works" title="Work With Papaipay in 4 Simple Steps" text="From a simple submission to a proposed solution, every step is clearly guided by the Papaipay team." />
        <div className="relative mx-auto mt-14 grid max-w-7xl grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
          {journeySteps.map(([number, icon, title, text]) => (
            <div key={number} className="group relative rounded-[1.5rem] border border-emerald-100 bg-white/95 p-4 text-center shadow-xl shadow-emerald-950/5 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-950/10 md:rounded-[1.75rem] md:p-7">
              <div className="flex items-start justify-between gap-4">
                <span className="text-lg font-black tracking-[-0.04em] text-brand-700">{number}</span>
                <span className="h-px flex-1 bg-emerald-100/70" />
              </div>
              <div className="mx-auto mt-4 grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-emerald-50 to-white text-brand-700 ring-1 ring-emerald-100 shadow-inner shadow-emerald-950/5 md:h-24 md:w-24 lg:h-20 lg:w-20">
                <LineIcon name={icon} className="h-8 w-8 md:h-12 md:w-12 lg:h-10 lg:w-10" />
              </div>
              <h3 className="mt-5 text-sm font-extrabold leading-tight text-slate-950 md:mt-7 md:text-lg">{title}</h3>
              <p className="mt-3 min-h-[96px] text-xs leading-5 text-slate-600 md:min-h-[72px] md:text-sm md:leading-6">{text}</p>
              <div className="mt-5 text-lg font-bold text-brand-700 transition group-hover:translate-x-1">→</div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#02140c] px-5 py-24 text-white lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(31,143,77,0.28),transparent_34%),radial-gradient(circle_at_78%_30%,rgba(214,185,95,0.16),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_24px)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#d6b95f]">Why Choose Papaipay</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.04] tracking-[-0.045em] md:text-5xl">Professional Approach<br />Proven Results</h2>
            <p className="mt-5 text-base leading-8 text-white/70 md:text-lg">We help customers explore financial and asset options through a trusted, professional approach.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {credibilityStats.map(([icon, stat, label, text]) => (
              <div key={label} className="rounded-[1.25rem] border border-[#d6b95f]/30 bg-white/10 p-7 text-center shadow-2xl shadow-black/10 backdrop-blur-md">
                <LineIcon name={icon} className="mx-auto h-12 w-12 text-[#d6b95f]" />
                <div className={`mt-5 font-extrabold tracking-[-0.06em] text-white ${stat === "RM450 Juta" ? "text-3xl md:text-4xl lg:text-[2.35rem]" : "text-5xl md:text-6xl"}`}>{stat}</div>
                <h3 className="mt-3 text-sm font-extrabold uppercase tracking-[0.08em] text-white/90">{label}</h3>
                <div className="mx-auto mt-4 h-px w-10 bg-[#d6b95f]" />
                <p className="mt-4 text-sm leading-6 text-white/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="initial-review" className="bg-[#f7fbf8] px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[1.75rem] bg-[#082314] p-8 text-center text-white shadow-2xl shadow-emerald-950/20 md:p-14">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#d6b95f]">Start Today</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-[1.04] tracking-[-0.045em] md:text-5xl">Start Initial Review With Papaipay</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/72">Share your basic situation with our team so we can help you understand the next suitable step.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/apply" className="rounded-full bg-white px-8 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-900 shadow-xl transition hover:-translate-y-0.5 hover:bg-white/90">Start Initial Review</a>
            <a href="/en/services" className="rounded-full border border-white/25 px-8 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-white/10">Find Out More</a>
          </div>
        </div>
      </section>

      <SiteFooter locale="en" />

    </main>
  );
}
