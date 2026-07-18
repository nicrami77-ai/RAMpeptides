import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer · RAMpeptides",
  description:
    "Legal disclaimer for RAMpeptides reference-grade research peptides.",
};

export default function DisclaimerPage() {
  return (
    <section className="px-6 lg:px-10">
      <div className="max-w-3xl mx-auto py-20 md:py-28">
        <p className="uppercase tracking-[0.22em] text-[10px] text-[var(--muted)] mb-4">
          Legal
        </p>
        <h1 className="font-display text-5xl md:text-7xl tracking-[-0.03em] mb-12">
          Disclaimer.
        </h1>

        <div className="space-y-6 text-base text-[var(--muted)] leading-relaxed">
          <p>
            All products sold by RAMpeptides are intended{" "}
            <strong className="text-[var(--foreground)]">
              strictly for laboratory and research purposes only
            </strong>
            . They are not intended for, and must not be used for, human
            consumption, veterinary use, diagnostic procedures, therapeutic
            application, cosmetic application beyond research formulation, or
            any in-vivo use.
          </p>
          <p>
            RAMpeptides products have not been evaluated by the U.S. Food and
            Drug Administration (FDA) or any equivalent international regulatory
            body. No statement made on this site is intended to diagnose, treat,
            cure, or prevent any disease or condition.
          </p>
          <p>
            By placing an order or submitting a contact inquiry, the purchaser
            represents and warrants that they are{" "}
            <strong className="text-[var(--foreground)]">
              21 years of age or older
            </strong>
            , that they are a qualified researcher or affiliated with a research
            institution, and that all products purchased from RAMpeptides will
            be handled and used in accordance with applicable laws, regulations,
            and good laboratory practice.
          </p>
          <p>
            RAMpeptides assumes no responsibility or liability for the misuse of
            its products. The purchaser assumes all risk associated with
            handling, storage, and use. Products should be handled only by
            persons trained in the safe handling of laboratory chemicals.
          </p>
          <p>
            Products are sold without warranty, express or implied, including
            but not limited to any warranty of merchantability or fitness for a
            particular purpose. The maximum liability of RAMpeptides for any
            claim arising from the sale or use of its products shall not exceed
            the purchase price of the product giving rise to the claim.
          </p>
          <p>
            By accessing this site you acknowledge that you have read,
            understood, and agreed to this disclaimer in its entirety.
          </p>
        </div>

        <div className="mt-16 aspect-square max-w-lg mx-auto relative rounded-xl overflow-hidden bg-black">
          <video
            src="/zuri-disclaimer.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
