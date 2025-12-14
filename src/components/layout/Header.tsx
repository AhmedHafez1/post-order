'use client'

import { useState, useEffect } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Globe } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Header() {
  const locale = useLocale()
  const t = useTranslations('header')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  const navigation = [
    { name: t('features'), id: 'solution' },
    { name: t('pricing'), id: 'pricing' },
    { name: t('faq'), id: 'faq' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-background/95 border-border border-b shadow-lg backdrop-blur-lg'
          : 'bg-transparent'
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="from-primary to-primary-600 flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br shadow-lg">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="from-primary to-primary-600 bg-linear-to-r bg-clip-text text-xl font-bold text-transparent">
                Post Order
              </h1>
              <p className="text-muted-foreground text-xs">{t('tagline')}</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-primary group relative text-sm font-medium transition-colors"
              >
                {item.name}
                <span className="bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all group-hover:w-full" />
              </motion.button>
            ))}
          </nav>

          {/* CTA + Language Switcher */}
          <div className="hidden items-center gap-4 md:flex">
            <Link href={locale === 'ar' ? '/en' : '/ar'}>
              <Button variant="ghost" size="sm" className="gap-2">
                <Globe className="h-4 w-4" />
                {locale === 'ar' ? 'EN' : 'عربي'}
              </Button>
            </Link>
            <Button
              onClick={() => scrollToSection('pricing')}
              size="sm"
              className="shadow-lg transition-shadow hover:shadow-xl"
            >
              {t('cta')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="hover:bg-accent rounded-lg p-2 transition-colors md:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-border bg-background/95 border-t backdrop-blur-lg md:hidden"
          >
            <Container>
              <nav className="space-y-4 py-6">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-foreground/80 hover:text-primary block w-full py-2 text-start text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="border-border space-y-3 border-t pt-4">
                  <Link
                    href={locale === 'ar' ? '/en' : '/ar'}
                    className="block"
                  >
                    <Button variant="outline" className="w-full gap-2">
                      <Globe className="h-4 w-4" />
                      {locale === 'ar' ? 'English' : 'عربي'}
                    </Button>
                  </Link>
                  <Button
                    onClick={() => scrollToSection('pricing')}
                    className="w-full"
                  >
                    {t('cta')}
                  </Button>
                </div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
