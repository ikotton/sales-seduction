import { Rise, Rule, Words } from './Kinetic'

const ITEMS: [string, string][] = [
  ['The full video training, all 24 phrases', '$499'],
  ['The complete slide deck', '$99'],
  ['Printable phrase cheat-sheet', '$49'],
  ['Real call examples', '$199'],
  ['Follow-up message templates', '$99'],
  ['Private community access', '$299'],
  ['12 live monthly office-hours webinars', '$999'],
  ['Lifetime access to the training', 'Included'],
]

export default function Offer() {
  return (
    <section id="buy" className="relative z-10 w-full scroll-mt-24 py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-8 md:px-16 lg:px-20">
        <Rise>
          <div className="flex items-baseline gap-5">
            <span className="font-instrument text-[15px] text-gold">05</span>
            <span className="text-[11px] uppercase tracking-[0.24em] text-white/40">
              Everything included
            </span>
          </div>
        </Rise>
        <Rule className="mt-5" />

        <h2 className="mt-12 font-instrument text-[44px] leading-[0.95] tracking-[-0.02em] text-white sm:text-[64px] lg:text-[86px]">
          <Words text="One price." /> <Words text="The whole system." accentFrom={0} delay={0.16} />
        </h2>

        <div className="mt-20 grid grid-cols-1 gap-x-20 gap-y-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {ITEMS.map(([label, value], i) => (
              <Rise key={label} delay={i * 0.04}>
                <div className="group flex items-baseline justify-between gap-8 border-t border-white/10 py-5 transition-colors hover:border-gold/40">
                  <span className="text-[16px] text-white/85 transition-colors group-hover:text-white md:text-[17px]">
                    {label}
                  </span>
                  <span className="whitespace-nowrap font-instrument text-[18px] text-white/35">
                    {value}
                  </span>
                </div>
              </Rise>
            ))}
            <div className="border-t border-white/10" />
          </div>

          <Rise delay={0.12} className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[6px] border border-gold/25 bg-white/[0.03] p-10 backdrop-blur-xl lg:sticky lg:top-32">
              <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-gold/25 blur-[90px]" />
              <div className="relative">
                <div className="text-[12px] uppercase tracking-[0.2em] text-white/40">
                  Total value $2,243
                </div>
                <div className="mt-3 font-instrument leading-[0.82] text-white text-[110px] md:text-[140px]">
                  $99
                </div>
                <div className="mt-5 h-px w-16 bg-gold" />
                <p className="mt-7 max-w-[32ch] text-[15px] leading-relaxed text-white/55">
                  One payment. Lifetime access to the training, twelve months of live office hours,
                  and the community for as long as you want it.
                </p>
                <a href="#buy" data-checkout
                  className="mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-9 py-4 text-[15px] font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5">
                  Get instant access <span aria-hidden="true">→</span>
                </a>
                <p className="mt-5 text-[13px] text-white/35">
                  30-day money-back guarantee · Secure checkout · Instant access
                </p>
              </div>
            </div>
          </Rise>
        </div>
      </div>
    </section>
  )
}
