"use client";
import { useCart } from "@/components/CartContext";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, subtotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="font-display text-4xl mb-6">Your Cart is Empty</h1>
        <Link href="/products" className="text-sm underline hover:text-[var(--muted)]">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-24">
      <h1 className="font-display text-4xl mb-10">Shopping Cart</h1>
      <div className="space-y-6">
        {cart.map(item => (
          <div key={item.slug} className="flex justify-between items-center border-b border-[var(--border)] pb-6">
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-[var(--muted)]">${item.price} each</p>
            </div>
            <div className="flex items-center gap-4">
              <input 
                type="number" 
                min="1" 
                value={item.quantity}
                onChange={(e) => updateQuantity(item.slug, parseInt(e.target.value))}
                className="w-16 p-2 border border-[var(--border)] bg-transparent text-center"
              />
              <p className="font-semibold w-16 text-right">${item.price * item.quantity}</p>
              <button onClick={() => removeFromCart(item.slug)} className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] uppercase tracking-widest">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-col items-end">
        <div className="text-xl mb-6">Subtotal: <span className="font-semibold">${subtotal.toFixed(2)}</span></div>
        <Link href="/checkout" className="bg-[var(--foreground)] text-[var(--background)] uppercase tracking-[0.18em] text-xs font-semibold px-7 py-3.5 rounded-full hover:opacity-90">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
