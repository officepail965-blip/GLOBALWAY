# GlobalWay International — Site Web

Site corporate du cabinet de conseil **GlobalWay International**, construit avec **Next.js 14**, **React 18**, **TypeScript** et **Tailwind CSS**.

## 🎨 Identité visuelle

- **Bleu marine** (`#0A2A5E`) — couleur principale
- **Jaune** (`#FFC72C`) — couleur d'accent
- **Blanc** (`#FFFFFF`) — fond et clarté

## 📦 Stack technique

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS 3.4
- **Polices** : Inter + Plus Jakarta Sans
- **Optimisé pour** : Vercel

## 🚀 Démarrage local

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev

# 3. Ouvrir http://localhost:3000
```

## 🏗️ Build de production

```bash
npm run build
npm run start
```

## 🌍 Déploiement sur Vercel

### Option 1 — Via l'interface Vercel
1. Connectez-vous sur [vercel.com](https://vercel.com)
2. Cliquez sur **"Add New Project"**
3. Importez ce dossier (ou le repo Git)
4. Vercel détecte automatiquement Next.js
5. Cliquez sur **"Deploy"**

### Option 2 — Via la CLI Vercel
```bash
npm i -g vercel
vercel
```

## 📁 Structure du projet

```
globalway-website/
├── app/
│   ├── globals.css       # Styles globaux + variables CSS
│   ├── layout.tsx        # Layout racine (metadata SEO)
│   └── page.tsx          # Page d'accueil
├── components/
│   ├── Header.tsx        # Navigation fixe avec menu responsive
│   ├── Hero.tsx          # Bannière vidéo plein écran
│   ├── Intro.tsx         # Présentation + statistiques
│   ├── Expertises.tsx    # Grille 8 expertises
│   ├── Solutions.tsx     # Solutions phares (cartes image)
│   ├── Sectors.tsx       # 8 secteurs d'activité
│   ├── WhyUs.tsx         # 4 raisons de nous choisir
│   ├── Values.tsx        # 4 valeurs fondamentales
│   ├── Timeline.tsx      # Histoire 2018 → aujourd'hui
│   ├── Testimonials.tsx  # Témoignages clients
│   ├── Contact.tsx       # 3 bureaux + CTA
│   └── Footer.tsx        # Pied de page complet
├── public/               # Assets statiques
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── vercel.json
└── package.json
```

## ✨ Fonctionnalités

- ✅ Design 100% responsive (mobile, tablette, desktop)
- ✅ Header sticky avec animation au scroll
- ✅ Hero avec vidéo en arrière-plan
- ✅ Animations fluides (fade-in, fade-up, scale-in)
- ✅ Scroll smooth entre sections
- ✅ SEO optimisé (metadata, Open Graph)
- ✅ En-têtes de sécurité configurés
- ✅ Optimisé pour Core Web Vitals

## 📞 Contact

**GlobalWay International**
- 🇲🇦 Casablanca, Maroc — Immeuble Hakim, lotissement Safa
- 🇫🇷 Saint-Cyr-Sur-Loire, France — Résidence Galia
- 🇹🇳 Tunis, Tunisie — Centre urbain nord
- 📧 contact@globalway-international.com
- 📱 +212 783-493406

---

© 2026 GlobalWay International. Tous droits réservés.
