import Link from "next/link";

import { Container } from "@/components/ui/container";
import { FacebookIcon, InstagramIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/logo";
import { navItems, site } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      <div
        className="absolute inset-0 bg-[url('/images/footer-car.png')] bg-cover bg-center opacity-20"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-navy-deep/90" />
      <Container className="relative flex flex-col gap-8 py-10 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="shrink-0" aria-label="New Vision Auto Glass LLC">
          <Logo className="h-20 sm:h-24" />
        </Link>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 lg:justify-start" aria-label="Footer">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-white/85 transition-colors hover:text-brand-red"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {site.social.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-brand-red hover:text-brand-red"
            >
              {item.icon === "facebook" ? <FacebookIcon /> : <InstagramIcon />}
            </a>
          ))}
        </div>
      </Container>
      <Container className="relative flex flex-col items-center justify-between gap-3 border-t border-white/10 py-5 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-white/60">
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </p>
        <p className="font-script text-2xl text-white sm:text-3xl">
          {site.tagline}
        </p>
      </Container>
    </footer>
  );
}
