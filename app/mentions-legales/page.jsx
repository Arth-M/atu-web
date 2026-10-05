import SectionLabel from "../components/micro/SectionLabel";
import { LEGAL, PERSON, SITE_NAME, SITE_URL } from "../../lib/site";

export const metadata = {
  title: "Mentions légales",
  description: `Mentions légales et politique de confidentialité du site ${SITE_NAME}.`,
  alternates: { canonical: `${SITE_URL}/mentions-legales` },
};

const LAST_UPDATE = "5 octobre 2026";

function Section({ id, title, children }) {
  return (
    <section
      id={id}
      className="border-t border-primary/15 pt-10 mt-10 first:border-0 first:pt-0 first:mt-0"
    >
      <h4 className="font-secondary font-semibold text-primary mb-5">
        {title}
      </h4>
      <div className="font-primary text-primary/80 leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
}

function InfoList({ items }) {
  return (
    <dl className="grid sm:grid-cols-[max-content_1fr] gap-x-8 gap-y-2">
      {items.map(([label, value]) => (
        <div key={label} className="contents flex-col content-end">
          <dt className="font-secondary text-secondary small self-center">{label}</dt>
          <dd className="text-primary self-center">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function TextLink({ href, children }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className="text-secondary underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary"
    >
      {children}
    </a>
  );
}

export default function MentionsLegales() {
  return (
    <div className="container-perso-x container-perso-y padding-bottom-container-perso">
      <div className="mx-auto max-w-3xl">
        <SectionLabel>Mentions légales</SectionLabel>
        <h1
          className="invisible h-0"
        >
          Mentions légales
        </h1>
        <p className="small text-primary/60">
          Dernière mise à jour : {LAST_UPDATE}
        </p>

        <div className="mt-10">
          <Section id="editeur" title="Éditeur du site">
            <p>
              Le site <TextLink href={SITE_URL}>{SITE_URL.replace("https://", "")}</TextLink>{" "}
              est édité par :
            </p>
            <InfoList
              items={[
                ["Nom", `${PERSON.name} — ${SITE_NAME}`],
                ["Statut", LEGAL.status],
                ["SIRET", LEGAL.siret],
                ["Adresse", PERSON.location],
                [
                  "Email",
                  <TextLink key="email" href={`mailto:${PERSON.email}`}>
                    {PERSON.email}
                  </TextLink>,
                ],
                [
                  "Téléphone", `${PERSON.tel}`
                ],
              ]}
            />
          </Section>


          <Section id="hebergeur" title="Hébergeur">
            <InfoList
              items={[
                ["Nom", LEGAL.host.name],
                ["Raison sociale", LEGAL.host.company],
                ["Adresse", LEGAL.host.address],
                ["SIRET", LEGAL.host.siret],
                ["RCS", LEGAL.host.rcs],
                ["Téléphone", LEGAL.host.tel],
                [
                  "Site",
                  <TextLink key="host" href={LEGAL.host.url}>
                    {LEGAL.host.url.replace("https://", "")}
                  </TextLink>,
                ],
              ]}
            />
          </Section>

          <Section id="publication" title="Directeur de la publication">
            <p>
              {PERSON.name}, joignable à l’adresse{" "}
              <TextLink href={`mailto:${PERSON.email}`}>{PERSON.email}</TextLink>.
            </p>
          </Section>

          <Section id="propriete-intellectuelle" title="Propriété intellectuelle">
            <p>
              L’ensemble des contenus de ce site (textes, logo, illustrations,
              animations, photographies, code source) est la propriété exclusive
              de {PERSON.name}, sauf mention contraire. Toute reproduction,
              représentation ou adaptation, totale ou partielle, sans
              autorisation écrite préalable est interdite (articles L.122-4 et
              suivants du Code de la propriété intellectuelle).
            </p>
            <p>
              Les logos des technologies présentés dans la section
              « Expertises » (React, Next.js, Ruby on Rails, Node.js, etc.) sont
              des marques appartenant à leurs détenteurs respectifs. Ils sont
              affichés uniquement pour indiquer les outils maîtrisés, sans
              impliquer de partenariat.
            </p>
            <p>
              Les visuels de la section « Portfolio » représentent des sites
              réalisés pour des clients ; les marques et contenus qui y
              figurent restent la propriété de leurs titulaires.
            </p>
          </Section>

          <Section id="donnees-personnelles" title="Données personnelles">
            <p>
              Ce site ne collecte des données personnelles que via le
              formulaire de contact. Les informations demandées (adresse email,
              type de projet, message) servent uniquement à répondre à votre
              demande.
            </p>
            <InfoList
              items={[
                ["Responsable", `${PERSON.name} (${SITE_NAME})`],
                ["Finalité", "Répondre aux demandes de contact et de devis"],
                [
                  "Base légale",
                  "Art. 6 du RGPD",
                ],
                ["Destinataire", `${PERSON.name}, seul destinataire des messages`],
                [
                  "Conservation",
                  "Jusqu’à la fin de l’échange. Si celui-ci aboutit à une collaboration, les données sont conservées le temps de la relation contractuelle et des obligations légales qui s’y rattachent.",
                ],
              ]}
            />
            <p>
              Aucune donnée n’est vendue, cédée ou utilisée à des fins
              publicitaires.
            </p>
            <p>
              Conformément au RGPD et à la loi Informatique et Libertés, vous
              disposez d’un droit d’accès, de rectification, d’effacement, de
              limitation, d’opposition et de portabilité de vos données. Pour
              l’exercer, écrivez à{" "}
              <TextLink href={`mailto:${PERSON.email}`}>{PERSON.email}</TextLink>.
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez
              adresser une réclamation à la{" "}
              <TextLink href="https://www.cnil.fr/fr/plaintes">CNIL</TextLink>.
            </p>
          </Section>

          <Section id="cookies" title="Cookies et traceurs">
            <p>
              Ce site n’utilise aucun cookie publicitaire, aucun outil de mesure
              d’audience et aucun traceur tiers. Aucun bandeau de consentement
              n’est donc nécessaire.
            </p>
            <p>
              Seul votre choix de thème (Classique, Dark ou Coloré) est
              enregistré dans le stockage local de votre navigateur, afin de
              l’appliquer lors de vos prochaines visites. Cette information
              reste sur votre appareil, n’est transmise à personne et peut être
              supprimée à tout moment en effaçant les données de navigation.
            </p>
          </Section>

          <Section id="responsabilite" title="Liens et responsabilité">
            <p>
              Ce site contient des liens vers des sites tiers (GitHub, LinkedIn,
              publications scientifiques, sites clients). {SITE_NAME} n’exerce
              aucun contrôle sur leur contenu et ne saurait en être tenu
              responsable.
            </p>
            <p>
              Les présentes mentions légales sont soumises au droit français.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}
