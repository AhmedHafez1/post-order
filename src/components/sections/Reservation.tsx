'use client'
import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Card, CardContent } from '@/components/ui/card'
import { WaitlistForm } from '@/components/forms/WaitlistForm'
import { Shield, CreditCard, Headphones } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Reservation() {
  const t = useTranslations('reservation')

  return (
    <section id="reserve" className="bg-white py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <Card className="border border-emerald-100 bg-white/95 shadow-xl backdrop-blur">
            <CardContent className="p-8 md:p-10">
              <div className="mb-8 text-center">
                <h3 className="mb-3 text-3xl font-black">
                  {t('reserve_title')}
                </h3>
                <p className="text-lg text-gray-600">{t('reserve_subtitle')}</p>
              </div>

              <WaitlistForm />

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 border-t pt-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-emerald-600" />
                  <span>{t('trust_badges.secure')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-emerald-600" />
                  <span>{t('trust_badges.refund')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Headphones className="h-4 w-4 text-emerald-600" />
                  <span>{t('trust_badges.support')}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </section>
  )
}
