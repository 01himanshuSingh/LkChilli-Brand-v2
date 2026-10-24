export type ProductAccent =
  | "ancho"
  | "cayenne"
  | "birdseye"
  | "habanero"
  | "scotch-bonnet"
  | "naga-ghost";

export interface Product {
  id: string;
  number: string;
  name: string;
  tagline: string;
  /** Designed line breaks, in order. Each entry is one centered line. */
  description: readonly string[];
  caption: string;
  accent: ProductAccent;
  imageSrc: string;
  imageAlt: string;
}
