import Reveal from './Reveal'

function Slot({
  src,
  alt,
  hint,
  className = '',
  round = false,
}: {
  src: string
  alt: string
  hint: string
  className?: string
  round?: boolean
}) {
  return (
    <div
      className={`relative grid place-items-center overflow-hidden bg-gradient-to-br from-[#DCDEE8] to-[#C9CBD8] ${
        round ? 'rounded-full' : 'rounded-2xl'
      } ${className}`}
    >
      <img
        src={src}
        alt={alt}
        onError={(e) => e.currentTarget.remove()}
        className="absolute inset-0 z-10 h-full w-full object-cover"
      />
      <span className="px-3 text-center text-[10px] uppercase leading-relaxed tracking-[0.18em] text-[#8b8d9c]">
        {hint}
      </span>
    </div>
  )
}

export default function Instructor() {
  return (
    <section className="w-full bg-bg-base pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <Reveal className="md:col-span-5">
            <div className="relative">
              <Slot
                src="/assets/sylvia.jpg"
                alt="Sylvia White"
                hint="Sylvia's headshot · assets/sylvia.jpg"
                className="aspect-4/5 w-full"
              />
              <div className="absolute bottom-4 left-4 z-20 rounded-full bg-brand-green px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#1a1a1a]">
                Your instructor
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="md:col-span-7">
            <div>
              <h2 className="font-display font-light tracking-[-0.03em] leading-[1.05] text-[36px] md:text-[52px] text-[#1a1a1a]">
                Sylvia White
              </h2>
              <p className="mt-6 max-w-[52ch] text-[16px] leading-relaxed text-[#6f6f6f]">
                [Bio placeholder — 3–4 lines: Sylvia's sales background, why she teaches women
                specifically, and her approach. Replace this with her real bio.]
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-6 rounded-2xl bg-white p-7 shadow-[0_1px_2px_rgba(16,18,40,0.04),0_12px_32px_-12px_rgba(16,18,40,0.10)]">
                <Slot
                  src="/assets/kotton.jpg"
                  alt="Kotton Grammer"
                  hint="Kotton"
                  className="h-20 w-20 shrink-0"
                  round
                />
                <div className="min-w-[240px] flex-1">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#8e8e8e]">
                    Special guest
                  </p>
                  <h3 className="mt-2 font-display text-[24px] font-light text-[#1a1a1a]">
                    Kotton Grammer
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#8e8e8e]">
                    15+ years building and selling. Over $40M in training sold. Founder of multiple
                    global marketing agencies and creator of the original method behind this program,
                    taught to thousands of consultants and agency owners.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
