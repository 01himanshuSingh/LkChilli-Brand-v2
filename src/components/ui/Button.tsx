"use client";

import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "outline" | "solid" | "outline-light";
type ButtonSize = "default" | "slim" | "label";

const variantClasses: Record<ButtonVariant, string> = {
  outline:
    "rounded-full border border-brand-red bg-transparent font-sans uppercase text-brand-red hover:bg-brand-red hover:text-white focus-visible:bg-brand-red focus-visible:text-white",
  solid:
    "rounded-sm border border-brand-red bg-brand-red font-sans uppercase text-white hover:bg-brand-red-dark focus-visible:bg-brand-red-dark",
  "outline-light":
    "rounded-full border border-white bg-transparent font-sans uppercase text-white hover:bg-white hover:text-brand-red focus-visible:bg-white focus-visible:text-brand-red",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "px-6 py-2.5 text-button",
  slim: "px-5 py-1.5 text-[1rem] tracking-[0.1em]",
  label: "px-10 py-[0.55rem] text-[0.8125rem] font-normal leading-none tracking-[0.32em]",
};

const baseClasses =
  "inline-flex items-center justify-center transition-colors duration-250 disabled:cursor-not-allowed disabled:opacity-50";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: ReactNode;
}

export function Button({
  variant = "outline",
  size = "default",
  href,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
