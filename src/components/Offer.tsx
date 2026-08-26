import Reveal, { SectionLabel } from './Reveal'

const ITEMS: [string, string][] = [
  ['The full video training — all 24 phrases', '$499 value'],
  ['The complete slide deck', '$99 value'],
  ['Printable phrase cheat-sheet', '$49 value'],
  ['Real call examples', '$199 value'],
  ['Follow-up message templates', '$99 value'],
  ['Private community access', '$299 value'],
  ['12 live monthly office-hours webinars (12 months)', '$999 value'],
  ['Lifetime access to the training', 'Included'],
]

export default function Offer() {
  return (
    <section id="buy" className="w-full bg-bg-base py-24 md:py-32 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-8 md:px-16">
        <Reveal className="text-center">
          <SectionLabel>Everything included</SectionLabel>
          <h2 className="mt-4 font-display font-light tracking-[-0.03em] leading-[1.05] text-[36px] md:text-[52px] lg:text-[60px]">
            <span className="text-[#1a1a1a]">One price.</span>{' '}
            <span className="text-[#8e8e8e]">The whole system.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 rounded-3xl bg-white p-8 md:p-12 shadow-[0_1px_2px_rgba(16,18,40,0.04),0_24px_60px_-20px_rgba(16,18,40,0.18)]">
            <div className="flex flex-col">
              {ITEMS.map(([label, value], i) => (
                <div
                  key={label}
                  className={`flex items-baseline justify-between gap-5 py-4 ${
                    i < ITEMS.length - 1 ? 'border-b border-black/[0.06]' : ''
                  }`}
                >
                  <span className="text-[15px] text-[#1a1a1a]">{label}</span>
                  <span className="whitespace-nowrap text-[14px] text-[#a3a3a3]">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-t border-black/10 pt-7">
              <div>
                <span className="text-[14px] text-[#a3a3a3] line-through">Total value: $2,243</span>
                <div className="mt-1 font-display text-[46px] md:text-[54px] font-light leading-none text-[#1a1a1a]">
                  Today: <span className="text-[#1a1a1a]">$99</span>
                </div>
              </div>
              <a
                href="#buy"
                data-checkout
                className="inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-8 py-4 text-[15px] font-medium text-white transition-colors hover:bg-black"
              >
                Get instant access <span aria-hidden="true">→</span>
              </a>
            </div>

            <p className="mt-6 text-center text-[13px] text-[#a3a3a3]">
              30-day money-back guarantee · Secure checkout · Instant access
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
