export const SITE_NAME = "atu-web";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://atu-web.fr";

export const PERSON = {
  name: "Arthur-Henri Michalland",
  jobTitle: "Développeur web freelance",
  email: "contact@atu-web.fr",
  location: "Montpellier, France",
} as const;

export const SAME_AS = [
  "https://orcid.org/0000-0003-2530-3211",
  "https://github.com/Arth-M",
  "https://scholar.google.com/citations?user=rQIx8ZoAAAAJ&hl=fr",
  "https://fr.linkedin.com/company/atuweb",
  "https://www.researchgate.net/profile/Arthur_Henri_Michalland",
  "https://www.lirmm.fr/annuaire/?qq=Michalland+Arthur",
  "https://theses.hal.science/tel-02574831/",
  "https://pmc.ncbi.nlm.nih.gov/articles/PMC8534254/",
] as const;

export const LINKS = {
  orcid: "https://orcid.org/0000-0003-2530-3211",
  github: "https://github.com/Arth-M",
  scholar:
    "https://scholar.google.com/citations?user=rQIx8ZoAAAAJ&hl=fr",
  linkedinCompany: "https://fr.linkedin.com/company/atuweb",
  lirmm: "https://www.lirmm.fr/annuaire/?qq=Michalland+Arthur",
  thesis: "https://theses.hal.science/tel-02574831/",
  publication:
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC8534254/",
  webIris: "https://web-iris.lirmm.fr/",
  halSpaceSyntax: "https://hal.science/hal-03774890v1",
  ballab: "https://sites.google.com/view/annaborghilab/members",
} as const;
