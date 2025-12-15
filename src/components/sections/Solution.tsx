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
        <div className="mb-16">
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
                  <div className="absolute start-full top-8 -z-10 hidden h-0.5 w-full bg-linear-to-r from-emerald-400 to-transparent md:block" />
                )}

                <Card className="group relative h-full overflow-hidden border border-emerald-100 bg-white/90 transition-all duration-400 hover:-translate-y-1 hover:shadow-md">
                  {/* Number badge */}
                  <div className="absolute -start-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-emerald-600 text-xl font-black text-white shadow-md transition-transform group-hover:scale-110">
                    {step}
                  </div>

                  <CardContent className="px-6 pt-14 pb-8">
                    <div className="mb-4 text-4xl transition-transform group-hover:scale-105">
                      {step === '1' && '🛒'}
                      {step === '2' && '📱'}
                      {step === '3' && '✅'}
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-slate-900">
                      {t(`steps.${step}.title`)}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-700">
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
          className="mb-14 grid gap-6 md:grid-cols-2"
        >
          {features.solutions.map((solution) => (
            <motion.div key={solution.key} variants={item}>
              <Card className="group h-full border border-emerald-100 bg-white/90 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <CardContent className="p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-3xl transition-transform group-hover:scale-105">
                      {solution.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-emerald-600">
                        {t(`${solution.key}.title`)}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-700">
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
          <div className="mb-3 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <Card className="border border-emerald-100 bg-white/90 shadow-md">
            <CardContent className="p-7">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-lg font-bold text-emerald-700 shadow">
                  {testimonials[0].name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900">
                    {testimonials[0].name}
                  </div>
                  <div className="text-sm text-slate-600">
                    {testimonials[0].store} • {testimonials[0].orders}{' '}
                    {t.rich('orders_monthly', { default: 'أوردر شهرياً' })}
                  </div>
                </div>
              </div>
              <p className="mb-4 text-base leading-relaxed text-slate-800 italic">
                {t('testimonial_1')}
              </p>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                +34% confirmations
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Section>
  )
}
