import type { Metadata } from "next";
import Link from "next/link";
import { catalog, getCatalogGroups, isExtrasProduct } from "@/lib/catalog";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Products · RAMpeptides",
  description:
    "Reference-grade peptide products and laboratory reconstitution solution. Lot-traceable, third-party verified.",
};

export default function ProductsPage() {
  const mainCatalog = catalog.filter((p) => !isExtrasProduct(p.slug));
  const groups = getCatalogGroups(mainCatalog);

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

      <section className="px-6 lg:px-10">
        <div className="max-w-7xl mx-auto py-16 md:py-24">
          <p className="uppercase tracking-[0.22em] text-[10px] text-[var(--muted)] mb-4">
            Catalog
          </p>
          <h1 className="font-display text-5xl md:text-7xl tracking-[-0.03em] mb-6">
            Products.
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-[var(--muted)] leading-relaxed mb-16">
            A small, deliberate catalog grouped by research family. Related
            singles and kits sit together. All for laboratory use only.
          </p>

          <div className="space-y-16 md:space-y-20">
            {groups.map((group) => (
              <section key={group.id} id={group.id} className="scroll-mt-24">
                <div className="mb-8 md:mb-10 max-w-2xl">
                  <p className="uppercase tracking-[0.22em] text-[10px] text-[var(--muted)] mb-2">
                    Family
                  </p>
                  <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-3">
                    {group.title}
                  </h2>
                  <p className="text-sm md:text-base text-[var(--muted)] leading-relaxed">
                    {group.blurb}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {group.products.map((p) => (
                    <ProductCard key={p.slug} product={p} />
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 md:mt-20 pt-10 border-t border-[var(--border)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <p className="uppercase tracking-[0.22em] text-[10px] text-[var(--muted)] mb-2">
                Still want more?
              </p>
              <p className="font-display text-2xl md:text-3xl tracking-tight">
                Check out Merch-Extras.
              </p>
            </div>
            <Link
              href="/extras"
              className="inline-block self-start sm:self-auto bg-[var(--foreground)] text-[var(--background)] uppercase tracking-[0.18em] text-xs font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Merch-Extras →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
