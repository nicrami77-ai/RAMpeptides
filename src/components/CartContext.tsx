"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { catalog } from "@/lib/catalog";

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

const priceBySlug = Object.fromEntries(
  catalog.map((product) => [product.slug, product.priceUsd]),
);

function withLivePrices(items: CartItem[]): CartItem[] {
  return items.map((item) => {
    const livePrice = priceBySlug[item.slug];
    if (typeof livePrice !== "number" || livePrice === item.price) return item;
    return { ...item, price: livePrice };
  });
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("ramcart");
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as CartItem[];
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCart(withLivePrices(Array.isArray(parsed) ? parsed : []));
      } catch {
        // ignore JSON parse errors
      }
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

  // removed early return to avoid SSR crash

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
