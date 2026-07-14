import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { catalog, getProduct } from "@/lib/catalog";
import CoaQrCode from "@/components/CoaQrCode";
import AddToCartButton from "@/components/AddToCartButton";

type Params = { slug: string };

export async function generateStaticParams() {
  return catalog.filter((p) => !p.comingSoon).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Not found · RAMpeptides" };
  return {
    title: `${product.name} ${product.strength} · RAMpeptides`,
    description: product.tagline,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product || product.comingSoon) notFound();

  const mailto = `mailto:info@rampeptides.com?subject=${encodeURIComponent(
    `Inquiry: ${product.name} ${product.strength}`,
  )}`;

  const notifyMailto = `mailto:info@rampeptides.com?subject=${encodeURIComponent(
    `Notify when back in stock: ${product.name} ${product.strength}`,
  )}&body=${encodeURIComponent(
    `Please notify me when ${product.name} ${product.strength} is back in stock.`,
  )}`;

  const isTopical = product.category === "Topical";

  return (
    <>
      <section className="w-full">
        <div className="relative w-full bg-white border-b border-[var(--border)]">
          <video
            src="/vial-3d-stylized.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[30vh] md:h-[40vh] object-cover"
          />
        </div>
      </section>

      <section className="px-6 lg:px-10">
        <div className="max-w-7xl mx-auto py-12 md:py-16">
          <Link
            href="/products"
          className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] tracking-wide"
        >
          ← Back to catalog
        </Link>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-[#dcdcd8] rounded-xl overflow-hidden">
            <Image
              src={product.image}
              alt={`${product.name} ${product.strength}`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
              className="object-cover"
            />
          </div>

          {/* Info */}
          <div>
            <p className="uppercase tracking-[0.22em] text-[10px] text-[var(--muted)] mb-4">
              {product.category} · {product.form}
            </p>
            <h1 className="font-display text-5xl md:text-6xl tracking-[-0.03em] leading-[1]">
              {product.name}
            </h1>
            <p className="mt-3 text-xl text-[var(--muted)]">
              {product.strength}
            </p>

            <div className="mt-8 flex items-baseline gap-3">
              <p className="font-display text-5xl tracking-tight tabular-nums">
                ${product.priceUsd}
              </p>
              <p className="uppercase tracking-[0.22em] text-[10px] text-[var(--muted)]">
                USD · per unit
              </p>
            </div>

            <p className="mt-8 text-base md:text-lg leading-relaxed">
              {product.tagline}
            </p>

            <p className="mt-6 text-sm text-[var(--muted)] leading-relaxed">
              {product.description}
            </p>

            {product.blend && (
              <div className="mt-8 border border-[var(--border)] rounded-xl p-6">
                <p className="uppercase tracking-[0.22em] text-[10px] text-[var(--muted)] mb-4">
                  Blend composition
                </p>
                <ul className="space-y-2">
                  {product.blend.map((b) => (
                    <li
                      key={b.name}
                      className="flex items-baseline justify-between text-sm"
                    >
                      <span>{b.name}</span>
                      <span className="text-[var(--muted)] tabular-nums">
                        {b.amount}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specifications */}
            <div className="mt-10 border-t border-[var(--border)] pt-8">
              <h2 className="font-display text-2xl tracking-tight mb-2">
                Specifications
              </h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
                Manufactured at a verified purity of 99% or higher, it is
                intended solely for {isTopical ? "" : "professional "}laboratory
                testing and research environments.
              </p>
              <dl className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
                {[
                  ["Purity", product.specs.purity],
                  ["Form", product.specs.form],
                  ["Storage", product.specs.storage],
                  ["Notice", product.specs.notice],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="grid grid-cols-3 gap-4 py-3 text-sm"
                  >
                    <dt className="uppercase tracking-[0.18em] text-[10px] text-[var(--muted)] pt-1">
                      {k}
                    </dt>
                    <dd className="col-span-2 leading-relaxed">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {product.outOfStock ? (
              <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:items-center">
                <span
                  aria-disabled="true"
                  className="inline-block bg-[var(--muted)] text-[var(--background)] uppercase tracking-[0.18em] text-xs font-semibold px-7 py-3.5 rounded-full cursor-not-allowed opacity-80"
                >
                  Out of stock
                </span>
                <a
                  href={notifyMailto}
                  className="inline-block border border-[var(--foreground)] text-[var(--foreground)] uppercase tracking-[0.18em] text-xs font-semibold px-7 py-3.5 rounded-full hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors"
                >
                  Notify me when back
                </a>
              </div>
            ) : (
              <AddToCartButton product={{ slug: product.slug, name: product.name, price: product.priceUsd, strength: product.strength }} />
            )}

            {/* COA */}
            {product.coaUrl && (
              <div className="mt-12 border border-[var(--border)] rounded-xl p-6 md:p-8">
                <p className="uppercase tracking-[0.22em] text-[10px] text-[var(--muted)] mb-3">
                  Certificate of Analysis
                </p>
                <h3 className="font-display text-2xl tracking-tight mb-4">
                  Verify lab report
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
                  Lot-level COA covers identity, purity by HPLC, and mass
                  confirmation. Scan the code or open the verified report
                  directly from Janoshik Analytical.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
                  <CoaQrCode value={product.coaUrl} />
                  <div className="space-y-3">
                    <p className="uppercase tracking-[0.22em] text-[10px] text-[var(--muted)]">
                      Verified by Janoshik Analytical
                    </p>
                    {product.verificationKey && (
                      <p className="text-xs text-[var(--muted)]">
                        Verification key:{" "}
                        <span className="font-mono text-[var(--foreground)]">
                          {product.verificationKey}
                        </span>
                      </p>
                    )}
                    <a
                      href={product.coaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[var(--foreground)] text-[var(--background)] uppercase tracking-[0.18em] text-[10px] font-semibold px-5 py-3 rounded-full hover:opacity-90 transition-opacity"
                    >
                      Verify lab report →
                    </a>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-10 text-xs text-[var(--muted)] leading-relaxed space-y-1">
              <p>
                For laboratory and research use only. Not for human or
                veterinary consumption. Not evaluated by the FDA.
              </p>
              <p>Must be 21 or older to purchase.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
