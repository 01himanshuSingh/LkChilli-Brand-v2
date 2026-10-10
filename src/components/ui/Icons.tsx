import { Facebook, Instagram, Menu, Pause, Play, X } from "lucide-react";
import type { SVGProps } from "react";
import { cn } from "@/lib/cn";

export interface IconProps {
  className?: string;
  size?: number;
}

export function InstagramIcon({ className, size = 18 }: IconProps) {
  return <Instagram className={className} size={size} aria-hidden="true" />;
}

export function FacebookIcon({ className, size = 18 }: IconProps) {
  return <Facebook className={className} size={size} aria-hidden="true" />;
}

export function MenuIcon({ className, size = 22 }: IconProps) {
  return <Menu className={className} size={size} aria-hidden="true" />;
}

export function CloseIcon({ className, size = 22 }: IconProps) {
  return <X className={className} size={size} aria-hidden="true" />;
}

export function PlayIcon({ className, size = 22 }: IconProps) {
  return <Play className={className} size={size} aria-hidden="true" fill="currentColor" />;
}

export function PauseIcon({ className, size = 22 }: IconProps) {
  return <Pause className={className} size={size} aria-hidden="true" fill="currentColor" />;
}

export function LkMonogram({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 80 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-10 w-auto", className)}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 36c2-10 8-22 16-26 4-2 8 1 9 6 1 6-2 12-6 16-5 5-12 8-19 4"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M34 34c4-12 12-24 24-28 5-1.5 9 3 8 8-1 8-7 14-14 18-6 3.5-13 4-18 2"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M28 38c6 2 14 2 22-1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FaceLogo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-20 w-20", className)}
      aria-hidden="true"
      {...props}
    >
      <circle cx="48" cy="48" r="34" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M34 40c2-4 6-6 10-5M52 35c4-1 8 1 10 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M36 52c4 8 20 8 24 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M30 28c6-8 30-8 36 0M28 68c8 10 32 10 40 0"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="38" cy="44" r="1.5" fill="currentColor" />
      <circle cx="58" cy="44" r="1.5" fill="currentColor" />
    </svg>
  );
}
