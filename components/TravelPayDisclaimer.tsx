export function TravelPayDisclaimer() {
  return (
    <div className="bg-surface-container-low rounded-xl p-5 mt-6 border border-outline-variant">
      <p className="font-semibold text-on-surface mb-2 text-sm uppercase tracking-wide">
        ✈️ Travel Pay Note
      </p>
      <p className="text-on-surface-variant text-sm leading-relaxed">
        Travel nurse rates on this page are <strong>total weekly package figures</strong> — they
        combine a taxable base hourly rate with non-taxable housing and meal stipends. These are{' '}
        <strong>not directly comparable to staff RN annual salary.</strong> Key differences: travel
        contracts typically run 13 weeks with unpaid gaps between assignments; stipends require
        maintaining a qualifying tax home (an added cost); and travelers receive no employer-sponsored
        benefits such as health insurance, PTO, or retirement contributions.
      </p>
    </div>
  );
}
