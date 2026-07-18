import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About · RAMpeptides",
  description:
    "Veteran-owned, family-operated reference supplier of laboratory peptides. Small intentional catalog, transparent pricing, careful sourcing.",
};

export default function AboutPage() {
  return (
    <>
      <section className="px-6 lg:px-10">
        <div className="max-w-7xl mx-auto pt-16 md:pt-24">
          <div className="rounded-xl overflow-hidden border border-[var(--border)] max-w-4xl mx-auto bg-black">
            <video
              src="/rampeptides-holographic.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10">
      <div className="max-w-3xl mx-auto py-20 md:py-28">
        <p className="uppercase tracking-[0.22em] text-[10px] text-[var(--muted)] mb-4">
          About
        </p>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-[-0.03em] leading-[1.02]">
          A reference supplier, not a storefront.
        </h1>
        <p className="mt-8 text-base md:text-lg text-[var(--muted)] leading-relaxed">
          RAMpeptides supplies a small, intentional catalog of reference-grade
          peptides for laboratory and pre-clinical research — clearly priced,
          properly documented, and lot-traceable from manufacture to dispatch.
        </p>
        <p className="mt-6 uppercase tracking-[0.28em] text-[10px] text-[var(--muted)]">
          🫡 Veteran-owned · Family-operated
        </p>

        <div className="mt-16 space-y-12">
          <div>
            <p className="uppercase tracking-[0.22em] text-[10px] text-[var(--muted)] mb-3">
              Our story
            </p>
            <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-5">
              Veteran-owned. Family-operated.
            </h2>
            <p className="text-base text-[var(--muted)] leading-relaxed">
              RAMpeptides was founded by a U.S. veteran and is run as a family
              business. The discipline that comes from service — attention to
              detail, clear documentation, doing the routine work correctly —
              is the same discipline applied to sourcing, handling, and
              dispatching every order.
            </p>
            <p className="mt-4 text-base text-[var(--muted)] leading-relaxed">
              A small operation by design: a known supply chain, direct
              correspondence, and accountability for every lot dispatched.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-5">
              Why a small catalog.
            </h2>
            <p className="text-base text-[var(--muted)] leading-relaxed">
              Many peptide suppliers carry hundreds of SKUs. RAMpeptides does
              not. The catalog is limited to a small set of reference compounds
              with a clear place in current research literature, each
              independently verified before listing. New products are added
              only when a source meets the documentation standard — not to pad
              category coverage.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-5">
              Sourcing &amp; quality.
            </h2>
            <p className="text-base text-[var(--muted)] leading-relaxed">
              Every product is sourced from a manufacturing partner that
              provides lot-level certificates of analysis covering identity,
              purity by HPLC, and mass confirmation. COAs are made available on
              the Lab Results page as each lot is documented.
            </p>
            <p className="mt-4 text-base text-[var(--muted)] leading-relaxed">
              Products are stored under the conditions recommended for each
              molecule, and nothing is dispatched past its documented stability
              window.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-5">
              Transparent pricing.
            </h2>
            <p className="text-base text-[var(--muted)] leading-relaxed">
              Prices are listed openly. There are no quote forms, no member
              tiers, no MSRP-with-discount structures. The listed figure is the
              cost of the reference compound.
            </p>
            <p className="mt-4 text-base text-[var(--muted)] leading-relaxed">
              Pricing reflects the cost of sourcing, third-party testing, and
              dispatch — nothing more.
            </p>
          </div>

          <div className="border-t border-[var(--border)] pt-12">
            <p className="uppercase tracking-[0.22em] text-[10px] text-[var(--muted)] mb-3">
              One more thing
            </p>
            <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-5">
              Everything supplied is for research only.
            </h2>
            <p className="text-base text-[var(--muted)] leading-relaxed">
              Products are intended for laboratory and pre-clinical research
              applications. They are not approved for human or veterinary use,
              and are sold strictly to qualified researchers and laboratory
              purchasers operating in compliance with all applicable
              regulations.
            </p>
            <Link
              href="/disclaimer"
              className="mt-6 inline-block text-sm underline underline-offset-4 hover:text-[var(--muted)]"
            >
              Read the full disclaimer →
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
