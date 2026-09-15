import Image from "next/image";

import { AmericanBadge } from "@/components/ui/american-badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CheckIcon, ChevronIcon, PhoneIcon, ValueIcon } from "@/components/ui/icons";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutHighlights, site, values } from "@/config/site";

export function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Local technicians, honest pricing, and mobile service built around your schedule."
      />
      <section className="bg-white py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative min-h-[320px] overflow-hidden rounded-lg lg:min-h-[440px]">
            <Image
              src="/images/about-technician.png"
              alt="New Vision Auto Glass technician installing a windshield"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-brand-red">
              New Vision Auto Glass LLC
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold uppercase tracking-wide text-navy sm:text-4xl">
              Local. Professional. Reliable.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              New Vision Auto Glass is a mobile auto glass company serving Katy,
              Houston, and nearby communities. We started with a simple idea:
              quality glass work should come to you — at home, at work, or
              wherever the vehicle is — without cutting corners on materials or
              communication.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Every technician is trained to install windshields and auto glass
              the right way, including care for modern safety systems. We quote
              clearly, show up on time, and leave you with a clean, safe vehicle.
            </p>
            <ul className="mt-6 space-y-3">
              {aboutHighlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-navy">
                  <span className="inline-flex size-6 items-center justify-center rounded-full bg-brand-red text-white">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Button href={site.phoneHref}>
                <PhoneIcon />
                {site.phoneDisplay}
                <ChevronIcon />
              </Button>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-[#f7f4ef] py-16">
        <Container>
          <SectionHeading eyebrow="How We Work" title="What Sets Us Apart" />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <li
                key={value.title}
                className="rounded-lg bg-white p-6 text-center shadow-sm ring-1 ring-navy/5"
              >
                <span className="mx-auto mb-4 inline-flex size-14 items-center justify-center rounded-full bg-navy text-white">
                  <ValueIcon name={value.icon} className="size-6" />
                </span>
                <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-navy">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{value.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
