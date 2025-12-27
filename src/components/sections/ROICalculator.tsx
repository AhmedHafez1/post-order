'use client'

import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import ScrollDownArrow from './ScrollDownArrow'
import {
  TrendingDown,
  TrendingUp,
  DollarSign,
  ArrowRight,
  ArrowDown,
} from 'lucide-react'
import { motion } from 'framer-motion'

const roiData = [
  {
    orders: '500',
    returnsWithout: '125 (25%)',
    returnsWith: '75 (15%)',
    savings: '3,000',
    reduction: '40%',
  },
  {
    orders: '1,000',
    returnsWithout: '250 (25%)',
    returnsWith: '150 (15%)',
    savings: '6,000',
    reduction: '40%',
  },
  {
    orders: '2,000',
    returnsWithout: '500 (25%)',
    returnsWith: '300 (15%)',
    savings: '12,000',
    reduction: '40%',
  },
]

export default function ROICalculator() {
  const t = useTranslations('roi_calculator')

  return (
    <Section
      id="calculator"
      className="relative bg-gradient-to-b from-white via-emerald-50/30 to-white px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48"
    >
      <Container>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center sm:mb-12"
        >
          <h2 className="mb-3 text-2xl leading-tight font-black text-slate-800 sm:text-3xl md:mb-4 lg:text-4xl">
            {t('section_title')}
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600" />
        </motion.div>

        {/* Mobile View - Enhanced Cards */}
        <div className="space-y-6 pb-8 sm:hidden">
          {roiData.map((row, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border-2 border-emerald-100 bg-white shadow-lg transition-all hover:shadow-xl"
            >
              {/* Gradient Background Accent */}
              <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-br from-emerald-100/50 to-transparent blur-2xl" />

              <div className="relative px-5 py-6">
                {/* Orders Count - Header */}
                <div className="mb-5 flex items-center justify-between border-b-2 border-emerald-100 pb-4">
                  <div>
                    <span className="block text-lg font-semibold tracking-wide text-emerald-600 uppercase">
                      {t('orders')}
                    </span>
                  </div>
                  <span className="block text-3xl font-black text-slate-800">
                    {row.orders}
                  </span>
                </div>

                {/* Returns Comparison */}
                <div className="mb-5 space-y-3">
                  {/* Without Akeed */}
                  <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-red-50 to-red-100/50 p-4 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 shadow-md">
                        <TrendingUp className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <span className="block text-[10px] font-semibold tracking-wide text-red-600 uppercase">
                          {t('returns_without')}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-black text-red-700">
                        {row.returnsWithout.split(' ')[0]}
                      </div>
                    </div>
                  </div>

                  {/* With Akeed */}
                  <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-emerald-50 to-emerald-100/50 p-4 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 shadow-md">
                        <TrendingDown className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <span className="flex gap-2 text-[10px] font-semibold tracking-wide text-emerald-600 uppercase">
                          <div>{t('returns_with')}</div>
                          <div className="flex justify-center">
                            (
                            <span className="text-xs font-bold text-emerald-700">
                              {row.reduction}
                            </span>
                            <ArrowDown className="h-4 w-4 text-emerald-700" />)
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-black text-emerald-700">
                        {row.returnsWith.split(' ')[0]}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Savings - Highlighted */}
                <div className="relative overflow-hidden p-5">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
                  <div className="relative text-center">
                    <div className="mb-2 flex items-center justify-center gap-1.5 text-xs font-bold tracking-wider text-emerald-600 uppercase">
                      <DollarSign className="h-4 w-4" />
                      <span>{t('savings')}</span>
                    </div>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-black text-emerald-700">
                        {row.savings}
                      </span>
                      <span className="text-lg font-bold text-emerald-600">
                        {t('currency')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tablet/Desktop View - Enhanced Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden overflow-hidden rounded-2xl border-2 border-emerald-200 bg-white shadow-2xl sm:block"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-center">
              <thead>
                <tr className="bg-gradient-to-r from-emerald-50 via-emerald-100 to-emerald-50">
                  <th className="px-4 py-5 text-sm font-black tracking-wide text-slate-700 uppercase lg:px-6 lg:text-base">
                    {t('orders')}
                  </th>
                  <th className="px-4 py-5 text-sm font-black tracking-wide text-slate-700 uppercase lg:px-6 lg:text-base">
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 shadow-md">
                        <TrendingUp className="h-5 w-5 text-white" />
                      </div>
                      <span>{t('returns_without')}</span>
                    </div>
                  </th>
                  <th className="px-4 py-5 text-sm font-black tracking-wide text-slate-700 uppercase lg:px-6 lg:text-base">
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 shadow-md">
                        <TrendingDown className="h-5 w-5 text-white" />
                      </div>
                      <span>{t('returns_with')}</span>
                    </div>
                  </th>
                  <th className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-5 text-sm font-black tracking-wide text-white uppercase shadow-inner lg:px-6 lg:text-base">
                    <div className="flex flex-col items-center gap-2">
                      <DollarSign className="h-6 w-6" />
                      <span>{t('savings')}</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {roiData.map((row, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`border-t-2 border-emerald-100 transition-all hover:bg-emerald-50/70 ${
                      idx === 1 ? 'bg-emerald-50/40' : ''
                    }`}
                  >
                    <td className="px-4 py-6 text-2xl font-black text-slate-800 lg:px-6 lg:text-3xl">
                      {row.orders}
                    </td>
                    <td className="px-4 py-6 lg:px-6">
                      <div className="inline-flex flex-col items-center rounded-xl bg-gradient-to-br from-red-50 to-red-100 px-5 py-3 shadow-sm">
                        <span className="text-xl font-black text-red-700 lg:text-2xl">
                          {row.returnsWithout.split(' ')[0]}
                        </span>
                        <span className="text-sm font-bold text-red-600">
                          {row.returnsWithout.split(' ')[1]}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-6 lg:px-6">
                      <div className="inline-flex flex-col items-center rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 px-5 py-3 shadow-sm">
                        <span className="text-xl font-black text-emerald-700 lg:text-2xl">
                          {row.returnsWith.split(' ')[0]}
                        </span>
                        <span className="text-sm font-bold text-emerald-600">
                          {row.returnsWith.split(' ')[1]}
                        </span>
                      </div>
                    </td>
                    <td className="bg-gradient-to-r from-emerald-50 via-emerald-100 to-emerald-50 px-4 py-6 lg:px-6">
                      <div className="flex flex-col items-center">
                        <span className="text-3xl font-black text-emerald-700 lg:text-4xl">
                          {row.savings}
                        </span>
                        <span className="text-sm font-bold text-emerald-600">
                          {t('currency')}
                        </span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 sm:mt-8 md:mt-10"
        >
          <div className="rounded-xl border-2 border-emerald-100 bg-gradient-to-r from-emerald-50/50 to-transparent p-4 sm:p-5">
            <p className="text-center text-sm leading-relaxed text-slate-600 sm:text-base lg:text-lg">
              <span className="font-bold text-emerald-700">💡 {t('note')}</span>
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <ScrollDownArrow to="pricing" className="hidden sm:block" />
      </Container>
    </Section>
  )
}
