import Image from "next/image";
import { contactContent } from "@/data/contact";

/**
 * Contact Us closing hero — full-bleed photo with brand lockup.
 * Mobile: 50vh slice; desktop: full viewport bookend.
 */
export function ClosingHero() {
  const {
    pageNumber,
    tagline,
    accentLabel,
    partnershipLine,
    domain,
    image,
    crest,
  } = contactContent.closingHero;

  return (
    <section
      className="relative mt-0 flex h-[50vh] min-h-[320px] items-end overflow-hidden md:h-[100svh] md:min-h-screen"
      aria-label="Contact Us hero"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/60 via-black/25 to-transparent"
        aria-hidden
      />

      <Image
        src={crest.src}
        alt={crest.alt}
        width={40}
        height={40}
        className="absolute left-6 top-6 z-10 h-6 w-6 object-contain md:left-8 md:top-8 md:h-8 md:w-8"
      />

      <span className="absolute right-6 top-6 z-10 font-serif text-xs tracking-widest text-white/80 md:right-8 md:top-8">
        {pageNumber}
      </span>

      <div className="relative z-[1] mx-auto w-full max-w-3xl px-5 pb-8 pt-16 text-center md:px-12 md:pb-28 md:pt-32 lg:px-16 lg:pb-32">
        <h1 className="font-serif text-lg italic text-white/95 md:text-2xl lg:text-3xl">
          {tagline}
        </h1>

        {accentLabel ? (
          <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.32em] text-brand-red md:mt-5 md:text-xs">
            {accentLabel}
          </p>
        ) : null}

        <p className="mt-3 text-[9px] uppercase tracking-[0.24em] text-white/80 md:mt-8 md:text-xs md:tracking-[0.32em]">
          {partnershipLine}
        </p>

        <p className="mt-2 text-[9px] uppercase tracking-[0.24em] text-white/70 md:mt-4 md:text-xs">
          {domain}
        </p>
      </div>
    </section>
  );
}
