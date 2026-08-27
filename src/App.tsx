import { useState } from 'react'
import Atmosphere from './components/Atmosphere'
import Community from './components/Community'
import Faq from './components/Faq'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Instructor from './components/Instructor'
import { ScrollProgress } from './components/Kinetic'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
import Offer from './components/Offer'
import Phrases from './components/Phrases'
import SoundFamiliar from './components/SoundFamiliar'
import Testimonials from './components/Testimonials'
import Why from './components/Why'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="grain relative min-h-screen bg-bg-base selection:bg-gold selection:text-black">
      <ScrollProgress />
      {/* one sky behind the whole document, not just the hero */}
      <Atmosphere />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <Why />
        <SoundFamiliar />
        <Phrases />
        <Community />
        <HowItWorks />
        <Instructor />
        <Offer />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
