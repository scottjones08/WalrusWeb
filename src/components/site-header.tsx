import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/rates", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/walrus-logo.jpg"
            alt="Walrus Payments"
            className="h-10 w-10 rounded-full bg-white p-2"
          />
          <div className="flex flex-col leading-none text-white">
            <span className="text-lg font-semibold">Walrus Payments</span>
            <span className="text-xs uppercase tracking-[0.3em] text-white/50">
              Custom pricing
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "text-white"
                  : "text-white/70 transition hover:text-white"
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Button asChild className="bg-[#06D6A0] text-slate-950 hover:bg-[#0CEBB2]">
            <Link to="/contact">Request a quote</Link>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white/10">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-950 text-white">
              <SheetHeader>
                <SheetTitle className="text-white">Walrus Payments</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-base font-medium text-white"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="bg-[#06D6A0] text-slate-950 hover:bg-[#0CEBB2]">
                  <Link to="/contact">Request a quote</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
