'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Sparkles,
  ChevronRight,
  Star,
  Zap,
  ChevronLeft,
  ChevronDownIcon,
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'

export function Hero() {
  const t = useTranslations('hero')
  const pathname = usePathname()

  // Extract locale from pathname (assuming /[locale]/...)
  const locale = pathname?.split('/')[1] === 'en' ? 'en' : 'ar'

  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative min-h-screen overflow-hidden pt-28 pb-12 sm:pt-28 sm:pb-16">
      {/* Background */}
      <div className="to-emerald-25 absolute inset-0 -z-10 bg-linear-to-br from-emerald-50 via-white" />
      <div className="absolute top-10 -left-32 -z-10 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="absolute -right-20 bottom-20 -z-10 h-80 w-80 rounded-full bg-emerald-200/20 blur-3xl" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Urgency Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-amber-100 to-emerald-50 px-5 py-2.5 text-sm font-semibold text-emerald-800 shadow-sm ring-1 ring-amber-100"
          >
            <Sparkles className="h-4 w-4 text-amber-500" />
            {t('urgency')}
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10 space-y-2"
          >
            <h1 className="text-3xl leading-tight font-black text-slate-900 sm:text-4xl lg:text-5xl">
              {t('title')}{' '}
              <span className="bg-linear-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                {t('highlight')}
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-slate-600 sm:text-2xl"
          >
            {t('subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-4 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button
              onClick={() => scrollToSection('pricing')}
              className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-emerald-600 to-emerald-500 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-emerald-500/30 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/40"
              suppressHydrationWarning
            >
              <Zap className="h-5 w-5" />
              {t('cta')}
              {locale === 'ar' ? (
                <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              ) : (
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              )}
            </button>
            <button
              onClick={() => scrollToSection('demo')}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-emerald-200 bg-white px-8 py-4 text-lg font-bold text-emerald-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
              suppressHydrationWarning
            >
              {t('learn_more')}
            </button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 mb-16 inline-flex items-center gap-4 rounded-2xl border border-emerald-100 bg-white px-6 py-4 shadow-sm"
          >
            <div className="flex -space-x-3">
              <Image
                src="/images/landing/1.jpg"
                alt="Customer 1"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full border-2 border-gray-200 object-cover shadow"
                loading="lazy"
                priority={false}
              />
              <Image
                src="/images/landing/2.jpg"
                alt="Customer 2"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full border-2 border-gray-200 object-cover shadow"
                loading="lazy"
                priority={false}
              />
              <Image
                src="/images/landing/3.jpg"
                alt="Customer 3"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full border-2 border-gray-200 object-cover shadow"
                loading="lazy"
                priority={false}
              />
              <Image
                src="/images/landing/4.jpg"
                alt="Customer 4"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full border-2 border-gray-200 object-cover shadow"
                loading="lazy"
                priority={false}
              />
              <Image
                src="/images/landing/5.jpg"
                alt="Customer 4"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full border-2 border-white object-cover shadow"
                loading="lazy"
                priority={false}
              />
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-200 bg-white text-sm font-bold text-emerald-600 shadow">
                +43
              </div>
            </div>
            <div className="text-left">
              <div className="font-bold text-slate-900">
                {t('social_proof')}
              </div>
              <div className="flex items-center gap-1 text-sm text-slate-600">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
                <span className="ml-1 font-semibold">{t('rating')}</span>
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          >
            <ChevronDownIcon
              className="h-8 w-8 animate-bounce text-emerald-600"
              onClick={() => scrollToSection('demo')}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
