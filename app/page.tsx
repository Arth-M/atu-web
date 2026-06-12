import SectionLabel from "./components/micro/SectionLabel";
import {
  PrimaryButton,
  SecondaryLink,
  ExternalLink,
} from "./components/PageLinks";
import { LINKS, PERSON } from "../lib/site";
import Soleil from "./components/images/soleil";
import HeroLottie from "./components/images/heroLottie";
import Help from "./components/images/help";
import Horloge from "./components/images/horloge";
import ArrowUp from "./components/micro/arrowUp";
import Image from "next/image";
import { Footer } from "./components/footer";
import Expertise from "./components/sections/expertise";
import SectionTitle from "./components/micro/sectionTitle";
const TRUST_MARKERS = [
  "Ingénieur développement logiciel CNRS (LIRMM)",
  "Docteur en psychologie cognitive",
  "Publications internationales",
];

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

const TIMELINE = [
  {
    period: "2015-2019",
    title: "Doctorat psychologie cognitive",
    href: LINKS.thesis,
    hrefLabel: "Thèse sur HAL",
  },
  {
    period: "2019–2021",
    title: "Langage et IHM",
    href: LINKS.scholar,
    hrefLabel: "Publications",
  },
  {
    period: "2021-2024",
    title: "UX, Objets connectés",
    href: LINKS.hal,
    hrefLabel: "Publications",
  },
  {
    period: "2024 - Aujourd'hui",
    title: "Ingénierie & édition logicielle",
    href: LINKS.lirmm,
    hrefLabel: "Équipe CNRS",
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

const PROJECTS = [
  {
    title: "NumDiag",
    tag: "Application web · RGPD",
    body: "Start-up CNRS dédiée à la sensibilisation et au diagnostique des risques liés à la confidentialité des données personnelles.",
    href: LINKS.numdiag,
    hrefLabel: "NumDiag.fr",
    image: "/sites/numdiag.svg",
  },
  {
    title: "Kevin Nicolas",
    tag: "Site web · Psychologue",
    body: "Site personnalisé pour un psychologue basé à Baillargues.",
    href: LINKS.kevin,
    hrefLabel: "Psychologue-Baillargues.fr",
    image: "/sites/kev_site.svg",
  },
  {
    title: "Recherche & publications",
    tag: "Cognition · Interaction humain–machine",
    body: "Travaux sur l'expérience utilisateur, le langage et les environnements intelligents — publiés et cités internationalement.",
    href: LINKS.scholar,
    hrefLabel: "Google Scholar",
    image: "/sites/publis.svg",
  },
];

const FAQ = [
  {
    q: "Pourquoi un développeur avec un doctorat en psychologie ?",
    a: "Parce que le web, c'est avant tout des humains qui lisent, hésitent, cliquent ou abandonnent, même quand ils interagissent avec une IA. Ma formation me permet de concevoir des interfaces qui respectent ces mécanismes — pas seulement des tendances visuelles.",
  },
  {
    q: "Quelles technologies utilisez-vous ?",
    a: "Ruby on Rails, Node.js, React et Next.js. Le choix dépend de votre projet, pas de ma préférence.",
  },
  {
    q: "Travaillez-vous seul ?",
    a: "Oui. Vous échangez directement avec la personne qui conçoit, développe et livre. Pour des besoins spécifiques (design graphique poussé, contenu), je peux recommander des collaborateurs de confiance.",
  },
  {
    q: "Intervenez-vous hors Montpellier ?",
    a: "Oui, en visio. La proximité humaine ne dépend pas du code postal.",
  },
  {
    q: "Pouvez-vous reprendre un projet existant ?",
    a: "Oui — audit, refonte partielle ou reconstruction. J'ai l'habitude de naviguer dans du code existant.",
  },
];

export default function Home() {
  return (
    // Utiliser partout https://motion.dev/examples/react-hero-stagger
    // UTILISER PARTOUT https://motion.dev/examples/react-enter-animation
    // UTILISER pour transitions entre thème si position différente https://motion.dev/examples/react-css-spring
    // POUR LES BOUTONS : https://motion.dev/examples/react-material-design-ripple
    <div className="">
      {/* Hero */}
      <section id="accueil" className="not-arrow-up relative overflow-hidden">
        <ArrowUp />
        {/* UTILISER https://motion.dev/examples/react-path-drawing */}

        <div className="pt-15 relative mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
          <div className="flex flex-wrap items-center md:justify-between">
            <div className="lg:w-2/3">
              <h1 className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-secondary">
                Développeur web · Docteur en psychologie cognitive
              </h1>
              <h2 className="font-secondary text-[2.5rem] font-medium leading-[1.08] tracking-tight text-primary sm:text-5xl lg:text-6xl">
                Des applications
                <br /> qui vous ressemblent,
                <br /> pensées pour vos utilisateurs.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-primary/75">
                Un seul interlocuteur pour vos projets - de l'élaboration au
                code en production.
              </p>
              <div className="lg:mt-5 mt-5 flex flex-wrap items-center gap-4">
                {/* <PrimaryButton href="#contact">
                  Réserver un échange gratuit
                </PrimaryButton> */}
                <SecondaryLink href="#nos-realisations">
                  Voir mes réalisations
                </SecondaryLink>
              </div>
            </div>
            <div className="self-center mx-auto mt-5 lg:mt-0">
              <HeroLottie />
            </div>
          </div>
        </div>
      </section>

      {/* La proposition */}
      {/* Utiliser https://motion.dev/examples/js-stagger */}
      <section className="mx-auto lg:mt-20 pt-5 pb-10">
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

      {/* Expertise */}
      <Expertise />

      {/* Portfolio */}
      <section
        id="portfolio"
        className="py-20 md:py-20 bg-secondary/20 text-secondary"
      >
        <div className="mx-auto px-6 md:px-10 lg:px-12">
          <SectionLabel>Portfolio</SectionLabel>
          <SectionTitle>Un aperçu de mon travail</SectionTitle>
          <p className="mt-2 text-primary">Jetez un oeil !</p>

          <div className="mt-7 grid lg:grid-cols-3 md:grid-cols-2 gap-x-15">
            {PROJECTS.map((project) => (
              <article key={project.title} className="flex flex-col">
                <p className="text-xs font-medium uppercase tracking-wide text-tertiary">
                  {project.tag}
                </p>
                <h3 className="mt-3 font-secondary text-xl font-medium">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed ">
                  {project.body}
                </p>
                <Image
                  key={project.image}
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={400}
                  className={`w-auto h-[400px] mt-7
                    rounded ${
                      project.image === "/publis.svg"
                        ? "object-contain"
                        : "object-cover object-[50%-0%]"
                    }
                      transition-transform ease-in-out duration-500
                      md:hover:scale-115 hover:scale-110`}
                />
              </article>
            ))}
          </div>

          <p className="mt-10 font-secondary text-xl text-primary/80">
            Votre projet pourrait être le prochain.
          </p>
          <div className="mt-4">
            <PrimaryButton href="#contact">Parlons-en</PrimaryButton>
          </div>
        </div>
      </section>


      {/* About */}
      <section id="about" className="w-full bg-bg">
        <div className="bg-secondary/60 px-6 py-20 md:px-10 md:py-28 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_0.9fr] max-w-6xl">
            <div>
              <SectionLabel>À propos</SectionLabel>
              <div className="relative mt-4">
                <h2 className="inline font-secondary font-bold leading-tight text-primary sm:text-4xl lg:text-[2.75rem] w-fit">
                  atuWeb, c&apos;est moi
                </h2>
                <div className="absolute -top-20 right-0 overflow-hidden bg-secondary/80 rounded-full w-fit">
                  <Image
                    src="/tutur_gros_plan.svg"
                    alt="Photo de Arthur-Henri Michalland"
                    width={800}
                    height={800}
                    className="w-35 h-35 object-[0%-10%] inline "
                  />
                </div>
              </div>
              <p className="mt-6 text-lg leading-relaxed text-primary/75">
                {PERSON.name} (mais je préfère Arthur). Grand curieux et
                passioné par les interactions humain-machine, j'ai travaillé
                avec des roboticiens, dans l'UX, et les environnements
                connectés, avant de devenir développeur au CNRS. Je me consacre
                aujourd'hui pleinement au développement web et à la création
                d'applications sur mesure.
              </p>
              <p className="mt-4 text-base leading-relaxed text-primary/65">
                J&apos;ai choisi de travailler en freelance pour être
                directement en contact avec vous, pour traduire votre activité
                dans un produit numérique compréhensible, crédible et
                actionnable en ligne.
              </p>
            </div>
            {/* à la place de l'image ? https://motion.dev/examples/react-motion-path */}
            <Image
              src="/coding_ok.svg"
              alt="image d'un singe travaillmant à son bureau"
              width={800}
              height={800}
              className="w-full h-auto rotate-y-180 -rotate-z-4 object-[0%-10%] mt-20"
            />
          </div>

          <div className="-mt-10">
            <h3 className="font-secondary text-xl font-medium text-primary">
              Envie de creuser un peu plus ?
            </h3>
            {/* Utiliser https://motion.dev/examples/js-stagger */}
            {/* Utiliser https://motion.dev/examples/react-bobble-hover */}
            <ol className="mt-6 space-x-9 border-t border-primary/12 pl-6 inline-block">
              {TIMELINE.map((item) => (
                <li key={item.title} className="relative inline-block">
                  <span
                    className="absolute -left-[calc(1rem)] -top-1.5 h-2.5 w-2.5 rounded-full border-2 border-bg bg-secondary"
                    aria-hidden="true"
                  />
                  <p className="text-xs font-medium uppercase tracking-wide text-secondary">
                    {item.title}
                  </p>
                  {item.href && (
                    <p className="">
                      <ExternalLink href={item.href}>
                        {item.hrefLabel} ↗
                      </ExternalLink>
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Contact */}
      {/* POUR BOuTON D'ENVOI MAIL : https://motion.dev/examples/react-multi-state-badge */}
      {/* quand email envoyé : https://motion.dev/examples/react-notifications-list */}
      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28 lg:px-12"
      >
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* UTILISER https://motion.dev/examples/react-color-interpolation */}
          <div>
            <SectionLabel>Contact</SectionLabel>
            <SectionTitle>Travaillons ensemble</SectionTitle>
            <p className="mt-5 text-base leading-relaxed text-primary/70">
              Décrivez-moi votre besoin en quelques lignes. Je reviens vers vous
              sous 48 h — ou on fixe directement un créneau pour en parler.
            </p>
            <p className="mt-4 text-sm text-primary/50">
              Pas de spam. Pas de relance agressive. Une réponse honnête sur ce
              que je peux faire pour vous.
            </p>

            <p className="mt-8">
              <a
                href={`mailto:${PERSON.email}`}
                className="font-secondary text-xl text-secondary underline-offset-4 hover:underline"
              >
                {PERSON.email}
              </a>
            </p>
          </div>

          <form
            className="rounded-2xl border border-primary/10 bg-white/50 p-7 backdrop-blur-sm"
            action={`mailto:${PERSON.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-primary"
                >
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-primary/15 bg-bg px-4 py-2.5 text-sm text-primary outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-primary"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-primary/15 bg-bg px-4 py-2.5 text-sm text-primary outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15"
                />
              </div>
              <div>
                <label
                  htmlFor="project"
                  className="mb-1.5 block text-sm font-medium text-primary"
                >
                  Votre projet
                </label>
                <select
                  id="project"
                  name="project"
                  className="w-full rounded-lg border border-primary/15 bg-bg px-4 py-2.5 text-sm text-primary outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15"
                >
                  <option>Site vitrine</option>
                  <option>Application web</option>
                  <option>Refonte</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-primary"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-y rounded-lg border border-primary/15 bg-bg px-4 py-2.5 text-sm text-primary outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-lg border border-tertiary bg-tertiary px-6 py-3 text-sm font-medium text-white shadow-sm shadow-tertiary/30 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Envoyer ma demande
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      {/* UTILISER https://motion.dev/examples/react-accordion */}
      <section
        id="faq"
        className="border-y border-primary/8 bg-primary/20 py-20 md:py-28"
      >
        <div className="mx-auto max-w-3xl px-6 md:px-10 lg:px-12">
          <div className="text-center">
            <SectionLabel>FAQ</SectionLabel>
            <SectionTitle>Questions fréquentes</SectionTitle>
          </div>

          <div className="mt-12 space-y-3">
            {FAQ.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-primary/10 bg-bg px-5 py-4 open:shadow-sm"
              >
                <summary className="cursor-pointer list-none font-medium text-primary [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {item.q}
                    <span
                      className="text-secondary transition group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-primary/65">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
