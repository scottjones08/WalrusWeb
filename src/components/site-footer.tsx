import { Link } from "react-router-dom";

import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/walrus-logo.jpg"
                alt="Walrus Payments"
                className="h-10 w-10 rounded-full bg-white p-2"
              />
              <div>
                <div className="text-lg font-semibold">Walrus Payments</div>
                <div className="text-sm text-white/60">
                  Premium payment strategies for modern operators.
                </div>
              </div>
            </div>
            <p className="text-sm text-white/60">
              Walrus Payments LLC • Richmond, Virginia • Serving ambitious brands
              nationwide.
            </p>
          </div>
          <div className="space-y-3 text-sm">
            <div className="font-semibold uppercase tracking-[0.2em] text-white/70">
              Company
            </div>
            <Link to="/about" className="block text-white/60 hover:text-white">
              About
            </Link>
            <Link to="/rates" className="block text-white/60 hover:text-white">
              Pricing
            </Link>
            <Link to="/contact" className="block text-white/60 hover:text-white">
              Contact
            </Link>
          </div>
          <div className="space-y-3 text-sm">
            <div className="font-semibold uppercase tracking-[0.2em] text-white/70">
              Legal
            </div>
            <Link to="/terms" className="block text-white/60 hover:text-white">
              Terms of Service
            </Link>
            <Link to="/privacy" className="block text-white/60 hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
        <Separator className="my-8 bg-white/10" />
        <div className="text-xs text-white/50">
          © {new Date().getFullYear()} Walrus Payments LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
