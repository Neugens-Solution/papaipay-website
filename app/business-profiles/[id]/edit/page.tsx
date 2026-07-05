import { updateBusinessProfileAction } from "../../../../lib/invoicelink/actions";
import { getBusinessProfile } from "../../../../lib/invoicelink/business-profile-store";
import { BusinessProfileForm } from "../../form";
export default async function EditBusinessProfilePage({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; const profile = await getBusinessProfile(id); const action = updateBusinessProfileAction.bind(null, id); return <main className="min-h-screen p-6"><h1 className="mx-auto mb-6 max-w-3xl text-4xl font-bold">Edit business profile</h1><BusinessProfileForm action={action} profile={profile} /></main>; }
