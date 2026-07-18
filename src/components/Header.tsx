"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/CartContext";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/extras", label: "Extras" },
  { href: "/lab-results", label: "Lab Results" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-[var(--background)]/85 backdrop-blur-sm border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col justify-center" aria-label="RAMpeptides home">
          <Image
            src="/logo.png"
            alt="RAMpeptides"
            width={220}
            height={88}
            priority
            className="h-9 md:h-10 w-auto"
          />
          <span className="hidden sm:block uppercase tracking-[0.22em] text-[var(--muted)] text-[9px] md:text-[10px] mt-1">
            🫡 Veteran-owned · Family-operated
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm tracking-wide">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="hover:text-[var(--muted)] transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center ml-6">
          <Link href="/cart" className="flex items-center gap-2 hover:text-[var(--muted)]">
            <span className="text-sm tracking-wide">Cart ({itemCount})</span>
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-5 h-px bg-[var(--foreground)] mb-1.5" />
          <span className="block w-5 h-px bg-[var(--foreground)]" />
        </button>
      </div>

      <div className="md:hidden flex items-center mr-4">
          <Link href="/cart" className="text-sm tracking-wide">Cart ({itemCount})</Link>
        </div>
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--background)]">
          <nav className="px-6 py-4 flex flex-col gap-3 text-sm tracking-wide">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-1"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
