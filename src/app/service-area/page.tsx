import type { Metadata } from "next";

import { ServiceAreaPage } from "@/features/service-area/components/service-area-page";

export const metadata: Metadata = {
  title: "Service Area",
  description:
    "Mobile auto glass service in Katy, Houston, Sugar Land, Cypress, Fulshear, and surrounding communities.",
};

export default function Page() {
  return <ServiceAreaPage />;
}
