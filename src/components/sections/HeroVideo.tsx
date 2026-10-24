import { VideoHero } from "@/components/ui/VideoHero";

/** Cloudinary assets behind the homepage player embeds. */
const desktopHeroSrc =
  "https://res.cloudinary.com/dafbio15x/video/upload/LK_Home_Page_Cover_V.2.2_thcz2f.mp4";
const mobileHeroSrc =
  "https://res.cloudinary.com/dafbio15x/video/upload/LK_Homepage_Cover_Mobile_V.2_hvtsxa.mp4";

/** Landing-page hero — full viewport with brand tagline */
export function HeroVideo() {
  return (
    <VideoHero
      src={desktopHeroSrc}
      mobileSrc={mobileHeroSrc}
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
