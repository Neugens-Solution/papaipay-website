import "server-only";

import { promises as fs } from "node:fs";
import path from "node:path";
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import type { BusinessProfile } from "./types";

const DATA_PATH = path.join(process.cwd(), ".data", "business-profiles.json");
const DEMO_WORKSPACE_ID = "00000000-0000-4000-8000-000000000001";

async function readProfiles(): Promise<BusinessProfile[]> {
  try {
    return JSON.parse(await fs.readFile(DATA_PATH, "utf8")) as BusinessProfile[];
  } catch {
    return [];
  }
}

async function writeProfiles(profiles: BusinessProfile[]) {
  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  await fs.writeFile(DATA_PATH, JSON.stringify(profiles, null, 2));
}

export async function requireActiveWorkspace() {
  const cookieStore = await cookies();
  const workspaceId = cookieStore.get("active_workspace_id")?.value ?? DEMO_WORKSPACE_ID;
  const userId = cookieStore.get("user_id")?.value ?? "00000000-0000-4000-8000-000000000002";
  // TODO: Replace fallback cookies with Sprint 1 Supabase auth/workspace helper when available in this repo snapshot.
  if (!workspaceId || !userId) redirect("/login");
  return { workspaceId, userId };
}

export async function listBusinessProfiles() {
  const { workspaceId } = await requireActiveWorkspace();
  const profiles = await readProfiles();
  return profiles.filter((profile) => profile.workspace_id === workspaceId && !profile.status.includes("deleted"));
}

export async function getBusinessProfile(id: string) {
  const { workspaceId } = await requireActiveWorkspace();
  const profile = (await readProfiles()).find((item) => item.id === id && item.workspace_id === workspaceId);
  if (!profile) notFound();
  return profile;
}

export async function saveBusinessProfile(profile: BusinessProfile) {
  const profiles = await readProfiles();
  const index = profiles.findIndex((item) => item.id === profile.id);
  if (index >= 0) profiles[index] = profile;
  else profiles.push(profile);
  await writeProfiles(profiles);
  return profile;
}

export async function hasDuplicateBusinessName(normalizedName: string, currentId?: string) {
  const profiles = await readProfiles();
  return profiles.some((item) => item.normalized_display_name === normalizedName && item.id !== currentId && item.status === "active");
}
