import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Marie L.",
      location: "Paris, France",
      rating: 5,
      text: "J'ai trouvé des pièces vintage incroyables sur thrift_country ! La qualité est exceptionnelle et le service client est au top. Je recommande vivement !",
      avatar: "👩‍🦰",
      category: "Vintage Y2K"
    },
    {
      id: 2,
      name: "Alexandre D.",
      location: "Lyon, France",
      rating: 5,
      text: "Enfin une boutique qui propose du vrai streetwear de qualité ! Les arrivages hebdomadaires me permettent de toujours avoir du style unique.",
      avatar: "👨‍🦱",
      category: "Streetwear"
    },
    {
      id: 3,
      name: "Sophie M.",
      location: "Marseille, France",
      rating: 5,
      text: "Service impeccable et pièces authentiques. J'ai acheté plusieurs articles et je suis bluffée par la qualité. Merci thrift_country !",
      avatar: "👩‍🦳",
      category: "Essentiels"
    },
    {
      id: 4,
      name: "Thomas B.",
      location: "Bordeaux, France",
      rating: 5,
      text: "Un vrai coup de cœur pour cette boutique ! Les vêtements ont du caractère et l'équipe est très professionnelle. Je reviendrai !",
      avatar: "👨‍🦲",
      category: "Vintage"
    }
  ]

  // Auto-rotation des témoignages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section id="testimonials" className="py-20 lg:py-32 relative">
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
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-luna-text-secondary max-w-3xl mx-auto">
            Découvrez les avis de notre communauté satisfaite et pourquoi ils font confiance à thrift_country
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-luna-card/80 backdrop-blur-sm border border-luna-border rounded-full flex items-center justify-center text-luna-accent hover:bg-luna-accent hover:text-white transition-all duration-300 shadow-luna"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-luna-card/80 backdrop-blur-sm border border-luna-border rounded-full flex items-center justify-center text-luna-accent hover:bg-luna-accent hover:text-white transition-all duration-300 shadow-luna"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Testimonial Content */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="card-glass p-8 lg:p-12 text-center"
              >
                {/* Avatar */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-20 h-20 bg-luna-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-4xl"
                >
                  {testimonials[currentIndex].avatar}
                </motion.div>

                {/* Rating */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex justify-center mb-6"
                >
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </motion.div>

                {/* Category Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mb-6"
                >
                  <span className="px-4 py-2 bg-luna-accent/20 text-luna-accent rounded-full text-sm font-medium border border-luna-accent/30">
                    {testimonials[currentIndex].category}
                  </span>
                </motion.div>

                {/* Testimonial Text */}
                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-xl lg:text-2xl text-luna-text-secondary leading-relaxed mb-8 italic"
                >
                  "{testimonials[currentIndex].text}"
                </motion.blockquote>

                {/* Author Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-center"
                >
                  <div className="font-semibold text-luna-text text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-luna-muted text-sm">
                    {testimonials[currentIndex].location}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-3 mt-8"
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-luna-accent scale-125'
                    : 'bg-luna-muted hover:bg-luna-accent/50'
                }`}
              />
            ))}
          </motion.div>
        </div>

        {/* Stats supplémentaires */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="card-glass p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-display font-semibold text-luna-text mb-6">
              Notre communauté en chiffres
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-luna-accent">180+</div>
                <div className="text-luna-text-secondary text-sm">Évaluations 5★</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-luna-accent">199</div>
                <div className="text-luna-text-secondary text-sm">Abonnés fidèles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-luna-accent">1000+</div>
                <div className="text-luna-text-secondary text-sm">Pièces vendues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-luna-accent">98%</div>
                <div className="text-luna-text-secondary text-sm">Clients satisfaits</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
