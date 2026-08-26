import Reveal from './Reveal'

export default function FinalCta() {
  return (
    <section className="w-full bg-bg-base pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[#1a1a1a] px-8 py-20 md:px-16 md:py-28 text-center">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-1/3 left-1/2 h-[70%] w-[70%] -translate-x-1/2 rounded-full bg-brand-green/10 blur-[100px]"
            />
            <div className="relative">
              <h2 className="mx-auto font-display font-light tracking-[-0.03em] leading-[1.02] text-[38px] sm:text-[52px] md:text-[72px]">
                <span className="text-white">The words are simple.</span>
                <br />
                <span className="text-brand-green">The career is real.</span>
              </h2>
              <p className="mx-auto mt-8 max-w-[52ch] text-[17px] leading-relaxed text-[#a0a0a0]">
                24 battle-tested phrases. A private community of women in sales. Twelve months of live
                office hours. A 30-day money-back guarantee. All of it for $99.
              </p>
              <a
                href="#buy"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-green px-9 py-4 text-[15px] font-semibold text-[#1a1a1a] transition-transform hover:-translate-y-0.5"
              >
                Get instant access — $99 <span aria-hidden="true">→</span>
              </a>
              <p className="mt-5 text-[13px] text-[#7a7a7a]">Secure checkout · Instant access</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
