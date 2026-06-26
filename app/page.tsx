import Soleil from "./components/images/soleil";
import Help from "./components/images/help";
import Horloge from "./components/images/horloge";

import ArrowUp from "./components/micro/arrowUp";
import Hero from "./components/sections/hero";
import Services from "./components/sections/services";
import Expertise from "./components/sections/expertise";
import Portfolio from "./components/sections/portfolio";
import About from "./components/sections/about";
import Temoignages from "./components/sections/temoignages";
import Contact from "./components/sections/contact";
import Faq from "./components/sections/faq";

import {
  DUREE,
  init,
  anim,
} from "./components/animate/textAppear";

const SERVICES = [
  {
    title: "Site vitrine & landing page",
    body: "Présentation claire de votre activité, parcours de contact optimisé, structure pensée pour le référencement et la lisibilité. Chaque section a un rôle cognitif : orienter, rassurer, inciter à agir.",
    outcome:
      "Plus de demandes qualifiées, moins de « je ne sais pas ce que vous faites exactement ».",
  },
  {
    title: "Application web, mobile & outil métier",
    body: "Tableaux de bord, espaces clients, workflows internes, MVP SaaS. Backend robuste (Ruby on Rails ou Node), frontend moderne (React / Next.js), architecture pensée pour évoluer.",
    outcome:
      "Un outil adopté par vos équipes ou vos clients — pas un projet abandonné après la livraison.",
  },
  {
    title: "Refonte & audit UX",
    body: "Site existant confus, taux de conversion faible, parcours trop longs ? J'audite structure, contenu et interactions avec un regard de développeur et de chercheur en cognition.",
    outcome:
      "Moins de friction, plus de clarté, des décisions utilisateur plus rapides.",
  },
];

const APPROACH = [
  {
    title: "Clarté UX Action guidée",
    body: "Hiérarchie visuelle, libellés, parcours : l'utilisateur sait où il est, quoi faire, et pourquoi. Chaque élément explicite sa logique : ce qui est possible doit être évident, ce qui est secondaire accessible.",
    icon: <Soleil />,
  },
  {
    title: "Code durable",
    body: "Même la meilleure UX meurt lorsque le code est fragile. Je vous livre une codebase claire, documentée, et maintenable.",
    icon: <Horloge />,
  },
  {
    title: "Et ensuite ?",
    body: "Hébergement, maintenance, mise à jour : je vous accompagne dans la gestion de votre projet après la livraison.",
    icon: <Help />,
  },
  {
    title: "Et mes utilisateurs ?",
    body: "Analyse du traffic, retours utilisateurs, évolution continue : je vous accompagne dans la mesure de vos besoins.",
    icon: <Help />,
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Échange gratuit",
    body: "1 heure d'échange pour comprendre vos objectifs, le contexte de votre demande et vos contraintes.",
  },
  {
    step: "02",
    title: "Proposition claire",
    body: "Devis détaillé, planning, stack recommandée. Pas de zone grise.",
  },
  {
    step: "03",
    title: "Conception & développement",
    body: "Maquettes ou prototypes, validations par étapes. Ajustements dans le cadre défini.",
  },
  {
    step: "04",
    title: "Livraison & autonomie",
    body: "Tests, mise en production, livraison. Vous repartez avec un produit utilisable.",
  },
];

export default function Home() {
  return (
    // Utiliser partout https://motion.dev/examples/react-hero-stagger
    // UTILISER PARTOUT https://motion.dev/examples/react-enter-animation
    // UTILISER pour transitions entre thème si position différente https://motion.dev/examples/react-css-spring
    // POUR LES BOUTONS : https://motion.dev/examples/react-material-design-ripple
    <div className="">
      <Hero init={init} anim={anim} duree={DUREE} />
      <ArrowUp />

      <Services />

      <Expertise />

      <Portfolio init={init} anim={anim} duree={DUREE}/>

      <About />

      <Temoignages />

      <Contact />

      <Faq />
    </div>
  );
}
