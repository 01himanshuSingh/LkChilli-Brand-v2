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
    heading: "Get First Access",
    introLines: ["Be the first to experience", "our products."],
    fields: [
      {
        name: "name",
        label: "Name",
        placeholder: "Name",
        type: "text",
        required: false,
      },
      {
        name: "email",
        label: "Email",
        placeholder: "Email*",
        type: "email",
        required: true,
      },
      {
        name: "phone",
        label: "Phone",
        placeholder: "Phone*",
        type: "tel",
        required: true,
      },
      {
        name: "message",
        label: "Message",
        placeholder:
          "lorem ipsum dolor sit amet consectetur adipiscing elit eros ex laboris dolore in maxime dolor laborum",
        type: "textarea",
        required: false,
      },
    ],
    submitLabel: "Submit",
    confirmationMessage:
      "Thank you — your message has been received. Our team will be in touch.",
    errorMessage: "Something went wrong — please try again or email us directly",
  },
};
