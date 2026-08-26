import { motion } from 'motion/react'

function EyePill() {
  return (
    <span className="w-[16px] md:w-[42px] lg:w-[62px] h-[0.62em] md:h-[0.6em] border-[2px] border-[#1a1a1a] rounded-full inline-flex items-center justify-center align-middle mx-1 md:mx-2">
      <span className="w-2 h-2 rounded-full bg-[#1a1a1a]" />
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[110vh] sm:min-h-[140vh] w-full flex flex-col items-center justify-start overflow-hidden bg-bg-base"
    >
      {/* Background video */}
      <div className="absolute top-[15vh] sm:top-[20vh] left-0 w-full h-[95vh] sm:h-[120vh] z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-100"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260603_132049_036591b8-6e92-4760-b94c-a7ea6eef315c.mp4"
        />
        <div className="absolute top-0 left-0 w-full h-[54vh] sm:h-[64vh] bg-gradient-to-b from-bg-base via-bg-base/90 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl w-full mx-auto px-8 md:px-16 lg:px-20 relative z-10 grid grid-cols-12 gap-x-4 md:gap-x-8 pt-[22vh] sm:pt-[24vh]">
        <div className="col-span-12 md:col-span-10 md:col-start-2">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display font-light tracking-[-0.03em] leading-[1.08] text-[38px] sm:text-[56px] md:text-[68px] lg:text-[86px]"
          >
            <span className="text-[#1a1a1a]">Turn simple words</span>{' '}
            <span className="text-[#8e8e8e]">into a</span>
            <br />
            <span className="text-[#8e8e8e]">high-paying, remote sales career</span>
            <br />
            <span className="text-[#8e8e8e]">
              for
              <EyePill />
              women.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 md:mt-10 max-w-md"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault()
                document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-white rounded-[6px] border border-black/[0.05] p-1 pl-4 flex items-center shadow-sm"
            >
              <input
                placeholder="Ask me anything..."
                aria-label="Ask a question about the training"
                className="flex-1 bg-transparent text-[14px] text-[#1a1a1a] placeholder:text-[#a3a3a3] outline-none py-2"
              />
              <button
                type="submit"
                aria-label="See what's included"
                className="bg-[#1a1a1a] text-white w-9 h-9 rounded-full relative shrink-0 flex items-center justify-center hover:bg-black transition-colors"
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
            <p className="mt-3 text-[13px] text-[#8e8e8e]">
              $99. Everything included — training, private community, and 12 months of live office hours.
            </p>
          </motion.div>
        </div>
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

      <span className="absolute bottom-8 left-8 md:left-16 lg:left-20 z-10 text-[12px] tracking-wide text-[#8e8e8e]">
        2026
      </span>
      <span className="absolute bottom-8 right-8 md:right-16 lg:right-20 z-10 text-[12px] tracking-wide text-[#8e8e8e]">
        sales training for women
      </span>
    </section>
  )
}
