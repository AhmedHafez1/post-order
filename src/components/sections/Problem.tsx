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
    <Section className="bg-gradient-to-b from-background via-red-50/30 to-background">
      <Container>
        <SectionHeader 
          title={t('title')}
          centered
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {features.problems.map((problem) => (
            <motion.div key={problem.key} variants={item}>
              <Card className="h-full border-s-4 border-s-red-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/50 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="text-5xl flex-shrink-0">{problem.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
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
          <Card className="border-2 border-red-500 bg-gradient-to-br from-red-50 to-red-100/50 backdrop-blur shadow-2xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-gray-700 mb-3 leading-relaxed">
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