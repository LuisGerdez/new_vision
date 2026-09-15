import Image from "next/image";

import { cn } from "@/utils/cn";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className, priority = false }: LogoProps) {
  return (
    <Image
      src="/images/new-vision-logo.png"
      alt="New Vision Auto Glass LLC"
      width={320}
      height={320}
      priority={priority}
      className={cn("h-auto w-auto", className)}
    />
  );
}
