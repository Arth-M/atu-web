"use client";
import Image from "next/image";
import SectionLabel from "../micro/SectionLabel";
import SectionTitle from "../micro/sectionTitle";
import { ExternalLink } from "../micro/PageLinks";
import { useTheme } from "../theme/ThemeProvider";
import { FRANCENUM, PERSON, SITE_NAME } from "../../../lib/site";

const RAISONS = [
  {
    title: "Un expert vérifié",
    description:
      "Chaque Activateur est contrôlé par la Direction générale des entreprises : existence légale, activité dédiée à l'accompagnement des TPE PME, expérience et références clients.",
  },
  {
    title: "Informé des aides",
    description:
      "Les Activateurs suivent les aides financières et les dispositifs publics de soutien à la numérisation, pour vous orienter vers ceux qui correspondent à votre projet.",
  },
  {
    title: "Un premier rendez-vous gratuit",
    description:
      "Un premier échange offert pour définir votre projet et, si besoin, vous orienter vers l'Activateur le plus adapté.",
  },
];

const ENGAGEMENTS = [
  "Une réponse à votre message sous 48 h ouvrées",
  "Un accueil attentif : écoute de vos besoins et réponses claires",
  "Un suivi du projet tel que nous l'avons défini ensemble au départ",
  "Des explications simples et transparentes sur mes services et mes tarifs",
];

export default function FranceNum() {
  const { theme } = useTheme();
  return (
    <section id="francenum" className="w-full bg-bg">
      <div className="container-perso-x container-perso-y padding-bottom-container-perso">
        <SectionLabel>France Num</SectionLabel>
        <SectionTitle>
          Pourquoi faire appel à un Activateur France Num ?
        </SectionTitle>

        <ol className="flex flex-wrap lg:grid lg:grid-cols-3 lg:gap-2 items-start justify-center mt-7 px-3 md:px-0">
          {RAISONS.map((raison, index) => (
            <li
              key={raison.title}
              className={`relative mx-auto sm:mx-3 my-6 lg:max-w-full z-20
                hover:scale-105 transition-all duration-300 rounded-xl border
                border-secondary/80 shadow-secondary/80 p-4
                shadow-[-7px_7px_0px_shadow-primary] hover:-translate-y-2
                hover:shadow-[-15px_17px_0px_-5px_shadow-primary]
                ${
                  theme === "dark"
                    ? "shadow-secondary border-secondary"
                    : " border-primary shadow-primary"
                }`}
            >
              <span
                className="block font-secondary text-3xl font-bold text-secondary"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h4 className="mt-2 h4 font-semibold tracking-wider text-primary font-secondary">
                {raison.title}
              </h4>
              <p className="mt-3 text-primary/80">{raison.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex flex-col gap-6 md:flex-row md:items-start">
          <a
            href="https://www.francenum.gouv.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 self-start"
          >
            <Image
              src="/Activateur_FranceNum.jpg"
              alt="Logo Activateur France Num"
              width={907}
              height={826}
              preload={false}
              className="h-24 w-auto rounded-lg"
            />
          </a>
          <div className="small leading-relaxed text-primary/75">
            <p>
              L&apos;initiative France Num, coordonnée par la Direction générale
              des entreprises en partenariat avec les Régions, les organisations
              professionnelles, les chambres de commerce, les chambres des
              métiers, etc., fédère des acteurs, des dispositifs et des
              ressources pratiques pour aider les TPE PME à se numériser :
              guides et conseils, diagnostics, formations, aides financières,
              etc.
            </p>
            <p className="mt-3">
              {SITE_NAME} ({PERSON.name}, développeur web freelance) a rejoint
              l&apos;initiative France Num en {FRANCENUM.joined} et présente son
              offre pour la transformation numérique des TPE PME sur le site
              France Num :{" "}
              <ExternalLink href={FRANCENUM.profile}>
                {FRANCENUM.profile.replace(/^https?:\/\/(www\.)?/, "")} ↗
              </ExternalLink>
              .
            </p>
            <p className="mt-3">
              {SITE_NAME} s&apos;engage à informer les entreprises de
              l&apos;offre des partenaires France Num et à les orienter vers un
              autre Activateur France Num s&apos;il n&apos;est pas en mesure de
              répondre à leur demande.
            </p>
          </div>
        </div>

        <div className="mt-13">
          <h4 className="font-secondary font-medium text-primary">
            Mes engagements Activateur France Num
          </h4>
          <ul className="mt-4 space-y-3 pl-3.5">
            {ENGAGEMENTS.map((engagement) => (
              <div key={engagement} class="flex items-center">
                 <div
                  className="absolute -ml-4 h-2.5 w-2.5 rounded-full border-2 border-bg/80 bg-secondary"
                  aria-hidden="true"
                />
              <li  className="relative text-primary/80">
                {engagement}
              </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
