import { Rise, Words } from './Kinetic'

export default function FinalCta() {
  return (
    <section className="relative z-10 w-full pb-32 md:pb-44">
      <div className="mx-auto max-w-[1400px] px-8 md:px-16 lg:px-20">
        <Rise>
          <div className="relative overflow-hidden rounded-[6px] border border-white/10 bg-white/[0.02] px-8 py-28 text-center backdrop-blur-md md:px-16 md:py-40">
            <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/3 rounded-full bg-gold/20 blur-[110px]" />
            <div className="relative">
              <h2 className="mx-auto font-instrument text-[42px] leading-[0.98] text-white sm:text-[62px] md:text-[86px] lg:text-[104px]">
                <Words text="The words are simple." />
                <br />
                <Words text="The career is real." accentFrom={0} delay={0.22} />
              </h2>
              <p className="mx-auto mt-9 max-w-[54ch] text-[17px] leading-relaxed text-white/55 md:text-[19px]">
                24 battle-tested phrases. A private community of women in sales. Twelve months of
                live office hours. A 30-day money-back guarantee. All of it for $99.
              </p>
              <a href="#buy"
                className="mt-12 inline-flex items-center gap-2 rounded-full bg-gold px-10 py-4 text-[16px] font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5">
                Get instant access for $99 <span aria-hidden="true">→</span>
              </a>
              <p className="mt-6 text-[13px] text-white/35">Secure checkout · Instant access</p>
            </div>
          </div>
        </Rise>
      </div>
    </section>
  )
}
