import { useEffect, useRef } from 'react'

type Firefly = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  color: [number, number, number]
  phase: number
  speed: number
  drift: number
}

const GOLD: [number, number, number] = [255, 190, 70]
const BLUE: [number, number, number] = [130, 205, 255]

/**
 * Gold and baby-blue fireflies drifting over the hero video.
 * Canvas rather than DOM nodes so a few dozen glows stay cheap.
 */
export default function Fireflies({ count = 170 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let flies: Firefly[] = []
    let raf = 0

    // Density and size track the viewport: the same 85 fireflies that read as
    // atmosphere on a desktop swarm the copy on a phone.
    let sizeScale = 1

    // Everything lives above the woman's head — the band from the top of the
    // frame down to roughly where the light leaves her — and clusters toward
    // the centre, so they read as rising off her rather than as random scatter.
    const CEILING = -24
    const FLOOR = () => height * 0.62

    // Sum of three uniforms ≈ a bell curve, so x bunches around the middle.
    const sourceX = () => {
      const g = (Math.random() + Math.random() + Math.random()) / 3
      return width * (0.5 + (g - 0.5) * 0.5)
    }

    const seed = () => {
      sizeScale = width < 640 ? 0.55 : width < 1024 ? 0.78 : 1
      const byArea = Math.round((width * height) / 10000)
      const n = Math.max(48, Math.min(count, byArea))

      flies = Array.from({ length: n }, () => ({
        x: sourceX(),
        y: Math.random() * FLOOR(),
        vx: (Math.random() - 0.5) * 0.12,
        vy: -(0.05 + Math.random() * 0.14),
        r: (1.0 + Math.random() * 1.9) * sizeScale,
        color: Math.random() < 0.62 ? GOLD : BLUE,
        phase: Math.random() * Math.PI * 2,
        speed: 0.006 + Math.random() * 0.016,
        drift: Math.random() * Math.PI * 2,
      }))
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seed()
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.globalCompositeOperation = 'lighter'

      for (const f of flies) {
        if (!reduced) {
          // wander, so they never travel in straight lines
          f.drift += 0.014
          f.x += f.vx + Math.cos(f.drift) * 0.12
          f.y += f.vy + Math.sin(f.drift * 0.7) * 0.15
          f.phase += f.speed

          // Drift off the top, or sink past her head, and it restarts at the
          // bottom of the band near the centre.
          if (f.y < CEILING || f.y > FLOOR()) {
            f.y = FLOOR()
            f.x = sourceX()
          }
          if (f.x < -24) f.x = width + 24
          if (f.x > width + 24) f.x = -24
        }

        const twinkle = 0.5 + 0.5 * (0.5 + 0.5 * Math.sin(f.phase))
        const [r, g, b] = f.color
        const glow = f.r * 4.2

        const grad = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, glow)
        grad.addColorStop(0, `rgba(${r},${g},${b},${1 * twinkle})`)
        grad.addColorStop(0.25, `rgba(${r},${g},${b},${0.45 * twinkle})`)
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`)

        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(f.x, f.y, glow, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = `rgba(255,255,255,${0.85 * twinkle})`
        ctx.beginPath()
        ctx.arc(f.x, f.y, f.r * 0.5, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.globalCompositeOperation = 'source-over'
      if (!reduced) raf = window.requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      window.cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [count])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full z-[5] pointer-events-none"
    />
  )
}
