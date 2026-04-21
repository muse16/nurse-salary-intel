'use client';

import { useState } from 'react';

interface EmailGateModalProps {
  buttonText?: string;
  buttonClassName?: string;
}

export default function EmailGateModal({
  buttonText = 'Download Your Free Contract Audit',
  buttonClassName = '',
}: EmailGateModalProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });
      if (!res.ok) throw new Error('Failed');
      setDone(true);
      window.open('/nurse-contract-audit-kit.pdf', '_blank');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className={buttonClassName}>
        {buttonText}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="relative bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl z-10">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none"
              aria-label="Close"
            >
              ✕
            </button>

            {done ? (
              <div className="text-center py-4">
                <div className="text-5xl mb-4">✓</div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Your PDF is opening!</h2>
                <p className="text-gray-600 text-sm mb-4">
                  If it didn&apos;t open automatically,{' '}
                  <a
                    href="/nurse-contract-audit-kit.pdf"
                    target="_blank"
                    className="text-blue-600 underline"
                  >
                    click here to download it
                  </a>
                  .
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold text-gray-900 mb-1 pr-6">
                  Get Your Free Contract Audit Kit
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  Enter your name and email for instant PDF access.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                    <input
                      required
                      type="text"
                      placeholder="Jane"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                    <input
                      required
                      type="email"
                      placeholder="jane@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  {error && <p className="text-red-600 text-sm">{error}</p>}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold py-3 px-6 rounded-lg transition-colors text-sm disabled:opacity-60"
                  >
                    {loading ? 'Opening…' : 'Get Free PDF →'}
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    No spam. Unsubscribe any time.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
