import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface SectionHeadingProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
  align?: "left" | "center";
  id?: string;
}

export function SectionHeading({
  children,
  as: Component = "h2",
  className,
  align = "center",
  id,
}: SectionHeadingProps) {
  return (
    <Component
      id={id}
      className={cn(
        "font-serif text-[18px] lg:text-[35px] 2xl:text-[48px] font-bold uppercase tracking-[0.02em] text-brand-red",
        align === "center" && "text-center",
        align === "left" && "text-left",
        className,
      )}
    >
      {children}
    </Component>
  );
}
