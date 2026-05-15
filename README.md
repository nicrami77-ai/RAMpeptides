# RAMpeptides — web

Next.js 16 (App Router, TypeScript, Tailwind v4) rebuild of the RAMpeptides
public site.

## Quick start

```bash
npm install
npm run dev
# http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Catalog

The catalog is a single source of truth at `src/lib/catalog.ts`. Each product
has its slug, price, long-form description, specs, and Janoshik COA URL.

To add or update a product:

1. Edit `src/lib/catalog.ts`
2. Drop the product image at `public/products/<slug>.jpg`
3. New routes generate automatically via `generateStaticParams()`.

## Legal gate

`src/components/LegalGate.tsx` is a client component that gates first-visit
access behind two checkboxes (21+ and research-only confirmation). It writes
`ramp_legal_gate_v1=true` to `localStorage` once verified.

## Stack

- Next.js 16 App Router
- Tailwind v4 (`@import "tailwindcss"`)
- Fonts via `next/font/google` (Inter + Space Grotesk)
- `qrcode.react` for COA QR codes
- No analytics, no third-party scripts.
