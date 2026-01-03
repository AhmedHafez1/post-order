'use client'
import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { pricing } from '@/config/site'
import { CheckCircle2, Zap } from 'lucide-react'
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
    <Section id="pricing" className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48">
      <Container>
        {/* Header */}
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="mb-4 text-2xl leading-tight font-black text-slate-700 sm:text-3xl md:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <p className="mb-8 text-sm text-gray-600 sm:mb-8 sm:text-base">
            {t('subtitle')}
          </p>

          {/* Check items */}
          <div className="flex flex-col items-start gap-3 text-sm font-bold text-gray-700 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 md:gap-6 md:text-base">
            {checks.map((c, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500 sm:h-6 sm:w-6" />
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View - Cards */}
        <div className="space-y-4 lg:hidden">
          {tiers.map((tier: Tier) => (
            <div
              key={tier.key}
              className={`rounded-xl border p-5 transition-all ${
                tier.key === 'growth'
                  ? 'relative border-2 border-emerald-500 bg-white shadow-lg'
                  : 'border-gray-200 bg-white shadow-sm'
              }`}
            >
              {/* Most Popular Badge */}
              {tier.key === 'growth' && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1 rounded-full bg-linear-to-r from-emerald-500 to-emerald-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
                    <Zap className="h-3 w-3" />
                    {t('most_popular')}
                  </span>
                </div>
              )}

              {/* Tier Name */}
              <div className="mt-2 mb-4 text-center">
                <h3 className="mb-1 text-lg font-bold">
                  {t(`tiers.${tier.key}`)}
                </h3>
                {!tier.isFree && tier.ordersDisplay && (
                  <span className="text-sm text-gray-500">
                    {tier.ordersDisplay} {t('orders_label')}
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="mb-4 border-y border-gray-200 py-4 text-center">
                {tier.isFree ? (
                  <div>
                    <span className="mb-2 inline-block rounded-lg bg-emerald-500 px-4 py-2 text-base font-bold text-white">
                      {t('free')}
                    </span>
                    <p className="mt-2 text-sm font-semibold text-gray-700">
                      {t('free_badge')}
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="mb-2 text-3xl font-bold text-emerald-600">
                      {tier.price}{' '}
                      <span className="text-lg">{t('currency')}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {t('total_price')}
                    </div>
                  </div>
                )}
              </div>

              {/* Per Order Price */}
              <div className="text-center">
                <div className="mb-1 text-xs text-gray-500">
                  {t('price_per_order')}
                </div>
                {tier.isFree ? (
                  <div className="text-xl font-bold text-emerald-500">
                    {t('free')}
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-xl font-semibold">
                      {tier.perOrder} {t('currency')}
                    </span>
                    {tier.saving && (
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                        {t('saving')} {tier.saving}%
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View - Horizontal Cards with Better Constraints */}
        <div className="hidden lg:block">
          <div className="mx-auto max-w-6xl">
            {/* Most Popular Badge Row */}
            <div className="mb-3 flex justify-center">
              <div className="grid w-full grid-cols-6 gap-3">
                <div className="col-span-1" />
                {tiers.map((tier: Tier) => (
                  <div key={tier.key} className="flex justify-center">
                    {tier.key === 'growth' && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-linear-to-r from-emerald-500 to-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                        <Zap className="h-3 w-3" />
                        {t('most_popular')}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Cards Grid */}
            <div className="grid grid-cols-6 gap-x-3">
              {/* Labels Column */}
              <div className="flex flex-col">
                {/* Tier Label */}
                <div className="flex h-24 items-center rounded-t-lg bg-slate-100 px-4 text-sm font-bold">
                  {t('tier')}
                </div>

                {/* Total Price Label */}
                <div className="flex h-32 items-center border-y border-slate-200 bg-slate-100 px-4 text-sm font-bold">
                  {t('total_price')}
                </div>

                {/* Per Order Label */}
                <div className="flex h-24 items-center rounded-b-lg bg-slate-100 px-4 text-sm font-bold">
                  {t('price_per_order')}
                </div>
              </div>

              {/* Tier Cards */}
              {tiers.map((tier: Tier) => (
                <div
                  key={tier.key}
                  className={`flex flex-col ${
                    tier.key === 'growth' ? 'relative z-10' : ''
                  }`}
                >
                  {/* Tier Name Card */}
                  <div
                    className={`flex h-24 flex-col items-center justify-center rounded-t-lg border-t p-3 text-center ${
                      tier.key === 'growth'
                        ? 'border-x-2 border-t-2 border-emerald-500 bg-white shadow-md'
                        : 'border-x border-gray-200 bg-white'
                    }`}
                  >
                    <div className="text-sm font-bold">
                      {t(`tiers.${tier.key}`)}
                    </div>
                    {!tier.isFree && tier.ordersDisplay && (
                      <div className="mt-1 text-xs text-gray-400">
                        {tier.ordersDisplay} {t('orders_label')}
                      </div>
                    )}
                  </div>

                  {/* Total Price Card */}
                  <div
                    className={`flex h-32 items-center justify-center border-y p-4 ${
                      tier.key === 'growth'
                        ? 'border-x-2 border-y-2 border-emerald-500 bg-white shadow-md'
                        : 'border-x border-gray-200 bg-white'
                    }`}
                  >
                    {tier.isFree ? (
                      <div className="text-center">
                        <span className="mb-2 inline-block rounded-lg bg-emerald-500 px-3 py-1.5 text-sm font-bold text-white">
                          {t('free')}
                        </span>
                        <div className="mt-2 text-xs font-semibold">
                          {t('free_badge')}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-600">
                          {tier.price}
                        </div>
                        <div className="text-xs text-gray-500">
                          {t('currency')}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Per Order Price Card */}
                  <div
                    className={`flex h-24 flex-col items-center justify-center rounded-b-lg border-b p-3 ${
                      tier.key === 'growth'
                        ? 'border-x-2 border-b-2 border-emerald-500 bg-white shadow-md'
                        : 'border-x border-gray-200 bg-white'
                    }`}
                  >
                    {tier.isFree ? (
                      <span className="text-base font-bold text-emerald-500">
                        {t('free')}
                      </span>
                    ) : (
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-base font-semibold">
                          {tier.perOrder} {t('currency')}
                        </span>
                        {tier.saving && (
                          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                            {t('saving')} {tier.saving}%
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* CTA Button */}
          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="h-14 w-full rounded-xl bg-orange-500 font-bold text-white transition-all hover:scale-105 hover:bg-orange-600 sm:w-auto"
              onClick={() => setIsReservationModalOpen(true)}
            >
              {t('cta_recharge')}
            </Button>
          </div>
        </div>
      </Container>

      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
    </Section>
  )
}
