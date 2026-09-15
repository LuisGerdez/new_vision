import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  BadgeIcon,
  ChevronIcon,
  PhoneIcon,
  PinIcon,
} from "@/components/ui/icons";
import { PageHero } from "@/components/ui/page-hero";
import { site } from "@/config/site";

export function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Call or text for a free quote. No forms, no waiting — we pick up the phone."
      />
      <section className="bg-white py-16">
        <Container className="max-w-4xl">
          <div className="rounded-xl bg-navy px-6 py-10 text-center text-white sm:px-12">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
              Call or Text
            </p>
            <a
              href={site.phoneHref}
              className="mt-3 block font-display text-4xl font-semibold tracking-wide sm:text-5xl"
            >
              {site.phoneDisplay}
            </a>
            <p className="mt-3 text-sm text-white/75">
              Mobile auto glass in {site.location}. Same-day appointments when
              available.
            </p>
            <Button href={site.phoneHref} className="mt-6">
              <PhoneIcon />
              Call Now
              <ChevronIcon />
            </Button>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            <li className="rounded-lg bg-[#f7f4ef] p-6 text-center ring-1 ring-navy/5">
              <span className="mx-auto mb-3 inline-flex size-12 items-center justify-center rounded-full bg-navy text-white">
                <PhoneIcon className="size-5" />
              </span>
              <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-navy">
                Phone
              </h2>
              <a href={site.phoneHref} className="mt-2 block text-sm text-muted">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="rounded-lg bg-[#f7f4ef] p-6 text-center ring-1 ring-navy/5">
              <span className="mx-auto mb-3 inline-flex size-12 items-center justify-center rounded-full bg-navy text-white">
                <PinIcon className="size-5" />
              </span>
              <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-navy">
                Service Area
              </h2>
              <p className="mt-2 text-sm text-muted">{site.location}</p>
            </li>
            <li className="rounded-lg bg-[#f7f4ef] p-6 text-center ring-1 ring-navy/5">
              <span className="mx-auto mb-3 inline-flex size-12 items-center justify-center rounded-full bg-navy text-white">
                <BadgeIcon className="size-5" />
              </span>
              <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-navy">
                Hours
              </h2>
              <ul className="mt-2 space-y-1 text-sm text-muted">
                {site.hours.map((item) => (
                  <li key={item.label}>
                    {item.label}: {item.value}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
}
