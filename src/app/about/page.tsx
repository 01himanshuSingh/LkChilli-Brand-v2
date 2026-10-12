import type { Metadata } from "next";
import { AboutIntro } from "@/components/sections/about/AboutIntro";
import { FounderSection } from "@/components/sections/about/FounderSection";
import { MonodoseDetails } from "@/components/sections/about/MonodoseDetails";
import { MonodoseHero } from "@/components/sections/about/MonodoseHero";
import { PartnerLogoAwards } from "@/components/sections/about/PartnerLogoAwards";
import { PartnersSection } from "@/components/sections/about/PartnersSection";
import { SustainabilityBand } from "@/components/sections/about/SustainabilityBand";
import { AssortedPack } from "@/components/sections/AssortedPack";
import { VideoHero } from "@/components/ui/VideoHero";
import { aboutHero } from "@/data/about";

export const metadata: Metadata = {
  title: "About Us | LK Chilli",
  description:
    "A legacy in every drop — the story of Lalit Modi, Castello Monte Vibiano, and the monodose chilli oils of LK Chilli.",
  openGraph: {
    title: "About Us | LK Chilli",
    description:
      "A legacy in every drop — the story of Lalit Modi, Castello Monte Vibiano, and the monodose chilli oils of LK Chilli.",
    type: "website",
    images: [
      {
        url: "/images/about/hero-poster.jpg",
        width: 1600,
        height: 800,
        alt: "LK Chilli About Us",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="overflow-x-clip bg-white">
      <VideoHero
        src={aboutHero.videoSrc}
        poster={aboutHero.poster}
        alt={aboutHero.alt}
        priority
        className="aspect-[2/1] min-h-[12rem] sm:min-h-[16rem]"
      />
      <AboutIntro />
      <FounderSection />
      {/* Partners portrait overlaps downward into the green band */}
      <div className="relative overflow-visible">
        <PartnersSection />
        <SustainabilityBand />
      </div>
      <PartnerLogoAwards />
      <MonodoseHero />
      <MonodoseDetails />
      <AssortedPack />
    </div>
  );
}
