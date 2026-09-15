import Image from "next/image";
import Link from "next/link";

import { AmericanBadge } from "@/components/ui/american-badge";
import { CheckIcon } from "@/components/ui/icons";
import { aboutHighlights, site } from "@/config/site";
import { paths } from "@/config/paths";

export function AboutSection() {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="relative min-h-[360px] lg:min-h-[520px]">
        <Image
          src="/images/about-technician.png"
          alt="Technician installing a windshield with suction cups"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
        <p className="absolute bottom-8 left-8 max-w-xs font-script text-4xl leading-tight text-white drop-shadow-md sm:text-5xl">
          {site.aboutScript}
        </p>
      </div>
      <div className="flex flex-col justify-center bg-white px-6 py-12 sm:px-10 lg:px-16">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-brand-red">
          About New Vision Auto Glass
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold uppercase leading-tight tracking-wide text-navy sm:text-4xl">
          Local. Professional. Reliable.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          At New Vision Auto Glass, we&apos;re committed to delivering top-quality
          service, honest communication and a great customer experience. Whether
          it&apos;s a small chip or a full windshield replacement, we treat every
          job with the same level of care and professionalism.
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
        <div className="mt-8 flex items-center justify-between gap-4">
          <Link
            href={paths.about}
            className="font-display text-sm font-semibold uppercase tracking-widest text-brand-red hover:underline"
          >
            Learn more
          </Link>
          <AmericanBadge />
        </div>
      </div>
    </section>
  );
}
