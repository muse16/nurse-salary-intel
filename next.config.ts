import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
    ];
  },
};

export default nextConfig;
