'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { SocialProof } from '../ui/SocialProof'
import { ChevronRight, Zap, ChevronLeft } from 'lucide-react'
import ScrollDownArrow from './ScrollDownArrow'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { ChatInterface } from '../ui/ChatInterface'
import { LogoTicker } from '../ui'
import { useState } from 'react'
import { ReservationModal } from './ReservationModal'

function Hero() {
  const t = useTranslations('hero')
  const pathname = usePathname()
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false)

  // Extract locale from pathname (assuming /[locale]/...)
  const locale = pathname?.split('/')[1] === 'en' ? 'en' : 'ar'

  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative flex min-h-screen flex-col justify-center gap-8 overflow-hidden px-4 pt-20 pb-8 sm:px-6 md:flex-row md:items-end md:gap-16 md:px-12 lg:gap-20 lg:px-24 lg:pb-24 xl:px-48">
      <div className="flex max-w-4xl flex-col items-center text-center md:w-3/5 md:justify-center md:self-stretch">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="my-6 space-y-2 lg:my-10"
        >
          <h1 className="text-3xl leading-tight font-black text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
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
          className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:mb-8 sm:text-lg md:text-xl lg:mb-10"
        >
          {t('subtitle')}
        </motion.p>

        {/* CTAs & Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 flex w-full flex-col items-center justify-center gap-6 md:flex-row lg:mb-8"
        >
          <SocialProof />
          <button
            onClick={() => setIsReservationModalOpen(true)}
            className="group relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-orange-600 to-orange-500 px-6 py-4 text-base font-bold text-white shadow-sm shadow-emerald-500/30 transition-all hover:-translate-y-0.5 hover:shadow-gray-400/70 sm:w-auto sm:px-8 sm:py-5 md:text-lg lg:py-6"
            suppressHydrationWarning
          >
            {t('cta')}
            {locale === 'ar' ? (
              <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 sm:h-5 sm:w-5" />
            ) : (
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
            )}
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 sm:mb-8 lg:mb-10"
        >
          <p className="text-sm font-bold text-slate-600 sm:text-base">
            {t('no_credit_card')}
          </p>
        </motion.div>

        {/* Spacer */}
        <div className="hidden md:flex md:flex-1" />

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
      <div className="flex w-full items-center justify-center md:w-2/5 lg:w-auto">
        <ChatInterface />
      </div>

      {/* Scroll Indicator */}
      <ScrollDownArrow to="problem" className="hidden sm:block" />
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
    </section>
  )
}

export default Hero
