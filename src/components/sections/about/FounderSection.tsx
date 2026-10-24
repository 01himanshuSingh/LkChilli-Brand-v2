import { Container } from "@/components/ui/Container";
import { SplitSection } from "@/components/ui/SplitSection";
import { founderContent } from "@/data/about";

export function FounderSection() {
  return (
    <>
      <SplitSection
        imageSrc={founderContent.imageSrc}
        imageAlt={founderContent.imageAlt}
        className="pb-10 sm:pb-12 lg:pb-14"
        imageWrapperClassName="overflow-hidden rounded-lg border border-black/10 shadow-portrait"
        contentClassName="md:pt-2"
      >
        <p className="mb-3 font-serif text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-brand-red sm:text-xs">
          {founderContent.eyebrow}
        </p>
        <h2 className="mb-6 font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-normal italic leading-none text-brand-red">
          {founderContent.name}
        </h2>
        <div className="space-y-5">
          {founderContent.paragraphs.map((paragraph) => (
            <p
              key={paragraph[0][0].text}
              className="font-sans text-[13px] font-normal leading-[1.65] text-text-heading sm:text-sm"
            >
              {paragraph.map((line) => (
                <span key={line.map((run) => run.text).join("")} className="block">
                  {line.map((run) =>
                    run.emphasis ? (
                      <strong key={run.text} className="font-semibold">
                        {run.text}
                      </strong>
                    ) : (
                      <span key={run.text}>{run.text}</span>
                    ),
                  )}
                </span>
              ))}
            </p>
          ))}
        </div>
      </SplitSection>

      <Container className="max-w-about pb-10 sm:pb-12 lg:pb-14">
        <div aria-hidden className="border-t border-brand-red pt-1.5">
          <div className="border-t border-brand-red" />
        </div>
      </Container>
    </>
  );
}
