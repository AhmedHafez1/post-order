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
import { ArrowRight, CheckCircle2 } from 'lucide-react'

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
        <SectionHeader 
          title={t('title')}
          subtitle={t('subtitle')}
          centered
        />

        {/* How it works - 3 steps */}
        <div className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
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
                  <div className="hidden md:block absolute top-8 start-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -z-10" />
                )}

                <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary h-full">
                  {/* Number badge */}
                  <div className="absolute -top-4 -start-4 w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                    {step}
                  </div>

                  <CardContent className="pt-12 pb-8 px-6">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                      {step === '1' && '🛒'}
                      {step === '2' && '📱'}
                      {step === '3' && '✅'}
                    </div>
                    <h3 className="text-xl font-bold mb-3">
                      {t(`steps.${step}.title`)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(`steps.${step}.description`)}
                    </p>
                  </CardContent>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
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
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {features.solutions.map((solution) => (
            <motion.div key={solution.key} variants={item}>
              <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur border-2 hover:border-primary">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl group-hover:scale-110 transition-transform">
                      {solution.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {t(`${solution.key}.title`)}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(`${solution.key}.description`)}
                      </p>
                    </div>
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
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
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-6">
            <Badge variant="secondary" className="text-base px-4 py-2">
              ⭐⭐⭐⭐⭐
            </Badge>
          </div>
          <TestimonialCard
            quote={t('testimonial_1')}
            author={testimonials[0].name}
            role={testimonials[0].store}
            meta={testimonials[0].orders + ' ' + t.rich('orders_monthly', { default: 'أوردر شهرياً' })}
            className="shadow-2xl"
          />
        </motion.div>
      </Container>
    </Section>
  )
}