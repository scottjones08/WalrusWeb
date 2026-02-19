import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const rateCards = [
  {
    title: "Restaurants",
    rate: "Card present 1.95% + $0.10",
    secondary: "Card not present 2.45% + $0.15",
  },
  {
    title: "Laundromats / Coin-Op",
    rate: "Flat rate 2.2% + $0.10",
    secondary: "No monthly minimums",
  },
  {
    title: "Medical / Dental",
    rate: "2.1% + $0.10",
    secondary: "HIPAA-compliant processing",
  },
  {
    title: "Retail",
    rate: "1.95% + $0.10",
    secondary: "Next-day funding",
  },
  {
    title: "E-commerce",
    rate: "2.4% + $0.15",
    secondary: "Fraud protection included",
  },
  {
    title: "Professional Services",
    rate: "2.3% + $0.10",
    secondary: "Custom invoicing support",
  },
];

const comparison = [
  { provider: "Walrus Payments", rate: "1.95% + 10¢", highlight: true },
  { provider: "Square", rate: "2.6% + 10¢" },
  { provider: "Stripe", rate: "2.9% + 30¢" },
  { provider: "Toast", rate: "2.49% + 15¢" },
  { provider: "Clover", rate: "2.3% + 10¢" },
];

export function RatesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold">Rates Built for Your Industry</h1>
        <p className="text-lg text-navy/70">
          These are starting rates — we customize based on volume. Get your
          custom quote in 24 hours.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {rateCards.map((card) => (
          <Card key={card.title} className="border-navy/10">
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm font-semibold text-navy">{card.rate}</p>
              <p className="text-sm text-navy/70">{card.secondary}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Rate comparison</h2>
        <p className="text-sm text-navy/70">
          Walrus vs the big names. Lower rates mean thousands back in your
          pocket.
        </p>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-navy/10">
        <table className="w-full text-left text-sm">
          <thead className="bg-fog text-navy">
            <tr>
              <th className="px-4 py-3 font-semibold">Provider</th>
              <th className="px-4 py-3 font-semibold">Rate</th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((row) => (
              <tr
                key={row.provider}
                className={row.highlight ? "bg-ocean/10" : "bg-white"}
              >
                <td className="px-4 py-3 font-medium">{row.provider}</td>
                <td className="px-4 py-3 text-navy/70">{row.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10">
        <Button asChild variant="secondary" size="lg">
          <Link to="/contact">Get Custom Rate Quote</Link>
        </Button>
      </div>
    </div>
  );
}
