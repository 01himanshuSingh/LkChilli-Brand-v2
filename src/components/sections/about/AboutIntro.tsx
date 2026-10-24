import { Container } from "@/components/ui/Container";
import { aboutIntro } from "@/data/about";

export function AboutIntro() {
  return (
    <section className="bg-white pt-14 sm:pt-18 lg:pt-22" aria-labelledby="about-intro">
      <Container className="max-w-3xl text-center">
        <h1
          id="about-intro"
          className="font-serif text-[22px] font-bold italic leading-tight text-brand-red lg:text-[35px] 2xl:text-[48px]"
        >
          {aboutIntro.title}
        </h1>
        <p className="mt-4 font-sans text-[13px] font-normal uppercase tracking-[0.06em] text-brand-red sm:tracking-[0.08em] lg:text-[20px] 2xl:text-[24px]">
          {aboutIntro.subtitle}
        </p>
      </Container>

      <Container className="mt-8 max-w-about pb-10 sm:mt-10 sm:pb-12 lg:mt-12 lg:pb-14">
        <div aria-hidden className="border-t border-brand-red pt-1.5">
          <div className="border-t border-brand-red" />
        </div>
      </Container>
    </section>
  );
}
