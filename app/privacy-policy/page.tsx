import type { Metadata } from "next";

import { Footer as SiteFooter, Header as SiteHeader } from "../site-components";
import { createPageMetadata } from "../../lib/seo";

export const metadata: Metadata = createPageMetadata("privacyPolicy", "ms");

const sections = [
  {
    title: "Pengenalan",
    body: "Papaipay dikendalikan oleh PICM Sdn. Bhd. [No. Pendaftaran: 1439515-D (202101039115)]. Dasar Privasi ini menerangkan secara umum bagaimana kami menguruskan maklumat peribadi yang anda kongsikan melalui laman web Papaipay.",
  },
  {
    title: "Maklumat Yang Kami Kumpulkan",
    body: "Kami mungkin mengumpulkan maklumat seperti nama, nombor telefon, alamat e-mel, maklumat asas yang dihantar melalui borang laman web, serta maklumat teknikal biasa seperti jenis pelayar dan aktiviti penggunaan laman web.",
  },
  {
    title: "Bagaimana Maklumat Digunakan",
    body: "Maklumat yang dikongsi boleh digunakan untuk menjawab pertanyaan, menguruskan permintaan yang dihantar, menyediakan maklumat berkaitan perkhidmatan Papaipay, menambah baik pengalaman laman web, dan tujuan pentadbiran dalaman yang munasabah.",
  },
  {
    title: "Perkongsian Maklumat",
    body: "Kami tidak menjual maklumat peribadi anda. Maklumat hanya boleh dikongsi apabila perlu untuk menguruskan pertanyaan atau permintaan anda, dengan penyedia perkhidmatan yang membantu operasi laman web, atau apabila diperlukan oleh undang-undang dan proses yang berkaitan.",
  },
  {
    title: "Keselamatan Data",
    body: "Kami mengambil langkah munasabah untuk melindungi maklumat yang diterima melalui laman web ini. Walau bagaimanapun, tiada kaedah penghantaran atau penyimpanan data melalui internet boleh dijamin selamat sepenuhnya.",
  },
  {
    title: "Tempoh Penyimpanan",
    body: "Maklumat peribadi akan disimpan hanya selama yang munasabah untuk tujuan ia dikumpulkan, termasuk untuk menjawab pertanyaan, rekod pentadbiran, atau keperluan operasi yang berkaitan.",
  },
  {
    title: "Hak Pengguna",
    body: "Anda boleh menghubungi kami untuk bertanya tentang maklumat peribadi yang telah dikongsikan, meminta pembetulan, atau meminta maklumat tidak lagi digunakan untuk komunikasi tertentu, tertakluk kepada keperluan operasi yang munasabah.",
  },
  {
    title: "Pautan Pihak Ketiga",
    body: "Laman web ini mungkin mengandungi pautan ke laman web atau platform pihak ketiga. Kami tidak bertanggungjawab terhadap amalan privasi, kandungan, atau keselamatan laman web pihak ketiga tersebut.",
  },
  {
    title: "Perubahan Kepada Dasar Ini",
    body: "Kami boleh mengemas kini Dasar Privasi ini dari semasa ke semasa. Sebarang perubahan akan dipaparkan di halaman ini dan akan berkuat kuasa apabila diterbitkan di laman web.",
  },
  {
    title: "Hubungi Kami",
    body: "Untuk pertanyaan berkaitan Dasar Privasi ini atau pengurusan maklumat peribadi anda, sila hubungi Papaipay melalui e-mel di papaipay.my@gmail.com.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f7fbf8] text-slate-950">
      <SiteHeader active="privacyPolicy" />

      <section className="relative flex min-h-[190px] items-center justify-center overflow-hidden pt-16 text-center text-white md:min-h-[320px] md:pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,185,95,0.26),transparent_34%),linear-gradient(135deg,#031a0e_0%,#0d3b24_55%,#082314_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031a0e]/70 via-transparent to-black/20" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-8 md:py-16 lg:px-8">
          <h1 className="text-3xl font-bold leading-[1.05] tracking-[-0.05em] md:text-4xl lg:text-5xl">Dasar Privasi</h1>
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
