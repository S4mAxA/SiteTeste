import React, { useState } from 'react'
import { motion } from 'framer-motion'

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulation d'envoi (remplacer par votre logique d'API)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000)
    }, 2000)
  }

  return (
    <section id="cta" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background avec dégradé néon */}
      <div className="absolute inset-0 bg-luna-gradient opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-violet/10 to-neon-cyan/10" />
      
      {/* Éléments décoratifs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 w-64 h-64 bg-neon-blue/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-20 w-80 h-80 bg-neon-violet/20 rounded-full blur-3xl"
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
                Contactez-nous
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl lg:text-5xl font-display font-bold text-luna-text mb-6"
              >
                Prêt à découvrir{' '}
                <span className="text-gradient">votre style unique ?</span>
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
                Que vous cherchiez des conseils personnalisés, des informations sur nos produits 
                ou que vous souhaitiez simplement nous faire part de vos impressions, 
                notre équipe est là pour vous accompagner.
              </p>
              
              <p>
                Envoyez-nous un message et nous vous répondrons dans les plus brefs délais. 
                Votre satisfaction est notre priorité !
              </p>
            </motion.div>

            {/* Informations de contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-4 pt-6"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-luna-accent/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-luna-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-luna-text">Email</div>
                  <div className="text-luna-text-secondary">contact@thrift-country.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-luna-accent/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-luna-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-luna-text">Réponse</div>
                  <div className="text-luna-text-secondary">Sous 24h</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="card-glass p-8 relative overflow-hidden">
              {/* Image de fond stylisée */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-violet/10 rounded-3xl" />
              
              {/* Contenu du formulaire */}
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-semibold text-luna-text mb-6 text-center">
                  Envoyez-nous un message
                </h3>

                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-luna-text mb-2">Message envoyé !</h4>
                    <p className="text-luna-text-secondary">Nous vous répondrons dans les plus brefs délais.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-luna-text mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="input-luna w-full"
                        placeholder="Votre nom complet"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-luna-text mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="input-luna w-full"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-luna-text mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="input-luna w-full resize-none"
                        placeholder="Comment pouvons-nous vous aider ?"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Envoi en cours...</span>
                        </div>
                      ) : (
                        'Envoyer le message'
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </div>

            {/* Éléments décoratifs flottants */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 15, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-6 -right-6 w-20 h-20 bg-neon-cyan/30 rounded-2xl blur-xl"
            />
            
            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -15, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-neon-pink/30 rounded-2xl blur-xl"
            />
          </motion.div>
        </div>

        {/* CTA supplémentaire */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="card-glass p-8 max-w-3xl mx-auto">
            <h3 className="text-3xl font-display font-bold text-luna-text mb-6">
              Prêt à commencer votre collection ?
            </h3>
            <p className="text-xl text-luna-text-secondary mb-8 max-w-2xl mx-auto">
              Découvrez dès maintenant notre sélection exclusive de vêtements vintage et streetwear sur Vinted
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://www.vinted.fr/member/20464878"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-10 py-5"
              >
                Découvrir sur Vinted
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-10 py-5"
              >
                Suivre nos arrivages
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
