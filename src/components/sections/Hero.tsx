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
      block: 'start',
    })
  }

  const stats = [
    { label: t('stat_1'), value: '40%', icon: TrendingUp },
    { label: t('stat_2'), value: '10K+', icon: CheckCircle2 },
    { label: t('stat_3'), value: '5min', icon: CheckCircle2 },
  ]

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="from-primary/10 via-secondary/5 to-background absolute inset-0 bg-gradient-to-br" />
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
          className="bg-primary/20 absolute start-10 top-20 h-32 w-32 rounded-full blur-3xl"
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
          className="bg-secondary/20 absolute end-10 bottom-20 h-40 w-40 rounded-full blur-3xl"
        />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
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
                className="border-secondary-400 cursor-default border-2 px-6 py-3 text-base font-semibold shadow-lg transition-transform hover:scale-105"
              >
                <Sparkles className="me-2 inline h-4 w-4 animate-pulse" />
                {t('urgency')}
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 text-5xl leading-[1.1] font-black md:text-6xl lg:text-7xl"
            >
              {t('title')}{' '}
              <span className="relative inline-block">
                <span className="from-primary-600 via-primary-500 to-primary-400 bg-gradient-to-r bg-clip-text text-transparent">
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
              className="text-muted-foreground mb-8 text-xl leading-relaxed md:text-2xl"
            >
              {t('subtitle')}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8 grid grid-cols-3 gap-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="border-border rounded-xl border bg-white/50 p-4 backdrop-blur transition-shadow hover:shadow-lg"
                >
                  <stat.icon className="text-primary mb-2 h-5 w-5" />
                  <div className="text-foreground text-2xl font-bold">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                onClick={scrollToPricing}
                className="hover:shadow-primary/50 group relative overflow-hidden px-8 py-6 text-lg shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">{t('cta')}</span>
                <div className="from-primary-600 to-primary absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-100" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('solution')}
                className="hover:bg-accent px-8 py-6 text-lg transition-colors"
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
                    className="border-background from-primary-400 to-primary-600 flex h-10 w-10 items-center justify-center rounded-full border-4 bg-gradient-to-br text-xs font-bold text-white shadow-lg"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="text-foreground font-semibold">
                  {t('social_proof')}
                </div>
                <div className="text-muted-foreground">
                  ⭐⭐⭐⭐⭐ {t('rating')}
                </div>
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
              <div className="from-primary/20 to-secondary/20 absolute inset-0 rounded-3xl bg-gradient-to-br blur-3xl" />
              <div className="border-border relative space-y-4 rounded-3xl border-2 bg-white/80 p-8 shadow-2xl backdrop-blur">
                {/* Mock WhatsApp message */}
                <div className="bg-primary/10 space-y-2 rounded-2xl p-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary h-8 w-8 rounded-full" />
                    <div className="text-sm font-semibold">COD Bot</div>
                  </div>
                  <div className="rounded-xl bg-white p-3 text-sm">
                    {t('mock_message')}
                  </div>
                </div>
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                    <div className="text-2xl font-bold text-green-600">85%</div>
                    <div className="text-muted-foreground text-xs">
                      {t('confirmed')}
                    </div>
                  </div>
                  <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                    <div className="text-2xl font-bold text-red-600">15%</div>
                    <div className="text-muted-foreground text-xs">
                      {t('rejected')}
                    </div>
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
          className="absolute start-1/2 bottom-8 -translate-x-1/2"
        >
          <button
            onClick={scrollToPricing}
            className="text-muted-foreground hover:text-primary group flex flex-col items-center gap-2 transition-colors"
          >
            <span className="text-sm font-medium">{t('scroll_down')}</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </button>
        </motion.div>
      </Container>
    </section>
  )
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
