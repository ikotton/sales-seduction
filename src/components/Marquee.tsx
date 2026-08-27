const ITEMS = [
  '24 phrases, word for word',
  'Zero sales experience needed',
  '12 months of live office hours',
  'A private community of women in sales',
  'Lifetime access',
  '30-day money-back guarantee',
]

/** Continuous ticker. The first thing under the hero that moves on its own. */
export default function Marquee() {
  const row = [...ITEMS, ...ITEMS]
  return (
    <div className="relative z-10 overflow-hidden border-y border-white/10 bg-white/[0.02] py-5 backdrop-blur-sm">
      <div className="marquee flex w-max items-center gap-14 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-14">
            <span className="text-[13px] uppercase tracking-[0.22em] text-white/55">{item}</span>
            <span className="h-1 w-1 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </div>
  )
}
