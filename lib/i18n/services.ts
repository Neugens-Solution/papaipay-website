import type { Locale } from "./locales";

export const serviceRequirements: Record<Locale, string[]> = {
  ms: [
    "Warganegara Malaysia berumur 21 hingga 60 tahun.",
    "Mempunyai pendapatan tetap setiap bulan.",
    "Mempunyai rekod pinjaman bank atau kad kredit melebihi 6 bulan.",
    "Tidak mempunyai tunggakan bayaran bank melebihi 2 bulan berturut-turut.",
    "Terbuka kepada sektor Kerajaan, GLC dan Swasta.",
    "Menyediakan dokumen sokongan seperti salinan kad pengenalan, slip gaji terkini dan penyata bank 3 hingga 6 bulan.",
  ],
  en: [
    "Malaysian citizen aged between 21 and 60 years old.",
    "Has a fixed monthly income.",
    "Has an active bank loan or credit card record for more than 6 months.",
    "Does not have bank payment arrears exceeding 2 consecutive months.",
    "Open to Government, GLC and Private sector employees.",
    "Provides supporting documents such as an identity card copy, latest payslips and 3 to 6 months of bank statements.",
  ],
};
