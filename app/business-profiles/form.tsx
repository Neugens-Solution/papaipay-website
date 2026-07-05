import type { BusinessProfile } from "../../lib/invoicelink/types";

export function BusinessProfileForm({ action, profile }: { action: (formData: FormData) => void | Promise<void>; profile?: BusinessProfile }) {
  const payment = profile?.payment;
  const settings = profile?.document_settings;
  return (
    <form action={action} className="mx-auto grid max-w-3xl gap-5 rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
      <label>Profile type<select name="profile_type" defaultValue={profile?.profile_type ?? "individual"} className="mt-1 w-full rounded-xl border p-3"><option value="individual">Individual / Freelancer</option><option value="business">Business / Company</option></select></label>
      <label>Display / trade name<input required name="display_name" defaultValue={profile?.display_name} className="mt-1 w-full rounded-xl border p-3" /></label>
      <div className="grid gap-4 md:grid-cols-2"><label>Legal name<input name="legal_name" defaultValue={profile?.legal_name ?? ""} className="mt-1 w-full rounded-xl border p-3" /></label><label>Business registration no<input name="business_registration_no" defaultValue={profile?.business_registration_no ?? ""} className="mt-1 w-full rounded-xl border p-3" /></label></div>
      <div className="grid gap-4 md:grid-cols-3"><label>Phone<input name="phone" defaultValue={profile?.phone ?? ""} className="mt-1 w-full rounded-xl border p-3" /></label><label>Email<input name="email" type="email" defaultValue={profile?.email ?? ""} className="mt-1 w-full rounded-xl border p-3" /></label><label>Website<input name="website" type="url" defaultValue={profile?.website ?? ""} className="mt-1 w-full rounded-xl border p-3" /></label></div>
      <label>Description<textarea name="description" defaultValue={profile?.description ?? ""} className="mt-1 w-full rounded-xl border p-3" /></label>
      <div className="grid gap-4 md:grid-cols-2"><label>Address line 1<input name="address_line_1" defaultValue={profile?.address_line_1 ?? ""} className="mt-1 w-full rounded-xl border p-3" /></label><label>Address line 2<input name="address_line_2" defaultValue={profile?.address_line_2 ?? ""} className="mt-1 w-full rounded-xl border p-3" /></label></div>
      <div className="grid gap-4 md:grid-cols-3"><label>City<input name="city" defaultValue={profile?.city ?? ""} className="mt-1 w-full rounded-xl border p-3" /></label><label>State<input name="state" defaultValue={profile?.state ?? ""} className="mt-1 w-full rounded-xl border p-3" /></label><label>Postcode<input name="postcode" defaultValue={profile?.postcode ?? ""} className="mt-1 w-full rounded-xl border p-3" /></label></div>
      <h2 className="text-2xl font-semibold">Payment identity</h2>
      <div className="grid gap-4 md:grid-cols-2"><label>Bank name<input name="bank_name" defaultValue={payment?.bank_name ?? ""} className="mt-1 w-full rounded-xl border p-3" /></label><label>Account holder name<input required name="account_holder_name" defaultValue={payment?.account_holder_name ?? ""} className="mt-1 w-full rounded-xl border p-3" /></label></div>
      <label>Account number<input name="account_number" defaultValue={payment?.account_number ?? ""} className="mt-1 w-full rounded-xl border p-3" /></label>
      <label>Payment note<textarea name="payment_note" defaultValue={payment?.payment_note ?? ""} className="mt-1 w-full rounded-xl border p-3" /></label>
      <h2 className="text-2xl font-semibold">Basic document prefixes</h2>
      <div className="grid gap-4 md:grid-cols-3"><label>Quotation prefix<input name="quotation_prefix" defaultValue={settings?.quotation_prefix ?? "QT"} className="mt-1 w-full rounded-xl border p-3" /></label><label>Invoice prefix<input name="invoice_prefix" defaultValue={settings?.invoice_prefix ?? "INV"} className="mt-1 w-full rounded-xl border p-3" /></label><label>Receipt prefix<input name="receipt_prefix" defaultValue={settings?.receipt_prefix ?? "RCP"} className="mt-1 w-full rounded-xl border p-3" /></label></div>
      <p className="rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-900">Logo and payment QR uploads are metadata-ready in the schema but intentionally left as form placeholders for Sprint 2.</p>
      <button className="rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white">Save business profile</button>
    </form>
  );
}
