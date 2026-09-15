import type { Metadata } from "next";
import { Great_Vibes, Inter, Oswald } from "next/font/google";

import { SiteLayout } from "@/components/layouts/site-layout";
import { site } from "@/config/site";

import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Mobile Auto Glass in Katy & Houston`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
