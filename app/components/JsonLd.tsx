import { LINKS, PERSON, SAME_AS, SITE_NAME, SITE_URL } from "../../lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description:
          "Sites web et applications sur mesure — Ruby on Rails, Node, React, Next.js, avec une approche fondée en psychologie cognitive.",
        inLanguage: "fr-FR",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        sameAs: [LINKS.linkedinCompany],
        founder: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: PERSON.name,
        jobTitle: PERSON.jobTitle,
        url: SITE_URL,
        email: PERSON.email,
        sameAs: [...SAME_AS],
        knowsAbout: [
          "Ruby on Rails",
          "Node.js",
          "React",
          "Next.js",
          "TypeScript",
          "Psychologie cognitive",
          "UX",
          "Développement web",
        ],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Université Paul Valéry Montpellier 3",
        },
        worksFor: { "@id": `${SITE_URL}/#organization` },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Doctorat",
          name: "Doctorat en psychologie cognitive",
          url: LINKS.thesis,
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: SITE_NAME,
        url: SITE_URL,
        description:
          "Création de sites vitrines et applications web sur mesure pour indépendants et PME.",
        provider: { "@id": `${SITE_URL}/#person` },
        areaServed: { "@type": "Country", name: "France" },
        serviceType: [
          "Développement web",
          "Application web sur mesure",
          "Refonte de site web",
          "Audit UX",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
