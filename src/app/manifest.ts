import type { MetadataRoute } from "next";

import { site } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.legalName,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    scope: "/",
    id: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#061a33",
    theme_color: "#0a2342",
    lang: "en",
    dir: "ltr",
    categories: ["business"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
      {
        src: "/icon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/images/new-vision-logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
