import { SplitSection } from "@/components/ui/SplitSection";
import { partnersContent } from "@/data/about";

/**
 * Partners text + portrait. Image overlaps into the sustainability band
 * via relative positioning + negative margin on desktop only.
 */
export function PartnersSection() {
  return (
    <SplitSection
      reverse
      imageSrc={partnersContent.imageSrc}
      imageAlt={partnersContent.imageAlt}
      className="relative z-10 bg-transparent pb-10 sm:pb-12 lg:pb-0"
      containerClassName="relative"
      imageWrapperClassName="relative z-20 shadow-portrait lg:-mb-40 xl:-mb-48"
      contentClassName="md:pt-2 lg:pb-32"
    >
      <p className="mb-3 font-serif text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-heading-green sm:text-xs">
        {partnersContent.eyebrow}
      </p>
      <h2 className="mb-6 font-serif text-[clamp(2rem,4.5vw,3.25rem)]  italic leading-tight text-heading-green">
        {partnersContent.heading}
      </h2>
      <div className="space-y-4">
        {partnersContent.paragraphs.map((paragraph) => (
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
