import { Container } from "@/components/ui/Container";
import { aboutIntro } from "@/data/about";

export function AboutIntro() {
  return (
    <section className="bg-white py-14 sm:py-18 lg:py-22" aria-labelledby="about-intro">
      <Container className="max-w-3xl text-center">
        <h1
          id="about-intro"
          className="font-serif text-[22px] font-bold italic leading-tight text-brand-red lg:text-[35px] 2xl:text-[48px]"
        >
          {aboutIntro.title}
        </h1>
        <p className="mt-4 font-sans text-[13px] lg:text-[20px]  2xl:text-[24px] font-normal uppercase tracking-[0.06em] text-brand-red sm:tracking-[0.08em]">
          {aboutIntro.subtitle}
        </p>
      </Container>
    </section>
  );
}
