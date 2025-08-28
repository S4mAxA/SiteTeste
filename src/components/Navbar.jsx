import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'hero', label: 'Accueil' },
    { id: 'features', label: 'Points forts' },
    { id: 'products', label: 'Produits' },
    { id: 'story', label: 'Notre histoire' },
    { id: 'testimonials', label: 'Avis' },
    { id: 'faq', label: 'FAQ' },
    { id: 'cta', label: 'Contact' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-luna-card/80 backdrop-blur-xl border-b border-luna-border/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-luna-gradient rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-lg lg:text-xl">TC</span>
            </div>
            <span className="text-xl lg:text-2xl font-display font-bold text-gradient">
              thrift_country
            </span>
          </motion.div>

          {/* Navigation desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-luna-accent bg-luna-accent/10 border border-luna-accent/20'
                    : 'text-luna-text-secondary hover:text-luna-accent hover:bg-luna-accent/5'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Bouton mobile menu */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-luna-card/50 backdrop-blur-sm border border-luna-border"
          >
            <svg
              className="w-6 h-6 text-luna-text"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Menu mobile */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-luna-card/90 backdrop-blur-xl border-t border-luna-border/50 rounded-b-3xl overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-luna-accent bg-luna-accent/10 border border-luna-accent/20'
                        : 'text-luna-text-secondary hover:text-luna-accent hover:bg-luna-accent/5'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
