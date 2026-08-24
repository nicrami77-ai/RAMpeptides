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
  /** Optional laboratory handling notes for multi-vial kits. Research use only. */
  labProtocol?: {
    title: string;
    steps: string[];
    notice?: string;
  };
  image: string;
  /** How the product photo fills the 4:5 frame. Default cover. Use contain for wide multi-vial kit shots. */
  imageFit?: "cover" | "contain";
  specs: {
    purity: string;
    form: string;
    storage: string;
    notice: string;
    /** Optional override for the blurb under the Specifications heading. */
    intro?: string;
  };
  coaUrl?: string;
  verificationKey?: string;
  comingSoon?: boolean;
  outOfStock?: boolean;
  stockStatus?: string;
};

const NOTICE =
  "This compound is intended for research use only. Not for human or animal consumption.";

export const catalog: Product[] = [
  {
    slug: "duo-blend-20mg",
    name: "DUO-BLEND",
    strength: "20mg kit",
    category: "Peptide",
    form: "Vial",
    priceUsd: 70,
    tagline:
      "Kit includes: 1× Tesamorelin 10mg vial, 1× Ipamorelin 10mg vial, 1× empty 10mL DUO-BLEND reconstitution vial.",
    description:
      "DUO-BLEND ships as a three-piece research kit: one Tesamorelin 10mg vial, one Ipamorelin 10mg vial, and one empty 10mL DUO-BLEND reconstitution vial. Total peptide content 20mg (Tesamorelin 10mg / Ipamorelin 10mg). Each peptide component is lyophilized powder manufactured at ≥99% purity. Reference compounds supplied for in-vitro and laboratory research applications only — not for human or animal consumption.",
    blend: [
      { name: "Tesamorelin vial", amount: "1 × 10mg" },
      { name: "Ipamorelin vial", amount: "1 × 10mg" },
      { name: "Empty DUO-BLEND reconstitution vial", amount: "1 × 10mL" },
    ],
    labProtocol: {
      title: "Laboratory combination protocol (research use only)",
      steps: [
        "Reconstitute each peptide separately with bacteriostatic water using sterile laboratory technique.",
        "Draw the desired volume of each reconstituted solution into separate sterile syringes.",
        "Transfer both solutions into the included sterile empty 10mL DUO-BLEND vial (or into one of the original vials if headspace allows).",
        "Gently swirl to combine — do not shake.",
        "Label the combined vial with component identity, exact ratio, total peptide content, reconstitution date, and final concentration.",
        "Store refrigerated at 2–8 °C. Use within the typical stability window for reconstituted research peptides (commonly cited as approximately 28–45 days, depending on handling and storage conditions).",
      ],
      notice:
        "For in-vitro and laboratory research applications only. Not a drug, not a dietary supplement, and not for human or animal use, injection, or consumption. No medical, therapeutic, or dosing claims are made.",
    },
    image: "/products/duo-blend-20mg.jpg",
    specs: {
      purity: "≥99%",
      form: "Kit — 1 Tesamorelin vial + 1 Ipamorelin vial + 1 empty 10mL DUO-BLEND recon vial",
      storage: "Store in a dry, cool environment",
      notice: NOTICE,
      intro:
        "Each order includes one Tesamorelin 10mg vial, one Ipamorelin 10mg vial, and one empty 10mL DUO-BLEND reconstitution vial (Tesamorelin 10mg / Ipamorelin 10mg).",
    },
  },
  {
    slug: "tri-blend-20mg",
    name: "TRI-BLEND",
    strength: "20mg kit",
    category: "Peptide",
    form: "Vial",
    priceUsd: 75,
    tagline:
      "Kit includes: 1× Tesamorelin 10mg vial, 1× CJC/IPA 10mg vial, 1× empty 10mL TRI-BLEND reconstitution vial.",
    description:
      "TRI-BLEND ships as a three-piece research kit: one Tesamorelin 10mg vial, one CJC-1295 (No DAC)/Ipamorelin 10mg vial (CJC 5mg + Ipamorelin 5mg), and one empty 10mL TRI-BLEND reconstitution vial. Total peptide content 20mg (Tesa 10 / CJC 5 / Ipa 5). Each peptide component is lyophilized powder manufactured at ≥99% purity. Reconstitute with bacteriostatic or sterile water per standard peptide laboratory protocol. Reference compounds supplied for in-vitro and laboratory research applications only — not for human or animal consumption.",
    blend: [
      { name: "Tesamorelin vial", amount: "1 × 10mg" },
      { name: "CJC/IPA vial", amount: "1 × 10mg (5mg/5mg)" },
      { name: "Empty TRI-BLEND reconstitution vial", amount: "1 × 10mL" },
    ],
    labProtocol: {
      title: "Laboratory combination protocol (research use only)",
      steps: [
        "Reconstitute each peptide separately with bacteriostatic water using sterile laboratory technique.",
        "Draw the desired volume of each reconstituted solution into separate sterile syringes.",
        "Transfer both solutions into the included sterile empty 10mL TRI-BLEND vial (or into one of the original vials if headspace allows).",
        "Gently swirl to combine — do not shake.",
        "Label the combined vial with component identity, exact ratio, total peptide content, reconstitution date, and final concentration.",
        "Store refrigerated at 2–8 °C. Use within the typical stability window for reconstituted research peptides (commonly cited as approximately 28–45 days, depending on handling and storage conditions).",
      ],
      notice:
        "For in-vitro and laboratory research applications only. Not a drug, not a dietary supplement, and not for human or animal use, injection, or consumption. No medical, therapeutic, or dosing claims are made.",
    },
    image: "/products/tri-blend-20mg.jpg",
    specs: {
      purity: "≥99%",
      form: "Kit — 1 Tesamorelin vial + 1 CJC/IPA vial + 1 empty 10mL TRI-BLEND recon vial",
      storage: "Store in a dry, cool environment",
      notice: NOTICE,
      intro:
        "Each order includes one Tesamorelin 10mg vial, one CJC/IPA 10mg vial, and one empty 10mL TRI-BLEND reconstitution vial (Tesa 10 / CJC 5 / Ipa 5).",
    },
  },
  {
    slug: "glow-70mg",
    name: "GLOW",
    strength: "70mg kit",
    category: "Peptide",
    form: "Vial",
    priceUsd: 55,
    tagline:
      "Kit includes: 1× GHK-Cu 50mg, 1× BPC-157/TB-500 10mg (5mg/5mg), 1× empty 10mL reconstitution vial.",
    description:
      "GLOW ships as a three-piece research kit: one GHK-Cu 50mg vial, one BPC-157 & TB-500 10mg (5mg/5mg) vial, and one empty 10mL reconstitution vial. Each peptide component is lyophilized powder manufactured at ≥99% purity. Reference compounds supplied for in-vitro and laboratory research applications only — not for human or animal consumption.",
    blend: [
      { name: "GHK-Cu vial", amount: "1 × 50mg" },
      { name: "BPC-157 & TB-500 vial", amount: "1 × 10mg (5mg/5mg)" },
      { name: "Empty reconstitution vial", amount: "1 × 10mL" },
    ],
    labProtocol: {
      title: "Laboratory combination protocol (research use only)",
      steps: [
        "Reconstitute each peptide vial separately with bacteriostatic water using sterile laboratory technique.",
        "Draw the desired volume of each reconstituted solution into separate sterile syringes.",
        "Transfer the solutions into the included sterile empty 10mL vial (or into one of the original vials if headspace allows).",
        "Gently swirl to combine — do not shake.",
        "Label the combined vial with component identity, exact ratio, total peptide content, reconstitution date, and final concentration.",
        "Store refrigerated at 2–8 °C. Use within the typical stability window for reconstituted research peptides (commonly cited as approximately 28–45 days, depending on handling and storage conditions).",
      ],
      notice:
        "For in-vitro and laboratory research applications only. Not a drug, not a dietary supplement, and not for human or animal use, injection, or consumption. No medical, therapeutic, or dosing claims are made.",
    },
    image: "/products/glow-70mg.jpg",
    specs: {
      purity: "≥99%",
      form: "Kit — 1 GHK-Cu vial + 1 BPC/TB vial + 1 empty 10mL recon vial",
      storage: "Store in a dry, cool environment",
      notice: NOTICE,
      intro:
        "Each order includes one GHK-Cu 50mg vial, one BPC-157 & TB-500 10mg (5mg/5mg) vial, and one empty 10mL reconstitution vial.",
    },
  },
  {
    slug: "klow-80mg",
    name: "KLOW",
    strength: "80mg kit",
    category: "Peptide",
    form: "Vial",
    priceUsd: 85,
    tagline:
      "Kit includes: 1× GHK-Cu 50mg, 1× BPC-157/TB-500 10mg (5mg/5mg), 1× KPV 10mg, 1× empty 10mL reconstitution vial.",
    description:
      "KLOW ships as a four-piece research kit: one GHK-Cu 50mg vial, one BPC-157 & TB-500 10mg (5mg/5mg) vial, one KPV 10mg vial, and one empty 10mL reconstitution vial. Each peptide component is lyophilized powder manufactured at ≥99% purity. Reference compounds supplied for in-vitro and laboratory research applications only — not for human or animal consumption.",
    blend: [
      { name: "GHK-Cu vial", amount: "1 × 50mg" },
      { name: "BPC-157 & TB-500 vial", amount: "1 × 10mg (5mg/5mg)" },
      { name: "KPV vial", amount: "1 × 10mg" },
      { name: "Empty reconstitution vial", amount: "1 × 10mL" },
    ],
    labProtocol: {
      title: "Laboratory combination protocol (research use only)",
      steps: [
        "Reconstitute each peptide vial separately with bacteriostatic water using sterile laboratory technique.",
        "Draw the desired volume of each reconstituted solution into separate sterile syringes.",
        "Transfer the solutions into the included sterile empty 10mL vial (or into one of the original vials if headspace allows).",
        "Gently swirl to combine — do not shake.",
        "Label the combined vial with component identity, exact ratio, total peptide content, reconstitution date, and final concentration.",
        "Store refrigerated at 2–8 °C. Use within the typical stability window for reconstituted research peptides (commonly cited as approximately 28–45 days, depending on handling and storage conditions).",
      ],
      notice:
        "For in-vitro and laboratory research applications only. Not a drug, not a dietary supplement, and not for human or animal use, injection, or consumption. No medical, therapeutic, or dosing claims are made.",
    },
    image: "/products/klow-80mg.jpg",
    specs: {
      purity: "≥99%",
      form: "Kit — 1 GHK-Cu + 1 BPC/TB + 1 KPV + 1 empty 10mL recon vial",
      storage: "Store in a dry, cool environment",
      notice: NOTICE,
      intro:
        "Each order includes one GHK-Cu 50mg vial, one BPC-157 & TB-500 10mg (5mg/5mg) vial, one KPV 10mg vial, and one empty 10mL reconstitution vial.",
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
    slug: "ram-3p-20mg",
    name: "RAM-3P",
    strength: "20mg",
    category: "Peptide",
    form: "Vial",
    priceUsd: 60,
    stockStatus: "Ships on August 18th",
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
    slug: "ram-1p-15mg",
    name: "RAM-1P",
    strength: "15mg",
    category: "Peptide",
    form: "Vial",
    priceUsd: 35,
    tagline:
      "15mg lyophilized peptide preparation. ≥99% purity, research reference compound.",
    description:
      "RAM-1P is a 15mg lyophilized peptide preparation supplied in a sealed glass vial. Manufactured at ≥99% purity. Label lot exp. June 23, 2028. Reconstitute with bacteriostatic or sterile water per standard peptide laboratory protocol. Store as a lyophilized powder in a dry, cool environment; reconstituted material should follow standard cold-chain handling. Reference compound supplied for in-vitro and laboratory research applications only — not for human or animal consumption.",
    image: "/products/ram-1p-15mg.jpg",
    specs: {
      purity: "≥99%",
      form: "Lyophilized powder",
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
    slug: "ghk-cu-50mg",
    name: "GHK-Cu",
    strength: "50mg",
    category: "Peptide",
    form: "Vial",
    priceUsd: 25,
    tagline:
      "Copper tripeptide-1 (GHK-Cu). 50mg lyophilized, 99% purity. Reference compound for in-vitro use.",
    description:
      "GHK-Cu (Copper Tripeptide-1) is a copper-binding glycyl-L-histidyl-L-lysine complex studied in extracellular matrix, skin biology, and regenerative research models. Supplied as a lyophilized powder in a sealed glass vial under inert conditions. Manufactured at 99% purity (batch GHK5005072026-14). Reconstitute with bacteriostatic or sterile water per standard peptide laboratory protocol. Store as a lyophilized powder in a dry, cool environment; reconstituted material should follow standard cold-chain handling. Reference compound supplied for in-vitro and laboratory research applications only — not for human or animal consumption.",
    image: "/products/ghk-cu-50mg-v5.jpg",
    specs: {
      purity: "99%",
      form: "Lyophilized powder",
      storage: "Store in a dry, cool environment",
      notice: NOTICE,
    },
    verificationKey: "GHK5005072026-14",
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
    slug: "ss-31-10mg",
    name: "SS-31",
    strength: "10mg",
    category: "Peptide",
    form: "Vial",
    priceUsd: 30,
    outOfStock: true,
    tagline:
      "Mitochondria-targeting tetrapeptide (Elamipretide). Lyophilized, ≥99% purity.",
    description:
      "SS-31 (Elamipretide) is a mitochondria-targeting aromatic-cationic tetrapeptide studied for its interaction with cardiolipin on the inner mitochondrial membrane. Supplied as a lyophilized powder in a sealed glass vial under inert conditions. Manufactured at ≥99% purity. Reconstitute with bacteriostatic or sterile water per standard peptide laboratory protocol. Reference compound supplied for in-vitro and laboratory research applications only — not for human or animal consumption.",
    image: "/products/ss-31-10mg.jpg",
    specs: {
      purity: "≥99%",
      form: "Lyophilized powder",
      storage: "Store in a dry, cool environment",
      notice: NOTICE,
    },
  },
  {
    slug: "semax-10mg",
    name: "SEMAX",
    strength: "10mg",
    category: "Peptide",
    form: "Vial",
    priceUsd: 30,
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
    slug: "dsip-5mg",
    name: "DSIP",
    strength: "5mg",
    category: "Peptide",
    form: "Vial",
    priceUsd: 30,
    tagline:
      "Delta Sleep-Inducing Peptide. 5mg lyophilized, ≥99% purity.",
    description:
      "DSIP (Delta Sleep-Inducing Peptide) is a nonapeptide originally isolated from cerebral venous blood and studied in sleep-regulation and neuroendocrine research models. Supplied as a lyophilized powder in a sealed glass vial under inert conditions. Manufactured at ≥99% purity. Reconstitute with bacteriostatic or sterile water per standard peptide laboratory protocol. Reference compound supplied for in-vitro and laboratory research applications only — not for human or animal consumption.",
    image: "/products/dsip-5mg.jpg",
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
    slug: "pt-141-10mg",
    name: "PT-141",
    strength: "10mg",
    category: "Peptide",
    form: "Vial",
    priceUsd: 30,
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
    slug: "ara-290-10mg",
    name: "ARA-290",
    strength: "10mg",
    category: "Peptide",
    form: "Vial",
    priceUsd: 35,
    tagline:
      "EPO-derived helix-B surface peptide (Cibinetide). Lyophilized, ≥99% purity.",
    description:
      "ARA-290 (Cibinetide) is an 11-amino-acid peptide derived from the helix-B surface of erythropoietin, studied for tissue-protective and innate-repair receptor (IRR) research applications without classical hematopoietic EPO activity. Supplied as a lyophilized powder in a sealed glass vial under inert conditions. Manufactured at ≥99% purity. Reconstitute with bacteriostatic or sterile water per standard peptide laboratory protocol. Reference compound supplied for in-vitro and laboratory research applications only — not for human or animal consumption.",
    image: "/products/ara-290-10mg.jpg",
    specs: {
      purity: "≥99%",
      form: "Lyophilized powder",
      storage: "Store in a dry, cool environment",
      notice: NOTICE,
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
    slug: "ghk-cu-blue-copper-serum-10ml",
    name: "GHK-Cu Blue Copper Serum",
    strength: "10mL",
    category: "Topical",
    form: "Topical",
    priceUsd: 12,
    tagline:
      "SYLAX GHK-Cu blue copper peptide serum in an amber glass dropper bottle. 10mL.",
    description:
      "SYLAX GHK-Cu (Blue Copper Peptide) serum supplied in a 10mL amber glass dropper bottle with black bulb pipette. Formulated as a topical copper-peptide research preparation. Store upright at room temperature, away from prolonged light and heat. Reference material supplied for laboratory and research applications only — not for human or animal consumption.",
    image: "/products/ghk-cu-blue-copper-serum-10ml.jpg",
    specs: {
      purity: "Copper peptide serum",
      form: "Liquid serum · amber glass dropper bottle",
      storage: "Store upright at room temperature, shielded from light",
      notice: NOTICE,
    },
  },
  {
    slug: "ghk-cu-blue-copper-serum-30ml",
    name: "GHK-Cu Blue Copper Serum",
    strength: "30mL",
    category: "Topical",
    form: "Topical",
    priceUsd: 30,
    tagline:
      "SYLAX GHK-Cu blue copper peptide serum in an amber glass dropper bottle. 1 oz / 30mL.",
    description:
      "SYLAX GHK-Cu (Blue Copper Peptide) serum supplied in a 1 oz (30mL) amber glass dropper bottle with black bulb pipette. Formulated as a topical copper-peptide research preparation. Store upright at room temperature, away from prolonged light and heat. Reference material supplied for laboratory and research applications only — not for human or animal consumption.",
    image: "/products/ghk-cu-blue-copper-serum-30ml.jpg",
    specs: {
      purity: "Copper peptide serum",
      form: "Liquid serum · amber glass dropper bottle",
      storage: "Store upright at room temperature, shielded from light",
      notice: NOTICE,
    },
  },
  {
    slug: "vault-case",
    name: "RAMpeptides Vault Case",
    strength: "4-vial",
    category: "Accessory",
    form: "Case",
    priceUsd: 1,
    tagline:
      "Clear pharmaceutical-grade 4-vial storage case. Snap lid. Free gift with any order of 2 or more peptide vials.",
    description:
      "Compact 4-cavity vial storage case in clear pharmaceutical-grade plastic with a snap lid. Holds four standard 3-10mL peptide vials securely upright — ideal for travel, fridge organization, and protecting glass vials in transit. Automatically included free with the purchase of 2 or more peptide vials. Storage accessory only; not a research compound.",
    image: "/products/vault-case.jpg",
    specs: {
      purity: "Pharmaceutical-grade clear plastic",
      form: "Snap-top 4-cavity case",
      storage: "Room temperature",
      notice:
        "Storage accessory only. Automatically included free with the purchase of 2 or more peptide vials.",
    },
  },
  {
    slug: "rampeptides-tin",
    name: "RAMpeptides Tin",
    strength: "Premium Storage",
    category: "Accessory",
    form: "Accessory",
    priceUsd: 15,
    comingSoon: true,
    tagline:
      "CNC-machined aluminum alloy snus / nicotine pouch tin. External thread, black finish, RAMpeptides branded.",
    description:
      "Premium CNC-machined aluminum alloy tin for snus and nicotine pouch storage. External thread design, durable construction, black finish with RAMpeptides crest. Dimensions: 7.5 × 7.5 × 4 cm. Weight: 0.1 kg. High-quality reusable storage tin. Merch accessory only; not a research compound.",
    image: "/products/RAMpeptides-tin.jpg",
    specs: {
      purity: "CNC-machined aluminum alloy",
      form: "External thread tin can (7.5 × 7.5 × 4 cm, 0.1 kg)",
      storage: "Room temperature",
      notice: "Merch / storage accessory only.",
    },
  },
  {
    slug: "slim-can-cooler",
    name: "Slim Can Cooler",
    strength: "2-in-1",
    category: "Accessory",
    form: "Accessory",
    priceUsd: 20,
    tagline:
      "Double-walled stainless steel slim can cooler with RAMpeptides logo. Limited stock — only 1 available.",
    description:
      "RAMpeptides slim can cooler / insulator in double-walled stainless steel. Fits standard slim cans and works as a 2-in-1 insulated can cooler cup. Features the RAMpeptides. Limited stock: only 1 available. Merch accessory only; not a research compound.",
    image: "/products/slim-can-cooler.jpg",
    specs: {
      purity: "Double-walled stainless steel",
      form: "Slim can cooler · 2-in-1 cup",
      storage: "Room temperature",
      notice: "Merch accessory only. Limited stock: 1 available.",
      intro:
        "Manufactured solely for professional laboratory testing and research environments to keep your drinks colder longer. Don’t over think this Karen.",
    },
  },
  {
    slug: "slim-can-cooler-crest",
    name: "Slim Can Cooler",
    strength: "2-in-1 · Crest",
    category: "Accessory",
    form: "Accessory",
    priceUsd: 20,
    tagline:
      "Double-walled stainless steel slim can cooler with RAMpeptides crest logo. Limited stock — only 1 available.",
    description:
      "RAMpeptides slim can cooler / insulator in double-walled stainless steel. Fits standard slim cans and works as a 2-in-1 insulated can cooler cup. Features the RAMpeptides crest logo. Limited stock: only 1 available. Merch accessory only; not a research compound.",
    image: "/products/slim-can-cooler-crest.jpg",
    specs: {
      purity: "Double-walled stainless steel",
      form: "Slim can cooler · 2-in-1 cup",
      storage: "Room temperature",
      notice: "Merch accessory only. Limited stock: 1 available.",
      intro:
        "Manufactured solely for professional laboratory testing and research environments to keep your drinks colder longer. Don’t over think this Karen.",
    },
  },
  {
    slug: "workout-tshirt-2xl",
    name: "RAMpeptides Workout T-Shirt",
    strength: "2XL · White",
    category: "Accessory",
    form: "Accessory",
    priceUsd: 15,
    tagline:
      "White RAMpeptides workout tee with American flag logo. Size 2XL. Limited stock — 2 available.",
    description:
      "RAMpeptides workout t-shirt in white with the RAMpeptides American flag logo printed on the chest. Soft athletic-style tee for training or casual wear. Currently offered in size 2XL. Limited stock: 2 available. Merch accessory only; not a research compound.",
    image: "/products/workout-tshirt-2xl.jpg",
    specs: {
      purity: "Cotton blend athletic tee",
      form: "T-shirt · size 2XL · white",
      storage: "Machine wash cold, tumble dry low",
      notice: "Merch accessory only. Limited stock: 2 available.",
      intro:
        "Manufactured for you to sweat in, it is intended solely for professional gym bros, laboratory testing and research environments.",
    },
  },
  {
    slug: "workout-tshirt-red-2xl",
    name: "RAMpeptides Workout T-Shirt",
    strength: "2XL · Red",
    category: "Accessory",
    form: "Accessory",
    priceUsd: 15,
    tagline:
      "RED RAMpeptides workout tee with Frenchie logo. Size 2XL. Limited stock — only 1 available.",
    description:
      "RAMpeptides workout t-shirt in RED with the RAMpeptides Frenchie logo printed on the chest. Soft athletic-style tee for training or casual wear. Currently offered in size 2XL. Limited stock: only 1 available. Merch accessory only; not a research compound.",
    image: "/products/workout-tshirt-red-2xl.jpg",
    specs: {
      purity: "Cotton blend athletic tee",
      form: "T-shirt · size 2XL · RED",
      storage: "Machine wash cold, tumble dry low",
      notice: "Merch accessory only. Limited stock: 1 available.",
      intro:
        "Manufactured for you to sweat in, it is intended solely for professional gym bros, laboratory testing and research environments.",
    },
  },
  {
    slug: "workout-tshirt-black-2xl",
    name: "RAMpeptides Workout T-Shirt",
    strength: "2XL · Black",
    category: "Accessory",
    form: "Accessory",
    priceUsd: 15,
    tagline:
      "Black RAMpeptides workout tee with front chest logo + full-back DJ Frenchie print. Size 2XL. Limited stock — 2 available.",
    description:
      "RAMpeptides workout t-shirt in black with a small front chest logo and a large full-back DJ Frenchie graphic print. Soft athletic-style tee for training or casual wear. Currently offered in size 2XL. Limited stock: 2 available. Merch accessory only; not a research compound.",
    image: "/products/workout-tshirt-black-2xl.jpg",
    specs: {
      purity: "Cotton blend athletic tee",
      form: "T-shirt · size 2XL · black",
      storage: "Machine wash cold, tumble dry low",
      notice: "Merch accessory only. Limited stock: 2 available.",
      intro:
        "Manufactured for you to sweat in, it is intended solely for professional gym bros, laboratory testing and research environments.",
    },
  },
  {
    slug: "workout-tshirt-black-flag-2xl",
    name: "RAMpeptides Workout T-Shirt",
    strength: "2XL · Black · Flag",
    category: "Accessory",
    form: "Accessory",
    priceUsd: 15,
    tagline:
      "Black RAMpeptides workout tee with full-back distressed American flag print (front chest logo). Size 2XL. Limited stock — 1 available.",
    description:
      "RAMpeptides workout t-shirt in black with a small front chest RAM PEPTIDES logo and a large full-back distressed American flag graphic with brand mark and RAMpeptides.com. Soft athletic-style tee for training or casual wear. Currently offered in size 2XL. Limited stock: 1 available. Merch accessory only; not a research compound.",
    image: "/products/workout-tshirt-black-flag-2xl.jpg",
    specs: {
      purity: "Cotton blend athletic tee",
      form: "T-shirt · size 2XL · black · flag back",
      storage: "Machine wash cold, tumble dry low",
      notice: "Merch accessory only. Limited stock: 1 available.",
      intro:
        "Manufactured for you to sweat in, it is intended solely for professional gym bros, laboratory testing and research environments.",
    },
  },
  {
    slug: "zuri-goodyear-tee-2xl",
    name: "RAMpeptides Zuri Goodyear T-Shirt",
    strength: "Small-2XL",
    category: "Accessory",
    form: "Accessory",
    priceUsd: 15,
    tagline:
      "RAMpeptides Zuri Goodyear tee with full front chest logo. Size Small-2XL. Multiple sizes and colors available.",
    description:
      "RAMpeptides Zuri Goodyear t-shirt featuring a large front chest Zuri logo and RAMpeptides.com. 100% Airlume cotton, classic crew neck, short sleeves. Soft athletic-style tee for training or casual wear. Merch accessory only; not a research compound.",
    image: "/products/RAMpeptides.Zuri.chest.logo.jpg",
    specs: {
      purity: "100% Airlume Cotton",
      form: "T-shirt · Adult Unisex Small-2XL · White, Black, Navy, Natural, Red, Grey",
      storage: "Machine wash cold, tumble dry low. Wash with like colors. Do not iron decoration. Non-chlorine bleach when needed. Low iron. Do not dry clean.",
      notice: "Merch accessory only. Limited availability. Multiple sizes and colors available.",
      intro:
        "Manufactured for you to sweat in, it is intended solely for professional gym bros, laboratory testing and research environments.",
    },
  },
  {
    slug: "peps-away-tee",
    name: "RAMpeptides Peps Away T-Shirt",
    strength: "Small-2XL",
    category: "Accessory",
    form: "Accessory",
    priceUsd: 15,
    tagline:
      "RAMpeptides Peps Away tee with full front and back crest graphic. Size Small-2XL. Multiple sizes and colors available.",
    description:
      "RAMpeptides Peps Away t-shirt featuring the full circular crest graphic with Zuri riding and being the bomb. 100% Airlume cotton, classic crew neck, short sleeves. Soft athletic-style tee for training or casual wear. Merch accessory only; not a research compound.",
    image: "/products/RAMpeptides.peps.away.crest.jpg",
    specs: {
      purity: "100% Airlume Cotton",
      form: "T-shirt · Adult Unisex Small-2XL · White, Black, Navy, Natural, Red, Grey",
      storage: "Machine wash cold, tumble dry low. Wash with like colors. Do not iron decoration. Non-chlorine bleach when needed. Low iron. Do not dry clean.",
      notice: "Merch accessory only. Limited availability. Multiple sizes and colors available.",
      intro:
        "Manufactured for you to sweat in, it is intended solely for professional gym bros, laboratory testing and research environments.",
    },
  },
  {
    slug: "trucker-hat",
    name: "RAMpeptides Trucker Hat",
    strength: "Snapback",
    category: "Accessory",
    form: "Accessory",
    priceUsd: 8,
    tagline:
      "Black snapback trucker hat with RAMpeptides with Zuri logo. Limited stock — only 1 available.",
    description:
      "RAMpeptides snapback trucker hat in black with mesh back and adjustable snap closure. Features the RAMpeptides Zuri logo on the front panel. One-size adjustable fit. Limited stock: only 1 available. Merch accessory only; not a research compound.",
    image: "/products/trucker-hat.jpg",
    specs: {
      purity: "Foam front · mesh back",
      form: "Snapback trucker hat",
      storage: "Spot clean only",
      notice: "Merch accessory only. Limited stock: 1 available.",
      intro:
        "Manufactured for those too lazy or don’t want to comb their hair, it is intended solely for professionals in laboratory and research environments.",
    },
  }
];

/** Merch / accessories shown on /extras (not main peptide catalog). */
export const EXTRAS_SLUGS = [
  "rubber-caps",
  "reconstitution-vial-10ml",
  "vault-case",
  "rampeptides-tin",
  "slim-can-cooler",
  "slim-can-cooler-crest",
  "workout-tshirt-2xl",
  "workout-tshirt-red-2xl",
  "workout-tshirt-black-2xl",
  "workout-tshirt-black-flag-2xl",
  "zuri-goodyear-tee-2xl",
  "peps-away-tee",
  "trucker-hat",
] as const;

export function isExtrasProduct(slug: string): boolean {
  return (EXTRAS_SLUGS as readonly string[]).includes(slug);
}


/** Research-family groupings for the main products page (order matters). */
export const CATALOG_GROUPS: { id: string; title: string; blurb: string; slugs: string[] }[] = [
  {
    id: "metabolic",
    title: "Metabolic Research",
    blurb: "Metabolic pathway reference compounds. Related singles stay together as the line expands.",
    slugs: ["ram-3p-20mg", "ram-1p-15mg", "cagrilintide-5mg"],
  },
  {
    id: "gh-axis",
    title: "GH Axis",
    blurb: "Growth-hormone secretagogue singles used alone or as kit components.",
    slugs: ["tesamorelin-10mg", "ipamorelin-10mg", "cjc-ipa-10mg"],
  },
  {
    id: "repair",
    title: "Repair & Recovery",
    blurb: "Tissue-research singles used alone or as GLOW/KLOW kit components.",
    slugs: ["bpc-tb-10mg", "ghk-cu-50mg", "kpv-10mg"],
  },
  {
    id: "mito",
    title: "Mitochondrial & Cellular",
    blurb: "Mitochondrial and cellular-energy research compounds.",
    slugs: ["mots-c-10mg", "nad-plus-500mg", "ss-31-10mg"],
  },
  {
    id: "neuro",
    title: "Neuro Research",
    blurb: "Cognitive and sleep-research reference compounds.",
    slugs: ["semax-10mg", "dsip-5mg"],
  },
  {
    id: "melanocortin",
    title: "Melanocortin Research",
    blurb: "Melanocortin pathway reference compounds.",
    slugs: ["melanotan-1-10mg", "melanotan-2-10mg", "pt-141-10mg"],
  },
  {
    id: "other",
    title: "Additional Research",
    blurb: "Other reference compounds in the current catalog.",
    slugs: ["ara-290-10mg"],
  },
  {
    id: "blends",
    title: "Just the Blends",
    blurb: "Branded multi-vial kits and research blends — separate components, not pre-mixed powder blends (except Super Human).",
    slugs: [
      "duo-blend-20mg",
      "tri-blend-20mg",
      "glow-70mg",
      "klow-80mg",
      "superhuman-blend-10ml",
    ],
  },
  {
    id: "lab",
    title: "Lab Essentials",
    blurb: "Reconstitution supplies for laboratory handling.",
    slugs: ["reconstitution-water-30ml"],
  },
  {
    id: "topical",
    title: "Topical",
    blurb: "Topical research formulations.",
    slugs: ["ghk-cu-blue-copper-serum-10ml", "ghk-cu-blue-copper-serum-30ml"],
  },
];

export function getCatalogGroups(products: Product[] = catalog) {
  const bySlug = new Map(products.map((p) => [p.slug, p]));
  const used = new Set<string>();
  const groups = CATALOG_GROUPS.map((g) => {
    const items = g.slugs
      .map((slug) => bySlug.get(slug))
      .filter((p): p is Product => Boolean(p));
    items.forEach((p) => used.add(p.slug));
    return { ...g, products: items };
  }).filter((g) => g.products.length > 0);

  const leftovers = products.filter((p) => !used.has(p.slug) && !isExtrasProduct(p.slug));
  if (leftovers.length) {
    groups.push({
      id: "more",
      title: "More",
      blurb: "Additional catalog items.",
      slugs: leftovers.map((p) => p.slug),
      products: leftovers,
    });
  }
  return groups;
}

export function getProduct(slug: string): Product | undefined {
  return catalog.find((p) => p.slug === slug);
}
