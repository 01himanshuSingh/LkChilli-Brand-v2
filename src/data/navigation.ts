import type { NavLink } from "@/types/nav";

export const primaryNav: NavLink[] = [
  { label: "SHOP", href: "#shop" },
  { label: "STORY", href: "#story" },
];

export const secondaryNav: NavLink[] = [
  { label: "NEWS", href: "#news" },
];

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: "instagram" as const,
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: "facebook" as const,
  },
];
