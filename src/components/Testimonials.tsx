import { Rise, Rule, Words } from './Kinetic'

const QUOTES = [
  { q: 'I closed my first deal in the same week. I just said the words the way she taught them. No pressure, no weirdness.',
    name: '[Name Placeholder]', role: '[Role, e.g. former teacher, now in tech sales]', img: '/assets/testimonial-1.jpg' },
  { q: "Follow-up used to make me physically cringe. Now it's two sentences and people actually reply.",
    name: '[Name Placeholder]', role: '[Role, e.g. mom of two, remote SDR]', img: '/assets/testimonial-2.jpg' },
  { q: 'The office hours alone are worth ten times the price. I brought a stuck deal and left with the exact words to close it.',
    name: '[Name Placeholder]', role: '[Role, e.g. agency account manager]', img: '/assets/testimonial-3.jpg' },
]

export default function Testimonials() {
  return (
    <section className="relative z-10 w-full pb-32 md:pb-44">
      <div className="mx-auto max-w-[1400px] px-8 md:px-16 lg:px-20">
        <Rise>
          <div className="flex items-baseline gap-5">
            <span className="font-instrument text-[15px] text-gold">06</span>
            <span className="text-[11px] uppercase tracking-[0.24em] text-white/40">In their words</span>
          </div>
        </Rise>
        <Rule className="mt-5" />

        <h2 className="mt-12 font-instrument text-[44px] leading-[0.95] tracking-[-0.02em] text-white sm:text-[64px] lg:text-[86px]">
          <Words text="What members say" />
        </h2>

        <div className="mt-20">
          {QUOTES.map((item, i) => (
            <Rise key={item.q} delay={i * 0.08} parallax={i === 1 ? 20 : 6}>
              <figure className="group grid grid-cols-1 gap-8 border-t border-white/10 py-12 transition-colors duration-500 hover:border-gold/30 md:grid-cols-12 md:gap-12 md:py-16">
                <div className="md:col-span-3">
                  <div className="flex items-center gap-4">
                    <div className="relative grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-full border border-white/10 bg-white/[0.04]">
                      <img src={item.img} alt="" onError={(e) => e.currentTarget.remove()}
                        className="absolute inset-0 z-10 h-full w-full object-cover" />
                      <span className="text-[8px] uppercase tracking-[0.1em] text-white/30">Photo</span>
                    </div>
                    <div className="font-instrument text-[28px] leading-none text-gold">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <figcaption className="mt-5">
                    <div className="text-[12px] font-medium uppercase tracking-[0.16em] text-white">{item.name}</div>
                    <div className="mt-2 text-[14px] leading-relaxed text-white/45">{item.role}</div>
                  </figcaption>
                </div>
                <blockquote className="font-instrument text-[26px] leading-[1.2] text-white/90 transition-colors duration-500 group-hover:text-white md:col-span-9 md:text-[36px] lg:text-[44px]">
                  {item.q}
                </blockquote>
              </figure>
            </Rise>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  )
}
