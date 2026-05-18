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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Build a mailto link with prefilled fields and open it
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoUrl = `mailto:support@nursesalaryintel.com?subject=${encodeURIComponent(subject || 'Contact from NurseSalaryIntel.com')}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    // Mark as sent after a short delay
    setTimeout(() => setStatus('sent'), 800);
  };

  const inputClass =
    'w-full rounded-xl border border-outline-variant/40 bg-surface-container-low px-4 py-3 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all';

  if (status === 'sent') {
    return (
      <div className="rounded-2xl bg-surface-container-low border border-outline-variant/30 p-8 text-center">
        <div className="text-3xl mb-3">✉️</div>
        <p className="font-semibold text-on-surface text-lg mb-1">Message ready to send</p>
        <p className="text-on-surface-variant text-sm">Your email client should have opened with the message pre-filled. Hit send to submit.</p>
        <button
          onClick={() => { setStatus('idle'); setName(''); setEmail(''); setSubject(''); setMessage(''); }}
          className="mt-4 text-primary underline text-sm hover:opacity-80"
        >
          Send another message
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
        {status === 'sending' ? 'Opening email…' : 'Send Message'}
      </button>

      <p className="text-xs text-on-surface-variant">
        This will open your default email client with the message pre-filled. Your email is not stored on our servers.
      </p>
    </form>
  );
}
