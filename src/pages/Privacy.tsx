export function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6">
      <div className="space-y-6">
        <h1 className="text-4xl font-semibold">Privacy Policy</h1>
        <p className="text-sm text-navy/60">Effective date: February 19, 2026</p>
        <p className="text-sm text-navy/70">
          Walrus Payments LLC ("Walrus", "we", "us") values your privacy. This
          policy describes how we collect, use, and protect your information.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <p className="text-sm text-navy/70">
            We collect contact details, business information, processing volumes,
            and communications submitted through our forms. We may also collect
            device and usage data via cookies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. How We Use Information</h2>
          <p className="text-sm text-navy/70">
            We use information to provide quotes, onboard merchants, deliver
            processing services, and improve our offerings. We do not sell
            personal data.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. PCI & Security</h2>
          <p className="text-sm text-navy/70">
            We follow PCI standards and partner with Finix for secure payment
            processing. Sensitive payment data is handled by our processing
            partners, not stored by Walrus.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Third Parties</h2>
          <p className="text-sm text-navy/70">
            We share data with trusted partners such as Finix to deliver
            processing services. We may also use analytics vendors to understand
            site usage.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Your Rights</h2>
          <p className="text-sm text-navy/70">
            You may request access, correction, or deletion of your information.
            We honor applicable GDPR/CCPA rights where required.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">6. Contact</h2>
          <p className="text-sm text-navy/70">
            Walrus Payments LLC • Richmond, VA • privacy@walruspayments.com
          </p>
        </section>
      </div>
    </div>
  );
}
