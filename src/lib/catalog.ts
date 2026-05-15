export type Product = {
  slug: string;
  name: string;
  strength: string;
  category: "Peptide" | "Topical";
  form: "Vial" | "Topical";
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
  coaUrl: string;
  verificationKey?: string;
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
];

export function getProduct(slug: string): Product | undefined {
  return catalog.find((p) => p.slug === slug);
}
