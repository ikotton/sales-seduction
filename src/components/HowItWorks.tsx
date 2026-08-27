import Reveal from './Reveal'

const STEPS = [
  {
    step: 'Step 1',
    title: 'Watch the training',
    body: 'About 90 minutes, start to finish. Watch it tonight.',
  },
  {
    step: 'Step 2',
    title: 'Download the cheat-sheet',
    body: 'All 24 phrases and the slides, printable. Keep it next to your laptop.',
  },
  {
    step: 'Step 3',
    title: 'Use it on your very next call',
    body: "Stack the phrases in your own voice. This isn't a script. Then bring what happened to office hours.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full bg-bg-base pb-24 md:pb-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20">
        <Reveal>
          <h2 className="font-instrument font-normal tracking-[-0.03em] leading-[1.05] text-[36px] md:text-[52px] lg:text-[64px] text-[#121214]">
            How it works
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3">
          {STEPS.map((item, i) => (
            <Reveal
              key={item.step}
              delay={i * 0.08}
              className={i > 0 ? 'md:border-l md:border-black/[0.09]' : ''}
            >
              <div className={`h-full py-9 md:py-2 ${i > 0 ? 'md:pl-10' : ''} ${i < 2 ? 'md:pr-10' : ''}`}>
                <div className="font-instrument text-[15px] tracking-wide text-champagne">
                  {item.step}
                </div>
                <h3 className="mt-4 font-instrument text-[26px] font-normal leading-tight text-[#121214]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#86827A]">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
