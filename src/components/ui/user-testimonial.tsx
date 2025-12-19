import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useTranslations } from 'next-intl'

export interface TestimonialData {
  name: string
  store: string
  orders: string
  confirmationsRaise: string
}
const Testimonial = ({ testimonial }: { testimonial: TestimonialData }) => {
  const t = useTranslations('solution')
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-xl border-2 border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-green-50 p-8 shadow-xl md:w-3xl md:p-10"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, #10b981 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative">
        {/* Stars */}
        <div className="mb-6 flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-7 w-7 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="mb-6 text-center">
          <p className="text-xl leading-relaxed font-medium text-slate-800 italic md:text-2xl">
            {t('testimonial_1')}
          </p>
        </blockquote>

        {/* Author */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-emerald-600 text-2xl font-bold text-white shadow-lg ring-4 ring-white">
            {testimonial.name.charAt(0)}
          </div>
          <div className="text-center sm:text-left">
            <div className="text-lg font-bold text-slate-900">
              {testimonial.name}
            </div>
            <div className="text-sm text-slate-600">
              {testimonial.store} • {testimonial.orders} {t('orders_monthly')}
            </div>
          </div>
          <div className="sm:ml-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-emerald-600 to-emerald-500 px-4 py-2 text-sm font-bold text-white shadow-md">
              {testimonial.confirmationsRaise}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative glows */}
      <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-emerald-300/30 blur-3xl" />
      <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-green-300/30 blur-3xl" />
    </motion.div>
  )
}

export default Testimonial
