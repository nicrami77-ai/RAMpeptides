import type { Metadata } from "next";
import { catalog } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Lab Results · RAMpeptides",
  description:
    "Third-party COAs by Janoshik Analytical for every RAMpeptides product.",
};

export default function LabResultsPage() {
  return (
    <section className="px-6 lg:px-10">
      <div className="max-w-7xl mx-auto py-20 md:py-28">
        <p className="uppercase tracking-[0.22em] text-[10px] text-[var(--muted)] mb-4">
          Documentation
        </p>
        <h1 className="font-display text-5xl md:text-7xl tracking-[-0.03em] mb-6">
          Lab Results.
        </h1>
        <p className="max-w-2xl text-base md:text-lg text-[var(--muted)] leading-relaxed mb-16">
          Every product is independently third-party tested by{" "}
          <a
            href="https://www.janoshik.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[var(--foreground)]"
          >
            Janoshik Analytical
          </a>
          . Lot-level certificates cover identity, purity by HPLC, and mass
          confirmation. Open any report directly from the verification provider.
        </p>

        <div className="mb-16 rounded-xl overflow-hidden border border-[var(--border)] max-w-4xl bg-black">
          <video
            src="/videos/lab-tested-zuri.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {catalog
            .filter((p) => p.coaUrl)
            .map((p) => (
              <div
                key={p.slug}
                className="border border-[var(--border)] rounded-xl p-6 flex flex-col"
              >
                <p className="uppercase tracking-[0.22em] text-[10px] text-[var(--muted)] mb-3">
                  {p.category}
                </p>
                <h3 className="font-display text-2xl tracking-tight">
                  {p.name}
                </h3>
                <p className="text-sm text-[var(--muted)] mt-1">
                  {p.strength}
                </p>
                <p className="mt-6 uppercase tracking-[0.22em] text-[10px] text-[var(--muted)]">
                  Janoshik · Verified
                </p>
                <a
                  href={p.coaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-[var(--foreground)] text-[var(--background)] uppercase tracking-[0.18em] text-[10px] font-semibold px-5 py-3 rounded-full hover:opacity-90 transition-opacity self-start"
                >
                  Verify →
                </a>
              </div>
            ))}
        </div>

        <p className="mt-16 text-sm text-[var(--muted)] leading-relaxed max-w-2xl">
          Questions about a specific lot or batch? Email{" "}
          <a
            href="mailto:info@rampeptides.com"
            className="underline hover:text-[var(--foreground)]"
          >
            info@rampeptides.com
          </a>{" "}
          and we&apos;ll route it directly.
        </p>
      </div>
    </section>
  );
}
