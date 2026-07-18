import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-4">
            <Image
              src="/logo.png"
              alt="RAMpeptides"
              width={220}
              height={88}
              className="h-10 w-auto opacity-60"
            />
            <p className="text-sm text-[var(--muted)] max-w-md leading-relaxed">
              Affordable, high-quality peptides for research purposes.
              Intentional catalog, careful sourcing.
            </p>
            <p className="uppercase tracking-[0.22em] text-[var(--muted)] text-[10px]">
              🫡 Veteran-owned · Family-operated
            </p>
            <p className="text-sm text-[var(--muted)]">
              Third-party tested by{" "}
              <a
                href="https://www.janoshik.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[var(--foreground)]"
              >
                Janoshik Analytical
              </a>
            </p>
            <p className="text-sm">
              <a
                href="mailto:info@rampeptides.com"
                className="underline hover:text-[var(--muted)]"
              >
                info@rampeptides.com
              </a>
            </p>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.22em] text-[10px] text-[var(--muted)] mb-4">
              Catalog
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="hover:text-[var(--muted)]">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/extras" className="hover:text-[var(--muted)]">
                  Extras
                </Link>
              </li>
              <li>
                <Link href="/lab-results" className="hover:text-[var(--muted)]">
                  Lab Results
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[var(--muted)]">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.22em] text-[10px] text-[var(--muted)] mb-4">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/disclaimer" className="hover:text-[var(--muted)]">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--muted)]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.22em] text-[10px] text-[var(--muted)] mb-4">
              Follow
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="https://x.com/rampeptides"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="RAMpeptides on X"
                className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.812l-5.34-6.98L4.25 22H1l8.02-9.165L1.5 2h6.98l4.83 6.39L18.244 2Zm-1.194 18h1.86L7.06 4H5.1l11.95 16Z" />
                </svg>
              </a>

            </div>
          </div>
        </div>

        <div className="border-t border-[var(--border)] mt-16 pt-8 flex flex-col md:flex-row md:items-start md:justify-between gap-4 text-xs text-[var(--muted)] leading-relaxed">
          <p className="max-w-3xl">
            All products are sold strictly for laboratory and research purposes
            only. Not for human consumption. Not for veterinary use. Not
            evaluated by the FDA. Must be 21 or older to purchase.
          </p>
          <p className="whitespace-nowrap">
            © 2026 RAMpeptides. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
