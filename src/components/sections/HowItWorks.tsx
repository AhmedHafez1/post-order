'use client'

import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { motion } from 'framer-motion'
import { features } from '@/config/site'
import { usePathname } from 'next/navigation'
import ScrollDownArrow from './ScrollDownArrow'

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

function HowItWorks() {
  const t = useTranslations('how_it_works')
  const pathname = usePathname()

  // Extract locale from pathname (assuming /[locale]/...)
  const locale = pathname?.split('/')[1] === 'en' ? 'en' : 'ar'

  return (
    <Section
      id="how-it-works"
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
            {t('section_title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg font-medium text-slate-600 sm:text-xl"
          >
            {t('main_title')}
          </motion.p>
        </div>

        {/* Steps Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-3 lg:gap-32"
        >
          {features.howItWorks.map((step, idx) => (
            <motion.div key={step.key} variants={item}>
              <div className="group relative overflow-hidden rounded-2xl border border-emerald-100 bg-white px-8 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg lg:min-h-80">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-emerald-50/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex flex-col items-center gap-4">
                  {/* Step Number Badge */}
                  <div
                    className={`absolute -top-3 ${locale === 'en' ? '-left-3' : '-right-3'} z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-orange-500 to-orange-600 text-xl font-semibold text-white shadow-lg ring-4 ring-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    {idx + 1}
                  </div>

                  {/* Icon */}
                  <div className="mt-8 flex h-24 w-24 items-center justify-center text-6xl transition-transform duration-300 group-hover:scale-110">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3 text-center">
                    <h3 className="text-xl font-bold text-slate-700 transition-colors group-hover:text-emerald-700">
                      {t(`steps.${step.key}.title`)}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {t(`steps.${step.key}.description`)}
                    </p>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-emerald-100/30 blur-2xl transition-opacity group-hover:opacity-60" />
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Scroll Indicator */}
        <ScrollDownArrow to="pricing" />
      </Container>
    </Section>
  )
}

export default HowItWorks
