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

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z
    .string()
    .regex(/^(\+20|0)?1[0-2,5]\d{8}$/, 'Invalid Egyptian phone number'),
  email: z.string().email('Invalid email address'),
  storeUrl: z.string().url().optional().or(z.literal('')),
  monthlyOrders: z.string().min(1, 'Please select order volume'),
})

type FormData = z.infer<typeof formSchema>

export function WaitlistForm() {
  const t = useTranslations('form')
  const [isSubmitting, setIsSubmitting] = useState(false)
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
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Store Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          {t('name.label')} *
        </label>
        <Input
          id="name"
          type="text"
          {...register('name')}
          placeholder={t('name.placeholder')}
          suppressHydrationWarning
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{t('name.required')}</p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          {t('phone.label')} *
        </label>
        <Input
          id="phone"
          type="tel"
          {...register('phone')}
          placeholder={t('phone.placeholder')}
          suppressHydrationWarning
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{t('phone.invalid')}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          {t('email.label')} *
        </label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder={t('email.placeholder')}
          suppressHydrationWarning
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{t('email.invalid')}</p>
        )}
      </div>

      {/* Store URL (Optional) */}
      <div>
        <label
          htmlFor="storeUrl"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          {t('storeUrl.label')}
        </label>
        <Input
          id="storeUrl"
          type="url"
          {...register('storeUrl')}
          placeholder={t('storeUrl.placeholder')}
          suppressHydrationWarning
        />
      </div>

      {/* Monthly Orders */}
      <div>
        <label
          htmlFor="monthlyOrders"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          {t('monthlyOrders.label')} *
        </label>
        <Controller
          name="monthlyOrders"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger suppressHydrationWarning>
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
          <p className="mt-1 text-sm text-red-600">
            {t('monthlyOrders.required')}
          </p>
        )}
      </div>

      {/* Info Text */}
      <div className="rounded-lg bg-emerald-50 p-4 text-sm text-gray-700">
        {t('info')}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-linear-to-r from-emerald-600 to-emerald-500 py-4 text-lg font-bold shadow-lg transition-all hover:scale-105 hover:shadow-xl disabled:opacity-50"
      >
        {isSubmitting ? t('submitting') : t('submit')}
      </Button>
    </form>
  )
}
