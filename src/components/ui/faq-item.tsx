import * as React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion'

export interface FAQItemProps {
  question: string
  answer: string
  value: string
}

export function FAQItem({ question, answer, value }: FAQItemProps) {
  return (
    <AccordionItem value={value} className="border-s-4 border-s-primary/20 ps-4">
      <AccordionTrigger className="text-start font-bold hover:text-primary">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground">
        {answer}
      </AccordionContent>
    </AccordionItem>
  )
}