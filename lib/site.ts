export const SITE_NAME = "AtuWeb";
export const SITE_URL = "https://atuweb.fr"
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://atuweb.fr";

export const PERSON = {
  name: "Arthur-Henri Michalland",
  jobTitle: "Développeur web freelance",
  email: "contact@atuweb.fr",
  location: "Montpellier, France",
} as const;

export const SAME_AS = [
  "https://orcid.org/0000-0003-2530-3211",
  "https://github.com/Arth-M",
  "https://scholar.google.com/citations?user=rQIx8ZoAAAAJ&hl=fr",
  "https://fr.linkedin.com/company/atuweb",
  "https://www.researchgate.net/profile/Arthur_Henri_Michalland",
  "https://theses.hal.science/tel-02574831/",
] as const;

export const LINKS = {
  orcid: "https://orcid.org/0000-0003-2530-3211",
  github: "https://github.com/Arth-M",
  scholar:
    "https://scholar.google.com/citations?user=rQIx8ZoAAAAJ&hl=fr",
  linkedinCompany: "https://fr.linkedin.com/company/atuweb",
  thesis: "https://theses.hal.science/tel-02574831/",
  halSpaceSyntax: "https://hal.science/hal-03774890v1",
  ballab: "https://sites.google.com/view/annaborghilab/members",
} as const;
