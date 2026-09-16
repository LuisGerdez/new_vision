import type { Metadata } from "next";

import { pageMetadata } from "@/config/seo";
import { paths } from "@/config/paths";
import { site } from "@/config/site";
import { ContactPage } from "@/features/contact/components/contact-page";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: `Call or text New Vision Auto Glass at ${site.phoneDisplay} for a free mobile auto glass quote in Katy and Houston.`,
  path: paths.contact,
});

export default function Page() {
  return <ContactPage />;
}
