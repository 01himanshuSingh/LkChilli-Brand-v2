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
  description: string;
  caption: string;
  accent: ProductAccent;
  imageSrc: string;
  imageAlt: string;
}
