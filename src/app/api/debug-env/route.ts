import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const envKeys = Object.keys(process.env).filter(k => k.toLowerCase().includes('stripe'));
  return NextResponse.json({
    stripeKeysFound: envKeys,
    hasStripeKey: !!process.env.STRIPE_SECRET_KEY,
  });
}
