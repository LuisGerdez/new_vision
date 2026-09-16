import type { Metadata } from "next";

import { pageMetadata } from "@/config/seo";
import { paths } from "@/config/paths";
import { ServicesPage } from "@/features/services/components/services-page";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Windshield replacement, side and rear glass, and window regulator repair. Mobile auto glass in Katy and Houston.",
  path: paths.services,
});

export default function Page() {
  return <ServicesPage />;
}
