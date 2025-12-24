'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe, Zap } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { ReservationModal } from '../sections/ReservationModal'

export function Header() {
  const t = useTranslations('header')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  // Extract locale from pathname (assuming /[locale]/...)
  const locale = pathname?.split('/')[1] === 'en' ? 'en' : 'ar'

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
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  const navigation = [
    { name: t('features'), id: 'solution' },
    { name: t('pricing'), id: 'pricing' },
    { name: t('faq'), id: 'faq' },
  ]

  // Change language by updating the locale in the URL
  const handleLocaleChange = () => {
    const newLocale = locale === 'ar' ? 'en' : 'ar'
    // Remove current locale from pathname and add new one
    const segments = pathname?.split('/') || []
    if (segments.length > 1) {
      segments[1] = newLocale
      const newPath = segments.join('/') || '/'
      router.push(newPath)
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-400 ${
          isScrolled
            ? 'border-b border-emerald-100/70 bg-white/85 shadow-sm backdrop-blur-md'
            : 'bg-white/60 backdrop-blur'
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 xl:mx-46">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="group flex cursor-pointer items-center gap-3"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-emerald-500 to-emerald-600 opacity-30 blur-md transition-opacity group-hover:opacity-60" />
                <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-500 to-emerald-600 shadow-md">
                  <Zap className="h-6 w-6 text-white" fill="white" />
                </div>
              </div>
              <div>
                <h1 className="bg-linear-to-r from-emerald-600 to-emerald-500 bg-clip-text text-xl font-black text-transparent">
                  Post Order
                </h1>
                <p className="text-xs font-medium text-gray-600">
                  {t('tagline')}
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-2 md:flex">
              {navigation.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>

            {/* CTA + Language */}
            <div className="hidden items-center gap-3 md:flex">
              <button
                onClick={handleLocaleChange}
                className="flex items-center gap-2 rounded-full border border-emerald-100/70 bg-white/80 px-3 py-1.5 text-sm font-semibold text-gray-700 transition-colors hover:border-emerald-200 hover:text-emerald-700"
                suppressHydrationWarning
              >
                <Globe className="h-4 w-4" />
                <span>{locale === 'ar' ? 'EN' : 'عربي'}</span>
              </button>
              <button
                onClick={() => setIsReservationModalOpen(true)}
                className="group hover:-translate-y- relative overflow-hidden rounded-lg bg-linear-to-r from-emerald-600 to-emerald-500 px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:shadow-lg"
                suppressHydrationWarning
              >
                <span className="relative z-10">{t('cta')}</span>
                <div className="absolute inset-0 bg-linear-to-r from-emerald-500 to-emerald-400 opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-xl p-2 transition-colors hover:bg-gray-100 md:hidden"
              suppressHydrationWarning
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-xl md:hidden"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <nav className="space-y-1 py-6">
                  {navigation.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full rounded-lg px-4 py-3 text-left text-base font-semibold text-gray-700 transition-colors hover:bg-emerald-50 hover:text-emerald-600"
                    >
                      {item.name}
                    </motion.button>
                  ))}
                  <div className="mt-4 space-y-3 border-t border-gray-200 pt-4">
                    <button
                      onClick={handleLocaleChange}
                      className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-gray-300 px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
                    >
                      <Globe className="h-5 w-5" />
                      {locale === 'ar' ? 'English' : 'عربي'}
                    </button>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        setIsReservationModalOpen(true)
                      }}
                      className="w-full rounded-lg bg-linear-to-r from-emerald-600 to-emerald-500 px-4 py-3 text-base font-bold text-white shadow-lg"
                    >
                      {t('cta')}
                    </button>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <ReservationModal
          isOpen={isReservationModalOpen}
          onClose={() => setIsReservationModalOpen(false)}
        />
      </header>
    </>
  )
}

export default Header
