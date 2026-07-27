import type { Metadata } from "next";
import { catalog, isExtrasProduct } from "@/lib/catalog";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Extras · RAMpeptides",
  description: "Accessories, merch, and extras.",
};

export default function ExtrasPage() {
  const extras = catalog.filter((p) => isExtrasProduct(p.slug));

  return (
    <>
      {/* EXTRAS label */}
      <section className="px-6 lg:px-10 pt-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="uppercase tracking-[0.22em] text-xl md:text-2xl font-bold text-[var(--foreground)] mb-3">
            EXTRAS…
          </p>
        </div>
      </section>

      {/* Top Video Section */}
      <section className="px-6 lg:px-10">
        <div className="max-w-7xl mx-auto pt-16 md:pt-24">
          <div className="rounded-xl overflow-hidden border border-[var(--border)] max-w-4xl mx-auto bg-black">
            <video
              src="/extras-merch-table.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Text Section */}
      <section className="w-full bg-[var(--background)] px-6 lg:px-10 py-16 border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[var(--foreground)] tracking-[-0.03em] leading-tight">
            Here at RAMpeptides we drop knowledge, beats and extras.<br/>Are you Extra?
          </h1>
        </div>
      </section>

      {/* Products Section */}
      <section className="px-6 lg:px-10">
        <div className="max-w-7xl mx-auto py-16 md:py-24">
          <p className="uppercase tracking-[0.22em] text-[10px] text-[var(--muted)] mb-4">
            Accessories & Merch
          </p>
          <h2 className="font-display text-4xl md:text-5xl tracking-[-0.03em] mb-16">
            Extras.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {extras.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Video Section (Original DJ Video) */}
      <section className="px-6 lg:px-10 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-[var(--border)] max-w-4xl mx-auto mb-10 md:mb-14" />

          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-10">
            <p className="uppercase tracking-[0.18em] text-sm md:text-base font-semibold text-[var(--foreground)] mb-5">
              STILL WANT MORE EXTRA? Follow us at X.com
            </p>
            <a
              href="https://x.com/rampeptides"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)] transition-opacity hover:opacity-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.812l-5.34-6.98L4.25 22H1l8.02-9.165L1.5 2h6.98l4.83 6.39L18.244 2Zm-1.194 18h1.86L7.06 4H5.1l11.95 16Z" />
              </svg>
              Follow @rampeptides
            </a>
          </div>

          <div className="rounded-xl overflow-hidden border border-[var(--border)] max-w-4xl mx-auto bg-black">
            <video
              src="/extras-concert.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}