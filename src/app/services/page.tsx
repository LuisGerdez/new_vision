import type { Metadata } from "next";

import { ServicesPage } from "@/features/services/components/services-page";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Windshield replacement, side and rear glass, and window regulator repair. Mobile auto glass in Katy and Houston.",
};

export default function Page() {
  return <ServicesPage />;
}
