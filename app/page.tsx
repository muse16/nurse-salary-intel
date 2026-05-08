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

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nurse Salary Intel',
    alternateName: 'NurseSalaryIntel',
    url: 'https://nursesalaryintel.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://nursesalaryintel.com/images/logo.svg',
      width: 512,
      height: 512,
    },
    description: 'Transparent nurse salary data, contract intelligence, and career tools for registered nurses. BLS-sourced RN pay by state, city, and specialty — updated for 2026.',
    foundingDate: '2025',
    knowsAbout: [
      'Registered Nurse Salary',
      'Travel Nurse Pay',
      'Nursing Contracts',
      'Nurse Salary by State',
      'Nurse Salary by Specialty',
      'Travel Nursing Contract Red Flags',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'muse16llc@gmail.com',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HeroSection />
      <HomePage stats={stats} allData={allData} stateData={stateData} />
    </>
  );
}
