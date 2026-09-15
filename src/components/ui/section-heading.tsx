import { cn } from "@/utils/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p
        className={cn(
          "mb-2 flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.28em] text-brand-red",
          align === "center" && "justify-center",
        )}
      >
        <StarIcon />
        {eyebrow}
        <StarIcon />
      </p>
      <h2
        className={cn(
          "font-display text-3xl font-semibold uppercase tracking-wide sm:text-4xl",
          tone === "light" ? "text-navy" : "text-white",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-3 text-sm leading-relaxed sm:text-base",
            tone === "light" ? "text-muted" : "text-white/75",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function StarIcon() {
  return (
    <svg
      viewBox="0 0 12 12"
      className="size-2.5 fill-brand-red"
      aria-hidden="true"
    >
      <path d="M6 0l1.5 4.2H12L8.2 6.8 9.6 11 6 8.4 2.4 11l1.4-4.2L0 4.2h4.5z" />
    </svg>
  );
}
