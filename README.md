# 🧢 thrift_country - Site Vitrine

Site vitrine one-page moderne et élégant pour la boutique e-commerce **thrift_country**, spécialisée dans les vêtements vintage et streetwear.

## ✨ Caractéristiques

- 🎨 **Design Luna Client** : Thème sombre premium avec dégradés néon bleu/violet
- 🔮 **Glassmorphism** : Effets de flou et transparence modernes
- 📱 **Responsive** : Mobile-first design avec breakpoints optimisés
- 🚀 **Performance** : Animations fluides 60fps avec Framer Motion
- ♿ **Accessibilité** : Support des standards WCAG et navigation clavier
- 🔍 **SEO Optimisé** : Métadonnées complètes et données structurées

## 🚀 Installation

### Prérequis
- Node.js 16+ 
- npm ou yarn

### Étapes d'installation

1. **Cloner le projet**
```bash
git clone [votre-repo]
cd thrift-country-site
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer en mode développement**
```bash
npm run dev
```

4. **Construire pour la production**
```bash
npm run build
```

5. **Prévisualiser la build**
```bash
npm run preview
```

## 🎨 Personnalisation

### Couleurs et Thème

Les couleurs sont définies dans `tailwind.config.js` :

```javascript
colors: {
  'luna': {
    'bg': '#0B0F1A',           // Fond principal
    'bg-secondary': '#111827',  // Fond secondaire
    'accent': '#5B8CFF',       // Accent principal (bleu)
    'accent-secondary': '#A45CFF', // Accent secondaire (violet)
    'text': '#F9FAFB',         // Texte principal
    'text-secondary': '#D1D5DB' // Texte secondaire
  }
}
```

### Images et Assets

#### Logo
- Remplacer le logo dans `src/components/Hero.jsx` et `src/components/Navbar.jsx`
- Format recommandé : SVG ou PNG haute résolution
- Taille recommandée : 200x200px minimum

#### Images de produits
- Placer vos images dans le dossier `public/Product/`
- Formats supportés : WebP, PNG, JPG
- Taille recommandée : 800x600px minimum

#### Structure des dossiers produits
```
public/Product/
├── Product1/
│   ├── image1.webp
│   ├── image2.webp
│   └── descriptif.txt
├── Product2/
│   ├── image1.webp
│   └── descriptif.docx
└── Product3/
    └── image1.webp
```

### Textes et Contenu

#### Informations de base
- **Nom de marque** : Modifier dans tous les composants
- **Slogan** : `src/components/Hero.jsx` ligne ~80
- **Description** : `src/components/Hero.jsx` ligne ~85

#### Produits
- **Données des produits** : `src/components/Products.jsx` lignes 6-40
- **Catégories** : Modifier les noms et descriptions
- **Prix** : Adapter selon votre gamme

#### Témoignages
- **Avis clients** : `src/components/Testimonials.jsx` lignes 6-30
- **Noms et localisations** : Personnaliser selon vos clients

#### FAQ
- **Questions/Réponses** : `src/components/FAQ.jsx` lignes 6-40
- **Informations de contact** : Adapter selon vos besoins

### Réseaux sociaux

Modifier les liens dans `src/components/Footer.jsx` :

```javascript
const socialLinks = [
  {
    name: "Vinted",
    href: "https://www.vinted.fr/member/20464878", // Votre profil Vinted
    // ...
  },
  {
    name: "Instagram",
    href: "https://instagram.com/votre-compte", // Votre Instagram
    // ...
  }
]
```

### Formulaire de contact

Le formulaire de contact est configuré dans `src/components/CTA.jsx` :

- **Champs** : Nom, Email, Message
- **Validation** : HTML5 native
- **Action** : Simulée (remplacer par votre API)

## 📱 Responsive Design

### Breakpoints
- **Mobile** : 320px - 767px
- **Tablet** : 768px - 1023px  
- **Desktop** : 1024px+

### Optimisations
- Images lazy-loadées
- Animations réduites sur mobile
- Navigation adaptative
- Grilles flexibles

## 🚀 Performance

### Métriques cibles
- **LCP** : < 2.5s
- **CLS** : < 0.1
- **JS Bundle** : < 150KB (gzippé)

### Optimisations incluses
- Code splitting automatique
- Images WebP avec fallbacks
- CSS purgé automatiquement
- Lazy loading des composants

## 🔧 Configuration avancée

### Tailwind CSS
- **Purge** : Activé automatiquement en production
- **Custom classes** : Définies dans `src/index.css`
- **Animations** : Personnalisées dans `tailwind.config.js`

### Framer Motion
- **Animations** : Configurées pour 60fps
- **Reduced motion** : Respecté automatiquement
- **Performance** : Optimisées pour mobile

### Vite
- **Build** : Optimisé pour production
- **Dev server** : Hot reload activé
- **Assets** : Optimisation automatique

## 📁 Structure du projet

```
src/
├── components/           # Composants React
│   ├── Navbar.jsx      # Navigation principale
│   ├── Hero.jsx        # Section d'accueil
│   ├── Features.jsx    # Points forts
│   ├── Products.jsx    # Produits vedettes
│   ├── Story.jsx       # Notre histoire
│   ├── Testimonials.jsx # Témoignages clients
│   ├── FAQ.jsx         # Questions fréquentes
│   ├── CTA.jsx         # Appel à l'action
│   ├── Footer.jsx      # Pied de page
│   └── CookieBanner.jsx # Bannière cookies
├── App.jsx             # Composant principal
├── main.jsx            # Point d'entrée
└── index.css           # Styles globaux

public/
├── Product/            # Images des produits
└── [autres assets]

tailwind.config.js      # Configuration Tailwind
vite.config.js          # Configuration Vite
```

## 🌐 Déploiement

### Netlify
1. Connecter votre repository
2. Build command : `npm run build`
3. Publish directory : `dist`

### Vercel
1. Import du projet
2. Framework preset : Vite
3. Build command automatique

### Autres plateformes
- **GitHub Pages** : Utiliser l'action GitHub Actions
- **Firebase Hosting** : `firebase deploy`
- **AWS S3** : Upload du dossier `dist`

## 📊 Analytics et Tracking

### Google Analytics
Ajouter dans `index.html` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Autres outils
- **Hotjar** : Tracking utilisateur
- **Facebook Pixel** : Publicité ciblée
- **Google Tag Manager** : Gestion centralisée

## 🔒 Sécurité et Conformité

### RGPD
- Bannière cookies incluse
- Consentement utilisateur
- Politique de confidentialité

### Sécurité
- Headers de sécurité recommandés
- Validation des formulaires
- Protection XSS

## 🐛 Dépannage

### Problèmes courants

#### Build échoue
```bash
# Nettoyer le cache
rm -rf node_modules package-lock.json
npm install
```

#### Styles non chargés
```bash
# Rebuilder Tailwind
npm run build
```

#### Animations lentes
- Vérifier `prefers-reduced-motion`
- Optimiser les images
- Réduire la complexité des animations

## 📞 Support

Pour toute question ou problème :
- **Email** : contact@thrift-country.com
- **Vinted** : [Profil Vinted](https://www.vinted.fr/member/20464878)

## 📄 Licence

MIT License - Libre d'utilisation et modification

---

**Développé avec ❤️ pour thrift_country**

*Vintage & Streetwear Premium*
