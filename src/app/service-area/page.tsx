import type { Metadata } from "next";

import { pageMetadata } from "@/config/seo";
import { paths } from "@/config/paths";
import { ServiceAreaPage } from "@/features/service-area/components/service-area-page";

export const metadata: Metadata = pageMetadata({
  title: "Service Area",
  description:
    "Mobile auto glass service in Katy, Houston, Sugar Land, Cypress, Fulshear, and surrounding communities.",
  path: paths.serviceArea,
});

export default function Page() {
  return <ServiceAreaPage />;
}
