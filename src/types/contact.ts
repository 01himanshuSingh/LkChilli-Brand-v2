export type ContactFormFieldName =
  | "name"
  | "email"
  | "organisation"
  | "market"
  | "message";

export interface ContactFormField {
  name: ContactFormFieldName;
  label: string;
  type: "text" | "email" | "textarea";
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
    introText: string;
    fields: ContactFormField[];
    submitLabel: string;
    confirmationMessage: string;
    errorMessage: string;
  };
}
