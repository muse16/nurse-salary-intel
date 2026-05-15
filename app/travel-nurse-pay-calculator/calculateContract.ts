import type { ContractInputs, ContractResults } from './types';

export const STATE_TAX_RATES: Record<string, number> = {
  'Alabama': 0.05, 'Alaska': 0, 'Arizona': 0.025, 'Arkansas': 0.047,
  'California': 0.093, 'Colorado': 0.044, 'Connecticut': 0.065,
  'Delaware': 0.066, 'Florida': 0, 'Georgia': 0.055, 'Hawaii': 0.08,
  'Idaho': 0.058, 'Illinois': 0.0495, 'Indiana': 0.0315, 'Iowa': 0.057,
  'Kansas': 0.057, 'Kentucky': 0.045, 'Louisiana': 0.042, 'Maine': 0.072,
  'Maryland': 0.055, 'Massachusetts': 0.09, 'Michigan': 0.0425,
  'Minnesota': 0.0785, 'Mississippi': 0.047, 'Missouri': 0.046,
  'Montana': 0.069, 'Nebraska': 0.0664, 'Nevada': 0, 'New Hampshire': 0,
  'New Jersey': 0.0637, 'New Mexico': 0.059, 'New York': 0.0685,
  'North Carolina': 0.0499, 'North Dakota': 0.025, 'Ohio': 0.04,
  'Oklahoma': 0.0475, 'Oregon': 0.099, 'Pennsylvania': 0.0307,
  'Rhode Island': 0.0599, 'South Carolina': 0.065, 'South Dakota': 0,
  'Tennessee': 0, 'Texas': 0, 'Utah': 0.046, 'Vermont': 0.0875,
  'Virginia': 0.0575, 'Washington': 0, 'West Virginia': 0.065,
  'Wisconsin': 0.0765, 'Wyoming': 0,
};

const FEDERAL_BRACKETS_SINGLE = [
  { limit: 11600, rate: 0.10 },
  { limit: 47150, rate: 0.12 },
  { limit: 100525, rate: 0.22 },
  { limit: 191950, rate: 0.24 },
  { limit: 243725, rate: 0.32 },
  { limit: 609350, rate: 0.35 },
  { limit: Infinity, rate: 0.37 },
];

const FEDERAL_BRACKETS_MFJ = [
  { limit: 23200, rate: 0.10 },
  { limit: 94300, rate: 0.12 },
  { limit: 201050, rate: 0.22 },
  { limit: 383900, rate: 0.24 },
  { limit: 487450, rate: 0.32 },
  { limit: 731200, rate: 0.35 },
  { limit: Infinity, rate: 0.37 },
];

function calcFederalTax(taxableIncome: number, mfj: boolean): number {
  const brackets = mfj ? FEDERAL_BRACKETS_MFJ : FEDERAL_BRACKETS_SINGLE;
  let tax = 0;
  let prev = 0;
  for (const bracket of brackets) {
    if (taxableIncome <= prev) break;
    const taxable = Math.min(taxableIncome, bracket.limit) - prev;
    tax += taxable * bracket.rate;
    prev = bracket.limit;
  }
  return tax;
}

export function getStateTaxRate(state: string): number {
  return STATE_TAX_RATES[state] ?? 0.05;
}

export function getStateList(): string[] {
  return Object.keys(STATE_TAX_RATES).sort();
}

export function calculateContract(inputs: ContractInputs): ContractResults {
  const {
    taxableHourlyRate,
    weeklyHours,
    contractWeeks,
    housingStipend,
    mealsStipend,
    signOnBonus,
    assignmentState,
    filingStatus,
    overtimeHoursPerWeek,
    retirementContrib,
    hasTaxHome,
  } = inputs;

  const isMfj = filingStatus === 'mfj';
  const stdDeduction = isMfj ? 29200 : 14600;
  const FICA_SS_ANNUAL_WAGE_BASE = 168600;

  // Taxable wages (regular + overtime)
  const regularWeekly = taxableHourlyRate * weeklyHours;
  const overtimeWeekly = overtimeHoursPerWeek * taxableHourlyRate * 1.5;
  const weeklyTaxableWages = regularWeekly + overtimeWeekly;
  const contractWages = weeklyTaxableWages * contractWeeks;

  // Stipends (tax-free only with qualifying tax home)
  const weeklyStipends = housingStipend + mealsStipend;
  const contractStipends = weeklyStipends * contractWeeks;

  // If no tax home, stipends become taxable wages for income tax purposes
  // Note: stipends remain exempt from FICA even when no tax home (income tax treatment differs from FICA)
  const incomeTaxableGross = hasTaxHome
    ? contractWages + signOnBonus
    : contractWages + contractStipends + signOnBonus;

  // Pro-rate retirement contribution to this contract period
  const annualRetirementCap = 23000;
  const retirementForContract = Math.min(
    (retirementContrib / 52) * contractWeeks,
    (annualRetirementCap / 52) * contractWeeks
  );

  // Federal tax: annualize → apply brackets → de-annualize
  const annualizedTaxable = (incomeTaxableGross / contractWeeks) * 52;
  const annualFederalTaxable = Math.max(0, annualizedTaxable - stdDeduction - retirementContrib);
  const annualFederalTax = calcFederalTax(annualFederalTaxable, isMfj);
  const federalTax = (annualFederalTax / 52) * contractWeeks;

  // FICA: applies to taxable wages + sign-on bonus only (not stipends, even if no tax home)
  const ficaBase = contractWages + signOnBonus;
  const ssWageBaseForContract = (FICA_SS_ANNUAL_WAGE_BASE / 52) * contractWeeks;
  const ssTaxable = Math.min(ficaBase, ssWageBaseForContract);
  const ficaTax = ssTaxable * 0.062 + ficaBase * 0.0145;

  // State income tax: applies to incomeTaxableGross minus retirement
  const stateRate = getStateTaxRate(assignmentState);
  const stateTaxable = Math.max(0, incomeTaxableGross - retirementForContract);
  const stateTax = stateTaxable * stateRate;

  const totalDeductions = federalTax + ficaTax + stateTax + retirementForContract;

  // Total income received = wages + stipends (stipends included even if taxable, they're still received)
  const totalIncome = contractWages + contractStipends + signOnBonus;
  const netTakeHome = totalIncome - totalDeductions;

  const totalContractHours = (weeklyHours + overtimeHoursPerWeek) * contractWeeks;
  const weeklyNetTakeHome = contractWeeks > 0 ? netTakeHome / contractWeeks : 0;

  // Blended rate = (total comp including stipends) / scheduled hours
  const scheduledHours = weeklyHours * contractWeeks;
  const blendedHourlyRate = scheduledHours > 0
    ? (contractWages + contractStipends + signOnBonus) / scheduledHours
    : 0;

  const effectiveTaxRate = incomeTaxableGross > 0
    ? ((federalTax + ficaTax + stateTax) / incomeTaxableGross) * 100
    : 0;

  const annualizedEquivalent = contractWeeks > 0 ? weeklyNetTakeHome * 52 : 0;

  return {
    contractTaxableGross: Math.round(incomeTaxableGross),
    contractStipends: Math.round(contractStipends),
    signOnBonus: Math.round(signOnBonus),
    federalTax: Math.round(federalTax),
    ficaTax: Math.round(ficaTax),
    stateTax: Math.round(stateTax),
    retirementDeduction: Math.round(retirementForContract),
    netTakeHome: Math.round(netTakeHome),
    weeklyNetTakeHome: Math.round(weeklyNetTakeHome),
    blendedHourlyRate: Math.round(blendedHourlyRate * 100) / 100,
    effectiveTaxRate: Math.round(effectiveTaxRate * 10) / 10,
    annualizedEquivalent: Math.round(annualizedEquivalent),
    totalContractHours: Math.round(totalContractHours),
  };
}
