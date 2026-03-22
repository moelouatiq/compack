# 🏗️ GUIDE - MONOREPO COMPACK
## Grouper tous les sites: INDEX/HUB + SOLATERA + CARBON

---

## 🎯 C'EST QUOI UN MONOREPO?

Un **monorepo** (mono + repository) = un seul dossier contenant plusieurs projets/sites.

**Avantages:**
✅ Structure claire et organisée
✅ Un seul repo Git
✅ Partage de code/composants entre sites
✅ Déploiement centralisé
✅ Navigation facile entre sites
✅ Maintenance simplifiée

---

## 📂 STRUCTURE PROPOSÉE:

```
compack-group/
│
├── README.md
├── package.json (root)
├── vercel.json (deploy config)
└── apps/
    │
    ├── index-hub/
    │   ├── package.json
    │   ├── tsconfig.json
    │   ├── next.config.js
    │   ├── public/
    │   │   └── images/
    │   ├── src/
    │   │   ├── pages/
    │   │   │   ├── index.tsx (home - 10 sections)
    │   │   │   ├── api/
    │   │   │   └── ...
    │   │   ├── components/
    │   │   ├── styles/
    │   │   └── ...
    │   └── .env.local
    │
    ├── solatera/
    │   ├── package.json
    │   ├── tsconfig.json
    │   ├── next.config.js
    │   ├── public/
    │   │   └── images/ (19 images SOLATERA)
    │   ├── src/
    │   │   ├── pages/
    │   │   │   ├── index.tsx (home - 26 sections)
    │   │   │   ├── api/
    │   │   │   └── ...
    │   │   ├── components/
    │   │   ├── styles/
    │   │   └── ...
    │   └── .env.local
    │
    ├── carbon/
    │   ├── package.json
    │   ├── tsconfig.json
    │   ├── next.config.js
    │   ├── public/
    │   │   └── images/ (15 images CARBON + paulownia)
    │   ├── src/
    │   │   ├── pages/
    │   │   │   ├── index.tsx (home - 15+ sections)
    │   │   │   ├── api/
    │   │   │   └── ...
    │   │   ├── components/
    │   │   ├── styles/
    │   │   └── ...
    │   └── .env.local
    │
    └── shared/ (optionnel)
        ├── components/
        │   ├── Navbar.tsx
        │   ├── Footer.tsx
        │   ├── Button.tsx
        │   └── ...
        ├── styles/
        │   ├── globals.css
        │   ├── tailwind.config.js
        │   └── ...
        └── utils/
            ├── colors.ts
            └── ...
```

---

## 🚀 SETUP MONOREPO (ÉTAPE PAR ÉTAPE):

### **ÉTAPE 1: Créer structure de base**

```bash
# Créer dossier principal
mkdir compack-group
cd compack-group

# Initialiser Git
git init

# Créer dossier apps
mkdir apps

# Créer sous-dossiers
mkdir apps/index-hub
mkdir apps/solatera
mkdir apps/carbon
mkdir apps/shared
```

### **ÉTAPE 2: Copier sites existants**

```bash
# Copier SOLATERA
cp -r C:\AI\solatera apps/solatera

# Copier CARBON
cp -r C:\AI\carbon\carbon-website apps/carbon

# Résultat:
# apps/
#   ├── solatera/     (ton projet existant)
#   ├── carbon/       (ton projet existant)
#   └── index-hub/    (nouveau)
```

### **ÉTAPE 3: Créer INDEX/HUB en nouveau site**

```bash
# Créer un nouveau projet Next.js dans apps/index-hub
cd apps/index-hub

# Initialiser Next.js
npx create-next-app@latest . --typescript --tailwind

# OU si tu veux un setup simple:
npm init -y
npm install next react react-dom typescript tailwindcss framer-motion
```

### **ÉTAPE 4: Root package.json**

Créer `compack-group/package.json`:

```json
{
  "name": "compack-group",
  "version": "1.0.0",
  "description": "COMPACK Group - Unified Ecosystem",
  "private": true,
  "scripts": {
    "dev": "concurrently \"npm:dev:*\"",
    "dev:hub": "npm --prefix apps/index-hub run dev",
    "dev:solatera": "npm --prefix apps/solatera run dev",
    "dev:carbon": "npm --prefix apps/carbon run dev",
    "build": "npm --prefix apps/index-hub run build && npm --prefix apps/solatera run build && npm --prefix apps/carbon run build",
    "start": "concurrently \"npm:start:*\"",
    "start:hub": "npm --prefix apps/index-hub run start",
    "start:solatera": "npm --prefix apps/solatera run start",
    "start:carbon": "npm --prefix apps/carbon run start"
  },
  "devDependencies": {
    "concurrently": "^8.0.0"
  }
}
```

Installer dépendance:
```bash
npm install concurrently --save-dev
```

---

## 🌐 DÉPLOIEMENT VERCEL (3 SITES):

### **OPTION 1: Chaque site sur sous-domaine**

```
Index/HUB:  compack.io           (ou compackgroup.com)
SOLATERA:   solatera.compack.io  (ou compack.io/solatera)
CARBON:     carbon.compack.io    (ou compack.io/carbon)
```

### **OPTION 2: Tous sur mêmes domaines (meilleur)**

```
compack.io/              → INDEX/HUB
compack.io/solatera      → SOLATERA
compack.io/carbon        → CARBON
```

### **Configuration Vercel (Option 2):**

Créer `vercel.json` à la racine:

```json
{
  "projects": {
    "index-hub": {
      "path": "apps/index-hub",
      "buildCommand": "npm run build",
      "dev": "npm run dev"
    },
    "solatera": {
      "path": "apps/solatera",
      "buildCommand": "npm run build",
      "dev": "npm run dev"
    },
    "carbon": {
      "path": "apps/carbon",
      "buildCommand": "npm run build",
      "dev": "npm run dev"
    }
  }
}
```

**OU deploy chaque app individuellement sur Vercel:**

```bash
# Deploy INDEX/HUB
cd apps/index-hub
vercel deploy --prod

# Deploy SOLATERA
cd ../solatera
vercel deploy --prod

# Deploy CARBON
cd ../carbon
vercel deploy --prod
```

Puis setup domains:
- compack.io → INDEX/HUB
- solatera.compack.io → SOLATERA
- carbon.compack.io → CARBON

---

## 🔗 LINKING ENTRE SITES:

### **Dans INDEX/HUB, linker vers les autres:**

```jsx
// apps/index-hub/src/components/Navbar.tsx

export function Navbar() {
  return (
    <nav>
      <Link href="/">HOME</Link>
      <Link href="https://solatera.compack.io">SOLATERA</Link>
      <Link href="https://carbon.compack.io">CARBON</Link>
    </nav>
  );
}
```

### **OU si tous sur même domaine:**

```jsx
<Link href="/solatera">SOLATERA</Link>
<Link href="/carbon">CARBON</Link>
```

### **Dans SOLATERA, linker vers INDEX/HUB:**

```jsx
// apps/solatera/src/components/Navbar.tsx

<Link href="https://compack.io">← BACK TO GROUP</Link>
```

---

## 📁 ORGANISATION FICHIERS:

### **INDEX/HUB - 10 sections**
```
apps/index-hub/src/pages/
├── index.tsx
│   ├── Hero COMPACK
│   ├── 5 Piliers (cards)
│   ├── SOLATERA detail + link
│   ├── CARBON detail + link
│   ├── MARKET detail
│   ├── ASSOCIATION detail
│   ├── HOLDING detail
│   ├── STATS
│   ├── PHILOSOPHIE
│   └── Footer

apps/index-hub/public/images/
├── market-000.jpg (hero)
├── market-011.jpg (printemps)
├── market-012.jpg (automne)
├── market-013.jpg (été)
├── market-016.jpg (hiver)
├── market-019.jpg (team 1)
├── market-020.jpg (team 2)
└── organigramme.png
```

### **SOLATERA - 26 sections**
```
apps/solatera/src/pages/
├── index.tsx (26 sections)
└── api/

apps/solatera/public/images/
├── hero-village.jpg
├── dome-hero.jpg
├── dome-interior.jpg
├── ... (19 images)
└── footer-logo.png
```

### **CARBON - 15+ sections**
```
apps/carbon/src/pages/
├── index.tsx (15+ sections + Paulownia)
├── paulownia/
│   └── section.tsx (si séparé)
└── api/

apps/carbon/public/images/
├── hero-map-3d.jpg
├── carbon-pit-1.jpg
├── paulownia-hero.jpg
├── paulownia-jeunes.jpg
├── ... (15+ images)
└── footer-logo.png
```

---

## 🎯 WORKFLOW DE DÉVELOPPEMENT:

### **Pour développer en local:**

```bash
# À la racine (compack-group/)

# Démarrer TOUS les sites en même temps
npm run dev

# Résultat:
# INDEX/HUB:  http://localhost:3000
# SOLATERA:   http://localhost:3001
# CARBON:     http://localhost:3002
```

### **Ou démarrer un site à la fois:**

```bash
# Juste INDEX/HUB
npm run dev:hub       # localhost:3000

# Juste SOLATERA
npm run dev:solatera  # localhost:3001

# Juste CARBON
npm run dev:carbon    # localhost:3002
```

---

## 🚀 DÉPLOIEMENT FINAL:

### **Option 1: Déployer sur Vercel (RECOMMANDÉ)**

```bash
# Login Vercel
vercel login

# Deploy chaque site
cd apps/index-hub && vercel deploy --prod
cd ../solatera && vercel deploy --prod
cd ../carbon && vercel deploy --prod
```

### **Option 2: Docker (si tu veux)**

Créer `Dockerfile` à la racine:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000 3001 3002

CMD ["npm", "start"]
```

---

## 📊 STRUCTURE GIT:

```bash
# Initialiser repo git
cd compack-group
git init

# Ajouter tous les fichiers
git add .

# Commit initial
git commit -m "Initial commit: INDEX/HUB + SOLATERA + CARBON"

# Ajouter remote (GitHub/GitLab)
git remote add origin https://github.com/your-user/compack-group.git

# Push
git push -u origin main
```

---

## ✅ CHECKLIST MONOREPO:

```
☐ Créer dossier compack-group/
☐ Copier SOLATERA dans apps/solatera/
☐ Copier CARBON dans apps/carbon/
☐ Créer INDEX/HUB dans apps/index-hub/
☐ Créer root package.json
☐ Installer concurrently (npm install concurrently)
☐ Créer vercel.json (si needed)
☐ Initialiser Git
☐ Tester: npm run dev (tous les sites)
☐ Configure domains sur Vercel
☐ Deploy en production
☐ Vérifier liens entre sites
☐ DONE! 🎉
```

---

## 💡 TIPS:

**1. Partager components:**
```
apps/shared/components/
├── Navbar.tsx (utilisée dans les 3 sites)
├── Footer.tsx
├── Button.tsx
└── ...

// Dans chaque site:
import { Navbar } from '../../shared/components'
```

**2. Partager styles:**
```
apps/shared/styles/
├── globals.css (couleurs, fonts COMPACK)
├── tailwind.config.js

// Dans chaque site:
@import '../../shared/styles/globals.css'
```

**3. Partager utils:**
```
apps/shared/utils/
├── colors.ts (palette COMPACK)
├── constants.ts
└── helpers.ts
```

---

## 🎯 RÉSUMÉ:

**Avant (3 projets séparés):**
```
C:\AI\solatera\           (SOLATERA)
C:\AI\carbon\carbon-website\ (CARBON)
C:\AI\new-index-hub\      (INDEX - nouveau)
```

**Après (MONOREPO):**
```
C:\compack-group\
├── apps/
│   ├── index-hub/
│   ├── solatera/
│   ├── carbon/
│   └── shared/
├── package.json
└── vercel.json
```

**Avantages:**
✅ Tout organisé au même endroit
✅ Un seul Git repo
✅ Déploiement centralisé
✅ Facile à scaler
✅ Professionnel

---

## 🚀 PROCHAINES ÉTAPES:

1. **Créer structure monorepo** (étape 1-4)
2. **Générer INDEX/HUB** (Claude Code + prompt)
3. **Copier images** (MARKET images dans index-hub/public)
4. **Tester localement** (npm run dev)
5. **Deploy Vercel** (3 sites liés)
6. **Configurer domains** (compack.io + solatera.compack.io + carbon.compack.io)

---

**C'est très professionnel comme setup!** 💎🏗️
