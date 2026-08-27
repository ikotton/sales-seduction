import Reveal, { SectionLabel } from './Reveal'

const GROUPS = [
  {
    title: 'Openers',
    body: 'Start conversations that make people lean in instead of guard up.',
  },
  {
    title: 'Follow-ups',
    body: 'Revive any conversation without the awkwardness, including one that can’t be answered with "no."',
  },
  {
    title: 'Objection-handlers',
    body: 'Dissolve "it’s too expensive," "I need to think," and the know-it-all, without arguing.',
  },
  {
    title: 'Closers',
    body: 'Make the yes feel like their idea, and keep it smooth to the finish.',
  },
]

export default function Phrases() {
  return (
    <section id="phrases" className="relative w-full overflow-hidden bg-bg-base py-24 md:py-32 scroll-mt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid place-items-center font-instrument font-normal leading-none text-[300px] sm:text-[45vw] text-black/[0.03] select-none"
      >
        24
      </div>

      <div className="relative max-w-5xl mx-auto px-8 md:px-16">
        <Reveal className="text-center">
          <SectionLabel>Inside the training</SectionLabel>
          <h2 className="mx-auto mt-4 max-w-[16ch] font-instrument font-normal tracking-[-0.03em] leading-[1.04] text-[38px] md:text-[56px] lg:text-[68px]">
            <span className="text-[#121214]">24 phrases. Word for word.</span>{' '}
            <span className="text-[#86827A]">In your voice.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-[58ch] text-[16px] leading-relaxed text-[#6B675F]">
            Not scripts. Twenty-four short, exact phrases: openers, follow-ups, objection-handlers,
            and closers. Each one engineered to lower resistance, make the buyer picture the result,
            and close without pressure. You stack them in your own voice, in any conversation.
          </p>
          <p className="mx-auto mt-5 max-w-[58ch] text-[16px] leading-relaxed text-[#121214]">
            Every phrase was developed to make sales simple for anyone, battle-tested to the tune of
            over $30 million in sales created by Kotton Grammer.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {GROUPS.map((group, i) => (
            <Reveal
              key={group.title}
              delay={i * 0.07}
              className={`${i % 2 === 1 ? 'sm:border-l sm:border-black/[0.09]' : ''} ${
                i > 0 ? 'xl:border-l xl:border-black/[0.09]' : 'xl:border-l-0'
              } ${i >= 2 ? 'sm:border-t sm:border-black/[0.09] xl:border-t-0' : ''}`}
            >
              <div className={`h-full py-9 ${i % 2 === 1 ? 'sm:pl-9' : ''} ${
                i % 2 === 0 ? 'sm:pr-9' : ''
              } xl:px-8 ${i === 0 ? 'xl:pl-0' : ''} ${i === 3 ? 'xl:pr-0' : ''}`}>
                <div className="font-instrument text-[44px] leading-none text-champagne">6</div>
                <h3 className="mt-6 text-[12px] font-medium uppercase tracking-[0.16em] text-[#121214]">
                  {group.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#86827A]">{group.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-12 max-w-[50ch] text-center text-[15px] text-[#86827A]">
            The phrases themselves are inside the training, along with when to use each one, and real
            call examples of them working.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
