import { createBusinessProfileAction } from "../../../lib/invoicelink/actions";
import { BusinessProfileForm } from "../form";
export default function NewBusinessProfilePage() { return <main className="min-h-screen p-6"><h1 className="mx-auto mb-6 max-w-3xl text-4xl font-bold">Create business profile</h1><BusinessProfileForm action={createBusinessProfileAction} /></main>; }
