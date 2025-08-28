import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Products from './components/Products'
import Story from './components/Story'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [showCookies, setShowCookies] = useState(true)

  // Scroll spy pour la navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'features', 'products', 'story', 'testimonials', 'faq', 'cta']
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Masquer le banner cookies après acceptation
  const handleAcceptCookies = () => {
    setShowCookies(false)
    localStorage.setItem('cookiesAccepted', 'true')
  }

  useEffect(() => {
    if (localStorage.getItem('cookiesAccepted')) {
      setShowCookies(false)
    }
  }, [])

  return (
    <div className="min-h-screen bg-luna-bg relative overflow-x-hidden">
      {/* Background animé */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-starfield opacity-20 animate-starfield"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-luna-bg via-luna-bg-secondary to-luna-bg animate-gradient-shift"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10">
        <Navbar activeSection={activeSection} />
        
        <main>
          <Hero />
          <Features />
          <Products />
          <Story />
          <Testimonials />
          <FAQ />
          <CTA />
        </main>

        <Footer />
      </div>

      {/* Banner cookies */}
      <AnimatePresence>
        {showCookies && (
          <CookieBanner onAccept={handleAcceptCookies} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
