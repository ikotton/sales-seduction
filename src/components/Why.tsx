import Reveal from './Reveal'

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
    <section id="why" className="w-full bg-bg-base py-24 md:py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 border-b border-black/10 pb-8">
          <h2 className="font-instrument font-normal tracking-[-0.03em] leading-[1.05] text-[36px] md:text-[52px] lg:text-[64px] max-w-[14ch] text-[#121214]">
            Why sales. Why now.
          </h2>
          <p className="text-[13px] tracking-[0.16em] uppercase text-[#86827A] leading-relaxed">
            No product to build. No audience to grow.
            <br />
            Just a skill that pays.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-14">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.figure}
              delay={i * 0.08}
              className={i > 0 ? 'md:border-l md:border-black/[0.09]' : ''}
            >
              <div className={`h-full py-10 md:py-2 ${i > 0 ? 'md:pl-10' : ''} ${i < 2 ? 'md:pr-10' : ''}`}>
                <div className="font-instrument font-normal leading-none text-[64px] md:text-[80px] text-[#121214]">
                  {stat.figure}
                </div>
                <div className="mt-7 h-px w-12 bg-champagne" />
                <h3 className="mt-6 text-[12px] font-medium uppercase tracking-[0.16em] text-[#121214]">
                  {stat.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#86827A]">{stat.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
