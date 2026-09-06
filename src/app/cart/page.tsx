"use client";
import { useCart } from "@/components/CartContext";
import Link from "next/link";

export default function CartPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 text-center">
      <h1 className="font-display text-4xl mb-4">Ordering Currently Closed</h1>
      <p className="text-lg text-[var(--muted)] mb-8">
        Orders will be available on September 20th. Sorry for any inconvenience.
      </p>
      <Link href="/products" className="text-sm underline hover:text-[var(--muted)]">
        Browse Products
      </Link>
    </div>
  );
}
