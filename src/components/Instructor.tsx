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
      className={`relative grid place-items-center overflow-hidden bg-gradient-to-br from-[#E6E1D7] to-[#D5CEC0] ${
        round ? 'rounded-full' : 'rounded-[3px]'
      } ${className}`}
    >
      <img
        src={src}
        alt={alt}
        onError={(e) => e.currentTarget.remove()}
        className="absolute inset-0 z-10 h-full w-full object-cover"
      />
      <span className="px-3 text-center text-[10px] uppercase leading-relaxed tracking-[0.18em] text-[#8E8878]">
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
              <div className="absolute bottom-4 left-4 z-20 rounded-full bg-champagne px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#121214]">
                Your instructor
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="md:col-span-7">
            <div>
              <h2 className="font-instrument font-normal tracking-[-0.03em] leading-[1.05] text-[36px] md:text-[52px] text-[#121214]">
                Sylvia White
              </h2>
              <p className="mt-6 max-w-[52ch] text-[16px] leading-relaxed text-[#6B675F]">
                [Bio placeholder. 3 to 4 lines: Sylvia's sales background, why she teaches women
                specifically, and her approach. Replace this with her real bio.]
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-6 rounded-[3px] bg-white p-7 border border-black/[0.09] rounded-[3px]">
                <Slot
                  src="/assets/kotton.jpg"
                  alt="Kotton Grammer"
                  hint="Kotton"
                  className="h-20 w-20 shrink-0"
                  round
                />
                <div className="min-w-[240px] flex-1">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#86827A]">
                    Special guest
                  </p>
                  <h3 className="mt-2 font-instrument text-[24px] font-light text-[#121214]">
                    Kotton Grammer
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#86827A]">
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
