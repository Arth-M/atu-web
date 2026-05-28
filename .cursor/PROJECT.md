# AtuWeb — contexte projet

Document de référence pour les sessions agent. Mettre à jour quand la structure ou les conventions changent.

## Objectif

Site vitrine freelance pour **AtuWeb** — **Arthur-Henri Michalland**, développeur web freelance et docteur en psychologie cognitive. Cible : clients en France (Montpellier et au-delà). Langue : **français uniquement** (pas d'i18n prévu).

## Stack

| Couche | Technologie |
|--------|-------------|
| Framework | Next.js 16.x (App Router, Turbopack par défaut) |
| UI | React 19, Tailwind CSS v4 |
| Langage | TypeScript (+ quelques composants `.jsx` legacy) |
| Fonts | `next/font/google` (Arimo, Playfair Display, Stack Sans Notch, etc.) |
| Déploiement | Vercel (prévu) |

## Structure des fichiers

```
app/
  page.tsx              # Landing page (~800 lignes) — contenu éditorial en constantes en tête de fichier
  layout.tsx            # Metadata SEO, fonts, ThemeProvider, Header
  globals.css           # Palettes CSS via [data-theme="classic|dark|colorful"]
  sitemap.ts
  components/
    header.jsx          # Navigation ancres
    logo.jsx            # Logo SVG animé
    ThemeProvider.tsx   # Contexte thème + cookie
    ThemeSwitch.tsx
    JsonLd.tsx          # Données structurées schema.org
lib/
  site.ts               # SITE_NAME, SITE_URL, PERSON, LINKS, SAME_AS — source de vérité transversale
public/                 # Assets statiques — servis à la racine (pas de préfixe /public/)
  numdiag.svg, kev_site.svg, publis.svg, logo.png, theme-init.js
postcss.config.mjs      # Plugin @tailwindcss/postcss
```

## Contenu & conventions

- **Pas d'i18n** : textes en constantes (`SERVICES`, `FAQ`, `PROJECTS`…) dans `app/page.tsx` + données globales dans `lib/site.ts`.
- **Thèmes** : 3 palettes CSS custom properties dans `globals.css`, sélection via cookie `theme`, script `public/theme-init.js` (anti-flash), switch flottant.
- **Images `public/`** : URL = `/fichier.svg` (jamais `/public/fichier.svg`).
- **Crop images** : `object-cover` (remplit, crop) ou `object-contain` (tout visible, réduit) dans un cadre à hauteur fixe (`h-[400px]`). Position : `object-top`, pas `object-[50%-0%]`.
- **Next.js 16** : lire `node_modules/next/dist/docs/` avant d'écrire du code Next — APIs différentes du training data. Voir aussi `AGENTS.md`.

## SEO

- Metadata dans `app/layout.tsx` (`metadataBase`, OpenGraph, Twitter)
- `JsonLd.tsx` pour Person / LocalBusiness
- `app/sitemap.ts`
- `lang="fr"`, `locale: "fr_FR"`

## Commandes

```bash
npm run dev       # http://localhost:3000
npm run build
npm run lint
npm run lint:fix
```

## Dépendances & sécurité

- PostCSS requis (Tailwind v4 + Next) — ne pas supprimer.
- Override dans `package.json` : `"postcss": "^8.5.10"` pour corriger l'audit CVE sur la copie nested de Next.
- Ne pas passer en canary Next juste pour PostCSS ; l'override suffit.

## Branches Git (historique)

- `main` — base stable
- `refactor/landing` — refonte landing en cours
- `cursor/landing-content` — proposition de contenu IA à revoir

## Points d'attention connus

1. **`lib/site.ts` — `SITE_URL`** : la ligne env est probablement mal formée ; `SITE_URL` vaut toujours `"https://atuweb.fr"`. Forme attendue :
   ```ts
   export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://atuweb.fr";
   ```
2. **Page `/` dynamique** (`ƒ`) : le layout appelle `await cookies()` pour le thème — normal, pas une erreur.
3. **Warning build** : fallback font manquant pour `Stack Sans Notch` — cosmétique.
4. **README.md** : encore le template create-next-app, pas à jour avec le projet réel.

## Sections de la landing (`app/page.tsx`)

Hero · Trust markers · Problème · Services · Approche · Parcours (timeline) · Stack · Process · **Réalisations** (`PROJECTS`) · À propos · FAQ · Contact · Footer

## Assets projets (`PROJECTS`)

| Projet | Image | Lien |
|--------|-------|------|
| NumDiag | `/numdiag.svg` | `LINKS.numdiag` |
| Kevin | `/kev_site.svg` | `LINKS.kevin` |
| Recherche | `/publis.svg` | `LINKS.scholar |

## Env

- `.env.local` — `NEXT_PUBLIC_SITE_URL` (si corrigé dans `site.ts`)

## Pour l'agent

- Réponses en **français** sauf demande contraire.
- Changements **minimaux** — ne pas refactorer hors scope.
- Ne pas commit sauf demande explicite.
- Design : site éditorial / cognitif — pas d'esthétique AI générique (Inter, purple gradients, etc.).
