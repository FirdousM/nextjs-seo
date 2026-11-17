import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} | Hiking & Travel Backpacks`, template: `%s | ${SITE_NAME}` },
  description: "Waterproof hiking backpacks, daypacks and travel bags. Free shipping across India.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body className="min-h-screen bg-white text-stone-900 antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
