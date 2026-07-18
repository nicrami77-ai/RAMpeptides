export type Product = {
  slug: string;
  name: string;
  strength: string;
  category: "Peptide" | "Topical" | "Solution" | "Accessory";
  form: "Vial" | "Topical" | "Bottle" | "Case" | "Accessory";
  priceUsd: number;
  tagline: string;
  description: string;
  blend?: { name: string; amount: string }[];
  image: string;
  specs: {
    purity: string;
    form: string;
    storage: string;
    notice: string;
  };
  coaUrl?: string;
  verificationKey?: string;
  comingSoon?: boolean;
  outOfStock?: boolean;
};

const NOTICE =
  "This compound is intended for research use only. Not for human or animal consumption.";

export const catalog: Product[] = [
  {
    slug: "mots-c-10mg",
    name: "MOTS-c",
    strength: "10mg",
    category: "Peptide",
    form: "Vial",
    priceUsd: 30,
    tagline:
      "16-amino-acid peptide. Lyophilized, ≥99% purity. Reference compound for in-vitro use.",
    description:
      "MOTS-c is a 16-amino-acid peptide (sequence MRWQEMGYIFYPRKLR) encoded by the mitochondrial 12S rRNA region. Approximate molecular weight 2,174 Da. Supplied as a lyophilized white powder in a sealed glass vial under inert conditions. Manufactured at ≥99% purity by HPLC and verified by independent third-party analysis (Janoshik Analytical) — lot-specific certificate of analysis available via the verification link on this page. Reconstitute with bacteriostatic or sterile water per standard peptide laboratory protocol. Reference compound supplied for in-vitro and laboratory research applications only — not for human or animal consumption.",
    image: "/products/mots-c-10mg.jpg",
    specs: {
      purity: "≥99%",
      form: "Lyophilized powder",
      storage: "Store in a dry, cool environment",
      notice: NOTICE,
    },
    coaUrl:
      "https://verify.janoshik.com/tests/136294-MOTSC_10mg_Transparent_Blue_or_BlueGreen_B56V1GF2MWAL",
  },
  {
    slug: "nad-plus-500mg",
    name: "NAD+",
    strength: "500mg (10mL)",
    category: "Peptide",
    form: "Vial",
    priceUsd: 40,
    tagline:
      "Nicotinamide Adenine Dinucleotide, 500mg lyophilized in a 10mL vial. 99% purity, third-party verified.",
    description:
      "NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme central to cellular energy metabolism, redox reactions, and sirtuin-mediated signaling. Supplied as a lyophilized powder in a sealed 10mL glass vial under inert conditions. Manufactured at 99% purity and verified by independent third-party analysis (Janoshik Analytical) — lot-specific certificate of analysis available via the verification link on this page. Reconstitute with bacteriostatic or sterile water per standard laboratory protocol. Reference compound supplied for in-vitro and laboratory research applications only — not for human or animal consumption.",
    image: "/products/nad-plus-500mg.jpg",
    specs: {
      purity: "99% by HPLC",
      form: "Lyophilized powder (10mL vial)",
      storage: "Store in a dry, cool environment",
      notice: NOTICE,
    },
    coaUrl: "https://www.janoshik.com/tests/86060_YHB7PR8E5LK9",
    verificationKey: "NAD50010272025-11",
  },
  {
    slug: "ram-3p-20mg",
    name: "RAM-3P",
    strength: "20mg",
    category: "Peptide",
    form: "Vial",
    priceUsd: 60,
    tagline:
      "20mg lyophilized peptide preparation. ≥99% purity, third-party verified.",
    description:
      "RAM-3P is a 20mg lyophilized peptide preparation supplied in a sealed glass vial. Manufactured at ≥99% purity by HPLC and verified by independent third-party analysis (Janoshik Analytical) — lot-specific certificate of analysis available via the verification link on this page. Reconstitute with bacteriostatic or sterile water per standard peptide laboratory protocol. Store as a lyophilized powder in a dry, cool environment; reconstituted material should follow standard cold-chain handling. Reference compound supplied for in-vitro and laboratory research applications only — not for human or animal consumption.",
    image: "/products/ram-3p-20mg.jpg",
    specs: {
      purity: "≥99%",
      form: "Lyophilized powder",
      storage: "Store in a dry, cool environment",
      notice: NOTICE,
    },
    coaUrl:
      "https://verify.janoshik.com/tests/122886-3P_20mg_OrangeGreen_C53DYXJAJAX3",
  },

  {
    slug: "tesamorelin-10mg",
    name: "Tesamorelin",
    strength: "10mg",
    category: "Peptide",
    form: "Vial",
    priceUsd: 40,
    tagline:
      "Growth hormone releasing hormone (GHRH) analog. 10mg lyophilized, ≥99% purity. Reference compound for in-vitro use.",
    description:
      "Tesamorelin is a 44-amino-acid synthetic analog of growth hormone-releasing hormone (GHRH). Supplied as a lyophilized white powder in a sealed glass vial under inert conditions. Manufactured at ≥99% purity by HPLC and verified by independent third-party analysis (Janoshik Analytical, batch TES1003212026-20, reported purity 99.81–99.86%) — lot-specific certificate of analysis available via the verification link on this page. Reconstitute with bacteriostatic or sterile water per standard peptide laboratory protocol. Store as a lyophilized powder in a dry, cool environment; reconstituted material should follow standard cold-chain handling. Reference compound supplied for in-vitro and laboratory research applications only — not for human or animal consumption.",
    image: "/products/tesamorelin-10mg.jpg",
    specs: {
      purity: "≥99%",
      form: "Lyophilized powder",
      storage: "Store in a dry, cool environment",
      notice: NOTICE,
    },
    coaUrl:
      "https://verify.janoshik.com/tests/133614-Tesamorelin_Transparent_Purple_or_PurpleBlue_HTZ2XRW2GWUW",
  },
  {
    slug: "pt-141-10mg",
    name: "PT-141",
    strength: "10mg",
    category: "Peptide",
    form: "Vial",
    priceUsd: 30,
    comingSoon: true,
    tagline:
      "Melanocortin receptor agonist (Bremelanotide). Lyophilized reference compound, ≥99% purity.",
    description:
      "PT-141 (Bremelanotide) is a synthetic cyclic heptapeptide analog of α-MSH, a melanocortin receptor agonist. Supplied as a lyophilized powder in a sealed glass vial under inert conditions. Manufactured at ≥99% purity by HPLC and verified by independent third-party analysis (Janoshik Analytical, batch PT1005172026-08, reported purity 99.912–99.929%) — lot-specific certificate of analysis available via the verification link on this page. Reconstitute with bacteriostatic or sterile water per standard peptide laboratory protocol. Reference compound supplied for in-vitro and laboratory research applications only — not for human or animal consumption.",
    image: "/products/pt-141-10mg.jpg",
    specs: {
      purity: "≥99%",
      form: "Lyophilized powder",
      storage: "Store in a dry, cool environment",
      notice: NOTICE,
    },
    coaUrl:
      "https://verify.janoshik.com/tests/166067-PT141_10mg_Blue_Black_TU65SPIX1XC5",
    verificationKey: "PT1005172026-08",
  },
  {
    slug: "semax-10mg",
    name: "SEMAX",
    strength: "10mg",
    category: "Peptide",
    form: "Vial",
    priceUsd: 30,
    comingSoon: true,
    tagline: "Semax 10mg lyophilized. ≥99% purity, third-party verified.",
    description:
      "SEMAX is a synthetic peptide supplied as a 10mg lyophilized powder in a sealed glass vial. Manufactured at ≥99% purity and verified by independent third-party analysis. Reference compound supplied for in-vitro and laboratory research applications only — not for human or animal consumption.",
    image: "/products/semax-10mg.jpg",
    specs: {
      purity: "≥99%",
      form: "Lyophilized powder",
      storage: "Store in a dry, cool environment",
      notice: NOTICE,
    },
  },
  {
    slug: "ipamorelin-10mg",
    name: "Ipamorelin",
    strength: "10mg",
    category: "Peptide",
    form: "Vial",
    priceUsd: 30,
    tagline: "Ipamorelin 10mg lyophilized. ≥99% purity, third-party verified.",
    description:
      "Ipamorelin is a selective growth hormone secretagogue supplied as a lyophilized powder in a sealed glass vial. Manufactured at ≥99% purity and verified by independent third-party analysis. Reference compound supplied for in-vitro and laboratory research applications only — not for human or animal consumption.",
    image: "/products/ipamorelin-10mg.jpg",
    specs: {
      purity: "≥99%",
      form: "Lyophilized powder",
      storage: "Store in a dry, cool environment",
      notice: NOTICE,
    },
  },
  {
    slug: "cjc-ipa-10mg",
    name: "CJC-1295 (No DAC)/Ipamorelin",
    strength: "10mg",
    category: "Peptide",
    form: "Vial",
    priceUsd: 35,
    tagline: "CJC-1295 (No DAC) + Ipamorelin blend 10mg lyophilized. ≥99% purity.",
    description:
      "CJC-1295 (No DAC)/Ipamorelin blend supplied as a lyophilized powder in a sealed glass vial. Manufactured at ≥99% purity and verified by independent third-party analysis. Reference compound supplied for in-vitro and laboratory research applications only — not for human or animal consumption.",
    image: "/products/cjc-ipa-10mg.jpg",
    specs: {
      purity: "≥99%",
      form: "Lyophilized powder",
      storage: "Store in a dry, cool environment",
      notice: NOTICE,
    },
  },
  {
    slug: "bpc-tb-10mg",
    name: "BPC-157 & TB-500",
    strength: "10mg (5mg/5mg)",
    category: "Peptide",
    form: "Vial",
    priceUsd: 30,
    tagline: "BPC-157 5mg + TB-500 5mg blend. ≥99% purity.",
    description:
      "BPC-157 and TB-500 blend supplied as a lyophilized powder in a sealed glass vial. Manufactured at ≥99% purity and verified by independent third-party analysis. Reference compound supplied for in-vitro and laboratory research applications only — not for human or animal consumption.",
    image: "/products/bpc-tb-10mg.jpg",
    specs: {
      purity: "≥99%",
      form: "Lyophilized powder",
      storage: "Store in a dry, cool environment",
      notice: NOTICE,
    },
  },
  {
    slug: "kpv-10mg",
    name: "KPV",
    strength: "10mg",
    category: "Peptide",
    form: "Vial",
    priceUsd: 30,
    tagline: "KPV 10mg lyophilized. ≥99% purity, third-party verified.",
    description:
      "KPV (Lysine-Proline-Valine) supplied as a lyophilized powder in a sealed glass vial. Manufactured at ≥99% purity and verified by independent third-party analysis. Reference compound supplied for in-vitro and laboratory research applications only — not for human or animal consumption.",
    image: "/products/kpv-10mg.jpg",
    specs: {
      purity: "≥99%",
      form: "Lyophilized powder",
      storage: "Store in a dry, cool environment",
      notice: NOTICE,
    },
  },
  {
    slug: "ghk-cu-50mg",
    name: "GHK-Cu",
    strength: "50mg",
    category: "Peptide",
    form: "Vial",
    priceUsd: 25,
    tagline: "GHK-Cu 50mg topical / injectable. ≥99% purity.",
    description:
      "GHK-Cu (Copper Tripeptide-1) supplied as a lyophilized powder in a sealed glass vial. Manufactured at ≥99% purity and verified by independent third-party analysis. Reference compound supplied for in-vitro and laboratory research applications only — not for human or animal consumption.",
    image: "/products/ghk-cu-50mg.jpg",
    specs: {
      purity: "≥99%",
      form: "Lyophilized powder",
      storage: "Store in a dry, cool environment",
      notice: NOTICE,
    },
  },
  {
    slug: "melanotan-1-10mg",
    name: "Melanotan-1",
    strength: "10mg",
    category: "Peptide",
    form: "Vial",
    priceUsd: 30,
    tagline: "Alpha-MSH analog. Lyophilized reference compound, ≥99% purity.",
    description: "Melanotan-1 (Afamelanotide) is a synthetic peptide analog of alpha-melanocyte-stimulating hormone (α-MSH). Supplied as a lyophilized powder in a sealed glass vial. Manufactured at ≥99% purity and verified by independent third-party analysis. Reference compound supplied for in-vitro and laboratory research applications only — not for human or animal consumption.",
    image: "/products/melanotan-10mg.jpg",
    specs: {
      purity: "≥99%",
      form: "Lyophilized powder",
      storage: "Store in a dry, cool environment",
      notice: NOTICE,
    },
  },
  {
    slug: "melanotan-2-10mg",
    name: "Melanotan-2",
    strength: "10mg",
    category: "Peptide",
    form: "Vial",
    priceUsd: 30,
    comingSoon: true,
    tagline: "Alpha-MSH analog. Lyophilized reference compound, ≥99% purity.",
    description: "Melanotan-2 (MT-2) is a synthetic cyclic heptapeptide analog of alpha-melanocyte-stimulating hormone (α-MSH). Supplied as a lyophilized powder in a sealed glass vial. Manufactured at ≥99% purity and verified by independent third-party analysis. Reference compound supplied for in-vitro and laboratory research applications only — not for human or animal consumption.",
    image: "/products/melanotan-10mg.jpg",
    specs: {
      purity: "≥99%",
      form: "Lyophilized powder",
      storage: "Store in a dry, cool environment",
      notice: NOTICE,
    },
  },
  {
    slug: "superhuman-blend-10ml",
    name: "Super Human Blend",
    strength: "10mL",
    category: "Peptide",
    form: "Bottle",
    priceUsd: 25,
    tagline: "Premixed liquid amino acid blend. 10mL research compound.",
    description: "Super Human Blend is a premixed liquid amino acid blend sold for research purposes. Supplied in a 10mL glass bottle. Intended for laboratory research applications. Not for human or animal consumption.",
    blend: [
      { name: "L-Carnitine", amount: "220 mg/mL" },
      { name: "L-Citrulline", amount: "120 mg/mL" },
      { name: "L-Arginine", amount: "110 mg/mL" },
      { name: "L-Ornithine", amount: "110 mg/mL" },
      { name: "L-Lysine", amount: "70 mg/mL" },
      { name: "N-Acetylcysteine (NAC)", amount: "75 mg/mL" },
      { name: "L-Proline", amount: "60 mg/mL" },
      { name: "L-Taurine", amount: "60 mg/mL" },
      { name: "L-Glutamine", amount: "40 mg/mL" }
    ],
    image: "/products/superhuman-blend-10ml.jpg",
    specs: {
      purity: "Liquid amino acid blend",
      form: "Liquid",
      storage: "Store in a dry, cool environment",
      notice: NOTICE,
    },
  },
  {
    slug: "cagrilintide-5mg",
    name: "Cagrilintide",
    strength: "5mg",
    category: "Peptide",
    form: "Vial",
    priceUsd: 35,
    tagline: "Amylin analog. Lyophilized reference compound, ≥99% purity.",
    description: "Cagrilintide is a long-acting synthetic amylin analog. Supplied as a lyophilized powder in a sealed glass vial. Manufactured at ≥99% purity and verified by independent third-party analysis. Reference compound supplied for in-vitro and laboratory research applications only — not for human or animal consumption.",
    image: "/products/cagrilintide-5mg.jpg",
    specs: {
      purity: "≥99%",
      form: "Lyophilized powder",
      storage: "Store in a dry, cool environment",
      notice: NOTICE,
    },
  },

  {
    slug: "rubber-caps",
    name: "Rubber Vial Caps",
    strength: "5-pack",
    category: "Accessory",
    form: "Accessory",
    priceUsd: 3,
    tagline: "Colorful rubber vial caps. 5-pack.",
    description:
      "Assorted colorful rubber caps for peptide vials. Sold in packs of 5. Accessory only.",
    image: "/products/rubber-caps.jpg",
    specs: {
      purity: "Food-grade rubber",
      form: "Rubber caps",
      storage: "Room temperature",
      notice: "Accessory only.",
    },
  },
  {
    slug: "reconstitution-vial-10ml",
    name: "Reconstitution Vial",
    strength: "10mL",
    category: "Solution",
    form: "Bottle",
    priceUsd: 1,
    tagline: "Empty 10mL vial for custom peptide blends.",
    description:
      "Empty 10mL reconstitution vial. Standalone product for customers building custom blends. Not a research compound.",
    image: "/products/bac-10ml.jpg",
    specs: {
      purity: "Borosilicate glass vial",
      form: "Empty vial",
      storage: "Room temperature",
      notice: "Empty vial only. For research use.",
    },
  },
  {
    slug: "reconstitution-water-30ml",
    name: "Reconstitution Solution",
    strength: "30mL",
    category: "Solution",
    form: "Bottle",
    priceUsd: 15,
    tagline:
      "Deionized water with 0.9% benzyl alcohol in USP-grade borosilicate glass vials.",
    description:
      "Reconstitution solution supplied as deionized water with 0.9% benzyl alcohol preservative in USP-grade borosilicate glass vials, 30mL per unit. Intended for use in laboratory reconstitution of lyophilized peptide reference compounds prior to in-vitro analysis. Manufactured to standard laboratory specifications and supplied for research applications only. Store at room temperature, shielded from prolonged light exposure. Not for human or animal consumption.",
    image: "/products/reconstitution-water-30ml.jpg",
    specs: {
      purity: "USP-grade water · 0.9% benzyl alcohol preservative",
      form: "Liquid · borosilicate glass vial",
      storage: "Store at room temperature, shielded from light",
      notice: NOTICE,
    },
  },
  {
    slug: "vault-case",
    name: "RAMpeptides Vault Case",
    strength: "4-vial",
    category: "Accessory",
    form: "Case",
    priceUsd: 2,
    tagline:
      "Clear pharmaceutical-grade 4-vial storage case. Hinged snap lid. Free gift with any order of 2 or more peptide vials.",
    description:
      "Compact 4-cavity vial storage case in clear pharmaceutical-grade plastic with a hinged snap lid. Holds four standard 3-10mL peptide vials securely upright — ideal for travel, fridge organization, and protecting glass vials in transit. Automatically included free with the purchase of 2 or more peptide vials. Storage accessory only; not a research compound.",
    image: "/products/vault-case.jpg",
    specs: {
      purity: "Pharmaceutical-grade clear plastic",
      form: "Hinged snap-top 4-cavity case",
      storage: "Room temperature",
      notice:
        "Storage accessory only. Automatically included free with the purchase of 2 or more peptide vials.",
    },
  },
];

export function getProduct(slug: string): Product | undefined {
  return catalog.find((p) => p.slug === slug);
}
