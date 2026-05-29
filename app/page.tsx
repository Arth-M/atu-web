import Link from "next/link";
import { LINKS, PERSON } from "../lib/site";

const TRUST_MARKERS = [
  "Ingénieur développement logiciel CNRS (LIRMM)",
  "Doctorat en psychologie cognitive",
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
    title: "Application web & outil métier",
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
    title: "Clarté cognitive",
    body: "Hiérarchie visuelle, libellés, parcours : tout est pensé pour réduire l'effort mental. L'utilisateur sait où il est, quoi faire, et pourquoi.",
  },
  {
    title: "Action guidée",
    body: "Chaque CTA, formulaire et étape suit une logique d'affordance : ce qui est possible doit être évident, ce qui est secondaire reste accessible sans distraire.",
  },
  {
    title: "Code durable",
    body: "Mon expérience en ingénierie logicielle (LIRMM, éditeur) m'a appris que la meilleure UX meurt si le code est fragile. Je livre des bases solides, documentées, maintenables.",
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

const STACK = [
  "Ruby on Rails",
  "Node.js",
  "React",
  "Next.js",
  "PostgreSQL",
  "APIs REST",
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
    images: ["/numdiag.svg"],
  },
  {
    title: "Kevin",
    tag: "Site web · Psychologue",
    body: "Site personnalisé pour un psychologue basé à Baillargues, mon premier site en indépendant!",
    href: LINKS.kevin,
    hrefLabel: "Psychologue-Baillargues.fr",
    images: ["/kev_site.svg"],
  },
  {
    title: "Recherche & publications",
    tag: "Cognition · Interaction humain–machine",
    body: "Travaux sur l'expérience utilisateur, le langage, la cognition spatiale et les environnements intelligents — publiés et cités internationalement.",
    href: LINKS.scholar,
    hrefLabel: "Google Scholar",
    images: ["/publis.svg"],
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-secondary">
      {children}
    </p>
  );
}

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
      className="font-secondary text-3xl font-medium leading-tight text-primary sm:text-4xl lg:text-[2.75rem]"
    >
      {children}
    </h2>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-lg border border-tertiary bg-tertiary px-6 py-3 text-sm font-medium text-white shadow-sm shadow-tertiary/30 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-tertiary/25"
    >
      {children}
    </Link>
  );
}

function SecondaryLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 text-sm font-medium text-secondary underline-offset-4 transition hover:text-primary hover:underline"
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
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
    <>
      {/* Hero */}
      <section
        id="accueil"
        className="relative overflow-hidden border-b border-primary/8"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(1,0,8,0.07) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 top-32 h-96 w-96 rounded-full bg-secondary/8 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-8 md:px-10 md:pb-32 md:pt-12 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
            <div className="max-w-2xl">
              <SectionLabel>
                Développeur web · Doctorat en psychologie cognitive
              </SectionLabel>
              <h1 className="font-secondary text-[2.5rem] font-medium leading-[1.08] tracking-tight text-primary sm:text-5xl lg:text-6xl">
                Des sites et des apps que vos utilisateurs{" "}
                <span className="text-secondary">comprennent</span> — et
                utilisent.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary/75">
                Je suis {PERSON.name} : docteur en psychologie cognitive,
                développeur web en Ruby on Rails, Node, React et Next.js. De la
                recherche au code en production — un seul interlocuteur pour vos
                projets.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <PrimaryButton href="#contact">
                  Réserver un échange gratuit
                </PrimaryButton>
                <SecondaryLink href="#nos-realisations">
                  Voir mes réalisations
                </SecondaryLink>
              </div>
              <p className="mt-5 text-sm text-primary/50">
                15 minutes · Sans engagement · Réponse sous 48 h
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="rounded-2xl border border-primary/10 bg-white/60 p-8 backdrop-blur-sm">
                <p className="font-secondary text-xl leading-snug text-primary">
                  « Un site ne devrait pas seulement être beau. Il devrait être{" "}
                  <em className="not-italic text-secondary">compris</em>. »
                </p>
                <div className="mt-8 space-y-3 border-t border-primary/8 pt-6">
                  {TRUST_MARKERS.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-sm text-primary/70"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tertiary"
                        aria-hidden="true"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip — mobile */}
      <section className="border-b border-primary/8 bg-primary/[0.02] lg:hidden">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-2 px-6 py-5 md:px-10">
          Un site beau ET utilisé
          {TRUST_MARKERS.map((item) => (
            <span
              key={item}
              className="text-xs font-medium uppercase tracking-wide text-primary/55"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
          <p className="font-secondary text-6xl font-medium leading-none text-primary/8">
            ?
          </p>
          <div>
            <SectionLabel>Le constat</SectionLabel>
            <SectionTitle>
              Un site joli que personne ne comprend — ou un outil métier que
              personne n&apos;adopte ?
            </SectionTitle>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-primary/70">
              <p>
                Vous investissez dans un site ou une application. Le rendu est
                propre. Pourtant : les visiteurs ne contactent pas, les équipes
                contournent l&apos;outil, les parcours sont confus.
              </p>
              <p>
                Souvent, ce n&apos;est pas un problème de design au sens
                décoratif. C&apos;est un problème de{" "}
                <strong className="font-medium text-primary">
                  charge cognitive
                </strong>{" "}
                : trop d&apos;options, des libellés flous, une friction au
                mauvais endroit.
              </p>
              <p>
                C&apos;est précisément le lien que j&apos;ai appris à construire
                — d&apos;abord en laboratoire, ensuite en développant des
                applications réelles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section
        id="notre-expertise"
        className="border-y border-primary/8 bg-primary/[0.02] py-20 md:py-28"
      >
        <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
          <div className="max-w-2xl">
            <SectionLabel>Notre expertise</SectionLabel>
            <SectionTitle>Ce que je construis pour vous</SectionTitle>
            <p className="mt-4 text-base leading-relaxed text-primary/70">
              Site vitrine, landing page, outil métier ou MVP produit : je
              m&apos;adapte à votre stade — lancement, refonte ou premier produit
              digital.
            </p>
          </div>

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

      {/* Approach */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionLabel>Mon approche</SectionLabel>
            <SectionTitle>
              Pourquoi un doctorat en psychologie change la façon de coder
            </SectionTitle>
            <p className="mt-5 text-base leading-relaxed text-primary/70">
              Pendant dix ans, j&apos;ai étudié comment les humains perçoivent,
              anticipent et interagissent — avec des objets, des interfaces, des
              espaces. Puis j&apos;ai appris à traduire ça en logiciel.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-primary/55">
              Je ne promets pas la magie d&apos;une refonte miracle en 48 h. Je
              promets une méthode rigoureuse — la même qu&apos;en recherche et
              en production.
            </p>
          </div>

          <div className="space-y-5">
            {APPROACH.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-primary/10 p-6"
              >
                <h3 className="font-secondary text-lg font-medium text-primary">
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

      {/* Process */}
      <section className="border-y border-primary/8 bg-primary/[0.02] py-20 md:py-28">
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

      {/* Stack */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <SectionLabel>Technologies</SectionLabel>
            <SectionTitle>
              Des outils modernes, choisis pour le bon problème
            </SectionTitle>
            <p className="mt-4 text-base leading-relaxed text-primary/70">
              Rails ou Node pour des backends structurés et des APIs légères.
              React et Next.js pour des interfaces performantes et bien
              référencées.
            </p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {STACK.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-primary/12 bg-white/50 px-4 py-2 text-sm text-primary/80"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Portfolio */}
      <section
        id="nos-realisations"
        className="border-t border-primary/8 py-20 md:py-28 bg-secondary/90 text-white"
      >
        <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
          <SectionLabel>Nos réalisations</SectionLabel>
          <SectionTitle>Projets & expériences</SectionTitle>
          <p className="mt-4 max-w-2xl text-base">
            Chaque projet part d&apos;un besoin concret — visibilité, crédibilité,
            ou outil métier. Mes réalisations clients arrivent ; voici ce qui
            nourrit ma pratique aujourd&apos;hui.
          </p>

          <div className="mt-14 grid gap-6 lg:grid-cols-3 ">
            {PROJECTS.map((project) => (
              <article
                key={project.title}
                className="flex flex-col p-7"
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
                {project.images.map((image) => (
                  <img key={image} src={image} alt={project.title} className={`w-full h-[400px] rounded ${image === "/publis.svg" ? "object-contain" : "object-cover object-[50%-0%]"}`} />
                ))}
                {project.href && project.hrefLabel && (
                  <p className="mt-5 text-tertiary">
                    <ExternalLink href={project.href}>
                      {project.hrefLabel} ↗
                    </ExternalLink>
                  </p>
                )}
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
        id="entreprise"
        className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28 lg:px-12"
      >
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionLabel>L&apos;entreprise</SectionLabel>
            <SectionTitle>atu-web, c&apos;est moi</SectionTitle>
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

      {/* FAQ */}
      <section className="border-y border-primary/8 bg-primary/[0.02] py-20 md:py-28">
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
    </>
  );
}
