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
  { path: '/nursing-salary/registered-nurse-salary-guide', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/nursing-salary/crna-salary-by-state', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/nursing-salary/icu-nurse-salary', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/nursing-salary/nicu-nurse-salary', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/nursing-salary/nurse-practitioner-salary', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/nursing-salary/er-nurse-salary', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/nursing-salary/labor-delivery-nurse-salary', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/nursing-salary/charge-nurse-salary', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/nursing-salary/how-to-become-nurse-practitioner', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/nursing-salary/best-rn-to-bsn-programs', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/nursing-salary/salary-data-2026', priority: 0.9, changeFrequency: 'monthly' },

  // RN Salary by City hub
  { path: '/rn-salary-by-city', priority: 0.9, changeFrequency: 'monthly' },

  // RN Salary by State cluster
  { path: '/rn-salary-by-state', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/highest-paying-states', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/alabama', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/alaska', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/arizona', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/arkansas', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/california', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/colorado', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/connecticut', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/delaware', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/florida', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/georgia', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/hawaii', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/idaho', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/illinois', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/indiana', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/iowa', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/kansas', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/kentucky', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/louisiana', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/maine', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/maryland', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/massachusetts', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/michigan', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/minnesota', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/mississippi', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/missouri', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/montana', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/nebraska', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/nevada', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/new-hampshire', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/new-jersey', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/new-mexico', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/new-york', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/north-carolina', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/north-dakota', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/ohio', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/oklahoma', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/oregon', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/pennsylvania', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/rhode-island', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/south-carolina', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/south-dakota', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/tennessee', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/texas', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/utah', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/vermont', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/virginia', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/washington', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/west-virginia', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/wisconsin', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-state/wyoming', priority: 0.8, changeFrequency: 'monthly' },

  // Salary Negotiation cluster
  { path: '/salary-negotiation/nurse-playbook', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/salary-negotiation/how-to-negotiate-nursing-salary', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/salary-negotiation/travel-nursing-contract-review', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/salary-negotiation/contract-clauses-to-watch', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/salary-negotiation/night-shift-differential-pay', priority: 0.8, changeFrequency: 'monthly' },

  // New SEO pages — April 2026
  { path: '/night-shift-differential-nurses', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/nurse-overtime-pay-guide', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/highest-paying-nursing-specialties', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/travel-nurse-salary-guide', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/nurse-salary-california-vs-texas', priority: 0.9, changeFrequency: 'monthly' },

  { path: '/how-much-do-nurses-make-per-hour', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/entry-level-nurse-salary', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/nurse-salary-by-hospital', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/registered-nurse-salary-breakdown', priority: 0.8, changeFrequency: 'monthly' },

  // Week 4 editorial posts — April 2026
  { path: '/dallas-rn-salary-2026', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/houston-rn-salary-2026', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/pediatric-nurse-salary-2026', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/per-diem-nurse-salary-2026', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-vs-lpn-salary-2026', priority: 0.9, changeFrequency: 'monthly' },

  // Week 5 salary guide pages -- April 2026
  { path: '/chicago-rn-salary-2026', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/seattle-rn-salary-2026', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/atlanta-rn-salary-2026', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/crna-salary-2026', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/new-grad-rn-salary-2026', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/houston-vs-dallas-rn-salary-2026', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/icu-vs-er-nurse-salary-2026', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/nurse-sign-on-bonus-guide-2026', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/travel-nurse-vs-staff-nurse-salary-2026', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rn-salary-by-years-of-experience-2026', priority: 0.9, changeFrequency: 'monthly' },

  // Week 1 editorial posts — April 2026
  { path: '/rn-salary-miami-fl-2026', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/icu-nurse-salary-2026', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/nurse-salary-negotiation-scripts-2026', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/highest-paying-states-for-rns-2026', priority: 0.8, changeFrequency: 'monthly' },
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
