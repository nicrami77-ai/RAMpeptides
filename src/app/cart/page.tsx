"use client";
import { useCart } from "@/components/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, subtotal, itemCount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="font-display text-4xl mb-4">Your Cart</h1>
        <p className="text-lg text-[var(--muted)] mb-8">Your cart is empty.</p>
        <Link href="/products" className="text-sm underline hover:text-[var(--muted)]">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <h1 className="font-display text-4xl mb-10">Your Cart</h1>

      <div className="space-y-4 mb-10">
        {cart.map((item) => (
          <div key={item.slug} className="flex items-center justify-between border border-[var(--border)] rounded-xl p-5">
            <div>
              <div className="font-medium">{item.name}</div>
              <div className="text-sm text-[var(--muted)]">${item.price} × {item.quantity}</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button onClick={() => updateQuantity(item.slug, item.quantity - 1)} className="w-8 h-8 border border-[var(--border)] rounded">-</button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.slug, item.quantity + 1)} className="w-8 h-8 border border-[var(--border)] rounded">+</button>
              </div>
              <div className="font-medium w-20 text-right">${(item.price * item.quantity).toFixed(2)}</div>
              <button onClick={() => removeFromCart(item.slug)} className="text-red-600 hover:text-red-700 ml-2">Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center border-t border-[var(--border)] pt-6 mb-8">
        <div className="text-xl font-semibold">Subtotal</div>
        <div className="text-2xl font-semibold">${subtotal.toFixed(2)}</div>
      </div>

      <Link
        href="/checkout"
        className="block w-full text-center bg-[var(--foreground)] text-[var(--background)] uppercase tracking-[0.18em] text-sm font-semibold px-7 py-4 rounded-xl hover:opacity-90 transition-opacity"
      >
        Proceed to Checkout
      </Link>

      <p className="text-center text-xs text-[var(--muted)] mt-4">Shipping & tax calculated at checkout</p>
    </div>
  );
}
