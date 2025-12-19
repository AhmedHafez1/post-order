'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import {
  Sparkles,
  ChevronRight,
  Star,
  Zap,
  ChevronLeft,
  ChevronDownIcon,
  Bot,
  CheckCheck,
  Clock,
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { DemoMessage } from '@/types/demo-message.model'
import { useEffect, useState } from 'react'

function Hero() {
  const t = useTranslations('hero')
  const pathname = usePathname()
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState<DemoMessage[]>([])
  const [currentStep, setCurrentStep] = useState(0)

  const conversation: DemoMessage[] = [
    {
      type: 'bot',
      text: t('chat.bot_1'),
      delay: 700,
    },
    {
      type: 'user',
      text: t('chat.user_1'),
      delay: 1500,
    },
    {
      type: 'bot',
      text: t('chat.bot_3'),
      delay: 1000,
    },
    {
      type: 'user',
      text: t('chat.user_2'),
      delay: 1500,
    },
    {
      type: 'bot',
      text: t('chat.bot_5'),
      delay: 1000,
    },
    {
      type: 'bot',
      text: t('chat.bot_6'),
      delay: 500,
    },
  ]

  useEffect(() => {
    if (currentStep >= conversation.length) {
      const resetTimer = setTimeout(() => {
        setMessages([])
        setCurrentStep(0)
      }, 13000)
      return () => clearTimeout(resetTimer)
    }

    const message = conversation[currentStep]

    if (message.type === 'bot') {
      const typingStartTimer = setTimeout(() => {
        setIsTyping(true)
        const typingTimer = setTimeout(() => {
          setIsTyping(false)
          setMessages((prev) => [...prev, message])
          setCurrentStep((prev) => prev + 1)
        }, message.delay)
        return () => clearTimeout(typingTimer)
      }, 0)
      return () => clearTimeout(typingStartTimer)
    } else {
      const userTimer = setTimeout(() => {
        setMessages((prev) => [...prev, message])
        setCurrentStep((prev) => prev + 1)
      }, message.delay)

      return () => clearTimeout(userTimer)
    }
  }, [currentStep])

  // Extract locale from pathname (assuming /[locale]/...)
  const locale = pathname?.split('/')[1] === 'en' ? 'en' : 'ar'

  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative flex min-h-screen justify-center gap-32 overflow-hidden pt-28 pb-12 sm:pt-28 sm:pb-16">
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
      {/* Chat Interface */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="relative"
      >
        {/* iPhone-style Frame */}
        <div className="relative mx-auto w-90">
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-[3rem] bg-linear-to-br from-emerald-400/20 to-emerald-200/10 blur-2xl" />

          {/* Phone body */}
          <div className="relative rounded-[3rem] border-8 border-slate-900 bg-slate-900 p-2 shadow-2xl">
            {/* Notch */}
            <div className="absolute top-3 left-1/2 z-20 h-6 w-32 -translate-x-1/2 rounded-full bg-slate-900" />

            {/* Screen */}
            <div className="relative overflow-hidden rounded-[2.2rem] bg-white">
              {/* Header */}
              <div className="flex items-center justify-between bg-linear-to-r from-emerald-500 to-emerald-600 px-4 py-4 pt-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md">
                    <Bot className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Post Order</div>
                    <div className="flex items-center gap-1 text-xs text-emerald-100">
                      <div className="h-2 w-2 animate-pulse rounded-full bg-green-300" />
                      {t('phone_status')}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-white/80">
                  <Clock className="h-4 w-4" />
                  09:41
                </div>
              </div>

              {/* Messages */}
              <div className="h-130 space-y-3 overflow-y-auto bg-amber-50 p-4">
                <AnimatePresence>
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2 shadow-sm ${
                          message.type === 'user'
                            ? 'rounded-br-md bg-linear-to-br from-emerald-500 to-emerald-600 text-white'
                            : 'rounded-bl-md border border-emerald-100 bg-white text-slate-800'
                        }`}
                      >
                        <div className="text-sm leading-relaxed whitespace-pre-line">
                          {message.text}
                        </div>
                        <div
                          className={`mt-1 flex items-center justify-end gap-1 text-xs ${
                            message.type === 'user'
                              ? 'text-emerald-100'
                              : 'text-gray-400'
                          }`}
                        >
                          <span>09:4{(index % 5) + 1}</span>
                          {message.type === 'user' && (
                            <CheckCheck className="h-3 w-3" />
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="rounded-2xl rounded-bl-md border border-emerald-100 bg-white px-4 py-3 shadow-sm">
                      <div className="flex gap-1">
                        {[0, 0.2, 0.4].map((delay, i) => (
                          <motion.div
                            key={i}
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              delay,
                            }}
                            className="h-2 w-2 rounded-full bg-gray-400"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input bar */}
              <div className="border-t border-gray-200 bg-white px-4 py-3">
                <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2.5">
                  <span className="flex-1 text-sm text-gray-400">
                    {t('typing_placeholder')}
                  </span>
                  <Zap className="h-5 w-5 text-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
