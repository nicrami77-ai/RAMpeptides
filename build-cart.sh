#!/bin/bash
set -e

cd /Users/nicolasramirez/.openclaw/workspace/rampeptides-rebuild/web

# 1. Cart Context
cat << 'FILE' > src/components/CartContext.tsx
"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type CartItem = {
  slug: string;
  name: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (slug: string) => void;
  updateQuantity: (slug: string, qty: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("ramcart");
    if (saved) {
      try {
        setCart(JSON.parse(saved));
      } catch (e) {}
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("ramcart", JSON.stringify(cart));
    }
  }, [cart, mounted]);

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const exists = prev.find(i => i.slug === item.slug);
      if (exists) {
        return prev.map(i => i.slug === item.slug ? { ...i, quantity: i.quantity + item.quantity } : i);
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (slug: string) => {
    setCart(prev => prev.filter(i => i.slug !== slug));
  };

  const updateQuantity = (slug: string, quantity: number) => {
    if (quantity < 1) return;
    setCart(prev => prev.map(i => i.slug === slug ? { ...i, quantity } : i));
  };

  const clearCart = () => setCart([]);

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!mounted) return <>{children}</>;

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, itemCount, subtotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
FILE

# 2. AddToCartButton
cat << 'FILE' > src/components/AddToCartButton.tsx
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
FILE

