'use client'

import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { motion } from 'framer-motion'
import { PricingCard } from '@/components/ui/pricing-card'
import { Card, CardContent } from '@/components/ui/card'
import { Accordion } from '@/components/ui/accordion'
import { FAQItem } from '@/components/ui/faq-item'
import { pricing, faqs } from '@/config/site'
import { Shield, CreditCard, Headphones, Sparkles } from 'lucide-react'
import { WaitlistForm } from '@/components/forms/WaitlistForm'

function Pricing() {
  const t = useTranslations('pricing')
  const tFaq = useTranslations('faq')

  const handleCtaClick = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }

  // Animation variants for grid
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  }
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <Section
      id="pricing"
      className="via-emerald-25 relative bg-linear-to-b from-white to-white px-8 sm:px-12 md:px-16 lg:px-48"
    >
      <Container>
        {/* Urgency Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-amber-100 to-emerald-50 px-6 py-3 text-sm font-bold text-emerald-800 shadow-lg ring-2 ring-amber-200/50">
            <Sparkles className="h-5 w-5 text-amber-500" />
            {t('urgency')}
          </div>
        </motion.div>

        {/* Section Header (consistent with Problem/Solution) */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-8 text-xl leading-tight font-black text-slate-700 sm:text-2xl lg:text-3xl"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg font-medium text-slate-600 sm:text-xl"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* Pricing cards grid - consistent and responsive */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="mb-14 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 xl:grid-cols-3"
        >
          {/* Starter */}
          <motion.div variants={item}>
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
          <motion.div variants={item} className="relative">
            <div className="absolute start-0 end-0 -top-5 z-10 flex justify-center">
              <div className="rounded-full bg-white px-4 py-1 text-xs font-semibold text-amber-700 shadow-sm ring-1 ring-amber-200">
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
          <motion.div variants={item}>
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
        </motion.div>

        {/* Waitlist form */}
        <motion.div
          id="waitlist-form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl"
        >
          <Card className="border border-emerald-100 bg-white/95 shadow-md backdrop-blur">
            <CardContent className="p-8 md:p-10">
              <div className="mb-8 text-center">
                <h3 className="mb-3 text-3xl font-black">
                  {t('reserve_title')}
                </h3>
                <p className="text-lg text-gray-600">{t('reserve_subtitle')}</p>
              </div>

              <WaitlistForm />

              {/* Trust badges */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-sm text-gray-700">
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
          className="mx-auto max-w-3xl rounded-2xl border border-emerald-100 bg-white/90 p-6 shadow-sm"
        >
          <h3 className="mb-8 text-center text-3xl font-black">
            {tFaq('title')}
          </h3>

          <Accordion type="single" collapsible className="space-y-3">
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

export default Pricing
