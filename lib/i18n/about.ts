import type { Locale } from "./locales";

export const aboutLabels: Record<
  Locale,
  {
    heroTitle: string;
    imageAlt: string;
    introEyebrow: string;
    introParagraphs: string[];
    visionTitle: string;
    visionQuote: string;
    missionTitle: string;
    missionItems: [string, string, string][];
    principlesTitle: string;
    principlesHeading: string;
    principlesIntro: string;
    coreValues: [string, string][];
  }
> = {
  ms: {
    heroTitle: "Tentang Kami",
    imageAlt: "Tentang Papaipay",
    introEyebrow: "Mengenai Kami",
    introParagraphs: [
      "Dengan pengalaman lebih 10 tahun dalam bidang perundingan kewangan serta rangkaian lebih 80 wakil penasihat kewangan, Papaipay telah membantu ribuan pelanggan memahami situasi kewangan mereka dan merancang langkah kewangan yang lebih sesuai dengan keperluan masing-masing.",
      "Kami percaya bahawa setiap situasi kewangan adalah berbeza. Atas sebab itu, pendekatan kami bermula dengan memahami keadaan pelanggan secara menyeluruh sebelum sebarang cadangan diberikan. Fokus kami bukan sekadar kepada penyelesaian jangka pendek, tetapi membantu pelanggan membuat keputusan yang lebih jelas, selamat dan sesuai untuk masa hadapan.",
      "Melalui pengalaman yang dibina bersama lebih 16,000 pelanggan berpuas hati dan nilai aset di bawah nasihat yang mencecah ratusan juta ringgit, Papaipay terus komited untuk menjadi rakan perunding yang dipercayai dalam membantu pelanggan mencapai matlamat kewangan mereka.",
      "Hari ini, Papaipay terus berkembang dengan satu matlamat yang sama iaitu membantu lebih ramai individu dan keluarga membuat keputusan kewangan yang lebih baik dengan telus, profesional dan berorientasikan hasil.",
    ],
    visionTitle: "VISI KAMI",
    visionQuote: "“Untuk membantu individu dan keluarga mengurus komitmen kewangan dengan lebih terancang, memahami peluang aset yang sesuai, dan membina kedudukan kewangan yang lebih stabil untuk jangka panjang.”",
    missionTitle: "MISI KAMI",
    missionItems: [
      ["target", "Bertindak untuk Perubahan", "Membantu pelanggan menyusun semula komitmen kewangan mereka dan merancang langkah yang lebih teratur untuk masa hadapan."],
      ["users", "Fokus kepada Pelanggan", "Mendengar keperluan pelanggan, memahami situasi mereka, dan memberi panduan yang sesuai berdasarkan maklumat serta pilihan yang tersedia."],
      ["spark", "Didorong oleh Impak", "Memberi nilai melalui pendidikan kewangan, perancangan aset dan sokongan berterusan supaya pelanggan lebih yakin membuat keputusan."],
    ],
    principlesTitle: "PRINSIP KAMI",
    principlesHeading: "Nilai Yang Membentuk Cara Kami Berkhidmat",
    principlesIntro: "Prinsip ini menjadi asas kepada cara Papaipay membina kepercayaan, memberi panduan dan menyokong pelanggan dalam membuat keputusan kewangan yang lebih jelas.",
    coreValues: [
      ["Integriti", "Kami mengutamakan ketelusan dan kepercayaan dalam setiap urusan."],
      ["Profesionalisme", "Setiap nasihat dan panduan diberikan dengan penuh tanggungjawab dan etika."],
      ["Komitmen Jangka Panjang", "Kami fokus kepada hubungan yang berterusan dan sokongan yang konsisten untuk pelanggan."],
      ["Pembelajaran Berterusan", "Kami sentiasa menambah ilmu dan kemahiran untuk memberi nilai dan penyelesaian yang lebih baik."],
    ],
  },
  en: {
    heroTitle: "About Us",
    imageAlt: "About Papaipay",
    introEyebrow: "About Papaipay",
    introParagraphs: [
      "With more than 10 years of experience in financial consulting and a network of more than 80 financial advisory representatives, Papaipay has helped thousands of customers understand their financial situation and plan financial steps that better suit their needs.",
      "We believe every financial situation is different. That is why our approach begins by understanding each customer’s circumstances thoroughly before any recommendation is made. Our focus is not only on short-term solutions, but on helping customers make clearer, safer and more suitable decisions for the future.",
      "Through experience built with more than 16,000 satisfied customers and assets under advice reaching hundreds of millions of ringgit, Papaipay remains committed to being a trusted consulting partner in helping customers achieve their financial goals.",
      "Today, Papaipay continues to grow with the same goal: helping more individuals and families make better financial decisions with transparency, professionalism and a results-oriented mindset.",
    ],
    visionTitle: "OUR VISION",
    visionQuote: "“To help individuals and families manage financial commitments more systematically, understand suitable asset opportunities, and build a more stable long-term financial position.”",
    missionTitle: "OUR MISSION",
    missionItems: [
      ["target", "Act for Change", "Helping customers restructure their financial commitments and plan more organised steps for the future."],
      ["users", "Customer Focus", "Listening to customer needs, understanding their situation, and providing suitable guidance based on available information and options."],
      ["spark", "Driven by Impact", "Creating value through financial education, asset planning and continuous support so customers can make decisions with greater confidence."],
    ],
    principlesTitle: "OUR PRINCIPLES",
    principlesHeading: "Values That Shape How We Serve",
    principlesIntro: "These principles form the foundation of how Papaipay builds trust, provides guidance and supports customers in making clearer financial decisions.",
    coreValues: [
      ["Integrity", "We prioritise transparency and trust in every engagement."],
      ["Professionalism", "Every piece of advice and guidance is provided responsibly and ethically."],
      ["Long-Term Commitment", "We focus on lasting relationships and consistent support for customers."],
      ["Continuous Learning", "We continue building our knowledge and skills to deliver better value and solutions."],
    ],
  },
};
