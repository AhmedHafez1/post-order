'use client'

import { motion } from 'framer-motion'
import {
  Sparkles,
  TrendingUp,
  Clock,
  Users,
  ChevronRight,
  Star,
  ArrowDown,
  CheckCircle2,
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
      color: 'emerald',
    },
    {
      label: t('stat_2_label'),
      value: t('stat_2_value'),
      icon: Users,
      color: 'blue',
    },
    {
      label: t('stat_3_label'),
      value: t('stat_3_value'),
      icon: Clock,
      color: 'amber',
    },
  ]

  const benefits = [t('benefit_1'), t('benefit_2'), t('benefit_3')]

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20 pb-16">
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute inset-0 bg-linear-to-br from-emerald-50 via-white to-blue-50" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-emerald-400/30 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="bg-size[64px_64px] absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8 lg:pt-6">
        <div className="mx-auto text-center">
          {/* Urgency Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-block"
          >
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-amber-500/50 bg-linear-to-r from-amber-400 to-orange-400 px-6 py-3 text-sm font-bold text-gray-900 shadow-lg">
              <Sparkles className="h-4 w-4 animate-pulse" />
              <span>{t('urgency')}</span>
              <Sparkles className="h-4 w-4 animate-pulse" />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl leading-[1.1] font-black sm:text-5xl lg:text-6xl"
          >
            <div className="text-center my-2">{t('title')}{' '}</div>
            <span className="relative inline-block">
              <span className="relative z-10 bg-linear-to-r from-emerald-600 via-emerald-500 to-emerald-400 bg-clip-text text-transparent">
                {t('highlight')}
              </span>
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="w-full mx-auto mt-4"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M2 10C50 2 150 2 298 10"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="text-emerald-500"
                />
              </motion.svg>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-700 sm:text-2xl"
          >
            {t('subtitle')}
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mb-12 grid max-w-2xl grid-cols-3 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-white to-gray-50 opacity-75 blur transition-opacity group-hover:opacity-100" />
                <div className="relative rounded-2xl border-2 border-gray-200 bg-white/80 p-6 backdrop-blur-sm transition-all hover:border-emerald-300 hover:shadow-xl">
                  <stat.icon
                    className={`mx-auto mb-3 h-8 w-8 text-${stat.color}-600`}
                  />
                  <div className="mb-1 text-3xl font-black text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <button
              onClick={() => scrollToSection('pricing')}
              className="group relative rounded-2xl bg-linear-to-r from-emerald-600 to-emerald-500 px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-emerald-500/50 transition-all hover:scale-105 hover:shadow-emerald-500/70"
            >
              <span className="flex items-center justify-center gap-2">
                {t('cta')}
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 -z-10 rounded-2xl bg-linear-to-r from-emerald-500 to-emerald-400 opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
            <button
              onClick={() => scrollToSection('demo')}
              className="rounded-2xl border-2 border-gray-300 bg-white px-8 py-4 text-lg font-bold text-gray-900 transition-all hover:border-gray-400 hover:bg-gray-50"
            >
              {t('learn_more')}
            </button>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 inline-flex items-center gap-4 rounded-2xl border-2 border-gray-200 bg-white/80 px-6 py-4 shadow-lg backdrop-blur-sm"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-linear-to-br from-emerald-400 to-emerald-600 text-xs font-bold text-white shadow-lg"
                >
                  {i}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-900">{t('social_proof')}</div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
                <span className="ml-1 text-sm text-gray-600">
                  {t('rating')}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            onClick={() => scrollToSection('demo')}
            className="mx-auto mt-16 flex flex-col items-center gap-2 text-gray-600 transition-colors hover:text-emerald-600"
          >
            <span className="text-sm font-semibold">{t('scroll_down')}</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default Hero
