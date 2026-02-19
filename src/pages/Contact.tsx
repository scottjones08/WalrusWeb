import { ContactForm } from "@/components/contact-form";

export function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <ContactForm
        title="Let’s Build Your Custom Rate"
        description="Tell us about your business and your current processor. We’ll send a tailored rate proposal within 24 hours."
      />
    </div>
  );
}
