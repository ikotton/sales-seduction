import { Flower2 } from 'lucide-react'
import { useEffect, useState } from 'react'

const ENTRANCE = 'cubic-bezier(0.16, 1, 0.3, 1)'
const OVERLAY = 'cubic-bezier(0.76, 0, 0.24, 1)'

const LINKS = [
  { label: 'The Phrases', href: '#phrases' },
  { label: 'Community', href: '#community' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Questions', href: '#faq' },
]

type Props = {
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
}

export default function Navbar({ menuOpen, setMenuOpen }: Props) {
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 100)
    return () => window.clearTimeout(t)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const enter = (delay: number) => ({
    transitionTimingFunction: ENTRANCE,
    transitionDelay: mounted ? `${delay}ms` : '0ms',
  })

  const slide = `transition-all duration-700 ${
    mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
  }`

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          <a
            href="#top"
            className={`text-white text-xl md:text-2xl font-semibold tracking-tight z-50 ${slide}`}
            style={enter(0)}
          >
            Sales Seduction
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`hidden md:flex px-5 py-2 rounded-full border border-white/20 text-white/90 text-sm hover:bg-white/10 items-center gap-2 z-50 ${slide}`}
            style={enter(200)}
          >
            {menuOpen ? 'Close' : 'Navigate'}
          </button>

          <div className={`hidden md:flex z-50 ${slide}`} style={enter(400)}>
            <Flower2 className="w-7 h-7 text-white/90" />
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 z-50 ${slide}`}
            style={enter(200)}
          >
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-500 ${
                menuOpen ? 'rotate-45 translate-y-[4px]' : ''
              }`}
              style={{ transitionTimingFunction: OVERLAY }}
            />
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-500 ${
                menuOpen ? '-rotate-45 -translate-y-[4px]' : ''
              }`}
              style={{ transitionTimingFunction: OVERLAY }}
            />
          </button>
        </div>
      </nav>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-black flex flex-col items-center justify-center transition-all duration-700 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ transitionTimingFunction: OVERLAY }}
      >
        <div className="flex flex-col items-center gap-8">
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-white font-instrument text-4xl md:text-6xl hover:opacity-60 transition-all ${
                menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{
                transitionDuration: '600ms',
                transitionTimingFunction: OVERLAY,
                transitionDelay: menuOpen ? `${150 + i * 80}ms` : '0ms',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#buy"
            onClick={() => setMenuOpen(false)}
            className={`mt-4 inline-block px-8 py-3.5 bg-white text-black text-sm md:text-base font-medium rounded-full hover:bg-white/90 transition-all ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{
              transitionDuration: '600ms',
              transitionTimingFunction: OVERLAY,
              transitionDelay: menuOpen ? `${150 + LINKS.length * 80}ms` : '0ms',
            }}
          >
            Get instant access — $99
          </a>
        </div>
      </div>
    </>
  )
}
