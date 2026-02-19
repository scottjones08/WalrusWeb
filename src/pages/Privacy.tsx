import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const sections = [
  {
    title: "1. Information We Collect",
    body:
      "We collect contact details, business information, processing volumes, and communications submitted through our forms. We may also collect device and usage data via cookies.",
  },
  {
    title: "2. How We Use Information",
    body:
      "We use information to provide quotes, onboard merchants, deliver processing services, and improve our offerings. We do not sell personal data.",
  },
  {
    title: "3. PCI & Security",
    body:
      "We follow PCI standards and partner with Finix for secure payment processing. Sensitive payment data is handled by our processing partners, not stored by Walrus.",
  },
  {
    title: "4. Third Parties",
    body:
      "We share data with trusted partners such as Finix to deliver processing services. We may also use analytics vendors to understand site usage.",
  },
  {
    title: "5. Your Rights",
    body:
      "You may request access, correction, or deletion of your information. We honor applicable GDPR/CCPA rights where required.",
  },
];

export function PrivacyPage() {
  return (
    <div className="bg-slate-950 text-white">
      <section className="mx-auto w-full max-w-4xl px-4 pb-16 pt-20 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#06D6A0]">
            Legal
          </p>
          <h1 className="text-4xl font-semibold">Privacy Policy</h1>
          <p className="text-sm text-white/60">Effective date: February 19, 2026</p>
          <p className="text-sm text-white/70">
            Walrus Payments LLC ("Walrus", "we", "us") values your privacy. This
            policy describes how we collect, use, and protect your information.
          </p>
        </motion.div>

        <div className="mt-10 space-y-6">
          {sections.map((section) => (
            <motion.section
              key={section.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h2 className="text-xl font-semibold text-white">
                {section.title}
              </h2>
              <p className="mt-3 text-sm text-white/70">{section.body}</p>
            </motion.section>
          ))}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-xl font-semibold text-white">6. Contact</h2>
            <p className="mt-3 text-sm text-white/70">
              Walrus Payments LLC • Richmond, VA • privacy@walruspayments.com
            </p>
          </motion.section>
        </div>
      </section>
    </div>
  );
}
