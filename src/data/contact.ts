import type { ContactContent } from "@/types/contact";

export const contactContent: ContactContent = {
  closingHero: {
    pageNumber: "10",
    tagline: "Just drip it.",
    accentLabel: "Contact Us",
    partnershipLine: "A Modi Enterprises × Castello Monte Vibiano Partnership",
    domain: "WWW.LKCHILLI.COM",
    image: {
      src: "/images/contact-us/contact-us.jpg",
      alt: "A chef seasoning plated dishes at an outdoor table with candlelight and flowers",
    },
    crest: {
      src: "/images/Logo.png",
      alt: "LK Chilli crest mark",
    },
  },
  form: {
    introText: "We’d love to hear from you. Share a few details and our team will be in touch.",
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      {
        name: "organisation",
        label: "Organisation",
        type: "text",
        required: true,
      },
      { name: "market", label: "Market", type: "text", required: false },
      { name: "message", label: "Message", type: "textarea", required: true },
    ],
    submitLabel: "Submit",
    confirmationMessage:
      "Thank you — your message has been received. Our team will be in touch.",
    errorMessage: "Something went wrong — please try again or email us directly",
  },
};
