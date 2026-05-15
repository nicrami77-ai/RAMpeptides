"use client";

import { useSyncExternalStore, useState } from "react";

const STORAGE_KEY = "ramp_legal_gate_v1";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): boolean {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function getServerSnapshot(): boolean {
  // On server / before hydration, assume verified so we don't flash the gate.
  return true;
}

export default function LegalGate() {
  const verified = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const [age, setAge] = useState(false);
  const [research, setResearch] = useState(false);
  const [hidden, setHidden] = useState(false);

  if (verified || hidden) return null;

  const ready = age && research;

  const verify = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      /* ignore */
    }
    setHidden(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-gate-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/55 backdrop-blur-md"
    >
      <div className="bg-[var(--background)] text-[var(--foreground)] border border-[var(--border)] rounded-2xl max-w-md w-full p-8 shadow-2xl">
        <p className="uppercase tracking-[0.28em] text-[10px] text-[var(--muted)] mb-3">
          Research access
        </p>
        <h2
          id="legal-gate-title"
          className="font-display text-3xl tracking-tight leading-tight mb-4"
        >
          Before you enter.
        </h2>
        <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
          RAMpeptides supplies reference-grade peptides intended strictly for
          laboratory and research use. Not for human or veterinary consumption.
          You must be 21 or older to continue.
        </p>

        <label className="flex items-start gap-3 text-sm mb-3 cursor-pointer">
          <input
            type="checkbox"
            checked={age}
            onChange={(e) => setAge(e.target.checked)}
            className="mt-0.5 w-4 h-4 accent-[var(--foreground)]"
          />
          <span>I am 21 or older.</span>
        </label>

        <label className="flex items-start gap-3 text-sm mb-6 cursor-pointer">
          <input
            type="checkbox"
            checked={research}
            onChange={(e) => setResearch(e.target.checked)}
            className="mt-0.5 w-4 h-4 accent-[var(--foreground)]"
          />
          <span>I confirm research / laboratory use only.</span>
        </label>

        <button
          type="button"
          onClick={verify}
          disabled={!ready}
          className="w-full bg-[var(--foreground)] text-[var(--background)] uppercase tracking-[0.18em] text-xs font-semibold py-3 rounded-full transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Verify
        </button>
      </div>
    </div>
  );
}
