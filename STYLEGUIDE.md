# 🎨 Guide de Style - thrift_country

Guide complet des styles, couleurs et composants utilisés dans le site vitrine thrift_country.

## 🎨 Palette de Couleurs

### Couleurs Principales (Luna)

```css
/* Fond principal */
--luna-bg: #0B0F1A

/* Fond secondaire */
--luna-bg-secondary: #111827

/* Cartes et éléments */
--luna-card: rgba(17, 24, 39, 0.8)

/* Bordures */
--luna-border: rgba(91, 140, 255, 0.2)

/* Accent principal (bleu) */
--luna-accent: #5B8CFF

/* Accent secondaire (violet) */
--luna-accent-secondary: #A45CFF

/* Texte principal */
--luna-text: #F9FAFB

/* Texte secondaire */
--luna-text-secondary: #D1D5DB

/* Texte atténué */
--luna-muted: #6B7280
```

### Dégradés Néon

```css
/* Dégradé principal Luna */
--luna-gradient: linear-gradient(135deg, #5B8CFF 0%, #A45CFF 100%)

/* Dégradé horizontal */
--luna-gradient-horizontal: linear-gradient(90deg, #5B8CFF 0%, #A45CFF 100%)

/* Couleurs néon individuelles */
--neon-blue: #5B8CFF
--neon-violet: #A45CFF
--neon-cyan: #06B6D4
--neon-pink: #EC4899
```

### Utilisation des Couleurs

```css
/* Arrière-plans */
.bg-luna-bg          /* Fond principal */
.bg-luna-bg-secondary /* Fond secondaire */
.bg-luna-card        /* Cartes avec transparence */
.bg-luna-gradient    /* Dégradé principal */

/* Textes */
.text-luna-text          /* Texte principal */
.text-luna-text-secondary /* Texte secondaire */
.text-luna-muted         /* Texte atténué */
.text-luna-accent        /* Accent bleu */
.text-gradient           /* Texte avec dégradé */

/* Bordures */
.border-luna-border      /* Bordure subtile */
.border-luna-accent      /* Bordure accent */

/* Ombres */
.shadow-luna             /* Ombre principale */
.shadow-luna-hover       /* Ombre au hover */
.shadow-neon-blue        /* Ombre néon bleue */
.shadow-neon-violet      /* Ombre néon violette */
```

## 🔤 Typographie

### Familles de Polices

```css
/* Titres et affichage */
font-family: 'Outfit', 'Inter', sans-serif

/* Corps de texte */
font-family: 'Inter', system-ui, sans-serif
```

### Hiérarchie Typographique

```css
/* H1 - Titre principal */
font-size: 5rem;        /* 80px - Mobile */
font-size: 7rem;        /* 112px - Desktop */
font-weight: 800;
font-family: 'Outfit';

/* H2 - Titres de section */
font-size: 4rem;        /* 64px - Mobile */
font-size: 5rem;        /* 80px - Desktop */
font-weight: 700;
font-family: 'Outfit';

/* H3 - Sous-titres */
font-size: 2rem;        /* 32px */
font-weight: 600;
font-family: 'Outfit';

/* Corps de texte */
font-size: 1.125rem;    /* 18px */
font-weight: 400;
font-family: 'Inter';
line-height: 1.75;

/* Petits textes */
font-size: 0.875rem;    /* 14px */
font-weight: 400;
font-family: 'Inter';
```

### Classes Tailwind Typographie

```css
.font-display    /* Outfit - Titres */
.font-body       /* Inter - Corps de texte */
.text-gradient   /* Texte avec dégradé Luna */
.leading-relaxed /* Line-height 1.75 */
.leading-tight   /* Line-height 1.25 */
```

## 🧩 Composants

### Boutons

#### Bouton Principal
```css
.btn-primary {
  @apply bg-luna-gradient text-white font-semibold px-8 py-4 rounded-2xl 
         shadow-luna hover:shadow-luna-hover transition-all duration-300 
         hover:scale-105 focus:outline-none focus:ring-4 focus:ring-luna-accent/30
         transform hover:-translate-y-1;
}
```

#### Bouton Secondaire
```css
.btn-secondary {
  @apply bg-transparent border-2 border-luna-accent text-luna-accent 
         font-semibold px-8 py-4 rounded-2xl transition-all duration-300 
         hover:bg-luna-accent hover:text-white hover:shadow-neon-blue
         focus:outline-none focus:ring-4 focus:ring-luna-accent/30
         transform hover:scale-105;
}
```

### Cartes (Glassmorphism)

```css
.card-glass {
  @apply bg-luna-card backdrop-blur-xl border border-luna-border rounded-3xl 
         shadow-luna hover:shadow-luna-hover transition-all duration-500
         hover:-translate-y-2 hover:scale-[1.02];
}
```

### Inputs

```css
.input-luna {
  @apply bg-luna-card/50 backdrop-blur-sm border border-luna-border 
         text-luna-text placeholder-luna-muted rounded-2xl px-6 py-4
         focus:outline-none focus:ring-2 focus:ring-luna-accent focus:border-transparent
         transition-all duration-300;
}
```

## 📐 Espacement et Layout

### Système d'Espacement

```css
/* Espacement vertical des sections */
.py-20          /* 80px - Mobile */
.py-32          /* 128px - Desktop */

/* Espacement entre éléments */
.space-y-8      /* 32px */
.space-y-6      /* 24px */
.space-y-4      /* 16px */

/* Marges */
.mb-16          /* 64px */
.mb-20          /* 80px */
.mb-8           /* 32px */
.mb-6           /* 24px */
.mb-4           /* 16px */

/* Padding des cartes */
.p-8            /* 32px */
.p-6            /* 24px */
.p-4            /* 16px */
```

### Grilles Responsives

```css
/* Grille mobile */
.grid-cols-1

/* Grille tablette */
.md:grid-cols-2

/* Grille desktop */
.lg:grid-cols-3
.lg:grid-cols-4

/* Espacement des grilles */
.gap-8          /* 32px */
.gap-6          /* 24px */
.gap-4          /* 16px */
```

## 🔮 Effets et Animations

### Glassmorphism

```css
/* Fond avec transparence */
background: rgba(17, 24, 39, 0.8);

/* Flou d'arrière-plan */
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);

/* Bordures subtiles */
border: 1px solid rgba(91, 140, 255, 0.2);
```

### Ombres et Lueurs

```css
/* Ombre principale */
box-shadow: 0 8px 32px rgba(91, 140, 255, 0.15);

/* Ombre au hover */
box-shadow: 0 12px 40px rgba(91, 140, 255, 0.25);

/* Lueur néon */
box-shadow: 0 0 20px rgba(91, 140, 255, 0.5);
```

### Animations CSS

```css
/* Apparition en fondu */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Glissement vers le haut */
@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Mise à l'échelle */
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
```

### Classes d'Animation

```css
.animate-fade-in-up    /* Apparition vers le haut */
.animate-fade-in-down  /* Apparition vers le bas */
.animate-scale-in      /* Apparition avec échelle */
.animate-float         /* Flottement */
.animate-glow          /* Lueur pulsante */
```

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile First */
/* Base: 320px - 767px */

/* Tablet */
@media (min-width: 768px) {
  /* Styles tablette */
}

/* Desktop */
@media (min-width: 1024px) {
  /* Styles desktop */
}

/* Large Desktop */
@media (min-width: 1440px) {
  /* Styles large desktop */
}
```

### Classes Responsives

```css
/* Texte responsive */
.text-4xl lg:text-5xl xl:text-6xl

/* Grilles responsive */
.grid-cols-1 md:grid-cols-2 lg:grid-cols-3

/* Espacement responsive */
.py-16 lg:py-20 xl:py-32

/* Navigation responsive */
.hidden lg:flex
.block lg:hidden
```

## 🎭 États et Interactions

### Hover States

```css
/* Boutons */
hover:scale-105
hover:-translate-y-1
hover:shadow-luna-hover

/* Cartes */
hover:-translate-y-2
hover:scale-[1.02]

/* Liens */
hover:text-luna-accent
hover:bg-luna-accent/5
```

### Focus States

```css
/* Boutons */
focus:outline-none
focus:ring-4
focus:ring-luna-accent/30

/* Inputs */
focus:ring-2
focus:ring-luna-accent
focus:border-transparent
```

### Active States

```css
/* Boutons */
active:scale-95
active:scale-98
```

## 🌟 Effets Spéciaux

### Dégradés Animés

```css
/* Dégradé qui se déplace */
.animate-gradient-shift {
  animation: gradient-shift 20s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

### Éléments Flottants

```css
/* Animation de flottement */
.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```

### Starfield Background

```css
/* Fond étoilé animé */
.bg-starfield {
  background-image: radial-gradient(2px 2px at 20px 30px, #eee, transparent),
                    radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
                    /* ... plus de gradients ... */;
  animation: starfield 50s linear infinite;
}
```

## 🎨 Icônes et Illustrations

### Icônes SVG

```css
/* Taille des icônes */
.w-6 h-6        /* 24x24px - Standard */
.w-8 h-8        /* 32x32px - Moyen */
.w-12 h-12      /* 48x48px - Grand */
.w-16 h-16      /* 64x64px - Très grand */

/* Couleur des icônes */
.text-luna-accent
.text-luna-text
.text-luna-muted
```

### Emojis

```css
/* Taille des emojis */
.text-4xl        /* 36px */
.text-5xl        /* 48px */
.text-6xl        /* 60px */

/* Animation des emojis */
.group-hover:animate-bounce
```

## 🔧 Utilitaires CSS

### Classes Personnalisées

```css
/* Masques */
.mask-radial {
  mask: radial-gradient(circle at center, black 0%, transparent 70%);
}

/* Text shadow */
.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* Backdrop blur personnalisé */
.backdrop-blur-glass {
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
}
```

### Support Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## 📋 Checklist de Conformité

### ✅ Design System
- [ ] Couleurs respectent la palette Luna
- [ ] Typographie utilise les bonnes familles
- [ ] Espacement suit le système défini
- [ ] Composants respectent les styles

### ✅ Responsive
- [ ] Mobile-first approach
- [ ] Breakpoints cohérents
- [ ] Grilles adaptatives
- [ ] Navigation mobile

### ✅ Accessibilité
- [ ] Contrastes suffisants
- [ ] Focus visible
- [ ] Navigation clavier
- [ ] Reduced motion support

### ✅ Performance
- [ ] Animations 60fps
- [ ] Lazy loading
- [ ] Code splitting
- [ ] Bundle size optimisé

---

**Ce guide de style doit être respecté pour maintenir la cohérence visuelle et l'expérience utilisateur du site thrift_country.**
