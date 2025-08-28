// ===== VARIABLES GLOBALES =====
let currentTestimonialIndex = 0;
let testimonialInterval;
let isScrolling = false;

// ===== ÉLÉMENTS DOM =====
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const scrollToTopBtn = document.getElementById('scroll-to-top');
const cookieBanner = document.getElementById('cookie-banner');
const cookieAccept = document.getElementById('cookie-accept');
const cookieRefuse = document.getElementById('cookie-refuse');
const contactForm = document.getElementById('contact-form');
const newsletterForm = document.getElementById('newsletter-form');
const currentYearSpan = document.getElementById('current-year');

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialiser l'année courante
    updateCurrentYear();
    
    // Initialiser la navigation mobile
    initMobileNav();
    
    // Initialiser le scroll-spy
    initScrollSpy();
    
    // Initialiser les animations au scroll
    initScrollAnimations();
    
    // Initialiser le slider de témoignages
    initTestimonialsSlider();
    
    // Initialiser le bouton retour en haut
    initScrollToTop();
    
    // Initialiser la gestion des cookies
    initCookieBanner();
    
    // Initialiser les formulaires
    initForms();
    
    // Initialiser le parallax
    initParallax();
    
    // Initialiser les événements de scroll
    initScrollEvents();
}

// ===== NAVIGATION MOBILE =====
function initMobileNav() {
    if (!navToggle || !navMenu) return;
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animation du bouton hamburger
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Fermer le menu en cliquant sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            // Reset du bouton hamburger
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// ===== SCROLL-SPY =====
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveSection() {
        if (isScrolling) return;
        
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                // Mettre à jour le lien actif
                navLinks.forEach(link => {
                    link.removeAttribute('aria-current');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.setAttribute('aria-current', 'page');
                    }
                });
            }
        });
    }
    
    // Utiliser throttle pour optimiser les performances
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateActiveSection);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
    
    // Mise à jour initiale
    updateActiveSection();
}

// ===== ANIMATIONS AU SCROLL =====
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal');
    
    function revealOnScroll() {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('in-view');
            }
        });
    }
    
    // Utiliser Intersection Observer pour de meilleures performances
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        revealElements.forEach(element => {
            observer.observe(element);
        });
    } else {
        // Fallback pour les navigateurs plus anciens
        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Vérification initiale
    }
}

// ===== SLIDER DE TÉMOIGNAGES =====
function initTestimonialsSlider() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (!testimonialCards.length) return;
    
    function showTestimonial(index) {
        // Masquer tous les témoignages
        testimonialCards.forEach(card => card.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Afficher le témoignage actuel
        testimonialCards[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentTestimonialIndex = index;
    }
    
    function nextTestimonial() {
        const nextIndex = (currentTestimonialIndex + 1) % testimonialCards.length;
        showTestimonial(nextIndex);
    }
    
    function prevTestimonial() {
        const prevIndex = currentTestimonialIndex === 0 ? testimonialCards.length - 1 : currentTestimonialIndex - 1;
        showTestimonial(prevIndex);
    }
    
    // Événements des boutons
    if (nextBtn) {
        nextBtn.addEventListener('click', nextTestimonial);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevTestimonial);
    }
    
    // Événements des points
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showTestimonial(index));
    });
    
    // Auto-rotation
    function startAutoRotation() {
        testimonialInterval = setInterval(nextTestimonial, 5000);
    }
    
    function stopAutoRotation() {
        clearInterval(testimonialInterval);
    }
    
    // Démarrer l'auto-rotation
    startAutoRotation();
    
    // Pause au survol
    const slider = document.querySelector('.testimonials-slider');
    if (slider) {
        slider.addEventListener('mouseenter', stopAutoRotation);
        slider.addEventListener('mouseleave', startAutoRotation);
    }
    
    // Navigation clavier
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevTestimonial();
        } else if (e.key === 'ArrowRight') {
            nextTestimonial();
        }
    });
}

// ===== BOUTON RETOUR EN HAUT =====
function initScrollToTop() {
    if (!scrollToTopBtn) return;
    
    function toggleScrollToTop() {
        if (window.scrollY > 500) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    }
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', toggleScrollToTop);
}

// ===== GESTION DES COOKIES =====
function initCookieBanner() {
    if (!cookieBanner || !cookieAccept || !cookieRefuse) return;
    
    // Vérifier si le consentement a déjà été donné
    const consent = localStorage.getItem('cookieConsent');
    
    if (consent === null) {
        // Afficher le bandeau après un délai
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 2000);
    }
    
    // Gérer l'acceptation
    cookieAccept.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'accepted');
        hideCookieBanner();
        // Ici vous pourriez activer Google Analytics ou autres services
    });
    
    // Gérer le refus
    cookieRefuse.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'refused');
        hideCookieBanner();
        // Ici vous pourriez désactiver les services de tracking
    });
    
    function hideCookieBanner() {
        cookieBanner.classList.remove('show');
    }
}

// ===== FORMULAIRES =====
function initForms() {
    // Formulaire de contact
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Formulaire newsletter
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterForm);
    }
}

function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Validation basique
    if (!name || !email || !message) {
        showNotification('Veuillez remplir tous les champs obligatoires.', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Veuillez entrer une adresse email valide.', 'error');
        return;
    }
    
    // Simulation d'envoi
    showNotification('Envoi en cours...', 'info');
    
    setTimeout(() => {
        showNotification('Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.', 'success');
        contactForm.reset();
    }, 2000);
}

function handleNewsletterForm(e) {
    e.preventDefault();
    
    const formData = new FormData(newsletterForm);
    const email = formData.get('email');
    
    if (!email || !isValidEmail(email)) {
        showNotification('Veuillez entrer une adresse email valide.', 'error');
        return;
    }
    
    showNotification('Inscription à la newsletter réussie !', 'success');
    newsletterForm.reset();
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Créer la notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Styles de base
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 12px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
        word-wrap: break-word;
    `;
    
    // Couleurs selon le type
    switch (type) {
        case 'success':
            notification.style.background = 'linear-gradient(135deg, #FFFFFF 0%, #CCCCCC 100%)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(135deg, #CCCCCC 0%, #999999 100%)';
            break;
        case 'info':
        default:
            notification.style.background = 'linear-gradient(135deg, #999999 0%, #666666 100%)';
            break;
    }
    
    // Ajouter au DOM
    document.body.appendChild(notification);
    
    // Animation d'entrée
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto-suppression
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// ===== PARALLAX =====
function initParallax() {
    const parallaxElements = document.querySelectorAll('.gradient-orb, .floating-element, .neon-gradient');
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.1 + (index * 0.05);
            element.style.transform = `translateY(${rate * speed}px)`;
        });
    }
    
    // Utiliser requestAnimationFrame pour de meilleures performances
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// ===== ÉVÉNEMENTS DE SCROLL =====
function initScrollEvents() {
    let scrollTimeout;
    
    function handleScroll() {
        isScrolling = true;
        
        // Effet de transparence sur la navbar
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(11, 15, 26, 0.95)';
            } else {
                navbar.style.background = 'rgba(11, 15, 26, 0.8)';
            }
        }
        
        // Débouncer le scroll-spy
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            isScrolling = false;
        }, 100);
    }
    
    window.addEventListener('scroll', handleScroll);
}

// ===== MISE À JOUR DE L'ANNÉE =====
function updateCurrentYear() {
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
}

// ===== GESTION DES PRODUITS =====
function initProductActions() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const viewBtn = card.querySelector('.btn-secondary');
        const addToCartBtn = card.querySelector('.btn-primary');
        
        if (viewBtn) {
            viewBtn.addEventListener('click', function() {
                const productName = card.querySelector('h3').textContent;
                showProductModal(productName);
            });
        }
        
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', function() {
                const productName = card.querySelector('h3').textContent;
                addToCart(productName);
            });
        }
    });
}

function showProductModal(productName) {
    // Créer une modale simple pour afficher les détails du produit
    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${productName}</h3>
                    <button class="modal-close" aria-label="Fermer">&times;</button>
                </div>
                <div class="modal-body">
                    <p>Détails du produit à venir...</p>
                    <a href="https://www.vinted.fr/member/20464878" target="_blank" class="btn btn-primary">
                        Voir sur Vinted
                    </a>
                </div>
            </div>
        </div>
    `;
    
    // Styles de la modale
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    `;
    
    const overlay = modal.querySelector('.modal-overlay');
    overlay.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    const content = modal.querySelector('.modal-content');
    content.style.cssText = `
        background: var(--color-bg-secondary);
        border: 1px solid var(--glass-border);
        border-radius: var(--radius-xl);
        padding: var(--spacing-xl);
        max-width: 500px;
        width: 100%;
        position: relative;
        backdrop-filter: blur(20px);
    `;
    
    const header = modal.querySelector('.modal-header');
    header.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: var(--spacing-lg);
        padding-bottom: var(--spacing-md);
        border-bottom: 1px solid var(--glass-border);
    `;
    
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: var(--color-text-primary);
        font-size: 2rem;
        cursor: pointer;
        padding: 0;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.3s ease;
    `;
    
    closeBtn.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(255, 255, 255, 0.1)';
    });
    
    closeBtn.addEventListener('mouseleave', function() {
        this.style.background = 'none';
    });
    
    // Fermer la modale
    function closeModal() {
        modal.style.opacity = '0';
        setTimeout(() => {
            if (modal.parentNode) {
                modal.parentNode.removeChild(modal);
            }
        }, 300);
    }
    
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    
    // Ajouter au DOM
    document.body.appendChild(modal);
    
    // Animation d'entrée
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

function addToCart(productName) {
    showNotification(`${productName} ajouté au panier !`, 'success');
    
    // Ici vous pourriez implémenter la logique du panier
    // Pour l'instant, on simule juste l'ajout
}

// ===== GESTION DES ERREURS =====
window.addEventListener('error', function(e) {
    console.error('Erreur JavaScript:', e.error);
});

// ===== PERFORMANCE =====
// Optimisation du scroll avec passive listeners
function addPassiveScrollListener(element, handler) {
    element.addEventListener('scroll', handler, { passive: true });
}

// ===== ACCESSIBILITÉ =====
// Gestion du focus pour la navigation clavier
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// ===== RESPECT DE PREFERS-REDUCED-MOTION =====
function checkReducedMotion() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        // Désactiver les animations
        document.documentElement.style.setProperty('--transition-fast', '0.01ms');
        document.documentElement.style.setProperty('--transition-normal', '0.01ms');
        document.documentElement.style.setProperty('--transition-slow', '0.01ms');
        
        // Arrêter l'auto-rotation des témoignages
        if (testimonialInterval) {
            clearInterval(testimonialInterval);
        }
    }
}

// Vérifier au chargement et lors du changement de préférence
checkReducedMotion();
window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', checkReducedMotion);

// ===== INITIALISATION FINALE =====
// Attendre que tout soit chargé
window.addEventListener('load', function() {
    // Initialiser les actions des produits
    initProductActions();
    
    // Vérifier si tous les éléments sont bien chargés
    console.log('Site thrift_country chargé avec succès !');
    
    // Animation d'entrée du site
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== EFFETS PARTICULES INTERACTIVES =====
class ParticleSystem {
    constructor() {
        this.particlesContainer = null;
        this.mouseTrails = [];
        this.ripples = [];
        this.gridDots = [];
        this.connectionLines = [];
        this.distortionEffect = null;
        this.mouseX = 0;
        this.mouseY = 0;
        this.isInitialized = false;
        
        this.init();
    }
    
    init() {
        this.createParticlesContainer();
        this.createGridDots();
        this.createConnectionLines();
        this.createDistortionEffect();
        this.bindEvents();
        this.startParticleGeneration();
        this.isInitialized = true;
    }
    
    createParticlesContainer() {
        this.particlesContainer = document.createElement('div');
        this.particlesContainer.className = 'particles-container';
        document.body.appendChild(this.particlesContainer);
    }
    
    createGridDots() {
        const gridContainer = document.createElement('div');
        gridContainer.className = 'grid-dots';
        
        const gridSize = 50;
        const cols = Math.ceil(window.innerWidth / gridSize);
        const rows = Math.ceil(window.innerHeight / gridSize);
        
        for (let i = 0; i < cols * rows; i++) {
            const dot = document.createElement('div');
            dot.className = 'grid-dot';
            dot.style.left = (i % cols) * gridSize + 'px';
            dot.style.top = Math.floor(i / cols) * gridSize + 'px';
            dot.style.animationDelay = Math.random() * 4 + 's';
            gridContainer.appendChild(dot);
            this.gridDots.push(dot);
        }
        
        document.body.appendChild(gridContainer);
    }
    
    createConnectionLines() {
        for (let i = 0; i < 5; i++) {
            const line = document.createElement('div');
            line.className = 'connection-line';
            line.style.top = Math.random() * window.innerHeight + 'px';
            line.style.width = Math.random() * 200 + 100 + 'px';
            line.style.animationDelay = Math.random() * 8 + 's';
            line.style.left = '-200px';
            document.body.appendChild(line);
            this.connectionLines.push(line);
        }
    }
    
    createDistortionEffect() {
        this.distortionEffect = document.createElement('div');
        this.distortionEffect.className = 'distortion-effect';
        document.body.appendChild(this.distortionEffect);
    }
    
    bindEvents() {
        document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        document.addEventListener('click', (e) => this.handleClick(e));
        document.addEventListener('mouseenter', () => this.handleMouseEnter());
        document.addEventListener('mouseleave', () => this.handleMouseLeave());
        
        // Effet de parallaxe sur les éléments
        document.addEventListener('mousemove', (e) => this.handleParallax(e));
        
        // Animation d'entrée
        window.addEventListener('load', () => this.triggerEntranceAnimation());
    }
    
    handleMouseMove(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        
        // Mise à jour de l'effet de distorsion
        if (this.distortionEffect) {
            this.distortionEffect.style.setProperty('--mouse-x', this.mouseX + 'px');
            this.distortionEffect.style.setProperty('--mouse-y', this.mouseY + 'px');
            this.distortionEffect.classList.add('active');
        }
        
        // Création de traînée de souris
        this.createMouseTrail(e.clientX, e.clientY);
        
        // Attraction des particules vers la souris
        this.attractParticles(e.clientX, e.clientY);
    }
    
    handleClick(e) {
        this.createRipple(e.clientX, e.clientY);
        this.createParticleBurst(e.clientX, e.clientY);
    }
    
    handleMouseEnter() {
        if (this.distortionEffect) {
            this.distortionEffect.classList.add('active');
        }
    }
    
    handleMouseLeave() {
        if (this.distortionEffect) {
            this.distortionEffect.classList.remove('active');
        }
    }
    
    handleParallax(e) {
        const parallaxElements = document.querySelectorAll('.parallax-element');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.1 + (index * 0.05);
            const x = (mouseX - 0.5) * speed * 20;
            const y = (mouseY - 0.5) * speed * 20;
            element.style.transform = `translate(${x}px, ${y}px)`;
        });
    }
    
    createMouseTrail(x, y) {
        const trail = document.createElement('div');
        trail.className = 'mouse-trail';
        trail.style.left = x + 'px';
        trail.style.top = y + 'px';
        document.body.appendChild(trail);
        
        this.mouseTrails.push(trail);
        
        setTimeout(() => {
            if (trail.parentNode) {
                trail.parentNode.removeChild(trail);
            }
            this.mouseTrails = this.mouseTrails.filter(t => t !== trail);
        }, 600);
    }
    
    createRipple(x, y) {
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        document.body.appendChild(ripple);
        
        this.ripples.push(ripple);
        
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
            this.ripples = this.ripples.filter(r => r !== ripple);
        }, 1500);
    }
    
    createParticleBurst(x, y) {
        for (let i = 0; i < 8; i++) {
            const particle = this.createParticle();
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.animationDuration = (Math.random() * 2 + 1) + 's';
            particle.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;
        }
    }
    
    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 20 + 10;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = window.innerHeight + 'px';
        
        this.particlesContainer.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 20000);
        
        return particle;
    }
    
    startParticleGeneration() {
        setInterval(() => {
            if (this.particlesContainer) {
                this.createParticle();
            }
        }, 500);
    }
    
    attractParticles(x, y) {
        const particles = this.particlesContainer.querySelectorAll('.particle');
        particles.forEach(particle => {
            const rect = particle.getBoundingClientRect();
            const particleX = rect.left + rect.width / 2;
            const particleY = rect.top + rect.height / 2;
            
            const distance = Math.sqrt((x - particleX) ** 2 + (y - particleY) ** 2);
            
            if (distance < 100) {
                const angle = Math.atan2(y - particleY, x - particleX);
                const force = (100 - distance) / 100;
                const moveX = Math.cos(angle) * force * 2;
                const moveY = Math.sin(angle) * force * 2;
                
                particle.style.transform += ` translate(${moveX}px, ${moveY}px)`;
            }
        });
    }
    
    triggerEntranceAnimation() {
        // Animation d'entrée pour les éléments principaux
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.classList.add('entrance-animation');
        }
        
        // Animation séquentielle pour les éléments
        const animatedElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-cta, .hero-stats');
        animatedElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                element.style.transition = 'all 0.8s ease';
                
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, 100);
            }, index * 200);
        });
        
        // Effet de révélation progressive
        setTimeout(() => {
            this.revealElements();
        }, 1000);
    }
    
    revealElements() {
        const revealElements = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        revealElements.forEach(element => {
            observer.observe(element);
        });
    }
}

// ===== UTILITAIRES =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
