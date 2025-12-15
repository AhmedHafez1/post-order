import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Solution } from '@/components/sections/Solution'
import { Pricing } from '@/components/sections/Pricing'
import DynamicDemo from '@/components/sections/DynamicDemo'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-0 bg-linear-to-br from-emerald-50 via-white to-amber-50">
      <div className="w-full">
        <Hero />
      </div>
      <div className="w-full border-t-2 border-gray-200">
        <DynamicDemo />
      </div>
      <div className="w-full border-t-2 border-gray-200">
        <Problem />
      </div>
      <div className="w-full border-t-2 border-gray-200">
        <Solution />
      </div>
      <div className="w-full border-t-2 border-gray-200">
        <Pricing />
      </div>
    </main>
  )
}
