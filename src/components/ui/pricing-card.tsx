'use client'

import { Card, CardContent, CardFooter, CardHeader } from './card'
import { Badge } from './badge'
import { Button } from './button'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

import { ReactNode } from 'react'

export interface PricingCardProps {
  name: string | ReactNode
  price: number | string | ReactNode
  period?: string | ReactNode
  description?: string | ReactNode
  features: (string | ReactNode)[]
  popular?: boolean
  cta: string | ReactNode
  onCtaClick: () => void
  className?: string
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  popular,
  cta,
  onCtaClick,
  className,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        'relative transition-all duration-300',
        popular &&
          'border-primary shadow-xl scale-105 bg-primary/5',
        !popular && 'hover:shadow-lg hover:-translate-y-1',
        className
      )}
    >
      {popular && (
        <Badge
          className="absolute -top-3 start-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground"
          variant="default"
        >
          الأشهر 🔥
        </Badge>
      )}

      <CardHeader className="text-center pb-4">
        <h3 className="text-xl font-bold">{name}</h3>
      </CardHeader>

      <CardContent className="text-center">
        <div className="mb-4">
          <span className="text-4xl font-bold">{price}</span>
          {period && (
            <span className="text-muted-foreground text-base">/{period}</span>
          )}
        </div>

        {description && (
          <p className="text-sm text-muted-foreground mb-6">{description}</p>
        )}

        <ul className="space-y-3 text-start">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button
          onClick={onCtaClick}
          variant={popular ? 'default' : 'outline'}
          className="w-full"
          size="lg"
        >
          {cta}
        </Button>
      </CardFooter>
    </Card>
  )
}