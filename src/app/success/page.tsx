"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const total = searchParams.get('total') || "0.00";

  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <h1 className="font-display text-5xl mb-6">Thank You!</h1>
      <p className="text-lg mb-4">Your order has been submitted successfully.</p>
      
      <div className="bg-gray-100 dark:bg-zinc-900 p-8 my-10 rounded-xl border border-[var(--border)]">
        <h2 className="text-xl font-bold mb-4">Action Required to Complete Order</h2>
        <p className="mb-6">Please pay your exact total to finalize processing:</p>
        <div className="text-4xl font-bold mb-8">${total}</div>
        
        <a 
          href="https://pay.bluevine.com/p/45184023cbd34fb5ad777c33bd7d55b7" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-[var(--foreground)] text-[var(--background)] uppercase tracking-[0.18em] text-sm font-semibold px-10 py-5 rounded-full hover:opacity-90"
        >
          Pay Order Total
        </a>
      </div>
      <p className="text-sm text-[var(--muted)]">If payment is not received within 24 hours, your order will be cancelled.</p>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="p-24 text-center">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
