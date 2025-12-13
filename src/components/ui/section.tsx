import * as React from 'react'
import { cn } from '@/lib/utils'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  variant?: 'default' | 'gradient' | 'muted'
}

export function Section({
  children,
  className,
  variant = 'default',
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        'py-16 md:py-24',
        variant === 'gradient' &&
          'bg-gradient-to-b from-primary/5 via-background to-background',
        variant === 'muted' && 'bg-muted/30',
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}