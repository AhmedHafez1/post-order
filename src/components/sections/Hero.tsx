'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Badge } from '@/components/ui/badge'
import { ArrowDown, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  const t = useTranslations('hero')

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(250,204,21,0.1),transparent_50%)]" />
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 start-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 end-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700" />

      <Container>
        <div className="max-w-5xl mx-auto text-center">
          {/* Urgency badge with animation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-block"
          >
            <Badge 
              variant="secondary" 
              className="px-6 py-3 text-base font-semibold shadow-lg border-2 border-secondary-400 animate-bounce-slow"
            >
              <Sparkles className="w-4 h-4 me-2 inline" />
              {t('urgency')}
            </Badge>
          </motion.div>

          {/* Main headline with gradient text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
          >
            {t('title')}{' '}
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 bg-clip-text text-transparent animate-gradient">
              {t('highlight')}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {t('subtitle')}
          </motion.p>

          {/* Social proof with avatars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-4 border-background bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold shadow-lg"
                >
                  {i}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground font-medium">
              {t('social_proof')}
            </p>
          </motion.div>

          {/* CTA Button with pulsing effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="relative inline-block"
          >
            <div className="absolute inset-0 bg-primary blur-2xl opacity-50 animate-pulse" />
            <Button
              size="lg"
              onClick={scrollToPricing}
              className="relative text-lg px-8 py-6 shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              {t('cta')}
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-16"
          >
            <button
              onClick={scrollToPricing}
              className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-2 mx-auto group"
            >
              <span className="text-sm font-medium">{t.rich('scroll_down', { default: 'استكشف المزيد' })}</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </button>
          </motion.div>
        </div>
      </Container>

      {/* Optional: Add an illustration or mockup image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-0 start-1/2 -translate-x-1/2 w-full max-w-4xl hidden lg:block opacity-20"
      >
        {/* You can add a phone mockup or dashboard preview here */}
      </motion.div>
    </section>
  )
}