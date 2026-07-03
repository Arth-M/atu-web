"use client";
import SectionLabel from "../micro/SectionLabel";
import Coding from "../images/coding";
import Discussion from "../images/discussion";
import ArtificialIntel from "../images/artificialIntel2";
import { useTheme } from "../theme/ThemeProvider";
import { SecondaryLink } from "../micro/PageLinks";

const services = [
  {
    title: "Sites & Applications",
    description:
      "Je crée pour vous un projet robuste et adapté aux technologies actuelles. Ergonomie, performance, tout est pensé du back au front pour transformer votre idée en réalité.",
    id: "site",
    href: "/services#site",
  },
  {
    title: "Accompagnement",
    description:
      "Conseil, hébergement, maintenance, suivi des indicateurs de performance,  je peux vous accompagner sur chaque partie de votre projet, selon vos besoins. On commence quand ?",
    id: "accompagnement",
    href: "/services#accompagnement",
  },
  {
    title: "Intégration IA",
    description:
      "L'IA devient gage de compétitivité et de modernité. Je vous accompagne dans cette transition avec des objectifs simples : qualité UX, utilité, maîtrise des coûts.",
    id: "ia",
    href: "/services#ia",
  },
];

export default function Services() {
  const { theme } = useTheme();
  return (
    <section id="services" className="container-perso-x container-perso-y">
      {/* UTILISER https://motion.dev/examples/js-spring-follow-cursor */}
      {/* UTILISER https://motion.dev/examples/react-follow-pointer-with-spring */}

      <SectionLabel>Services</SectionLabel>
      <div className="flex flex-wrap lg:grid lg:grid-cols-3 lg:gap-2 items-start justify-center mt-7 px-3 md:px-0">
        {services.map((service) => (
          <div
            key={service.id}
            className={`relativemd:w-[300px] mx-auto sm:mx-3 my-6 lg:max-w-full z-20
              hover:scale-105 transition-all duration-300 rounded-xl border
              border-secondary/80 shadow-secondary/80 p-4
              shadow-[-7px_7px_0px_shadow-primary] hover:-translate-y-2
              hover:shadow-[-15px_17px_0px_-5px_shadow-primary]
              ${
                theme === "dark"
                  ? "shadow-secondary border-secondary"
                  : theme === "colorful"
                    ? " border-primary shadow-primary"
                    : " border-primary shadow-primary"
              }`}
          >
            <div className="sm:h-[210px] overflow-hidden">
              {service.id === "site" ? (
                <Coding />
              ) : service.id === "accompagnement" ? (
                <Discussion />
              ) : (
                <ArtificialIntel />
              )}
            </div>
            <h3 className="h4 font-semibold tracking-wider text-primary font-secondary">
              {service.title}
            </h3>
            <p className="md:h-[220px] text-primary/80  mb-5">
              {service.description}
            </p>
            <div className="mb-0 mt-auto">
              <SecondaryLink href={service.href}>En savoir plus</SecondaryLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
