'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function SocialProof() {
  const t = useTranslations('hero')

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="inline-flex w-full flex-col items-center gap-3 rounded-2xl border border-emerald-100 bg-white px-4 py-3 shadow-sm sm:w-auto sm:flex-row sm:gap-4 sm:px-6 sm:py-4"
    >
      <div className="flex -space-x-2 sm:-space-x-3">
        <Image
          src="/images/landing/1.jpg"
          alt="Customer 1"
          width={32}
          height={32}
          className="h-8 w-8 rounded-full border-2 border-gray-200 object-cover shadow sm:h-10 sm:w-10"
          loading="lazy"
          priority={false}
        />
        <Image
          src="/images/landing/2.jpg"
          alt="Customer 2"
          width={32}
          height={32}
          className="h-8 w-8 rounded-full border-2 border-gray-200 object-cover shadow sm:h-10 sm:w-10"
          loading="lazy"
          priority={false}
        />
        <Image
          src="/images/landing/3.jpg"
          alt="Customer 3"
          width={32}
          height={32}
          className="h-8 w-8 rounded-full border-2 border-gray-200 object-cover shadow sm:h-10 sm:w-10"
          loading="lazy"
          priority={false}
        />
        <Image
          src="/images/landing/4.jpg"
          alt="Customer 4"
          width={32}
          height={32}
          className="h-8 w-8 rounded-full border-2 border-gray-200 object-cover shadow sm:h-10 sm:w-10"
          loading="lazy"
          priority={false}
        />
        <Image
          src="/images/landing/5.jpg"
          alt="Customer 4"
          width={32}
          height={32}
          className="h-8 w-8 rounded-full border-2 border-white object-cover shadow sm:h-10 sm:w-10"
          loading="lazy"
          priority={false}
        />
        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-200 bg-white text-xs font-bold text-emerald-600 shadow sm:h-10 sm:w-10 sm:text-sm">
          +499
        </div>
      </div>
      <div className="text-center sm:text-left">
        <div className="text-sm font-bold text-slate-900 sm:text-base">
          {t('social_proof')}
        </div>
        <div className="flex items-center justify-center gap-1 text-xs text-slate-600 sm:justify-start sm:text-sm">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-3 w-3 fill-amber-400 text-amber-400 sm:h-4 sm:w-4"
            />
          ))}
          <span className="ml-1 font-semibold">{t('rating')}</span>
        </div>
      </div>
    </motion.div>
  )
}
