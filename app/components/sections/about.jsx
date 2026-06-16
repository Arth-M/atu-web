'use client'
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform, useSpring  } from "motion/react";
import SectionLabel from "../micro/SectionLabel";
import Image from "next/image";
import Logo from "../images/logo";
import { ExternalLink } from "../PageLinks";
import { PERSON, LINKS } from "../../../lib/site";

const MotionLogo = motion.create(Logo);

export default function About() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const TIMELINE = [
    {
      period: "2015-2019",
      title: "Doct. psychologie cognitive",
      href: LINKS.thesis,
      hrefLabel: "Thèse sur HAL",
    },
    {
      period: "2019–2021",
      title: "Langage & IHM",
      href: LINKS.scholar,
      hrefLabel: "Publications",
    },
    {
      period: "2021-2024",
      title: "UX, Objets connectés",
      href: LINKS.hal,
      hrefLabel: "Publications",
    },
    {
      period: "2024 - Aujourd'hui",
      title: "Ingénierie logicielle",
      href: LINKS.lirmm,
      hrefLabel: "Équipe CNRS",
    },
  ];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,   // plus haut = plus collé au scroll
    damping: 28,      // plus haut = moins d’oscillation
    mass: 0.3,
  });

  const y = useTransform(smoothProgress, [0, 1], [0, 1000]);

  return (
    <section ref={sectionRef} id="about" className="relative w-full bg-bg">
    <div className="bg-secondary/50 py-20 md:py-28 px-6 md:px-10 lg:px-12">
      <div className="grid md:grid-cols-[1.5fr_1fr] w-full">
        <div>
          <SectionLabel>À propos</SectionLabel>
          <div className="relative mt-4">
            <h2 className="inline font-secondary font-bold leading-tight text-primary text-4xl lg:text-[2.75rem] w-fit">
              atuWeb, c&apos;est moi
            </h2>
            <div className="hidden sm:block sm:absolute -top-20 md:right-0 md:left-auto left-75 overflow-hidden bg-secondary/80 rounded-full w-fit">
              <Image
                src="/tutur_gros_plan.svg"
                alt="Photo de Arthur-Henri Michalland"
                width={800}
                height={800}
                className="w-35 h-35 object-[0%-10%] inline "
              />
            </div>
          </div>
          <div className="sm:hidden float-right mt-6 overflow-hidden bg-secondary/80 rounded-full w-fit">
              <Image
                src="/tutur_gros_plan.svg"
                alt="Photo de Arthur-Henri Michalland"
                width={800}
                height={800}
                preload={true}
                className="w-35 h-35 object-[0%-10%] inline "
              />
          </div>
          <p className="mt-6 text-lg leading-relaxed text-primary/75">
            {PERSON.name} (mais je préfère Arthur). Grand curieux et
            passioné par les interactions humain-machine, j'ai travaillé
            avec des roboticiens, dans l'UX, et les environnements
            connectés, avant de devenir développeur au CNRS. Je me consacre
            aujourd'hui pleinement au développement web et à la création
            d'applications sur mesure.
          </p>
          <p className="mt-4 text-base leading-relaxed text-primary/65">
            J&apos;ai choisi de travailler en freelance pour être
            directement en contact avec vous, pour traduire votre activité
            dans un produit numérique compréhensible, crédible et
            actionnable en ligne.
          </p>
        </div>
        {/* à la place de l'image ? https://motion.dev/examples/react-motion-path */}
        {/* <Image
          src="/coding_ok.svg"
          alt="image d'un singe travaillant à son bureau"
          width={800}
          height={800}
          className="w-full h-auto rotate-y-180 -rotate-z-4 object-[0%-10%] mt-20"
        /> */}
        <motion.div ref={containerRef} style={{ y }} className="absolute -top-50 right-20 w-50 h-50">
          <MotionLogo color="logo-fill-animate" className="absolute inset-0 w-50 h-50"
            initial={{ opacity: 0 }}
            animate={isInView ?{ opacity: 1 } : undefined}
            transition={{
              duration: 1.4,
              ease: "easeInOut",
            }}
          />

          </motion.div>
      </div>

      <div className="mt-10 w-fit">
        <h3 className="font-secondary text-xl font-medium text-primary">
          Envie de creuser un peu plus ?
        </h3>
        {/* Utiliser https://motion.dev/examples/js-stagger */}
        {/* Utiliser https://motion.dev/examples/react-bobble-hover */}
        <ol className="mt-6 space-x-9 md:border-t md:border-l-0 border-l border-primary/12 md:pl-6 pl-3.5">
          {TIMELINE.map((item) => (
            <li key={item.title} className="relative md:inline-block">
              <span
                className="absolute md:-left-[calc(1rem)] -left-[19.5px] md:-top-1.5 top-0.5 h-2.5 w-2.5 rounded-full border-2 border-bg/80 bg-secondary"
                aria-hidden="true"
              />
              <p className="text-xs font-medium uppercase tracking-wide text-secondary mt-4 md:mt-0">
                {item.title}
              </p>
              {item.href && (
                <p className="-mt-2">
                  <ExternalLink href={item.href}>
                    {item.hrefLabel} ↗
                  </ExternalLink>
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>

  )
}
