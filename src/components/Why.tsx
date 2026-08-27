import { Count, Rise, Rule, Words } from './Kinetic'

const STATS = [
  {
    figure: '+14%',
    title: 'One of the fastest-growing fields',
    body: 'Projected growth in sales roles this decade. (Placeholder. Edit with your stat.)',
  },
  {
    figure: '$85k+',
    title: 'High pay. No degree required.',
    body: 'What experienced closers earn. Commission means no ceiling. (Placeholder.)',
  },
  {
    figure: '#1',
    title: 'The most remote-friendly career',
    body: 'Highest share of fully remote roles of any major field. (Placeholder.)',
  },
]

export default function Why() {
  return (
    <section id="why" className="relative z-10 w-full scroll-mt-24 py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-8 md:px-16 lg:px-20">
        <Rise>
          <div className="flex items-baseline gap-5">
            <span className="font-instrument text-[15px] text-gold">01</span>
            <span className="text-[11px] uppercase tracking-[0.24em] text-white/40">The case</span>
          </div>
        </Rise>
        <Rule className="mt-5" />

        <div className="mt-12 flex flex-wrap items-end justify-between gap-x-16 gap-y-8">
          <h2 className="font-instrument text-[44px] leading-[0.95] tracking-[-0.02em] text-white sm:text-[64px] lg:text-[86px] xl:text-[98px]">
            <Words text="Why sales." /> <Words text="Why now." accentFrom={0} delay={0.18} />
          </h2>
          <Rise delay={0.2}>
            <p className="max-w-[30ch] text-[13px] uppercase leading-relaxed tracking-[0.18em] text-white/45">
              No product to build. No audience to grow.
              <br />
              Just a skill that pays.
            </p>
          </Rise>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-10">
          {STATS.map((stat, i) => (
            <Rise key={stat.figure} delay={i * 0.1} parallax={i === 1 ? 26 : 14}>
              <div
                className={`group relative h-full ${
                  i > 0 ? 'md:border-l md:border-white/10 md:pl-10' : ''
                }`}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-10 -top-16 h-56 w-56 rounded-full bg-gold/10 opacity-0 blur-[70px] transition-opacity duration-700 group-hover:opacity-100"
                />
                <div className="relative font-instrument leading-[0.82] text-white text-[84px] md:text-[104px] lg:text-[132px]">
                  <Count value={stat.figure} />
                </div>
                <div className="relative mt-8 h-px w-14 bg-gold" />
                <h3 className="relative mt-7 text-[12px] font-medium uppercase tracking-[0.18em] text-white">
                  {stat.title}
                </h3>
                <p className="relative mt-4 max-w-[34ch] text-[15px] leading-relaxed text-white/50">
                  {stat.body}
                </p>
              </div>
            </Rise>
          ))}
        </div>
      </div>
    </section>
  )
}
