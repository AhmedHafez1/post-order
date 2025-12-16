'use client'

import { motion } from 'framer-motion'
import {
  Sparkles,
  TrendingUp,
  Clock,
  Users,
  ChevronRight,
  Star,
  Zap,
} from 'lucide-react'
import { useTranslations } from 'next-intl'

export function Hero() {
  const t = useTranslations('hero')
  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const stats = [
    {
      label: t('stat_1_label'),
      value: t('stat_1_value'),
      icon: TrendingUp,
      iconColor: 'text-emerald-600',
    },
    {
      label: t('stat_2_label'),
      value: t('stat_2_value'),
      icon: Users,
      iconColor: 'text-blue-600',
    },
    {
      label: t('stat_3_label'),
      value: t('stat_3_value'),
      icon: Clock,
      iconColor: 'text-amber-600',
    },
  ]

  const benefits = [t('benefit_1'), t('benefit_2'), t('benefit_3')]

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24">
      {/* Background */}
      <div className="to-emerald-25 absolute inset-0 -z-10 bg-linear-to-br from-emerald-50 via-white" />
      <div className="absolute top-10 -left-32 -z-10 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="absolute -right-20 bottom-20 -z-10 h-80 w-80 rounded-full bg-emerald-200/20 blur-3xl" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Urgency Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-emerald-100 to-emerald-50 px-5 py-2.5 text-sm font-semibold text-emerald-800 shadow-sm ring-1 ring-emerald-200"
          >
            <Sparkles className="h-4 w-4 text-amber-500" />
            {t('urgency')}
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 space-y-2"
          >
            <h1 className="text-5xl leading-tight font-black text-slate-900 sm:text-6xl lg:text-7xl">
              {t('title')}{' '}
              <span className="bg-linear-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                {t('highlight')}
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-slate-600 sm:text-2xl"
          >
            {t('subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button
              onClick={() => scrollToSection('pricing')}
              className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-emerald-600 to-emerald-500 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-emerald-500/30 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/40"
            >
              <Zap className="h-5 w-5" />
              {t('cta')}
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToSection('demo')}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-emerald-200 bg-white px-8 py-4 text-lg font-bold text-emerald-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
            >
              {t('learn_more')}
            </button>
          </motion.div>

          {/* Benefits */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12 text-sm font-medium text-slate-600"
          >
            {benefits.join(' • ')}
          </motion.p>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="absolute inset-0 bg-linear-to-br from-emerald-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-3 flex items-center justify-center">
                    <stat.icon className={`h-8 w-8 ${stat.iconColor}`} />
                  </div>
                  <div className="mb-1 text-sm font-semibold text-slate-600">
                    {stat.label}
                  </div>
                  <div className="text-3xl font-black text-slate-900">
                    {stat.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 inline-flex items-center gap-4 rounded-2xl border border-emerald-100 bg-white px-6 py-4 shadow-sm"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-linear-to-br from-emerald-400 to-emerald-600 text-sm font-bold text-white shadow"
                >
                  {i}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="font-bold text-slate-900">
                {t('social_proof')}
              </div>
              <div className="flex items-center gap-1 text-sm text-slate-600">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
                <span className="ml-1 font-semibold">{t('rating')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
