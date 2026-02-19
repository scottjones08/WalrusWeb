import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const industries = [
  "Restaurant",
  "Laundromat",
  "Medical/Dental",
  "Retail",
  "E-commerce",
  "Professional Services",
];

interface ContactSubmission {
  id: string;
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  industry: string;
  volume: string;
  currentProcessor?: string;
  message?: string;
  createdAt: string;
}

interface PitchSummary {
  id: string;
  merchantName: string;
  industry: string;
  monthlyVolume: number;
  currentRate: number;
  annualSavings: number;
  createdAt: string;
}

export function AdminPage() {
  const [password, setPassword] = useState("");
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [pitches, setPitches] = useState<PitchSummary[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [newPitch, setNewPitch] = useState({
    merchantName: "",
    industry: "",
    monthlyVolume: "",
    currentProcessor: "",
    currentRate: "",
  });
  const [pitchLink, setPitchLink] = useState<string | null>(null);

  const fetchAdminData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const headers = { "x-admin-password": password };
      const [contactsRes, pitchesRes] = await Promise.all([
        fetch("/api/contacts", { headers }),
        fetch("/api/pitches", { headers }),
      ]);

      if (!contactsRes.ok || !pitchesRes.ok) {
        throw new Error("Unauthorized or unable to load data.");
      }

      const contactsData = (await contactsRes.json()) as ContactSubmission[];
      const pitchesData = (await pitchesRes.json()) as PitchSummary[];
      setContacts(contactsData);
      setPitches(pitchesData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to load admin data.");
    } finally {
      setLoading(false);
    }
  }, [password]);

  useEffect(() => {
    if (password) {
      void fetchAdminData();
    }
  }, [password, fetchAdminData]);

  const handlePitchCreate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setPitchLink(null);
    try {
      const response = await fetch("/api/pitch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": password,
        },
        body: JSON.stringify({
          merchantName: newPitch.merchantName,
          industry: newPitch.industry,
          monthlyVolume: Number(newPitch.monthlyVolume),
          currentProcessor: newPitch.currentProcessor,
          currentRate: Number(newPitch.currentRate),
        }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.error || "Unable to create pitch.");
      }

      const payload = (await response.json()) as { url: string };
      setPitchLink(payload.url);
      setNewPitch({
        merchantName: "",
        industry: "",
        monthlyVolume: "",
        currentProcessor: "",
        currentRate: "",
      });
      await fetchAdminData();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to create pitch.");
    }
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <div className="space-y-6">
        <h1 className="text-4xl font-semibold">Admin Dashboard</h1>
        <p className="text-sm text-navy/70">
          Enter your admin password to view submissions and generate new pitches.
        </p>
      </div>

      <div className="mt-6 max-w-md space-y-2">
        <Label htmlFor="adminPassword">Admin Password</Label>
        <Input
          id="adminPassword"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button onClick={fetchAdminData} variant="secondary">
          {loading ? "Loading..." : "Load Dashboard"}
        </Button>
      </div>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="border-navy/10">
          <CardHeader>
            <CardTitle>Create New Pitch</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4" onSubmit={handlePitchCreate}>
              <div className="space-y-2">
                <Label>Merchant Name</Label>
                <Input
                  value={newPitch.merchantName}
                  onChange={(event) =>
                    setNewPitch((prev) => ({
                      ...prev,
                      merchantName: event.target.value,
                    }))
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Industry</Label>
                <Select
                  value={newPitch.industry || undefined}
                  onValueChange={(value) =>
                    setNewPitch((prev) => ({ ...prev, industry: value }))
                  }
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry}>
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Monthly Volume ($)</Label>
                <Input
                  type="number"
                  min="0"
                  step="0.01"
                  value={newPitch.monthlyVolume}
                  onChange={(event) =>
                    setNewPitch((prev) => ({
                      ...prev,
                      monthlyVolume: event.target.value,
                    }))
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Current Processor</Label>
                <Input
                  value={newPitch.currentProcessor}
                  onChange={(event) =>
                    setNewPitch((prev) => ({
                      ...prev,
                      currentProcessor: event.target.value,
                    }))
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>Current Rate (%)</Label>
                <Input
                  type="number"
                  min="0"
                  step="0.01"
                  value={newPitch.currentRate}
                  onChange={(event) =>
                    setNewPitch((prev) => ({
                      ...prev,
                      currentRate: event.target.value,
                    }))
                  }
                  required
                />
              </div>
              <Button type="submit" variant="secondary">
                Generate Pitch
              </Button>
            </form>
            {pitchLink && (
              <div className="mt-4 rounded-lg bg-ocean/10 p-4 text-sm">
                <div className="font-semibold">Pitch link created:</div>
                <div className="mt-1 break-all">{pitchLink}</div>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-3"
                  onClick={() => navigator.clipboard.writeText(pitchLink)}
                >
                  Copy Link
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border-navy/10">
            <CardHeader>
              <CardTitle>Contact Submissions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-navy/70">
              {contacts.length === 0 ? (
                <div>No submissions yet.</div>
              ) : (
                contacts.map((submission) => (
                  <div key={submission.id} className="space-y-1">
                    <div className="font-semibold text-navy">
                      {submission.businessName}
                    </div>
                    <div>
                      {submission.contactName} • {submission.email}
                    </div>
                    <div>
                      {submission.industry} • {submission.volume}
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          <Card className="border-navy/10">
            <CardHeader>
              <CardTitle>Generated Pitches</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-navy/70">
              {pitches.length === 0 ? (
                <div>No pitches yet.</div>
              ) : (
                pitches.map((pitch) => (
                  <div key={pitch.id} className="space-y-1">
                    <div className="font-semibold text-navy">
                      {pitch.merchantName}
                    </div>
                    <div>
                      {pitch.industry} • ${pitch.monthlyVolume.toLocaleString()}
                    </div>
                    <div>
                      Estimated savings: ${pitch.annualSavings.toLocaleString()} / year
                    </div>
                    <div className="text-xs text-navy/60">/pitch/{pitch.id}</div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
