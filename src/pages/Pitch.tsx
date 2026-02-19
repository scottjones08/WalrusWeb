import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PitchData {
  id: string;
  merchantName: string;
  industry: string;
  monthlyVolume: number;
  currentProcessor?: string;
  currentRate: number;
  walrusRatePercent: number;
  walrusRateFixed: number;
  monthlySavings: number;
  annualSavings: number;
  createdAt: string;
}

export function PitchPage() {
  const { id } = useParams();
  const [pitch, setPitch] = useState<PitchData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const loadPitch = async () => {
      try {
        const response = await fetch(`/api/pitch/${id}`);
        if (!response.ok) {
          throw new Error("Pitch not found");
        }
        const payload = (await response.json()) as PitchData;
        setPitch(payload);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unable to load pitch.");
      }
    };
    loadPitch();
  }, [id]);

  const chart = useMemo(() => {
    if (!pitch) return null;
    const currentCost = (pitch.monthlyVolume * pitch.currentRate) / 100;
    const walrusCost = (pitch.monthlyVolume * pitch.walrusRatePercent) / 100;
    const max = Math.max(currentCost, walrusCost, 1);
    return {
      currentCost,
      walrusCost,
      currentWidth: `${(currentCost / max) * 100}%`,
      walrusWidth: `${(walrusCost / max) * 100}%`,
    };
  }, [pitch]);

  if (error) {
    return (
      <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6">
        <h1 className="text-2xl font-semibold">Pitch unavailable</h1>
        <p className="mt-2 text-sm text-navy/70">{error}</p>
      </div>
    );
  }

  if (!pitch) {
    return (
      <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6">
        <p className="text-sm text-navy/70">Loading pitch...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6">
      <div className="space-y-6">
        <h1 className="text-4xl font-semibold">
          {pitch.merchantName} — Custom Walrus Rate
        </h1>
        <p className="text-lg text-navy/70">
          Industry: {pitch.industry} • Monthly volume ${pitch.monthlyVolume.toLocaleString()}
        </p>
        <div className="rounded-2xl bg-navy text-white p-6">
          <div className="text-sm uppercase tracking-[0.3em] text-white/70">
            Estimated Annual Savings
          </div>
          <div className="text-4xl font-semibold mt-2">
            ${pitch.annualSavings.toLocaleString()}
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card className="border-navy/10">
          <CardHeader>
            <CardTitle>Walrus Custom Rate</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-navy/70">
            <div className="text-base font-semibold text-navy">
              {pitch.walrusRatePercent.toFixed(2)}% + ${pitch.walrusRateFixed.toFixed(2)}
            </div>
            <p>Next-day funding. No hidden fees.</p>
          </CardContent>
        </Card>
        <Card className="border-navy/10">
          <CardHeader>
            <CardTitle>Current Processor</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-navy/70">
            <div className="text-base font-semibold text-navy">
              {pitch.currentProcessor || "Current rate"}
            </div>
            <p>{pitch.currentRate.toFixed(2)}% estimated rate</p>
          </CardContent>
        </Card>
      </div>

      {chart && (
        <div className="mt-10 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Monthly Fee Comparison</h2>
          <div className="mt-4 space-y-4 text-sm">
            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="font-medium">Current fees</span>
                <span>${chart.currentCost.toFixed(0)}</span>
              </div>
              <div className="h-3 rounded-full bg-navy/10">
                <div
                  className="h-3 rounded-full bg-navy"
                  style={{ width: chart.currentWidth }}
                />
              </div>
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="font-medium">Walrus fees</span>
                <span>${chart.walrusCost.toFixed(0)}</span>
              </div>
              <div className="h-3 rounded-full bg-navy/10">
                <div
                  className="h-3 rounded-full bg-ocean"
                  style={{ width: chart.walrusWidth }}
                />
              </div>
            </div>
            <p className="text-xs text-navy/60">
              Savings estimates based on monthly volume and rate percentage.
            </p>
          </div>
        </div>
      )}

      <div className="mt-8">
        <Button asChild variant="secondary" size="lg">
          <Link to="/contact">Accept This Rate</Link>
        </Button>
      </div>
    </div>
  );
}
