import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const allKeys = Object.keys(process.env);
  const possibleKeys = allKeys.filter(k => k.toLowerCase().includes('strip') || k.toLowerCase().includes('sk_'));
  return NextResponse.json({
    possibleKeys,
  });
}
