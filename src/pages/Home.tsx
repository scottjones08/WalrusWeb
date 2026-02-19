import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const pillars = [
  {
    title: "Pricing with intent",
    description:
      "We shape pricing around your business model, not around a template. The result feels unfair to everyone else — in a good way.",
  },
  {
    title: "Quietly powerful stack",
    description:
      "Enterprise rails, modern risk tooling, and funding that arrives fast. You get strength without the drama.",
  },
  {
    title: "Human-level service",
    description:
      "A real operator answers. We help you decode statements, choose hardware, and move with confidence.",
  },
];

const industries = [
  {
    name: "Restaurants & hospitality",
    detail: "Smooth checkout flows, tipping support, and resilient uptime.",
  },
  {
    name: "Health & wellness",
    detail: "Secure payments for practices that value trust and privacy.",
  },
  {
    name: "Retail & boutiques",
    detail: "In-store, online, and everywhere your brand shows up.",
  },
  {
    name: "Professional services",
    detail: "Invoicing, retainers, and recurring billing — all polished.",
  },
];

const testimonials = [
  {
    quote:
      "They made our statement look like a clean sheet of glass. The clarity alone was worth the move.",
    name: "Operations Lead, Boutique Hotel Group",
  },
  {
    quote:
      "Walrus moved at founder speed. The onboarding felt like a concierge, not a call center.",
    name: "Owner, Multi-Location Cafe",
  },
  {
    quote:
      "We finally feel like we have a payments partner — not just a processor.",
    name: "Director, Specialty Retail",
  },
];

export function HomePage() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const midLayerY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  return (
    <div className="bg-slate-950 text-white">
      <section
        ref={heroRef}
        className="relative min-h-[100dvh] overflow-hidden"
      >
        <motion.div
          style={{ y: backgroundY, opacity: glowOpacity }}
          className="absolute inset-0"
        >
          <div className="hero-gradient" />
          <div className="absolute inset-0 noise-overlay" />
        </motion.div>

        <motion.div
          style={{ y: midLayerY }}
          className="pointer-events-none absolute inset-0"
        >
          <div className="gradient-orb orb-one" />
          <div className="gradient-orb orb-two" />
        </motion.div>

        <motion.div
          style={{ y: foregroundY }}
          className="pointer-events-none absolute inset-0"
        >
          <div className="gradient-ribbon" />
        </motion.div>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col justify-center gap-12 px-4 pb-20 pt-32 sm:px-6">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.4em] text-white/60">
            <img
              src="/walrus-logo.jpg"
              alt="Walrus Payments"
              className="h-12 w-12 rounded-full bg-white p-2"
            />
            Walrus Payments
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-6"
            >
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Payments that feel custom-crafted.
              </h1>
              <p className="text-lg text-white/80 sm:text-xl">
                We build pricing around your business, then wrap it in a premium
                payments experience. No public rate sheets, no copycat pricing —
                just a private quote that makes sense.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#06D6A0] text-slate-950 hover:bg-[#0CEBB2]"
                >
                  <a href="#contact">Request a custom quote</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/rates">Explore our pricing philosophy</Link>
                </Button>
              </div>
              <p className="text-sm text-white/60">
                Trusted by operators who want their payments to look as polished
                as their brand.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="glass-card space-y-6"
            >
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                  What you get
                </p>
                <h2 className="text-2xl font-semibold">
                  A pricing strategy, not just a rate.
                </h2>
              </div>
              <ul className="space-y-4 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#06D6A0]" />
                  Statement review with clarity on hidden fees and processing
                  flow.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#06D6A0]" />
                  Pricing shaped around your ticket size, volume, and risk
                  profile.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#06D6A0]" />
                  A dedicated concierge from onboarding through optimization.
                </li>
              </ul>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                We keep our rates private because every business deserves a
                strategy that fits them — not a template built for everyone else.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative bg-slate-950 px-4 py-16 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid gap-8 lg:grid-cols-[1fr_1.1fr]"
          >
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-[#06D6A0]">
                Why Walrus
              </p>
              <h2 className="text-3xl font-semibold">
                Luxury-grade payments, built for operators.
              </h2>
              <p className="text-white/70">
                We blend fintech infrastructure with concierge service. Think
                meticulous onboarding, transparent statements, and pricing that
                feels like it was written for your P&amp;L.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <Card key={pillar.title} className="glass-card border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-white/70">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
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
            className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                Built for your world
              </p>
              <h2 className="text-3xl font-semibold">
                Industries that demand finesse.
              </h2>
            </div>
            <Button asChild variant="ghost" className="text-[#06D6A0]">
              <Link to="/contact">Let&apos;s talk</Link>
            </Button>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2">
            {industries.map((industry) => (
              <motion.div
                key={industry.name}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Card className="glass-card border-white/10">
                  <CardContent className="space-y-2 pt-6">
                    <p className="text-lg font-semibold text-white">
                      {industry.name}
                    </p>
                    <p className="text-sm text-white/70">{industry.detail}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 sm:px-6">
        <div className="mx-auto w-full max-w-6xl space-y-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-4"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[#06D6A0]">
              The Walrus signature
            </p>
            <h2 className="text-3xl font-semibold">
              Pricing clarity with quiet confidence.
            </h2>
            <p className="text-white/70">
              We don&apos;t publish rates. We build them. Our team studies your
              statement, listens to your goals, and designs a plan that your
              competitors don&apos;t want you to know about.
            </p>
          </motion.div>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <motion.div
                key={item.name}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Card className="glass-card border-white/10">
                  <CardContent className="space-y-4 pt-6">
                    <p className="text-sm text-white/80">“{item.quote}”</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                      {item.name}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-900 px-4 py-16 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-10 space-y-4"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[#06D6A0]">
              Ready for your quote?
            </p>
            <h2 className="text-3xl font-semibold">
              Tell us about your business.
            </h2>
            <p className="text-white/70">
              The fastest way to uncover a better pricing strategy is to share a
              few details. We&apos;ll respond with a tailored proposal and zero
              pressure.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass-card border-white/10"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
