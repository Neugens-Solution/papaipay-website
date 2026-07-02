import type { Metadata } from "next";

import { createPageMetadata } from "../../lib/seo";
import PageClient from "./page-client";

export const metadata: Metadata = createPageMetadata("apply", "ms");

export default function Page() {
  return <PageClient />;
}
