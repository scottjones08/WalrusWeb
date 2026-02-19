import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const industries = [
  "Restaurant",
  "Laundromat",
  "Medical/Dental",
  "Retail",
  "E-commerce",
  "Professional Services",
  "Other",
];

const volumeRanges = [
  "Just getting started",
  "Growing steadily",
  "Scaling quickly",
  "High volume",
  "Enterprise",
];

interface ContactFormProps {
  title?: string;
  description?: string;
  className?: string;
}

export function ContactForm({
  title = "Request your custom quote",
  description =
    "Share a few details and we will craft a pricing proposal tailored to your business.",
  className,
}: ContactFormProps) {
  const [formState, setFormState] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    industry: "",
    volume: "",
    currentProcessor: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof typeof formState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.error || "Unable to submit form.");
      }

      setStatus("success");
      setFormState({
        businessName: "",
        contactName: "",
        email: "",
        phone: "",
        industry: "",
        volume: "",
        currentProcessor: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section className={className}>
      <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-8 shadow-2xl backdrop-blur">
        <div className="mb-6 space-y-2">
          <p className="text-xs uppercase tracking-[0.4em] text-[#06D6A0]">
            Concierge intake
          </p>
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
          <p className="text-sm text-white/70">{description}</p>
        </div>
        {status === "success" ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <div className="text-lg font-semibold text-white">
              We&apos;re reviewing your details now.
            </div>
            <p className="mt-2 text-sm text-white/70">
              A Walrus Payments specialist will reach out shortly.
            </p>
          </div>
        ) : (
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="businessName">Business Name</Label>
                <Input
                  id="businessName"
                  value={formState.businessName}
                  onChange={(event) =>
                    handleChange("businessName", event.target.value)
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactName">Contact Name</Label>
                <Input
                  id="contactName"
                  value={formState.contactName}
                  onChange={(event) =>
                    handleChange("contactName", event.target.value)
                  }
                  required
                />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formState.email}
                  onChange={(event) => handleChange("email", event.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={formState.phone}
                  onChange={(event) => handleChange("phone", event.target.value)}
                  required
                />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Industry</Label>
                <Select
                  value={formState.industry || undefined}
                  onValueChange={(value) => handleChange("industry", value)}
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
                <Label>Monthly Processing Volume</Label>
                <Select
                  value={formState.volume || undefined}
                  onValueChange={(value) => handleChange("volume", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select monthly volume" />
                  </SelectTrigger>
                  <SelectContent>
                    {volumeRanges.map((range) => (
                      <SelectItem key={range} value={range}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="currentProcessor">Current Processor</Label>
              <Input
                id="currentProcessor"
                value={formState.currentProcessor}
                onChange={(event) =>
                  handleChange("currentProcessor", event.target.value)
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={formState.message}
                onChange={(event) => handleChange("message", event.target.value)}
                placeholder="Anything we should know about your processing setup?"
              />
            </div>
            {status === "error" && (
              <p className="text-sm text-red-400">{error}</p>
            )}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-[#06D6A0] text-slate-950 hover:bg-[#0CEBB2]"
            >
              {status === "loading" ? "Submitting..." : "Submit"}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
