'use client'

import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import ScrollDownArrow from './ScrollDownArrow'
import { TrendingDown, TrendingUp, DollarSign } from 'lucide-react'

const roiData = [
  {
    orders: '500',
    returnsWithout: '125 (25%)',
    returnsWith: '75 (15%)',
    savings: '3,000',
  },
  {
    orders: '1,000',
    returnsWithout: '250 (25%)',
    returnsWith: '150 (15%)',
    savings: '6,000',
  },
  {
    orders: '2,000',
    returnsWithout: '500 (25%)',
    returnsWith: '300 (15%)',
    savings: '12,000',
  },
]

export default function ROICalculator() {
  const t = useTranslations('roi_calculator')

  return (
    <Section
      id="calculator"
      className="relative px-8 md:px-12 lg:px-24 xl:px-48"
    >
      <Container>
        {/* Title */}
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="mb-4 text-xl leading-tight font-black text-slate-700 sm:text-2xl md:mb-6 lg:text-3xl">
            {t('section_title')}
          </h2>
        </div>

        {/* Mobile View - Cards */}
        <div className="space-y-4 pb-8 sm:hidden">
          {roiData.map((row, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-emerald-100 bg-white px-8 py-6 shadow-sm"
            >
              {/* Orders Count */}
              <div className="mb-4 flex items-center justify-between border-b border-emerald-100 pb-3">
                <span className="text-sm font-medium text-gray-600">
                  {t('orders')}
                </span>
                <span className="text-2xl font-bold text-slate-700">
                  {row.orders}
                </span>
              </div>

              {/* Returns Comparison */}
              <div className="mb-4 space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-red-50 p-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-red-500" />
                    <span className="text-xs font-medium text-gray-600">
                      {t('returns_without')}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-red-600">
                    {row.returnsWithout}
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-emerald-50 p-3">
                  <div className="flex items-center gap-2">
                    <TrendingDown className="h-4 w-4 text-emerald-500" />
                    <span className="text-xs font-medium text-gray-600">
                      {t('returns_with')}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-emerald-600">
                    {row.returnsWith}
                  </div>
                </div>
              </div>

              {/* Savings */}
              <div className="rounded-lg bg-linear-to-r from-emerald-500 to-emerald-600 p-4 text-center">
                <div className="mb-1 flex items-center justify-center gap-1 text-xs font-medium text-emerald-100">
                  <DollarSign className="h-3 w-3" />
                  <span>{t('savings')}</span>
                </div>
                <div className="text-2xl font-black text-white">
                  {row.savings} {t('currency')}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet/Desktop View - Table */}
        <div className="hidden overflow-hidden rounded-xl border-2 border-emerald-200 bg-white shadow-lg sm:block">
          <div className="overflow-x-auto">
            <table className="w-full text-center">
              <thead>
                <tr className="bg-linear-to-r from-emerald-50 to-emerald-100">
                  <th className="px-4 py-4 text-sm font-bold text-slate-700 lg:px-6 lg:text-base">
                    {t('orders')}
                  </th>
                  <th className="px-4 py-4 text-sm font-bold text-slate-700 lg:px-6 lg:text-base">
                    <div className="flex flex-col items-center gap-1">
                      <TrendingUp className="h-4 w-4 text-red-500" />
                      <span>{t('returns_without')}</span>
                    </div>
                  </th>
                  <th className="px-4 py-4 text-sm font-bold text-slate-700 lg:px-6 lg:text-base">
                    <div className="flex flex-col items-center gap-1">
                      <TrendingDown className="h-4 w-4 text-emerald-500" />
                      <span>{t('returns_with')}</span>
                    </div>
                  </th>
                  <th className="bg-emerald-500 px-4 py-4 text-sm font-bold text-white lg:px-6 lg:text-base">
                    <div className="flex flex-col items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      <span>{t('savings')}</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {roiData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-t-2 border-emerald-100 transition-colors hover:bg-emerald-50/50 ${
                      idx === 1 ? 'bg-emerald-50/30' : ''
                    }`}
                  >
                    <td className="px-4 py-4 text-lg font-bold text-slate-700 lg:px-6 lg:text-xl">
                      {row.orders}
                    </td>
                    <td className="px-4 py-4 lg:px-6">
                      <div className="inline-flex items-center rounded-lg bg-red-50 px-3 py-2 font-bold text-red-600">
                        {row.returnsWithout}
                      </div>
                    </td>
                    <td className="px-4 py-4 lg:px-6">
                      <div className="inline-flex items-center rounded-lg bg-emerald-50 px-3 py-2 font-bold text-emerald-600">
                        {row.returnsWith}
                      </div>
                    </td>
                    <td className="bg-linear-to-r from-emerald-50 to-emerald-100 px-4 py-4 lg:px-6">
                      <div className="flex flex-col items-center">
                        <span className="text-xl font-black text-emerald-700 lg:text-2xl">
                          {row.savings}
                        </span>
                        <span className="text-xs font-semibold text-emerald-600">
                          {t('currency')}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Note */}
        <div className="mt-4 rounded-lg bg-white p-4 sm:mt-6">
          <p className="md:text-md text-center text-sm text-slate-500 sm:text-sm xl:text-lg">
            {t('note')}
          </p>
        </div>

        {/* Scroll Indicator */}
        <ScrollDownArrow to="pricing" className="hidden sm:block" />
      </Container>
    </Section>
  )
}
