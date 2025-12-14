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
    <Section className="from-background to-background bg-linear-to-b via-red-50/30">
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
              <Card className="h-full border-s-4 border-s-red-500 bg-white/50 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="shrink-0 text-5xl">{problem.icon}</div>
                    <div>
                      <h3 className="text-foreground mb-2 text-xl font-bold">
                        {t(`${problem.key}.title`)}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
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
          <Card className="border-2 border-red-500 bg-linear-to-br from-red-50 to-red-100/50 shadow-2xl backdrop-blur">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="mt-1 h-8 w-8 shrink-0 text-red-600" />
                <div>
                  <p className="mb-3 text-lg leading-relaxed text-gray-700">
                    {t('reality')}
                  </p>
                  <p className="text-2xl font-bold text-red-600">
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
