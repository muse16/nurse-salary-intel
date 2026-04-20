import { getCityData, slugify, unslugify, getAllStates, getCitiesByState } from '@/lib/data';
import { redirect, notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    state: string;
    city: string;
    specialty: string;
  }>;
}

export async function generateStaticParams() {
  return [];
}

export default async function SpecialtyRedirect({ params }: PageProps) {
  const { state, city } = await params;
  const stateFormatted = unslugify(state);
  const cityFormatted = unslugify(city);
  const cityData = getCityData(stateFormatted, cityFormatted);

  if (cityData) {
    redirect(`/salary/${state}/${city}`);
  }

  const validStates = getAllStates().map(s => slugify(s));
  if (validStates.includes(state)) {
    redirect(`/rn-salary-by-state/${state}`);
  }

  notFound();
}
