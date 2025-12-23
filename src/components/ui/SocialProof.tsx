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
      className="inline-flex items-center gap-4 rounded-2xl border border-emerald-100 bg-white px-6 py-4 shadow-sm"
    >
      <div className="flex -space-x-3">
        <Image
          src="/images/landing/1.jpg"
          alt="Customer 1"
          width={40}
          height={40}
          className="h-10 w-10 rounded-full border-2 border-gray-200 object-cover shadow"
          loading="lazy"
          priority={false}
        />
        <Image
          src="/images/landing/2.jpg"
          alt="Customer 2"
          width={40}
          height={40}
          className="h-10 w-10 rounded-full border-2 border-gray-200 object-cover shadow"
          loading="lazy"
          priority={false}
        />
        <Image
          src="/images/landing/3.jpg"
          alt="Customer 3"
          width={40}
          height={40}
          className="h-10 w-10 rounded-full border-2 border-gray-200 object-cover shadow"
          loading="lazy"
          priority={false}
        />
        <Image
          src="/images/landing/4.jpg"
          alt="Customer 4"
          width={40}
          height={40}
          className="h-10 w-10 rounded-full border-2 border-gray-200 object-cover shadow"
          loading="lazy"
          priority={false}
        />
        <Image
          src="/images/landing/5.jpg"
          alt="Customer 4"
          width={40}
          height={40}
          className="h-10 w-10 rounded-full border-2 border-white object-cover shadow"
          loading="lazy"
          priority={false}
        />
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-200 bg-white text-sm font-bold text-emerald-600 shadow">
          +499
        </div>
      </div>
      <div className="text-left">
        <div className="font-bold text-slate-900">{t('social_proof')}</div>
        <div className="flex items-center gap-1 text-sm text-slate-600">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
          ))}
          <span className="ml-1 font-semibold">{t('rating')}</span>
        </div>
      </div>
    </motion.div>
  )
}
