import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// ─── REPLACE with your GA4 Measurement ID from analytics.google.com ───────────
const GA4_ID = "G-MEGH7BGCLK";
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Nurse Salary Calculator | Free RN Pay Estimator by State & Specialty",
  description: "Use our free Nurse Salary Calculator to estimate RN pay by state, specialty, and experience. Compare travel nurse and staff nurse salaries across the US with real BLS data.",
  keywords: ["nurse salary calculator", "RN salary calculator", "travel nurse salary", "nurse pay estimator", "nursing salary by state", "nurse salary by specialty"],
  metadataBase: new URL("https://nursesalaryintel.com"),
  openGraph: {
    type: "website",
    siteName: "Nurse Salary Intel",
    title: "Nurse Salary Calculator — Free RN Pay Estimator",
    description: "Calculate your nurse salary by state, specialty, and experience. Free tool with real BLS data for travel nurses and staff RNs.",
    url: "https://nursesalaryintel.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nurse Salary Calculator — Free RN pay estimator by state and specialty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nurse Salary Calculator — Free RN Pay Estimator",
    description: "Calculate your nurse salary by state, specialty, and experience. Free tool with real BLS data.",
    images: ["/og-image.png"],
  },
  other: {
    "google-adsense-account": "ca-pub-4487629215570224",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        {children}
        <Analytics />

        {/* Google Analytics GA4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_ID}');
          `}
        </Script>

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4487629215570224"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        <Analytics />
      </body>
    </html>
  );
}
