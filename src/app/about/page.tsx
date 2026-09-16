import type { Metadata } from "next";

import { pageMetadata } from "@/config/seo";
import { paths } from "@/config/paths";
import { AboutPage } from "@/features/about/components/about-page";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Meet New Vision Auto Glass — local, professional, mobile auto glass technicians serving Katy and Houston.",
  path: paths.about,
});

export default function Page() {
  return <AboutPage />;
}
