import Image from "next/image";
import { AwardBadge } from "@/components/ui/AwardBadge";
import { Container } from "@/components/ui/Container";
import { awardBadges, castelloLogo } from "@/data/about";

function CastelloWordmark() {
  return (
    <div className="mx-auto flex w-full max-w-[14rem] flex-col items-center text-center text-heading-green md:mx-0">
      <div className="relative mb-4 h-16 w-16 sm:h-20 sm:w-20 lg:h-[5.5rem] lg:w-[5.5rem]">
        <Image
          src={castelloLogo.imageSrc}
          alt=""
          fill
          sizes="88px"
          className="object-contain"
          aria-hidden="true"
        />
      </div>

      <p className="w-full text-center font-serif text-[0.6875rem] uppercase tracking-[0.28em] sm:text-xs">
        Castello
      </p>
      <p className="mt-1 w-full text-center font-serif text-[clamp(1.125rem,2.2vw,1.5rem)] font-semibold uppercase tracking-[0.08em]">
        Monte Vibiano
      </p>
      <p className="mt-1 w-full text-center font-serif text-[0.625rem] uppercase tracking-[0.32em] sm:text-[0.6875rem]">
        Umbria
      </p>
      <span className="sr-only">{castelloLogo.imageAlt}</span>
    </div>
  );
}

export function PartnerLogoAwards() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20" aria-label="Partner awards">
      {/* Same content width as Founder / Partners / Sustainability band */}
      <Container className="max-w-about px-4 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">
          <div className="flex w-full justify-center md:justify-start">
            <CastelloWordmark />
          </div>

          <div className="grid w-full grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
            {awardBadges.map((badge) => (
              <div key={badge.id} className="flex w-full justify-center">
                <AwardBadge badge={badge} className="max-w-none w-full sm:max-w-[8.5rem]" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
