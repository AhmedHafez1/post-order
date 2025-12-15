'use client'

import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { features, testimonials } from '@/config/site'
import { CheckCircle2, Star } from 'lucide-react'

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
    <Section id="solution" variant="gradient">
      <Container>
        <SectionHeader title={t('title')} subtitle={t('subtitle')} centered />

        {/* How it works - 3 steps */}
        <div className="mb-20">
          <div className="grid gap-8 md:grid-cols-3">
            {['1', '2', '3'].map((step, i) => (
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
                  <div className="absolute start-full top-8 -z-10 hidden h-0.5 w-full bg-linear-to-r from-emerald-500 to-transparent md:block" />
                )}

                <Card className="group relative h-full overflow-hidden border-2 transition-all duration-500 hover:border-emerald-500 hover:shadow-2xl">
                  {/* Number badge */}
                  <div className="absolute -start-5 -top-5 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-emerald-600 text-2xl font-black text-white shadow-lg transition-transform group-hover:scale-110">
                    {step}
                  </div>

                  <CardContent className="px-6 pt-16 pb-8">
                    <div className="mb-4 text-5xl transition-transform group-hover:scale-110">
                      {step === '1' && '🛒'}
                      {step === '2' && '📱'}
                      {step === '3' && '✅'}
                    </div>
                    <h3 className="mb-3 text-xl font-bold">
                      {t(`steps.${step}.title`)}
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      {t(`steps.${step}.description`)}
                    </p>
                  </CardContent>

                  {/* Hover effect */}
                  <div className="absolute inset-0 -z-10 bg-linear-to-t from-emerald-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
              <Card className="group h-full border-2 bg-white/80 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl transition-transform group-hover:scale-110">
                      {solution.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-emerald-600">
                        {t(`${solution.key}.title`)}
                      </h3>
                      <p className="leading-relaxed text-gray-600">
                        {t(`${solution.key}.description`)}
                      </p>
                    </div>
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-600 opacity-0 transition-opacity group-hover:opacity-100" />
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
          <div className="mb-6 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <Card className="border-2 border-emerald-200 bg-linear-to-br from-emerald-50 to-green-50 shadow-2xl">
            <CardContent className="p-8">
              <p className="mb-4 text-lg leading-relaxed text-gray-800 italic">
                {t('testimonial_1')}
              </p>
              <div className="font-bold text-gray-900">
                {testimonials[0].name}
              </div>
              <div className="text-sm text-gray-600">
                {testimonials[0].store} • {testimonials[0].orders}{' '}
                {t.rich('orders_monthly', { default: 'أوردر شهرياً' })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Section>
  )
}
