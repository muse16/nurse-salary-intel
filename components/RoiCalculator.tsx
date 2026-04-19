'use client';

import { useState } from 'react';

const upgradeOptions = [
  { label: 'ADN → BSN', annualIncrease: 10000, defaultCost: 20000 },
  { label: 'BSN → MSN', annualIncrease: 15000, defaultCost: 35000 },
  { label: 'MSN → NP (DNP)', annualIncrease: 25000, defaultCost: 55000 },
];

export default function RoiCalculator() {
  const [upgradeIdx, setUpgradeIdx] = useState(0);
  const [programCost, setProgramCost] = useState(20000);
  const [yearsRemaining, setYearsRemaining] = useState(20);

  const option = upgradeOptions[upgradeIdx];
  const annualIncrease = option.annualIncrease;
  const lifetimeEarnings = annualIncrease * yearsRemaining;
  const netGain = lifetimeEarnings - programCost;
  const breakEvenMonths = Math.ceil(programCost / (annualIncrease / 12));
  const roi = Math.round((netGain / programCost) * 100);

  function handleUpgradeChange(idx: number) {
    setUpgradeIdx(idx);
    setProgramCost(upgradeOptions[idx].defaultCost);
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="bg-primary px-6 py-4">
        <h2 className="text-xl font-bold text-white">BSN Return on Investment Calculator</h2>
        <p className="text-primary-fixed-dim text-sm mt-1">See how fast your degree pays for itself</p>
      </div>

      <div className="p-6 grid md:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Credential Upgrade</label>
            <div className="flex flex-wrap gap-2">
              {upgradeOptions.map((opt, i) => (
                <button
                  key={opt.label}
                  onClick={() => handleUpgradeChange(i)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                    upgradeIdx === i
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-primary'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Program Cost: <span className="text-primary">${programCost.toLocaleString()}</span>
            </label>
            <input
              type="range"
              min={5000}
              max={100000}
              step={1000}
              value={programCost}
              onChange={(e) => setProgramCost(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>$5K</span><span>$100K</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Years Left in Career: <span className="text-primary">{yearsRemaining} yrs</span>
            </label>
            <input
              type="range"
              min={5}
              max={35}
              step={1}
              value={yearsRemaining}
              onChange={(e) => setYearsRemaining(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>5 yrs</span><span>35 yrs</span>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-4 text-sm text-gray-700">
            <strong>Estimated salary increase:</strong> +${annualIncrease.toLocaleString()}/yr
            <br />
            <span className="text-xs text-gray-500">Based on national BLS averages for {option.label}</span>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
            <div className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-1">Lifetime Earnings Increase</div>
            <div className="text-4xl font-black text-green-700">${lifetimeEarnings.toLocaleString()}</div>
            <div className="text-xs text-gray-500 mt-1">over {yearsRemaining} years</div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <div className="text-xs font-semibold text-blue-700 uppercase mb-1">Break-Even</div>
              <div className="text-2xl font-black text-blue-700">{breakEvenMonths} mo</div>
              <div className="text-xs text-gray-500">to pay off degree</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 text-center">
              <div className="text-xs font-semibold text-purple-700 uppercase mb-1">Net ROI</div>
              <div className="text-2xl font-black text-purple-700">{roi.toLocaleString()}%</div>
              <div className="text-xs text-gray-500">return on investment</div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <div className="text-xs font-semibold text-gray-600 uppercase mb-2">Summary</div>
            <div className="text-sm text-gray-700 space-y-1">
              <div className="flex justify-between"><span>Program cost</span><span className="font-semibold text-red-600">−${programCost.toLocaleString()}</span></div>
              <div className="flex justify-between"><span>Additional lifetime earnings</span><span className="font-semibold text-green-600">+${lifetimeEarnings.toLocaleString()}</span></div>
              <div className="flex justify-between border-t border-gray-200 pt-2 mt-2"><span className="font-bold">Net gain</span><span className="font-black text-green-700">${netGain.toLocaleString()}</span></div>
            </div>
          </div>

          <a
            href="#bsn-programs"
            className="block w-full bg-primary hover:bg-primary-container text-white font-bold py-3 px-4 rounded-xl text-center text-sm transition-all active:scale-95"
          >
            See Top BSN Programs →
          </a>
        </div>
      </div>
    </div>
  );
}
