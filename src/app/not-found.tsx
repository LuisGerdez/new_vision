import Link from "next/link";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-brand-red">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold uppercase tracking-wide text-navy">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-sm text-muted">
        That page does not exist. Head home or call us for a quote.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button href="/">Back Home</Button>
        <Button href={site.phoneHref} variant="outline">
          Call {site.phoneDisplay}
        </Button>
      </div>
      <Link
        href="/"
        className="mt-6 text-sm text-muted underline-offset-4 hover:underline"
      >
        Return to the homepage
      </Link>
    </div>
  );
}
