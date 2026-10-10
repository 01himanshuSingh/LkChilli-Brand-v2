"use client";

import Image from "next/image";
import type { Product } from "@/types/product";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const accentText: Record<Product["accent"], string> = {
  ancho: "text-product-ancho",
  cayenne: "text-product-cayenne",
  birdseye: "text-product-birdseye",
  habanero: "text-product-habanero",
  "scotch-bonnet": "text-product-scotch-bonnet",
  "naga-ghost": "text-product-naga-ghost",
};

export interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: string) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <article className="mx-auto flex w-full max-w-full flex-col items-center text-center">
      <div className="relative mb-5 aspect-square w-full overflow-hidden">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <h3
        className={cn(
          "mb-2 w-full font-serif font-medium uppercase leading-none",
          accentText[product.accent],
        )}
      >
        <span className="text-[0.95em] tracking-[0.04em] sm:text-[1.2em] 2xl:text-[1.5em]">
          {product.number}.
        </span>{" "}
        <span className="text-[1.15em] tracking-[0.04em] sm:text-[1.55em] 2xl:text-[2em]">
          {product.name}
        </span>
      </h3>

      <p className="mb-3 w-full font-serif text-tagline font-medium italic text-text-heading lg:text-[1.2em] 2xl:text-[1.5em]">
        {product.tagline}
      </p>

      <p className="mb-3 w-full lg:max-w-[280px] 2xl:max-w-[320px] text-[12px] lg:text-[14px] 2xl:text-[16px] font-sans text-body text-text-body">
        {product.description}
      </p>

      <p className="mb-5 font-sans text-caption text-text-muted text-[10px] lg:text-[12px] 2xl:text-[14px]  ">{product.caption}</p>

      <Button
        variant="outline"
        size="slim"
        onClick={() => onAddToCart(product.id)}
        aria-label={`Add ${product.name} to cart`}
      >
        Add to Cart
      </Button>
    </article>
  );
}
