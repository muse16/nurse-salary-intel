'use client';

import { useState } from 'react';
import { Calculator, TrendingUp, MapPin, Briefcase, Download } from 'lucide-react';
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
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-100 p-3 rounded-lg">
          <Calculator className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Salary Calculator</h2>
      </div>

      <p className="text-gray-600 mb-8">
        Calculate your potential nursing salary based on specialty, location, and experience.
        Data sourced from BLS 2024 with 2026 projections.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Specialty Selection */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <Briefcase className="w-4 h-4" />
            Specialty
          </label>
          <select
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          >
            <option value="">Select specialty...</option>
            {nurseSpecialties.map(specialty => (
              <option key={specialty.id} value={specialty.id}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>

        {/* State Selection */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <MapPin className="w-4 h-4" />
            State
          </label>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          >
            <option value="">Select state...</option>
            {stateData.map(state => (
              <option key={state.state} value={state.state}>
                {state.state}
              </option>
            ))}
          </select>
        </div>

        {/* Experience Selection */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <TrendingUp className="w-4 h-4" />
            Years of Experience
          </label>
          <select
            value={selectedExperience}
            onChange={(e) => setSelectedExperience(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          >
            <option value="">Select experience...</option>
            {experienceMultipliers.map(exp => (
              <option key={exp.years} value={exp.years}>
                {exp.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleCalculate}
        disabled={!selectedSpecialty || !selectedState || !selectedExperience}
        className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
      >
        <Calculator className="w-5 h-5" />
        Calculate My Salary
      </button>

      {/* Results Section */}
      {results && (
        <div className="mt-8 border-t-2 border-gray-200 pt-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 mb-6">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Estimated Annual Salary
              </h3>
              <div className="text-5xl font-bold text-blue-600 mb-2">
                ${results.estimatedSalary.toLocaleString()}
              </div>
              <div className="text-xl text-gray-600">
                ${results.hourlyRate.toFixed(2)}/hour
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white rounded-lg p-4">
                <div className="text-sm font-medium text-gray-600 mb-1">Specialty</div>
                <div className="text-lg font-bold text-gray-900">{results.specialty}</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-sm font-medium text-gray-600 mb-1">Location</div>
                <div className="text-lg font-bold text-gray-900">{results.state}</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-sm font-medium text-gray-600 mb-1">Experience</div>
                <div className="text-lg font-bold text-gray-900">{results.experience}</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 className="font-bold text-gray-900 mb-3">Salary Range for This Role</h4>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700">Minimum</span>
              <span className="font-bold text-gray-900">
                ${results.salaryRange.min.toLocaleString()}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-2 relative overflow-hidden">
              <div
                className="bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 h-full rounded-full"
                style={{ width: '100%' }}
              />
              <div
                className="absolute top-0 h-full w-1 bg-blue-900"
                style={{
                  left: `${((results.estimatedSalary - results.salaryRange.min) /
                          (results.salaryRange.max - results.salaryRange.min)) * 100}%`
                }}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Maximum</span>
              <span className="font-bold text-gray-900">
                ${results.salaryRange.max.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
            <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Key Insights
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>This estimate is based on BLS data and market trends for {new Date().getFullYear()}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Actual salaries may vary based on facility, shift differentials, and benefits</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Travel nurses typically earn 15-30% more than staff positions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Additional certifications can increase compensation by 5-15%</span>
              </li>
            </ul>
          </div>

          {onGeneratePDF && (
            <button
              onClick={() => onGeneratePDF(results)}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 px-6 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all flex items-center justify-center gap-2"
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
