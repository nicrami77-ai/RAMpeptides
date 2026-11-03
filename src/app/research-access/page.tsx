import Image from "next/image";
import Link from "next/link";
import GateForm from "./GateForm";

export default function ResearchAccessPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      <main className="flex-grow flex flex-col items-center justify-center p-6 sm:p-12">
        <div className="max-w-xl w-full mx-auto text-center mb-8">
          <Image
            src="/logo.png"
            alt="RAMpeptides"
            width={300}
            height={120}
            priority
            className="w-[200px] h-auto mx-auto mb-6 invert brightness-0"
          />
          <p className="uppercase tracking-[0.2em] text-[10px] text-white/70 font-semibold mb-8">
            Veteran-Owned · Goodyear, Arizona
          </p>
          <h1 className="font-display text-3xl sm:text-4xl tracking-tight mb-4">
            Research Access Required
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8">
            RAMpeptides supplies research compounds for in-vitro laboratory use only. Access is limited to qualified researchers 21 years of age or older.
          </p>
          
          <GateForm />
          
          <p className="mt-8 text-[10px] text-white/50 text-center">
            Your attestation may be recorded.
          </p>
        </div>
      </main>

      <footer className="w-full border-t border-[var(--border)] py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 text-[10px] uppercase tracking-[0.1em] text-white/60">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/refund" className="hover:text-white transition-colors">Refund</Link>
            <Link href="/shipping" className="hover:text-white transition-colors">Shipping</Link>
            <Link href="/policies/research-access" className="hover:text-white transition-colors">Research Access Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <div className="text-center sm:text-right">
            (623) 252-2758 (text only) · info@rampeptides.com
          </div>
        </div>
      </footer>
    </div>
  );
}
