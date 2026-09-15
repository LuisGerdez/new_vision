import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ChevronIcon, PhoneIcon } from "@/components/ui/icons";
import { PageHero } from "@/components/ui/page-hero";
import { galleryImages, site } from "@/config/site";

export function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="A look at the auto glass work we complete every week across Katy and Houston."
      />
      <section className="bg-white py-16">
        <Container>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <li
                key={image.src}
                className="relative aspect-[4/3] overflow-hidden rounded-md ring-1 ring-navy/10"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <p className="mb-4 text-sm text-muted">
              Need work like this on your vehicle? We come to you.
            </p>
            <Button href={site.phoneHref}>
              <PhoneIcon />
              Call {site.phoneDisplay}
              <ChevronIcon />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
