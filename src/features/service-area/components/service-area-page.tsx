import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ChevronIcon, PhoneIcon, PinIcon } from "@/components/ui/icons";
import { PageHero } from "@/components/ui/page-hero";
import { serviceCities, site } from "@/config/site";

export function ServiceAreaPage() {
  return (
    <>
      <PageHero
        title="Service Area"
        subtitle="Mobile auto glass across Katy, Houston, and the surrounding west-side communities."
      />
      <section className="relative overflow-hidden">
        <Image
          src="/images/area-houston.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy-deep/70" />
        <Container className="relative py-16 text-white">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-white/80">
            We Come To You
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold uppercase tracking-wide">
            {site.locationShort}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
            If you are in our service area, we will come to your home, office, or
            job site. No shop drop-off required — just a safe place to park and
            we handle the rest.
          </p>
        </Container>
      </section>
      <section className="bg-white py-16">
        <Container>
          <h2 className="text-center font-display text-3xl font-semibold uppercase tracking-wide text-navy">
            Cities We Serve
          </h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCities.map((city) => (
              <li
                key={city}
                className="flex items-center gap-3 rounded-md bg-[#f7f4ef] px-4 py-3 text-navy ring-1 ring-navy/5"
              >
                <PinIcon className="size-5 text-brand-red" />
                <span className="font-display text-sm font-semibold uppercase tracking-widest">
                  {city}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-muted">
            Don&apos;t see your city? Call us — we often travel just outside this
            list.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href={site.phoneHref}>
              <PhoneIcon />
              {site.phoneDisplay}
              <ChevronIcon />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
