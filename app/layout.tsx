import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import AssistLoopScript from "./components/AssistLoopScript";
import { Analytics } from "@vercel/analytics/next";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

// ─── REPLACE with your GA4 Measurement ID from analytics.google.com ───────────
const GA4_ID = "G-MEGH7BGCLK";
// ─────────────────────────────────────────────────────────────────────────────

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

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

// Pre-computed JSON-LD strings — extracted here so JSX parser isn't confused by nested object literals
const DATASET_SCHEMA_JSON = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Dataset",
  "name": "US Nurse Salary Data by State and Specialty 2026",
  "description": "Comprehensive nurse salary data for all 50 US states and 12 nursing specialties, sourced from the Bureau of Labor Statistics (BLS) Occupational Employment and Wage Statistics (May 2024).",
  "url": "https://nursesalaryintel.com",
  "creator": { "@type": "Organization", "name": "NurseSalaryIntel", "url": "https://nursesalaryintel.com" },
  "dateModified": "2026-05-01",
  "license": "https://nursesalaryintel.com",
  "variableMeasured": ["Average annual nurse salary", "Minimum nurse salary", "Maximum nurse salary", "Nurse employment level by state", "Cost of living index by state"],
  "spatialCoverage": "United States",
  "temporalCoverage": "2026",
  "keywords": ["nurse salary", "RN salary", "travel nurse pay", "nurse practitioner salary", "CRNA salary", "nursing salary by state", "healthcare wages"],
});

const WEBSITE_SCHEMA_JSON = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "NurseSalaryIntel",
  "url": "https://nursesalaryintel.com",
  "description": "Free nurse salary calculator and contract audit tool. Compare RN pay by state, specialty, and experience using the latest available BLS and market data.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://nursesalaryintel.com/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="fo-verify" content="39dcd307-ed45-4e62-b236-2bf2cfc7ab62" />
        {/* Preconnect to third-party origins so TCP/TLS is ready before scripts load */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        {/* fonts.googleapis.com / fonts.gstatic.com removed — next/font self-hosts Manrope at build time */}

        {/* AEO: Dataset Schema — static JSON-LD, no JS execution */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: DATASET_SCHEMA_JSON }} />

        {/* AEO: WebSite Schema with SearchAction — static JSON-LD, no JS execution */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: WEBSITE_SCHEMA_JSON }} />
      </head>
      <body className={`${manrope.variable} antialiased`}>
        {children}
        <SiteFooter />

        {/* AdSense — lazyOnload defers until page is idle, reduces TBT on mobile */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4487629215570224"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />

        {/* Google Analytics GA4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="lazyOnload"
        />
        <Script id="ga4-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_ID}');
          `}
        </Script>

        <Analytics />

        {/* AssistLoop Widget */}
        <AssistLoopScript />

      </body>
    </html>
  );
}
