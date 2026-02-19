import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const principles = [
  {
    title: "Operator-led perspective",
    description:
      "We build pricing like owners do — with cash flow, seasonality, and margin protection in mind.",
  },
  {
    title: "Quiet sophistication",
    description:
      "Design-forward payment experiences that feel intentional, premium, and on-brand.",
  },
  {
    title: "Clarity by default",
    description:
      "Every statement, fee, and optimization is translated into plain, useful language.",
  },
];

export function AboutPage() {
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
            About Walrus
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Premium payments designed by operators who value detail.
          </h1>
          <p className="max-w-2xl text-lg text-white/70">
            Walrus Payments exists for brands that refuse to be treated like
            numbers. We craft pricing strategies and payment experiences that
            honor your margins and your customer experience.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold">Built for real business owners.</h2>
            <p className="text-sm text-white/70">
              We partner with Finix to deliver enterprise-grade infrastructure,
              then bring it down to a human level with concierge onboarding,
              hardware guidance, and proactive optimization.
            </p>
            <p className="text-sm text-white/70">
              Based in Richmond, Virginia, we support merchants nationwide with
              thoughtful pricing, elegant reporting, and a direct line to your
              specialist.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass-card border-white/10 p-6"
          >
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  Leadership
                </p>
                <h3 className="text-xl font-semibold">Scott Jones</h3>
              </div>
              <p className="text-sm text-white/70">
                Founder &amp; CEO. A decade of building payment solutions for
                independent merchants, with a focus on clarity, control, and
                brand-aligned experiences.
              </p>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/60">
                “We believe premium brands deserve premium payments — without
                opaque pricing or call-center support.”
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-900/80 px-4 py-16 sm:px-6">
        <div className="mx-auto w-full max-w-6xl space-y-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-4"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-[#06D6A0]">
              Our principles
            </p>
            <h2 className="text-3xl font-semibold">A premium experience, end to end.</h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((principle) => (
              <motion.div
                key={principle.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Card className="glass-card border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">
                      {principle.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-white/70">{principle.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
