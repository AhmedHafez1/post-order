'use client'

import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { Card, CardContent } from '@/components/ui/card'
import { TestimonialCard } from '@/components/ui/testimonial-card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { features, testimonials } from '@/config/site'
import { CheckCircle2 } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
}

export function Solution() {
  const t = useTranslations('solution')

  return (
    <Section variant="gradient">
      <Container>
        <SectionHeader title={t('title')} subtitle={t('subtitle')} centered />

        {/* How it works - 3 steps */}
        <div className="mb-20">
          <div className="grid gap-8 md:grid-cols-3">
            {['1', '2', '3'].map((step) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: parseInt(step) * 0.2 }}
                className="relative"
              >
                {/* Connector line */}
                {step !== '3' && (
                  <div className="from-primary absolute start-full top-8 -z-10 hidden h-0.5 w-full bg-linear-to-r to-transparent md:block" />
                )}

                <Card className="group hover:border-primary relative h-full overflow-hidden border-2 transition-all duration-500 hover:shadow-2xl">
                  {/* Number badge */}
                  <div className="from-primary to-primary-600 absolute -start-4 -top-4 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br text-2xl font-bold text-white shadow-lg transition-transform group-hover:scale-110">
                    {step}
                  </div>

                  <CardContent className="px-6 pt-12 pb-8">
                    <div className="mb-4 text-5xl transition-transform group-hover:scale-110">
                      {step === '1' && '🛒'}
                      {step === '2' && '📱'}
                      {step === '3' && '✅'}
                    </div>
                    <h3 className="mb-3 text-xl font-bold">
                      {t(`steps.${step}.title`)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(`steps.${step}.description`)}
                    </p>
                  </CardContent>

                  {/* Hover effect */}
                  <div className="from-primary/10 absolute inset-0 -z-10 bg-linear-to-t to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 grid gap-6 md:grid-cols-2"
        >
          {features.solutions.map((solution) => (
            <motion.div key={solution.key} variants={item}>
              <Card className="group hover:border-primary h-full border-2 bg-white/80 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl transition-transform group-hover:scale-110">
                      {solution.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="group-hover:text-primary mb-2 text-xl font-bold transition-colors">
                        {t(`${solution.key}.title`)}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(`${solution.key}.description`)}
                      </p>
                    </div>
                    <CheckCircle2 className="text-primary h-6 w-6 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <div className="mb-6 text-center">
            <Badge variant="secondary" className="px-4 py-2 text-base">
              ⭐⭐⭐⭐⭐
            </Badge>
          </div>
          <TestimonialCard
            quote={t('testimonial_1')}
            author={testimonials[0].name}
            role={testimonials[0].store}
            meta={
              testimonials[0].orders +
              ' ' +
              t.rich('orders_monthly', { default: 'أوردر شهرياً' })
            }
            className="shadow-2xl"
          />
        </motion.div>
      </Container>
    </Section>
  )
}
