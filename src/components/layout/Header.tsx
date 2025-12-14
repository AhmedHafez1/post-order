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
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-lg shadow-lg border-b border-border'
          : 'bg-transparent'
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
                Post Order
              </h1>
              <p className="text-xs text-muted-foreground">
                {t('tagline')}
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </motion.button>
            ))}
          </nav>

          {/* CTA + Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <Link href={locale === 'ar' ? '/en' : '/ar'}>
              <Button variant="ghost" size="sm" className="gap-2">
                <Globe className="w-4 h-4" />
                {locale === 'ar' ? 'EN' : 'عربي'}
              </Button>
            </Link>
            <Button
              onClick={() => scrollToSection('pricing')}
              size="sm"
              className="shadow-lg hover:shadow-xl transition-shadow"
            >
              {t('cta')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
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
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg"
          >
            <Container>
              <nav className="py-6 space-y-4">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-start text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-4 border-t border-border space-y-3">
                  <Link href={locale === 'ar' ? '/en' : '/ar'} className="block">
                    <Button variant="outline" className="w-full gap-2">
                      <Globe className="w-4 h-4" />
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