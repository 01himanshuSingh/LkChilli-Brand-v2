import type { AwardBadgeItem } from "@/types/about";
import { cn } from "@/lib/cn";

export interface AwardBadgeProps {
  badge: AwardBadgeItem;
  className?: string;
}

export function AwardBadge({ badge, className }: AwardBadgeProps) {
  return (
    <div
      className={cn(
        "relative flex aspect-square w-full max-w-[7.5rem] items-center justify-center sm:max-w-[8.5rem]",
        className,
      )}
      role="img"
      aria-label={`${badge.label}${badge.year ? ` ${badge.year}` : ""}`}
    >
      <svg viewBox="0 0 160 160" className="h-full w-full" aria-hidden="true">
        <circle cx="80" cy="80" r="78" fill="#111111" stroke="#C9A227" strokeWidth="3" />
        <circle cx="80" cy="80" r="62" fill="none" stroke="#C9A227" strokeWidth="1.5" />
        {/* Laurel suggestion */}
        <path
          d="M28 88c8-18 18-30 28-36M132 88c-8-18-18-30-28-36"
          stroke="#C9A227"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M32 100c10-10 20-16 30-18M128 100c-10-10-20-16-30-18"
          stroke="#C9A227"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <text
          x="80"
          y="72"
          textAnchor="middle"
          fill="#C9A227"
          fontFamily="Georgia, serif"
          fontSize="13"
          letterSpacing="1.5"
        >
          GOLD
        </text>
        <text
          x="80"
          y="92"
          textAnchor="middle"
          fill="#C9A227"
          fontFamily="Georgia, serif"
          fontSize="13"
          letterSpacing="1.5"
        >
          AWARD
        </text>
        {badge.year ? (
          <text
            x="80"
            y="112"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="Georgia, serif"
            fontSize="11"
          >
            {badge.year}
          </text>
        ) : null}
      </svg>
    </div>
  );
}
