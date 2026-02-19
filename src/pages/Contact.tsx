import { motion } from "framer-motion";

import { ContactForm } from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const contactDetails = [
  {
    title: "Concierge onboarding",
    detail: "We guide every step — pricing, hardware, and activation timelines.",
  },
  {
    title: "Fast turnaround",
    detail: "Share a statement today, receive a tailored proposal within 24 hours.",
  },
  {
    title: "Dedicated support",
    detail: "One point of contact who stays with you as your business grows.",
  },
];

export function ContactPage() {
  return (
    <div className="bg-slate-950 text-white">
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-20 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#06D6A0]">
            Let&apos;s talk
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Request a custom quote designed around your business.
          </h1>
          <p className="max-w-2xl text-lg text-white/70">
            We treat every business like a private client. Share a few details
            and our team will craft a pricing strategy that feels bespoke.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">What to expect</h2>
              <p className="text-sm text-white/70">
                You&apos;ll get a clear plan, a realistic timeline, and a concise
                statement review — delivered in plain language.
              </p>
            </div>
            <div className="grid gap-4">
              {contactDetails.map((item) => (
                <Card key={item.title} className="glass-card border-white/10">
                  <CardContent className="space-y-2 pt-6">
                    <p className="text-base font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="text-sm text-white/70">{item.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ContactForm
              title="Let’s build your custom rate"
              description="Tell us about your business and your current processor. We’ll send a tailored rate proposal within 24 hours."
              className="glass-card border-white/10"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
