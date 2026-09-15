import Image from "next/image";
import Link from "next/link";

import { ChevronIcon, PinIcon } from "@/components/ui/icons";
import { paths } from "@/config/paths";
import { site, testimonials } from "@/config/site";

export function AreaTestimonialsSection() {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="relative min-h-[320px] overflow-hidden">
        <Image
          src="/images/area-houston.png"
          alt="Houston highway and skyline"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-navy-deep/55" />
        <div className="relative flex h-full min-h-[320px] flex-col justify-center px-8 py-12 text-white sm:px-12">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-white/80">
            Service Area
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold uppercase tracking-wide sm:text-5xl">
            {site.locationShort}
          </h2>
          <p className="mt-3 max-w-md text-sm text-white/85">
            We proudly serve Katy, Houston and surrounding area. If you&apos;re in
            our service area, we&apos;ll come to you!
          </p>
          <Link
            href={paths.serviceArea}
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-widest text-white hover:bg-brand-red-hover"
          >
            <PinIcon className="size-4" />
            View Service Area
            <ChevronIcon />
          </Link>
        </div>
      </div>
      <div className="bg-[#f7f4ef] px-6 py-10 sm:px-8">
        <p className="mb-6 flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.22em] text-navy">
          What Our Customers Say
          <span className="text-star">★★★★★</span>
        </p>
        <ul className="grid gap-4 sm:grid-cols-3">
          {testimonials.map((item) => (
            <li
              key={item.name}
              className="rounded-md bg-white p-4 shadow-sm ring-1 ring-navy/5"
            >
              <div className="mb-3 flex items-center gap-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="size-10 rounded-full object-cover"
                />
              </div>
              <p className="text-xs leading-relaxed text-muted">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-3 font-display text-xs font-semibold uppercase tracking-wide text-navy">
                — {item.name}
              </p>
              <p className="text-[11px] tracking-widest text-star">
                {"★".repeat(item.rating)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
