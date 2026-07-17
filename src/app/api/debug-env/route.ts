import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const allKeys = Object.keys(process.env);
  return NextResponse.json({
    totalKeys: allKeys.length,
    sampleKeys: allKeys.slice(0, 10),
    hasVercel: allKeys.includes("VERCEL"),
    vercelEnv: process.env.VERCEL_ENV,
    hasStripeKeyLiteral: !!process.env.STRIPE_SECRET_KEY,
  });
}
