# 🛍️ Site Vitrine thrift_country

Site vitrine one-page e-commerce pour la marque **thrift_country**, spécialisée dans le vintage et streetwear premium. Style "Luna client" avec thème sombre, dégradés néon et glassmorphism.

## ✨ Caractéristiques

- **Design "Luna client"** : Thème sombre premium avec dégradés néon bleu→violet
- **Glassmorphism** : Effets de transparence et de flou élégants
- **Responsive** : Mobile-first, optimisé pour tous les écrans
- **Animations fluides** : Micro-interactions et animations au scroll
- **Performance** : Code vanilla optimisé, pas de framework lourd
- **Accessibilité** : Conforme aux standards WCAG AA
- **SEO optimisé** : Métadonnées complètes et données structurées

## 🚀 Installation et Utilisation

### Option 1 : Utilisation directe
1. Téléchargez tous les fichiers dans un dossier
2. Double-cliquez sur `index.html` pour ouvrir le site
3. C'est tout ! Aucune installation requise

### Option 2 : Serveur local (recommandé pour le développement)
```bash
# Avec Python 3
python -m http.server 8000

# Avec PHP
php -S localhost:8000
```

Puis ouvrez `http://localhost:8000` dans votre navigateur.

## 📁 Structure des Fichiers

```
SiteNjallBeta/
├── index.html          # Page principale du site
├── styles.css          # Styles CSS complets
├── script.js           # Fonctionnalités JavaScript
├── Logo/               # Dossier pour votre logo
├── Product/            # Dossier pour les images produits
└── README.md           # Ce fichier
```

## 🎨 Personnalisation

### 1. Logo et Marque
Remplacez les placeholders `[À REMPLACER: Logo/thrift_country_logo.png]` dans `index.html` :
- **Logo principal** : Remplacez par votre logo dans le dossier `Logo/`
- **Nom de marque** : Modifiez "thrift_country" par votre nom
- **Slogan** : Personnalisez le texte dans la section Hero

### 2. Couleurs et Thème
Modifiez les variables CSS dans `styles.css` :
```css
:root {
    --color-bg-primary: #0B0F1A;        /* Fond principal */
    --gradient-primary: linear-gradient(135deg, #5B8CFF 0%, #A45CFF 100%); /* Dégradé principal */
    --glass-bg: rgba(255, 255, 255, 0.06); /* Transparence glassmorphism */
}
```

### 3. Produits
Remplacez les images et informations des produits dans `index.html` :
- **Images** : Remplacez les URLs Unsplash par vos propres images
- **Noms et descriptions** : Personnalisez le contenu des cartes produits
- **Prix** : Mettez à jour les prix selon votre catalogue

### 4. Informations de Contact
Modifiez les placeholders dans la section Contact :
- **Email** : `[À REMPLACER: votre-email@example.com]`
- **Téléphone** : `[À REMPLACER: +33 1 23 45 67 89]`
- **Adresse** : `[À REMPLACER: Votre adresse]`

### 5. Réseaux Sociaux
Mettez à jour les liens sociaux :
- **Vinted** : Déjà configuré avec votre profil
- **Instagram** : `[À REMPLACER: lien Instagram]`
- **Facebook** : `[À REMPLACER: lien Facebook]`

## 🔧 Fonctionnalités Techniques

### Navigation
- **Scroll-spy** : Navigation active mise à jour automatiquement
- **Menu mobile** : Navigation responsive avec animation hamburger
- **Ancres** : Navigation fluide entre les sections

### Animations
- **Reveal au scroll** : Éléments qui apparaissent progressivement
- **Parallax** : Effet de profondeur sur les éléments de fond
- **Hover effects** : Micro-interactions sur les cartes et boutons

### Formulaires
- **Validation HTML5** : Vérification automatique des champs
- **Notifications** : Messages de confirmation/erreur stylisés
- **Newsletter** : Inscription avec validation email

### Cookies et RGPD
- **Bandeau de consentement** : Gestion des préférences utilisateur
- **LocalStorage** : Sauvegarde des choix de l'utilisateur
- **Respect des préférences** : Désactivation des animations si demandé

## 📱 Responsive Design

Le site est optimisé pour tous les écrans :
- **Mobile** : ≥320px (1 colonne)
- **Tablette** : ≥768px (2 colonnes)
- **Desktop** : ≥1024px (3-4 colonnes)
- **Large** : ≥1440px (optimisations supplémentaires)

## 🎯 Sections du Site

1. **Hero** : Logo, titre, slogan, CTA principal
2. **Points Forts** : 4 cartes présentant vos avantages
3. **Produits Vedettes** : Grille de 6 produits avec images et prix
4. **Notre Histoire** : Présentation de la marque avec milestones
5. **Témoignages** : Slider automatique des avis clients
6. **FAQ** : Questions fréquentes en accordéons
7. **Contact** : Formulaire de contact et informations
8. **Footer** : Liens légaux, réseaux sociaux, copyright

## 🚀 Déploiement

### GitHub Pages
1. Créez un repository GitHub
2. Uploadez tous les fichiers
3. Activez GitHub Pages dans les paramètres
4. Votre site sera accessible à `https://username.github.io/repository-name`

### Hébergement Web
1. Uploadez tous les fichiers sur votre serveur web
2. Assurez-vous que `index.html` est à la racine
3. Le site fonctionne immédiatement

## 🔍 SEO et Accessibilité

### Métadonnées
- **Title** : Optimisé pour ≤60 caractères
- **Description** : 150-160 caractères
- **Open Graph** : Partage optimisé sur les réseaux sociaux
- **Twitter Cards** : Prévisualisation Twitter
- **JSON-LD** : Données structurées pour Google

### Accessibilité
- **Contrastes AA** : Respect des standards de lisibilité
- **Navigation clavier** : Support complet du clavier
- **ARIA labels** : Rôles et attributs d'accessibilité
- **Focus visible** : Indicateurs de focus clairs
- **Alt text** : Descriptions des images

## 📊 Performance

### Optimisations
- **CSS optimisé** : Variables CSS et sélecteurs efficaces
- **JavaScript vanilla** : Pas de framework lourd
- **Images lazy-loading** : Chargement différé des images
- **Animations CSS** : Utilisation des propriétés GPU
- **Intersection Observer** : Animations au scroll performantes

### Métriques cibles
- **LCP** : < 2.5s (Largest Contentful Paint)
- **CLS** : < 0.1 (Cumulative Layout Shift)
- **JS bundle** : < 80 KB (gzip)

## 🛠️ Développement

### Ajout de Nouvelles Sections
1. Ajoutez la section dans `index.html`
2. Créez les styles correspondants dans `styles.css`
3. Ajoutez les animations dans `script.js` si nécessaire

### Modification des Animations
Les animations sont définies dans `styles.css` :
```css
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}
```

### Ajout de Fonctionnalités
Le code est modulaire et bien commenté. Ajoutez vos fonctions dans `script.js` en suivant la structure existante.

## 🐛 Dépannage

### Problèmes Courants

**Le site ne s'affiche pas correctement**
- Vérifiez que tous les fichiers sont dans le même dossier
- Ouvrez la console du navigateur (F12) pour voir les erreurs
- Assurez-vous que les chemins des images sont corrects

**Les animations ne fonctionnent pas**
- Vérifiez que JavaScript est activé
- Testez sur un serveur local (pas en ouvrant directement le fichier)
- Vérifiez la console pour les erreurs JavaScript

**Le site n'est pas responsive**
- Vérifiez que le viewport meta tag est présent
- Testez sur différents appareils ou avec les outils de développement
- Vérifiez que les media queries CSS sont correctes

### Support
Pour toute question ou problème :
1. Vérifiez d'abord ce README
2. Consultez la console du navigateur
3. Testez sur différents navigateurs
4. Vérifiez la compatibilité des navigateurs

## 🌟 Fonctionnalités Avancées

### Intégration E-commerce
Le site est conçu pour être facilement intégré avec :
- **Vinted** : Redirection vers votre profil (déjà configuré)
- **Autres plateformes** : Ajoutez facilement vos liens

### Analytics
Ajoutez facilement :
- **Google Analytics** : Tracking des visiteurs
- **Facebook Pixel** : Publicités ciblées

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, le modifier et le distribuer selon vos besoins.

## 🙏 Remerciements

- **Google Fonts** : Polices Inter et Outfit
- **Unsplash** : Images de démonstration
- **Feather Icons** : Icônes SVG
- **CSS Grid & Flexbox** : Layouts modernes

---

**🎉 Votre site thrift_country est prêt !** 

Double-cliquez sur `index.html` pour le voir en action, puis personnalisez-le selon vos besoins. N'oubliez pas de remplacer tous les placeholders `[À REMPLACER]` par vos vraies informations !
