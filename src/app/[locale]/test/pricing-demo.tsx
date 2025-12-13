'use client'

import { PricingCard } from '@/components/ui'

export function PricingDemo() {
  return (
    <PricingCard
      name="Pro Plan"
      price="299"
      period="month"
      description="Up to 500 verifications"
      features={[
        'Save 20% vs regular',
        'Detailed reports',
        'Priority support',
      ]}
      popular
      cta="Get Started"
      onCtaClick={() => alert('Clicked!')}
    />
  )
}
