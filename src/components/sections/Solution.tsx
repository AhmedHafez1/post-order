'use client'

import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { motion } from 'framer-motion'
import { features, testimonials } from '@/config/site'
import { CheckCircle2, Sparkles } from 'lucide-react'
import ScrollDownArrow from './ScrollDownArrow'
import Testimonial from '../ui/user-testimonial'

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

export function Solution() {
  const t = useTranslations('solution')

  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <Section
      id="solution"
      variant="gradient"
      className="relative px-8 sm:px-12 md:px-16 lg:px-48"
    >
      <Container>
        {/* Section Header */}
        <div className="mb-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-xl leading-tight font-black text-slate-700 sm:text-2xl lg:text-3xl"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8 text-lg font-medium text-slate-600 sm:text-xl lg:mb-16"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* Solutions Grid (cards like Problem) */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 xl:grid-cols-4"
        >
          {features.solutions.map((solution) => (
            <motion.div key={solution.key} variants={item}>
              <div className="group relative overflow-hidden rounded-2xl border border-emerald-100 bg-white px-8 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg lg:min-h-80">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-emerald-50/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex flex-col items-center gap-4">
                  {/* Icon */}
                  <div className="flex h-24 w-24 items-center justify-center text-6xl transition-transform duration-300 group-hover:scale-110">
                    {solution.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3 text-center">
                    <h3 className="text-xl font-bold text-slate-700 transition-colors group-hover:text-emerald-600">
                      {t(`${solution.key}.title`)}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {t(`${solution.key}.description`)}
                    </p>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-emerald-200/30 blur-2xl transition-opacity group-hover:opacity-60" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <ScrollDownArrow to="how-it-works" className="hidden sm:block" />
      </Container>
    </Section>
  )
}

export default Solution
