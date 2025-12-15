'use client'

import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { features } from '@/config/site'
import { AlertCircle } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function Problem() {
  const t = useTranslations('problems')

  return (
    <Section className="bg-linear-to-b from-white via-emerald-25 to-white">
      <Container>
        <SectionHeader title={t('title')} centered />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12 grid gap-6 md:grid-cols-2"
        >
          {features.problems.map((problem) => (
            <motion.div key={problem.key} variants={item}>
              <Card className="h-full border border-emerald-100 bg-white/90 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-2xl">
                      {problem.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-slate-900">
                        {t(`${problem.key}.title`)}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-700">
                        {t(`${problem.key}.description`)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Reality check card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border border-emerald-100 bg-linear-to-r from-emerald-50 to-white shadow-md backdrop-blur">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="mt-1 h-10 w-10 shrink-0 text-emerald-600" />
                <div className="space-y-2">
                  <p className="text-base leading-relaxed text-slate-800">
                    {t('reality')}
                  </p>
                  <p className="text-xl font-black text-emerald-700">
                    {t('reality_highlight')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Section>
  )
}
