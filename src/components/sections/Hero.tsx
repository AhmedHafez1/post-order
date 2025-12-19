'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { SocialProof } from '../ui/SocialProof'
import {
  Sparkles,
  ChevronRight,
  Zap,
  ChevronLeft,
  ChevronDownIcon,
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { ChatInterface } from '../ui/ChatInterface'

function Hero() {
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
    <section className="relative flex min-h-screen justify-center gap-20 overflow-hidden pt-28 pb-12 sm:pt-28 sm:pb-16">
      {/* Background */}
      <div className="to-emerald-25 absolute inset-0 -z-10 bg-linear-to-br from-emerald-50 via-white" />
      <div className="absolute top-10 -left-32 -z-10 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="absolute -right-20 bottom-20 -z-10 h-80 w-80 rounded-full bg-emerald-200/20 blur-3xl" />

      <div className="px-4 sm:px-6 lg:px-8">
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
          <SocialProof />

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
      {/* Chat Interface */}
      <ChatInterface />
    </section>
  )
}

export default Hero
