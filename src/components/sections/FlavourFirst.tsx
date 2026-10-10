import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function FlavourFirst() {
  return (
    <section
      id="story"
      className="bg-white py-12 sm:py-18 lg:py-22"
      aria-labelledby="flavour-first"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[5/6] lg:max-h-[34rem]">
            <Image
              src="/images/flavour-first.jpg"
              alt="Two men shaking hands beside a red LK Chilli street cart in an Italian courtyard"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="text-center lg:text-left">
            <h2
              id="flavour-first"
              className="mb-6 font-serif text-display font-bold text-text-heading"
            >
              &ldquo;Flavour - First&rdquo; Philosophy.
            </h2>
            <p className="mb-8 font-sans text-body leading-relaxed text-text-body lg:max-w-md text-[12px] lg:text-[14px] 2xl:text-[16px]">
              Our oils are precision tools crafted to elevate, enhance, and ignite the
              original notes of every meal with a sophisticated, calculated kick. They are
              never designed to mask the integrity of your dish or overwhelm your palate
              with fire; they are designed to make the flavours you love speak louder.
            </p>
            <Button href="#news" variant="outline">
              Read More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
