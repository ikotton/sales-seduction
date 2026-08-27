import { Rise } from './Kinetic'

function Slot({ src, alt, hint, className = '', round = false }: {
  src: string; alt: string; hint: string; className?: string; round?: boolean
}) {
  return (
    <div className={`relative grid place-items-center overflow-hidden border border-white/10 bg-white/[0.03] ${round ? 'rounded-full' : 'rounded-[4px]'} ${className}`}>
      <img src={src} alt={alt} onError={(e) => e.currentTarget.remove()}
className="absolute inset-0 z-10 h-full w-full object-cover" />
      <span className="px-3 text-center text-[10px] uppercase leading-relaxed tracking-[0.18em] text-white/30">
        {hint}
      </span>
    </div>
  )
}

export default function Instructor() {
  return (
    <section className="relative z-10 w-full pb-32 md:pb-44">
      <div className="mx-auto max-w-[1400px] px-8 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
          <Rise className="md:col-span-5" parallax={30}>
            <div className="relative">
              <div aria-hidden="true" className="pointer-events-none absolute -inset-8 rounded-full bg-gold/10 blur-[80px]" />
              <Slot src="/assets/sylvia.jpg" alt="Sylvia White"
                hint="Sylvia's headshot · assets/sylvia.jpg" className="relative aspect-4/5 w-full" />
              <div className="absolute bottom-5 left-5 z-20 rounded-full border border-gold/40 bg-black/50 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-gold backdrop-blur-md">
                Your instructor
              </div>
            </div>
          </Rise>

          <Rise delay={0.1} className="md:col-span-7">
            <div>
              <span className="text-[11px] uppercase tracking-[0.24em] text-white/40">Who teaches it</span>
              <h2 className="mt-6 font-instrument text-[48px] leading-[0.95] text-white md:text-[68px] lg:text-[82px]">
                Sylvia White
              </h2>
              <p className="mt-8 max-w-[52ch] text-[16px] leading-relaxed text-white/55 md:text-[18px]">
                [Bio placeholder. 3 to 4 lines: Sylvia's sales background, why she teaches women
                specifically, and her approach. Replace this with her real bio.]
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-6 rounded-[4px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md">
                <Slot src="/assets/kotton.jpg" alt="Kotton Grammer" hint="Kotton"
                  className="h-20 w-20 shrink-0" round />
                <div className="min-w-[240px] flex-1">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-gold">Special guest</p>
                  <h3 className="mt-2 font-instrument text-[26px] text-white">Kotton Grammer</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/50">
                    15+ years building and selling. Over $40M in training sold. Founder of multiple
                    global marketing agencies and creator of the original method behind this
                    program, taught to thousands of consultants and agency owners.
                  </p>
                </div>
              </div>
            </div>
          </Rise>
        </div>
      </div>
    </section>
  )
}
