import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    nodeEnv: process.env.NODE_ENV,
    isProcessEnvObject: typeof process.env === 'object',
    hasStripeKeyLiteral: !!process.env.STRIPE_SECRET_KEY,
    stripeKeyLength: process.env.STRIPE_SECRET_KEY ? process.env.STRIPE_SECRET_KEY.length : 0,
  });
}
