'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { usePathname } from 'next/navigation'
import { Phone, Store, Package, CheckCircle, AlertCircle } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z
    .string()
    .regex(/^(\+20|0)?1[0-2,5]\d{8}$/, 'Invalid Egyptian phone number'),
  monthlyOrders: z.string().min(1, 'Please select order volume'),
  platform: z.string().optional().or(z.literal('')),
})

type FormData = z.infer<typeof formSchema>

export function WaitlistForm() {
  const t = useTranslations('form')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const pathname = usePathname()
  const locale = pathname.split('/')[1]

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    console.log({ ...data, locale })
    setIsSubmitting(true)

    // TODO: Send data to actual API endpoint
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1500)
  }

  if (isSuccess) {
    return (
      <div className="py-6 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
          <CheckCircle className="h-8 w-8 text-emerald-600" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-gray-900">
          {t('success_title') || 'تم التسجيل بنجاح! 🎉'}
        </h3>
        <p className="text-sm text-gray-600">
          {t('success_message') || 'سنتواصل معك خلال 24 ساعة على الواتساب'}
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Store Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-700"
        >
          <Store className="h-4 w-4 shrink-0 text-gray-500" />
          <span>{t('name.label')} *</span>
        </label>
        <Input
          id="name"
          type="text"
          {...register('name')}
          placeholder={t('name.placeholder')}
          suppressHydrationWarning
          className={`h-12 text-base transition-colors ${
            errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''
          }`}
        />
        {errors.name && (
          <div className="mt-2 flex items-center gap-1 text-sm text-red-600">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{t('name.required')}</span>
          </div>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label
          htmlFor="phone"
          className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-700"
        >
          <Phone className="h-4 w-4 shrink-0 text-gray-500" />
          <span>{t('phone.label')} *</span>
        </label>
        <Input
          id="phone"
          type="tel"
          {...register('phone')}
          placeholder={t('phone.placeholder')}
          suppressHydrationWarning
          dir="ltr"
          className={`h-12 text-base transition-colors ${
            errors.phone ? 'border-red-500 focus-visible:ring-red-500' : ''
          }`}
        />
        {errors.phone && (
          <div className="mt-2 flex items-center gap-1 text-sm text-red-600">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{t('phone.invalid')}</span>
          </div>
        )}
      </div>

      {/* Platform */}
      <div>
        <label
          htmlFor="platform"
          className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-700"
        >
          <Store className="h-4 w-4 shrink-0 text-gray-500" />
          <span>{t('platform.label')}</span>
        </label>
        <Input
          id="platform"
          type="text"
          {...register('platform')}
          placeholder={t('platform.placeholder')}
          suppressHydrationWarning
          className="h-12 text-base"
        />
      </div>

      {/* Monthly Orders */}
      <div>
        <label
          htmlFor="monthlyOrders"
          className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-700"
        >
          <Package className="h-4 w-4 shrink-0 text-gray-500" />
          <span>{t('monthlyOrders.label')} *</span>
        </label>
        <Controller
          name="monthlyOrders"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger
                suppressHydrationWarning
                className={`h-12 text-base ${
                  errors.monthlyOrders ? 'border-red-500' : ''
                }`}
              >
                <SelectValue placeholder={t('monthlyOrders.placeholder')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-50">
                  {t('monthlyOrders.options.0-50')}
                </SelectItem>
                <SelectItem value="50-200">
                  {t('monthlyOrders.options.50-200')}
                </SelectItem>
                <SelectItem value="200-500">
                  {t('monthlyOrders.options.200-500')}
                </SelectItem>
                <SelectItem value="500-1000">
                  {t('monthlyOrders.options.500-1000')}
                </SelectItem>
                <SelectItem value="1000+">
                  {t('monthlyOrders.options.1000+')}
                </SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.monthlyOrders && (
          <div className="mt-2 flex items-center gap-1 text-sm text-red-600">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{t('monthlyOrders.required')}</span>
          </div>
        )}
      </div>

      {/* Submit Button */}
      <Button
        onClick={handleSubmit(onSubmit)}
        disabled={isSubmitting}
        className="mt-6 w-full bg-linear-to-r from-emerald-600 to-emerald-500 py-6 text-base font-bold shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl active:scale-100 disabled:cursor-not-allowed disabled:opacity-50 sm:text-lg"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            {t('submitting')}
          </span>
        ) : (
          t('submit')
        )}
      </Button>
    </div>
  )
}
