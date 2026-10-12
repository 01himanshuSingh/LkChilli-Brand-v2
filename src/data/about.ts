import type { AwardBadgeItem, MonodoseColumn, StatColumn } from "@/types/about";

export const aboutIntro = {
  title: "A Legacy in Every Drop",
  subtitle: "Innovation in the Blood, Adventure on the Palate",
} as const;

export const founderContent = {
  eyebrow: "Our Founder",
  name: "Lalit Modi",
  imageSrc: "/images/about/Founder_pic.webp",
  imageAlt: "Lalit Modi in a kitchen with green cabinets",
  paragraphs: [
    'The story of this brand begins long before the first olive was pressed. It is rooted in the formidable legacy of Modi Global (Modi Enterprises), a conglomerate built on the philosophy of "Collaborate. Innovate. Evolve." For generations, the Modi family has been at the forefront of industrial pioneering.',
    "While our founder, is widely recognised for his transformative impact on global sport with the IPL and the success of Modicare, this project is a return to core roots at Modi Global. It is the culmination of his lifelong journey as a global explorer and his obsession with the vibrant world of spice.",
    "Driven by the heritage of bringing together only the world's best, he sought to bridge the gap between high-end luxury and everyday culinary adventure. We are serious about our history, but we believe the best way to honour it is through products that make life more vibrant.",
  ],
} as const;

export const partnersContent = {
  eyebrow: "Our Partners",
  heading: "The 'Green Heart' of Italy",
  imageSrc: "/images/about/OurParntner.webp",
  imageAlt: "Partner among olive trees on the Monte Vibiano estate at night",
  paragraphs: [
    "Our search for the world's finest oil led us to the historic estate of Monte Vibiano Vecchio in Umbria. This is more than a partnership; it is a meeting of values. Castello Monte Vibiano is a multi-generational family business that serves as a global sanctuary for authentic Italian heritage, harmoniously blending ancient tradition with a pioneering spirit of environmental responsibility.",
    'The estate is a masterpiece of balance, where the influence of man is carefully curated to preserve the sanctity of the land. This commitment is most strikingly visible in "The World\'s Most Beautiful Fence"; a natural forestry barrier covering 31% of the estate\'s land. This living shield blocks external influences, ensuring the biodiversity of the olive groves remains untouched and pure.',
  ],
} as const;

export const sustainabilityIntroLines = [
  'As a world-renowned leader in the "360 Green',
  'Revolution," Castello Monte Vibiano has',
  "achieved milestones that redefine excellence:",
] as const;

export const sustainabilityStats: StatColumn[] = [
  {
    title: "Global Vanguard of Sustainability",
    titleLines: ["Global Vanguard", "of Sustainability"],
    body: "Since 2009, they have held the distinction of being the first farm in the world to achieve certified zero CO2 emissions.",
  },
  {
    title: "Scientific Purity",
    titleLines: ["Scientific", "Purity"],
    body: "They are the first in the world to utilise DNA certification for their olives, ensuring every drop is traceable to its ancestral tree.",
  },
  {
    title: "Award-Winning Heritage",
    titleLines: ["Award-Winning", "Heritage"],
    body: "This marriage of ancient cultivation and modern innovation results in a multi-award-winning Extra Virgin Olive Oil that serves as the perfect, pristine canvas for our creative spice infusions.",
  },
];

export const awardBadges: AwardBadgeItem[] = [
  { id: "gold-1", label: "Gold Award", year: "2023" },
  { id: "gold-2", label: "Gold Award", year: "2022" },
  { id: "gold-3", label: "Gold Award", year: "2021" },
  { id: "gold-4", label: "Gold Award", year: "2020" },
  { id: "gold-5", label: "Gold Award", year: "2019" },
  { id: "gold-6", label: "Gold Award", year: "2018" },
];

export const monodoseHero = {
  imageSrc: "/images/about/Monodose.webp",
  imageAlt: "Four people tasting LK Chilli oils at a kitchen counter",
  title: "The Monodose",
} as const;

export const castelloLogo = {
  imageSrc: "/images/about/castello_Logo.avif",
  imageAlt: "Castello Monte Vibiano – Umbria",
} as const;

export const monodoseColumns: MonodoseColumn[] = [
  {
    id: "intro",
    body: "The ultimate tool for precision and freshness, designed to ignite your dish with every single drop. The greatest enemy of premium olive oil is oxidation. The moment a traditional bottle is opened, oxygen begins to degrade the delicate flavours and health benefits of the oil. To overcome this barrier, we utilise the pioneering Vibianini monodose technology.",
    bodyLines: [
      "The ultimate tool for precision and freshness,",
      "designed to ignite your dish with every single",
      "drop. The greatest enemy of premium olive oil",
      "is oxidation. The moment a traditional bottle is",
      "opened, oxygen begins to degrade the",
      "delicate flavours and health benefits of the oil.",
      "To overcome this barrier, we utilise the",
      "pioneering Vibianini monodose technology.",
    ],
  },
  {
    id: "miracle",
    title: "The 10ml Miracle",
    body: "Each single-dose vial ensures that every time you crack a seal, you are the first to experience the oil at its peak potency, as if it were just pressed.",
    bodyLines: [
      "Each single-dose vial ensures that",
      "every time you crack a seal, you are",
      "the first to experience the oil at its peak",
      "potency, as if it were just pressed.",
    ],
  },
  {
    id: "precision",
    title: "Calibrated Precision",
    body: "The monodose provides a perfect, portion controlled amount of oil and spice, preventing over-pouring and ensuring the original flavour of your dish is elevated.",
    bodyLines: [
      "The monodose provides a perfect,",
      "portion controlled amount of oil and",
      "spice, preventing over-pouring and",
      "ensuring the original flavour of your",
      "dish is elevated.",
    ],
  },
];

export const aboutHero = {
  poster: "/images/about/hero-poster.jpg",
  videoSrc: "/images/about/Lk_AboutUs.mp4",
  alt: "Three men conversing on a sofa in a warm-lit room",
} as const;
