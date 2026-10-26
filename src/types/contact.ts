export type ContactFormFieldName = "name" | "email" | "phone" | "message";

export interface ContactFormField {
  name: ContactFormFieldName;
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel" | "textarea";
  required: boolean;
}

export interface ContactContent {
  closingHero: {
    pageNumber: string;
    tagline: string;
    accentLabel: string;
    partnershipLine: string;
    domain: string;
    image: { src: string; alt: string };
    crest: { src: string; alt: string };
  };
  form: {
    heading: string;
    introLines: readonly string[];
    fields: ContactFormField[];
    submitLabel: string;
    confirmationMessage: string;
    errorMessage: string;
  };
}
