import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ChevronIcon, PhoneIcon, ValueIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/logo";
import { heroBadges, site } from "@/config/site";
import { cn } from "@/utils/cn";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <Image
        src="/images/hero-skyline.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <Image
        src="/images/hero-flag.png"
        alt=""
        fill
        priority
        className="object-cover object-left opacity-70 mix-blend-overlay"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/92 via-navy-deep/70 to-navy/35" />
      <Container className="relative grid min-h-[560px] items-center gap-8 py-10 lg:min-h-[620px] lg:grid-cols-[1.05fr_0.95fr] lg:py-6">
        <div className="max-w-xl">
          <p className="mb-4 flex items-center gap-2 font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-white/90">
            <span className="inline-flex h-3.5 w-6 overflow-hidden rounded-[2px] border border-white/40">
              <span className="w-2.5 bg-[#3C3B6E]" />
              <span className="flex-1 bg-brand-red" />
            </span>
            Mobile Auto Glass Services
          </p>
          <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-wide sm:text-6xl lg:text-[4.35rem]">
            Clear Vision.
            <span className="mt-1 block text-brand-red">Safer Roads.</span>
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white sm:text-base">
            {site.description}
          </p>
          <ul className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {heroBadges.map((badge, badgeIndex) => (
              <li key={badge.label} className={cn("flex items-center gap-2.5", badgeIndex === 1 ? 'border-l border-r border-brand-white pl-2 pr-2' : '')}>
                <span className="inline-flex size-9 items-center justify-center">
                  <ValueIcon name={badge.icon} className="size-12" />
                </span>
                <span className="max-w-24 font-display text-[11px] font-semibold uppercase leading-tight tracking-wide">
                  {badge.label}
                </span>
              </li>
            ))}
          </ul>
          <Button href={site.phoneHref} className="mt-8">
            <PhoneIcon />
            {site.phoneDisplay}
            <ChevronIcon />
          </Button>
        </div>
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <Image
            src="/images/truck-img.png"
            alt="New Vision Auto Glass service truck"
            width={600}
            height={400}
            priority
            className="h-auto w-full object-contain drop-shadow-2xl shadow-lg shadow-orange-500/60"
          />
          <p className="pointer-events-none absolute right-2 bottom-6 max-w-[10rem] text-right font-script text-3xl leading-tight text-white drop-shadow-md sm:right-6 sm:text-4xl">
            {site.missionScript}
          </p>
        </div>
      </Container>
    </section>
  );
}
