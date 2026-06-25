import SectionLabel from "./components/micro/SectionLabel";
import { PrimaryButton } from "./components/PageLinks";
import Soleil from "./components/images/soleil";

import Help from "./components/images/help";
import Horloge from "./components/images/horloge";
import ArrowUp from "./components/micro/arrowUp";
import SectionTitle from "./components/micro/sectionTitle";
import Expertise from "./components/sections/expertise";
import Portfolio from "./components/sections/portfolio";
import Hero from "./components/sections/hero";
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

      {/* La proposition */}
      {/* Utiliser https://motion.dev/examples/js-stagger */}
      <section className="invisible mx-auto lg:mt-20 pt-5 pb-10">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Mon approche</SectionLabel>
          <SectionTitle>
            Prendre en compte à la fois la technologie et les utilisateurs
          </SectionTitle>
          <div className="mt-6 space-y-2 leading-relaxed text-primary/70">
            <p>
              Le travail de développeur nécessite une logique et une rigueur qui
              ne correspondent pas nécessairement à l'état d'esprit des
              utilisateurs. AtuWeb vous propose de ne négliger aucun de ces
              aspects : un produit centré sur l'utilisateur, réalisé avec des
              technologies performantes.
            </p>

            <p className="leading-relaxed text-primary/70">
              Pendant dix ans, j&apos;ai étudié comment les humains perçoivent,
              anticipent et interagissent — avec des objets connectés, des
              interfaces, des espaces. Puis j&apos;ai appris à traduire ça en
              logiciel.
            </p>
            {/* <p className="text-sm leading-relaxed text-primary/55">
              Je ne promets pas la magie d&apos;une refonte miracle en 48 h. Je
              promets une méthode rigoureuse — sans oublier le fun.
            </p> */}
          </div>
        </div>
        <div className="lg:flex items-start justify-center space-x-4 mt-7 px-15 flex-wrap">
          {APPROACH.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-primary/10 h-full lg:w-[219px] px-6 py-5"
            >
              <div className="flex space-x-2 justify-start items-center">
                {item.icon}
                <h3 className="font-secondary text-lg font-medium text-secondary">
                  {item.title}
                </h3>
              </div>
              <p className="mt-4 text-base leading-relaxed text-primary/70">
                {item.body}
              </p>
            </div>
          ))}

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {SERVICES.map((service, i) => (
              <article
                key={service.title}
                className="group flex flex-col rounded-2xl border border-primary/10 bg-bg p-7 transition hover:-translate-y-1 hover:border-secondary/25 hover:shadow-lg hover:shadow-secondary/5"
              >
                <span className="font-secondary text-4xl font-medium text-primary/10 transition group-hover:text-secondary/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-secondary text-xl font-medium text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-primary/65">
                  {service.body}
                </p>
                <p className="mt-5 border-t border-primary/8 pt-4 text-sm font-medium text-secondary">
                  {service.outcome}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <PrimaryButton href="#contact">
              Discutons de votre projet
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-primary/2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
          <SectionLabel>Processus</SectionLabel>
          <SectionTitle>Comment on travaille ensemble</SectionTitle>
          <p className="mt-4 max-w-xl text-base text-primary/70">
            Pas de jargon inutile. Un processus simple pour avancer vite, sans
            surprise. Vous validez chaque étape avant la suivante.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((item) => (
              <div key={item.step} className="relative">
                <span className="font-secondary text-5xl font-medium text-secondary/20">
                  {item.step}
                </span>
                <h3 className="mt-2 font-secondary text-lg font-medium text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary/65">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Expertise />

      <Portfolio init={init} anim={anim} duree={DUREE}/>

      <About />

      <Temoignages />

      <Contact />

      <Faq />
    </div>
  );
}
