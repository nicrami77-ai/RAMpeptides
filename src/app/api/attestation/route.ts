import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { researcherType, cb21, cbLab, cbTerms, turnstileToken } = body;

    if (!researcherType || !cb21 || !cbLab || !cbTerms || !turnstileToken) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: Verify Turnstile token with Cloudflare API if using real sitekey
    // TODO: Save attestation to database (e.g. Postgres or Vercel KV) to attach to future Stripe sessions
    const attestationId = `att_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const userAgent = req.headers.get("user-agent") || "unknown";

    console.log("Recorded Attestation:", {
      id: attestationId,
      timestamp: new Date().toISOString(),
      ip,
      userAgent,
      researcherType,
      cb21,
      cbLab,
      cbTerms
    });

    // Create a response that redirects or returns success
    const response = NextResponse.json({ success: true, attestationId });

    // Set cookie for 30 days
    response.cookies.set({
      name: "research_access_granted",
      value: "true",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    // Optional: store attestationId in a cookie if you want to attach it to the cart/Stripe later
    response.cookies.set({
      name: "research_attestation_id",
      value: attestationId,
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
