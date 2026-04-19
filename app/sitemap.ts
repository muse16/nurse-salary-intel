import type { MetadataRoute } from 'next';
import { specialtyConfig, stateData, stateToSlug } from '@/lib/bls-data';
import { getAllStates, getCitiesByState, getAllHospitals, slugify } from '@/lib/data';

const BASE = 'https://nursesalaryintel.com';

type SitemapEntry = MetadataRoute.Sitemap[number];

const staticRoutes: { path: string; priority: number; changeFrequency: SitemapEntry['changeFrequency'] }[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/audit', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/salary/bsn-vs-rn', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/salary-data', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/blog/nursing-contract-audit-kit-what-it-includes', priority: 0.7, changeFrequency: 'monthly' },

  // Travel Nursing cluster
  { path: '/travel-nursing/salary-guide-2026', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/travel-nursing/salary-by-state', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/travel-nursing/salary-by-specialty', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/travel-nursing/pay-package-breakdown', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/travel-nursing/contract-red-flags', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/travel-nursing/how-to-negotiate-contract', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/travel-nursing/vs-staff-nurse-salary', priority: 0.7, changeFrequency: 'monthly' },

  // Nursing Salary by Specialty cluster
  { path: '/nursing-salary/by-specialty-2026', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/nursing-salary/crna-salary-by-state', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/nursing-salary/icu-nurse-salary', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/nursing-salary/nicu-nurse-salary', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/nursing-salary/nurse-practitioner-salary', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/nursing-salary/er-nurse-salary', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/nursing-salary/labor-delivery-nurse-salary', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/nursing-salary/charge-nurse-salary', priority: 0.7, changeFrequency: 'monthly' },

  // RN Salary by State cluster
  { path: '/rn-salary-by-state', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/california', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/texas', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/new-york', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/florida', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/highest-paying-states', priority: 0.8, changeFrequency: 'monthly' },

  // Salary Negotiation cluster
  { path: '/salary-negotiation/nurse-playbook', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/salary-negotiation/how-to-negotiate-nursing-salary', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/salary-negotiation/travel-nursing-contract-review', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/salary-negotiation/contract-clauses-to-watch', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/salary-negotiation/night-shift-differential-pay', priority: 0.8, changeFrequency: 'monthly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: SitemapEntry[] = staticRoutes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  // Specialty × state pages (12 specialties × 50 states = 600 URLs)
  const specialtyStateEntries: SitemapEntry[] = [];
  for (const spec of specialtyConfig) {
    for (const sd of stateData) {
      specialtyStateEntries.push({
        url: `${BASE}/nursing-salary/${spec.slug}/${stateToSlug(sd.state)}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  // City × state salary pages
  const cityStateEntries: SitemapEntry[] = [];
  const states = getAllStates();
  for (const state of states) {
    const cities = getCitiesByState(state);
    for (const city of cities) {
      cityStateEntries.push({
        url: `${BASE}/salary/${slugify(state)}/${slugify(city)}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  }

  // Hospital pages
  const hospitalEntries: SitemapEntry[] = getAllHospitals().map((hospital) => ({
    url: `${BASE}/hospital/${slugify(hospital)}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [
    ...staticEntries,
    ...specialtyStateEntries,
    ...cityStateEntries,
    ...hospitalEntries,
  ];
}
