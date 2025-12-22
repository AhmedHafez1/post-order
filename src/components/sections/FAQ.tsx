'use client'

import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { motion } from 'framer-motion'
import { Accordion } from '@/components/ui/accordion'
import { FAQItem } from '@/components/ui/faq-item'
import { faqs } from '@/config/site'

function FAQ() {
  const tFaq = useTranslations('faq')

  return (
    <Section id="faq" className="relative px-8 sm:px-12 md:px-16 lg:px-48">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl rounded-2xl border border-emerald-100 bg-white/90 p-6 shadow-sm"
        >
          <h3 className="mb-4 text-center text-xl leading-tight font-black text-slate-700 sm:text-2xl lg:text-3xl">
            {tFaq('section_title')}
          </h3>
          <p className="mb-8 text-center text-lg font-medium text-slate-600 sm:text-xl lg:mb-16">
            {tFaq('section_description')}
          </p>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.key}
                value={`faq-${index}`}
                question={tFaq(`${faq.key}.question`)}
                answer={tFaq(`${faq.key}.answer`)}
              />
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </Section>
  )
}

export default FAQ
