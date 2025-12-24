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
      <DialogContent className="px-8 py-6 sm:max-w-lg">
        <DialogHeader className="text-center">
          <DialogTitle className="mb-2 text-center text-2xl font-black">
            {t('reserve_title')}
          </DialogTitle>
          <DialogDescription className="rounded-md bg-emerald-50 px-4 py-2 text-center text-sm font-medium text-emerald-700">
            {t('reserve_subtitle')}
          </DialogDescription>
        </DialogHeader>

        <div className="px-2 py-4">
          <WaitlistForm />
        </div>
      </DialogContent>
    </Dialog>
  )
}
