import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { paths } from "@/config/paths";
import { services } from "@/config/site";

export function ServicesSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Auto Glass Solutions"
          description="We handle all types of auto glass, with quality workmanship and top-tier materials."
        />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={paths.services}
                className="group flex h-full flex-col overflow-hidden rounded-sm bg-white shadow-[0_8px_30px_rgb(10,35,66,0.12)] ring-1 ring-navy/5 transition hover:-translate-y-1 hover:shadow-[0_12px_36px_rgb(10,35,66,0.16)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="flex flex-1 flex-col items-center px-4 py-5 text-center">
                  <h3 className="font-display text-lg font-semibold uppercase leading-tight tracking-wide text-navy">
                    {service.shortTitle}
                  </h3>
                  {service.comingSoon ? (
                    <p className="mt-1 font-display text-xs uppercase tracking-widest text-brand-red">
                      (Coming Soon)
                    </p>
                  ) : null}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
