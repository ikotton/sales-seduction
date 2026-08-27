import Reveal from './Reveal'

const LINES: { plain: string; accent: string; align: 'left' | 'right' }[] = [
  { plain: 'You get people interested,', accent: "but can't get them to say yes.", align: 'left' },
  { plain: 'Follow-up feels awkward,', accent: "so you don't do it.", align: 'right' },
  { plain: 'You freeze when someone', accent: 'knows more than you.', align: 'left' },
  { plain: 'You hate feeling', accent: '"salesy."', align: 'right' },
  {
    plain: 'You know you could earn more,',
    accent: 'nobody ever taught you how to close.',
    align: 'left',
  },
]

export default function SoundFamiliar() {
  return (
    <section className="w-full bg-[#121214] py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-8 md:px-16">
        <Reveal className="text-center">
          <p className="text-[12px] tracking-[0.22em] uppercase text-[#7a7a7a]">Sound familiar?</p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-8 md:gap-10">
          {LINES.map((line, i) => (
            <Reveal key={line.accent} delay={i * 0.06}>
              <p
                className={`font-instrument font-normal leading-[1.2] text-[24px] sm:text-[32px] md:text-[40px] ${
                  line.align === 'right' ? 'text-right ml-auto max-w-[20ch]' : 'text-left'
                }`}
              >
                <span className="text-[#EDEEF5]">{line.plain}</span>{' '}
                <span className="text-champagne">{line.accent}</span>
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-16 max-w-[44ch] text-center text-[16px] leading-relaxed text-[#9a9a9a]">
            None of that is a personality problem. It's a vocabulary problem, and the vocabulary fits
            on one cheat-sheet.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
