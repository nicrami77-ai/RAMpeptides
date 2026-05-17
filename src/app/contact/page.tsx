import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact · RAMpeptides",
  description:
    "Questions about a product, a lot, or an order? Contact RAMpeptides directly.",
};

export default function ContactPage() {
  return (
    <section className="px-6 lg:px-10">
      <div className="max-w-3xl mx-auto py-20 md:py-28">
        <p className="uppercase tracking-[0.22em] text-[10px] text-[var(--muted)] mb-4">
          Contact
        </p>
        <h1 className="font-display text-5xl md:text-7xl tracking-[-0.03em] mb-6">
          Get in touch.
        </h1>
        <p className="max-w-xl text-base md:text-lg text-[var(--muted)] leading-relaxed mb-16">
          Questions about a product, a lot, or an order? Send a note. We answer
          most messages within one business day.
        </p>

        <div className="border border-[var(--border)] rounded-xl p-8 md:p-10 mb-16">
          <p className="uppercase tracking-[0.22em] text-[10px] text-[var(--muted)] mb-4">
            Email
          </p>
          <a
            href="mailto:info@rampeptides.com"
            className="font-display text-3xl md:text-5xl tracking-tight underline underline-offset-4 break-all hover:text-[var(--muted)]"
          >
            info@rampeptides.com
          </a>
        </div>

        <figure className="border border-[var(--border)] rounded-xl overflow-hidden">
          <div className="relative aspect-[3/4] md:aspect-[4/3] w-full bg-black">
            <Image
              src="/ram-mascot.jpg"
              alt="RAMpeptides mascot — lab coat bulldog at the mic"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          <figcaption className="px-6 py-4 text-xs uppercase tracking-[0.22em] text-[var(--muted)] text-center">
            On air with the lab dog.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
