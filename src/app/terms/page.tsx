import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service · RAMpeptides",
};

export default function TermsPage() {
  return (
    <section className="px-6 lg:px-10">
      <div className="max-w-3xl mx-auto py-20 md:py-28">
        <h1 className="font-display text-4xl md:text-5xl mb-10">Terms of Service</h1>
        <div className="prose prose-sm md:prose-base dark:prose-invert">
          <p><strong>Effective date:</strong> November 2, 2026</p>
          <p>
            These Terms of Service ("Terms") govern your use of rampeptides.com (the "Site") and any purchase from RAMpeptides LLC ("RAMpeptides," "we," "us"). By using the Site or placing an order, you agree to these Terms, our <Link href="/disclaimer">Legal Disclaimer</Link>, <Link href="/privacy">Privacy Policy</Link>, <Link href="/refund">Refund & Returns Policy</Link>, and <Link href="/shipping">Shipping Policy</Link>.
          </p>

          <h3>1. Eligibility</h3>
          <p>
            You must be at least 21 years of age to use this Site or purchase products. By placing an order, you represent and warrant that you are 21 or older, that you are a qualified researcher or are affiliated with a research institution, and that you are purchasing on behalf of yourself or an organization you are authorized to bind.
          </p>

          <h3>2. Research Use Only</h3>
          <p>
            All products sold by RAMpeptides are intended strictly for laboratory and research purposes only (in vitro testing and laboratory experimentation). Products are <strong>not for human or animal consumption</strong>, not for veterinary use, and have not been evaluated by the U.S. Food and Drug Administration. No product is intended to diagnose, treat, cure, or prevent any disease. RAMpeptides LLC is a chemical supplier and is not a compounding pharmacy or outsourcing facility under Sections 503A or 503B of the Federal Food, Drug, and Cosmetic Act.
          </p>

          <h3>3. Prohibited Uses</h3>
          <p>You agree that you will not:</p>
          <ul>
            <li>Use, administer, or introduce any product into humans or animals by any route;</li>
            <li>Use any product in foods, drugs, dietary supplements, cosmetics, medical devices, or clinical applications;</li>
            <li>Resell, relabel, or repackage products for human or animal use, or market them with health, dosing, or therapeutic claims;</li>
            <li>Purchase products if you are under 21 or not a qualified researcher;</li>
            <li>Provide false information when placing an order, or use another person's payment method without authorization;</li>
            <li>Purchase products for shipment to any jurisdiction where their purchase or possession is prohibited;</li>
            <li>Use the Site for any unlawful purpose.</li>
          </ul>
          <p>
            We may refuse, cancel, or refund any order at our sole discretion, including where we believe an order violates these Terms.
          </p>

          <h3>4. Orders, Pricing, and Payment</h3>
          <p>
            All prices are listed in U.S. dollars. We reserve the right to change prices, correct errors, and limit quantities at any time. An order is accepted only when it ships. Payments are processed by our third-party payment processor; we do not store full card numbers on our servers.
          </p>

          <h3>5. Chargebacks and Payment Disputes</h3>
          <p>
            If you have a problem with an order, contact us first at info@rampeptides.com so we can resolve it under our Refund & Returns Policy. By placing an order, you agree to contact us and allow us a reasonable opportunity (at least 7 business days) to resolve any issue before initiating a chargeback or payment dispute with your card issuer or bank. If a chargeback is filed, we will provide the processor and issuer with order records, including your acceptance of these Terms, the research-use attestation, shipping and tracking information, and any correspondence. We reserve the right to decline future orders from customers who file chargebacks that are found to be unwarranted, and to pursue recovery of amounts owed as permitted by law.
          </p>

          <h3>6. Shipping, Risk of Loss, and Returns</h3>
          <p>
            Shipping is governed by our <Link href="/shipping">Shipping Policy</Link>. Refunds and returns are governed by our <Link href="/refund">Refund & Returns Policy</Link>.
          </p>

          <h3>7. Handling and Assumption of Risk</h3>
          <p>
            Products should be handled only by persons trained in the safe handling of laboratory chemicals. The purchaser assumes all risk associated with the handling, storage, and use of products.
          </p>

          <h3>8. Disclaimer of Warranties</h3>
          <p>
            Products and the Site are provided "as is" without warranty of any kind, express or implied, including any warranty of merchantability or fitness for a particular purpose, except as expressly stated in these Terms or required by law.
          </p>

          <h3>9. Limitation of Liability</h3>
          <p>
            To the fullest extent permitted by law, RAMpeptides' total liability for any claim arising from the sale or use of its products or the Site shall not exceed the purchase price of the product giving rise to the claim. RAMpeptides is not liable for any indirect, incidental, consequential, or special damages, or for any misuse of its products.
          </p>

          <h3>10. Indemnification</h3>
          <p>
            You agree to indemnify and hold harmless RAMpeptides LLC and its owners from any claims, losses, or expenses (including reasonable attorneys' fees) arising from your misuse of products, your violation of these Terms, or your violation of any law.
          </p>

          <h3>11. Intellectual Property</h3>
          <p>
            All content on the Site, including text, graphics, logos, and images, is the property of RAMpeptides LLC or its licensors and may not be copied or used without permission.
          </p>

          <h3>12. Governing Law and Venue</h3>
          <p>
            These Terms are governed by the laws of the State of Arizona, without regard to conflict-of-law rules. Any dispute shall be brought exclusively in the state or federal courts located in Maricopa County, Arizona.
          </p>

          <h3>13. Changes to These Terms</h3>
          <p>
            We may update these Terms at any time by posting the revised version on this page with a new effective date. Continued use of the Site after changes constitutes acceptance.
          </p>

          <h3>14. Contact</h3>
          <p>
            RAMpeptides LLC<br />
            Email: info@rampeptides.com
          </p>
        </div>
      </div>
    </section>
  );
}
