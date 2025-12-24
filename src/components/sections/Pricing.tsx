'use client'
import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { pricing } from '@/config/site'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tier } from '@/types/tier.model'
import { useState } from 'react'
import { ReservationModal } from './ReservationModal'

export default function Pricing() {
  const t = useTranslations('pricing')
  const { tiers } = pricing
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false)

  const checks = [t('check_1'), t('check_2'), t('check_3')]

  return (
    <Section id="pricing">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-black md:text-4xl">{t('title')}</h2>
          <p className="mb-8 text-gray-600">{t('subtitle')}</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-gray-700">
            {checks.map((c, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="mb-12 grid grid-cols-1 gap-2 divide-x divide-gray-200 overflow-hidden md:grid-cols-6 md:gap-4">
          <div className="flex flex-col rounded-xl border-gray-200 bg-white text-center">
            {/* Tier Name */}
            <div className="flex h-20 justify-center rounded-t-xl border-b bg-slate-100/50 p-3 font-bold md:flex-col md:items-center">
              <span className="mb-1 text-base">{t('tier')}</span>
            </div>

            {/* Total Price */}
            <div className="flex min-h-28 justify-center border-b bg-slate-100/50 p-3 font-bold md:flex-col md:items-center">
              <span>{t('total_price')}</span>
            </div>

            {/* Per Order Price */}
            <div className="flex h-20 justify-center rounded-b-xl bg-slate-100/50 p-3 font-bold md:flex-col md:items-center">
              <span>{t('price_per_order')}</span>
            </div>
          </div>
          {tiers.map((tier: Tier, idx: number) => (
            <div
              key={tier.key}
              className={`flex flex-col rounded-xl bg-white text-center ${idx !== tiers.length - 1 ? 'border-gray-200' : ''} ${tier.isFree ? 'bg-gray-50/70' : ''}`}
            >
              {/* Tier Name */}
              <div className="flex h-20 flex-col justify-center rounded-t-xl border-b bg-slate-100/50 p-3 font-bold">
                <span className="mb-1 text-base">{t(`tiers.${tier.key}`)}</span>
                {!tier.isFree && tier.ordersDisplay && (
                  <span className="text-xs font-normal text-gray-400">
                    {tier.ordersDisplay} {t('orders_label')}
                  </span>
                )}
              </div>

              {/* Total Price */}
              <div className="flex min-h-28 flex-col items-center justify-center border-b p-5">
                {tier.isFree ? (
                  <>
                    <span className="mb-2 inline-block rounded-lg bg-emerald-500 px-4 py-2 text-base font-bold text-white">
                      {t('free')}
                    </span>
                    <span className="text-md font-semibold">
                      {t('free_badge')}
                    </span>
                  </>
                ) : (
                  <span className="text-2xl font-semibold text-emerald-600">
                    {tier.price} {t('currency')}
                  </span>
                )}
              </div>

              {/* Per Order Price */}
              <div className="flex h-20 flex-col items-center justify-center p-4">
                {tier.isFree ? (
                  <span className="text-lg font-bold text-emerald-500">
                    {t('free')}
                  </span>
                ) : (
                  <div className="text-md flex flex-col items-center gap-1 font-medium md:flex-row md:gap-2">
                    <span>
                      {tier.perOrder} {t('currency')}
                    </span>
                    {tier.saving && (
                      <span className="mt-1 rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-bold text-emerald-700">
                        {t('saving')} {tier.saving}%
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            size="lg"
            className="h-14 rounded-xl bg-emerald-500 px-12 font-bold text-white hover:bg-emerald-600"
            onClick={() => setIsReservationModalOpen(true)}
          >
            {t('cta_recharge')}
          </Button>
        </div>
      </Container>
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
    </Section>
  )
}
