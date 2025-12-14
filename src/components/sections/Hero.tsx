'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Badge } from '@/components/ui/badge'
import { ArrowDown, Sparkles, CheckCircle2, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Hero() {
  const t = useTranslations('hero')

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  const stats = [
    { label: t('stat_1'), value: '40%', icon: TrendingUp },
    { label: t('stat_2'), value: '10K+', icon: CheckCircle2 },
    { label: t('stat_3'), value: '5min', icon: CheckCircle2 },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(250,204,21,0.15),transparent_50%)]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Floating orbs */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 start-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-20 end-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"
        />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Urgency badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-block"
            >
              <Badge 
                variant="secondary" 
                className="px-6 py-3 text-base font-semibold shadow-lg border-2 border-secondary-400 hover:scale-105 transition-transform cursor-default"
              >
                <Sparkles className="w-4 h-4 me-2 inline animate-pulse" />
                {t('urgency')}
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1]"
            >
              {t('title')}{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 bg-clip-text text-transparent">
                  {t('highlight')}
                </span>
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M2 10C50 2 150 2 298 10"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-primary"
                  />
                </motion.svg>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
            >
              {t('subtitle')}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 mb-8"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/50 backdrop-blur border border-border rounded-xl p-4 hover:shadow-lg transition-shadow"
                >
                  <stat.icon className="w-5 h-5 text-primary mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={scrollToPricing}
                className="text-lg px-8 py-6 shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 relative group overflow-hidden"
              >
                <span className="relative z-10">{t('cta')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('solution')}
                className="text-lg px-8 py-6 hover:bg-accent transition-colors"
              >
                {t('learn_more')}
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-4 border-background bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-xs font-bold shadow-lg"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="font-semibold text-foreground">{t('social_proof')}</div>
                <div className="text-muted-foreground">⭐⭐⭐⭐⭐ {t('rating')}</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Visual/Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Placeholder for phone mockup or dashboard screenshot */}
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <div className="relative bg-white/80 backdrop-blur border-2 border-border rounded-3xl shadow-2xl p-8 space-y-4">
                {/* Mock WhatsApp message */}
                <div className="bg-primary/10 rounded-2xl p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-full" />
                    <div className="text-sm font-semibold">COD Bot</div>
                  </div>
                  <div className="bg-white rounded-xl p-3 text-sm">
                    {t('mock_message')}
                  </div>
                </div>
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <div className="text-2xl font-bold text-green-600">85%</div>
                    <div className="text-xs text-muted-foreground">{t('confirmed')}</div>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <div className="text-2xl font-bold text-red-600">15%</div>
                    <div className="text-xs text-muted-foreground">{t('rejected')}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 start-1/2 -translate-x-1/2"
        >
          <button
            onClick={scrollToPricing}
            className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-2 group"
          >
            <span className="text-sm font-medium">{t('scroll_down')}</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </motion.div>
      </Container>
    </section>
  )
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}