import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-6 lg:px-10 overflow-hidden text-white">
        <div className="absolute inset-0 z-0 bg-black">
          <Image
            src="/american-flag-bg.jpg"
            alt="American Flag Background"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto py-24 md:py-32 flex flex-col items-center text-center">
          <Image
            src="/logo.png"
            alt="RAMpeptides"
            width={400}
            height={160}
            priority
            className="w-[260px] md:w-[360px] lg:w-[400px] h-auto mb-10 invert brightness-0"
          />
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-[-0.03em] leading-[0.95] drop-shadow-md">
            Power through
            <br />
            knowledge.
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-white/90 leading-relaxed drop-shadow">
            Reference-grade peptides for laboratory and pre-clinical research.
          </p>
          <p className="mt-6 uppercase tracking-[0.28em] text-[10px] md:text-[11px] text-white/80 drop-shadow">
            🫡 Veteran-owned · Family-operated
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-5">
            <Link
              href="/products"
              className="bg-white text-black uppercase tracking-[0.18em] text-xs font-semibold px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors"
            >
              View Catalog
            </Link>
            <Link
              href="/about"
              className="uppercase tracking-[0.18em] text-xs font-semibold underline underline-offset-8 hover:text-white/80 transition-colors"
            >
              Our Approach
            </Link>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-t border-[var(--border)] px-6 lg:px-10">
        <div className="max-w-7xl mx-auto py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10">
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
            {
              n: "04",
              h: "Flat $10 shipping",
              p: "Our unbeatable product pricing doesn't end at checkout. We charge a flat $10 rate for all standard shipping.",
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

      {/* Video Loop */}
      <section className="w-full pb-20 md:pb-28">
        <div className="relative w-full bg-black border-y border-[var(--border)]">
          <video
            src="/truck-loop.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[50vh] md:h-[75vh] object-cover"
          />
        </div>
      </section>

      {/* Featured catalog */}
      <section className="border-t border-[var(--border)] px-6 lg:px-10">
        <div className="max-w-7xl mx-auto py-20 md:py-28 text-center flex flex-col items-center">
          <p className="uppercase tracking-[0.22em] text-[10px] text-[var(--muted)] mb-3">
            Featured
          </p>
          <h2 className="font-display text-4xl md:text-5xl tracking-[-0.03em] mb-10">
            The catalog.
          </h2>
          <Link
            href="/products"
            className="inline-block bg-[var(--foreground)] text-[var(--background)] uppercase tracking-[0.18em] text-xs font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            View Full Catalog
          </Link>
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
          <div className="mt-16 max-w-md mx-auto">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-[var(--border)] bg-black mb-8">
              <video
                src="/zuri-lab-loop.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <Link
              href="/contact"
              className="inline-block bg-[var(--foreground)] text-[var(--background)] uppercase tracking-[0.18em] text-xs font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
