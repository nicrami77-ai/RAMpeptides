"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useCart } from "@/components/CartContext";
import Link from "next/link";

function SuccessContent() {
  const searchParams = useSearchParams();
  const { clearCart } = useCart();
  const total = searchParams.get("total") || "0.00";
  const paymentIntentId = searchParams.get("payment_intent");
  const redirectStatus = searchParams.get("redirect_status");
  const [statusNote, setStatusNote] = useState<string>("");

  const paid =
    redirectStatus === "succeeded" ||
    // fallback for older return links that only had paid=true
    searchParams.get("paid") === "true";

  useEffect(() => {
    if (!paid) return;
    clearCart();
  }, [paid, clearCart]);

  useEffect(() => {
    if (!paymentIntentId) return;

    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/notify-paid-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ paymentIntentId }),
        });
        const data = await res.json();
        if (cancelled) return;
        if (data?.notified) {
          setStatusNote("Order notification sent.");
        } else if (data?.status && data.status !== "succeeded") {
          setStatusNote(`Payment status: ${data.status}`);
        }
      } catch {
        if (!cancelled) setStatusNote("");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [paymentIntentId]);

  if (!paid && redirectStatus && redirectStatus !== "succeeded") {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="font-display text-5xl mb-6">Payment not completed</h1>
        <p className="text-lg mb-8">
          Stripe status: <strong>{redirectStatus}</strong>. No charge was finalized.
        </p>
        <Link
          href="/checkout"
          className="text-sm underline underline-offset-4 hover:text-[var(--muted)] transition-colors"
        >
          Return to checkout
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <h1 className="font-display text-5xl mb-6">Payment Successful!</h1>
      <p className="text-lg mb-8">Thank you for your order.</p>

      <div className="bg-gray-100 dark:bg-zinc-900 p-8 rounded-xl border border-[var(--border)]">
        <h2 className="text-xl font-bold mb-4">Order Confirmed</h2>
        <p className="mb-6">
          Your payment of <strong className="text-xl">${total}</strong> has been
          processed securely.
        </p>
        <p className="text-sm text-[var(--muted)] mb-8">
          You will receive an email receipt from Stripe shortly. We will begin
          preparing your order for shipment.
        </p>
        {statusNote ? (
          <p className="text-xs text-[var(--muted)] mb-6">{statusNote}</p>
        ) : null}

        <div className="flex justify-center mt-6">
          <img
            src="/zuri-zen.jpg"
            alt="Thank you from Zuri"
            className="w-full max-w-[320px] rounded-lg border border-[var(--border)] shadow-md"
          />
        </div>
      </div>

      <div className="mt-12">
        <Link
          href="/"
          className="text-sm underline underline-offset-4 hover:text-[var(--muted)] transition-colors"
        >
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
