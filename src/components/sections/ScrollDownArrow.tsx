import { motion } from 'framer-motion'
import { ChevronDownIcon } from 'lucide-react'

interface ScrollDownArrowProps {
  to?: string
  className?: string
}

export function ScrollDownArrow({ to, className = '' }: ScrollDownArrowProps) {
  const handleClick = () => {
    if (to) {
      document
        .getElementById(to)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer ${className}`}
      onClick={handleClick}
    >
      <ChevronDownIcon className="h-8 w-8 animate-bounce text-emerald-600" />
    </motion.div>
  )
}

export default ScrollDownArrow
