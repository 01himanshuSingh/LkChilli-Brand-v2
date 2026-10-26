import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type InfoColumn = {
  id: string;
  title: readonly [string, string];
  body: ReactNode;
};

const emphasisClass = "font-semibold text-white";

const columns: readonly InfoColumn[] = [
  {
    id: "heritage",
    title: ["Crafted with", "Heritage"],
    body: (
      <>
        By partnering with one of the world’s most renowned and awarded producers in the
        &quot;Green Heart&quot; of Italy, we ensure every drop is a masterpiece of{" "}
        <strong className={emphasisClass}>
          heritage, DNA-certified purity, and world-class freshness.
        </strong>
      </>
    ),
  },
  {
    id: "freshness",
    title: ["Freshness in", "Every Dose"],
    body: (
      <>
        The monodose packaging acts as a time capsule,{" "}
        <strong className={emphasisClass}>shielding the oil from the oxidation</strong> that
        degrades flavour and potency, ensuring you get a{" "}
        <strong className={emphasisClass}>&quot;first-opening&quot; fresh</strong> pour each
        time.
      </>
    ),
  },
];

export function InfoBand() {
  return (
    <section className="bg-white pb-14 sm:pb-16 lg:pb-20" aria-labelledby="info-band-heading">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-brand-red px-2 py-2 text-white sm:px-4 sm:py-4 md:px-6 md:py-8">
          <h2 id="info-band-heading" className="sr-only">
            Heritage and freshness
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {columns.map((column, index) => (
              <article
                key={column.id}
                className="relative px-6 py-10 text-center sm:px-8 sm:py-12 md:px-10 md:py-8 lg:px-14 lg:py-10"
              >
                {index > 0 ? (
                  <span
                    aria-hidden
                    className="absolute inset-x-8 top-0 h-px bg-white/85 md:inset-x-auto md:inset-y-2 md:left-0 md:h-auto md:w-px"
                  />
                ) : null}

                <h3 className="font-serif text-[0.8125rem] font-medium uppercase leading-snug tracking-[0.16em] sm:text-sm lg:text-[0.95rem] lg:tracking-[0.18em]">
                  {column.title.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h3>

                <p className="mx-auto mt-5 max-w-[22.5rem] font-sans text-[0.8125rem] font-normal leading-relaxed text-white/70 sm:max-w-sm sm:text-sm lg:mt-6 lg:max-w-[24rem] lg:text-[0.9375rem] lg:leading-7">
                  {column.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
