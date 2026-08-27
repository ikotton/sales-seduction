import { motion, useInView, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

/** Fade and rise, but with the option to also drift at a different rate than
 *  the page scrolls, which is what stops a section feeling pasted on. */
export function Rise({
  children,
  delay = 0,
  className = '',
  parallax = 0,
}: {
  children: ReactNode
  delay?: number
  className?: string
  parallax?: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [parallax, -parallax])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      className={className}
    >
      <motion.div style={reduce || !parallax ? undefined : { y }}>{children}</motion.div>
    </motion.div>
  )
}

/** Headline that assembles word by word.
 *  Numeric values only: percentage-string transforms were compiling to invalid
 *  WAAPI offsets, the animation threw, and every word stayed parked offscreen. */
export function Words({
  text,
  className = '',
  accentFrom,
  delay = 0,
}: {
  text: string
  className?: string
  accentFrom?: number
  delay?: number
}) {
  const words = text.split(' ')
  return (
    <span className={className}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          className={`inline-block ${
            accentFrom !== undefined && i >= accentFrom ? 'text-gold' : ''
          }`}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: delay + i * 0.06, ease: EASE }}
        >
          {w}
          {i < words.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </span>
  )
}

/** Number that counts up the first time it is seen. */
export function Count({ value, className = '' }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const reduce = useReducedMotion()
  const [shown, setShown] = useState(reduce ? value : '')

  const num = Number(value.replace(/[^0-9.]/g, ''))
  const prefix = value.slice(0, value.search(/[0-9]/) === -1 ? 0 : value.search(/[0-9]/))
  const suffix = value.slice(prefix.length + String(num).length)

  useEffect(() => {
    if (!inView || reduce || !Number.isFinite(num) || num === 0) {
      if (inView) setShown(value)
      return
    }
    let raf = 0
    const start = performance.now()
    const dur = 1400
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur)
      const eased = 1 - Math.pow(1 - p, 3)
      setShown(prefix + Math.round(num * eased) + suffix)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, num, prefix, suffix, value, reduce])

  return (
    <span ref={ref} className={className}>
      {shown || ' '}
    </span>
  )
}

/** Hairline that draws in from the left. */
export function Rule({ className = '' }: { className?: string }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 1.1, ease: EASE }}
      className={`rule-draw h-px w-full bg-white/15 ${className}`}
    />
  )
}

/** Progress bar tied to the whole document, pinned to the top of the page. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })
  return (
    <motion.div
      style={{ scaleX: x }}
      className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-gradient-to-r from-gold/0 via-gold to-gold/0"
    />
  )
}
