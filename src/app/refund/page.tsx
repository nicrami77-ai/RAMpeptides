import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund & Returns Policy · RAMpeptides",
};

export default function RefundPage() {
  return (
    <section className="px-6 lg:px-10">
      <div className="max-w-3xl mx-auto py-20 md:py-28">
        <h1 className="font-display text-4xl md:text-5xl mb-10">Refund & Returns Policy</h1>
        <div className="prose prose-sm md:prose-base dark:prose-invert">
          <p><strong>Effective date:</strong> November 2, 2026</p>

          <h3>1. No Returns on Opened Research Materials</h3>
          <p>
            Because of the nature of research materials and to protect product integrity, <strong>we cannot accept returns of opened, unsealed, or used products.</strong>
          </p>

          <h3>2. Damaged, Incorrect, or Lost Orders: 7-Day Window</h3>
          <p>
            If your order arrives damaged, is incorrect, or is lost in transit, you must notify us at info@rampeptides.com <strong>within 7 days of the delivery date</strong> (or, for lost packages, within 7 days of the expected delivery date shown in tracking). Please include:
          </p>
          <ul>
            <li>Your order number;</li>
            <li>A description of the problem;</li>
            <li>Photos of the product and packaging (for damaged or incorrect items).</li>
          </ul>
          <p>
            Once we verify the issue, we will, at our option, ship a replacement or issue a refund to the original payment method. Claims reported after 7 days may not be eligible.
          </p>

          <h3>3. Refund Processing</h3>
          <p>
            Approved refunds are issued to the original payment method within 5 business days of approval. Your bank or card issuer may take additional time to post the credit. Original shipping charges are non-refundable unless the error was ours.
          </p>

          <h3>4. Order Cancellations</h3>
          <p>
            Orders may be cancelled for a full refund if they have not yet shipped. Contact info@rampeptides.com as soon as possible. Once an order has shipped, it cannot be cancelled.
          </p>

          <h3>5. Please Contact Us Before Disputing a Charge</h3>
          <p>
            If you have any problem with an order, email info@rampeptides.com first. We respond to most messages within one business day and will work with you to resolve the issue. See Section 5 of our <Link href="/terms">Terms of Service</Link> regarding chargebacks.
          </p>

          <h3>6. Merchandise (Apparel and Accessories)</h3>
          <p>
            Unworn, unwashed apparel with tags may be returned or exchanged within 14 days of delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
