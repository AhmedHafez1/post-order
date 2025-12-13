import * as React from 'react'
import { Card, CardContent } from './card'
import { Quote } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  meta?: string
  className?: string
}

export function TestimonialCard({
  quote,
  author,
  role,
  meta,
  className,
}: TestimonialCardProps) {
  return (
    <Card
      className={cn(
        'border-s-4 border-s-primary hover:shadow-lg transition-all',
        className
      )}
    >
      <CardContent className="p-6">
        <Quote className="h-8 w-8 text-primary/40 mb-4" />
        <blockquote className="text-lg text-foreground mb-4 italic">
          "{quote}"
        </blockquote>
        <div>
          <p className="font-bold text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
          {meta && (
            <p className="text-xs text-muted-foreground mt-1">{meta}</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}