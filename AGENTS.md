# AGENTS.md — web

Notes for AI agents working in this project.

## Stack

- **Framework:** Next.js 16 (App Router, TypeScript, Turbopack)
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss"` in `globals.css`)
- **Fonts:** `next/font/google` → Inter (body) + Space Grotesk (display)
- **QR codes:** `qrcode.react`
- **Package manager:** npm
- No analytics. No third-party trackers. Keep it that way.

## Source of truth

- `src/lib/catalog.ts` — the entire product catalog. Update there, not
  per-page. Adding a product creates its detail route automatically.

## Conventions

- Use the `@/*` import alias (resolves to `src/`).
- Use `next/image` for all imagery. Product images live at
  `public/products/<slug>.jpg`.
- Plain Tailwind classes only — no shadcn, MUI, etc.
- Keep server components by default. Mark only what needs client state
  (`Header`, `LegalGate`, `CoaQrCode`) with `"use client"`.
- Long-form product copy is research-only language and was lifted verbatim
  from the live site. Preserve that tone for any new products.

## Legal gate

- Component: `src/components/LegalGate.tsx`
- Storage key: `localStorage["ramp_legal_gate_v1"] = "true"`
- Dismisses on Verify; never re-prompts on the same browser.

## Build / dev

```bash
npm install
npm run dev      # localhost:3000
npm run build    # production build
npm run lint
```
