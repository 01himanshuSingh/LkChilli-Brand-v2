"use client";

import type { ReactNode, RefObject } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/cn";

export interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Tailwind-compatible delay step */
  delay?: "none" | "short" | "medium";
}

const delayClass: Record<NonNullable<RevealProps["delay"]>, string> = {
  none: "",
  short: "delay-75",
  medium: "delay-150",
};

/**
 * Lazy scroll reveal — fades/slides content in when it enters the viewport.
 */
export function Reveal({ children, className, delay = "none" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      className={cn(
        "reveal-on-scroll",
        delayClass[delay],
        inView && "reveal-on-scroll--visible",
        className,
      )}
    >
      {children}
    </div>
  );
}
