import type { Metadata } from "next";

import { pageMetadata } from "@/config/seo";
import { paths } from "@/config/paths";
import { HomePage } from "@/features/home/components/home-page";

export const metadata: Metadata = pageMetadata({
  title: "Mobile Auto Glass in Katy & Houston",
  description:
    "Professional mobile auto glass service in Katy & Houston. Windshield replacement, side and rear glass, and window regulators — we come to you.",
  path: paths.home,
});

export default function Page() {
  return <HomePage />;
}
