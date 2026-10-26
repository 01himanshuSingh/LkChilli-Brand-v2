import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function ZeroEmissions() {
  return (
    <section
      id="news"
      className="bg-white pb-16 pt-4 sm:pb-20"
      aria-labelledby="zero-emissions"
    >
      <h2 id="zero-emissions" className="sr-only">
        Zero Compromise. Zero Emissions.
      </h2>
      {/* Same container width as Flavour First / InfoBand / Assorted Pack */}
      <Container>
        <div className="relative aspect-[16/9] min-h-[200px] w-full overflow-hidden sm:min-h-[260px] lg:aspect-[21/9] lg:min-h-[320px]">
          <Image
            src="/images/Zero_Compromise.JPG"
            alt="Aerial view of Castello Monte Vibiano surrounded by green hills"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
        </div>

        <div className="mx-auto mt-10 max-w-3xl text-center sm:mt-12">
          <p className="font-sans text-[15px] font-normal leading-relaxed text-text-heading sm:text-[17px] sm:leading-[1.65]">
            <span className="block">
              As a world-renowned leader in the &quot;360 Green Revolution,&quot; our
            </span>
            <span className="block">
              manufacturing partner,{" "}
              <strong className="font-semibold">Castello Monte Vibiano</strong> has achieved
              milestones
            </span>
            <span className="block">that redefine excellence.</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
