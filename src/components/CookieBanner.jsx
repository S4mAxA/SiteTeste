import React from 'react'
import { motion } from 'framer-motion'

const CookieBanner = ({ onAccept }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-luna-card/95 backdrop-blur-xl border-t border-luna-border/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Texte d'information */}
          <div className="flex-1 text-center sm:text-left">
            <p className="text-luna-text-secondary text-sm sm:text-base">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
              En continuant à naviguer, vous acceptez notre utilisation des cookies.
            </p>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onAccept}
              className="btn-primary text-sm px-6 py-3"
            >
              Accepter
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary text-sm px-6 py-3"
            >
              En savoir plus
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default CookieBanner
