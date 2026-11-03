import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy · RAMpeptides",
};

export default function PrivacyPage() {
  return (
    <section className="px-6 lg:px-10">
      <div className="max-w-3xl mx-auto py-20 md:py-28">
        <h1 className="font-display text-4xl md:text-5xl mb-10">Privacy Policy</h1>
        <div className="prose prose-sm md:prose-base dark:prose-invert">
          <p><strong>Effective date:</strong> November 2, 2026</p>
          <p>
            This Privacy Policy explains how RAMpeptides LLC ("we," "us") collects, uses, and protects information when you visit rampeptides.com or place an order.
          </p>

          <h3>1. Information We Collect</h3>
          <ul>
            <li>
              <strong>Information you provide:</strong> name, email address, shipping and billing address, phone number, order details, and any messages you send us (for example, through our contact form or at info@rampeptides.com).
            </li>
            <li>
              <strong>Payment information:</strong> card and payment details are entered into and processed by our third-party payment processor. We do not store full card numbers or security codes on our servers. The processor's handling of your data is governed by its own privacy policy.
            </li>
            <li>
              <strong>Automatically collected information:</strong> IP address, browser type, device information, pages visited, and similar technical data collected through cookies or analytics tools (such as Vercel Analytics).
            </li>
          </ul>

          <h3>2. How We Use Information</h3>
          <p>
            We use information to process and ship orders; communicate with you about orders and inquiries; verify eligibility (including age and research-use attestations); prevent fraud and chargebacks; comply with legal obligations; and operate and improve the Site.
          </p>

          <h3>3. How We Share Information</h3>
          <p><strong>We do not sell or rent your personal information.</strong> We share information only with:</p>
          <ul>
            <li>Our payment processor, to process payments and prevent fraud;</li>
            <li>Shipping carriers (USPS, UPS, or FedEx), to deliver your order;</li>
            <li>Service providers that host or operate the Site and email, under obligations to protect your data;</li>
            <li>Authorities or other parties when required by law, or to protect our rights, including in connection with payment disputes.</li>
          </ul>

          <h3>4. Cookies</h3>
          <p>
            The Site may use cookies needed for the cart and checkout to function and, if applicable, for analytics. You can disable cookies in your browser, but some features may not work.
          </p>

          <h3>5. Data Retention</h3>
          <p>
            We keep order and transaction records for as long as needed to fulfill orders, resolve disputes, and meet legal, tax, and accounting requirements, typically 7 years.
          </p>

          <h3>6. Security</h3>
          <p>
            We use reasonable administrative and technical safeguards to protect your information. No method of transmission or storage is 100% secure.
          </p>

          <h3>7. Your Choices and Rights</h3>
          <p>
            You may request access to, correction of, or deletion of your personal information by emailing info@rampeptides.com. We may need to keep certain records as required by law. Depending on your state of residence, you may have additional rights under applicable privacy laws.
          </p>

          <h3>8. Age Restriction</h3>
          <p>
            The Site is intended only for persons 21 and older. We do not knowingly collect information from anyone under 21.
          </p>

          <h3>9. Changes</h3>
          <p>
            We may update this Privacy Policy by posting a revised version with a new effective date.
          </p>

          <h3>10. Contact</h3>
          <p>
            RAMpeptides LLC<br />
            Email: info@rampeptides.com
          </p>
        </div>
      </div>
    </section>
  );
}
