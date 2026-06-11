import SectionLabel from "./components/SectionLabel";
import { PrimaryButton, SecondaryLink } from "./components/PageLinks";
import { LINKS, PERSON } from "../lib/site";
import Soleil from "./components/images/soleil";
import HeroLottie from "./components/images/heroLottie";
import Help from "./components/images/help";
import Horloge from "./components/images/horloge";
import ArrowUp from "./components/arrowUp";
import Image from "next/image";

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
    title: "Clarté",
    body: "Hiérarchie visuelle, libellés, parcours : l'utilisateur sait où il est, quoi faire, et pourquoi.",
    icon: <Soleil />,
  },
  {
    title: "Action guidée",
    body: "Chaque élément explicite sa logique : ce qui est possible doit être évident, ce qui est secondaire accessible.",
    icon: <Help />,
  },
  {
    title: "Code durable",
    body: "Même la meilleure UX meurt lorsque le code est fragile. Je vous livre une codebase claire, documentée, et maintenable.",
    icon: <Horloge />,
  },
];

const TIMELINE = [
  {
    period: "2015-2019",
    title: "Doctorat en psychologie cognitive",
    body: "Thèse sur les relations entre cognition et motricité manuelle, interactions humain–machine (LIRMM / Univ. Montpellier 3).",
    href: LINKS.thesis,
    hrefLabel: "Thèse sur HAL",
  },
  {
    period: "2019–2021",
    title: "Recherche internationale",
    body: "Post-doctorat à Rome (BALLAB, Sapienza) sur l'incarnation des concepts et les affordances.",
    href: LINKS.scholar,
    hrefLabel: "Publication PMC",
  },
  {
    period: "2021-2022",
    title: "Environnements intelligents",
    body: "Travaux sur l'expérience utilisateur, la cognition spatiale, la space syntax et les smart buildings (projet HUT, Montpellier).",
    href: LINKS.halSpaceSyntax,
    hrefLabel: "Publication HAL",
  },
  {
    period: "2022-2024",
    title: "Recherche UX",
    body: "Travaux sur l'expérience utilisateur à la fondation i2ml et chez l'éditeur de logiciel Berger Levrault.",
    href: LINKS.halSpaceSyntax,
    hrefLabel: "Publication HAL",
  },
  {
    period: "2024 - Aujourd'hui",
    title: "Ingénierie & édition logicielle",
    body: "Freelance et Ingénieur de recherche CNRS au LIRMM (équipe Web3).",
    href: LINKS.lirmm,
    hrefLabel: "L'équipe Web3 du LIRMM",
  },
];

const STACK1 = [
  { image: "/dev/nodejs.svg", alt: "Node.js", mono: true  },
  { image: "/dev/nextjs.svg", alt: "Next.js", mono: true  },
  { image: "/dev/rails.svg", alt: "Ruby on Rails" },
  { image: "/dev/cloudflare.svg", alt: "Cloudflare" },
];

const STACK2 = [
  { image: "/dev/react.svg", alt: "React" },
  { image: "/dev/redis.svg", alt: "Redis" },
  { image: "/dev/figma.svg", alt: "Figma" },
  { image: "/dev/postgresql.svg", alt: "PostgreSQL" },
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

const PROFILE_LINKS = [
  { label: "ORCID", href: LINKS.orcid },
  { label: "GitHub", href: LINKS.github },
  { label: "Google Scholar", href: LINKS.scholar },
  { label: "LinkedIn atu-web", href: LINKS.linkedinCompany },
  { label: "ResearchGate", href: "https://www.researchgate.net/profile/Arthur_Henri_Michalland" },
];

function SectionTitle({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <h2
      id={id}
      className="font-secondary font-bold leading-tight text-primary sm:text-4xl lg:text-[2.75rem] w-fit"
    >
      {children}
    </h2>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="text-sm font-medium underline-offset-4 transition hover:text-primary hover:underline"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="">
      {/* Hero */}
      <section
        id="accueil"
        className="not-arrow-up relative overflow-hidden"
      >
        <ArrowUp />


        <div className="pt-15 relative mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
          <div className="flex flex-wrap items-center md:justify-between">
            <div className="lg:w-2/3">
              <h1 className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-secondary">
                Développeur web · Docteur en psychologie cognitive
              </h1>
              <h2 className="font-secondary text-[2.5rem] font-medium leading-[1.08] tracking-tight text-primary sm:text-5xl lg:text-6xl">
                Des applications<br/> qui vous ressemblent,<br/> pensées pour vos utilisateurs.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-primary/75">
                Un seul interlocuteur pour vos
                projets - de l'élaboration au code en production.
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


      {/* Problem */}
      <section className="mx-auto lg:mt-20 pt-5 pb-10">
          <div className="max-w-3xl mx-auto">
            <SectionLabel>Mon approche</SectionLabel>
            <SectionTitle>
              Prendre en compte à la fois la technologie et les utilisateurs
            </SectionTitle>
            <div className="mt-6 space-y-2 leading-relaxed text-primary/70">
              <p>
                Le travail de développeur nécessite une logique et une rigueur qui ne correspondent pas
                nécessairement à l'état d'esprit des utilisateurs.
                AtuWeb vous propose de ne négliger aucun de ces aspects : un produit centré sur l'utilisateur,
                réalisé avec des technologies performantes.
              </p>

              <p className="leading-relaxed text-primary/70">
              Pendant dix ans, j&apos;ai étudié comment les humains perçoivent,
              anticipent et interagissent — avec des objets connectés, des interfaces, des
              espaces. Puis j&apos;ai appris à traduire ça en logiciel.
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
          </div>))}

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
            <PrimaryButton href="#contact">Discutons de votre projet</PrimaryButton>
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

      {/* expertise */}
      <section id="expertise"className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24 lg:px-12">
        <SectionLabel>Expertises techniques</SectionLabel>
        <div className="flex flex-nowrap flex-col lg:flex-row items-center lg:mt-7 mt-12">
          <Image
            src="/dev/typescript.svg" alt="typescript"
            width={400} height={400}
            className="lg:h-12 lg:w-12 h-13 w-13 mt-5 md:mt-0"
            loading="lazy" />
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-4 lg:gap-y-2 md:flex md:flex-wrap md:space-x-7 mb-7 lg:mb-0  grid grid-cols-2 gap-x-14 gap-y-2">
            {STACK1.map((tech) => (
              <Image
              key={tech.alt} src={tech.image} alt={tech.alt}
              width={400} height={400}
              className={`h-25 w-25 ${tech.mono ? "stack-icon-mono" : ""}`}
              loading="lazy" />
            ))}
          </div>
          <div className="max-w-lg mx-5 text-center">
              <SectionTitle>
                Des technologies modernes et efficaces
              </SectionTitle>

            <p className="mt-4 text-primary/80">
              Je sélectionne les outils adaptés à votre projet en alliant
              <span className="font-semibold"> performance</span>,
              <span className="font-semibold"> maintenabilité</span> et
              <span className="font-semibold"> sécurité</span>.
            </p>
            <p className="mt-4 text-base leading-relaxed text-primary/70">

            </p>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-x-5 lg:gap-y-9 md:flex md:flex-wrap md:space-x-7 mt-14 lg:mt-0 grid grid-cols-2 gap-x-18 gap-y-7">
            {STACK2.map((tech) => (
              <Image
              key={tech.alt} src={tech.image} alt={tech.alt}
              width={400} height={400}
              className="h-15 w-15"
              loading="lazy" />
            ))}
          </div>
          <Image
            src="/dev/vite.svg" alt="typescript"
            width={400} height={400}
            className="lg:h-15 lg:w-15 h-13 w-13 mt-5 md:mt-0"
            loading="lazy" />
        </div>


      </section>

      {/* Portfolio */}
      <section
        id="portfolio"
        className="py-20 md:py-20 bg-secondary/20 text-secondary"
      >
        <div className="mx-auto px-6 md:px-10 lg:px-12">
          <SectionLabel>Portfolio</SectionLabel>
          <SectionTitle>Un aperçu de mon travail</SectionTitle>
          <p className="mt-2 text-primary">
            Jetez un oeil !
          </p>

          <div className="mt-7 grid lg:grid-cols-3 md:grid-cols-2 gap-x-15">
            {PROJECTS.map((project) => (
              <article
                key={project.title}
                className="flex flex-col"
              >
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
                   key={project.image} src={project.image} alt={project.title}
                   width={400} height={400}
                   className={`w-full h-[400px] mt-7
                    rounded ${project.image === "/publis.svg" ?
                      "object-contain" : "object-cover object-[50%-0%]"}
                      transition-transform ease-in-out duration-500
                      md:hover:scale-115 hover:scale-110`} />
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
      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28 lg:px-12"
      >
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionLabel>À propos</SectionLabel>
            <div className="relative mt-15">
            <h2
                className="inline font-secondary font-bold leading-tight text-primary sm:text-4xl lg:text-[2.75rem] w-fit"
              >
                atuWeb, c&apos;est moi
              </h2>
            <div className="absolute -top-20 right-0 overflow-hidden bg-secondary/80 rounded-full w-fit">
              <Image
                src="/tutur_gros_plan.svg"
                alt="Arthur-Henri Michalland"
                width={800}
                height={800}
                className="w-35 h-35 object-[0%-10%] inline "
              />
            </div>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-primary/75">
              Bonjour — je suis {PERSON.name}, développeur web freelance basé à{" "}
              {PERSON.location.split(",")[0]}. Docteur en psychologie
              cognitive. Ingénieur de recherche au CNRS. Expérience en labo de
              recherche, au LIRMM et chez Berger Levrault.
            </p>
            <p className="mt-4 text-base leading-relaxed text-primary/65">
              J&apos;ai choisi de travailler en solo parce que vos projets
              méritent de la clarté : une vision, une voix, une responsabilité.
              Mon métier, ce n&apos;est pas seulement « faire un site » —
              c&apos;est traduire votre activité en quelque chose de
              compréhensible, crédible et actionnable en ligne.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Clarté — pas de promesses floues.",
                "Rigueur — code maintenable, jalons définis.",
                "Partenariat — disponible après la livraison.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-primary/70"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-secondary text-xl font-medium text-primary">
              Parcours
            </h3>
            <ol className="mt-6 space-y-6 border-l border-primary/12 pl-6">
              {TIMELINE.map((item) => (
                <li key={item.title} className="relative">
                  <span
                    className="absolute -left-[calc(1.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-bg bg-secondary"
                    aria-hidden="true"
                  />
                  <p className="text-xs font-medium uppercase tracking-wide text-secondary">
                    {item.period}
                  </p>
                  <p className="mt-1 font-medium text-primary">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-primary/60">
                    {item.body}
                  </p>
                  {item.href && (
                    <p className="mt-2">
                      <ExternalLink href={item.href}>
                        {item.hrefLabel} ↗
                      </ExternalLink>
                    </p>
                  )}
                </li>
              ))}
            </ol>

            <div className="mt-10 rounded-xl border border-primary/10 p-6">
              <p className="text-sm font-medium text-primary">
                Profils & publications
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                {PROFILE_LINKS.map((link) => (
                  <li key={link.label}>
                    <ExternalLink href={link.href}>{link.label}</ExternalLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
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
      <section id="faq" className="border-y border-primary/8 bg-primary/20 py-20 md:py-28">
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

      {/* Footer */}
      <footer className="border-t border-primary/10 bg-primary/[0.03] py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
          <div>
            <p className="stack-sans-notch text-lg font-semibold text-primary">
              <span className="text-logo">atu</span>-web
            </p>
            <p className="mt-1 text-sm text-primary/55">
              {PERSON.name} · Sites web & applications sur mesure
            </p>
          </div>

          <nav aria-label="Profils externes">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {PROFILE_LINKS.map((link) => (
                <li key={link.label}>
                  <ExternalLink href={link.href}>{link.label}</ExternalLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mx-auto mt-8 max-w-6xl px-6 text-center text-xs text-primary/40 md:px-10 lg:px-12">
          © {new Date().getFullYear()} atu-web · {PERSON.name} · Tous droits
          réservés
        </p>
      </footer>
    </div>
  );
}
