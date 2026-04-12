// BLS-based nursing salary data for 2026
// Data source: Bureau of Labor Statistics (BLS) May 2024 data with 2026 projections

export interface NurseSpecialty {
  id: string;
  name: string;
  avgSalary: number;
  minSalary: number;
  maxSalary: number;
  description: string;
}

export interface StateData {
  state: string;
  avgSalary: number;
  employmentLevel: number;
  costOfLivingIndex: number;
}

export const nurseSpecialties: NurseSpecialty[] = [
  {
    id: 'er-nurse',
    name: 'Emergency Room Nurse',
    avgSalary: 86750,
    minSalary: 65890,
    maxSalary: 124350,
    description: 'Emergency and trauma care'
  },
  {
    id: 'icu-nurse',
    name: 'ICU/Critical Care Nurse',
    avgSalary: 89540,
    minSalary: 68200,
    maxSalary: 127800,
    description: 'Intensive care and critical patient monitoring'
  },
  {
    id: 'neonatal-nurse',
    name: 'Neonatal Nurse (NICU)',
    avgSalary: 88760,
    minSalary: 67430,
    maxSalary: 126540,
    description: 'Care for premature and critically ill newborns'
  },
  {
    id: 'nurse-anesthetist',
    name: 'Nurse Anesthetist (CRNA)',
    avgSalary: 203090,
    minSalary: 158390,
    maxSalary: 239200,
    description: 'Administers anesthesia and monitors patients'
  },
  {
    id: 'nurse-midwife',
    name: 'Nurse Midwife',
    avgSalary: 120880,
    minSalary: 91070,
    maxSalary: 156380,
    description: 'Provides prenatal, delivery, and postpartum care'
  },
  {
    id: 'nurse-practitioner',
    name: 'Nurse Practitioner',
    avgSalary: 124680,
    minSalary: 91440,
    maxSalary: 163350,
    description: 'Advanced practice registered nurse'
  },
  {
    id: 'oncology-nurse',
    name: 'Oncology Nurse',
    avgSalary: 84920,
    minSalary: 64180,
    maxSalary: 119750,
    description: 'Cancer patient care and chemotherapy administration'
  },
  {
    id: 'pediatric-nurse',
    name: 'Pediatric Nurse',
    avgSalary: 79340,
    minSalary: 59870,
    maxSalary: 113200,
    description: 'Care for infants, children, and adolescents'
  },
  {
    id: 'psychiatric-nurse',
    name: 'Psychiatric Nurse',
    avgSalary: 78540,
    minSalary: 58920,
    maxSalary: 112340,
    description: 'Mental health and psychiatric care'
  },
  {
    id: 'registered-nurse',
    name: 'Registered Nurse (RN)',
    avgSalary: 81220,
    minSalary: 61250,
    maxSalary: 120460,
    description: 'General medical and surgical care'
  },
  {
    id: 'surgical-nurse',
    name: 'Surgical/Perioperative Nurse',
    avgSalary: 85320,
    minSalary: 64720,
    maxSalary: 121890,
    description: 'Operating room and surgical care'
  },
  {
    id: 'travel-nurse',
    name: 'Travel Nurse',
    avgSalary: 102800,
    minSalary: 75600,
    maxSalary: 145000,
    description: 'Temporary assignments nationwide'
  }
];

export const stateData: StateData[] = [
  { state: 'Alabama', avgSalary: 66390, employmentLevel: 54290, costOfLivingIndex: 88.1 },
  { state: 'Alaska', avgSalary: 96990, employmentLevel: 6670, costOfLivingIndex: 127.1 },
  { state: 'Arizona', avgSalary: 82960, employmentLevel: 70180, costOfLivingIndex: 108.9 },
  { state: 'Arkansas', avgSalary: 67010, employmentLevel: 32890, costOfLivingIndex: 86.9 },
  { state: 'California', avgSalary: 133340, employmentLevel: 314840, costOfLivingIndex: 151.7 },
  { state: 'Colorado', avgSalary: 82010, employmentLevel: 60170, costOfLivingIndex: 105.6 },
  { state: 'Connecticut', avgSalary: 91620, employmentLevel: 38270, costOfLivingIndex: 127.7 },
  { state: 'Delaware', avgSalary: 81450, employmentLevel: 11130, costOfLivingIndex: 110.5 },
  { state: 'Florida', avgSalary: 75790, employmentLevel: 211540, costOfLivingIndex: 100.7 },
  { state: 'Georgia', avgSalary: 75080, employmentLevel: 91720, costOfLivingIndex: 89.2 },
  { state: 'Hawaii', avgSalary: 113060, employmentLevel: 14380, costOfLivingIndex: 193.3 },
  { state: 'Idaho', avgSalary: 72160, employmentLevel: 16820, costOfLivingIndex: 104.2 },
  { state: 'Illinois', avgSalary: 82020, employmentLevel: 133870, costOfLivingIndex: 94.5 },
  { state: 'Indiana', avgSalary: 72080, employmentLevel: 73890, costOfLivingIndex: 90.2 },
  { state: 'Iowa', avgSalary: 66220, employmentLevel: 39820, costOfLivingIndex: 89.5 },
  { state: 'Kansas', avgSalary: 68130, employmentLevel: 32750, costOfLivingIndex: 87.5 },
  { state: 'Kentucky', avgSalary: 69480, employmentLevel: 49850, costOfLivingIndex: 91.5 },
  { state: 'Louisiana', avgSalary: 69980, employmentLevel: 49280, costOfLivingIndex: 91.9 },
  { state: 'Maine', avgSalary: 78920, employmentLevel: 17380, costOfLivingIndex: 118.5 },
  { state: 'Maryland', avgSalary: 84820, employmentLevel: 59480, costOfLivingIndex: 129.7 },
  { state: 'Massachusetts', avgSalary: 103090, employmentLevel: 89360, costOfLivingIndex: 148.4 },
  { state: 'Michigan', avgSalary: 79830, employmentLevel: 107420, costOfLivingIndex: 89.6 },
  { state: 'Minnesota', avgSalary: 86110, employmentLevel: 67820, costOfLivingIndex: 101.1 },
  { state: 'Mississippi', avgSalary: 64320, employmentLevel: 33160, costOfLivingIndex: 86.1 },
  { state: 'Missouri', avgSalary: 71390, employmentLevel: 73670, costOfLivingIndex: 89.3 },
  { state: 'Montana', avgSalary: 72950, employmentLevel: 11790, costOfLivingIndex: 106.9 },
  { state: 'Nebraska', avgSalary: 69790, employmentLevel: 22030, costOfLivingIndex: 90.9 },
  { state: 'Nevada', avgSalary: 88290, employmentLevel: 30610, costOfLivingIndex: 104.5 },
  { state: 'New Hampshire', avgSalary: 82920, employmentLevel: 16540, costOfLivingIndex: 109.7 },
  { state: 'New Jersey', avgSalary: 93230, employmentLevel: 85910, costOfLivingIndex: 125.1 },
  { state: 'New Mexico', avgSalary: 78210, employmentLevel: 19230, costOfLivingIndex: 91.2 },
  { state: 'New York', avgSalary: 99880, employmentLevel: 201570, costOfLivingIndex: 139.4 },
  { state: 'North Carolina', avgSalary: 72970, employmentLevel: 106380, costOfLivingIndex: 94.2 },
  { state: 'North Dakota', avgSalary: 72140, employmentLevel: 9880, costOfLivingIndex: 98.9 },
  { state: 'Ohio', avgSalary: 76190, employmentLevel: 139280, costOfLivingIndex: 90.8 },
  { state: 'Oklahoma', avgSalary: 67150, employmentLevel: 35140, costOfLivingIndex: 87.9 },
  { state: 'Oregon', avgSalary: 98630, employmentLevel: 41280, costOfLivingIndex: 134.2 },
  { state: 'Pennsylvania', avgSalary: 79750, employmentLevel: 153260, costOfLivingIndex: 97.2 },
  { state: 'Rhode Island', avgSalary: 88030, employmentLevel: 13650, costOfLivingIndex: 119.4 },
  { state: 'South Carolina', avgSalary: 70760, employmentLevel: 48730, costOfLivingIndex: 94.9 },
  { state: 'South Dakota', avgSalary: 64920, employmentLevel: 11540, costOfLivingIndex: 92.4 },
  { state: 'Tennessee', avgSalary: 69560, employmentLevel: 72340, costOfLivingIndex: 89.8 },
  { state: 'Texas', avgSalary: 78840, employmentLevel: 242680, costOfLivingIndex: 92.1 },
  { state: 'Utah', avgSalary: 74860, employmentLevel: 28970, costOfLivingIndex: 110.8 },
  { state: 'Vermont', avgSalary: 77750, employmentLevel: 8250, costOfLivingIndex: 118.2 },
  { state: 'Virginia', avgSalary: 77720, employmentLevel: 76540, costOfLivingIndex: 103.2 },
  { state: 'Washington', avgSalary: 97960, employmentLevel: 74830, costOfLivingIndex: 118.7 },
  { state: 'West Virginia', avgSalary: 68950, employmentLevel: 21960, costOfLivingIndex: 87.5 },
  { state: 'Wisconsin', avgSalary: 78140, employmentLevel: 67230, costOfLivingIndex: 95.9 },
  { state: 'Wyoming', avgSalary: 71730, employmentLevel: 5690, costOfLivingIndex: 92.3 }
];

export const experienceMultipliers = [
  { years: '0-1', label: '0-1 years', multiplier: 0.80 },
  { years: '2-3', label: '2-3 years', multiplier: 0.90 },
  { years: '4-6', label: '4-6 years', multiplier: 1.00 },
  { years: '7-10', label: '7-10 years', multiplier: 1.12 },
  { years: '11-15', label: '11-15 years', multiplier: 1.22 },
  { years: '16+', label: '16+ years', multiplier: 1.30 }
];

export const nursingTrends2026 = {
  nationalGrowth: 6.2,
  avgSalaryIncrease: 3.8,
  topGrowthSpecialties: [
    { specialty: 'Nurse Practitioner', growth: 40.0, demand: 'Very High' },
    { specialty: 'Nurse Anesthetist', growth: 12.4, demand: 'High' },
    { specialty: 'Travel Nurse', growth: 15.2, demand: 'Very High' },
    { specialty: 'ICU/Critical Care', growth: 8.9, demand: 'High' },
    { specialty: 'Psychiatric Nurse', growth: 11.7, demand: 'High' }
  ],
  topPayingStates: [
    { state: 'California', avgSalary: 133340, growth: 4.2 },
    { state: 'Hawaii', avgSalary: 113060, growth: 3.1 },
    { state: 'Massachusetts', avgSalary: 103090, growth: 3.9 },
    { state: 'Oregon', avgSalary: 98630, growth: 3.7 },
    { state: 'Washington', avgSalary: 97960, growth: 4.1 }
  ],
  keyInsights: [
    'Nursing shortage continues to drive salary increases across all specialties',
    'Advanced practice roles (NP, CRNA) show highest growth and compensation',
    'Travel nursing remains highly competitive with premium compensation',
    'Mental health nursing demand surges with increased awareness',
    'Rural and underserved areas offering enhanced sign-on bonuses'
  ]
};

export function calculateSalary(
  specialtyId: string,
  state: string,
  experience: string
): number {
  const specialty = nurseSpecialties.find(s => s.id === specialtyId);
  const stateInfo = stateData.find(s => s.state === state);
  const expMultiplier = experienceMultipliers.find(e => e.years === experience);

  if (!specialty || !stateInfo || !expMultiplier) {
    return 0;
  }

  // Base calculation: specialty average
  let salary = specialty.avgSalary;

  // Adjust for state cost of living and market
  const stateFactor = stateInfo.avgSalary / 81220; // National RN average
  salary *= stateFactor;

  // Adjust for experience
  salary *= expMultiplier.multiplier;

  return Math.round(salary);
}
