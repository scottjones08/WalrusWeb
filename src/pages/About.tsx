import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold">Built by business owners</h1>
          <p className="text-lg text-navy/70">
            Walrus Payments was built by business owners, for business owners.
            We know how brutal processing fees can be when margins are tight.
          </p>
          <p className="text-sm text-navy/70">
            We partner with Finix for enterprise-grade payments infrastructure,
            delivering a 1.8% cost basis that lets us pass real savings to
            merchants. Based in Richmond, Virginia, we support merchants
            nationwide with hands-on onboarding and transparent pricing.
          </p>
        </div>
        <Card className="border-navy/10">
          <CardHeader>
            <CardTitle>Leadership</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-navy/10" />
              <div>
                <div className="text-base font-semibold">Scott Jones</div>
                <div className="text-sm text-navy/60">CEO</div>
              </div>
            </div>
            <p className="text-sm text-navy/70">
              Scott has spent his career building payment solutions for
              independent merchants and local businesses.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
