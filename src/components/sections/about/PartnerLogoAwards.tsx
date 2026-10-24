import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { castelloLogo } from "@/data/about";

export function PartnerLogoAwards() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="castello-wordmark">
      <Container>
        <div className="mx-auto flex max-w-[22rem] flex-col items-center text-center text-heading-green">
          <Image
            src={castelloLogo.imageSrc}
            alt=""
            width={320}
            height={390}
            className="h-auto w-36 sm:w-40"
          />

          <p
            id="castello-wordmark"
            className="mt-6 font-serif text-sm font-medium uppercase tracking-[0.42em] sm:text-base"
          >
            Castello
          </p>
          <p className="mt-1.5 font-serif text-[1.75rem] font-semibold uppercase leading-none tracking-[0.14em] sm:text-[2.15rem]">
            Monte Vibiano
          </p>
          <p className="mt-2.5 font-serif text-[0.8rem] font-medium uppercase tracking-[0.48em] sm:text-sm">
            Umbria
          </p>
          <span className="sr-only">{castelloLogo.imageAlt}</span>
        </div>
      </Container>
    </section>
  );
}
