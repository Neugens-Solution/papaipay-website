"use server";

import { randomUUID } from "node:crypto";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { hasDuplicateBusinessName, requireActiveWorkspace, saveBusinessProfile, getBusinessProfile } from "./business-profile-store";
import type { BusinessProfile } from "./types";
import { normalizeBusinessName, validateBusinessProfileInput, validatePaymentIdentity } from "../../packages/validators";

function formToRecord(formData: FormData) {
  return Object.fromEntries(formData.entries()) as Record<string, FormDataEntryValue>;
}

function prefix(value: string | undefined, fallback: string) {
  return (value || fallback).trim().toUpperCase().slice(0, 8) || fallback;
}

export async function createBusinessProfileAction(formData: FormData) {
  const parsed = validateBusinessProfileInput(formToRecord(formData));
  if (!parsed.success) throw new Error(Object.values(parsed.errors).join(" "));

  const { workspaceId } = await requireActiveWorkspace();
  const data = parsed.data;
  const normalized = normalizeBusinessName(data.display_name);
  const now = new Date().toISOString();
  const duplicate = await hasDuplicateBusinessName(normalized);
  const identityStatus = validatePaymentIdentity(data.profile_type, data.display_name, data.legal_name, data.account_holder_name);

  const profile: BusinessProfile = {
    id: randomUUID(), workspace_id: workspaceId, profile_type: data.profile_type, display_name: data.display_name,
    legal_name: data.legal_name ?? null, business_registration_no: data.business_registration_no ?? null,
    description: data.description ?? null, phone: data.phone ?? null, email: data.email ?? null, website: data.website ?? null,
    address_line_1: data.address_line_1 ?? null, address_line_2: data.address_line_2 ?? null, city: data.city ?? null,
    state: data.state ?? null, postcode: data.postcode ?? null, country: "Malaysia", normalized_display_name: normalized,
    duplicate_business_name: duplicate, status: "active", created_at: now,
    payment: { bank_name: data.bank_name ?? null, account_holder_name: data.account_holder_name, account_number: data.account_number ?? null, payment_note: data.payment_note ?? null, identity_status: identityStatus, identity_checked_at: now },
    document_settings: { quotation_prefix: prefix(data.quotation_prefix, "QT"), invoice_prefix: prefix(data.invoice_prefix, "INV"), receipt_prefix: prefix(data.receipt_prefix, "RCP"), number_padding: 4, show_logo: true, show_address: true, show_phone: true, show_email: true, show_website: true, show_payment_qr: true, show_bank_details: true, default_notes: null, default_terms: null },
  };
  // TODO: Write activity log when an activity_log table is introduced.
  await saveBusinessProfile(profile);
  revalidatePath("/business-profiles");
  redirect(`/business-profiles/${profile.id}`);
}

export async function updateBusinessProfileAction(id: string, formData: FormData) {
  const parsed = validateBusinessProfileInput(formToRecord(formData));
  if (!parsed.success) throw new Error(Object.values(parsed.errors).join(" "));
  const existing = await getBusinessProfile(id);
  const data = parsed.data;
  const normalized = normalizeBusinessName(data.display_name);
  const now = new Date().toISOString();
  const duplicate = await hasDuplicateBusinessName(normalized, id);
  const identityStatus = validatePaymentIdentity(data.profile_type, data.display_name, data.legal_name, data.account_holder_name);
  await saveBusinessProfile({ ...existing, profile_type: data.profile_type, display_name: data.display_name, legal_name: data.legal_name ?? null, business_registration_no: data.business_registration_no ?? null, description: data.description ?? null, phone: data.phone ?? null, email: data.email ?? null, website: data.website ?? null, address_line_1: data.address_line_1 ?? null, address_line_2: data.address_line_2 ?? null, city: data.city ?? null, state: data.state ?? null, postcode: data.postcode ?? null, normalized_display_name: normalized, duplicate_business_name: duplicate, payment: { bank_name: data.bank_name ?? null, account_holder_name: data.account_holder_name, account_number: data.account_number ?? null, payment_note: data.payment_note ?? null, identity_status: identityStatus, identity_checked_at: now }, document_settings: { ...(existing.document_settings ?? { number_padding: 4, show_logo: true, show_address: true, show_phone: true, show_email: true, show_website: true, show_payment_qr: true, show_bank_details: true, default_notes: null, default_terms: null }), quotation_prefix: prefix(data.quotation_prefix, "QT"), invoice_prefix: prefix(data.invoice_prefix, "INV"), receipt_prefix: prefix(data.receipt_prefix, "RCP") } });
  // TODO: Write activity log when an activity_log table is introduced.
  revalidatePath("/business-profiles");
  redirect(`/business-profiles/${id}`);
}
