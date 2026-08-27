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
    <section id="top" className="relative w-full h-[100svh] overflow-hidden bg-black">
      {/* One hero, two crops. On a wide desktop the surplus is vertical, so
          object-bottom trims the empty sky off the top and she stays whole.
          On a portrait phone the surplus is horizontal instead: the full
          height is kept and only the outer constellations are lost. */}
      <div
        className={`absolute inset-0 transition-all duration-[1400ms] ${
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
          className="h-full w-full object-cover object-center sm:object-bottom"
          src="/assets/hero.mp4"
        />
        <Fireflies />
      </div>

      {/* The clip brightens a lot as the burst blooms, so the copy needs a floor
          to stay legible. Phone: darkens the top where the copy sits. Desktop:
          darkens the bottom-left instead. Both fade out before the subject. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 sm:hidden"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.5) 32%, rgba(0,0,0,0.12) 55%, rgba(0,0,0,0) 72%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 hidden sm:block"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.35) 28%, rgba(0,0,0,0) 55%)',
        }}
      />

      {/* Phone: copy sits high, over the empty sky above her.
          Desktop: bottom-left, clear of her and of the light off her head. */}
      <div
        className="absolute inset-0 z-20 flex flex-col justify-start px-6 pt-[16vh] text-center
                   sm:justify-end sm:px-10 sm:pt-0 sm:pb-[7%] sm:text-left lg:px-16"
      >
        <div className="mx-auto w-full max-w-md sm:mx-0 sm:max-w-2xl">
          <h1
            className={`font-instrument text-white text-[2.15rem] leading-[1.05] sm:text-[2.6rem] md:text-[3.4rem] lg:text-[4.2rem] ${rise}`}
            style={enter(400)}
          >
            Turn simple words into a<br className="hidden sm:block" /> high-paying, remote sales
            career
          </h1>

          <p
            className={`mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/70 sm:mx-0 sm:text-base md:text-lg ${rise}`}
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
