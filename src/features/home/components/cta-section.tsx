import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  BadgeIcon,
  ChevronIcon,
  EnvelopeIcon,
  PhoneIcon,
  PinIcon,
} from "@/components/ui/icons";
import { site } from "@/config/site";

export function CtaSection() {
  return (
    <section className="border-t border-navy/5 bg-white py-10">
      <Container className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div className="flex items-start gap-4">
          <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-navy text-white">
            <EnvelopeIcon className="size-5" />
          </span>
          <div>
            <h2 className="font-display text-xl font-semibold uppercase tracking-wide text-navy">
              Ready to get started?
            </h2>
            <p className="mt-1 text-sm text-muted">
              Get a free quote today. It&apos;s fast, easy and no obligation.
            </p>
            <Button href={site.phoneHref} size="sm" className="mt-4">
              Get a Quote
              <ChevronIcon />
            </Button>
          </div>
        </div>
        <a href={site.phoneHref} className="flex items-center gap-3">
          <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-navy text-white">
            <PhoneIcon className="size-5" />
          </span>
          <span>
            <span className="block font-display text-lg font-semibold text-navy">
              {site.phoneDisplay}
            </span>
            <span className="text-xs uppercase tracking-widest text-muted">
              Call or Text
            </span>
          </span>
        </a>
        <div className="flex items-center gap-3">
          <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-navy text-white">
            <PinIcon className="size-5" />
          </span>
          <span>
            <span className="block font-display text-lg font-semibold text-navy">
              {site.location}
            </span>
            <span className="text-xs uppercase tracking-widest text-muted">
              Service Area
            </span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-navy text-white">
            <BadgeIcon className="size-5" />
          </span>
          <span>
            <span className="block font-display text-lg font-semibold text-navy">
              Licensed & Insured
            </span>
            <span className="text-xs uppercase tracking-widest text-muted">
              Your Peace of Mind
            </span>
          </span>
        </div>
      </Container>
    </section>
  );
}
