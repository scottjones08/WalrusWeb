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

const fadeIn = {
  hidden: { opacity: 0, scale: 0.97 },
  show: { opacity: 1, scale: 1 },
};

const pillars = [
  {
    title: "Pricing with intent",
    description:
      "We shape pricing around your business model, not around a template. The result feels unfair to everyone else — in a good way.",
    image: "/lifestyle/contactless-pay.jpg",
    imageAlt: "Contactless tap-to-pay at checkout",
  },
  {
    title: "Quietly powerful stack",
    description:
      "Enterprise rails, modern risk tooling, and funding that arrives fast. You get strength without the drama.",
    image: "/lifestyle/boutique-checkout.jpg",
    imageAlt: "Boutique retail POS checkout",
  },
  {
    title: "Human-level service",
    description:
      "A real operator answers. We help you decode statements, choose hardware, and move with confidence.",
    image: "/lifestyle/salon-checkout.jpg",
    imageAlt: "Salon checkout experience",
  },
];

const industries = [
  {
    name: "Restaurants & hospitality",
    detail: "Smooth checkout flows, tipping support, and resilient uptime.",
    image: "/lifestyle/cozy-cafe.jpg",
    imageAlt: "Cozy restaurant interior",
  },
  {
    name: "Health & wellness",
    detail: "Secure payments for practices that value trust and privacy.",
    image: "/lifestyle/salon-checkout.jpg",
    imageAlt: "Wellness salon checkout",
  },
  {
    name: "Retail & boutiques",
    detail: "In-store, online, and everywhere your brand shows up.",
    image: "/lifestyle/boutique-checkout.jpg",
    imageAlt: "Boutique retail experience",
  },
  {
    name: "Professional services",
    detail: "Invoicing, retainers, and recurring billing — all polished.",
    image: "/lifestyle/cafe-interior.jpg",
    imageAlt: "Modern workspace",
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
      {/* ── HERO with lifestyle photo ── */}
      <section
        ref={heroRef}
        className="relative min-h-[100dvh] overflow-hidden"
      >
        {/* Parallax background image */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0"
        >
          <img
            src="/lifestyle/cafe-interior.jpg"
            alt="Coffee shop interior"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/50" />
        </motion.div>

        <motion.div
          style={{ y: midLayerY, opacity: glowOpacity }}
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

      {/* ── LIFESTYLE PHOTO BAND ── */}
      <section className="relative overflow-hidden bg-slate-950 py-2">
        <div className="flex gap-2 overflow-hidden">
          {[
            { src: "/lifestyle/contactless-pay.jpg", alt: "Tap to pay" },
            { src: "/lifestyle/coffee-cheers.jpg", alt: "Coffee cheers" },
            { src: "/lifestyle/salon-checkout.jpg", alt: "Salon checkout" },
            { src: "/lifestyle/boutique-checkout.jpg", alt: "Boutique POS" },
            { src: "/lifestyle/cozy-cafe.jpg", alt: "Cozy cafe" },
          ].map((img, i) => (
            <motion.div
              key={img.alt}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="h-48 min-w-[20%] flex-1 overflow-hidden rounded-lg"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── WHY WALRUS — image + text pillars ── */}
      <section className="relative bg-slate-950 px-4 py-20 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-14 space-y-4"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[#06D6A0]">
              Why Walrus
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Luxury-grade payments, built for operators.
            </h2>
            <p className="max-w-2xl text-white/70">
              We blend fintech infrastructure with concierge service. Think
              meticulous onboarding, transparent statements, and pricing that
              feels like it was written for your P&amp;L.
            </p>
          </motion.div>

          <div className="space-y-16">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`grid items-center gap-8 lg:grid-cols-2 ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
              >
                <div className={`space-y-4 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <h3 className="text-2xl font-semibold">{pillar.title}</h3>
                  <p className="text-white/70 leading-relaxed">{pillar.description}</p>
                </div>
                <div className={`overflow-hidden rounded-2xl ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <img
                    src={pillar.image}
                    alt={pillar.imageAlt}
                    className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-80"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES with photo cards ── */}
      <section className="bg-slate-900/80 px-4 py-20 sm:px-6">
        <div className="mx-auto w-full max-w-6xl space-y-12">
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
              <h2 className="text-3xl font-semibold sm:text-4xl">
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
                <Card className="group glass-card overflow-hidden border-white/10">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-lg font-semibold text-white">
                        {industry.name}
                      </p>
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <p className="text-sm text-white/70">{industry.detail}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL-WIDTH LIFESTYLE BREAK ── */}
      <section className="relative h-72 overflow-hidden sm:h-96">
        <motion.img
          src="/lifestyle/coffee-cheers.jpg"
          alt="People enjoying coffee together"
          className="h-full w-full object-cover"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-lg px-6 text-center text-2xl font-semibold sm:text-3xl"
          >
            Every swipe, tap, and click — made seamless.
          </motion.p>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-slate-950 px-4 py-20 sm:px-6">
        <div className="mx-auto w-full max-w-6xl space-y-12">
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
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Pricing clarity with quiet confidence.
            </h2>
            <p className="max-w-2xl text-white/70">
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
                    <p className="text-sm leading-relaxed text-white/80">
                      &ldquo;{item.quote}&rdquo;
                    </p>
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

      {/* ── CONTACT ── */}
      <section id="contact" className="bg-slate-900 px-4 py-20 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-6"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#06D6A0]">
                Ready for your quote?
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Tell us about your business.
              </h2>
              <p className="text-white/70">
                The fastest way to uncover a better pricing strategy is to share
                a few details. We&apos;ll respond with a tailored proposal and
                zero pressure.
              </p>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/lifestyle/cozy-cafe.jpg"
                  alt="Beautiful cafe interior"
                  className="h-48 w-full object-cover lg:h-64"
                />
              </div>
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
        </div>
      </section>
    </div>
  );
}
