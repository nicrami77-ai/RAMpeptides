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
      <section className="w-full relative bg-black border-b border-[var(--border)] overflow-hidden">
        <video
          src="/extras-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w-full px-6 lg:px-10 py-24 md:py-32 flex flex-col items-center justify-center text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-[-0.03em] max-w-4xl drop-shadow-md">
            Here at RAMpeptides we drop knowledge, beats and extras.<br/>Are you Extra?
          </h1>
        </div>
      </section>

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
    </>
  );
}
