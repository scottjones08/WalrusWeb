export function TermsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6">
      <div className="space-y-6">
        <h1 className="text-4xl font-semibold">Terms of Service</h1>
        <p className="text-sm text-navy/60">Effective date: February 19, 2026</p>
        <p className="text-sm text-navy/70">
          These Terms of Service ("Terms") govern the payment processing
          services provided by Walrus Payments LLC ("Walrus", "we", "us") to you
          ("Merchant", "you"). By engaging Walrus, you agree to these Terms.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Services</h2>
          <p className="text-sm text-navy/70">
            Walrus provides payment processing solutions, hardware coordination,
            and merchant support. Services are delivered through our processing
            partners and require merchant underwriting and approval.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Fees & Rates</h2>
          <p className="text-sm text-navy/70">
            Fees are customized based on merchant volume, industry, and risk
            profile. Rates are disclosed before activation and subject to change
            with notice as allowed by law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. Merchant Obligations</h2>
          <p className="text-sm text-navy/70">
            You agree to provide accurate information, comply with card network
            rules, and use processing services for lawful transactions only.
            Merchants are responsible for chargebacks, returns, and customer
            disputes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Liability</h2>
          <p className="text-sm text-navy/70">
            Walrus is not liable for indirect, incidental, or consequential
            damages. Our total liability is limited to fees paid in the prior
            three months of service, except where prohibited by law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Dispute Resolution</h2>
          <p className="text-sm text-navy/70">
            Disputes will be resolved by binding arbitration in Richmond,
            Virginia, unless mutually agreed otherwise. Each party bears its own
            costs.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">6. Termination</h2>
          <p className="text-sm text-navy/70">
            Either party may terminate services with written notice. Walrus may
            suspend or terminate services for fraud, risk concerns, or breach of
            these Terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">7. Contact</h2>
          <p className="text-sm text-navy/70">
            Walrus Payments LLC • Richmond, VA • support@walruspayments.com
          </p>
        </section>
      </div>
    </div>
  );
}
