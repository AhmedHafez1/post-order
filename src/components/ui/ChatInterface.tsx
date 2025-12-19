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
      text: t('chat.request_location'),
      delay: 1000,
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
      delay: 2000,
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
      className="relative"
    >
      {/* iPhone-style Frame */}
      <div className="relative mx-auto w-80">
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
            <div 
              ref={scrollAreaRef}
              className="h-110 space-y-3 overflow-y-auto bg-amber-50 p-4 scroll-smooth"
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
                    <div
                      className={`max-w-[85%] rounded-2xl p-2 shadow-sm ${
                        message.type === 'user'
                          ? 'rounded-br-md bg-linear-to-br from-emerald-500 to-emerald-600 text-white'
                          : 'rounded-bl-md border border-emerald-100 bg-white text-slate-800'
                      }`}
                    >
                      {message.contentType === 'location' ? (
                        <div className="overflow-hidden rounded-xl bg-slate-100">
                          <div className="relative flex h-24 items-center justify-center bg-slate-200">
                            {/* Simple map pattern/placeholder */}
                            <div className="absolute inset-0 opacity-20" 
                                 style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '10px 10px' }} 
                            />
                            <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 shadow-lg">
                              <MapPin className="h-5 w-5 text-white" fill="currentColor" />
                            </div>
                          </div>
                          <div className="bg-white/90 p-2 backdrop-blur-sm">
                            <div className="flex items-center gap-1 text-xs font-medium text-slate-700">
                              <MapPin className="h-3 w-3" />
                              {message.locationData?.address || 'Selected Location'}
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
                          message.type === 'user'
                            ? 'text-emerald-100'
                            : 'text-gray-400'
                        } px-2`}
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
  )
}
