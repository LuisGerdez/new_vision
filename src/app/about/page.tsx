import type { Metadata } from "next";

import { AboutPage } from "@/features/about/components/about-page";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet New Vision Auto Glass — local, professional, mobile auto glass technicians serving Katy and Houston.",
};

export default function Page() {
  return <AboutPage />;
}
