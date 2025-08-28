import React from 'react'
import { motion } from 'framer-motion'

const Features = () => {
  const features = [
    {
      icon: "🧢",
      title: "Vintage Authentique",
      description: "Sélection rigoureuse de pièces vintage authentiques, chacune avec son histoire unique et son charme rétro."
    },
    {
      icon: "👕",
      title: "Streetwear Premium",
      description: "Collection exclusive de streetwear de qualité, des pièces rares et tendances pour un style urbain affirmé."
    },
    {
      icon: "🗓️",
      title: "Arrivages Hebdomadaires",
      description: "Nouvelles pièces chaque semaine pour toujours découvrir des trésors uniques et rester à la pointe de la mode."
    },
    {
      icon: "🇪🇺",
      title: "Shipping EU",
      description: "Livraison rapide et sécurisée dans toute l'Europe, avec un suivi en temps réel de vos commandes."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="features" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gradient mb-6">
            Pourquoi choisir thrift_country ?
          </h2>
          <p className="text-xl text-luna-text-secondary max-w-3xl mx-auto">
            Découvrez ce qui fait de nous votre destination privilégiée pour des vêtements vintage et streetwear d'exception
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="card-glass p-8 text-center group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-6xl mb-6 group-hover:animate-bounce"
              >
                {feature.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-display font-semibold text-luna-text mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-luna-text-secondary leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect line */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                className="h-1 bg-luna-gradient rounded-full mt-6"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="card-glass p-8 max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h3 className="text-2xl font-display font-semibold text-luna-text mb-4">
                  Qualité & Authenticité Garanties
                </h3>
                <p className="text-luna-text-secondary mb-4">
                  Chaque pièce est soigneusement sélectionnée et authentifiée par nos experts. 
                  Nous garantissons la qualité et l'authenticité de tous nos produits.
                </p>
                <div className="flex items-center space-x-4 text-sm text-luna-muted">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    Vérifié Google
                  </span>
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    Email vérifié
                  </span>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-luna-gradient rounded-3xl flex items-center justify-center shadow-2xl">
                  <span className="text-white text-3xl">✓</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
