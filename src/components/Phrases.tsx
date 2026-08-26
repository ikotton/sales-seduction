import Reveal, { SectionLabel } from './Reveal'

const GROUPS = [
  {
    title: 'Openers',
    body: 'Start conversations that make people lean in instead of guard up.',
  },
  {
    title: 'Follow-ups',
    body: 'Revive any conversation without the awkwardness — including one that can’t be answered with "no."',
  },
  {
    title: 'Objection-handlers',
    body: 'Dissolve "it’s too expensive," "I need to think," and the know-it-all — without arguing.',
  },
  {
    title: 'Closers',
    body: 'Make the yes feel like their idea — and keep it smooth to the finish.',
  },
]

export default function Phrases() {
  return (
    <section id="phrases" className="relative w-full overflow-hidden bg-bg-base py-24 md:py-32 scroll-mt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid place-items-center font-display font-light leading-none text-[300px] sm:text-[45vw] text-black/[0.03] select-none"
      >
        24
      </div>

      <div className="relative max-w-5xl mx-auto px-8 md:px-16">
        <Reveal className="text-center">
          <SectionLabel>Inside the training</SectionLabel>
          <h2 className="mx-auto mt-4 max-w-[16ch] font-display font-light tracking-[-0.03em] leading-[1.04] text-[38px] md:text-[56px] lg:text-[68px]">
            <span className="text-[#1a1a1a]">24 phrases. Word for word.</span>{' '}
            <span className="text-[#8e8e8e]">In your voice.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-[58ch] text-[16px] leading-relaxed text-[#6f6f6f]">
            Not scripts. Twenty-four short, exact phrases — openers, follow-ups, objection-handlers,
            and closers — each one engineered to lower resistance, make the buyer picture the result,
            and close without pressure. You stack them in your own voice, in any conversation.
          </p>
          <p className="mx-auto mt-5 max-w-[58ch] text-[16px] leading-relaxed text-[#1a1a1a]">
            Every phrase was developed to make sales simple for anyone — battle-tested to the tune of
            over $30 million in sales created by Kotton Grammer.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.07}>
              <div className="h-full rounded-2xl bg-white p-7 shadow-[0_1px_2px_rgba(16,18,40,0.04),0_12px_32px_-12px_rgba(16,18,40,0.10)]">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-green font-display text-[20px] font-medium text-[#1a1a1a]">
                  6
                </div>
                <h3 className="mt-5 text-[14px] font-semibold uppercase tracking-[0.06em] text-[#1a1a1a]">
                  {group.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-[#8e8e8e]">{group.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-12 max-w-[50ch] text-center text-[15px] text-[#8e8e8e]">
            The phrases themselves are inside the training — along with when to use each one, and real
            call examples of them working.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
