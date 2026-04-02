interface PremiumAuditCTAProps {
  placement?: 'sidebar' | 'footer';
}

export default function PremiumAuditCTA({ placement = 'sidebar' }: PremiumAuditCTAProps) {
  const gumroadLink = 'https://maveryholdings.gumroad.com/l/djnau';

  if (placement === 'footer') {
    return (
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-lg shadow-xl p-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-yellow-400 text-purple-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
            ONLY $9
          </div>
          <h3 className="text-2xl font-bold mb-3">
            Get the exact email scripts and counter-offer language to negotiate your contract red flags
          </h3>
          <p className="text-lg text-purple-100 mb-6">
            Word-for-word negotiation scripts, counter-offer emails, and legal clause language — written for nurses.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="text-sm text-purple-200">One-time payment</div>
              <div className="text-3xl font-bold text-yellow-400">$9</div>
            </div>
            <a
              href={gumroadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg"
            >
              Get the Negotiation Scripts — $9
            </a>
          </div>
          <div className="text-sm text-purple-200">
            ✓ Counter-offer emails &nbsp;✓ Recruiter phone scripts &nbsp;✓ Legal addendum language
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white rounded-lg shadow-lg p-6 border-2 border-purple-400">
      <div className="inline-block bg-yellow-400 text-purple-900 text-xs font-bold px-2 py-1 rounded-full mb-3">
        ONLY $9
      </div>
      <h3 className="text-base font-bold mb-2 leading-snug">
        Get the exact scripts to negotiate your contract red flags
      </h3>
      <p className="text-purple-100 text-sm mb-4">
        Word-for-word counter-offer emails and recruiter scripts — written for nurses.
      </p>

      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-yellow-400 font-bold">✓</span>
            <span>Counter-offer emails per red flag clause</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-400 font-bold">✓</span>
            <span>Recruiter phone negotiation scripts</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-400 font-bold">✓</span>
            <span>Legal addendum language to modify clauses</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-400 font-bold">✓</span>
            <span>What to say when they push back</span>
          </li>
        </ul>
      </div>

      <div className="text-center mb-4">
        <div className="text-sm text-purple-200 mb-1">One-time payment</div>
        <div className="text-4xl font-bold text-yellow-400">$9</div>
      </div>

      <a
        href={gumroadLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold py-3 px-6 rounded-lg transition-colors text-center"
      >
        Get Negotiation Scripts — $9
      </a>

      <p className="text-xs text-purple-200 text-center mt-3">
        Instant download · No subscription
      </p>
    </div>
  );
}
