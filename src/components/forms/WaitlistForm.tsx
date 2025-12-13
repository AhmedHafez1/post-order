'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations, useLocale } from 'next-intl'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PhoneInput } from '@/components/ui/phone-input'
import { LoadingButton } from '@/components/ui/loading-button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from 'react-hot-toast'
import { WaitlistFormData } from '@/types'

const formSchema = z.object({
  name: z.string().min(2, 'Name too short'),
  email: z.string().email('Invalid email'),
  phone: z.string().regex(/^(20)?(10|11|12|15)[0-9]{8}$/, 'Invalid Egyptian phone'),
  storeUrl: z.string().url().optional().or(z.literal('')),
  monthlyOrders: z.string().min(1, 'Please select'),
})

export function WaitlistForm() {
  const t = useTranslations('form')
  const locale = useLocale()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true)

    try {
      // Step 1: Save to Google Sheets
      const saveResponse = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, locale }),
      })

      if (!saveResponse.ok) throw new Error('Failed to save')

      // Step 2: Initiate payment
      const paymentResponse = await fetch('/api/paymob', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: 100, // 1 EGP
          email: data.email,
          phone: data.phone,
          name: data.name,
        }),
      })

      if (!paymentResponse.ok) throw new Error('Payment failed')

      const { paymentUrl } = await paymentResponse.json()

      // Redirect to payment
      window.location.href = paymentUrl
    } catch (error) {
      console.error('Error:', error)
      toast.error(t('error'))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <Label htmlFor="name">{t('name.label')}</Label>
        <Input
          id="name"
          {...register('name')}
          placeholder={t('name.placeholder')}
          className="mt-2"
        />
        {errors.name && (
          <p className="text-sm text-destructive mt-1">
            {t('name.required')}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <Label htmlFor="phone">{t('phone.label')}</Label>
        <PhoneInput
          id="phone"
          {...register('phone')}
          className="mt-2"
        />
        {errors.phone && (
          <p className="text-sm text-destructive mt-1">
            {t('phone.invalid')}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email">{t('email.label')}</Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder={t('email.placeholder')}
          dir="ltr"
          className="mt-2"
        />
        {errors.email && (
          <p className="text-sm text-destructive mt-1">
            {t('email.invalid')}
          </p>
        )}
      </div>

      {/* Store URL (optional) */}
      <div>
        <Label htmlFor="storeUrl">{t('storeUrl.label')}</Label>
        <Input
          id="storeUrl"
          {...register('storeUrl')}
          placeholder={t('storeUrl.placeholder')}
          dir="ltr"
          className="mt-2"
        />
      </div>

      {/* Monthly Orders */}
      <div>
        <Label htmlFor="monthlyOrders">{t('monthlyOrders.label')}</Label>
        <Select onValueChange={(value) => setValue('monthlyOrders', value)}>
          <SelectTrigger className="mt-2">
            <SelectValue placeholder={t('monthlyOrders.placeholder')} />
          </SelectTrigger>
          <SelectContent>
            {['0-50', '50-200', '200-500', '500-1000', '1000+'].map((range) => (
              <SelectItem key={range} value={range}>
                {t(`monthlyOrders.options.${range}`)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.monthlyOrders && (
          <p className="text-sm text-destructive mt-1">
            {t('monthlyOrders.required')}
          </p>
        )}
      </div>

      {/* Submit */}
      <LoadingButton
        type="submit"
        loading={isSubmitting}
        loadingText={t('submitting')}
        className="w-full"
        size="lg"
      >
        {t('submit')}
      </LoadingButton>

      <p className="text-xs text-center text-muted-foreground">
        {t('info')}
      </p>
    </form>
  )
}