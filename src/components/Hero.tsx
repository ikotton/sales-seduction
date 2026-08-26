import { motion } from 'motion/react'

const EASE = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-bg-base"
    >
      {/* Background video, anchored to the bottom so it sits under the text
          rather than behind it. */}
      <div className="absolute inset-x-0 bottom-0 h-[38vh] sm:h-[58vh] lg:h-[62vh] z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260603_132049_036591b8-6e92-4760-b94c-a7ea6eef315c.mp4"
        />
        <div
          className="absolute inset-x-0 top-0 h-[65%]"
          style={{
            background:
              'linear-gradient(to bottom, #EDEEF5 0%, #EDEEF5 45%, rgba(237,238,245,0.8) 72%, rgba(237,238,245,0) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-8 text-center pt-28 pb-[22vh] sm:pb-[34vh] lg:pb-[38vh]">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mx-auto max-w-[30ch] sm:max-w-none text-[10px] sm:text-[12px] tracking-[0.22em] sm:tracking-[0.28em] uppercase text-[#8e8e8e]"
        >
          The art of using simple words to influence the state of conversion
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
          className="mt-7 font-display font-light tracking-[-0.035em] leading-[0.95] text-[52px] sm:text-[80px] md:text-[104px] lg:text-[124px]"
        >
          <span className="text-[#1a1a1a]">Sales</span>{' '}
          <span className="text-[#8e8e8e]">Seduction</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.16, ease: EASE }}
          className="mx-auto mt-8 max-w-[46ch] text-[16px] sm:text-[18px] leading-relaxed text-[#5c5c5c] text-pretty"
        >
          Turn simple words into a high-paying, remote sales career. For women who want to earn more
          and work from anywhere — even if you've never sold a thing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.24, ease: EASE }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault()
              document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="w-full max-w-md bg-white rounded-[6px] border border-black/[0.05] p-1 pl-4 flex items-center shadow-sm"
          >
            <input
              placeholder="Ask me anything..."
              aria-label="Ask a question about the training"
              className="flex-1 min-w-0 bg-transparent text-[14px] text-[#1a1a1a] placeholder:text-[#a3a3a3] outline-none py-2"
            />
            <button
              type="submit"
              aria-label="See what's included"
              className="bg-[#1a1a1a] text-white w-9 h-9 rounded-full shrink-0 flex items-center justify-center hover:bg-black transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M5 12h13M13 6l6 6-6 6" />
              </svg>
            </button>
          </form>

          <p className="text-[13px] text-[#8e8e8e]">
            <span className="text-[#1a1a1a] font-medium">$99.</span> Everything included — training,
            private community, and 12 months of live office hours.
          </p>
        </motion.div>
      </div>

      {/* Architectural edge anchors */}
      <button
        type="button"
        className="hidden sm:flex absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 z-10 items-center gap-2 rounded-full border border-white/40 bg-white/30 px-4 py-2 text-[12px] text-[#1a1a1a] backdrop-blur-md shadow-sm"
      >
        <span className="text-[#8e8e8e]">pl</span>
        <span className="text-[#c4c4c4]">—</span>
        <span>en</span>
      </button>

      <span className="hidden sm:block absolute bottom-8 left-8 md:left-16 lg:left-20 z-10 text-[12px] tracking-wide text-[#8e8e8e]">
        2026
      </span>
      <span className="hidden sm:block absolute bottom-8 right-8 md:right-16 lg:right-20 z-10 text-[12px] tracking-wide text-[#8e8e8e]">
        sales training for women
      </span>
    </section>
  )
}
