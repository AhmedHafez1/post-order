'use client'

import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import ScrollDownArrow from './ScrollDownArrow'

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
      className="relative px-8 sm:px-12 md:px-16 lg:px-48"
    >
      <Container>
        <div className="text-center">
          <h2 className="mb-16 text-xl leading-tight font-black text-slate-700 sm:text-2xl lg:text-3xl">
            {t('section_title')}
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 overflow-x-auto pb-12">
          <table className="min-w-4/5 rounded-xl border border-emerald-200 bg-white text-center">
            <thead className="bg-emerald-50">
              <tr>
                <th className="px-4 py-3 font-bold text-slate-700">
                  {t('orders')}
                </th>
                <th className="px-4 py-3 font-bold text-slate-700">
                  {t('returns_without')}
                </th>
                <th className="px-4 py-3 font-bold text-slate-700">
                  {t('returns_with')}
                </th>
                <th className="px-4 py-3 font-bold text-slate-700">
                  {t('savings')}
                </th>
              </tr>
            </thead>
            <tbody>
              {roiData.map((row, idx) => (
                <tr key={idx} className="border-t border-emerald-100">
                  <td className="px-4 py-3">{row.orders}</td>
                  <td className="px-4 py-3">{row.returnsWithout}</td>
                  <td className="px-4 py-3">{row.returnsWith}</td>
                  <td className="px-4 py-3 font-bold text-emerald-700">
                    {row.savings} {t('currency')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-sm text-slate-500">{t('note')}</p>
        </div>

        {/* Scroll Indicator */}
        <ScrollDownArrow to="pricing" className="hidden sm:block" />
      </Container>
    </Section>
  )
}
