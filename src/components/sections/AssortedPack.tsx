"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { assortedPackId } from "@/data/products";

function handleAddToCart(productId: string): void {
  // TODO: plug into real cart / checkout
  console.log("[cart] add product:", productId);
}

export function AssortedPack() {
  return (
    <section className="bg-white py-10 " aria-labelledby="assorted-pack">
      <Container>
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-0">
          {/* Left matches right image height (items-stretch + flex-1 card) */}
          <div className="order-2 flex h-full flex-col lg:order-1 lg:col-span-5 lg:z-10 xl:col-span-4">
            <div className="flex flex-1 flex-col justify-center bg-brand-red px-8 py-10 text-white sm:px-10 sm:py-12 lg:px-10 lg:py-12 xl:px-12">
              <h2
                id="assorted-pack"
                className="mb-5 font-serif text-display font-semibold text-white"
              >
                Assorted Pack
              </h2>
              <p className="mb-8 max-w-sm font-sans text-body leading-relaxed text-white/95">
                This collection provides the ultimate variety to creatively pair with
                every meal. It is the definitive assortment for transforming every meal
                into a creative discovery.
              </p>
              <div>
                <Button
                  variant="outline-light"
                  size="slim"
                  onClick={() => handleAddToCart(assortedPackId)}
                  aria-label="Add Assorted Pack to cart"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 lg:col-span-7 lg:-ml-8 xl:col-span-8 xl:-ml-12">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-soft shadow-pack sm:aspect-[16/10]">
              <Image
                src="/images/assorted-pack.png"
                alt="Open LK Chilli assorted gift box filled with individual oil bottles"
                fill
                sizes="(max-width: 1013px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
