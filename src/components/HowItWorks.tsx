import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Rise, Rule, Words } from './Kinetic'

const STEPS = [
  { t: 'Watch the training', b: 'About 90 minutes, start to finish. Watch it tonight.' },
  { t: 'Download the cheat-sheet', b: 'All 24 phrases and the slides, printable. Keep it next to your laptop.' },
  { t: 'Use it on your very next call', b: "Stack the phrases in your own voice. This isn't a script. Then bring what happened to office hours." },
]

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] })
  const grow = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="how-it-works" className="relative z-10 w-full scroll-mt-24 pb-32 md:pb-44">
      <div className="mx-auto max-w-[1400px] px-8 md:px-16 lg:px-20">
        <Rise>
          <div className="flex items-baseline gap-5">
            <span className="font-instrument text-[15px] text-gold">04</span>
            <span className="text-[11px] uppercase tracking-[0.24em] text-white/40">Three steps</span>
          </div>
        </Rise>
        <Rule className="mt-5" />

        <h2 className="mt-12 font-instrument text-[44px] leading-[0.95] tracking-[-0.02em] text-white sm:text-[64px] lg:text-[86px]">
          <Words text="How it works" />
        </h2>

        <div ref={ref} className="relative mt-24">
          {/* the line draws itself as you scroll through the three steps */}
          <div className="absolute left-0 right-0 top-[14px] hidden h-px bg-white/10 md:block">
            <motion.div style={{ width: grow }} className="h-px bg-gold" />
          </div>

          <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-10">
            {STEPS.map((s, i) => (
              <Rise key={s.t} delay={i * 0.12}>
                <div className="relative">
                  <div className="hidden md:block">
                    <span className="block h-[29px] w-px bg-transparent" />
                    <span className="absolute left-0 top-[9px] h-[11px] w-[11px] rounded-full border border-gold bg-bg-base" />
                  </div>
                  <div className="font-instrument text-[64px] leading-none text-gold md:mt-6 md:text-[76px]">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mt-6 font-instrument text-[30px] leading-tight text-white lg:text-[36px]">
                    {s.t}
                  </h3>
                  <p className="mt-4 max-w-[34ch] text-[15px] leading-relaxed text-white/50">
                    {s.b}
                  </p>
                </div>
              </Rise>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
