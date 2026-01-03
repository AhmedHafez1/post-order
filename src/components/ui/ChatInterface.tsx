'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Bot, CheckCheck, Clock, MapPin, Zap } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import { DemoMessage } from '@/types/demo-message.model'

export function ChatInterface() {
  const t = useTranslations('demo')
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState<DemoMessage[]>([])
  const [currentStep, setCurrentStep] = useState(0)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const conversation: DemoMessage[] = [
    {
      type: 'bot',
      text: t('chat.bot_1'),
      delay: 1000,
      buttons: [
        { text: t('chat.buttons.confirm'), action: 'confirm' },
        { text: t('chat.buttons.cancel'), action: 'cancel' },
        { text: t('chat.buttons.will_confirm_later'), action: 'later' },
      ],
      selectedAction: 'confirm',
    },
    {
      type: 'user',
      text: t('chat.user_1'),
      delay: 2000,
    },
    {
      type: 'bot',
      text: t('chat.request_location'),
      delay: 2000,
      buttons: [{ text: t('chat.buttons.send_location'), action: 'location' }],
      selectedAction: 'location',
    },
    {
      type: 'user',
      contentType: 'location',
      text: t('chat.location_shared'),
      locationData: {
        lat: 30.0444,
        lng: 31.2357,
        address: '123 El Tahrir Street, Cairo',
      },
      delay: 2500,
    },
    {
      type: 'bot',
      text: t('chat.bot_5'),
      delay: 2000,
    },
    {
      type: 'bot',
      text: t('chat.bot_6'),
      delay: 2500,
    },
  ]

  useEffect(() => {
    if (currentStep >= conversation.length) {
      const resetTimer = setTimeout(() => {
        setMessages([])
        setCurrentStep(0)
      }, 15000)
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

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="relative w-full md:w-auto"
    >
      {/* iPhone-style Frame */}
      <div className="relative mx-auto w-full max-w-[320px] md:w-80">
        {/* Glow effect */}
        <div className="/10 blur-1xl absolute inset-0 rounded-[3rem] bg-linear-to-br from-gray-400/20 to-gray-200" />

        {/* Phone body */}
        <div className="relative rounded-[3rem] border-8 border-slate-900 bg-slate-900 p-2 shadow-2xl">
          {/* Notch */}
          <div className="absolute top-3 left-1/2 z-20 h-6 w-32 -translate-x-1/2 rounded-full bg-slate-900" />

          {/* Screen */}
          <div className="relative overflow-hidden rounded-[2.2rem] bg-white">
            {/* Header */}
            <div className="flex items-center justify-between bg-linear-to-r from-emerald-700 to-emerald-600 px-4 py-4 pt-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md">
                  <Bot className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <div className="font-bold text-white">Akeed</div>
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
            <div
              ref={scrollAreaRef}
              className="h-110 space-y-3 overflow-y-auto scroll-smooth bg-emerald-50 p-4"
            >
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className="flex max-w-[85%] flex-col gap-1">
                      <div
                        className={`rounded-2xl p-2 shadow-sm ${
                          message.type === 'user'
                            ? 'rounded-br-md bg-linear-to-br from-emerald-600 to-emerald-700 text-white'
                            : 'rounded-bl-md border border-emerald-100 bg-white text-slate-800'
                        }`}
                      >
                        {message.contentType === 'location' ? (
                          <div className="overflow-hidden rounded-t-xl bg-slate-100">
                            <div className="relative h-24 w-full overflow-hidden">
                              {/* Map Pattern Background */}
                              <div
                                className="absolute inset-0 bg-[#e5e7eb]"
                                style={{
                                  backgroundImage:
                                    'radial-gradient(#9ca3af 1px, transparent 1px)',
                                  backgroundSize: '12px 12px',
                                }}
                              />
                              {/* Streets/Roads simulation */}
                              <div className="absolute top-3/4 left-0 h-3 w-full -translate-y-1/2 bg-white/60" />
                              <div className="absolute top-0 left-2/3 h-full w-3 -translate-x-1/2 bg-white/60" />

                              {/* Pin */}
                              <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                                <div className="relative">
                                  <div className="absolute -bottom-1 left-1/2 h-2 w-4 -translate-x-1/2 rounded-[50%] bg-black/20 blur-[2px]" />
                                  <MapPin
                                    className="h-8 w-8 text-red-500 drop-shadow-md"
                                    fill="currentColor"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="bg-white/90 p-2.5 backdrop-blur-sm">
                              <div className="flex items-center gap-2">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                                  <MapPin className="h-4 w-4 text-emerald-600" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="truncate text-xs font-semibold text-slate-800">
                                    {t('chat.location_shared')}
                                  </div>
                                  <div className="truncate text-[10px] text-slate-500">
                                    {message.locationData?.address ||
                                      '30.0444, 31.2357'}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="px-2 py-1 text-sm leading-relaxed whitespace-pre-line">
                            {message.text}
                          </div>
                        )}

                        <div
                          className={`mt-1 flex items-center justify-end gap-1 text-xs ${
                            message.type === 'user' ||
                            message.contentType === 'location'
                              ? 'text-emerald-100/80'
                              : 'text-gray-400'
                          } px-1`}
                        >
                          <span>09:4{(index % 5) + 1}</span>
                          {message.type === 'user' && (
                            <CheckCheck className="h-3 w-3" />
                          )}
                        </div>
                      </div>

                      {/* Quick Reply Buttons */}
                      {message.buttons && (
                        <div className="flex w-full flex-col gap-1">
                          {message.buttons.map((btn, idx) => {
                            const isSelected =
                              message.selectedAction === btn.action
                            const isPast = index < messages.length - 1

                            // Determine button style state
                            let buttonStyle =
                              'bg-white text-emerald-600 hover:bg-cyan-50 shadow-sm border-emerald-600' // Default active

                            if (isPast) {
                              if (isSelected) {
                                buttonStyle =
                                  'bg-gray-100 text-gray-500 shadow-none ring-1 ring-gray-200 border-gray-200' // Selected (grayed out)
                              }
                            } else if (
                              !isTyping &&
                              index === messages.length - 1
                            ) {
                              // Current active message
                              buttonStyle =
                                'bg-white text-emerald-600 hover:bg-cyan-50 shadow-sm border-emerald-600'
                            } else {
                              // Typin or not ready yet
                              buttonStyle =
                                'bg-white text-emerald-600 opacity-0 border-emerald-600'
                            }

                            return (
                              <motion.button
                                key={idx}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{
                                  opacity: isPast && !isSelected ? 0.6 : 1,
                                  y: 0,
                                }}
                                transition={{ delay: idx * 0.1 }}
                                className={`w-full rounded-sm py-2.5 text-center text-sm font-medium transition-all active:scale-95 ${buttonStyle}`}
                                disabled={isPast}
                              >
                                {btn.text}
                              </motion.button>
                            )
                          })}
                        </div>
                      )}
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
  )
}
