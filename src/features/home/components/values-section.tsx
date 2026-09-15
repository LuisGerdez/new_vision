import { Container } from "@/components/ui/container";
import { ValueIcon } from "@/components/ui/icons";
import { values } from "@/config/site";

export function ValuesSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-10 text-white">
      <div
        className="absolute inset-y-0 left-0 w-1/2 bg-[url('/images/hero-flag.png')] bg-cover bg-left opacity-20"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-navy to-navy" />
      <Container className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value) => (
          <div key={value.title} className="flex items-start gap-4">
            <span className="mt-0.5 inline-flex size-12 shrink-0 items-center justify-center">
              <ValueIcon name={value.icon} className="size-12" />
            </span>
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em]">
                {value.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-white/75">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
