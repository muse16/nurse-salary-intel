import type { Metadata } from 'next';
import { getAllNurseData, getAllStates, slugify } from '@/lib/data';
import Link from 'next/link';
import DataTable from '@/components/DataTable';
import HomePage from '@/components/HomePage';
import HeroSection from '@/components/HeroSection';

export const metadata: Metadata = {
  title: 'Nurse Salary Calculator (2026) – Estimate Your RN Pay by State & City',
  description: 'Estimate RN pay by state and city — free 2026 nurse salary calculator. National avg $89,010/yr. Filter by specialty, experience, and hospital system.',
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
      <HeroSection />
      <HomePage stats={stats} allData={allData} stateData={stateData} />
    </>
  );
}
