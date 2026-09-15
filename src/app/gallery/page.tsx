import type { Metadata } from "next";

import { GalleryPage } from "@/features/gallery/components/gallery-page";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See recent windshield replacements and auto glass work from New Vision Auto Glass.",
};

export default function Page() {
  return <GalleryPage />;
}
