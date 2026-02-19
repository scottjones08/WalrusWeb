import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const sections = [
  {
    title: "1. Services",
    body:
      "Walrus provides payment processing solutions, hardware coordination, and merchant support. Services are delivered through our processing partners and require merchant underwriting and approval.",
  },
  {
    title: "2. Fees & Rates",
    body:
      "Fees are customized based on merchant volume, industry, and risk profile. Rates are disclosed before activation and subject to change with notice as allowed by law.",
  },
  {
    title: "3. Merchant Obligations",
    body:
      "You agree to provide accurate information, comply with card network rules, and use processing services for lawful transactions only. Merchants are responsible for chargebacks, returns, and customer disputes.",
  },
  {
    title: "4. Liability",
    body:
      "Walrus is not liable for indirect, incidental, or consequential damages. Our total liability is limited to fees paid in the prior three months of service, except where prohibited by law.",
  },
  {
    title: "5. Dispute Resolution",
    body:
      "Disputes will be resolved by binding arbitration in Richmond, Virginia, unless mutually agreed otherwise. Each party bears its own costs.",
  },
  {
    title: "6. Termination",
    body:
      "Either party may terminate services with written notice. Walrus may suspend or terminate services for fraud, risk concerns, or breach of these Terms.",
  },
];

export function TermsPage() {
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
          <h1 className="text-4xl font-semibold">Terms of Service</h1>
          <p className="text-sm text-white/60">Effective date: February 19, 2026</p>
          <p className="text-sm text-white/70">
            These Terms of Service ("Terms") govern the payment processing
            services provided by Walrus Payments LLC ("Walrus", "we", "us") to
            you ("Merchant", "you"). By engaging Walrus, you agree to these
            Terms.
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
            <h2 className="text-xl font-semibold text-white">7. Contact</h2>
            <p className="mt-3 text-sm text-white/70">
              Walrus Payments LLC • Richmond, VA • support@walruspayments.com
            </p>
          </motion.section>
        </div>
      </section>
    </div>
  );
}
