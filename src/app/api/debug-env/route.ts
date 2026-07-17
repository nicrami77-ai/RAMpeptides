import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const allKeys = Object.keys(process.env);
  const stripeKeys = allKeys.filter(k => k.toLowerCase().includes('stripe') || k.toLowerCase().includes('sk_'));
  
  return NextResponse.json({
    timestamp: new Date().toISOString(),
    totalKeys: allKeys.length,
    stripeKeysFound: stripeKeys,
    hasStripeKeyLiteral: !!process.env.STRIPE_SECRET_KEY,
    nodeEnv: process.env.NODE_ENV,
    vercelEnv: process.env.VERCEL_ENV,
  });
}
