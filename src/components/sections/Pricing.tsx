'use client'

import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { PricingCard } from '@/components/ui/pricing-card'
import { Card, CardContent } from '@/components/ui/card'
import { Accordion } from '@/components/ui/accordion'
import { FAQItem } from '@/components/ui/faq-item'
import { motion } from 'framer-motion'
import { pricing, faqs } from '@/config/site'
import { Shield, CreditCard, Headphones } from 'lucide-react'
import { WaitlistForm } from '@/components/forms/WaitlistForm'

export function Pricing() {
  const t = useTranslations('pricing')
  const tFaq = useTranslations('faq')

  const handleCtaClick = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }

  return (
    <Section
      id="pricing"
      className="bg-linear-to-b from-white via-emerald-50/20 to-white"
    >
      <Container>
        <SectionHeader title={t('title')} subtitle={t('subtitle')} centered />

        {/* Pricing cards */}
        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {/* Starter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <PricingCard
              name={t('starter.name')}
              price={`${pricing.starter.price} جنيه`}
              period={t.rich('per_verification', { default: 'تأكيد' })}
              features={pricing.starter.features.map((f) =>
                t(`starter.features.${f}`)
              )}
              cta={t.rich('select_plan', { default: 'اختر الخطة' })}
              onCtaClick={handleCtaClick}
            />
          </motion.div>

          {/* Pro - Popular */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:-translate-y-4"
          >
            <div className="absolute start-0 end-0 -top-5 z-10 flex justify-center">
              <div className="rounded-full bg-linear-to-r from-amber-400 to-orange-400 px-6 py-2 text-sm font-bold text-gray-900 shadow-lg">
                الأكثر شعبية ⭐
              </div>
            </div>
            <PricingCard
              name={t('pro.name')}
              price={`${pricing.pro.price} جنيه`}
              period={t.rich('month', { default: 'شهر' })}
              description={
                t('pro.up_to') +
                ` (${pricing.pro.perVerification} ${t('pro.per_verification')})`
              }
              features={pricing.pro.features.map((f) => t(`pro.features.${f}`))}
              popular
              cta={t.rich('select_plan', { default: 'اختر الخطة' })}
              onCtaClick={handleCtaClick}
            />
          </motion.div>

          {/* Enterprise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <PricingCard
              name={t('enterprise.name')}
              price={`${pricing.enterprise.price} جنيه`}
              period={t.rich('month', { default: 'شهر' })}
              features={pricing.enterprise.features.map((f) =>
                t(`enterprise.features.${f}`)
              )}
              cta={t.rich('select_plan', { default: 'اختر الخطة' })}
              onCtaClick={handleCtaClick}
            />
          </motion.div>
        </div>

        {/* Waitlist form */}
        <motion.div
          id="waitlist-form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl"
        >
          <Card className="border-2 border-emerald-200 bg-white shadow-2xl backdrop-blur">
            <CardContent className="p-8 md:p-12">
              <div className="mb-8 text-center">
                <h3 className="mb-3 text-3xl font-black">
                  {t('reserve_title')}
                </h3>
                <p className="text-lg text-gray-600">{t('reserve_subtitle')}</p>
              </div>

              <WaitlistForm />

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-emerald-600" />
                  <span>{t('trust_badges.secure')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-emerald-600" />
                  <span>{t('trust_badges.refund')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Headphones className="h-5 w-5 text-emerald-600" />
                  <span>{t('trust_badges.support')}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          id="faq"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <h3 className="mb-8 text-center text-3xl font-black">
            {tFaq('title')}
          </h3>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.key}
                value={`faq-${index}`}
                question={tFaq(`${faq.key}.question`)}
                answer={tFaq(`${faq.key}.answer`)}
              />
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </Section>
  )
}
