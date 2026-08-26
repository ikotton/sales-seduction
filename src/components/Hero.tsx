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
    <section
      id="top"
      className="relative w-full h-screen overflow-hidden flex items-end justify-center bg-black"
    >
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
          className="w-full h-full object-cover object-bottom"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
        />
      </div>

      <Fireflies />

      <div className="relative z-10 text-center px-6 pb-[40vh] sm:pb-[42vh] md:pb-[44vh] max-w-4xl mx-auto">
        <h1
          className={`font-instrument text-white text-[2.5rem] leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl mb-5 md:mb-6 ${rise}`}
          style={enter(400)}
        >
          Turn simple words into a
          <br className="hidden sm:block" /> high-paying, remote sales career
        </h1>

        <p
          className={`text-white/70 text-base md:text-lg mb-8 md:mb-10 max-w-md mx-auto ${rise}`}
          style={enter(600)}
        >
          For women who want to earn more and work from anywhere — even if you've never sold a
          thing.
        </p>

        <a
          href="#buy"
          className={`inline-block px-8 py-3.5 bg-white text-black text-sm md:text-base font-medium rounded-full hover:bg-white/90 ${rise}`}
          style={enter(800)}
        >
          Get instant access — $99
        </a>
      </div>
    </section>
  )
}
