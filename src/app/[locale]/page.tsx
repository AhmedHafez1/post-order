import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import Solution from '@/components/sections/Solution'
import Pricing from '@/components/sections/Pricing'
import Stats from '@/components/sections/Stats'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-0 bg-linear-to-b from-emerald-50 via-white to-slate-50">
      <section className="w-full">
        <Hero />
      </section>
      <section className="w-full border-t border-emerald-100/60 bg-white/80 backdrop-blur">
        <Stats />
      </section>
      <section className="w-full border-t border-emerald-100/60 bg-white">
        <Problem />
      </section>
      <section className="w-full border-t border-emerald-100/60 bg-white">
        <Solution />
      </section>
      <section className="w-full border-t border-emerald-100/60 bg-white/90 backdrop-blur">
        <Pricing />
      </section>
    </main>
  )
}
