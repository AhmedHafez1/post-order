'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const logos = [
  { name: 'Shopify', src: '/images/landing/logos/shopify.png' },
  { name: 'WooCommerce', src: '/images/landing/logos/woo.png' },
  { name: 'Zid', src: '/images/landing/logos/zid.png' },
  { name: 'YouCan', src: '/images/landing/logos/you-can.png' },
  { name: 'EasyOrder', src: '/images/landing/logos/easy-order.png' },
  { name: 'ExpCart', src: '/images/landing/logos/exp-cart.png' },
]

export function LogoTicker() {
  return (
    <div className="overflow-hidden border-y border-gray-200 bg-gradient-to-r from-gray-50 to-white py-4">
      <div className="relative flex">
        {/* First set of logos */}
        <motion.div
          className="flex items-center gap-12 pr-12"
          animate={{
            x: ['0%', '-100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {logos.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="flex-shrink-0 opacity-80 transition-all duration-300 hover:opacity-100"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>

        {/* Second set of logos (duplicate for seamless loop) */}
        <motion.div
          className="flex items-center gap-12 pr-12"
          animate={{
            x: ['0%', '-100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {logos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="flex-shrink-0 opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>

        {/* Third set for extra smoothness */}
        <motion.div
          className="flex items-center gap-12 pr-12"
          animate={{
            x: ['0%', '-100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {logos.map((logo, index) => (
            <div
              key={`logo-3-${index}`}
              className="flex-shrink-0 opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
