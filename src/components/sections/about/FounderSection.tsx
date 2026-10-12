import { SplitSection } from "@/components/ui/SplitSection";
import { founderContent } from "@/data/about";

export function FounderSection() {
  return (
    <SplitSection
      imageSrc={founderContent.imageSrc}
      imageAlt={founderContent.imageAlt}
      className="pb-14 sm:pb-18 lg:pb-22"
      imageWrapperClassName="border border-black/5 shadow-portrait"
      contentClassName="md:pt-2"
    >
      <p className="mb-3 font-serif text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-brand-red sm:text-xs">
        {founderContent.eyebrow}
      </p>
      <h2 className="mb-6 font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-normal italic leading-none text-brand-red">
        {founderContent.name}
      </h2>
      <div className="space-y-4">
        {founderContent.paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 40)}
            className="font-sans text-[13px] font-light leading-[1.7] text-text-body lg:text-[15px] 2xl:text-[18px]"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </SplitSection>
  );
}
