import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function ZeroEmissions() {
  return (
    <section
      id="news"
      className="bg-white pb-16 pt-4 sm:pb-20"
      aria-labelledby="zero-emissions"
    >
      {/* Same container width as Flavour First / InfoBand / Assorted Pack */}
      <Container>
        <div className="relative aspect-[16/9] min-h-[200px] w-full overflow-hidden sm:min-h-[260px] lg:aspect-[21/9] lg:min-h-[320px]">
          <Image
            src="/images/Zero_Compromise.png"
            alt="Aerial view of Castello Monte Vibiano surrounded by green hills"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/10"
            aria-hidden="true"
          />
          <h2
            id="zero-emissions"
            className="absolute left-4 top-5 max-w-[12rem] font-serif text-h2 font-bold leading-tight text-eco-green sm:left-6 sm:top-8 sm:max-w-xs lg:left-8 lg:top-10 lg:max-w-md"
          >
            Zero Compromise.
            <br />
            Zero Emissions.
          </h2>
        </div>

        <div className="mx-auto mt-8 max-w-2xl text-center">
          <p className="mb-6 font-sans text-body leading-relaxed text-text-body text-[12px] lg:text-[14px] 2xl:text-[16px]">
            As a world-renowned leader in the &ldquo;360 Green Revolution,&rdquo; our
            manufacturing partner, Castello Monte Vibiano has achieved milestones that
            redefine excellence.
          </p>
          <Button href="#story" variant="outline">
            Read More
          </Button>
        </div>
      </Container>
    </section>
  );
}
