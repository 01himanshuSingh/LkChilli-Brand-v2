import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/data/products";

export function ProductGrid() {
  return (
    <section id="shop" className="bg-white py-1 pb-16 sm:pb-20" aria-label="Products">
      {/* Same Container as InfoBand — shared max-w-container + side padding */}
      <Container>
        <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:gap-x-8 sm:gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
