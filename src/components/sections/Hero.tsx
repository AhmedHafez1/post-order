'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { SocialProof } from '../ui/SocialProof'
import { ChevronRight, Zap, ChevronLeft, ChevronDownIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { ChatInterface } from '../ui/ChatInterface'
import { LogoTicker } from '../ui'

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
    <section className="relative flex min-h-screen flex-col justify-center gap-24 overflow-hidden px-16 pt-28 pb-12 sm:pt-28 sm:pb-16 md:flex-row">
      <div className="mb-8 flex max-w-4xl flex-col items-center text-center sm:px-6 md:w-3/5 lg:mb-16 lg:px-8">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 space-y-2"
        >
          <h1 className="text-2xl leading-tight font-black text-slate-900 sm:text-3xl lg:text-4xl">
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
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl"
        >
          {t('subtitle')}
        </motion.p>

        {/* CTAs & Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <SocialProof />
          <button
            onClick={() => scrollToSection('pricing')}
            className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-emerald-600 to-emerald-500 px-8 py-6 text-lg font-bold text-white shadow-sm shadow-emerald-500/30 transition-all hover:-translate-y-0.5 hover:shadow-gray-400/70"
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <p className="text-md font-bold text-slate-600">
            {t('no_credit_card')}
          </p>
        </motion.div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Logo Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <LogoTicker />
        </motion.div>
      </div>

      {/* Chat Interface */}
      <ChatInterface />

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
    </section>
  )
}

export default Hero
