import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Rise, Rule, Words } from './Kinetic'

const MONTHS = [
  'Openers that land', 'Follow-up without cringe', '"It’s too expensive"', 'Live call drills',
  'The know-it-all buyer', 'Mid-year call reviews', 'Closing questions', 'Negotiating your comp',
  'Referrals & repeat buyers', 'Hard objections, live', 'Landing the remote role', 'Your year in review',
]

export default function Community() {
  const rail = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: rail, offset: ['start end', 'end start'] })
  // the twelve months slide sideways as the section passes
  const x = useTransform(scrollYProgress, [0, 1], ['4%', '-26%'])

  return (
    <section id="community" className="relative z-10 w-full scroll-mt-24 py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-8 md:px-16 lg:px-20">
        <Rise>
          <div className="flex items-baseline gap-5">
            <span className="font-instrument text-[15px] text-gold">02</span>
            <span className="text-[11px] uppercase tracking-[0.24em] text-white/40">
              You're not doing this alone
            </span>
          </div>
        </Rise>
        <Rule className="mt-5" />

        <h2 className="mt-12 max-w-[18ch] font-instrument text-[44px] leading-[0.95] tracking-[-0.02em] text-white sm:text-[64px] lg:text-[86px]">
          <Words text="A community behind you." />{' '}
          <Words text="A year of live help ahead." accentFrom={0} delay={0.2} />
        </h2>

        <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-2">
          {[
            {
              n: 'Included · 01',
              t: 'The Private Community',
              b: "A members-only space to share wins, get feedback on real conversations, and connect with other women building a sales career. Ask the question at 11pm; wake up to answers.",
            },
            {
              n: 'Included · 02',
              t: 'Live Monthly Office Hours',
              b: "Twelve live webinars, one every month for a year, open Q&A. Bring the call you're stuck on, the objection you keep hearing, the follow-up you're avoiding. Get it worked through live.",
            },
          ].map((c, i) => (
            <Rise key={c.t} delay={i * 0.1} parallax={i ? 24 : 8}>
              <div className="group relative h-full overflow-hidden rounded-[4px] border border-white/10 bg-white/[0.03] p-9 backdrop-blur-md transition-colors duration-500 hover:border-gold/40 md:p-12">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-gold/15 opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-100"
                />
                <p className="relative text-[11px] uppercase tracking-[0.24em] text-gold">{c.n}</p>
                <h3 className="relative mt-5 font-instrument text-[30px] text-white md:text-[38px]">
                  {c.t}
                </h3>
                <p className="relative mt-5 text-[15px] leading-relaxed text-white/55 md:text-[16px]">
                  {c.b}
                </p>
              </div>
            </Rise>
          ))}
        </div>
      </div>

      {/* full-bleed rail so the twelve months read as a track, not a table */}
      <div ref={rail} className="mt-24 overflow-hidden">
        <div className="mx-auto mb-8 flex max-w-[1400px] items-baseline justify-between px-8 md:px-16 lg:px-20">
          <h3 className="font-instrument text-[24px] text-white md:text-[28px]">
            Your next 12 months, mapped
          </h3>
          <p className="text-[12px] uppercase tracking-[0.16em] text-white/35">
            Themes are placeholders
          </p>
        </div>
        <motion.div style={{ x }} className="flex w-max gap-4 px-8">
          {MONTHS.map((theme, i) => (
            <div
              key={theme}
              className="w-[240px] shrink-0 rounded-[4px] border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-[11px] uppercase tracking-[0.18em] text-gold">
                  Month {i + 1}
                </span>
                <span className="font-instrument text-[18px] text-white/20">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="mt-5 text-[15px] leading-snug text-white">{theme}</div>
            </div>
          ))}
        </motion.div>
        <p className="mx-auto mt-10 max-w-[1400px] px-8 font-instrument text-[22px] text-gold md:px-16 lg:px-20 md:text-[26px]">
          That's a full year of support, for the price of one dinner out.
        </p>
      </div>
    </section>
  )
}
