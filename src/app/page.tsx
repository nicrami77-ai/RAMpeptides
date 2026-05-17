import Image from "next/image";
import Link from "next/link";
import { catalog } from "@/lib/catalog";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const featured = catalog.filter((p) =>
    ["mots-c-10mg", "ram-3p-20mg", "klow-80mg"].includes(p.slug),
  );

  return (
    <>
      {/* Hero */}
      <section className="px-6 lg:px-10">
        <div className="max-w-7xl mx-auto py-24 md:py-32 flex flex-col items-center text-center">
          <Image
            src="/logo.png"
            alt="RAMpeptides"
            width={400}
            height={160}
            priority
            className="w-[260px] md:w-[360px] lg:w-[400px] h-auto mb-10"
          />
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-[-0.03em] leading-[0.95]">
            Power through
            <br />
            knowledge.
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-[var(--muted)] leading-relaxed">
            Reference-grade peptides for laboratory and pre-clinical research.
          </p>
          <p className="mt-6 uppercase tracking-[0.28em] text-[10px] md:text-[11px] text-[var(--muted)]">
            🫡 Veteran-owned · Family-operated
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-5">
            <Link
              href="/products"
              className="bg-[var(--foreground)] text-[var(--background)] uppercase tracking-[0.18em] text-xs font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              View Catalog
            </Link>
            <Link
              href="/about"
              className="uppercase tracking-[0.18em] text-xs font-semibold underline underline-offset-8"
            >
              Our Approach
            </Link>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-t border-[var(--border)] px-6 lg:px-10">
        <div className="max-w-7xl mx-auto py-20 md:py-28 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          {[
            {
              n: "01",
              h: "Intentional catalog",
              p: "A small, deliberate set of reference compounds. Each selected for its standing in current research literature.",
            },
            {
              n: "02",
              h: "Tested & traceable",
              p: "Lot-level certificates of analysis from independent third-party testing. Identity, purity by HPLC, mass confirmation — documented for every batch.",
            },
            {
              n: "03",
              h: "Transparent pricing",
              p: "List prices openly shown. No quote forms, no member tiers, no hidden cost structures.",
            },
          ].map((v) => (
            <div key={v.n}>
              <p className="uppercase tracking-[0.28em] text-[10px] text-[var(--muted)] mb-4">
                {v.n}
              </p>
              <h3 className="font-display text-2xl md:text-3xl tracking-tight mb-3">
                {v.h}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {v.p}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured catalog */}
      <section className="border-t border-[var(--border)] px-6 lg:px-10">
        <div className="max-w-7xl mx-auto py-20 md:py-28">
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <p className="uppercase tracking-[0.22em] text-[10px] text-[var(--muted)] mb-3">
                Featured
              </p>
              <h2 className="font-display text-4xl md:text-5xl tracking-[-0.03em]">
                The catalog.
              </h2>
            </div>
            <Link
              href="/products"
              className="text-sm tracking-wide underline underline-offset-4 hover:text-[var(--muted)]"
            >
              See all →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-[var(--border)] px-6 lg:px-10">
        <div className="max-w-3xl mx-auto py-24 md:py-32 text-center">
          <h2 className="font-display text-4xl md:text-5xl tracking-[-0.03em] mb-6">
            Questions before ordering?
          </h2>
          <p className="text-base md:text-lg text-[var(--muted)] leading-relaxed mb-10">
            Reach us directly. We answer technical questions about handling,
            sourcing, and lot documentation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--foreground)] text-[var(--background)] uppercase tracking-[0.18em] text-xs font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Contact us
          </Link>

          <div className="mt-16 max-w-md mx-auto">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-[var(--border)] bg-black">
              <Image
                src="/ram-mascot-lab.jpg"
                alt="RAMpeptides mascot — lab coat bulldog in the lab"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 448px"
              />
            </div>
            <p className="mt-6 font-display text-3xl md:text-4xl tracking-tight">
              Happy to help!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
