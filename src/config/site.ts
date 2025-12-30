import { SiteConfig } from '@/types'
import { Tier } from '@/types/tier.model'

export const siteConfig: SiteConfig = {
  name: 'Akeed',
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

export const pricing: { tiers: Tier[] } = {
  tiers: [
    {
      key: 'trial',
      orders: 20,
      price: 0,
      perOrder: 0,
      isFree: true,
      ordersDisplay: null, // Will show free badge
    },
    {
      key: 'growth',
      orders: 200,
      price: 400,
      perOrder: 2,
      ordersDisplay: '200',
    },
    {
      key: 'pro',
      orders: 500,
      price: 900,
      perOrder: 1.8,
      saving: 10,
      ordersDisplay: '500',
    },
    {
      key: 'merchant',
      orders: 1000,
      price: 1500,
      perOrder: 1.5,
      saving: 25,
      ordersDisplay: '1000',
    },
    {
      key: 'corporate',
      orders: 2000,
      price: 2400,
      perOrder: 1.2,
      saving: 40,
      ordersDisplay: '2000',
    },
  ],
}

export const features = {
  problems: [
    { key: 'loss', icon: '💸' },
    { key: 'time', icon: '⏰' },
    { key: 'scale', icon: '📈' },
    { key: 'address', icon: '📍' },
  ],
  howItWorks: [
    { key: 'connect', icon: '🔗' },
    { key: 'automation', icon: '🤖' },
    { key: 'ship', icon: '🚚' },
  ],
  solutions: [
    { key: 'auto', icon: '🤖' },
    { key: 'response', icon: '⚡' },
    { key: 'fast-confirm', icon: '🚀' },
    { key: 'location', icon: '🌍' },
    { key: 'save-time', icon: '⌛' },
    { key: 'integration', icon: '🔗' },
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
  { key: 'easy_integration' },
  { key: 'arabic' },
  { key: 'whatsapp_api' },
  { key: 'unconfirmed_order' },
  { key: 'customize_messages' },
]
