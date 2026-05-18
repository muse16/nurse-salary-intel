'use client';

import { useState } from 'react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const SUBJECTS = [
  'Salary data correction',
  'Article suggestion',
  'Technical issue',
  'Partnership or advertising',
  'Other',
];

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (res.ok) {
        setStatus('sent');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full rounded-xl border border-outline-variant/40 bg-surface-container-low px-4 py-3 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all';

  if (status === 'sent') {
    return (
      <div className="rounded-2xl bg-surface-container-low border border-outline-variant/30 p-8 text-center">
        <div className="text-3xl mb-3">✉️</div>
        <p className="font-semibold text-on-surface text-lg mb-1">Your email has been sent.</p>
        <p className="text-on-surface-variant text-sm">We&apos;ll get back to you as soon as possible.</p>
        <button
          onClick={() => { setStatus('idle'); setName(''); setEmail(''); setSubject(''); setMessage(''); }}
          className="mt-4 text-primary underline text-sm hover:opacity-80"
        >
          Send another message
        </button>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="rounded-2xl bg-surface-container-low border border-outline-variant/30 p-8 text-center">
        <div className="text-3xl mb-3">⚠️</div>
        <p className="font-semibold text-on-surface text-lg mb-1">Something went wrong.</p>
        <p className="text-on-surface-variant text-sm">Please try again or email us directly at support@nursesalaryintel.com.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-primary underline text-sm hover:opacity-80"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-on-surface mb-1.5">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            required
            placeholder="Your name"
            value={name}
            onChange={e => setName(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-on-surface mb-1.5">
            Email address
          </label>
          <input
            id="contact-email"
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium text-on-surface mb-1.5">
          Subject
        </label>
        <select
          id="contact-subject"
          value={subject}
          onChange={e => setSubject(e.target.value)}
          className={inputClass}
        >
          <option value="">Select a topic…</option>
          {SUBJECTS.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-on-surface mb-1.5">
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          placeholder="Tell us what you need…"
          value={message}
          onChange={e => setMessage(e.target.value)}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="gradient-primary text-on-primary px-6 py-3 rounded-xl font-bold text-sm shadow-sm hover:shadow-md transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
