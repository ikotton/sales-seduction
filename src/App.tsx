import { useState } from 'react'
import Community from './components/Community'
import Faq from './components/Faq'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Instructor from './components/Instructor'
import Navbar from './components/Navbar'
import Offer from './components/Offer'
import Phrases from './components/Phrases'
import SoundFamiliar from './components/SoundFamiliar'
import Testimonials from './components/Testimonials'
import Why from './components/Why'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-bg-base selection:bg-champagne selection:text-black">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
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
