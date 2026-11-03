import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shipping Policy · RAMpeptides",
};

export default function ShippingPage() {
  return (
    <section className="px-6 lg:px-10">
      <div className="max-w-3xl mx-auto py-20 md:py-28">
        <h1 className="font-display text-4xl md:text-5xl mb-10">Shipping Policy</h1>
        <div className="prose prose-sm md:prose-base dark:prose-invert">
          <p><strong>Effective date:</strong> November 2, 2026</p>

          <h3>1. Shipping Rates</h3>
          <p>
            We charge a <strong>flat $10 rate for all standard shipping within the United States</strong>, regardless of order size.
          </p>

          <h3>2. Where We Ship</h3>
          <p>
            We currently ship to addresses within the United States (including APO/FPO, Alaska, and Hawaii). We do not ship internationally at this time. We may decline shipment to any location where the products' purchase or possession is restricted.
          </p>

          <h3>3. Processing (Handling) Time</h3>
          <p>
            Orders are typically processed and shipped within 1–2 business days after payment is confirmed. Orders placed on weekends or holidays are processed the next business day.
          </p>

          <h3>4. Carrier and Delivery Time</h3>
          <p>
            Orders ship via standard USPS or UPS service. Estimated transit time is 3–5 business days after shipment. Delivery times are estimates and are not guaranteed.
          </p>

          <h3>5. Tracking</h3>
          <p>
            A tracking number will be emailed to you once your order ships.
          </p>

          <h3>6. Address Accuracy</h3>
          <p>
            Please double-check your shipping address. We are not responsible for orders delivered to an incorrect address entered at checkout. If a package is returned to us as undeliverable, we will contact you to arrange reshipment (additional shipping charges may apply) or a refund less shipping.
          </p>

          <h3>7. Lost or Damaged Packages</h3>
          <p>
            If your package is lost or arrives damaged, notify us at info@rampeptides.com <strong>within 7 days</strong> of the delivery date (or expected delivery date for lost packages). See our <Link href="/refund">Refund & Returns Policy</Link> for details.
          </p>

          <h3>8. Contact</h3>
          <p>
            RAMpeptides LLC<br />
            Email: info@rampeptides.com
          </p>
        </div>
      </div>
    </section>
  );
}
