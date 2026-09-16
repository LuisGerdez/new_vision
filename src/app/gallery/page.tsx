import type { Metadata } from "next";

import { pageMetadata } from "@/config/seo";
import { paths } from "@/config/paths";
import { GalleryPage } from "@/features/gallery/components/gallery-page";

export const metadata: Metadata = pageMetadata({
  title: "Gallery",
  description:
    "See recent windshield replacements and auto glass work from New Vision Auto Glass.",
  path: paths.gallery,
});

export default function Page() {
  return <GalleryPage />;
}
