import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "YRG Ventures | Premium Interior Design",
    template: "%s | YRG Ventures",
  },
  description: "Transform your space with thoughtfully designed interiors and quality custom furniture tailored to your lifestyle. Based in Bangalore.",
  keywords: ["Interior Design", "Custom Furniture", "Turnkey Solutions", "Commercial Interiors", "Bangalore Interior Designers"],
  openGraph: {
    title: "YRG Ventures | Premium Interior Design",
    description: "Transform your space with thoughtfully designed interiors and quality custom furniture tailored to your lifestyle. Based in Bangalore.",
    url: "https://yrgventures.in",
    siteName: "YRG Ventures",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/PageLoader";
import { CookieConsent } from "@/components/CookieConsent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased font-sans bg-background text-foreground min-h-screen flex flex-col overflow-x-hidden transition-colors duration-300 ease-in-out">
        <PageLoader />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
