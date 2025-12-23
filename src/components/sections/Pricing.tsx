'use client'
import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { pricing } from '@/config/site'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Pricing() {
  const t = useTranslations('pricing')

  return (
    <Section id="pricing" className="bg-slate-50/50">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-black md:text-4xl">{t('title')}</h2>
          <p className="mb-8 text-gray-600">{t('subtitle')}</p>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-gray-700">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <span>{t(`check_${i}`)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-2 gap-0 overflow-hidden rounded-xl border bg-white shadow-sm md:grid-cols-5">
          {/* Header Row (Desktop) */}
          <div className="hidden flex-col justify-between border-r bg-gray-50/50 p-4 text-sm font-bold text-gray-500 md:flex">
            <div>{t('table_head_tier')}</div>
            <div className="border-y py-8">{t('table_head_total')}</div>
            <div>{t('table_head_unit')}</div>
          </div>

          {pricing.tiers.map((tier) => (
            <div
              key={tier.key}
              className="flex flex-col border-r text-center last:border-r-0"
            >
              {/* Tier Name */}
              <div className="flex h-24 flex-col justify-center border-b bg-gray-50/50 p-4 font-bold">
                <span className="text-sm">{t(`tiers.${tier.key}`)}</span>
                <span className="text-xs font-normal text-gray-400">
                  {tier.orders} : {tier.price}
                </span>
              </div>

              {/* Total Price */}
              <div className="flex min-h-35 flex-col items-center justify-center border-b p-6">
                {tier.isFree ? (
                  <span className="inline-block rounded-lg bg-emerald-500 px-3 py-2 text-xs font-bold text-white">
                    {t('free_badge')}
                  </span>
                ) : (
                  <>
                    <span className="text-2xl font-black text-emerald-600">
                      {tier.price} {t('currency')}
                    </span>
                  </>
                )}
              </div>

              {/* Per Order Price */}
              <div className="flex h-20 flex-col items-center justify-center p-4">
                {tier.perOrder > 0 && (
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <span>
                      {tier.perOrder} {t('currency')}
                    </span>
                    {tier.saving && (
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] text-emerald-700">
                        ({t('saving')} {tier.saving}%)
                      </span>
                    )}
                  </div>
                )}
                {tier.isFree && <span className="text-gray-300">—</span>}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            size="lg"
            className="h-14 rounded-xl bg-emerald-500 px-12 font-bold text-white hover:bg-emerald-600"
            onClick={() =>
              document
                .getElementById('reserve')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            {t('cta_recharge')}
          </Button>
        </div>
      </Container>
    </Section>
  )
}
