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
          className={`${
            product.imageFit === "contain" ? "object-contain p-3" : "object-cover"
          } transition-transform duration-500 group-hover:scale-[1.02] ${
            product.outOfStock ? "opacity-60" : ""
          }`}
        />
        {product.comingSoon && (
          <div className="absolute inset-x-0 top-8 bg-black/85 backdrop-blur-sm py-3 text-center">
            <div className="text-white text-xl md:text-2xl font-display tracking-[6px] font-semibold">
              COMING SOON
            </div>
          </div>
        )}
        {product.outOfStock && !product.comingSoon && (
          <div className="absolute inset-x-0 top-8 bg-black/85 backdrop-blur-sm py-3 text-center">
            <div className="text-white text-xl md:text-2xl font-display tracking-[6px] font-semibold uppercase">
              {product.stockStatus || "OUT OF STOCK"}
            </div>
          </div>
        )}
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div className="min-w-0 pr-2">
          <p className="uppercase tracking-[0.22em] text-[10px] text-[var(--muted)] mb-1.5">
            {product.category}
          </p>
          <p className="font-display text-lg tracking-tight leading-snug">
            {product.name}
          </p>
          <p className="text-sm text-[var(--muted)] mt-0.5">
            {product.strength}
          </p>
        </div>
        <p className="text-sm tabular-nums whitespace-nowrap shrink-0 pt-5">
          {product.comingSoon ? (
            <span className="uppercase tracking-[0.18em] text-[10px] text-[var(--muted)]">
              Coming soon
            </span>
          ) : product.outOfStock ? (
            <span className="uppercase tracking-[0.18em] text-[10px] text-[var(--muted)]">
              {product.stockStatus || "Out of stock"}
            </span>
          ) : (
            <>${product.priceUsd}</>
          )}
        </p>
      </div>
    </>
  );

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      {inner}
    </Link>
  );
}
