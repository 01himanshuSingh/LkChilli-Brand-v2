import { Container } from "@/components/ui/Container";

export function NumberedJourney() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28" aria-labelledby="just-drip-it">
      <Container className="max-w-3xl text-center">
        <h2
          id="just-drip-it"
          className="font-serif text-[clamp(2rem,3.2vw,2.75rem)] font-medium italic leading-none text-brand-red"
        >
          Just Drip It
        </h2>

        <p className="mx-auto mt-7 max-w-[40rem] text-balance font-serif text-[clamp(1.05rem,1.45vw,1.375rem)] font-medium italic leading-relaxed text-brand-red lg:mt-8">
          From the gentle, smoky hum to the legendary fire chillies, we have captured each
          individual chilli in its most authentic, oil-infused form.
          <br />
          A map designed for global chilli exploration.
        </p>
      </Container>
    </section>
  );
}
