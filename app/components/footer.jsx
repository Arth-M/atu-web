import { LINKS, PERSON} from "../../lib/site";
import { ExternalLink } from "./PageLinks";

export function Footer() {
  const PROFILE_LINKS = [
    { label: "ORCID", href: LINKS.orcid },
    { label: "GitHub", href: LINKS.github },
    { label: "Google Scholar", href: LINKS.scholar },
    { label: "LinkedIn atu-web", href: LINKS.linkedinCompany },
    { label: "ResearchGate", href: "https://www.researchgate.net/profile/Arthur_Henri_Michalland" },
  ];

  return (
    <footer className="border-t border-primary/10 bg-primary/3 py-12">
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
      <div>
        <p className="stack-sans-notch text-lg font-semibold text-primary">
          <span className="text-logo">atu</span>Web
          <span className="text-sm text-primary/55 font-primary">
           &nbsp; · site web & applications sur mesure
          </span>
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
      © 2026 atu-web · {PERSON.name} · Tous droits
      réservés
    </p>
  </footer>
  );
}
