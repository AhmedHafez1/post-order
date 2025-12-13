import { Button } from '@/components/ui'
import { LoadingButton } from '@/components/ui'
import { FeatureCard } from '@/components/ui'
import { PricingDemo } from './pricing-demo'
import { Container } from '@/components/ui'
import { Section } from '@/components/ui'

export default function TestPage() {
  return (
    <div className="min-h-screen">
      <Section variant="gradient">
        <Container>
          <h1 className="text-4xl font-bold mb-8">Component Testing</h1>

          <div className="space-y-8">
            {/* Buttons */}
            <div className="space-x-4 space-x-reverse">
              <Button>Default Button</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <LoadingButton loading>Loading...</LoadingButton>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <FeatureCard
                icon="💰"
                title="Save Money"
                description="Reduce COD returns by 40%"
              />
              <FeatureCard
                icon="⚡"
                title="Fast Integration"
                description="Setup in 5 minutes"
                variant="bordered"
              />
              <FeatureCard
                icon="📊"
                title="Detailed Reports"
                description="Track every order"
                variant="highlighted"
              />
            </div>

            {/* Pricing Card */}
            <PricingDemo />
          </div>
        </Container>
      </Section>
    </div>
  )
}