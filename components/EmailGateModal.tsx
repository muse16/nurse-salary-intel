'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface EmailGateModalProps {
  buttonText?: string;
  buttonClassName?: string;
}

export default function EmailGateModal({
  buttonText = 'Download Your Free Contract Audit',
  buttonClassName = '',
}: EmailGateModalProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => { setMounted(true); }, []);

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

  const modal = (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', backgroundColor: 'rgba(0,0,0,0.6)' }}
      onClick={() => setOpen(false)}
    >
      <div
        style={{ position: 'relative', background: '#fff', borderRadius: '1rem', padding: '2rem', maxWidth: '28rem', width: '100%', boxShadow: '0 25px 50px rgba(0,0,0,0.3)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', fontSize: '1.25rem', color: '#9ca3af', cursor: 'pointer', lineHeight: 1 }}
          aria-label="Close"
        >
          ✕
        </button>

        {done ? (
          <div style={{ textAlign: 'center', paddingTop: '1rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111', marginBottom: '0.5rem' }}>Your PDF is opening!</h2>
            <p style={{ color: '#4b5563', fontSize: '0.875rem' }}>
              If it didn&apos;t open,{' '}
              <a href="/nurse-contract-audit-kit.pdf" target="_blank" style={{ color: '#2563eb', textDecoration: 'underline' }}>
                click here to download it
              </a>.
            </p>
          </div>
        ) : (
          <>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111', marginBottom: '0.25rem', paddingRight: '1.5rem' }}>
              Get Your Free Contract Audit Kit
            </h2>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1.5rem' }}>
              Enter your name and email for instant PDF access.
            </p>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.25rem' }}>
                  First name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Jane"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ width: '100%', border: '1px solid #d1d5db', borderRadius: '0.5rem', padding: '0.75rem 1rem', fontSize: '0.875rem', boxSizing: 'border-box', outline: 'none', color: '#111', background: '#fff' }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.25rem' }}>
                  Email address
                </label>
                <input
                  required
                  type="email"
                  placeholder="jane@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: '100%', border: '1px solid #d1d5db', borderRadius: '0.5rem', padding: '0.75rem 1rem', fontSize: '0.875rem', boxSizing: 'border-box', outline: 'none', color: '#111', background: '#fff' }}
                />
              </div>
              {error && <p style={{ color: '#dc2626', fontSize: '0.875rem', marginBottom: '0.75rem' }}>{error}</p>}
              <button
                type="submit"
                disabled={loading}
                style={{ width: '100%', background: '#facc15', color: '#4c1d95', fontWeight: 700, padding: '0.75rem 1.5rem', borderRadius: '0.5rem', border: 'none', fontSize: '0.875rem', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.6 : 1 }}
              >
                {loading ? 'Opening…' : 'Get Free PDF →'}
              </button>
              <p style={{ fontSize: '0.75rem', color: '#9ca3af', textAlign: 'center', marginTop: '0.75rem' }}>
                No spam. Unsubscribe any time.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={buttonClassName}>
        {buttonText}
      </button>
      {mounted && open && createPortal(modal, document.body)}
    </>
  );
}
