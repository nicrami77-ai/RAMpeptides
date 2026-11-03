"use client";

export default function AddToCartButton({
  product
}: {
  product: { slug: string; name: string; price: number; strength: string }
}) {
  const mailto = `mailto:info@rampeptides.com?subject=${encodeURIComponent(`Order Inquiry: ${product.name} ${product.strength}`)}`;

  return (
    <a
      href={mailto}
      className="inline-block mt-10 border border-[var(--foreground)] text-[var(--foreground)] uppercase tracking-[0.18em] text-xs font-semibold px-7 py-3.5 rounded-full hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors"
    >
      Email to Order
    </a>
  );
}
