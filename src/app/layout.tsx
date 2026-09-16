import type { Metadata, Viewport } from "next";
import { Great_Vibes, Inter, Oswald } from "next/font/google";

import { SiteLayout } from "@/components/layouts/site-layout";
import { LocalBusinessJsonLd } from "@/components/seo/json-ld";
import { defaultTitle, shareImage } from "@/config/seo";
import { site, siteUrl } from "@/config/site";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a2342",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [...site.keywords],
  authors: [{ name: site.legalName, url: siteUrl }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "automotive",
  classification: "Auto Glass Repair",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: site.name,
    title: defaultTitle,
    description: site.description,
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: site.description,
    images: [shareImage],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    capable: true,
    title: site.name,
    statusBarStyle: "black-translucent",
  },
  pinterest: {
    richPin: true,
  },
  other: {
    "geo.region": site.region,
    "geo.placename": "Katy, Texas",
    "og:locality": "Katy",
    "og:region": "TX",
    "og:country-name": "United States",
    "og:phone_number": site.phoneDisplay,
    googlebot:
      "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <LocalBusinessJsonLd />
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
