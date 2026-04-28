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
    ];
  },
};

export default nextConfig;
