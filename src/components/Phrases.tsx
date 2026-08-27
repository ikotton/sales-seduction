import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Rise, Rule, Words } from './Kinetic'

const GROUPS = [
  { n: '01', title: 'Openers', body: 'Start conversations that make people lean in instead of guard up.' },
  { n: '02', title: 'Follow-ups', body: 'Revive any conversation without the awkwardness, including one that can’t be answered with "no."' },
  { n: '03', title: 'Objection-handlers', body: 'Dissolve "it’s too expensive," "I need to think," and the know-it-all, without arguing.' },
  { n: '04', title: 'Closers', body: 'Make the yes feel like their idea, and keep it smooth to the finish.' },
]

export default function Phrases() {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bigY = useTransform(scrollYProgress, [0, 1], [120, -120])
  const bigScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1])

  return (
    <section id="phrases" ref={ref} className="relative z-10 w-full scroll-mt-24 overflow-hidden py-32 md:py-44">
      {/* the 24 drifts against the scroll so the section has depth */}
      <motion.div
        aria-hidden="true"
        style={{ y: bigY, scale: bigScale }}
        className="pointer-events-none absolute inset-0 grid select-none place-items-center font-instrument leading-none text-white/[0.035]"
      >
        <span className="text-[42vw]">24</span>
      </motion.div>

      <div className="relative mx-auto max-w-[1400px] px-8 md:px-16 lg:px-20">
        <Rise>
          <div className="flex items-baseline gap-5">
            <span className="font-instrument text-[15px] text-gold">03</span>
            <span className="text-[11px] uppercase tracking-[0.24em] text-white/40">
              Inside the training
            </span>
          </div>
        </Rise>
        <Rule className="mt-5" />

        <h2 className="mt-12 max-w-[16ch] font-instrument text-[44px] leading-[0.95] tracking-[-0.02em] text-white sm:text-[64px] lg:text-[86px]">
          <Words text="24 phrases. Word for word." />
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Rise delay={0.1} className="lg:col-span-7">
            <p className="max-w-[56ch] text-[17px] leading-relaxed text-white/55 md:text-[19px]">
              Not scripts. Twenty-four short, exact phrases: openers, follow-ups,
              objection-handlers, and closers. Each one engineered to lower resistance, make the
              buyer picture the result, and close without pressure.
            </p>
          </Rise>
          <Rise delay={0.18} className="lg:col-span-5">
            <p className="max-w-[46ch] text-[17px] leading-relaxed text-white md:text-[19px]">
              Battle-tested to the tune of over{' '}
              <span className="text-gold">$30 million in sales</span> created by Kotton Grammer.
            </p>
          </Rise>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {GROUPS.map((g, i) => (
            <Rise key={g.title} delay={i * 0.08} parallax={i % 2 ? 22 : 8}>
              <div className="group relative h-full overflow-hidden rounded-[4px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-colors duration-500 hover:border-gold/40">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/20 opacity-0 blur-[60px] transition-opacity duration-700 group-hover:opacity-100"
                />
                <div className="relative flex items-baseline justify-between">
                  <span className="font-instrument text-[56px] leading-none text-gold">6</span>
                  <span className="text-[11px] tracking-[0.2em] text-white/30">{g.n}</span>
                </div>
                <h3 className="relative mt-7 text-[12px] font-medium uppercase tracking-[0.18em] text-white">
                  {g.title}
                </h3>
                <p className="relative mt-3 text-[14px] leading-relaxed text-white/50">{g.body}</p>
              </div>
            </Rise>
          ))}
        </div>

        <Rise delay={0.1}>
          <p className="mx-auto mt-14 max-w-[52ch] text-center text-[15px] text-white/40">
            The phrases themselves are inside the training, along with when to use each one, and
            real call examples of them working.
          </p>
        </Rise>
      </div>
    </section>
  )
}
