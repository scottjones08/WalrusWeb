import { Link } from "react-router-dom";

import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const industries = [
  {
    name: "Restaurant",
    savings: "Average restaurant saves $3,200/year switching to Walrus",
  },
  {
    name: "Laundromat",
    savings: "Average laundromat saves $2,400/year in processing costs",
  },
  {
    name: "Medical/Dental",
    savings: "Average practice saves $4,800/year in fees",
  },
  {
    name: "Retail",
    savings: "Average retailer saves $2,900/year",
  },
  {
    name: "Professional Services",
    savings: "Average service firm saves $3,500/year",
  },
];

const testimonials = [
  {
    quote:
      "We dropped our processing fees by nearly 30% in the first quarter. Walrus made the switch painless.",
    name: "Sarah M., Richmond Restaurant Owner",
  },
  {
    quote:
      "Our laundromat runs on tight margins. Walrus gave us room to reinvest in new equipment.",
    name: "Luis G., Midlothian",
  },
  {
    quote:
      "Finally a payments partner that understands medical billing. Rates are fantastic.",
    name: "Dr. Patel, Dental Practice",
  },
];

export function HomePage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-navy via-navy to-ocean/80 text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img
                src="/walrus-logo.jpg"
                alt="Walrus Payments"
                className="h-14 w-14 rounded-full bg-white p-2"
              />
              <span className="text-sm uppercase tracking-[0.35em] text-white/70">
                Walrus Payments
              </span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Stop Overpaying for Payment Processing
            </h1>
            <p className="text-lg text-white/80">
              Walrus Payments delivers the lowest merchant processing rates in the
              industry. Period.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="secondary" size="lg">
                <a href="#contact">Get Your Custom Rate</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/rates">See Our Rates</Link>
              </Button>
            </div>
            <div className="text-sm text-white/70">
              Trusted by restaurants, laundromats, medical offices, and retail
              across Virginia.
            </div>
          </div>
          <div className="rounded-2xl bg-white/10 p-6 shadow-lg backdrop-blur">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">How it works</h2>
              <ol className="space-y-3 text-sm text-white/80">
                <li>
                  <span className="font-semibold text-white">1.</span> We
                  analyze your current statement.
                </li>
                <li>
                  <span className="font-semibold text-white">2.</span> We build
                  a custom rate structure.
                </li>
                <li>
                  <span className="font-semibold text-white">3.</span> You save
                  thousands per year.
                </li>
              </ol>
              <div className="rounded-xl bg-white/15 p-4 text-sm text-white/80">
                Finix-backed processing infrastructure at a 1.8% cost basis means
                real savings for your business.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {industries.map((industry) => (
            <Card key={industry.name} className="border-navy/10">
              <CardHeader>
                <CardTitle>{industry.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-navy/70">{industry.savings}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-fog">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name} className="border-navy/10">
                <CardContent className="space-y-4 pt-6">
                  <p className="text-sm text-navy/80">“{item.quote}”</p>
                  <p className="text-xs font-semibold text-navy/60">
                    {item.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <ContactForm />
      </section>
    </div>
  );
}
