import type { Metadata } from "next";

import { ContactPage } from "@/features/contact/components/contact-page";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call or text New Vision Auto Glass at 281-712-7165 for a free mobile auto glass quote in Katy and Houston.",
};

export default function Page() {
  return <ContactPage />;
}
