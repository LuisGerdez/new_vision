import type { Metadata } from "next";

import { paths } from "@/config/paths";
import { site, siteUrl } from "@/config/site";

export const defaultTitle = `${site.name} | Mobile Auto Glass in ${site.location}`;

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  index?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  index = true,
}: PageMetadataInput): Metadata {
  const isHome = path === paths.home;
  const fullTitle = isHome ? defaultTitle : `${title} | ${site.name}`;

  return {
    title: isHome ? { absolute: defaultTitle } : title,
    description,
    alternates: {
      canonical: path,
      languages: {
        "en-US": path,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      type: "website",
      locale: site.locale,
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: index
      ? {
          index: true,
          follow: true,
        }
      : {
          index: false,
          follow: true,
        },
  };
}

export const sitemapEntries = [
  { path: paths.home, changeFrequency: "weekly" as const, priority: 1 },
  { path: paths.services, changeFrequency: "monthly" as const, priority: 0.9 },
  { path: paths.about, changeFrequency: "monthly" as const, priority: 0.8 },
  {
    path: paths.serviceArea,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  { path: paths.gallery, changeFrequency: "monthly" as const, priority: 0.7 },
  { path: paths.contact, changeFrequency: "monthly" as const, priority: 0.9 },
];

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}
