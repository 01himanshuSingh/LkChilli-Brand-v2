import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | LK Chilli",
  description: "Be the first to experience LK Chilli products.",
  openGraph: {
    title: "Contact Us | LK Chilli",
    description: "Be the first to experience LK Chilli products.",
    type: "website",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "LK Chilli",
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
