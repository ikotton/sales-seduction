import { motion, useScroll, useTransform } from 'motion/react'
import type { RefObject } from 'react'
import { useRef } from 'react'

const LINES: { plain: string; accent: string }[] = [
  { plain: 'You get people interested,', accent: "but can't get them to say yes." },
  { plain: 'Follow-up feels awkward,', accent: "so you don't do it." },
  { plain: 'You freeze when someone', accent: 'knows more than you.' },
  { plain: 'You hate feeling', accent: '"salesy."' },
  { plain: 'You know you could earn more,', accent: 'nobody ever taught you how to close.' },
]

/**
 * Pinned sequence. The section holds the viewport while the five objections
 * cross-fade one into the next, so the scroll drives the content instead of
 * just moving past it.
 */
export default function SoundFamiliar() {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const barWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section className="relative z-10 w-full">
      <div ref={ref} className="relative h-[420vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute inset-x-0 top-[18vh] text-center">
            <span className="text-[11px] uppercase tracking-[0.28em] text-white/35">
              Sound familiar?
            </span>
          </div>

          <div className="relative h-full">
            {LINES.map((line, i) => (
              <SlideWrap key={line.accent} target={ref} i={i} total={LINES.length} line={line} />
            ))}
          </div>

          <div className="absolute inset-x-0 bottom-[14vh] mx-auto h-px w-[min(520px,70vw)] bg-white/12">
            <motion.div style={{ width: barWidth }} className="h-px bg-gold" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[52ch] px-8 pb-32 text-center md:pb-44">
        <p className="text-[17px] leading-relaxed text-white/55 md:text-[20px]">
          None of that is a personality problem. It's a vocabulary problem, and the vocabulary fits
          on one cheat-sheet.
        </p>
      </div>
    </section>
  )
}

function SlideWrap({
  target,
  i,
  total,
  line,
}: {
  target: RefObject<HTMLDivElement | null>
  i: number
  total: number
  line: (typeof LINES)[number]
}) {
  const { scrollYProgress } = useScroll({ target, offset: ['start start', 'end end'] })
  // Offsets must sit inside [0,1] and never decrease. Without clamping, the
  // first slide asks for -0.06 and the last for 1.06, which throws and takes
  // the whole render down with it.
  const clamp = (v: number) => Math.min(1, Math.max(0, v))
  const start = i / total
  const end = (i + 1) / total
  const stops = [clamp(start - 0.06), clamp(start + 0.04), clamp(end - 0.04), clamp(end + 0.06)]
  const opacity = useTransform(scrollYProgress, stops, [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [stops[0], stops[3]], [40, -40])
  const blur = useTransform(scrollYProgress, stops, [
    'blur(10px)',
    'blur(0px)',
    'blur(0px)',
    'blur(10px)',
  ])

  return (
    <motion.div
      style={{ opacity, y, filter: blur }}
      className="absolute inset-0 grid place-items-center px-8"
    >
      <p className="max-w-[24ch] text-center font-instrument text-[34px] leading-[1.08] sm:text-[52px] md:text-[70px] lg:text-[88px]">
        <span className="text-white">{line.plain} </span>
        <span className="text-gold">{line.accent}</span>
      </p>
    </motion.div>
  )
}
