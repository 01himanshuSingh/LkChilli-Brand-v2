import type { NavLink } from "@/types/nav";

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
];

export const secondaryNav: NavLink[] = [{ label: "CONTACT", href: "/contact" }];

export type SocialIcon = "instagram" | "facebook";

export interface SocialLink {
  label: string;
  icon: SocialIcon;
  /** Omit or null = static icon (not clickable) */
  href?: string | null;
}

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/lkchilli/?hl=en",
    icon: "instagram",
  },
  {
    label: "Facebook",
    href: null,
    icon: "facebook",
  },
];
