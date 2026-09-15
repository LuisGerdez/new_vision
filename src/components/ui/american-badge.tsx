import { cn } from "@/utils/cn";

type AmericanBadgeProps = {
  className?: string;
};

export function AmericanBadge({ className }: AmericanBadgeProps) {
  return (
    <div
      className={cn(
        "relative flex size-28 shrink-0 items-center justify-center",
        className,
      )}
    >
      <svg viewBox="0 0 120 120" className="absolute inset-0" aria-hidden="true">
        <circle cx="60" cy="60" r="58" fill="#0a2342" />
        <circle cx="60" cy="60" r="54" fill="none" stroke="#f5c518" strokeWidth="2" />
        <circle cx="60" cy="60" r="42" fill="#123056" />
        <path d="M18 78h84v24H18z" fill="#c8102e" />
        <path d="M18 84h84v4H18zM18 92h84v4H18z" fill="#fff" />
        {Array.from({ length: 12 }).map((_, index) => {
          const angle = (index / 12) * Math.PI * 2 - Math.PI / 2;
          const x = 60 + Math.cos(angle) * 48;
          const y = 60 + Math.sin(angle) * 48;
          return (
            <polygon
              key={index}
              fill="#f5c518"
              points={starPoints(x, y, 3.2)}
            />
          );
        })}
      </svg>
      <p className="relative z-10 max-w-20 text-center font-display text-[10px] font-semibold uppercase leading-tight tracking-wide text-white">
        Support American Business
      </p>
    </div>
  );
}

function starPoints(cx: number, cy: number, r: number) {
  const points = [];
  for (let i = 0; i < 5; i += 1) {
    const outer = ((i * 72 - 90) * Math.PI) / 180;
    const inner = (((i * 72 - 90) + 36) * Math.PI) / 180;
    points.push(`${cx + Math.cos(outer) * r},${cy + Math.sin(outer) * r}`);
    points.push(
      `${cx + Math.cos(inner) * (r / 2.4)},${cy + Math.sin(inner) * (r / 2.4)}`,
    );
  }
  return points.join(" ");
}
