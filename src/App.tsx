import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AboutPage } from "@/pages/About";
import { AdminPage } from "@/pages/Admin";
import { ContactPage } from "@/pages/Contact";
import { HomePage } from "@/pages/Home";
import { PitchPage } from "@/pages/Pitch";
import { PrivacyPage } from "@/pages/Privacy";
import { RatesPage } from "@/pages/Rates";
import { TermsPage } from "@/pages/Terms";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-dvh flex-col bg-white text-navy">
        <SiteHeader />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rates" element={<RatesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/pitch/:id" element={<PitchPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </BrowserRouter>
  );
}
