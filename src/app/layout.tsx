import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import ResearchBanner from "@/components/ResearchBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalGate from "@/components/LegalGate";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rampeptides.com"),
  title: "RAMpeptides — Power through knowledge",
  description:
    "Affordable, high-quality peptides for research purposes. Veteran-owned, family-operated. Power through knowledge.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "RAMpeptides — Power through knowledge",
    description:
      "Affordable, high-quality peptides for research purposes. Veteran-owned, family-operated. Power through knowledge.",
    images: ["/logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAMpeptides — Power through knowledge",
    description:
      "Affordable, high-quality peptides for research purposes. Veteran-owned, family-operated.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen flex flex-col">
        <ResearchBanner />
        <CartProvider>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        </CartProvider>
        <LegalGate />
        <Analytics />
      </body>
    </html>
  );
}
