import { Container } from "@/components/ui/Container";
import { sustainabilityIntroLines, sustainabilityStats } from "@/data/about";

export function SustainabilityBand() {
  return (
    <section
      className="relative z-0 w-full bg-[#12241D] text-white"
      aria-labelledby="sustainability-intro"
    >
      <Container className="relative z-0 max-w-about px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:pb-24 lg:pt-20">
        <p
          id="sustainability-intro"
          className="mb-10 font-serif text-[clamp(0.9375rem,1.5vw,1.125rem)] 2xl:text-[18px] italic leading-relaxed text-white lg:mb-14"
        >
          {sustainabilityIntroLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-12">
          {sustainabilityStats.map((stat) => (
            <div key={stat.title} className="min-w-0 text-left">
              <h3 className="mb-3 font-serif text-[clamp(0.9375rem,1.3vw,1.125rem)] font-medium uppercase tracking-[0.04em] text-white 2xl:text-[20px]">
                {/* Mobile / tablet: one line */}
                <span className="lg:hidden">{stat.title}</span>
                {/* Desktop: two rows */}
                <span className="hidden lg:flex lg:flex-col lg:leading-snug">
                  {stat.titleLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </span>
              </h3>
              <p className="font-sans text-[13px] font-light leading-[1.7] text-white/85 sm:text-sm">
                {stat.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
