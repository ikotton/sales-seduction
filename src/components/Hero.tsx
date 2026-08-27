import { useEffect, useState } from 'react'
import Fireflies from './Fireflies'

const ENTRANCE = 'cubic-bezier(0.16, 1, 0.3, 1)'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 300)
    return () => window.clearTimeout(t)
  }, [])

  const enter = (delay: number) => ({
    transitionTimingFunction: ENTRANCE,
    transitionDelay: mounted ? `${delay}ms` : '0ms',
  })

  const rise = `transition-all duration-[900ms] ${
    mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`

  return (
    <section id="top" className="relative w-full overflow-hidden bg-black">
      {/* The frame carries the video's own 16:9. Container aspect equals source
          aspect, so there is no crop and no letterboxing at any width. */}
      <div
        className={`relative w-full aspect-video transition-all duration-[1400ms] ${
          mounted ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
        }`}
        style={{ transitionTimingFunction: ENTRANCE }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/assets/hero-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover"
          src="/assets/hero.mp4"
        />
        <Fireflies />
      </div>

      {/* Copy sits bottom-left, clear of her and of the light rising off her. */}
      <div className="relative z-20 px-6 pb-14 pt-10 text-center sm:absolute sm:inset-x-0 sm:bottom-0 sm:px-10 sm:pb-[6%] sm:pt-0 sm:text-left lg:px-16">
        <div className="mx-auto max-w-4xl sm:mx-0 sm:max-w-2xl">
          <h1
            className={`font-instrument text-white text-[2rem] leading-[1.02] sm:text-[2.6rem] md:text-[3.4rem] lg:text-[4.2rem] ${rise}`}
            style={enter(400)}
          >
            Turn simple words into a<br className="hidden sm:block" /> high-paying, remote sales
            career
          </h1>

          <p
            className={`mt-5 max-w-md text-[15px] leading-relaxed text-white/70 sm:text-base md:text-lg mx-auto sm:mx-0 ${rise}`}
            style={enter(600)}
          >
            For women who want to earn more and work from anywhere, even if you've never sold a
            thing.
          </p>

          <a
            href="#buy"
            className={`mt-7 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-colors hover:bg-white/90 md:text-base ${rise}`}
            style={enter(800)}
          >
            Get instant access for $99
          </a>
        </div>
      </div>
    </section>
  )
}
