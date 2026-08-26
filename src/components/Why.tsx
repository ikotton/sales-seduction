import Reveal from './Reveal'

const STATS = [
  {
    figure: '+14%',
    title: 'One of the fastest-growing fields',
    body: 'Projected growth in sales roles this decade. (Placeholder — edit with your stat.)',
  },
  {
    figure: '$85k+',
    title: 'High pay. No degree required.',
    body: 'What experienced closers earn — commission means no ceiling. (Placeholder.)',
  },
  {
    figure: '#1',
    title: 'The most remote-friendly career',
    body: 'Highest share of fully remote roles of any major field. (Placeholder.)',
  },
]

export default function Why() {
  return (
    <section id="why" className="w-full bg-bg-base py-24 md:py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 border-b border-black/10 pb-8">
          <h2 className="font-display font-light tracking-[-0.03em] leading-[1.05] text-[36px] md:text-[52px] lg:text-[64px] max-w-[14ch] text-[#1a1a1a]">
            Why sales. Why now.
          </h2>
          <p className="text-[13px] tracking-[0.16em] uppercase text-[#8e8e8e] leading-relaxed">
            No product to build. No audience to grow.
            <br />
            Just a skill that pays.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {STATS.map((stat, i) => (
            <Reveal key={stat.figure} delay={i * 0.08}>
              <div className="h-full rounded-2xl bg-white p-8 md:p-10 shadow-[0_1px_2px_rgba(16,18,40,0.04),0_12px_32px_-12px_rgba(16,18,40,0.10)]">
                <div className="font-display font-light leading-none text-[64px] md:text-[76px] text-[#1a1a1a]">
                  {stat.figure}
                </div>
                <div className="mt-6 h-[3px] w-10 rounded-full bg-brand-green" />
                <h3 className="mt-6 text-[15px] font-semibold uppercase tracking-[0.04em] text-[#1a1a1a]">
                  {stat.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#8e8e8e]">{stat.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
