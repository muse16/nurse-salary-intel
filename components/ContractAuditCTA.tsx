import Link from 'next/link';

interface ContractAuditCTAProps {
  variant?: 'inline' | 'banner' | 'sidebar';
  heading?: string;
}

const gumroadLink = 'https://maveryholdings.gumroad.com/l/djnau';

export default function ContractAuditCTA({ variant = 'inline', heading }: ContractAuditCTAProps) {
  if (variant === 'banner') {
    return (
      <div className="my-10 bg-gradient-to-r from-[#0a1628] to-[#004ac6] text-white rounded-xl p-8 shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <span className="inline-block bg-yellow-400 text-[#0a1628] text-xs font-bold px-3 py-1 rounded-full mb-3">
              ONLY $9
            </span>
            <h3 className="text-xl font-bold font-headline mb-2">
              {heading || 'Get Your Nursing Contract Reviewed'}
            </h3>
            <p className="text-blue-100 text-sm">
              Upload your contract and get a detailed audit — red flags, missing protections, and negotiation scripts.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 shrink-0">
            <a
              href={gumroadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-300 text-[#0a1628] font-bold py-3 px-8 rounded-lg transition-colors text-center whitespace-nowrap"
            >
              Get Contract Audit — $9
            </a>
            <Link href="/contract-audit" className="text-blue-200 text-xs hover:text-white transition-colors underline">
              Learn more about the audit
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'sidebar') {
    return (
      <div className="bg-gradient-to-br from-[#0a1628] to-[#004ac6] text-white rounded-xl p-6 shadow-lg">
        <span className="inline-block bg-yellow-400 text-[#0a1628] text-xs font-bold px-2 py-1 rounded-full mb-3">
          $9
        </span>
        <h3 className="text-base font-bold font-headline mb-2">
          {heading || 'Contract Audit'}
        </h3>
        <p className="text-blue-100 text-sm mb-4">
          Get red flags, missing clauses, and negotiation scripts for your contract.
        </p>
        <a
          href={gumroadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-yellow-400 hover:bg-yellow-300 text-[#0a1628] font-bold py-2.5 px-4 rounded-lg transition-colors text-center text-sm"
        >
          Get Audit — $9
        </a>
      </div>
    );
  }

  // inline (default)
  return (
    <div className="my-8 flex items-center gap-4 bg-surface-container-low border border-outline-variant rounded-lg p-4">
      <div className="flex-1">
        <p className="text-sm font-semibold text-on-surface">
          {heading || 'Have a contract? Get it reviewed for $9.'}
        </p>
        <p className="text-xs text-on-surface-variant mt-0.5">Red flags, missing protections, and negotiation scripts.</p>
      </div>
      <a
        href={gumroadLink}
        target="_blank"
        rel="noopener noreferrer"
        className="gradient-primary text-on-primary font-bold py-2 px-5 rounded-lg text-sm whitespace-nowrap"
      >
        $9 Audit
      </a>
    </div>
  );
}
