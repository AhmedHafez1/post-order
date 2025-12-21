'use client'

import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { motion } from 'framer-motion'
import { features } from '@/config/site'
import { ChevronDownIcon, TrendingDown } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

function Problem() {
  const t = useTranslations('problems')

  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <Section className="relative bg-linear-to-b from-white via-rose-50/30 to-white">
      <Container>
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-8 text-xl leading-tight font-black text-slate-700 sm:text-2xl lg:text-3xl"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg font-medium text-slate-600 sm:text-xl"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* Problems Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="mb-12 grid gap-6 md:grid-cols-2"
        >
          {features.problems.map((problem) => (
            <motion.div key={problem.key} variants={item}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-rose-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-rose-50/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex gap-4">
                  {/* Icon */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-rose-100 to-rose-50 text-3xl shadow-sm ring-1 ring-rose-200/50 transition-transform duration-300 group-hover:scale-110">
                    {problem.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-rose-700">
                      {t(`${problem.key}.title`)}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {t(`${problem.key}.description`)}
                    </p>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-rose-100/30 blur-2xl transition-opacity group-hover:opacity-60" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Reality Check Card - More Prominent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative m-8 overflow-hidden rounded-3xl border-2 border-rose-200 bg-linear-to-br from-rose-50 via-white to-orange-50 p-8 shadow-xl md:p-10"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'radial-gradient(circle, #f43f5e 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
          </div>

          <div className="relative flex flex-col items-center gap-6 md:flex-row">
            {/* Icon */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-rose-500 to-orange-500 shadow-lg">
              <TrendingDown
                className="h-10 w-10 text-white"
                strokeWidth={2.5}
              />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-3 text-center md:text-left">
              <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
                {t('reality')}
              </p>
              <p className="text-2xl font-black text-rose-600 md:text-3xl">
                {t('reality_highlight')}
              </p>
            </div>
          </div>

          {/* Decorative glow */}
          <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-rose-300/30 blur-3xl" />
          <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-orange-300/30 blur-3xl" />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        >
          <ChevronDownIcon
            className="h-8 w-8 animate-bounce text-emerald-600"
            onClick={() => scrollToSection('solution')}
          />
        </motion.div>
      </Container>
    </Section>
  )
}

export default Problem
