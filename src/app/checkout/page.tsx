"use client";
import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 text-center">
      <h1 className="font-display text-4xl mb-4">Ordering Paused</h1>
      <p className="text-lg text-[var(--muted)] mb-8">
        Online checkout is temporarily paused. To place an order, please contact us directly.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="mailto:info@rampeptides.com?subject=Order Inquiry"
          className="inline-block bg-[var(--foreground)] text-[var(--background)] uppercase tracking-[0.18em] text-xs font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
        >
          Email info@rampeptides.com
        </a>
        <Link href="/products" className="text-sm underline hover:text-[var(--muted)]">
          Back to Catalog
        </Link>
      </div>
    </div>
  );
}
