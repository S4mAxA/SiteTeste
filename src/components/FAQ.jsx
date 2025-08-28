import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqItems = [
    {
      question: "Comment puis-je acheter vos produits ?",
      answer: "Nos produits sont disponibles sur Vinted. Vous pouvez accéder à notre boutique en cliquant sur le lien 'Voir sur Vinted' dans la section produits. Nous proposons également un service de contact direct pour des demandes spéciales."
    },
    {
      question: "Quels sont vos délais de livraison ?",
      answer: "Nous expédions dans toute l'Europe avec des délais de 3-7 jours ouvrés selon votre localisation. Toutes nos expéditions incluent un suivi en temps réel et une assurance."
    },
    {
      question: "Comment garantissez-vous l'authenticité de vos produits ?",
      answer: "Chaque pièce est soigneusement sélectionnée et authentifiée par nos experts. Nous vérifions les étiquettes, la qualité des matériaux et l'histoire de chaque vêtement avant de l'ajouter à notre collection."
    },
    {
      question: "Proposez-vous des retours ?",
      answer: "Oui, nous acceptons les retours sous 14 jours dans leur état d'origine. Nous nous engageons à vous offrir une expérience d'achat satisfaisante et transparente."
    },
    {
      question: "À quelle fréquence ajoutez-vous de nouveaux produits ?",
      answer: "Nous ajoutons de nouveaux produits chaque semaine ! Suivez-nous sur Vinted pour être informé des dernières arrivages et ne manquer aucune pièce exclusive."
    },
    {
      question: "Pouvez-vous me conseiller sur le choix d'un vêtement ?",
      answer: "Absolument ! Notre équipe est passionnée de mode et se fera un plaisir de vous conseiller. N'hésitez pas à nous contacter via Vinted ou directement pour des recommandations personnalisées."
    },
    {
      question: "Vos produits sont-ils en bon état ?",
      answer: "Tous nos produits sont en excellent état et soigneusement inspectés. Nous indiquons clairement l'état de chaque pièce avec des photos détaillées et une description précise."
    },
    {
      question: "Proposez-vous des tailles variées ?",
      answer: "Oui, nous proposons une large gamme de tailles pour satisfaire tous les styles et morphologies. Chaque produit est photographié avec des mesures précises pour vous aider à choisir la bonne taille."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gradient mb-6">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-luna-text-secondary max-w-3xl mx-auto">
            Trouvez rapidement les réponses à vos questions sur thrift_country et nos services
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-glass overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-luna-accent/5 transition-colors duration-300"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg lg:text-xl font-display font-semibold text-luna-text pr-4">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-6 h-6 text-luna-accent"
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pt-2 border-t border-luna-border/30">
                        <p className="text-luna-text-secondary leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="card-glass p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-semibold text-luna-text mb-4">
              Vous avez d'autres questions ?
            </h3>
            <p className="text-luna-text-secondary mb-6">
              Notre équipe est là pour vous aider. N'hésitez pas à nous contacter pour toute question ou demande spéciale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://www.vinted.fr/member/20464878"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Nous contacter sur Vinted
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Envoyer un message
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Informations supplémentaires */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-luna-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-luna-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-luna-text mb-2">Réponse rapide</h4>
            <p className="text-sm text-luna-text-secondary">Nous répondons sous 24h</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-luna-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-luna-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-luna-text mb-2">Service personnalisé</h4>
            <p className="text-sm text-luna-text-secondary">Conseils sur mesure</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-luna-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-luna-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-luna-text mb-2">Satisfaction garantie</h4>
            <p className="text-sm text-luna-text-secondary">98% de clients satisfaits</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
