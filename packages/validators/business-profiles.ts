export type ProfileType = "individual" | "business";
export type IdentityStatus = "pending" | "valid" | "invalid";

export type BusinessProfileInput = {
  profile_type: ProfileType;
  display_name: string;
  legal_name?: string;
  business_registration_no?: string;
  phone?: string;
  email?: string;
  website?: string;
  address_line_1?: string;
  address_line_2?: string;
  city?: string;
  state?: string;
  postcode?: string;
  description?: string;
  bank_name?: string;
  account_holder_name: string;
  account_number?: string;
  payment_note?: string;
  quotation_prefix?: string;
  invoice_prefix?: string;
  receipt_prefix?: string;
};

export function collapseName(value: string | null | undefined) {
  return (value ?? "").trim().replace(/\s+/g, " ");
}

export function normalizeBusinessName(name: string) {
  return collapseName(name)
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/[’'`]/g, "")
    .replace(/[^a-z0-9\s&-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeIdentityName(name: string | null | undefined) {
  return collapseName(name).toLowerCase();
}

export function validatePaymentIdentity(
  profileType: ProfileType,
  displayName: string,
  legalName: string | null | undefined,
  accountHolderName: string | null | undefined,
): IdentityStatus {
  const accountHolder = normalizeIdentityName(accountHolderName);
  if (!accountHolder) return "pending";

  if (profileType === "individual") {
    const legal = normalizeIdentityName(legalName);
    if (!legal) return "pending";
    return legal === accountHolder ? "valid" : "invalid";
  }

  const display = normalizeIdentityName(displayName);
  if (!display) return "pending";
  return display === accountHolder ? "valid" : "invalid";
}

export type ValidationResult<T> = { success: true; data: T } | { success: false; errors: Record<string, string> };

function optionalUrl(value: string | undefined) {
  if (!value) return true;
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export function validateBusinessProfileInput(input: Record<string, FormDataEntryValue | string | undefined>): ValidationResult<BusinessProfileInput> {
  const value = (key: string) => collapseName(String(input[key] ?? ""));
  const data: BusinessProfileInput = {
    profile_type: value("profile_type") === "individual" ? "individual" : "business",
    display_name: value("display_name"),
    legal_name: value("legal_name") || undefined,
    business_registration_no: value("business_registration_no") || undefined,
    phone: value("phone") || undefined,
    email: value("email") || undefined,
    website: value("website") || undefined,
    address_line_1: value("address_line_1") || undefined,
    address_line_2: value("address_line_2") || undefined,
    city: value("city") || undefined,
    state: value("state") || undefined,
    postcode: value("postcode") || undefined,
    description: value("description") || undefined,
    bank_name: value("bank_name") || undefined,
    account_holder_name: value("account_holder_name"),
    account_number: value("account_number") || undefined,
    payment_note: value("payment_note") || undefined,
    quotation_prefix: value("quotation_prefix") || undefined,
    invoice_prefix: value("invoice_prefix") || undefined,
    receipt_prefix: value("receipt_prefix") || undefined,
  };

  const errors: Record<string, string> = {};
  if (!data.display_name) errors.display_name = "Display name is required.";
  if (data.profile_type === "individual" && !data.legal_name) errors.legal_name = "Legal name is required for individual profiles.";
  if (!data.account_holder_name) errors.account_holder_name = "Account holder name is required.";
  if (data.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) errors.email = "Enter a valid email address.";
  if (data.website && !optionalUrl(data.website)) errors.website = "Enter a valid http or https URL.";
  return Object.keys(errors).length ? { success: false, errors } : { success: true, data };
}
