'use client';

import EmailGateModal from './EmailGateModal';

interface ContractAuditCTAProps {
  variant?: 'inline' | 'banner' | 'sidebar';
  heading?: string;
  redFlagCount?: number;
}

const CANONICAL_HEADLINE = 'Download your free nursing contract audit kit — scripts, checklists, and counter-offer language';

const BULLETS = [
  'Word-for-word counter-offer emails for each red flag clause',
  'Scripts for negotiating with recruiters by phone',
  'Legal addendum language to modify bad clauses',
  'What to say if they push back or say \u201cit\u2019s standard\u201d',
];

function headlineFor(heading: string | undefined, redFlagCount: number | undefined) {
  if (heading) return heading;
  if (typeof redFlagCount === 'number' && redFlagCount > 0) {
    return `Get the free scripts and counter-offer language to negotiate your ${redFlagCount} red flag${redFlagCount !== 1 ? 's' : ''}`;
  }
  return CANONICAL_HEADLINE;
}

export default function ContractAuditCTA({ variant = 'inline', heading, redFlagCount }: ContractAuditCTAProps) {
  const headlineText = headlineFor(heading, redFlagCount);

  if (variant === 'banner') {
    return (
      <div className="my-10 bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-xl p-8 shadow-lg border-2 border-yellow-400">
        <div className="mb-4">
          <div className="inline-block bg-yellow-400 text-purple-900 text-xs font-bold px-3 py-1 rounded-full mb-2">
            FREE DOWNLOAD
          </div>
          <h3 className="text-xl font-bold leading-tight">{headlineText}</h3>
        </div>
        <ul className="space-y-1 text-sm text-purple-100 mb-5">
          {BULLETS.map((b) => (
            <li key={b}>&#10003; {b}</li>
          ))}
        </ul>
        <EmailGateModal
          buttonText="Download Your Free Contract Audit"
          buttonClassName="block w-full bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold py-4 px-6 rounded-lg transition-colors text-center text-lg"
        />
        <p className="text-xs text-purple-200 text-center mt-3">Instant access &middot; Free &middot; No credit card</p>
      </div>
    );
  }

  if (variant === 'sidebar') {
    return (
      <div className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white rounded-xl p-6 shadow-lg border-2 border-yellow-400">
        <div className="inline-block bg-yellow-400 text-purple-900 text-xs font-bold px-2 py-1 rounded-full mb-3">
          FREE DOWNLOAD
        </div>
        <h3 className="text-base font-bold mb-3 leading-snug">{headlineText}</h3>
        <ul className="space-y-1 text-xs text-purple-100 mb-4">
          {BULLETS.map((b) => (
            <li key={b}>&#10003; {b}</li>
          ))}
        </ul>
        <EmailGateModal
          buttonText="Download Your Free Contract Audit"
          buttonClassName="block w-full bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold py-2.5 px-4 rounded-lg transition-colors text-center text-sm"
        />
      </div>
    );
  }

  // inline (default)
  return (
    <div className="my-8 bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-xl p-6 shadow-md border-2 border-yellow-400">
      <div className="mb-3">
        <span className="inline-block bg-yellow-400 text-purple-900 text-xs font-bold px-2.5 py-0.5 rounded-full mb-2">FREE DOWNLOAD</span>
        <p className="text-base font-bold leading-snug">{headlineText}</p>
      </div>
      <ul className="space-y-1 text-xs text-purple-100 mb-4">
        {BULLETS.map((b) => (
          <li key={b}>&#10003; {b}</li>
        ))}
      </ul>
      <EmailGateModal
        buttonText="Download Your Free Contract Audit"
        buttonClassName="block w-full bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold py-2.5 px-5 rounded-lg transition-colors text-center text-sm"
      />
    </div>
  );
}
