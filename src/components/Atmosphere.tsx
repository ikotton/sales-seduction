import { useEffect, useRef } from 'react'

type Star = { x: number; y: number; z: number; r: number; gold: boolean; phase: number; sp: number }

/**
 * One continuous sky behind the entire page. A fixed canvas of drifting stars
 * with a slow parallax response to scroll, so the world the hero establishes
 * keeps moving underneath every section instead of stopping at the fold.
 */
export default function Atmosphere() {
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    let w = 0
    let h = 0
    let stars: Star[] = []
    let raf = 0
    let scrollY = window.scrollY
    let target = window.scrollY

    const seed = () => {
      const n = Math.round(Math.min(220, (w * h) / 9000))
      stars = Array.from({ length: n }, () => {
        const z = 0.25 + Math.random() * 0.75
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          z,
          r: (0.4 + Math.random() * 1.5) * z,
          gold: Math.random() < 0.34,
          phase: Math.random() * Math.PI * 2,
          sp: 0.004 + Math.random() * 0.014,
        }
      })
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seed()
    }

    const draw = () => {
      // ease the scroll so parallax glides rather than snaps
      scrollY += (target - scrollY) * 0.08
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'lighter'

      for (const s of stars) {
        if (!reduced) s.phase += s.sp
        // deeper stars drift less: that difference is the parallax
        const y = ((s.y - scrollY * s.z * 0.12) % (h + 40) + h + 40) % (h + 40)
        const tw = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(s.phase))
        const glow = s.r * 4

        const g = ctx.createRadialGradient(s.x, y, 0, s.x, y, glow)
        const c = s.gold ? '217,181,112' : '190,205,235'
        g.addColorStop(0, `rgba(${c},${0.9 * tw})`)
        g.addColorStop(0.35, `rgba(${c},${0.16 * tw})`)
        g.addColorStop(1, `rgba(${c},0)`)
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(s.x, y, glow, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.globalCompositeOperation = 'source-over'
      raf = requestAnimationFrame(draw)
    }

    const onScroll = () => {
      target = window.scrollY
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      <canvas ref={ref} className="h-full w-full" />
      {/* slow-breathing gold light, so the black is never dead */}
      <div className="aurora aurora-a" />
      <div className="aurora aurora-b" />
    </div>
  )
}
