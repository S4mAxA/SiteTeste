import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)

  // Données des produits basées sur le dossier Product
  const products = [
    {
      id: 1,
      name: "Collection Vintage Y2K",
      category: "Vintage",
      description: "Pièces authentiques des années 2000, style rétro unique et tendance.",
      price: "À partir de 25€",
      images: [
        "/Product/Product1/1754868234 (1).webp",
        "/Product/Product1/1754868234 (2).webp",
        "/Product/Product1/1754868234 (3).webp"
      ],
      features: ["Authentique", "Style Y2K", "Qualité premium"]
    },
    {
      id: 2,
      name: "Streetwear Urban",
      category: "Streetwear",
      description: "Collection streetwear moderne et urbaine, pièces exclusives et tendances.",
      price: "À partir de 35€",
      images: [
        "/Product/Product2/1748806243 (1).webp",
        "/Product/Product2/1748806243 (2).webp",
        "/Product/Product2/1748806243 (3).webp"
      ],
      features: ["Exclusif", "Style urbain", "Tendance"]
    },
    {
      id: 3,
      name: "Essentiels Premium",
      category: "Essentiels",
      description: "Pièces de base de qualité exceptionnelle, parfaites pour tous les jours.",
      price: "À partir de 20€",
      images: [
        "/Product/Product3/1746201489 (1).webp",
        "/Product/Product3/1746201489 (2).webp",
        "/Product/Product3/1746201489 (3).webp"
      ],
      features: ["Qualité", "Polyvalent", "Durable"]
    }
  ]

  const openProductModal = (product) => {
    setSelectedProduct(product)
  }

  const closeProductModal = () => {
    setSelectedProduct(null)
  }

  return (
    <section id="products" className="py-20 lg:py-32 relative">
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
            Nos Produits Vedettes
          </h2>
          <p className="text-xl text-luna-text-secondary max-w-3xl mx-auto">
            Découvrez notre sélection exclusive de vêtements vintage et streetwear, 
            soigneusement choisis pour leur qualité et leur style unique
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="card-glass overflow-hidden group cursor-pointer"
              onClick={() => openProductModal(product)}
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-luna-accent/90 backdrop-blur-sm text-white text-sm rounded-full font-medium">
                    {product.category}
                  </span>
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-luna-bg/90 backdrop-blur-sm text-luna-accent text-sm rounded-full font-medium">
                    {product.price}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-luna-text mb-3">
                  {product.name}
                </h3>
                <p className="text-luna-text-secondary mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-luna-accent/10 text-luna-accent text-xs rounded-lg border border-luna-accent/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary"
                >
                  Voir le produit
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="card-glass p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-semibold text-luna-text mb-4">
              Plus de produits disponibles
            </h3>
            <p className="text-luna-text-secondary mb-6">
              Découvrez notre collection complète sur Vinted et suivez-nous pour les dernières arrivages
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
                Voir sur Vinted
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Nous contacter
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeProductModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="card-glass max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-3xl font-display font-bold text-luna-text">
                    {selectedProduct.name}
                  </h2>
                  <button
                    onClick={closeProductModal}
                    className="p-2 rounded-xl hover:bg-luna-accent/10 transition-colors"
                  >
                    <svg className="w-6 h-6 text-luna-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Product Images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {selectedProduct.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedProduct.name} - Image ${index + 1}`}
                      className="w-full h-48 object-cover rounded-2xl"
                    />
                  ))}
                </div>

                {/* Product Details */}
                <div className="space-y-4">
                  <p className="text-luna-text-secondary text-lg leading-relaxed">
                    {selectedProduct.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-luna-accent">
                      {selectedProduct.price}
                    </span>
                    <span className="px-3 py-1 bg-luna-accent/10 text-luna-accent rounded-full border border-luna-accent/20">
                      {selectedProduct.category}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-luna-accent/10 text-luna-accent text-sm rounded-lg border border-luna-accent/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <motion.a
                    href="https://www.vinted.fr/member/20464878"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary flex-1 text-center"
                  >
                    Acheter sur Vinted
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-secondary flex-1"
                  >
                    Nous contacter
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Products
