import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const pricingValues = [
  {
    title: "Custom strategy",
    description:
      "We design pricing around your ticket size, volume, and risk profile. No two businesses look the same — neither should their processing plan.",
  },
  {
    title: "Transparent statements",
    description:
      "Clear line items, no mysterious fees, and a statement review that reads like a playbook.",
  },
  {
    title: "Concierge support",
    description:
      "A named specialist who understands your business and keeps your setup sharp.",
  },
];

const industries = [
  {
    title: "Restaurants & hospitality",
    detail:
      "Tipping workflows, table-side payments, and hardware that feels premium.",
  },
  {
    title: "Health & wellness",
    detail:
      "Secure processing with a tone that builds patient trust.",
  },
  {
    title: "Retail & boutique",
    detail:
      "Unified in-store and online experiences with sleek checkout flows.",
  },
  {
    title: "Professional services",
    detail:
      "Invoices, retainers, and recurring billing that look polished.",
  },
];

const faq = [
  {
    question: "Why don’t you publish rates?",
    answer:
      "Because your business deserves better than a one-size-fits-all price list. We build a rate structure after understanding your volume, risk, and operations.",
  },
  {
    question: "How fast can I get a quote?",
    answer:
      "We move quickly. Share a recent statement or a few details and we’ll return a tailored proposal with clear next steps.",
  },
  {
    question: "Do you support modern hardware and online payments?",
    answer:
      "Yes — we cover premium terminals, online checkout, and omnichannel setups designed to look cohesive.",
  },
];

export function RatesPage() {
  return (
    <div className="bg-slate-950 text-white">
      <section className="mx-auto w-full max-w-6xl px-4 pb-12 pt-16 sm:px-6">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.3em] text-[#06D6A0]">
            Pricing philosophy
          </p>
          <h1 className="text-4xl font-semibold sm:text-5xl">
            Rates built around your business — not a template.
          </h1>
          <p className="text-lg text-white/70">
            We don’t post public rate cards. Instead, we craft pricing that
            mirrors your volume, ticket size, and risk profile. The result feels
            refreshingly personal and quietly powerful.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-[#06D6A0] text-slate-950 hover:bg-[#0CEBB2]">
              <Link to="/contact">Request a custom quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <Link to="/about">Meet the team</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {pricingValues.map((item) => (
            <Card key={item.title} className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-white">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white/70">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="bg-white/10" />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Industry-ready, brand-aligned.</h2>
            <p className="text-white/70">
              Your pricing strategy should respect your brand experience. We
              tailor solutions for businesses where every detail matters.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {industries.map((industry) => (
              <Card key={industry.title} className="glass-card border-white/10">
                <CardContent className="space-y-2 pt-6">
                  <p className="text-lg font-semibold text-white">{industry.title}</p>
                  <p className="text-sm text-white/70">{industry.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-4 py-16 sm:px-6">
        <div className="mx-auto w-full max-w-6xl space-y-8">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-[#06D6A0]">
              Questions, answered
            </p>
            <h2 className="text-3xl font-semibold">The details, without the noise.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {faq.map((item) => (
              <Card key={item.question} className="glass-card border-white/10">
                <CardContent className="space-y-3 pt-6">
                  <p className="text-sm font-semibold text-white">{item.question}</p>
                  <p className="text-sm text-white/70">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex-1 space-y-2">
              <p className="text-lg font-semibold text-white">Want your quote?</p>
              <p className="text-sm text-white/70">
                Bring a recent statement or tell us how you run payments. We’ll
                return a tailored proposal that respects your brand and your
                margins.
              </p>
            </div>
            <Button asChild className="bg-[#06D6A0] text-slate-950 hover:bg-[#0CEBB2]">
              <Link to="/contact">Start the conversation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
