import { Container } from "@/components/ui/Container";

const columns = [
  {
    titleLines: ["Crafted with", "Heritage"] as const,
    body: 'By partnering with one of the world’s most renowned and awarded producers in the "Green Heart" of Italy, we ensure every drop is a masterpiece of heritage, DNA-certified purity, and world-class freshness.',
  },
  {
    titleLines: ["Freshness in", "Every Dose"] as const,
    body: 'The monodose packaging acts as a time capsule, shielding the oil from the oxidation that degrades flavour and potency, ensuring you get a "first-opening" fresh pour each time.',
  },
] as const;

export function InfoBand() {
  return (
    <section className="bg-white pb-14 sm:pb-16" aria-label="Heritage and freshness">
      <Container>
        <div className="grid grid-cols-1 divide-y divide-white bg-brand-red px-6 py-10 text-white sm:px-10 md:grid-cols-2 md:divide-x md:divide-y-0 md:px-12 md:py-10">
          {columns.map((column) => {
            const title = column.titleLines.join(" ");

            return (
              <div
                key={title}
                className="flex flex-col items-center px-2 py-6 text-center first:pt-0 last:pb-0 md:px-8 md:py-0"
              >
                <h2 className="mb-4 font-serif text-sm font-semibold uppercase leading-tight tracking-[0.06em] lg:text-[20px] 2xl:text-[24px]">
                  {column.titleLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h2>
                <p className="max-w-sm font-sans text-body leading-relaxed text-white/95">
                  {column.body}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
