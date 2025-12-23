'use client'
import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { pricing } from '@/config/site'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Pricing() {
  // Arabic pricing data (static, as per design)
  // Order and content as per design: trial, pro, growth, retail, sme
  const tiers = [
    {
      key: 'trial',
      name: 'التجريبية',
      orders: '',
      price: 'مجانا',
      perOrder: '20 أوردر هدية',
      saving: '',
      isFree: true,
    },
    {
      key: 'pro',
      name: 'بـاقة المحترفين',
      orders: '200 : 1000',
      price: '500 ج.م',
      perOrder: '2.5 جنيه',
      saving: '',
      isFree: false,
    },
    {
      key: 'growth',
      name: 'بـاقة النمو',
      orders: '300 : 1000',
      price: '1800 ج.م',
      perOrder: '1.8 جنيه',
      saving: 'توفير 20%',
      isFree: false,
    },
    {
      key: 'retail',
      name: 'بـاقة التجار الصغار',
      orders: '300 : 1000',
      price: '1800 ج.م',
      perOrder: '1.8 جنيه',
      saving: 'توفير 28%',
      isFree: false,
    },
    {
      key: 'sme',
      name: 'بـاقة الشركات',
      orders: '2000 : 2000',
      price: '3000 ج.م',
      perOrder: '1.5 جنيه',
      saving: 'توفير 40%',
      isFree: false,
    },
  ]

  const checks = [
    'مفيش اشتراك شهري إجباري',
    'مفيش مصاريف خفية',
    'كل ما تشحن أكتر، سعر الأوردر يقل',
  ]

  return (
    <Section id="pricing" className="bg-slate-50/50">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-black md:text-4xl">
            ادفع على قد استخدامك.. نظام "كارت الشحن" وصل لـ "أكيد"!
          </h2>
          <p className="mb-8 text-gray-600">
            رصيدك مبيخلصش بانتهاء الشهر، اشحن واستخدمه وقت ما تحب.
          </p>
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
        <div className="grid grid-cols-1 gap-0 divide-x divide-gray-200 overflow-hidden rounded-xl border bg-white shadow-sm md:grid-cols-5">
          {tiers.map((tier, idx) => (
            <div
              key={tier.key}
              className={`flex flex-col text-center ${idx !== tiers.length - 1 ? 'border-l border-gray-200' : ''} ${tier.isFree ? 'bg-gray-50/70' : ''}`}
            >
              {/* Tier Name */}
              <div className="flex h-20 flex-col justify-center border-b bg-gray-50/50 p-3 font-bold">
                <span className="mb-1 text-base">{tier.name}</span>
                {tier.orders && !tier.isFree && (
                  <span className="text-xs font-normal text-gray-400">
                    {tier.orders}
                  </span>
                )}
              </div>

              {/* Total Price */}
              <div className="flex min-h-28 flex-col items-center justify-center border-b p-5">
                {tier.isFree ? (
                  <span className="inline-block rounded-lg bg-emerald-500 px-4 py-2 text-base font-bold text-white">
                    {tier.price}
                  </span>
                ) : (
                  <span className="text-2xl font-black text-emerald-600">
                    {tier.price}
                  </span>
                )}
              </div>

              {/* Per Order Price or Free Gift */}
              <div className="flex h-16 flex-col items-center justify-center p-3">
                {tier.isFree ? (
                  <span className="text-sm font-bold text-emerald-500">
                    {tier.perOrder}
                  </span>
                ) : (
                  <div className="flex flex-col items-center gap-1 text-sm font-medium">
                    <span>{tier.perOrder}</span>
                    {tier.saving && (
                      <span className="mt-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-bold text-emerald-700">
                        {tier.saving}
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
            onClick={() =>
              document
                .getElementById('reserve')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            اشحن رصيدك وابدأ الآن
          </Button>
        </div>
      </Container>
    </Section>
  )
}
