import type { Metadata } from 'next';
import TravelNurseCalculator from './Calculator';

export const metadata: Metadata = {
  title: 'Travel Nurse Pay Calculator 2026 | Blended Rate + Take-Home',
  description:
    'Free travel nurse pay calculator. Enter your contract details to estimate weekly take-home, blended hourly rate, and tax-free stipend value. Compare two contracts side by side.',
  openGraph: {
    title: 'Travel Nurse Pay Calculator 2026 | Blended Rate + Take-Home',
    description:
      'Estimate weekly take-home, blended rate, and tax-free stipend value for any travel nursing contract. Compare two offers side by side.',
    url: 'https://nursesalaryintel.com/travel-nurse-pay-calculator',
    siteName: 'NurseSalaryIntel',
    images: [
      {
        url: 'https://nursesalaryintel.com/images/travel-nurse-pay-calculator-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Travel nurse with rolling suitcase outside a hospital entrance, reviewing her phone with a confident expression',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel Nurse Pay Calculator 2026',
    description:
      'Estimate weekly take-home, blended rate, and tax-free stipend value for any travel nursing contract.',
    images: ['https://nursesalaryintel.com/images/travel-nurse-pay-calculator-hero.webp'],
  },
  alternates: {
    canonical: 'https://nursesalaryintel.com/travel-nurse-pay-calculator',
  },
};

export default function TravelNurseCalculatorPage() {
  return <TravelNurseCalculator />;
}
