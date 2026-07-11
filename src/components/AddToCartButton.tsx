"use client";
import { useCart } from "@/components/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddToCartButton({
  product
}: {
  product: { slug: string; name: string; price: number; strength: string }
}) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const router = useRouter();

  const handleAdd = () => {
    addToCart({
      slug: product.slug,
      name: `${product.name} ${product.strength}`,
      price: product.price,
      quantity: 1,
    });
    setAdded(true);
    setTimeout(() => {
      router.push('/cart');
    }, 500);
  };

  return (
    <button
      onClick={handleAdd}
      className="inline-block mt-10 bg-[var(--foreground)] text-[var(--background)] uppercase tracking-[0.18em] text-xs font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
    >
      {added ? "Adding..." : "Add to Cart"}
    </button>
  );
}
