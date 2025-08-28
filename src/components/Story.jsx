import React from 'react'
import { motion } from 'framer-motion'

const Story = () => {
  return (
    <section id="story" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background avec dégradé néon */}
      <div className="absolute inset-0 bg-luna-gradient opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-neon-violet/20 to-neon-cyan/20" />
      
      {/* Éléments décoratifs flottants */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-32 h-32 bg-neon-blue/30 rounded-full blur-2xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-neon-violet/30 rounded-full blur-2xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contenu texte */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-4 py-2 bg-luna-accent/20 text-luna-accent rounded-full text-sm font-medium border border-luna-accent/30 mb-4"
              >
                Notre Histoire
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl lg:text-5xl font-display font-bold text-luna-text mb-6"
              >
                Plus qu'une boutique,{' '}
                <span className="text-gradient">une passion</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-6 text-lg text-luna-text-secondary leading-relaxed"
            >
              <p>
                thrift_country est né d'une passion authentique pour la mode vintage et le streetwear. 
                Notre fondateur, passionné de mode depuis son plus jeune âge, a commencé à collectionner 
                des pièces uniques il y a plus de 10 ans.
              </p>
              
              <p>
                Ce qui était au départ une simple passion est devenu une mission : partager avec le monde 
                ces trésors vestimentaires qui ont une histoire, un caractère unique que les vêtements 
                modernes ne peuvent pas reproduire.
              </p>

              <p>
                Aujourd'hui, notre communauté de plus de 199 abonnés fait confiance à thrift_country 
                pour découvrir des pièces authentiques, de qualité, et qui racontent une histoire.
              </p>
            </motion.div>

            {/* Statistiques */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-6"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-luna-accent">10+</div>
                <div className="text-sm text-luna-text-secondary">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-luna-accent">1000+</div>
                <div className="text-sm text-luna-text-secondary">Pièces vendues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-luna-accent">180+</div>
                <div className="text-sm text-luna-text-secondary">Évaluations 5★</div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className="pt-6"
            >
              <motion.a
                href="https://www.vinted.fr/member/20464878"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Découvrir notre collection</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Visuel côté droit */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Carte principale avec glassmorphism */}
            <div className="card-glass p-8 relative overflow-hidden">
              {/* Image de fond stylisée */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-violet/20 rounded-3xl" />
              
              {/* Contenu de la carte */}
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 bg-luna-gradient rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <span className="text-white text-4xl">🧢</span>
                </div>
                
                <h3 className="text-2xl font-display font-semibold text-luna-text mb-4">
                  Authenticité Garantie
                </h3>
                
                <p className="text-luna-text-secondary mb-6">
                  Chaque pièce est soigneusement sélectionnée et authentifiée par nos experts passionnés
                </p>

                {/* Badges de qualité */}
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
                    ✓ Authentique
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">
                    ✓ Qualité Premium
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                    ✓ Style Unique
                  </span>
                </div>
              </div>
            </div>

            {/* Éléments flottants décoratifs */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-neon-cyan/30 rounded-2xl blur-xl"
            />
            
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-neon-pink/30 rounded-2xl blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Story
