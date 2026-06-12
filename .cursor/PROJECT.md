# AtuWeb — contexte projet

Document de référence pour les sessions agent. Mettre à jour quand la structure ou les conventions changent.

_Dernière vérif : 12 juin 2026 — build OK, audit 0 vuln._

## Objectif

Site vitrine freelance pour **AtuWeb** — **Arthur-Henri Michalland**, développeur web freelance et docteur en psychologie cognitive. Cible : clients en France (Montpellier et au-delà). Langue : **français uniquement** (pas d'i18n prévu).

## Stack

| Couche | Technologie |
|--------|-------------|
| Framework | Next.js **16.2.6** (App Router, Turbopack par défaut) |
| UI | React **19.2.4**, Tailwind CSS **v4** |
| Animations | **motion** ^12 (`motion/react`), **@lottiefiles/dotlottie-react** (hero par thème) |
| Langage | TypeScript **^5** + composants `.jsx` (header, icônes SVG, footer) |
| Fonts | `next/font/google` — Arimo, Playfair Display, Stack Sans Notch, Ranchers, Spicy Rice, Luxurious Roman |
| Lint | ESLint 9 + `eslint-config-next` 16.2.6 |
| Déploiement | Vercel (prévu) |

## Structure des fichiers

```
app/
  page.tsx              # Landing (~696 lignes) — contenu éditorial en constantes en tête de fichier
  layout.tsx            # Metadata SEO, fonts, ThemeProvider, Header, cookies() pour thème
  globals.css           # Palettes CSS via [data-theme="classic|dark|colorful"]
  sitemap.ts
  not-found.jsx
  icon.svg
  components/
    PageLinks.jsx       # PrimaryButton, SecondaryLink, ExternalLink
    JsonLd.tsx          # Données structurées schema.org
    footer.jsx          # Footer (profils externes + copyright)
    micro/
      header.jsx        # Navigation ancres (#expertise, #portfolio, #about, #faq)
      SectionLabel.jsx
      arrowUp.jsx       # Bouton retour haut (thème-aware)
    theme/
      ThemeProvider.tsx # Contexte thème + cookie
      ThemeSwitch.tsx
    images/
      logo.jsx          # Logo SVG animé
      heroLottie.jsx    # DotLottie par thème (client component)
      soleil.jsx, horloge.jsx, help.jsx  # Icônes sections approche
lib/
  site.ts               # SITE_NAME, SITE_URL, PERSON, LINKS, SAME_AS
public/                 # Servis à la racine (pas de préfixe /public/)
  hero/                 # hero_classic.lottie, hero_dark.lottie, hero_colorful.lottie
  dev/                  # Logos stack (nodejs, nextjs, rails, react, etc.)
  sites/                # Vignettes portfolio (numdiag, kev_site, publis)
  theme-init.js         # Anti-flash thème
  coding_ok.svg, logo.png, tutur_gros_plan.svg, 404-error.svg
next.config.ts          # Config par défaut (vide)
postcss.config.mjs      # Plugin @tailwindcss/postcss
eslint.config.mjs
tsconfig.json           # baseUrl: "./app/", strict: false, allowJs: true
```

## Contenu & conventions

- **Pas d'i18n** : textes en constantes (`SERVICES`, `FAQ`, `PROJECTS`…) dans `app/page.tsx` + données globales dans `lib/site.ts`.
- **Thèmes** : 3 palettes CSS custom properties dans `globals.css`, cookie `theme`, script `public/theme-init.js`, switch flottant. Hero Lottie change selon le thème.
- **Images `public/`** : URL = `/chemin/fichier.svg` (jamais `/public/...`).
- **Imports** : `tsconfig` `baseUrl: "./app/"` — imports relatifs depuis `app/` ou chemins courts selon le fichier.
- **Composants client** : `"use client"` sur header, heroLottie, theme, arrowUp ; `page.tsx` reste Server Component (importe `motion` — à surveiller si erreur RSC).
- **Next.js 16** : lire `node_modules/next/dist/docs/` avant d'écrire du code Next. Voir `AGENTS.md`.
- **Motion** : commentaires TODO dans `page.tsx` et `header.jsx` pointent vers exemples motion.dev (stagger, enter-animation, ripple…) — animations pas encore généralisées.

## SEO

- Metadata dans `app/layout.tsx` (`metadataBase`, OpenGraph, Twitter)
- `JsonLd.tsx` pour Person / LocalBusiness
- `app/sitemap.ts`
- `lang="fr"`, `locale: "fr_FR"`

## Commandes

```bash
npm run dev       # http://localhost:3000
npm run build
npm run start
npm run lint
npm run lint:fix
```

Pas de script `test` configuré.

## Dépendances & sécurité

- **Audit npm** (12/06/2026) : 0 vulnérabilité.
- PostCSS requis (Tailwind v4 + Next) — ne pas supprimer.
- Override `package.json` : `"postcss": "^8.5.10"` (CVE nested Next).
- Packages animation : `motion`, `@lottiefiles/dotlottie-react`, `lottie-react` (ce dernier peut être redondant avec dotlottie).

## Branches Git

| Branche | Rôle |
|---------|------|
| `main` | Base stable |
| `refactor/landing` | **Branche active** — refonte landing (style, contenu, réorg composants) |
| `cursor/landing-content` | Proposition de contenu IA à revoir |

État actuel : `refactor/landing`, à jour avec `origin/refactor/landing`. **Modifications locales non commitées** : réorganisation `components/` (`micro/`, `theme/`, `images/`), nouveau `footer.jsx`, assets `public/sites/` et `public/dev/`, MAJ `page.tsx`, `layout.tsx`, `lib/site.ts`.

## Points d'attention connus

1. **`lib/site.ts` — `SITE_URL` mal formé** : ligne 2–3, syntaxe incorrecte ; `SITE_URL` vaut toujours `"https://atuweb.fr"`. Forme attendue :
   ```ts
   export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://atuweb.fr";
   ```
2. **Ancre cassée hero** : CTA `SecondaryLink href="#nos-realisations"` mais section portfolio = `id="portfolio"`.
3. **Page `/` dynamique** (`ƒ`) : `await cookies()` dans le layout pour le thème — normal.
4. **Warning build** : fallback font manquant pour `Stack Sans Notch` — cosmétique, build OK.
5. **README.md** : encore le template create-next-app.

## Sections de la landing (`app/page.tsx`)

Hero · Proposition / approche + services · Process · Expertises techniques (stack) · Portfolio · À propos · Contact · FAQ · Footer

## Assets portfolio (`PROJECTS`)

| Projet | Image | Lien |
|--------|-------|------|
| NumDiag | `/sites/numdiag.svg` | `LINKS.numdiag` |
| Kevin | `/sites/kev_site.svg` | `LINKS.kevin` |
| Recherche | `/sites/publis.svg` | `LINKS.scholar` |

## Env

- `.env.local` — `NEXT_PUBLIC_SITE_URL` (inefficace tant que `site.ts` n'est pas corrigé)

## Pour l'agent

- Réponses en **français** sauf demande contraire.
- Changements **minimaux** — ne pas refactorer hors scope.
- Ne pas commit sauf demande explicite.
- Design : site éditorial / cognitif — pas d'esthétique AI générique (Inter, purple gradients, etc.).
