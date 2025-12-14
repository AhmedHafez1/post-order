import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Solution } from '@/components/sections/Solution'
import { Pricing } from '@/components/sections/Pricing'

export default function Home() {
  return (
    <main className="from-background to-primary/10 flex min-h-screen flex-col gap-0 bg-linear-to-br via-white">
      <div className="w-full">
        <Hero />
      </div>
      <div className="w-full border-t border-gray-200 dark:border-gray-800">
        <Problem />
      </div>
      <div className="w-full border-t border-gray-200 dark:border-gray-800">
        <Solution />
      </div>
      <div className="w-full border-t border-gray-200 dark:border-gray-800">
        <Pricing />
      </div>
    </main>
  )
}
