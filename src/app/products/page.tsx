import type { Metadata } from "next";
import { catalog } from "@/lib/catalog";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Products · RAMpeptides",
  description:
    "Reference-grade peptide products and laboratory reconstitution solution. Lot-traceable, third-party verified.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="px-6 lg:px-10">
        <div className="max-w-7xl mx-auto pt-16 md:pt-24">
          <div className="rounded-xl overflow-hidden border border-[var(--border)] max-w-4xl mx-auto bg-black">
            <video
              src="/vial-3d-stylized.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Large centered gold logo test */}
      <section className="px-6 lg:px-10 pb-8">
        <div className="max-w-7xl mx-auto flex justify-center">
          <img
            src="/rampeptides-gold-logo.png"
            alt="RAMpeptides"
            className="w-full max-w-[420px] h-auto"
          />
        </div>
      </section>

      <section className="px-6 lg:px-10">
        <div className="max-w-7xl mx-auto py-16 md:py-24">
          <p className="uppercase tracking-[0.22em] text-[10px] text-[var(--muted)] mb-4">
            Catalog
          </p>
          <h1 className="font-display text-5xl md:text-7xl tracking-[-0.03em] mb-6">
            Products.
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-[var(--muted)] leading-relaxed mb-16">
            A small, deliberate catalog. Each item selected for relevance to
            current research literature. All for laboratory use only.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {catalog.filter(p => !["rubber-caps", "reconstitution-vial-10ml", "vault-case"].includes(p.slug)).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
