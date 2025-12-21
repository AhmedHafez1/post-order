'use client'

import { motion } from 'framer-motion'
import { CheckCheck, Clock, TrendingUp, Users } from 'lucide-react'
import { useTranslations } from 'next-intl'

function Stats() {
  const t = useTranslations('demo')

  const stats = [
    {
      label: t('stat_1_label'),
      value: t('stat_1_value'),
      icon: CheckCheck,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
    },
    {
      label: t('stat_2_label'),
      value: t('stat_2_value'),
      icon: Clock,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
    },
    {
      label: t('stat_3_label'),
      value: t('stat_3_value'),
      icon: TrendingUp,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-700',
    },
    {
      label: t('stat_4_label'),
      value: t('stat_4_value'),
      icon: TrendingUp,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-700',
    },

    {
      label: t('stat_5_label'),
      value: t('stat_5_value'),
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
    },
    {
      label: t('stat_6_label'),
      value: t('stat_6_value'),
      icon: Clock,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
    },
  ]

  return (
    <section
      id="demo"
      className="relative overflow-hidden bg-linear-to-b from-white via-emerald-50/30 to-white py-24"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-16 -left-24 h-72 w-72 rounded-full bg-emerald-200/20 blur-3xl" />
        <div className="absolute right-[-10%] bottom-10 h-80 w-80 rounded-full bg-emerald-300/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Stats */}
          <div className="space-y-6">
            {/* Title & Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-8 text-xl leading-tight font-black text-slate-700 sm:text-2xl lg:text-3xl"
            >
              {t('title')}{' '}
              <span className="bg-linear-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                {t('title_highlight')}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600"
            >
              {t('subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="mb-6 text-2xl font-black text-slate-900">
                {t('stats_title')}
              </h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="relative overflow-hidden rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-xl ${stat.bgColor}`}
                      >
                        <stat.icon className={`h-6 w-6 ${stat.textColor}`} />
                      </div>
                      <div className="flex-1">
                        <div className="mb-1 text-sm font-medium text-gray-600">
                          {stat.label}
                        </div>
                        <div
                          className={`text-3xl font-black ${stat.textColor}`}
                        >
                          {stat.value}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
