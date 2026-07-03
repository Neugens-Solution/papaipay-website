import type { MetadataRoute } from "next";

import { absoluteUrl, getSitemapRoutes } from "../lib/seo";

const priorities: Record<string, number> = {
  home: 1,
  services: 0.8,
  apply: 0.8,
  contact: 0.8,
  about: 0.7,
  team: 0.7,
  careers: 0.7,
  privacyPolicy: 0.5,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return getSitemapRoutes().map(({ pageKey, path }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: "monthly",
    priority: priorities[pageKey],
  }));
}
