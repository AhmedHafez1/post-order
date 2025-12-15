'use client'

import { motion } from 'framer-motion'
import {
  Sparkles,
  TrendingUp,
  Clock,
  Users,
  ChevronRight,
  Star,
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
    <section className="relative overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-28">
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-emerald-50 via-white to-emerald-25" />
      <div className="absolute -left-32 top-10 -z-10 h-80 w-80 rounded-full bg-emerald-300/25 blur-3xl" />
      <div className="absolute -right-20 bottom-10 -z-10 h-72 w-72 rounded-full bg-emerald-200/25 blur-3xl" />
      <svg
        className="absolute bottom-[-1px] left-0 right-0 -z-10 w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          d="M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,90.7C1120,85,1280,107,1360,117.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
      </svg>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800 ring-1 ring-emerald-200"
            >
              <Sparkles className="h-4 w-4 text-amber-500" />
              {t('urgency')}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="space-y-4"
            >
              <h1 className="text-4xl font-black leading-tight text-emerald-900 sm:text-5xl lg:text-[52px]">
                {t('title')}{' '}
                <span className="bg-linear-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                  {t('highlight')}
                </span>
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-700 sm:text-xl">
                {t('subtitle')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <button
                onClick={() => scrollToSection('pricing')}
                className="group relative inline-flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-emerald-600 to-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/35 transition-transform hover:-translate-y-0.5"
              >
                {t('cta')}
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection('demo')}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-100 bg-white px-6 py-3 text-base font-semibold text-emerald-700 shadow-sm transition hover:border-emerald-200 hover:text-emerald-800"
              >
                {t('learn_more')}
              </button>
            </motion.div>
            <p className="text-sm font-medium text-slate-600">
              {benefits.join(' • ')}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid max-w-2xl gap-3 sm:grid-cols-3"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-emerald-100 bg-white p-4 shadow-sm"
                >
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-600">
                    <stat.icon className={`h-4 w-4 ${stat.iconColor}`} />
                    <span>{stat.label}</span>
                  </div>
                  <div className="text-2xl font-black text-slate-900">
                    {stat.value}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-center gap-4 rounded-2xl border border-emerald-100 bg-white px-5 py-4 shadow-sm"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-linear-to-br from-emerald-400 to-emerald-600 text-xs font-bold text-white shadow"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-900">
                  {t('social_proof')}
                </div>
                <div className="flex items-center gap-1 text-sm text-slate-700">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="ml-1">{t('rating')}</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white/95 shadow-xl shadow-emerald-500/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(52,211,153,0.08),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(96,165,250,0.06),transparent_35%)]" />
              <div className="relative p-6 sm:p-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                  <Sparkles className="h-4 w-4" />
                  {t('learn_more')}
                </div>

                <div className="space-y-3">
                  {benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-3 rounded-xl bg-white p-3 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-emerald-100/60"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-emerald-100 bg-white p-4 shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-semibold text-slate-700">
                          {stat.label}
                        </div>
                        <stat.icon className={`h-4 w-4 ${stat.iconColor}`} />
                      </div>
                      <div className="mt-2 text-2xl font-black text-slate-900">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
