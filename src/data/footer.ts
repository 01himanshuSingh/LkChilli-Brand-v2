import type { FooterColumn, FooterContactItem } from "@/types/nav";

export const footerContact: FooterContactItem[] = [
  { label: "connect@lkchilli.com", href: "mailto:connect@lkchilli.com" },
  { label: "+44 7508 347972", href: "tel:+447508347972" },
  { label: "collaboration@lkchilli.com", href: "mailto:collaboration@lkchilli.com" },
];

export const footerPages: FooterColumn = {
  title: "Just to Page",
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Shop", href: "/#shop" },
  ],
};
