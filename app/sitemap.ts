import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/mentions-legales`,
      // À mettre à jour à la main quand le contenu des mentions légales change
      lastModified: new Date("2026-10-12T09:08:56.033Z"),
      changeFrequency: "yearly",
      priority: 0.1,
    },
  ];
}
