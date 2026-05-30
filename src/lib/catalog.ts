export type Product = {
  slug: string;
  name: string;
  strength: string;
  category: "Peptide" | "Topical" | "Solution" | "Accessory";
  form: "Vial" | "Topical" | "Bottle" | "Case";
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
    comingSoon: true,
    strength: "500mg",
    category: "Peptide",
    form: "Vial",
    priceUsd: 40,
    tagline:
      "Nicotinamide Adenine Dinucleotide, 500mg lyophilized. 99% purity, third-party verified.",
    description:
      "NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme central to cellular energy metabolism, redox reactions, and sirtuin-mediated signaling. Supplied as a lyophilized powder in a sealed glass vial under inert conditions. Manufactured at 99% purity and verified by independent third-party analysis (Janoshik Analytical) — lot-specific certificate of analysis available via the verification link on this page. Reconstitute with bacteriostatic or sterile water per standard laboratory protocol. Reference compound supplied for in-vitro and laboratory research applications only — not for human or animal consumption.",
    image: "/products/nad-plus-500mg.jpg",
    specs: {
      purity: "99% by HPLC",
      form: "Lyophilized powder",
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
    slug: "klow-80mg",
    name: "KLOW",
    outOfStock: true,
    strength: "80mg",
    category: "Peptide",
    form: "Vial",
    priceUsd: 60,
    tagline:
      "80mg lyophilized 4-peptide reference preparation. ≥99% purity, third-party verified.",
    description:
      "KLOW is a 4-peptide lyophilized reference preparation totaling 80mg per vial: GHK-Cu (glycyl-L-histidyl-L-lysine, copper-bound tripeptide) 50mg, BPC-157 (15-residue partial sequence of body-protection compound) 10mg, TB4 (Thymosin Beta-4, 43-residue peptide) 10mg, and KPV (lysine-proline-valine tripeptide) 10mg. Supplied in a sealed glass vial under inert conditions. Manufactured at ≥99% purity by HPLC and verified by independent third-party analysis (Janoshik Analytical) — lot-specific certificate of analysis available via the verification link on this page. Reconstitute with bacteriostatic or sterile water per standard peptide laboratory protocol. Reference preparation supplied for in-vitro and laboratory research applications only — not for human or animal consumption.",
    blend: [
      { name: "GHK-Cu", amount: "50mg" },
      { name: "BPC-157", amount: "10mg" },
      { name: "TB4 (Thymosin Beta-4)", amount: "10mg" },
      { name: "KPV", amount: "10mg" },
    ],
    image: "/products/klow-80mg.jpg",
    specs: {
      purity: "≥99%",
      form: "Lyophilized powder",
      storage: "Store in a dry, cool environment",
      notice: NOTICE,
    },
    coaUrl: "https://verify.janoshik.com/tests/91272_UXY2JK45ZFE7",
  },
  {
    slug: "glow-70mg",
    name: "GLOW",
    comingSoon: true,
    strength: "70mg",
    category: "Peptide",
    form: "Vial",
    priceUsd: 50,
    tagline:
      "70mg lyophilized 3-peptide regenerative blend. ≥100% verified content, third-party analyzed.",
    description:
      "GLOW is a 3-peptide lyophilized reference preparation totaling 70mg per vial: GHK-Cu (glycyl-L-histidyl-L-lysine, copper-bound tripeptide) 50mg, BPC-157 (15-residue partial sequence of body-protection compound) 10mg, and TB-500 / TB4 (Thymosin Beta-4, 43-residue peptide) 10mg. Supplied in a sealed glass vial under inert conditions. Manufactured at high purity and verified by independent third-party analysis (Janoshik Analytical) — lot-specific certificate of analysis available via the verification link on this page. Reconstitute with bacteriostatic or sterile water per standard peptide laboratory protocol. Reference preparation supplied for in-vitro and laboratory research applications only — not for human or animal consumption.",
    blend: [
      { name: "GHK-Cu", amount: "50mg" },
      { name: "BPC-157", amount: "10mg" },
      { name: "TB-500 (Thymosin Beta-4)", amount: "10mg" },
    ],
    image: "/products/glow-70mg.jpg",
    specs: {
      purity: "≥100% verified content by HPLC",
      form: "Lyophilized powder",
      storage: "Store in a dry, cool environment",
      notice: NOTICE,
    },
    coaUrl:
      "https://verify.janoshik.com/tests/167755-GLOW_Blend_50mg10mg10mg_Transparent_Black_X4LBB8M4KU3E",
    verificationKey: "GLOW09062025-04",
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
    slug: "ghk-cu-1g-topical",
    name: "GHK-Cu",
    strength: "1g topical",
    category: "Topical",
    form: "Topical",
    priceUsd: 30,
    tagline:
      "Copper-binding tripeptide in topical / cosmetic-formulation grade. 1g, ≥99% purity.",
    description:
      "GHK-Cu is a copper-bound tripeptide — glycyl-L-histidyl-L-lysine complexed with Cu(II). Approximate molecular weight 340.8 Da (peptide) / 401.9 Da (copper complex). This is the cosmetic / topical formulation, supplied as a 1g topical solution in a plastic dropper bottle for laboratory formulation and ex-vivo / topical research applications. Manufactured at ≥99% purity (third-party verified by Janoshik Analytical, report 99.853% purity — lot-specific certificate of analysis available via the verification link on this page). Store cool and shielded from prolonged light exposure. For research and topical formulation use only — not for ingestion or injection.",
    image: "/products/ghk-cu-1g-topical.jpg",
    specs: {
      purity: "≥99%",
      form: "Topical solution",
      storage: "Store in a cool, dark environment",
      notice: NOTICE,
    },
    coaUrl: "https://verify.janoshik.com/tests/45705_5D4PRB9I93G9",
    verificationKey: "5D4PRB9I93G9",
  },
  {
    slug: "pt-141-10mg",
    name: "PT-141",
    strength: "10mg",
    category: "Peptide",
    form: "Vial",
    priceUsd: 30,
    tagline:
      "Melanocortin receptor agonist (Bremelanotide). Lyophilized reference compound, ≥99% purity.",
    description:
      "PT-141 (Bremelanotide) is a synthetic cyclic heptapeptide analog of α-MSH, a melanocortin receptor agonist. Supplied as a lyophilized powder in a sealed glass vial under inert conditions. Manufactured at ≥99% purity by HPLC and verified by independent third-party analysis (Janoshik Analytical). Reconstitute with bacteriostatic or sterile water per standard peptide laboratory protocol. Reference compound supplied for in-vitro and laboratory research applications only — not for human or animal consumption.",
    image: "/products/pt-141-10mg.jpg",
    specs: {
      purity: "≥99%",
      form: "Lyophilized powder",
      storage: "Store in a dry, cool environment",
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
  {
    slug: "reconstitution-water-30ml",
    name: "Reconstitution Solution",
    strength: "30mL",
    category: "Solution",
    form: "Bottle",
    priceUsd: 14,
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
];

export function getProduct(slug: string): Product | undefined {
  return catalog.find((p) => p.slug === slug);
}
