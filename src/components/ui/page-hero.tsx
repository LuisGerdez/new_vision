import { cn } from "@/utils/cn";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function PageHero({ title, subtitle, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-navy-deep py-16 sm:py-20",
        className,
      )}
    >
      <div
        className="absolute inset-0 bg-[url('/images/hero-skyline.png')] bg-cover bg-center opacity-30"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy/70" />
      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-semibold uppercase tracking-wide text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/80 sm:text-base">
            {subtitle}
          </p>
        ) : null}
        <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-brand-red" />
      </div>
    </section>
  );
}
