import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
    ],
  },
  async redirects() {
    return [
      // ── Existing redirects ──────────────────────────────────────────────
      {
        source: '/salary/new-york/new-york-city',
        destination: '/salary/new-york/new-york',
        permanent: true,
      },
      {
        source: '/nurse-salary-florida-2026',
        destination: '/rn-salary-by-state/florida',
        permanent: true,
      },
      {
        source: '/florida-rn-salary-2026',
        destination: '/rn-salary-by-state/florida',
        permanent: true,
      },
      {
        source: '/highest-paying-states-for-nurses',
        destination: '/highest-paying-states-for-rns-2026',
        permanent: true,
      },
      {
        source: '/rn-salary-calculator',
        destination: '/audit',
        permanent: true,
      },

      // ── Cannibalization fix: state blog posts → canonical state pages ────
      {
        source: '/arizona-rn-salary-2026',
        destination: '/rn-salary-by-state/arizona',
        permanent: true,
      },
      {
        source: '/california-rn-salary-2026',
        destination: '/rn-salary-by-state/california',
        permanent: true,
      },
      {
        source: '/texas-rn-salary-2026',
        destination: '/rn-salary-by-state/texas',
        permanent: true,
      },
      {
        source: '/new-york-rn-salary-2026',
        destination: '/rn-salary-by-state/new-york',
        permanent: true,
      },

      // ── Cannibalization fix: city blog posts → canonical city pages ──────
      {
        source: '/rn-salary-los-angeles-2026',
        destination: '/salary/california/los-angeles',
        permanent: true,
      },
      {
        source: '/rn-salary-miami-fl-2026',
        destination: '/salary/florida/miami',
        permanent: true,
      },
      {
        source: '/boston-rn-salary-2026',
        destination: '/salary/massachusetts/boston',
        permanent: true,
      },
      // /dallas-rn-salary-2026 and /houston-rn-salary-2026 are live rich blog posts — no redirect
      {
        source: '/orlando-rn-salary-2026',
        destination: '/salary/florida/orlando',
        permanent: true,
      },
      {
        source: '/phoenix-rn-salary-2026',
        destination: '/salary/arizona/phoenix',
        permanent: true,
      },

      // ── Cannibalization fix: specialty blog posts → canonical specialty pages
      {
        source: '/nicu-nurse-salary-2026',
        destination: '/nursing-salary/nicu-nurse-salary',
        permanent: true,
      },
      {
        source: '/icu-nurse-salary-2026',
        destination: '/nursing-salary/icu-nurse-salary',
        permanent: true,
      },

      // ── Fix 404s: /specialty/* routes don't exist ────────────────────────
      { source: '/specialty/icu', destination: '/nursing-salary/icu-nurse-salary', permanent: true },
      { source: '/specialty/emergency-room', destination: '/icu-vs-er-nurse-salary-2026', permanent: true },
      { source: '/specialty/er', destination: '/icu-vs-er-nurse-salary-2026', permanent: true },
      { source: '/specialty/travel-nurse', destination: '/travel-nursing/salary-guide-2026', permanent: true },
      { source: '/specialty/contract', destination: '/travel-nursing/salary-guide-2026', permanent: true },
      { source: '/specialty/pediatrics', destination: '/pediatric-nurse-salary-2026', permanent: true },
      { source: '/specialty/psychiatric', destination: '/pmhnp-salary-2026', permanent: true },
      { source: '/specialty/surgical', destination: '/rn-salary-by-state', permanent: true },
      { source: '/specialty/dialysis', destination: '/rn-salary-by-state', permanent: true },
      { source: '/specialty/part-time', destination: '/per-diem-nurse-salary-2026', permanent: true },
      { source: '/specialty/:path*', destination: '/rn-salary-by-state', permanent: true },

      // ── Fix 404s: /salary/:state (no city) → state hub page ─────────────
      { source: '/salary/:state', destination: '/rn-salary-by-state/:state', permanent: true },

      // ── Fix 404s: /salary/:state/:city/:specialty (4-level) → city page ──
      { source: '/salary/:state/:city/:specialty', destination: '/salary/:state/:city', permanent: true },
    ];
  },
};

export default nextConfig;
