'use client';

import { useState } from 'react';
import { Download } from 'lucide-react';
import {
  nurseSpecialties,
  stateData,
  experienceMultipliers,
  calculateSalary
} from '@/lib/bls-data';

interface SalaryCalculatorProps {
  onGeneratePDF?: (results: SalaryResults) => void;
}

interface SalaryResults {
  specialty: string;
  state: string;
  experience: string;
  estimatedSalary: number;
  salaryRange: { min: number; max: number };
  hourlyRate: number;
}

export default function SalaryCalculator({ onGeneratePDF }: SalaryCalculatorProps) {
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [results, setResults] = useState<SalaryResults | null>(null);

  const handleCalculate = () => {
    if (!selectedSpecialty || !selectedState || !selectedExperience) {
      return;
    }

    const estimatedSalary = calculateSalary(selectedSpecialty, selectedState, selectedExperience);
    const specialty = nurseSpecialties.find(s => s.id === selectedSpecialty)!;
    const expMultiplier = experienceMultipliers.find(e => e.years === selectedExperience)!;
    const stateInfo = stateData.find(s => s.state === selectedState)!;
    const stateFactor = stateInfo.avgSalary / 81220;

    const minSalary = Math.round(specialty.minSalary * stateFactor * expMultiplier.multiplier);
    const maxSalary = Math.round(specialty.maxSalary * stateFactor * expMultiplier.multiplier);

    const calculatedResults = {
      specialty: specialty.name,
      state: selectedState,
      experience: expMultiplier.label,
      estimatedSalary,
      salaryRange: { min: minSalary, max: maxSalary },
      hourlyRate: Math.round((estimatedSalary / 2080) * 100) / 100
    };

    setResults(calculatedResults);
  };

  return (
    <div>
      <h2 className="sr-only">Nurse Salary Calculator</h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Specialty */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-on-surface-variant ml-1">Nursing Specialty</label>
              <div className="relative">
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full bg-surface-container-low border-none rounded-xl py-4 px-4 appearance-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all text-on-surface outline-none"
                >
                  <option value="">Select specialty...</option>
                  {nurseSpecialties.map(specialty => (
                    <option key={specialty.id} value={specialty.id}>
                      {specialty.name}
                    </option>
                  ))}
                </select>
                <svg className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-outline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>

            {/* State */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-on-surface-variant ml-1">State / Location</label>
              <div className="relative">
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full bg-surface-container-low border-none rounded-xl py-4 px-4 appearance-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all text-on-surface outline-none"
                >
                  <option value="">Select state...</option>
                  {stateData.map(state => (
                    <option key={state.state} value={state.state}>
                      {state.state}
                    </option>
                  ))}
                </select>
                <svg className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-outline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-on-surface-variant ml-1">Years of Experience</label>
              <div className="relative">
                <select
                  value={selectedExperience}
                  onChange={(e) => setSelectedExperience(e.target.value)}
                  className="w-full bg-surface-container-low border-none rounded-xl py-4 px-4 appearance-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all text-on-surface outline-none"
                >
                  <option value="">Select experience...</option>
                  {experienceMultipliers.map(exp => (
                    <option key={exp.years} value={exp.years}>
                      {exp.label}
                    </option>
                  ))}
                </select>
                <svg className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-outline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <button
            onClick={handleCalculate}
            disabled={!selectedSpecialty || !selectedState || !selectedExperience}
            className="w-full gradient-primary text-on-primary py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-[0.98]"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            See Local Rates
          </button>
        </div>
      </div>

      {/* Results */}
      {results && (
        <div className="mt-10 pt-10">
          <div className="bg-surface-container rounded-2xl p-8 mb-8">
            <div className="text-center mb-8">
              <h3 className="text-lg font-semibold text-on-surface-variant mb-3">
                Estimated Annual Salary
              </h3>
              <div className="text-5xl font-headline font-extrabold text-primary text-editorial mb-2">
                ${results.estimatedSalary.toLocaleString()}
              </div>
              <div className="text-xl text-on-surface-variant">
                ${results.hourlyRate.toFixed(2)}/hour
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-surface-container-lowest rounded-xl p-4">
                <div className="text-sm font-medium text-on-surface-variant mb-1">Specialty</div>
                <div className="text-lg font-bold text-on-surface">{results.specialty}</div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-4">
                <div className="text-sm font-medium text-on-surface-variant mb-1">Location</div>
                <div className="text-lg font-bold text-on-surface">{results.state}</div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-4">
                <div className="text-sm font-medium text-on-surface-variant mb-1">Experience</div>
                <div className="text-lg font-bold text-on-surface">{results.experience}</div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low rounded-2xl p-6 mb-8">
            <h4 className="font-headline font-bold text-on-surface mb-4">Salary Range for This Role</h4>
            <div className="flex items-center justify-between mb-2">
              <span className="text-on-surface-variant">Minimum</span>
              <span className="font-bold text-on-surface">${results.salaryRange.min.toLocaleString()}</span>
            </div>
            <div className="w-full bg-surface-container rounded-full h-3 mb-2 relative overflow-hidden">
              <div
                className="gradient-primary h-full rounded-full opacity-60"
                style={{ width: '100%' }}
              />
              <div
                className="absolute top-0 h-full w-1 bg-on-surface"
                style={{
                  left: `${((results.estimatedSalary - results.salaryRange.min) /
                          (results.salaryRange.max - results.salaryRange.min)) * 100}%`
                }}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface-variant">Maximum</span>
              <span className="font-bold text-on-surface">${results.salaryRange.max.toLocaleString()}</span>
            </div>
          </div>

          <div className="bg-primary-fixed/30 rounded-2xl p-6 mb-8 ghost-border">
            <h4 className="font-headline font-bold text-primary mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              Key Insights
            </h4>
            <ul className="space-y-3 text-on-surface-variant">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1.5 shrink-0">&#8226;</span>
                <span>This estimate is based on BLS data and market trends for {new Date().getFullYear()}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1.5 shrink-0">&#8226;</span>
                <span>Actual salaries may vary based on facility, shift differentials, and benefits</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1.5 shrink-0">&#8226;</span>
                <span>Travel nurses typically earn 15-30% more than staff positions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1.5 shrink-0">&#8226;</span>
                <span>Additional certifications can increase compensation by 5-15%</span>
              </li>
            </ul>
          </div>

          {onGeneratePDF && (
            <button
              onClick={() => onGeneratePDF(results)}
              className="w-full bg-surface-container-lowest text-primary font-bold py-4 px-6 rounded-xl ghost-border hover:bg-primary-fixed transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Salary Report (PDF)
            </button>
          )}
        </div>
      )}
    </div>
  );
}
