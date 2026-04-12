'use client';

import Link from 'next/link';
import { useState } from 'react';
import SiteNav from '@/components/SiteNav';

type ItemStatus = null | 'good' | 'check' | 'redflag';

const checklistItems = [
  {
    key: 'paymentTerms',
    title: 'Payment Terms & Schedule',
    description: 'Verify exact pay rate, frequency (weekly/bi-weekly), and any deductions.',
    redFlags: 'Vague payment schedules, history of late payments, or unclear deductions from your check.',
    suggestion: 'Request a written pay breakdown showing base rate, stipends, and all deductions before signing.',
  },
  {
    key: 'cancellationClause',
    title: 'Contract Cancellation Terms',
    description: 'Understand termination conditions for both you and the facility.',
    redFlags: 'Hospital can cancel anytime with no penalty, but you face financial consequences for leaving.',
    suggestion: 'Negotiate mutual cancellation terms — if the facility can cancel penalty-free, you should be able to as well.',
  },
  {
    key: 'housingStipend',
    title: 'Housing & Lodging Benefits',
    description: 'Confirm stipend amount, tax treatment, and what happens if housing falls through.',
    redFlags: 'Taxable stipend, amount inadequate for the area, or no alternative if housing is unavailable.',
    suggestion: 'Compare the stipend to local rent prices and ask for a backup housing clause in case arrangements fall through.',
  },
  {
    key: 'healthInsurance',
    title: 'Health Insurance Coverage',
    description: 'Review plan details, coverage start date, and your out-of-pocket premium costs.',
    redFlags: 'No coverage offered, delayed start date (30+ days), or excessive employee contribution.',
    suggestion: 'Ask for day-one coverage and get the plan summary document — not just a verbal promise — before you start.',
  },
  {
    key: 'licensureReimbursement',
    title: 'Licensure & Certification Costs',
    description: 'Verify reimbursement for state licenses, certifications, and renewals.',
    redFlags: 'No reimbursement offered, or you must prepay and wait months for repayment.',
    suggestion: 'Ask for upfront reimbursement or a signing stipend that covers licensing costs before your start date.',
  },
  {
    key: 'completionBonus',
    title: 'Completion Bonus',
    description: 'Confirm bonus amount, payment timeline, and conditions required to receive it.',
    redFlags: 'Excessive conditions, prorated unfairly, or bonus withheld for minor infractions.',
    suggestion: 'Get the exact bonus conditions in writing and confirm whether it prorates if the facility ends the contract early.',
  },
  {
    key: 'shiftDifferential',
    title: 'Shift Differential Pay',
    description: 'Check night, weekend, and holiday pay premium rates.',
    redFlags: 'No differential for nights or weekends, or rates lower than market standard.',
    suggestion: 'Ask for the differential rate schedule in writing and compare it against BLS averages for your area.',
  },
  {
    key: 'callRequirements',
    title: 'On-Call Requirements',
    description: 'Understand on-call frequency, compensation, and expected response time.',
    redFlags: 'Unpaid on-call time, excessive frequency, or unclear compensation when called in.',
    suggestion: 'Negotiate a flat on-call rate plus your full hourly rate when called in, with a cap on monthly on-call shifts.',
  },
{
    key: 'travelReimbursement',
    title: 'Travel & Relocation Costs',
    description: 'Verify reimbursement for travel to the assignment and return home.',
    redFlags: 'No travel pay, or you must complete the full contract or repay travel costs.',
    suggestion: 'Ask for a separate travel stipend paid upfront, not contingent on contract completion.',
  },
  {
    key: 'floatingPolicy',
    title: 'Floating Policy',
    description: 'Understand when and where you can be floated to other units.',
    redFlags: 'Can be floated to any unit regardless of your competency, or excessive floating frequency.',
    suggestion: 'Request a float clause limiting you to units within your specialty or competency area.',
  },
];

export default function AuditPage() {
  const [statuses, setStatuses] = useState<Record<string, ItemStatus>>(
    Object.fromEntries(checklistItems.map(i => [i.key, null]))
  );

  const setStatus = (key: string, status: ItemStatus) => {
    setStatuses(prev => ({ ...prev, [key]: status }));
  };

  const reviewedCount = Object.values(statuses).filter(s => s !== null).length;
  const redFlagCount = Object.values(statuses).filter(s => s === 'redflag').length;
  const checkCount = Object.values(statuses).filter(s => s === 'check').length;
  const totalCount = checklistItems.length;
  const percentComplete = Math.round((reviewedCount / totalCount) * 100);
  const allReviewed = reviewedCount === totalCount;

  const redFlagItems = checklistItems.filter(i => statuses[i.key] === 'redflag');
  const checkItems = checklistItems.filter(i => statuses[i.key] === 'check');

  const getRiskLevel = () => {
    if (redFlagCount === 0) return { label: 'Low Risk', color: 'green', message: 'Your contract looks solid. A few items still worth confirming in writing.' };
    if (redFlagCount <= 2) return { label: 'Moderate Risk', color: 'yellow', message: 'Negotiate these clauses before signing. Most are fixable with the right language.' };
    if (redFlagCount <= 5) return { label: 'High Risk', color: 'orange', message: 'Do not sign yet. Multiple clauses need to be revised or removed.' };
    return { label: 'Critical Risk', color: 'red', message: 'This contract has serious problems. Push back hard or walk away.' };
  };

  const risk = allReviewed ? getRiskLevel() : null;

  const riskColors: Record<string, { bg: string; border: string; text: string; badge: string }> = {
    green:  { bg: 'bg-green-50',  border: 'border-green-400',  text: 'text-green-900',  badge: 'bg-green-500' },
    yellow: { bg: 'bg-yellow-50', border: 'border-yellow-400', text: 'text-yellow-900', badge: 'bg-yellow-500' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-400', text: 'text-orange-900', badge: 'bg-orange-500' },
    red:    { bg: 'bg-red-50',    border: 'border-red-500',    text: 'text-red-900',    badge: 'bg-red-500' },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SiteNav />
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-4">Contract Red Flag Audit Tool</h1>
          <p className="text-xl text-blue-100">
            Review each section of your contract and mark what you find. We&apos;ll score your risk and show you exactly what to negotiate.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Progress Bar */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-lg font-semibold text-gray-900">Audit Progress</span>
            <span className="text-2xl font-bold text-blue-600">{percentComplete}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-blue-600 h-4 rounded-full transition-all duration-300"
              style={{ width: `${percentComplete}%` }}
            />
          </div>
          <div className="flex items-center justify-between mt-3 text-sm text-gray-600">
            <span>{reviewedCount} of {totalCount} items reviewed</span>
            {redFlagCount > 0 && (
              <span className="font-semibold text-red-600">{redFlagCount} red flag{redFlagCount !== 1 ? 's' : ''} found</span>
            )}
          </div>
          <p className="mt-2 text-sm text-gray-700 drop-shadow-sm">
            {reviewedCount < totalCount
              ? `Complete all ${totalCount} items to see your results instantly`
              : 'See your results below'}
          </p>
        </div>

        {/* Checklist */}
        <div className="space-y-4 mb-10">
          {checklistItems.map((item) => {
            const status = statuses[item.key];
            const borderColor =
              status === 'good'    ? 'border-green-400' :
              status === 'check'   ? 'border-yellow-400' :
              status === 'redflag' ? 'border-red-500' :
              'border-gray-200';

            return (
              <div
                key={item.key}
                className={`bg-white rounded-lg shadow-sm p-5 border-2 transition-all ${borderColor}`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </div>
                  {status === 'good'    && <span className="text-green-600 font-bold text-sm shrink-0">✓ Looks Good</span>}
                  {status === 'check'   && <span className="text-yellow-600 font-bold text-sm shrink-0">? Need to Check</span>}
                  {status === 'redflag' && <span className="text-red-600 font-bold text-sm shrink-0">⚠ Red Flag</span>}
                </div>

                {/* Red flag warning */}
                <div className="bg-red-50 border-l-4 border-red-300 px-3 py-2 mb-3 rounded-r">
                  <p className="text-xs text-red-800"><span className="font-semibold">Watch for: </span>{item.redFlags}</p>
                </div>

                {/* Suggestion to improve */}
                <div className="bg-blue-50 border-l-4 border-blue-300 px-3 py-2 mb-4 rounded-r">
                  <p className="text-xs text-blue-800"><span className="font-semibold">Suggestion: </span>{item.suggestion}</p>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setStatus(item.key, 'good')}
                    className={`flex-1 py-2 px-3 rounded-lg text-sm font-semibold border-2 transition-all ${
                      status === 'good'
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'bg-white border-gray-200 text-gray-600 hover:border-green-400 hover:text-green-700'
                    }`}
                  >
                    ✓ Looks Good
                  </button>
                  <button
                    onClick={() => setStatus(item.key, 'check')}
                    className={`flex-1 py-2 px-3 rounded-lg text-sm font-semibold border-2 transition-all ${
                      status === 'check'
                        ? 'bg-yellow-400 border-yellow-400 text-yellow-900'
                        : 'bg-white border-gray-200 text-gray-600 hover:border-yellow-400 hover:text-yellow-700'
                    }`}
                  >
                    ? Need to Check
                  </button>
                  <button
                    onClick={() => setStatus(item.key, 'redflag')}
                    className={`flex-1 py-2 px-3 rounded-lg text-sm font-semibold border-2 transition-all ${
                      status === 'redflag'
                        ? 'bg-red-500 border-red-500 text-white'
                        : 'bg-white border-gray-200 text-gray-600 hover:border-red-400 hover:text-red-700'
                    }`}
                  >
                    ⚠ Red Flag
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Risk Report — shown when all items are reviewed */}
        {allReviewed && risk && (
          <div className={`rounded-lg shadow-xl p-8 mb-8 border-2 ${riskColors[risk.color].bg} ${riskColors[risk.color].border}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className={`${riskColors[risk.color].badge} text-white text-sm font-bold px-4 py-2 rounded-full`}>
                {risk.label}
              </div>
              <h2 className={`text-2xl font-bold ${riskColors[risk.color].text}`}>Your Contract Risk Report</h2>
            </div>

            {/* Score summary */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-green-600">{reviewedCount - redFlagCount - checkCount}</div>
                <div className="text-xs text-gray-600 mt-1">Looks Good</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-yellow-500">{checkCount}</div>
                <div className="text-xs text-gray-600 mt-1">Need to Verify</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-red-600">{redFlagCount}</div>
                <div className="text-xs text-gray-600 mt-1">Red Flags</div>
              </div>
            </div>

            <p className={`text-base font-semibold mb-6 ${riskColors[risk.color].text}`}>{risk.message}</p>

            {/* Red flag detail */}
            {redFlagItems.length > 0 && (
              <div className="bg-white rounded-lg p-5 mb-4 shadow-sm">
                <h3 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                  <span>⚠</span> Clauses to Negotiate Before Signing
                </h3>
                <ul className="space-y-2">
                  {redFlagItems.map(item => (
                    <li key={item.key} className="flex items-start gap-2 text-sm">
                      <span className="text-red-500 font-bold shrink-0 mt-0.5">→</span>
                      <div>
                        <span className="font-semibold text-gray-900">{item.title}: </span>
                        <span className="text-gray-700">{item.redFlags}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {checkItems.length > 0 && (
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h3 className="font-bold text-yellow-700 mb-3">? Items to Confirm in Writing</h3>
                <ul className="space-y-1">
                  {checkItems.map(item => (
                    <li key={item.key} className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="text-yellow-500 font-bold">→</span> {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* $9 CTA — shown when red flags exist */}
            {(redFlagCount > 0 || checkCount > 0) && (
              <div className="mt-6 bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-xl p-6 border-2 border-yellow-400">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="inline-block bg-yellow-400 text-purple-900 text-xs font-bold px-3 py-1 rounded-full mb-2">
                      ONLY $9
                    </div>
                    <h3 className="text-xl font-bold leading-tight">
                      Get the exact email scripts and counter-offer language to negotiate {redFlagCount > 0 ? `your ${redFlagCount} red flag${redFlagCount !== 1 ? 's' : ''}` : 'these clauses'}
                    </h3>
                  </div>
                  <div className="text-4xl font-black text-yellow-400 shrink-0">$9</div>
                </div>
                <ul className="space-y-1 text-sm text-purple-100 mb-5">
                  <li>✓ Word-for-word counter-offer emails for each red flag clause</li>
                  <li>✓ Scripts for negotiating with recruiters by phone</li>
                  <li>✓ Legal addendum language to modify bad clauses</li>
                  <li>✓ What to say if they push back or say "it&apos;s standard"</li>
                </ul>
                <a
                  href="https://maveryholdings.gumroad.com/l/djnau"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold py-4 px-6 rounded-lg transition-colors text-center text-lg"
                >
                  Get the Negotiation Scripts — $9
                </a>
                <p className="text-xs text-purple-200 text-center mt-3">Instant download · One-time payment · No subscription</p>
              </div>
            )}
          </div>
        )}

{/* Additional Resources */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/"
              className="border-2 border-blue-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-bold text-blue-600 mb-2">Browse Salary Data →</h3>
              <p className="text-gray-700">Compare salaries across cities and hospitals nationwide</p>
            </Link>
            <a
              href="https://www.vivian.com/jobs/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-green-200 rounded-lg p-6 hover:border-green-400 hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-bold text-green-600 mb-2">Find Travel Nursing Jobs →</h3>
              <p className="text-gray-700">Browse 10,000+ travel and staff RN positions on Vivian Health</p>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
