import type { MetadataRoute } from "next";

import { galleryImages } from "@/config/site";
import { absoluteUrl, sitemapEntries } from "@/config/seo";
import { paths } from "@/config/paths";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapEntries.map((entry) => ({
    url: absoluteUrl(entry.path),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
    images:
      entry.path === paths.gallery
        ? galleryImages.map((image) => absoluteUrl(image.src))
        : entry.path === paths.home
          ? [absoluteUrl("/images/hero-truck.png")]
          : undefined,
  }));
}
