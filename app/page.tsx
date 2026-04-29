import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { SignalsSection } from "@/components/signals-section"
import { WorkSection } from "@/components/work-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { AnalyticsDemoSection } from "@/components/analytics-demo-section"
import { PrinciplesSection } from "@/components/principles-section"
import { PricingPlansSection } from "@/components/pricing-plans-section"
import { ColophonSection } from "@/components/colophon-section"
import { SideNav } from "@/components/side-nav"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
  },
}

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <SideNav />
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />

      <div className="relative z-10">
        <HeroSection />
        <SignalsSection />
        <WorkSection />
        <PortfolioSection />
        <AnalyticsDemoSection />
        <PrinciplesSection />
        <PricingPlansSection />
        <ColophonSection />
      </div>
    </main>
  )
}
