'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Bot,
  CheckCheck,
  Clock,
  Package,
  Phone,
  ShoppingBag,
} from 'lucide-react'
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
        // Clear typingTimer on cleanup
        return () => clearTimeout(typingTimer)
      }, 0)
      // Clear typingStartTimer on cleanup
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
      textColor: 'text-green-600',
    },
    {
      label: t('stat_2_label'),
      value: t('stat_2_value'),
      icon: Clock,
      color: 'from-blue-500 to-cyan-500',
      textColor: 'text-blue-600',
    },
    {
      label: t('stat_3_label'),
      value: t('stat_3_value'),
      icon: Package,
      color: 'from-amber-500 to-orange-500',
      textColor: 'text-amber-600',
    },
  ]

  return (
    <section
      id="demo"
      className="relative overflow-hidden bg-linear-to-b from-white to-gray-50 py-24"
    >
      {/* Background Pattern */}
      <div className="bg-size[48px_48px] absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700"
          >
            <Bot className="h-4 w-4" />
            {t('badge')}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-4xl font-black sm:text-5xl"
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
            className="mx-auto max-w-2xl text-xl text-gray-600"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            {/* Phone Frame */}
            <div className="relative mx-auto max-w-sm">
              {/* Shadow */}
              <div className="absolute inset-0 rounded-[3rem] bg-linear-to-br from-emerald-500/20 to-blue-500/20 blur-3xl" />

              {/* Phone */}
              <div className="relative rounded-[3rem] border-8 border-gray-800 bg-gray-900 p-3 shadow-2xl">
                {/* Status Bar */}
                <div className="flex items-center justify-between rounded-t-[2.5rem] bg-gray-100 px-6 py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                    <span className="text-xs font-semibold">9:41</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-4 rounded-sm border-2 border-gray-400" />
                    <div className="text-xs">100%</div>
                  </div>
                </div>

                {/* Chat Header */}
                <div className="flex items-center gap-3 bg-emerald-600 px-4 py-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                    <Bot className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-white">Post Order Bot</div>
                    <div className="flex items-center gap-1 text-xs text-emerald-100">
                      <div className="h-2 w-2 rounded-full bg-green-400" />
                      Online
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="h-125 space-y-3 overflow-y-auto bg-gray-50 p-4">
                  <AnimatePresence>
                    {messages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                            message.type === 'user'
                              ? 'rounded-br-sm bg-emerald-500 text-white'
                              : 'rounded-bl-sm border border-gray-200 bg-white text-gray-800 shadow-sm'
                          }`}
                        >
                          <div className="text-sm whitespace-pre-line">
                            {message.text}
                          </div>
                          <div
                            className={`mt-1 flex items-center justify-end gap-1 ${
                              message.type === 'user'
                                ? 'text-emerald-100'
                                : 'text-gray-400'
                            }`}
                          >
                            <span className="text-xs">
                              {new Date().toLocaleTimeString('en-US', {
                                hour: '2-digit',
                                minute: '2-digit',
                              })}
                            </span>
                            {message.type === 'user' && (
                              <CheckCheck className="h-4 w-4" />
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
                      <div className="rounded-2xl rounded-bl-sm border border-gray-200 bg-white px-4 py-3 shadow-sm">
                        <div className="flex gap-1">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              delay: 0,
                            }}
                            className="h-2 w-2 rounded-full bg-gray-400"
                          />
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              delay: 0.2,
                            }}
                            className="h-2 w-2 rounded-full bg-gray-400"
                          />
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              delay: 0.4,
                            }}
                            className="h-2 w-2 rounded-full bg-gray-400"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Input Bar */}
                <div className="rounded-b-[2.5rem] border-t border-gray-200 bg-white px-4 py-3">
                  <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">
                    <span className="flex-1 text-sm text-gray-400">
                      Type a message...
                    </span>
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats & Features */}
          <div className="space-y-8">
            {/* Live Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="mb-6 text-2xl font-black">{t('stats_title')}</h3>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="group relative"
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-r ${stat.color} rounded-2xl opacity-10 transition-opacity group-hover:opacity-20`}
                  />
                  <div className="relative rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-lg transition-all group-hover:border-gray-300 group-hover:shadow-xl">
                    <div className="flex items-center gap-4">
                      <div
                        className={`rounded-xl bg-linear-to-br p-3 ${stat.color}`}
                      >
                        <stat.icon className="h-6 w-6 text-white" />
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
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="rounded-2xl border-2 border-emerald-200 bg-linear-to-br from-emerald-50 to-blue-50 p-8"
            >
              <h3 className="mb-6 flex items-center gap-2 text-xl font-black">
                <ShoppingBag className="h-6 w-6 text-emerald-600" />
                {t('features_title')}
              </h3>
              <ul className="space-y-4">
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
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    <span className="font-medium text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DynamicDemo
