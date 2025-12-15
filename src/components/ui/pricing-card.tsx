import { Card, CardContent } from './card'
import { Button } from './button'
import { CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

export interface PricingCardProps {
  name: string
  price: string
  period: string | ReactNode
  description?: string
  features: string[]
  popular?: boolean
  cta: string | ReactNode
  onCtaClick?: () => void
  className?: string
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  popular = false,
  cta,
  onCtaClick,
  className,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        'relative h-full border-2 bg-white shadow-xl transition-all hover:shadow-2xl',
        popular ? 'border-emerald-500' : 'border-gray-200',
        className
      )}
    >
      <CardContent className="p-8">
        <h3 className="mb-2 text-2xl font-black text-gray-900">{name}</h3>
        <div className="mb-6">
          <span className="text-5xl font-black text-gray-900">{price}</span>
          {period && <div className="text-sm text-gray-600">/{period}</div>}
          {description && (
            <div className="mt-1 text-xs text-gray-500">{description}</div>
          )}
        </div>

        <ul className="mb-8 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          onClick={onCtaClick}
          className={cn(
            'w-full py-4 font-bold transition-all',
            popular
              ? 'bg-linear-to-r from-emerald-600 to-emerald-500 text-white shadow-lg hover:scale-105 hover:shadow-xl'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          )}
        >
          {cta}
        </Button>
      </CardContent>
    </Card>
  )
}
