import { AssortedPack } from "@/components/sections/AssortedPack";
import { FlavourFirst } from "@/components/sections/FlavourFirst";
import { HeroVideo } from "@/components/sections/HeroVideo";
import { InfoBand } from "@/components/sections/InfoBand";
import { NumberedJourney } from "@/components/sections/NumberedJourney";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { ZeroEmissions } from "@/components/sections/ZeroEmissions";
import { Reveal } from "@/components/ui/Reveal";

export default function HomePage() {
  return (
    <>
      <HeroVideo />

      <Reveal>
        <NumberedJourney />
      </Reveal>

      <Reveal delay="short">
        <InfoBand />
      </Reveal>

      <Reveal delay="medium">
        <ProductGrid />
      </Reveal>

     

      <Reveal delay="short">
        <FlavourFirst />
      </Reveal>

      <Reveal delay="short">
        <ZeroEmissions />
      </Reveal>
    </>
  );
}
