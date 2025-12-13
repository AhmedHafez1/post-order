import { Card, CardContent } from './card'
import { cn } from '@/lib/utils'

export interface FeatureCardProps {
  icon: string
  title: string
  description: string
  className?: string
  variant?: 'default' | 'bordered' | 'highlighted'
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
  variant = 'default',
}: FeatureCardProps) {
  return (
    <Card
      className={cn(
        'transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
        variant === 'bordered' &&
          'border-s-4 border-s-primary hover:border-s-primary-600',
        variant === 'highlighted' &&
          'bg-primary/5 border-primary hover:bg-primary/10',
        className
      )}
    >
      <CardContent className="p-6">
        <div className="mb-3 text-4xl">{icon}</div>
        <h3 className="mb-2 text-xl font-bold text-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}