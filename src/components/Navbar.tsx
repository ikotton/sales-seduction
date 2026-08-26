import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'the phrases', href: '#phrases' },
  { label: 'community', href: '#community' },
  { label: 'how it works', href: '#how-it-works' },
  { label: 'questions', href: '#faq' },
]

function Clover({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        fill="#1a1a1a"
        d="M16 0c1.9 5.2 4.4 8.2 8.5 9.8-4.1 1.6-6.6 4.6-8.5 9.8-1.9-5.2-4.4-8.2-8.5-9.8C11.6 8.2 14.1 5.2 16 0Z"
      />
      <path
        fill="#1a1a1a"
        d="M16 12.4c1.9 5.2 4.4 8.2 8.5 9.8-4.1 1.6-6.6 4.6-8.5 9.8-1.9-5.2-4.4-8.2-8.5-9.8 4.1-1.6 6.6-4.6 8.5-9.8Z"
      />
      <path
        fill="#1a1a1a"
        d="M0 16c5.2-1.9 8.2-4.4 9.8-8.5 1.6 4.1 4.6 6.6 9.8 8.5-5.2 1.9-8.2 4.4-9.8 8.5C8.2 20.4 5.2 17.9 0 16Z"
      />
      <path
        fill="#1a1a1a"
        d="M12.4 16c5.2-1.9 8.2-4.4 9.8-8.5 1.6 4.1 4.6 6.6 9.8 8.5-5.2 1.9-8.2 4.4-9.8 8.5-1.6-4.1-4.6-6.6-9.8-8.5Z"
      />
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // The spec'd gradient is built for the light hero. Past it the bar crosses dark
  // sections, where a translucent light wash leaves the links grey-on-grey — so
  // once we're off the hero the bar goes solid and the links stay readable.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-4 md:py-5 bg-bg-base/90 backdrop-blur-xl border-b border-black/[0.06]'
          : 'py-6 md:py-10 bg-gradient-to-b from-[#f1f1f1]/80 to-transparent backdrop-blur-[2px]'
      }`}
    >
      <div className="grid grid-cols-12 max-w-7xl mx-auto px-8 md:px-16 lg:px-20 items-center gap-x-4">
        {/* Cols 1–3 · brand */}
        <a href="#top" className="col-span-6 md:col-span-3 flex items-center gap-2.5">
          <Clover className="w-5 h-5 shrink-0" />
          <span className="font-display text-[19px] md:text-[21px] font-medium tracking-tight text-[#1a1a1a] whitespace-nowrap">
            sales seduction
          </span>
        </a>

        {/* Cols 4–9 · links */}
        <nav className="hidden md:flex col-span-6 md:col-start-4 items-center gap-7 lg:gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] lowercase text-[#5c5c5c] hover:text-[#1a1a1a] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Cols 10–12 · actions */}
        <div className="col-span-6 md:col-span-3 flex items-center justify-end gap-4 md:gap-5">
          <a
            href="#why"
            className="hidden md:inline text-[13px] lowercase text-[#5c5c5c] hover:text-[#1a1a1a] transition-colors"
          >
            why sales
          </a>
          <a
            href="#buy"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#1a1a1a] text-white text-[13px] font-medium px-4 py-2.5 rounded-full hover:bg-black transition-colors whitespace-nowrap"
          >
            get instant access <span aria-hidden="true">→</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="md:hidden w-9 h-9 -mr-1 flex flex-col items-center justify-center gap-[5px] shrink-0"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="block w-5 h-[1.5px] bg-[#1a1a1a] origin-center"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="block w-5 h-[1.5px] bg-[#1a1a1a] origin-center"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-8 pt-6 pb-2 flex flex-col gap-4">
              {[...NAV_LINKS, { label: 'why sales', href: '#why' }].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[15px] lowercase text-[#3a3a3a]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#buy"
                onClick={() => setOpen(false)}
                className="sm:hidden mt-1 inline-flex w-fit items-center gap-1.5 bg-[#1a1a1a] text-white text-[13px] font-medium px-4 py-2.5 rounded-full"
              >
                get instant access <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
