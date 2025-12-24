'use client'
import { useTranslations } from 'next-intl'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { WaitlistForm } from '@/components/forms/WaitlistForm'
import { Shield, CreditCard, Headphones } from 'lucide-react'

interface ReservationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const t = useTranslations('reservation')

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader className="text-center">
          <DialogTitle className="mb-2 text-2xl font-black">
            {t('reserve_title')}
          </DialogTitle>
          <DialogDescription className="text-md text-gray-600">
            {t('reserve_subtitle')}
          </DialogDescription>
        </DialogHeader>

        <div className="px-2 py-4">
          <WaitlistForm />
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t pt-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-emerald-600" />
            <span>{t('trust_badges.secure')}</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="h-4 w-4 text-emerald-600" />
            <span>{t('trust_badges.refund')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Headphones className="h-4 w-4 text-emerald-600" />
            <span>{t('trust_badges.support')}</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
