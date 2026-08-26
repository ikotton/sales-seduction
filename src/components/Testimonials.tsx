import Reveal from './Reveal'

const QUOTES = [
  {
    quote:
      'I closed my first deal in the same week. I just said the words the way she taught them — no pressure, no weirdness.',
    name: '[Name Placeholder]',
    role: '[Role — e.g. former teacher, now in tech sales]',
    img: '/assets/testimonial-1.jpg',
  },
  {
    quote:
      "Follow-up used to make me physically cringe. Now it's two sentences and people actually reply.",
    name: '[Name Placeholder]',
    role: '[Role — e.g. mom of two, remote SDR]',
    img: '/assets/testimonial-2.jpg',
  },
  {
    quote:
      'The office hours alone are worth ten times the price. I brought a stuck deal and left with the exact words to close it.',
    name: '[Name Placeholder]',
    role: '[Role — e.g. agency account manager]',
    img: '/assets/testimonial-3.jpg',
  },
]

export default function Testimonials() {
  return (
    <section className="w-full bg-bg-base pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20">
        <Reveal>
          <h2 className="font-display font-light tracking-[-0.03em] leading-[1.05] text-[36px] md:text-[52px] lg:text-[64px] text-[#1a1a1a]">
            What members say
          </h2>
          <p className="mt-3 text-[13px] uppercase tracking-[0.16em] text-[#a3a3a3]">
            Placeholder testimonials — replace with real ones
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {QUOTES.map((item, i) => (
            <Reveal key={item.quote} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-[0_1px_2px_rgba(16,18,40,0.04),0_12px_32px_-12px_rgba(16,18,40,0.10)]">
                <div className="h-[3px] w-10 rounded-full bg-brand-green" />
                <blockquote className="mt-6 flex-1 font-display text-[20px] font-light leading-snug text-[#1a1a1a]">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3.5">
                  <div className="relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-[#DCDEE8] to-[#C9CBD8]">
                    <img
                      src={item.img}
                      alt=""
                      onError={(e) => e.currentTarget.remove()}
                      className="absolute inset-0 z-10 h-full w-full object-cover"
                    />
                    <span className="text-[8px] uppercase tracking-[0.1em] text-[#8b8d9c]">
                      Photo
                    </span>
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold text-[#1a1a1a]">{item.name}</div>
                    <div className="text-[13px] text-[#8e8e8e]">{item.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
