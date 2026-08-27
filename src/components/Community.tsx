import Reveal, { SectionLabel } from './Reveal'

const MONTHS = [
  'Openers that land',
  'Follow-up without cringe',
  '"It’s too expensive"',
  'Live call drills',
  'The know-it-all buyer',
  'Mid-year call reviews',
  'Closing questions',
  'Negotiating your comp',
  'Referrals & repeat buyers',
  'Hard objections, live',
  'Landing the remote role',
  'Your year in review',
]

export default function Community() {
  return (
    <section id="community" className="w-full bg-bg-base py-24 md:py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20">
        <Reveal className="max-w-[64ch]">
          <SectionLabel>You're not doing this alone</SectionLabel>
          <h2 className="mt-4 font-instrument font-normal tracking-[-0.03em] leading-[1.05] text-[36px] md:text-[52px] lg:text-[64px]">
            <span className="text-[#121214]">A community behind you.</span>{' '}
            <span className="text-[#86827A]">A year of live help ahead of you.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          <Reveal>
            <div className="h-full rounded-[3px] bg-[#121214] p-9 md:p-11">
              <p className="text-[11px] tracking-[0.24em] uppercase text-champagne">Included · 01</p>
              <h3 className="mt-4 font-instrument text-[28px] md:text-[32px] font-light text-white">
                The Private Community
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[#a0a0a0]">
                A members-only space to share wins, get feedback on real conversations, and connect
                with other women building a sales career. Ask the question at 11pm; wake up to
                answers.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-[3px] bg-[#121214] p-9 md:p-11">
              <p className="text-[11px] tracking-[0.24em] uppercase text-champagne">Included · 02</p>
              <h3 className="mt-4 font-instrument text-[28px] md:text-[32px] font-light text-white">
                Live Monthly Office Hours
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[#a0a0a0]">
                Twelve live webinars, one every month for a year, open Q&amp;A. Bring the call you're
                stuck on, the objection you keep hearing, the follow-up you're avoiding. Get it worked
                through live.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <div className="mt-5 rounded-[3px] bg-white p-8 md:p-10 border border-black/[0.09] rounded-[3px]">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-instrument text-[22px] font-light text-[#121214]">
                Your next 12 months, mapped
              </h3>
              <p className="text-[13px] text-[#9C978C]">
                Session themes are placeholders. Edit freely.
              </p>
            </div>

            <div className="mt-7 flex gap-3 overflow-x-auto pb-3">
              {MONTHS.map((theme, i) => (
                <div key={theme} className="min-w-[150px] flex-1 border-t-2 border-[#121214] pt-3.5">
                  <div className="text-[11px] uppercase tracking-[0.14em] text-[#86827A]">
                    Month {i + 1}
                  </div>
                  <div className="mt-1.5 text-[14px] leading-snug text-[#121214]">{theme}</div>
                </div>
              ))}
            </div>

            <p className="mt-7 font-instrument text-[20px] font-light text-[#121214]">
              That's a full year of support, for the price of one dinner out.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
