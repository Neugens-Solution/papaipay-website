import type { IdentityStatus, ProfileType } from "../../packages/validators";

export type BusinessProfile = {
  id: string;
  workspace_id: string;
  profile_type: ProfileType;
  display_name: string;
  legal_name: string | null;
  business_registration_no: string | null;
  description: string | null;
  phone: string | null;
  email: string | null;
  website: string | null;
  address_line_1: string | null;
  address_line_2: string | null;
  city: string | null;
  state: string | null;
  postcode: string | null;
  country: string;
  normalized_display_name: string;
  duplicate_business_name: boolean;
  status: string;
  created_at: string;
  payment?: BusinessPaymentProfile | null;
  document_settings?: BusinessDocumentSettings | null;
};
export type BusinessPaymentProfile = { bank_name: string | null; account_holder_name: string; account_number: string | null; payment_note: string | null; identity_status: IdentityStatus; identity_checked_at: string | null };
export type BusinessDocumentSettings = { quotation_prefix: string; invoice_prefix: string; receipt_prefix: string; number_padding: number; show_logo: boolean; show_address: boolean; show_phone: boolean; show_email: boolean; show_website: boolean; show_payment_qr: boolean; show_bank_details: boolean; default_notes: string | null; default_terms: string | null };
