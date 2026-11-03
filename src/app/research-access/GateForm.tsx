"use client";

import { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function GateForm() {
  const router = useRouter();
  const [researcherType, setResearcherType] = useState("");
  const [cb21, setCb21] = useState(false);
  const [cbLab, setCbLab] = useState(false);
  const [cbTerms, setCbTerms] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load Cloudflare Turnstile script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    
    // Setup callback function for turnstile
    (window as any).onTurnstileSuccess = (token: string) => {
      setTurnstileToken(token);
    };

    return () => {
      document.body.removeChild(script);
      delete (window as any).onTurnstileSuccess;
    };
  }, []);

  const allComplete = researcherType !== "" && cb21 && cbLab && cbTerms && turnstileToken !== "";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!allComplete || isSubmitting) return;
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/attestation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ researcherType, cb21, cbLab, cbTerms, turnstileToken }),
      });

      if (res.ok) {
        // Find redirect target or default to products
        const params = new URLSearchParams(window.location.search);
        const nextUrl = params.get("next") || "/products";
        router.push(nextUrl);
        router.refresh();
      } else {
        alert("Verification failed. Please try again.");
        setIsSubmitting(false);
      }
    } catch (err) {
      alert("Error submitting attestation.");
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-left bg-zinc-950 border border-zinc-800 p-6 sm:p-8 rounded-xl w-full max-w-lg mx-auto shadow-2xl">
      <div className="mb-6">
        <label className="block text-xs uppercase tracking-wider text-white/60 mb-2">Researcher Type</label>
        <select
          value={researcherType}
          onChange={(e) => setResearcherType(e.target.value)}
          className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-white text-sm focus:outline-none focus:border-white/50 transition-colors"
          required
        >
          <option value="" disabled>Select researcher type...</option>
          <option value="University/Academic">University/Academic</option>
          <option value="Independent Laboratory">Independent Laboratory</option>
          <option value="Biotech/Pharmaceutical Company">Biotech/Pharmaceutical Company</option>
          <option value="Contract Research Organization">Contract Research Organization</option>
          <option value="Other Research Professional">Other Research Professional</option>
        </select>
      </div>

      <div className="space-y-4 mb-6">
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative flex items-center justify-center pt-1">
            <input
              type="checkbox"
              checked={cb21}
              onChange={(e) => setCb21(e.target.checked)}
              className="appearance-none w-5 h-5 border border-zinc-600 rounded bg-zinc-900 checked:bg-white checked:border-white transition-colors cursor-pointer shrink-0"
              required
            />
            {cb21 && (
              <svg className="absolute w-3 h-3 text-black pointer-events-none" viewBox="0 0 14 10" fill="none">
                <path d="M1 5L5 9L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
          <span className="text-sm text-white/90 group-hover:text-white transition-colors">
            I confirm that I am at least 21 years old.
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative flex items-center justify-center pt-1">
            <input
              type="checkbox"
              checked={cbLab}
              onChange={(e) => setCbLab(e.target.checked)}
              className="appearance-none w-5 h-5 border border-zinc-600 rounded bg-zinc-900 checked:bg-white checked:border-white transition-colors cursor-pointer shrink-0"
              required
            />
            {cbLab && (
              <svg className="absolute w-3 h-3 text-black pointer-events-none" viewBox="0 0 14 10" fill="none">
                <path d="M1 5L5 9L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
          <span className="text-sm text-white/90 group-hover:text-white transition-colors leading-relaxed">
            I am purchasing for laboratory research use only, not for human or animal consumption, or for cosmetic, therapeutic, performance, or recreational purposes.
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative flex items-center justify-center pt-1">
            <input
              type="checkbox"
              checked={cbTerms}
              onChange={(e) => setCbTerms(e.target.checked)}
              className="appearance-none w-5 h-5 border border-zinc-600 rounded bg-zinc-900 checked:bg-white checked:border-white transition-colors cursor-pointer shrink-0"
              required
            />
            {cbTerms && (
              <svg className="absolute w-3 h-3 text-black pointer-events-none" viewBox="0 0 14 10" fill="none">
                <path d="M1 5L5 9L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
          <span className="text-sm text-white/90 group-hover:text-white transition-colors">
            I have read and agree to the <Link href="/terms" className="underline hover:text-white" target="_blank">Terms of Service</Link> and <Link href="/policies/research-access" className="underline hover:text-white" target="_blank">Research Access Policy</Link>.
          </span>
        </label>
      </div>

      <div className="mb-8 flex justify-center">
        <div 
          className="cf-turnstile" 
          data-sitekey="1x00000000000000000000AA"
          data-callback="onTurnstileSuccess"
          data-theme="dark"
        ></div>
      </div>

      <button
        type="submit"
        disabled={!allComplete || isSubmitting}
        className="w-full bg-white text-black font-semibold uppercase tracking-widest text-sm py-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/90 transition-all"
      >
        {isSubmitting ? "Verifying..." : "Enter"}
      </button>
    </form>
  );
}
