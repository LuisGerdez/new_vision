"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/logo";
import { navItems, site } from "@/config/site";
import { cn } from "@/utils/cn";

const COMPACT_AFTER = 56;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const compact = scrolled || open;

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => {
      if (!media.matches) {
        setScrolled(false);
        return;
      }
      setScrolled(window.scrollY > COMPACT_AFTER);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    media.addEventListener("change", update);
    return () => {
      window.removeEventListener("scroll", update);
      media.removeEventListener("change", update);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 overflow-visible text-white">
      <div
        className={cn(
          "h-24 bg-navy-deep/95 shadow-lg backdrop-blur md:transition-[height] md:duration-300",
          compact ? "md:h-[5.5rem] lg:h-24" : "md:h-24 lg:h-28",
        )}
      >
        <Container className="flex h-full items-center justify-between gap-4">
          <Link
            href="/"
            className={cn(
              "relative z-10 shrink-0 md:transition-transform md:duration-300 md:ease-out",
              compact ? "md:translate-y-0" : "md:translate-y-8 lg:translate-y-12",
            )}
            aria-label="New Vision Auto Glass LLC"
            onClick={() => setOpen(false)}
          >
            <Logo
              priority
              className={cn(
                "h-20 w-auto drop-shadow-xl md:transition-all md:duration-300 md:ease-out",
                compact
                  ? "md:h-20 lg:h-[5.5rem]"
                  : "md:h-48 lg:h-56",
              )}
            />
          </Link>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-display text-[13px] font-semibold uppercase tracking-[0.18em] transition-colors hover:text-brand-red",
                    active ? "text-brand-red" : "text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-3">
            <Button
              href={site.phoneHref}
              size="sm"
              className="hidden md:inline-flex"
            >
              <PhoneIcon />
              Call Now
            </Button>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-md text-white lg:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </Container>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-navy-deep lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-3 font-display text-sm uppercase tracking-widest",
                    active ? "bg-white/10 text-brand-red" : "text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button href={site.phoneHref} className="mt-2 w-full">
              <PhoneIcon />
              Call Now
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
