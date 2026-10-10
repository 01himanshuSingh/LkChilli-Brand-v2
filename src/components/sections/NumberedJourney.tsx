import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function NumberedJourney() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-15" aria-labelledby="numbered-journey">
      <Container className="max-w-3xl text-center">
        <SectionHeading id="numbered-journey" as="h1">
          A Numbered Journey
        </SectionHeading>

        <p className="mt-6 font-serif text-[clamp(0.95rem,1.4vw,1.125rem)] lg:text-[20px] 2xl:text-[24px] italic leading-relaxed text-brand-red text-balance font-medium lg:w-[690px] lg:mx-auto">
          From the gentle, smoky hum to the legendary fire chillies, we have captured each
          individual chilli in its most authentic, oil-infused form.
          <br />
          A map designed for global chilli exploration.
        </p>
      </Container>
    </section>
  );
}
