import Link from 'next/link';
import Image from 'next/image';
import SiteNav from '@/components/SiteNav';

export default function HeroSection() {
  return (
    <>
      <SiteNav />
      <header className="relative min-h-[870px] flex items-center overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent z-10" />
          <Image
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-center grayscale-[20%]"
            src="/images/hero-nurse.jpg"
            alt="Professional nurse in modern medical setting"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-wider mb-6">
              Empowering Healthcare Careers
            </span>

            <h1 className="font-headline font-extrabold text-5xl md:text-7xl text-on-surface text-editorial leading-[1.1] mb-6">
              Know your worth.<br />
              <span className="text-primary">Know What to Negotiate.</span>
            </h1>

            <p className="text-on-surface-variant text-xl md:text-2xl leading-relaxed mb-10 max-w-xl">
              Unbiased salary transparency and contract intelligence designed by nurses, for nurses. Get the data you need to negotiate with authority.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/audit"
                className="gradient-primary text-on-primary px-8 py-4 rounded-xl font-bold text-lg shadow-sunken flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5"
              >
                Run Free Contract Audit
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </Link>
              <a
                href="#calculator"
                className="bg-surface-container-lowest border-2 border-primary/20 text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-fixed transition-colors flex items-center justify-center"
              >
                Calculate Salary
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
