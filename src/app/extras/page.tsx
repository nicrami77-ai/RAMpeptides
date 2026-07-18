import type { Metadata } from "next";
import { catalog } from "@/lib/catalog";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Extras · RAMpeptides",
  description: "Accessories, merch, and extras.",
};

const EXTRAS_SLUGS = [
  "rubber-caps",
  "reconstitution-vial-10ml",
  "vault-case",
];

export default function ExtrasPage() {
  const extras = catalog.filter((p) => EXTRAS_SLUGS.includes(p.slug));

  return (
    <>
      {/* Top Video Section */}
      <section className="w-full bg-black">
        <video
          src="/extras-concert.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto max-h-[80vh] object-contain"
        />
      </section>

      {/* Text Section */}
      <section className="w-full bg-[var(--background)] px-6 lg:px-10 py-16 md:py-24 border-b border-[var(--border)]">
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
      <section className="w-full">
        <div className="relative w-full bg-black border-t border-[var(--border)]">
          <video
            src="/extras-bg.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[50vh] md:h-[75vh] object-cover"
          />
        </div>
      </section>
    </>
  );
}