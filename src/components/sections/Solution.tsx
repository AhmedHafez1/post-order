'use client'

import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { motion } from 'framer-motion'
import { features, testimonials } from '@/config/site'
import {
  CheckCircle2,
  Star,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Users,
  Clock,
} from 'lucide-react'

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
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
}

export function Solution() {
  const t = useTranslations('solution')

  const stepEmojis = ['🛒', '📱', '✅']

  return (
    <Section id="solution" variant="gradient">
      <Container>
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-emerald-100 to-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200"
          >
            <Sparkles className="h-4 w-4" />
            {t('title')}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-4xl leading-tight font-black text-slate-900 sm:text-5xl"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-slate-600"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* How it Works - 3 Steps */}
        <div className="mb-20">
          <div className="relative grid gap-8 md:grid-cols-3">
            {/* Connection lines for desktop */}
            <div className="absolute top-12 right-0 left-0 hidden h-1 md:block">
              <div className="mx-auto h-full w-[calc(100%-8rem)] bg-linear-to-r from-emerald-500 via-emerald-400 to-emerald-500 opacity-20" />
            </div>

            {['1', '2', '3'].map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="group relative h-full overflow-hidden rounded-2xl border-2 border-emerald-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl">
                  {/* Number Badge */}
                  <div className="absolute -top-3 -left-3 z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-500 to-emerald-600 text-2xl font-black text-white shadow-lg ring-4 ring-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {step}
                  </div>

                  {/* Emoji Icon */}
                  <div className="mt-8 mb-6 flex items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-50 to-emerald-100 text-5xl transition-transform duration-300 group-hover:scale-110">
                      {stepEmojis[index]}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3 text-center">
                    <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-emerald-600">
                      {t(`steps.${step}.title`)}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {t(`steps.${step}.description`)}
                    </p>
                  </div>

                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-emerald-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Arrow for connection (desktop only) */}
                  {step !== '3' && (
                    <div className="absolute top-1/2 -right-4 z-20 hidden -translate-y-1/2 md:block">
                      <ArrowRight className="h-8 w-8 text-emerald-400 drop-shadow" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 grid gap-6 md:grid-cols-2"
        >
          {features.solutions.map((solution) => (
            <motion.div key={solution.key} variants={item}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-emerald-50/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-emerald-100 to-emerald-50 text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {solution.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-emerald-600">
                      {t(`${solution.key}.title`)}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {t(`${solution.key}.description`)}
                    </p>
                  </div>

                  {/* Check icon */}
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-600 opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100" />
                </div>

                {/* Decorative glow */}
                <div className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-emerald-200/30 blur-2xl transition-opacity group-hover:opacity-60" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial - More Prominent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border-2 border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-green-50 p-8 shadow-xl md:p-10"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'radial-gradient(circle, #10b981 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
          </div>

          <div className="relative">
            {/* Stars */}
            <div className="mb-6 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-7 w-7 fill-amber-400 text-amber-400"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="mb-6 text-center">
              <p className="text-xl leading-relaxed font-medium text-slate-800 italic md:text-2xl">
                {t('testimonial_1')}
              </p>
            </blockquote>

            {/* Author */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-emerald-600 text-2xl font-bold text-white shadow-lg ring-4 ring-white">
                {testimonials[0].name.charAt(0)}
              </div>
              <div className="text-center sm:text-left">
                <div className="text-lg font-bold text-slate-900">
                  {testimonials[0].name}
                </div>
                <div className="text-sm text-slate-600">
                  {testimonials[0].store} • {testimonials[0].orders}{' '}
                  {t('orders_monthly')}
                </div>
              </div>
              <div className="sm:ml-auto">
                <div className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-emerald-600 to-emerald-500 px-4 py-2 text-sm font-bold text-white shadow-md">
                  +34% confirmations
                </div>
              </div>
            </div>
          </div>

          {/* Decorative glows */}
          <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-emerald-300/30 blur-3xl" />
          <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-green-300/30 blur-3xl" />
        </motion.div>
      </Container>
    </Section>
  )
}

export default Solution
