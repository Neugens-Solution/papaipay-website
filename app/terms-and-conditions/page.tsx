import type { Metadata } from "next";

import { Footer as SiteFooter, Header as SiteHeader } from "../site-components";
import { createPageMetadata } from "../../lib/seo";

export const metadata: Metadata = createPageMetadata("termsAndConditions", "ms");

const sections = [
  {
    title: "Pengenalan",
    body: "Papaipay dikendalikan oleh PICM Sdn. Bhd. [No. Pendaftaran: 1439515-D (202101039115)]. Terma & Syarat ini menerangkan penggunaan laman web Papaipay dan maklumat berkaitan perkhidmatan yang dipaparkan di laman web ini.",
  },
  {
    title: "Penggunaan Laman Web",
    body: "Dengan menggunakan laman web ini, anda bersetuju untuk menggunakannya secara bertanggungjawab, sah, dan tidak menyalahgunakan sebarang kandungan, borang, fungsi, atau saluran komunikasi yang disediakan oleh Papaipay.",
  },
  {
    title: "Maklumat Di Laman Web",
    body: "Maklumat di laman web ini disediakan untuk tujuan maklumat umum sahaja. Ia tidak bertujuan sebagai nasihat undang-undang, kewangan khusus, atau jaminan bahawa sesuatu pilihan sesuai untuk semua keadaan pengguna.",
  },
  {
    title: "Perkhidmatan Papaipay",
    body: "Papaipay boleh menyediakan khidmat nasihat kewangan umum, semakan komitmen kewangan, maklumat berkaitan perancangan aset, dan panduan pelanggan berdasarkan maklumat yang dikongsikan oleh pengguna.",
  },
  {
    title: "Tiada Jaminan Kelulusan",
    body: "Papaipay tidak menjamin sebarang kelulusan, pembiayaan, penstrukturan semula, atau hasil tertentu. Sebarang keputusan adalah tertakluk kepada proses, kriteria, dan penilaian pihak berkaitan.",
  },
  {
    title: "Tanggungjawab Pengguna",
    body: "Pengguna bertanggungjawab memastikan penggunaan laman web ini mematuhi undang-undang yang terpakai dan tidak menghantar maklumat palsu, mengelirukan, atau tidak lengkap melalui mana-mana borang atau saluran komunikasi.",
  },
  {
    title: "Ketepatan Maklumat",
    body: "Anda hendaklah memberikan maklumat yang tepat, lengkap, dan terkini apabila menghubungi Papaipay atau menghantar maklumat melalui laman web. Papaipay boleh menghubungi anda berdasarkan maklumat yang dihantar melalui laman web ini.",
  },
  {
    title: "Hak Harta Intelek",
    body: "Kandungan, penjenamaan, susun atur, reka bentuk, teks, grafik, dan bahan lain di laman web ini adalah milik Papaipay atau PICM Sdn. Bhd. melainkan dinyatakan sebaliknya. Sebarang penggunaan tanpa kebenaran adalah tidak dibenarkan.",
  },
  {
    title: "Pautan Pihak Ketiga",
    body: "Laman web ini mungkin mengandungi pautan ke laman web atau platform pihak ketiga. Papaipay tidak bertanggungjawab terhadap kandungan, amalan, keselamatan, atau dasar pihak ketiga tersebut.",
  },
  {
    title: "Had Tanggungjawab",
    body: "Setakat yang dibenarkan oleh undang-undang, Papaipay tidak bertanggungjawab terhadap sebarang kerugian atau kerosakan yang timbul daripada penggunaan laman web ini atau pergantungan kepada maklumat umum yang dipaparkan di laman web.",
  },
  {
    title: "Perubahan Terma",
    body: "Papaipay boleh mengemas kini Terma & Syarat ini dari semasa ke semasa. Sebarang perubahan akan dipaparkan di halaman ini dan berkuat kuasa apabila diterbitkan di laman web.",
  },
  {
    title: "Undang-Undang Terpakai",
    body: "Penggunaan laman web ini dan Terma & Syarat ini dikawal oleh undang-undang Malaysia.",
  },
  {
    title: "Hubungi Kami",
    body: "Untuk pertanyaan berkaitan Terma & Syarat ini, sila hubungi Papaipay melalui e-mel di papaipay.my@gmail.com.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#f7fbf8] text-slate-950">
      <SiteHeader active="termsAndConditions" />

      <section className="relative flex min-h-[190px] items-center justify-center overflow-hidden pt-16 text-center text-white md:min-h-[320px] md:pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,185,95,0.26),transparent_34%),linear-gradient(135deg,#031a0e_0%,#0d3b24_55%,#082314_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031a0e]/70 via-transparent to-black/20" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-8 md:py-16 lg:px-8">
          <h1 className="text-3xl font-bold leading-[1.05] tracking-[-0.05em] md:text-4xl lg:text-5xl">Terma &amp; Syarat</h1>
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

      <SiteFooter />
    </main>
  );
}
