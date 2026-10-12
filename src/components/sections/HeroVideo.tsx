import { VideoHero } from "@/components/ui/VideoHero";

/** Landing-page hero — full viewport with brand tagline */
export function HeroVideo() {
  return (
    <VideoHero
      src="/videos/hero.mp4"
      poster="/images/hero-poster.jpg"
      alt="Chef pouring LK Chilli oil onto tasting spoons"
      priority
      className="h-[100svh] min-h-[28rem] lg:h-dvh lg:min-h-0"
    >
      <h1 className="font-serif text-[clamp(1.875rem,5vw,3.25rem)] font-normal italic text-white">
        Just Drip It
      </h1>
    </VideoHero>
  );
}
