'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useCallback } from 'react';

type MenuKey = 'rn-salary' | 'specialties' | 'career' | 'travel' | 'calculators' | null;

const NAV_ITEMS: { label: string; href: string; key: MenuKey }[] = [
  { label: 'RN Salary',           href: '/rn-salary-by-state',              key: 'rn-salary' },
  { label: 'Nursing Specialties', href: '/nursing-salary/by-specialty-2026', key: 'specialties' },
  { label: 'Salary Guides',       href: '/blog',                             key: 'career' },
  { label: 'Travel Nursing',      href: '/travel-nursing',                   key: 'travel' },
  { label: 'Calculators',         href: '/rn-salary-calculator',             key: 'calculators' },
];

export default function SiteNav() {
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<MenuKey>(null);
  const closeTimer = useState<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = useCallback((key: MenuKey) => {
    if (closeTimer[0]) clearTimeout(closeTimer[0]);
    setActiveMenu(key);
  }, [closeTimer]);

  const scheduleClose = useCallback(() => {
    closeTimer[0] = setTimeout(() => setActiveMenu(null), 120);
  }, [closeTimer]);

  const cancelClose = useCallback(() => {
    if (closeTimer[0]) clearTimeout(closeTimer[0]);
  }, [closeTimer]);

  const toggleAccordion = (key: MenuKey) =>
    setOpenAccordion(prev => (prev === key ? null : key));

  return (
    <nav className="fixed w-full top-0 z-50 glass-nav shadow-sm">

      {/* Main bar */}
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-primary font-headline shrink-0">
          <Image src="/images/logo.svg" alt="Nurse Salary Intel logo" width={32} height={32} priority />
          Nurse Salary Intel
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {NAV_ITEMS.map(item => (
            <div key={item.key} onMouseEnter={() => openMenu(item.key)} onMouseLeave={scheduleClose}>
              <Link href={item.href} onClick={() => setActiveMenu(null)}
                className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  activeMenu === item.key ? 'bg-surface-container text-primary' : 'text-on-surface-variant hover:bg-surface-container hover:text-primary'
                }`}>
                {item.label}
                <svg className={`w-3.5 h-3.5 opacity-50 transition-transform duration-200 ${activeMenu === item.key ? 'rotate-180 opacity-80' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          ))}
          <Link href="/rn-salary-calculator"
            className="ml-3 gradient-primary text-on-primary px-5 py-2.5 rounded-xl font-semibold text-sm shadow-md transition-all active:scale-95 hover:opacity-90 whitespace-nowrap">
            Calculate Salary
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden text-on-surface-variant p-2 rounded-lg hover:bg-surface-container transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mega menu (desktop) */}
      {activeMenu && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-outline-variant/40 shadow-xl z-40"
          onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
          <div className="max-w-7xl mx-auto px-6 py-7">

            {activeMenu === 'rn-salary' && (
              <div className="flex gap-10">
                <div className="flex gap-4 shrink-0">
                  <Link href="/rn-salary-by-state" onClick={() => setActiveMenu(null)}
                    className="group flex flex-col gap-3 p-5 rounded-xl border border-outline-variant/50 hover:border-primary hover:shadow-md transition-all w-44">
                    <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-xl">&#x1F5FA;&#xFE0F;</div>
                    <div><div className="font-semibold text-sm text-on-surface">By State</div><div className="text-xs text-on-surface-variant mt-0.5">All 50 states ranked</div></div>
                  </Link>
                  <Link href="/rn-salary-by-city" onClick={() => setActiveMenu(null)}
                    className="group flex flex-col gap-3 p-5 rounded-xl border border-outline-variant/50 hover:border-primary hover:shadow-md transition-all w-44">
                    <div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center text-xl">&#x1F3D9;&#xFE0F;</div>
                    <div><div className="font-semibold text-sm text-on-surface">By City</div><div className="text-xs text-on-surface-variant mt-0.5">25+ metro areas</div></div>
                  </Link>
                </div>
                <div className="w-px bg-outline-variant/30 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-outline uppercase tracking-wider mb-3">Top States</p>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                    {['California', 'Texas', 'New York', 'Florida', 'Washington', 'Massachusetts'].map(s => (
                      <Link key={s} href={'/rn-salary-by-state/' + s.toLowerCase().replace(/ /g, '-')}
                        onClick={() => setActiveMenu(null)}
                        className="flex items-center gap-2 py-1.5 text-sm text-on-surface-variant hover:text-primary transition-colors">
                        <span className="w-1 h-1 rounded-full bg-outline-variant shrink-0" />{s}
                      </Link>
                    ))}
                  </div>
                  <Link href="/highest-paying-states-for-rns-2026" onClick={() => setActiveMenu(null)}
                    className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-primary">
                    Highest paying states &#x2192;
                  </Link>
                </div>
                <div className="w-px bg-outline-variant/30 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-outline uppercase tracking-wider mb-3">Top Cities</p>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                    {['Houston', 'New York City', 'Los Angeles', 'Chicago', 'Dallas', 'Seattle'].map(c => (
                      <Link key={c} href={'/' + c.toLowerCase().replace(/ /g, '-') + '-rn-salary-2026'}
                        onClick={() => setActiveMenu(null)}
                        className="flex items-center gap-2 py-1.5 text-sm text-on-surface-variant hover:text-primary transition-colors">
                        <span className="w-1 h-1 rounded-full bg-outline-variant shrink-0" />{c}
                      </Link>
                    ))}
                  </div>
                  <Link href="/nurse-salary-cost-of-living-2026" onClick={() => setActiveMenu(null)}
                    className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-primary">
                    Cost of living adjusted &#x2192;
                  </Link>
                </div>
              </div>
            )}

            {activeMenu === 'specialties' && (
              <div>
                <p className="text-xs font-bold text-outline uppercase tracking-wider mb-4">Browse by specialty</p>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { label: 'ICU Nurse', pay: 'Avg $95K', href: '/icu-nurse-salary-2026' },
                    { label: 'ER Nurse', pay: 'Avg $88K', href: '/er-nurse-salary-2026' },
                    { label: 'OR Nurse', pay: 'Avg $91K', href: '/or-nurse-salary-2026' },
                    { label: 'CRNA', pay: 'Avg $214K', href: '/crna-salary-2026' },
                    { label: 'Nurse Practitioner', pay: 'Avg $126K', href: '/nurse-practitioner-salary-2026' },
                    { label: 'NICU Nurse', pay: 'Avg $82K', href: '/nicu-nurse-salary-2026' },
                    { label: 'L&D Nurse', pay: 'Avg $84K', href: '/labor-delivery-nurse-salary-2026' },
                    { label: 'Oncology Nurse', pay: 'Avg $86K', href: '/oncology-nurse-salary-2026' },
                  ].map(s => (
                    <Link key={s.label} href={s.href} onClick={() => setActiveMenu(null)}
                      className="flex items-center gap-3 p-3 rounded-xl border border-outline-variant/50 hover:border-primary hover:bg-primary-fixed/30 transition-all">
                      <div>
                        <div className="text-sm font-semibold text-on-surface leading-tight">{s.label}</div>
                        <div className="text-xs text-primary font-medium">{s.pay}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link href="/nursing-salary/by-specialty-2026" onClick={() => setActiveMenu(null)}
                  className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-primary">
                  View all specialties &#x2192;
                </Link>
              </div>
            )}

            {activeMenu === 'career' && (
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'New Grad RN Salary', href: '/new-grad-rn-salary-2026', desc: 'Starting pay + sign-on bonuses' },
                  { label: 'RN vs LPN Salary', href: '/rn-vs-lpn-salary-2026', desc: 'Full pay comparison' },
                  { label: 'BSN vs ADN Salary', href: '/salary/bsn-vs-rn', desc: '$10K/yr premium breakdown' },
                  { label: 'Negotiation Guide', href: '/nurse-salary-negotiation-guide-2026', desc: 'Scripts + tactics that work' },
                  { label: 'Shift Differential Pay', href: '/shift-differential-nurse-pay-2026', desc: 'Night/weekend premium data' },
                  { label: 'Salary by Experience', href: '/rn-salary-by-years-of-experience-2026', desc: 'Year 1 to 30+ growth' },
                ].map(g => (
                  <Link key={g.label} href={g.href} onClick={() => setActiveMenu(null)}
                    className="p-3 rounded-xl border border-outline-variant/50 hover:border-primary hover:bg-primary-fixed/30 transition-all">
                    <div className="text-sm font-semibold text-on-surface">{g.label}</div>
                    <div className="text-xs text-on-surface-variant mt-0.5">{g.desc}</div>
                  </Link>
                ))}
                <Link href="/blog" onClick={() => setActiveMenu(null)}
                  className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-primary col-span-3">
                  View all salary guides &#x2192;
                </Link>
              </div>
            )}

            {activeMenu === 'travel' && (
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Travel Nurse Salary Guide', href: '/travel-nurse-salary-guide', desc: 'Full 2026 pay breakdown' },
                  { label: 'Travel vs Staff Nurse Pay', href: '/travel-nurse-vs-staff-nurse-salary-2026', desc: 'Side-by-side comparison' },
                  { label: 'Contract Red Flags', href: '/travel-nursing/contract-red-flags', desc: 'What to watch before signing' },
                  { label: 'Pay Package Breakdown', href: '/travel-nursing/pay-package-breakdown', desc: 'Stipends + blended rate explained' },
                  { label: 'Travel Pay Calculator', href: '/travel-nurse-pay-calculator', desc: 'Estimate take-home by contract' },
                  { label: 'Agency Comparison', href: '/travel-nurse-agency-comparison-2026', desc: 'Top agencies ranked 2026' },
                ].map(t => (
                  <Link key={t.label} href={t.href} onClick={() => setActiveMenu(null)}
                    className="p-3 rounded-xl border border-outline-variant/50 hover:border-primary hover:bg-primary-fixed/30 transition-all">
                    <div className="text-sm font-semibold text-on-surface">{t.label}</div>
                    <div className="text-xs text-on-surface-variant mt-0.5">{t.desc}</div>
                  </Link>
                ))}
                <Link href="/travel-nursing" onClick={() => setActiveMenu(null)}
                  className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-primary col-span-3">
                  Travel nursing hub &#x2192;
                </Link>
              </div>
            )}

            {activeMenu === 'calculators' && (
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'RN Salary Calculator', href: '/rn-salary-calculator', desc: 'Take-home after taxes + deductions' },
                  { label: 'Travel Nurse Pay Calculator', href: '/travel-nurse-pay-calculator', desc: 'Blended rate + net weekly income' },
                  { label: 'BSN ROI Calculator', href: '/salary/bsn-vs-rn', desc: 'Years to break even on your BSN' },
                ].map(c => (
                  <Link key={c.label} href={c.href} onClick={() => setActiveMenu(null)}
                    className="p-3 rounded-xl border border-outline-variant/50 hover:border-primary hover:bg-primary-fixed/30 transition-all">
                    <div className="text-sm font-semibold text-on-surface">{c.label}</div>
                    <div className="text-xs text-on-surface-variant mt-0.5">{c.desc}</div>
                  </Link>
                ))}
              </div>
            )}

          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-outline-variant/30 bg-white shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {NAV_ITEMS.map(item => (
              <div key={item.key}>
                <button onClick={() => toggleAccordion(item.key)}
                  className="w-full flex justify-between items-center px-3 py-3 rounded-xl text-sm font-medium text-on-surface hover:bg-surface-container transition-colors">
                  {item.label}
                  <svg className={`w-4 h-4 text-on-surface-variant transition-transform ${openAccordion === item.key ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openAccordion === item.key && (
                  <div className="pl-4 pb-2 space-y-1">
                    {item.key === 'rn-salary' && (<>
                      <Link href="/rn-salary-by-state" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-on-surface-variant hover:text-primary">By State</Link>
                      <Link href="/rn-salary-by-city" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-on-surface-variant hover:text-primary">By City</Link>
                      <Link href="/highest-paying-states-for-rns-2026" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-on-surface-variant hover:text-primary">Highest Paying States</Link>
                    </>)}
                    {item.key === 'specialties' && (<>
                      <Link href="/icu-nurse-salary-2026" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-on-surface-variant hover:text-primary">ICU Nurse</Link>
                      <Link href="/crna-salary-2026" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-on-surface-variant hover:text-primary">CRNA</Link>
                      <Link href="/nurse-practitioner-salary-2026" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-on-surface-variant hover:text-primary">Nurse Practitioner</Link>
                      <Link href="/nursing-salary/by-specialty-2026" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-semibold text-primary">All specialties &#x2192;</Link>
                    </>)}
                    {item.key === 'career' && (<>
                      <Link href="/new-grad-rn-salary-2026" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-on-surface-variant hover:text-primary">New Grad RN Salary</Link>
                      <Link href="/nurse-salary-negotiation-guide-2026" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-on-surface-variant hover:text-primary">Negotiation Guide</Link>
                      <Link href="/blog" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-semibold text-primary">All guides &#x2192;</Link>
                    </>)}
                    {item.key === 'travel' && (<>
                      <Link href="/travel-nurse-salary-guide" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-on-surface-variant hover:text-primary">Salary Guide</Link>
                      <Link href="/travel-nurse-pay-calculator" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-on-surface-variant hover:text-primary">Pay Calculator</Link>
                      <Link href="/travel-nursing/contract-red-flags" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-on-surface-variant hover:text-primary">Contract Red Flags</Link>
                    </>)}
                    {item.key === 'calculators' && (<>
                      <Link href="/rn-salary-calculator" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-on-surface-variant hover:text-primary">RN Salary Calculator</Link>
                      <Link href="/travel-nurse-pay-calculator" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-on-surface-variant hover:text-primary">Travel Nurse Calculator</Link>
                    </>)}
                  </div>
                )}
              </div>
            ))}
            <Link href="/rn-salary-calculator" onClick={() => setMobileOpen(false)}
              className="block w-full text-center gradient-primary text-on-primary px-5 py-3 rounded-xl font-semibold text-sm mt-3">
              Calculate Salary
            </Link>
          </div>
        </div>
      )}

    </nav>
  );
}
