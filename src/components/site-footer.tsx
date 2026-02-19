import { Link } from "react-router-dom";

import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="border-t border-navy/10 bg-fog">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 md:grid-cols-[2fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/walrus-logo.jpg"
                alt="Walrus Payments"
                className="h-10 w-10"
              />
              <div>
                <div className="text-lg font-semibold">Walrus Payments</div>
                <div className="text-sm text-navy/60">
                  Lowest merchant processing rates in the industry.
                </div>
              </div>
            </div>
            <p className="text-sm text-navy/70">
              Walrus Payments LLC • Richmond, Virginia • Serving merchants
              nationwide
            </p>
          </div>
          <div className="space-y-3 text-sm">
            <div className="font-semibold">Company</div>
            <Link to="/about" className="block text-navy/70 hover:text-navy">
              About
            </Link>
            <Link to="/rates" className="block text-navy/70 hover:text-navy">
              Rates
            </Link>
            <Link to="/contact" className="block text-navy/70 hover:text-navy">
              Contact
            </Link>
          </div>
          <div className="space-y-3 text-sm">
            <div className="font-semibold">Legal</div>
            <Link to="/terms" className="block text-navy/70 hover:text-navy">
              Terms of Service
            </Link>
            <Link to="/privacy" className="block text-navy/70 hover:text-navy">
              Privacy Policy
            </Link>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-xs text-navy/60">
          © {new Date().getFullYear()} Walrus Payments LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
