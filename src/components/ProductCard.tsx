import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/catalog";

export default function ProductCard({ product }: { product: Product }) {
  const inner = (
    <>
      <div className="relative aspect-[4/5] bg-[#dcdcd8] rounded-xl overflow-hidden">
        <Image
          src={product.image}
          alt={`${product.name} ${product.strength}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
        {product.comingSoon && (
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-black/85 backdrop-blur-sm py-5 text-center">
            <div className="text-white text-2xl md:text-3xl font-display tracking-[6px] font-semibold">
              COMING SOON
            </div>
          </div>
        )}
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="uppercase tracking-[0.22em] text-[10px] text-[var(--muted)] mb-1.5">
            {product.category}
          </p>
          <p className="font-display text-lg tracking-tight">
            {product.name}{" "}
            <span className="text-[var(--muted)]">· {product.strength}</span>
          </p>
        </div>
        <p className="text-sm tabular-nums whitespace-nowrap">
          {product.comingSoon ? (
            <span className="uppercase tracking-[0.18em] text-[10px] text-[var(--muted)]">
              Coming soon
            </span>
          ) : (
            <>${product.priceUsd}</>
          )}
        </p>
      </div>
    </>
  );

  if (product.comingSoon) {
    return (
      <div className="group block cursor-default" aria-label={`${product.name} coming soon`}>
        {inner}
      </div>
    );
  }

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      {inner}
    </Link>
  );
}
