export interface ContractInputs {
  taxableHourlyRate: number;
  weeklyHours: number;
  contractWeeks: number;
  housingStipend: number;
  mealsStipend: number;
  signOnBonus: number;
  assignmentState: string;
  filingStatus: 'single' | 'mfj';
  overtimeHoursPerWeek: number;
  retirementContrib: number;
  hasTaxHome: boolean;
}

export interface ContractResults {
  contractTaxableGross: number;
  contractStipends: number;
  signOnBonus: number;
  federalTax: number;
  ficaTax: number;
  stateTax: number;
  retirementDeduction: number;
  netTakeHome: number;
  weeklyNetTakeHome: number;
  blendedHourlyRate: number;
  effectiveTaxRate: number;
  annualizedEquivalent: number;
  totalContractHours: number;
}

export const DEFAULT_CONTRACT_A: ContractInputs = {
  taxableHourlyRate: 24,
  weeklyHours: 36,
  contractWeeks: 13,
  housingStipend: 1050,
  mealsStipend: 315,
  signOnBonus: 0,
  assignmentState: 'Texas',
  filingStatus: 'single',
  overtimeHoursPerWeek: 0,
  retirementContrib: 0,
  hasTaxHome: true,
};

export const DEFAULT_CONTRACT_B: ContractInputs = {
  taxableHourlyRate: 26,
  weeklyHours: 36,
  contractWeeks: 13,
  housingStipend: 900,
  mealsStipend: 280,
  signOnBonus: 2000,
  assignmentState: 'California',
  filingStatus: 'single',
  overtimeHoursPerWeek: 0,
  retirementContrib: 0,
  hasTaxHome: true,
};
