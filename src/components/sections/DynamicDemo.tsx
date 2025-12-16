'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, CheckCheck, Clock, TrendingUp, Zap } from 'lucide-react'
import { DemoMessage } from '@/types/demo-message.model'
import { useTranslations } from 'next-intl'

export function DynamicDemo() {
  const t = useTranslations('demo')
  const [currentStep, setCurrentStep] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState<DemoMessage[]>([])

  const conversation: DemoMessage[] = [
    {
      type: 'bot',
      text: t('chat.bot_1'),
      delay: 500,
    },
    {
      type: 'bot',
      text: t('chat.bot_2'),
      delay: 1000,
    },
    {
      type: 'bot',
      text: t('chat.bot_3'),
      delay: 800,
    },
    {
      type: 'bot',
      text: t('chat.bot_4'),
      delay: 800,
    },
    {
      type: 'bot',
      text: t('chat.bot_5'),
      delay: 600,
    },
    {
      type: 'user',
      text: t('chat.user_1'),
      delay: 1500,
    },
    {
      type: 'bot',
      text: t('chat.bot_6'),
      delay: 500,
    },
    {
      type: 'bot',
      text: t('chat.bot_7'),
      delay: 700,
    },
    {
      type: 'user',
      text: t('chat.user_2'),
      delay: 1200,
    },
    {
      type: 'bot',
      text: t('chat.bot_8'),
      delay: 800,
    },
    {
      type: 'bot',
      text: t('chat.bot_9'),
      delay: 900,
    },
  ]

  useEffect(() => {
    if (currentStep >= conversation.length) {
      const resetTimer = setTimeout(() => {
        setMessages([])
        setCurrentStep(0)
      }, 5000)
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

  const stats = [
    {
      label: t('stat_1_label'),
      value: t('stat_1_value'),
      icon: CheckCheck,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
    },
    {
      label: t('stat_2_label'),
      value: t('stat_2_value'),
      icon: Clock,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
    },
    {
      label: t('stat_3_label'),
      value: t('stat_3_value'),
      icon: TrendingUp,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-700',
    },
  ]

  return (
    <section
      id="demo"
      className="relative overflow-hidden bg-linear-to-b from-white via-emerald-50/30 to-white py-24"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-16 -left-24 h-72 w-72 rounded-full bg-emerald-200/20 blur-3xl" />
        <div className="absolute right-[-10%] bottom-10 h-80 w-80 rounded-full bg-emerald-300/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            {/* iPhone-style Frame */}
            <div className="relative mx-auto max-w-sm">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-[3rem] bg-linear-to-br from-emerald-400/20 to-emerald-200/10 blur-2xl" />

              {/* Phone body */}
              <div className="relative rounded-[3rem] border-8 border-slate-900 bg-slate-900 p-2 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-2 left-1/2 z-20 h-6 w-32 -translate-x-1/2 rounded-full bg-slate-900" />

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
                  <div className="h-130 space-y-2 overflow-y-auto bg-slate-50 p-4">
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

          {/* Stats */}
          <div className="space-y-6">
            {/* Title & Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-8 text-3xl leading-tight font-black text-slate-700 sm:text-4xl"
            >
              {t('title')}{' '}
              <span className="bg-linear-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                {t('title_highlight')}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600"
            >
              {t('subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="mb-6 text-2xl font-black text-slate-900">
                {t('stats_title')}
              </h3>
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="group relative overflow-hidden rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.bgColor}`}
                      >
                        <stat.icon className={`h-6 w-6 ${stat.textColor}`} />
                      </div>
                      <div className="flex-1">
                        <div className="mb-1 text-sm font-medium text-gray-600">
                          {stat.label}
                        </div>
                        <div
                          className={`text-3xl font-black ${stat.textColor}`}
                        >
                          {stat.value}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Key Features */}
            {/* <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="rounded-2xl border border-emerald-100 bg-linear-to-br from-emerald-50 to-white p-6 shadow-sm"
            >
              <h3 className="mb-5 flex items-center gap-2 text-xl font-black text-slate-900">
                <Package className="h-6 w-6 text-emerald-600" />
                {t('features_title')}
              </h3>
              <ul className="space-y-3">
                {[
                  t('feature_1'),
                  t('feature_2'),
                  t('feature_3'),
                  t('feature_4'),
                  t('feature_5'),
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 + index * 0.05 }}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <CheckCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    <span className="leading-relaxed font-medium">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DynamicDemo
