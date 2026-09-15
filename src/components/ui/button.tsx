import Link from "next/link";

import { cn } from "@/utils/cn";

const variants = {
  primary:
    "bg-brand-red text-white hover:bg-brand-red-hover shadow-md shadow-brand-red/25",
  ghost:
    "bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/10",
  outline:
    "bg-transparent text-navy border border-navy/20 hover:bg-navy/5",
} as const;

const sizes = {
  sm: "h-10 px-4 text-xs",
  md: "h-12 px-6 text-sm",
} as const;

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
};

function isNativeLink(href: string) {
  return (
    href.startsWith("tel:") ||
    href.startsWith("mailto:") ||
    href.startsWith("http")
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold uppercase tracking-wider transition-colors",
    variants[variant],
    sizes[size],
    className,
  );

  if (isNativeLink(href)) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
