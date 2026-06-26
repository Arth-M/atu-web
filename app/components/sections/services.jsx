"use client"
import AnimatedSectionLabel from "./../micro/AnimatedSectionLabel"
import SectionLabel from "../micro/SectionLabel"


export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24 lg:px-12"
    >
      {/* UTILISER https://motion.dev/examples/js-spring-follow-cursor */}
      {/* UTILISER https://motion.dev/examples/react-follow-pointer-with-spring */}

      <AnimatedSectionLabel>Services</AnimatedSectionLabel>
      <div className="grid grid-cols-3 gap-4 items-center justify-around lg:mt-7 mt-12">
          <div className="rounded border-secondary/40 border p-4">
          <SectionLabel>Sites & Applications web</SectionLabel>
            <p className="text-primary/80 text-lg">
              Ergonomie applicative, API, dynamisme, performance, SPA, multipages, de la conception à la mise en ligne
            </p>
          </div>
          <div className="rounded border-secondary/40 border p-4">
          <SectionLabel>Accompagnement</SectionLabel>
            <p className="text-primary/80 text-lg">
              Conseil, aide à la décision, suivi de projet, hébergement, maintenance, suivi des indicateurs de performance,
            </p>
          </div>
          <div className="rounded border-secondary/40 border p-4">
          <SectionLabel>Intégration IA</SectionLabel>
            <p className="text-primary/80 text-lg">
              L'entrée de l'IA dans les applications web ne fait plus aucun doute,
              elle devient un gage de compétitivité et de modernité. Je vous accompagne
              dans cette intégration en gardant en tête des objectifs simples :
              qualité des interactions utilisateurs,fonctionnalités avancées, maîtrise des
              coûts.
            </p>
          </div>
      </div>
    </section>
  );
}
