"use client"
import AnimatedSectionLabel2 from "./../micro/AnimatedSectionLabel2"
import Dev from "../images/dev"
import SectionLabel from "../micro/SectionLabel"
import Image from "next/image"
import { useTheme } from "../theme/ThemeProvider"

export default function Services() {
  const { theme } = useTheme()
  return (
    <section
      id="services"
      className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24 lg:px-12"
    >
      {/* UTILISER https://motion.dev/examples/js-spring-follow-cursor */}
      {/* UTILISER https://motion.dev/examples/react-follow-pointer-with-spring */}

      <SectionLabel>Services</SectionLabel>
      <div className="grid grid-cols-3 gap-6 items-center justify-around lg:mt-7 mt-12">
          <div className={`z-20 hover:scale-105 transition-all duration-300 rounded-xl border border-secondary/80 shadow-secondary/80 p-4 shadow-[-7px_7px_0px_shadow-primary] hover:-translate-y-2 hover:shadow-[-15px_17px_0px_-5px_shadow-primary] ${theme === "dark" ? "shadow-secondary border-secondary" : " border-primary shadow-primary"}`}>
            <Image src="/coding.png" alt="Dev" width={100} height={100} className="mx-auto w-40 h-auto" />
          <h3 className="text-xl font-semibold tracking-wider font-secondary">Sites & Applications web</h3>
            <p className="text-primary/80 text-lg">
              Ergonomie applicative, API, dynamisme, performance, SPA, multipages, de la conception à la mise en ligne
            </p>
          </div>
          <div className={`z-20 hover:scale-105 transition-all duration-300 rounded-xl border border-secondary/80 shadow-secondary/80 p-4 shadow-[-7px_7px_0px_shadow-primary] hover:-translate-y-2 hover:shadow-[-15px_17px_0px_-5px_shadow-primary] ${theme === "dark" ? "shadow-secondary border-secondary" : " border-primary shadow-primary"}`}>
          <h3>Accompagnement</h3>
            <p className="text-primary/80 text-lg">
              Conseil, aide à la décision, suivi de projet, hébergement, maintenance, suivi des indicateurs de performance,
            </p>
          </div>
          <div className={`z-20 hover:scale-105 transition-all duration-300 rounded-xl border border-secondary/80 shadow-secondary/80 p-4 shadow-[-7px_7px_0px_shadow-primary] hover:-translate-y-2 hover:shadow-[-15px_17px_0px_-5px_shadow-primary] ${theme === "dark" ? "shadow-secondary border-secondary" : " border-primary shadow-primary"}`}>
          <h3>Intégration IA</h3>
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
