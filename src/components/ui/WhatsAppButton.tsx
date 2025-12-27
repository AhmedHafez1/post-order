'use client'

import { useTranslations } from 'next-intl'
import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  const t = useTranslations('whatsapp_button')

  const handleClick = () => {
    const message = encodeURIComponent(t('message'))
    const phoneNumber = '201148675077'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed right-0 bottom-0 left-0 z-50 mx-auto mb-4 flex min-h-[52px] w-[calc(100%-2rem)] max-w-md transform touch-manipulation items-center justify-center gap-3 rounded-xl bg-green-600 px-6 py-4 text-base font-semibold text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] backdrop-blur-sm transition-all duration-300 ease-out hover:bg-green-500 hover:shadow-[0_12px_32px_rgba(37,211,102,0.5)] active:scale-[0.98] active:bg-green-500 md:hidden"
      style={{
        paddingBottom: 'max(1rem, env(safe-area-inset-bottom))',
      }}
      aria-label={t('text')}
    >
      <span className="truncate">{t('text')}</span>
      <MessageCircle className="h-6 w-6 flex-shrink-0" />
    </button>
  )
}
