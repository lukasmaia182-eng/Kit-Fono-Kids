import { OfferBanner } from "@/components/offer-banner"
import { Hero } from "@/components/hero"
import { CategoriesSection } from "@/components/categories-section"
import { BenefitsSection } from "@/components/benefits-section"
import { IdealForSection } from "@/components/ideal-for-section"
import { ComparisonSection } from "@/components/comparison-section"
import { WhatsIncludedSection } from "@/components/whats-included-section"
import { BonusesSection } from "@/components/bonuses-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import { FaqSection } from "@/components/faq-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <OfferBanner />
      <Hero />
      <CategoriesSection />
      <BenefitsSection />
      <IdealForSection />
      <ComparisonSection />
      <WhatsIncludedSection />
      <BonusesSection />
      <PricingSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <FaqSection />
      <SiteFooter />
    </main>
  )
}
