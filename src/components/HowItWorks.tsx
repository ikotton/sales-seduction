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
    body: "Stack the phrases in your own voice — this isn't a script. Then bring what happened to office hours.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full bg-bg-base pb-24 md:pb-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20">
        <Reveal>
          <h2 className="font-display font-light tracking-[-0.03em] leading-[1.05] text-[36px] md:text-[52px] lg:text-[64px] text-[#1a1a1a]">
            How it works
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {STEPS.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.08}>
              <div className="h-full rounded-2xl bg-white p-8 shadow-[0_1px_2px_rgba(16,18,40,0.04),0_12px_32px_-12px_rgba(16,18,40,0.10)]">
                <div className="inline-flex items-center rounded-full bg-bg-base px-3 py-1 font-display text-[13px] text-[#1a1a1a]">
                  {item.step}
                </div>
                <h3 className="mt-5 text-[18px] font-semibold text-[#1a1a1a]">{item.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-[#8e8e8e]">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
