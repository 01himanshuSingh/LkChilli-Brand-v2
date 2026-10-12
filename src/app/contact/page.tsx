import type { Metadata } from "next";
import { ClosingHero } from "@/components/sections/contact/ClosingHero";
import { ContactForm } from "@/components/sections/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | LK Chilli",
  description:
    "Contact LK Chilli — premium chilli-infused olive oil. A Modi Enterprises × Castello Monte Vibiano Partnership.",
  openGraph: {
    title: "Contact Us | LK Chilli",
    description:
      "Contact LK Chilli — premium chilli-infused olive oil. A Modi Enterprises × Castello Monte Vibiano Partnership.",
    type: "website",
    images: [
      {
        url: "/images/contact-us/contact-us.jpg",
        width: 1600,
        height: 900,
        alt: "LK Chilli Contact Us",
      },
    ],
  },
};

/**
 * Contact Us page.
 * Mobile: form first, then photo.
 * Desktop: photo first, then form.
 */
export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <div className="order-2 md:order-1">
        <ClosingHero />
      </div>
      <div className="order-1 md:order-2">
        <ContactForm />
      </div>
    </div>
  );
}
