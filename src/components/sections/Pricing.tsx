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
    <Section id="pricing" className="bg-gradient-to-b from-background via-primary/5 to-background">
      <Container>
        <SectionHeader 
          title={t('title')}
          subtitle={t('subtitle')}
          centered
        />

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
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
          >
            <PricingCard
              name={t('pro.name')}
              price={`${pricing.pro.price} جنيه`}
              period={t.rich('month', { default: 'شهر' })}
              description={t('pro.up_to') + ` (${pricing.pro.perVerification} ${t('pro.per_verification')})`}
              features={pricing.pro.features.map((f) =>
                t(`pro.features.${f}`)
              )}
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
          className="max-w-2xl mx-auto mb-16"
        >
          <Card className="shadow-2xl border-2 border-primary/20 bg-white/80 backdrop-blur">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-3">
                  {t('reserve_title')}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {t('reserve_subtitle')}
                </p>
              </div>

              <WaitlistForm />

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>{t('trust_badges.secure')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <span>{t('trust_badges.refund')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Headphones className="w-5 h-5 text-primary" />
                  <span>{t('trust_badges.support')}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
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