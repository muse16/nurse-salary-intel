import type { Metadata } from 'next';
import { getAllNurseData, getAllStates, slugify } from '@/lib/data';
import Link from 'next/link';
import DataTable from '@/components/DataTable';
import HomePage from '@/components/HomePage';

export const metadata: Metadata = {
  title: 'Nurse Salary Calculator (2026) – Estimate Your RN Pay by State & City',
  description: 'Use our nurse salary calculator to estimate RN pay by state, city, and experience. Updated for 2026 with real data.',
};

export default function Home() {
  const allData = getAllNurseData();
  const states = getAllStates();

  // Calculate key stats
  const avgSalary = Math.round(
    allData.reduce((sum, pos) => sum + pos.salary, 0) / allData.length
  );
  const totalPositions = allData.length;
  const cleanContracts = allData.filter(pos => pos.red_flags === 'None').length;
  const uniqueHospitals = new Set(allData.map(pos => pos.hospital)).size;

  // Group by state and city for quick links
  const stateData = states.map(state => {
    const stateCities = [...new Set(
      allData.filter(pos => pos.state === state).map(pos => pos.city)
    )].sort();
    return { state, cities: stateCities };
  });

  const stats = {
    avgSalary,
    totalPositions,
    cleanContracts,
    uniqueHospitals
  };

  return (
    <>
      {/*
        Hero preload: next/image `priority` in a Client Component calls
        ReactDOM.preload('/images/hero-nurse.jpg') — the original JPG URL.
        But the <img srcset> uses /_next/image?url=...&w=640 (the optimized WebP).
        Different URLs = browser misses the preload entirely on mobile.
        This explicit <link> points to the actual optimized URLs so the browser
        starts the fetch before any JS runs (React 19 hoists <link> from Server
        Components to <head> during streaming SSR).
      */}
      <link
        rel="preload"
        as="image"
        href="/_next/image?url=%2Fimages%2Fhero-nurse.jpg&w=828&q=75"
        imageSrcSet="/_next/image?url=%2Fimages%2Fhero-nurse.jpg&w=640&q=75 640w, /_next/image?url=%2Fimages%2Fhero-nurse.jpg&w=828&q=75 828w, /_next/image?url=%2Fimages%2Fhero-nurse.jpg&w=1080&q=75 1080w, /_next/image?url=%2Fimages%2Fhero-nurse.jpg&w=1200&q=75 1200w"
        imageSizes="100vw"
        fetchPriority="high"
      />
      <HomePage stats={stats} allData={allData} stateData={stateData} />
    </>
  );
}
