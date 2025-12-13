import { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'COD Verification Bot',
  description: 'Reduce COD returns by 40% with automated WhatsApp verification',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  ogImage: '/images/og-image.jpg',
  links: {
    whatsapp: `https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_WHATSAPP}`,
    facebook: 'https://facebook.com/yourpage',
    instagram: 'https://instagram.com/yourpage',
  },
}

export const pricing = {
  starter: {
    name: 'starter',
    price: 0.75,
    priceMonthly: null,
    features: ['pay_per_use', 'no_minimum', 'basic_support'],
  },
  pro: {
    name: 'pro',
    price: 299,
    priceMonthly: 299,
    verifications: 500,
    perVerification: 0.6,
    features: [
      'up_to_500',
      'detailed_reports',
      'priority_support',
      'zapier_integration',
    ],
    popular: true,
  },
  enterprise: {
    name: 'enterprise',
    price: 799,
    priceMonthly: 799,
    features: [
      'unlimited_verifications',
      'dedicated_manager',
      'custom_integrations',
      'white_label',
    ],
  },
}

export const features = {
  problems: [
    {
      icon: '💸',
      key: 'financial_loss',
    },
    {
      icon: '📞',
      key: 'time_wasted',
    },
    {
      icon: '📦',
      key: 'stock_locked',
    },
    {
      icon: '😫',
      key: 'constant_worry',
    },
  ],
  solutions: [
    {
      icon: '💰',
      key: 'save_money',
    },
    {
      icon: '⚡',
      key: 'easy_integration',
    },
    {
      icon: '📊',
      key: 'detailed_reports',
    },
    {
      icon: '🇪🇬',
      key: 'egypt_focused',
    },
  ],
}

export const testimonials = [
  {
    name: 'Mohamed Ahmed',
    store: 'Electronics Store, Cairo',
    orders: '500+',
    quote: 'testimonial_1',
  },
]

export const faqs = [
  {
    key: 'money_back',
  },
  {
    key: 'coding_required',
  },
  {
    key: 'platforms',
  },
  {
    key: 'why_pay_now',
  },
]
