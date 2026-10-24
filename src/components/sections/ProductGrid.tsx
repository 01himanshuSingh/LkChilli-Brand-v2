import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/data/products";

export function ProductGrid() {
  return (
    <section id="shop" className="bg-white pb-16 pt-8 sm:pb-9 sm:pt-12 lg:pt-16" aria-labelledby="our-products">
      {/* Same Container as InfoBand — shared max-w-container + side padding */}
      <Container>
        <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 lg:mb-16">
          <h2
            id="our-products"
            className="font-serif text-[clamp(1.85rem,3.4vw,2.85rem)] font-medium uppercase leading-none tracking-[0.04em] text-brand-red"
          >
            Our Products
          </h2>
          <p className="mt-3 font-serif text-[clamp(1.7rem,3vw,2.65rem)] font-bold italic leading-none text-brand-red sm:mt-4">
            Launching Soon
          </p>
        </header>

        <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:gap-x-8 sm:gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
