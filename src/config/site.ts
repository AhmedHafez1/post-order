import { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'Post Order',
  description: 'Smart WhatsApp bot for COD order verification',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  ogImage: '/images/og-image.jpg',
  links: {
    whatsapp: `https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_WHATSAPP}`,
    facebook: 'https://facebook.com/yourpage',
    instagram: 'https://instagram.com/yourpage',
    linkesdin: 'https://linkedin.com/company/yourpage',
  },
}

export const pricing = {
  starter: {
    name: 'starter',
    price: 0.75,
    priceMonthly: null,
    features: ['verifications', 'whatsapp', 'templates', 'support'],
  },
  pro: {
    name: 'pro',
    price: 299,
    priceMonthly: 299,
    verifications: 500,
    perVerification: 0.6,
    features: [
      'everything',
      'unlimited',
      'analytics',
      'priority',
      'integrations',
      'custom',
    ],
    popular: true,
  },
  enterprise: {
    name: 'enterprise',
    price: 799,
    priceMonthly: 799,
    features: ['everything', 'stores', 'dedicated', 'custom_ai', 'api', 'sla'],
  },
}

export const features = {
  problems: [
    { key: 'loss', icon: '💸' },
    { key: 'time', icon: '⏰' },
    { key: 'scale', icon: '📈' },
    { key: 'addresses', icon: '📍' },
  ],
  solutions: [
    { key: 'auto', icon: '🤖' },
    { key: 'response', icon: '⚡' },
    { key: 'natural', icon: '💬' },
    { key: 'analytics', icon: '📊' },
  ],
}

export const testimonials = [
  {
    name: 'Ahmed Mahmoud',
    store: 'Electronics Store',
    orders: '850+',
    confirmationsRaise: '+34% Confirmations',
  },
  {
    name: 'Omar Sayed',
    store: 'Clothes Store',
    orders: '600+',
    confirmationsRaise: '+27% Confirmations',
  },
]

export const faqs = [
  { key: 'integration' },
  { key: 'whatsapp' },
  { key: 'arabic' },
  { key: 'pricing' },
]
