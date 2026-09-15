import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ChevronIcon, PhoneIcon } from "@/components/ui/icons";
import { PageHero } from "@/components/ui/page-hero";
import { services, site } from "@/config/site";
import { cn } from "@/utils/cn";

export function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Mobile auto glass solutions for windshields, side and rear glass, and window regulators — we come to you."
      />
      <section className="bg-white py-16">
        <Container className="space-y-12">
          {services.map((service, index) => (
            <article
              key={service.slug}
              className={cn(
                "grid items-center gap-8 overflow-hidden rounded-lg bg-[#f7f4ef] ring-1 ring-navy/5 lg:grid-cols-2",
                index % 2 === 1 && "lg:[&>div:first-child]:order-2",
              )}
            >
              <div className="relative min-h-[240px] lg:min-h-[320px]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="px-6 py-8 sm:px-10">
                {service.comingSoon ? (
                  <p className="mb-2 font-display text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">
                    Coming Soon
                  </p>
                ) : null}
                <h2 className="font-display text-3xl font-semibold uppercase tracking-wide text-navy">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {service.description}
                </p>
                {!service.comingSoon ? (
                  <Button href={site.phoneHref} size="sm" className="mt-6">
                    <PhoneIcon />
                    Call for a Quote
                    <ChevronIcon />
                  </Button>
                ) : (
                  <p className="mt-6 text-sm font-medium text-navy">
                    Window tinting will be available soon. Call us for other auto
                    glass needs today.
                  </p>
                )}
              </div>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
