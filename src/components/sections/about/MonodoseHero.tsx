import Image from "next/image";
import { monodoseHero } from "@/data/about";

export function MonodoseHero() {
  return (
    <section className="relative w-full overflow-hidden" aria-labelledby="monodose-title">
      <div className="relative aspect-[16/9] min-h-[220px] w-full sm:min-h-[280px] lg:aspect-[21/9] lg:min-h-[360px]">
        <Image
          src={monodoseHero.imageSrc}
          alt={monodoseHero.imageAlt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
          aria-hidden="true"
        />
        <h2
          id="monodose-title"
          className="absolute bottom-6 left-1/2 w-full -translate-x-1/2 px-4 text-center font-serif text-[clamp(2rem,5vw,3.75rem)] font-bold italic leading-none text-white sm:bottom-8 lg:bottom-10"
        >
          {monodoseHero.title}
        </h2>
      </div>
    </section>
  );
}
