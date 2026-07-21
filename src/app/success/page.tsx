"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { useCart } from "@/components/CartContext";
import Link from "next/link";

function SuccessContent() {
  const searchParams = useSearchParams();
  const { clearCart } = useCart();
  const total = searchParams.get('total') || "0.00";
  const paid = searchParams.get('paid');

  useEffect(() => {
    if (paid) {
      clearCart();
    }
  }, [paid, clearCart]);

  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <h1 className="font-display text-5xl mb-6">Payment Successful!</h1>
      <p className="text-lg mb-8">Thank you for your order.</p>
      
      <div className="bg-gray-100 dark:bg-zinc-900 p-8 rounded-xl border border-[var(--border)]">
        <h2 className="text-xl font-bold mb-4">Order Confirmed</h2>
        <p className="mb-6">Your payment of <strong className="text-xl">${total}</strong> has been processed securely.</p>
        <p className="text-sm text-[var(--muted)] mb-8">You will receive an email receipt from Stripe shortly. We will begin preparing your order for shipment.</p>
        
        <div className="flex justify-center mt-6">
          <img 
            src="/zuri-zen.jpg" 
            alt="Thank you from Zuri" 
            className="w-full max-w-[320px] rounded-lg border border-[var(--border)] shadow-md"
          />
        </div>
      </div>
      
      <div className="mt-12">
        <Link href="/" className="text-sm underline underline-offset-4 hover:text-[var(--muted)] transition-colors">
          Return to Homepage
        </Link>
      </div>
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
