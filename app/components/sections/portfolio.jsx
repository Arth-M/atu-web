'use client';
import { useRef } from "react";
import { motion, useInView, stagger } from "motion/react";
import SectionLabel from "../micro/SectionLabel";
import SectionTitle from "../micro/sectionTitle";
import { PrimaryButton } from "../PageLinks";
import { LINKS } from "../../../lib/site";
import Image from "next/image";
import useIsMobile from "../theme/isMobile";

export default function Portfolio({ init, anim, duree }) {
  const sectionRef = useRef(null);
  const isMobile = useIsMobile();
  const isInView = useInView(sectionRef, { once: true, margin: isMobile ? "-150px 0px" : "-350px" });

  const container = {
    hidden: {},
    show: {
      transition: {
        // startDelay = délai avant le 1er enfant ; ensuite +staggerStep à chaque enfant
        delayChildren: stagger(0.300, { startDelay: 1 }),
      },
    },
  };

  const item = {
    hidden: init,
    show: {
      ...anim,
      transition: { duration: duree },
    },
  };

  const PROJECTS = [
    {
      title: "NumDiag",
      tag: "Application web · RGPD",
      body: "Start-up CNRS dédiée à la sensibilisation et au diagnostique des risques liés à la confidentialité des données personnelles.",
      href: LINKS.numdiag,
      hrefLabel: "NumDiag.fr",
      image: "/sites/numdiag.svg",
    },
    {
      title: "Kevin Nicolas",
      tag: "Site web · Psychologue",
      body: "Site personnalisé pour un psychologue basé à Baillargues.",
      href: LINKS.kevin,
      hrefLabel: "Psychologue-Baillargues.fr",
      image: "/sites/kev_site.svg",
    },
    {
      title: "Recherche & publications",
      tag: "Cognition · Interaction humain–machine",
      body: "Travaux sur l'expérience utilisateur, le langage et les environnements intelligents — publiés et cités internationalement.",
      href: LINKS.scholar,
      hrefLabel: "Google Scholar",
      image: "/sites/publis.svg",
    },
  ];

  return (
    <motion.section
    ref={sectionRef}
    variants={container}
    initial="hidden"
    animate={isInView ? "show" : undefined}
    id="portfolio"
    className="relative pt-20 pb-40 bg-secondary/20 text-secondary"
  >
    <motion.div
        className="absolute inset-0 w-full h-full bg-secondary hidden md:block"
        animate={ isInView ?{
            scale: [1, 0.6, .2, .1, 0 ],
            rotate: [0, 0, 180, 0, 0],
            opacity: [1, 1, 1, 1, 0.3],
            borderRadius: ["0%", "0%", "50%", "50%", "50%"],
        } : undefined}
        transition={{
            duration: 1.5,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],

        }}
      />
    <motion.div
        className="absolute inset-0 w-full h-full bg-secondary md:hidden"
        initial={{ scale: 1 }}
        animate={ isInView ?{
            scale: 0,
        } : undefined}
        transition={{
            duration: 1.5,
            ease: "easeInOut",
        }}
      />

    {/* <motion.div

        className="absolute inset-0 w-full h-full bg-secondary"
        animate={ isInView ?{
            scale: [1, 0.4, .2, .1, .1, 0 ],
            rotate: [0, 0, 180, 180, 0, 0],
            opacity: [1, 1, 1, 1, 0.8, 0.5],
            borderRadius: ["0%", "0%", "50%", "50%", "50%", "50%"],
        } : undefined}
        transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 0.95, 1],

        }}
      >
      </motion.div> */}
    <div className="mx-auto px-6 md:px-10 lg:px-12">
      <motion.div variants={item}>
      <SectionLabel>Portfolio</SectionLabel>
      <SectionTitle>Un aperçu de mon travail</SectionTitle>
      </motion.div>
      <motion.p variants={item} className="mt-2 text-primary">Jetez un oeil !</motion.p>

      <div className="mt-7 grid lg:grid-cols-3 md:grid-cols-2 gap-x-15">
        {PROJECTS.map((project) => (
          <motion.article key={project.title} variants={item} className="flex flex-col">
            <p className="text-xs font-medium uppercase tracking-wide text-tertiary">
              {project.tag}
            </p>
            <h3 className="mt-3 font-secondary text-xl font-medium">
              {project.title}
            </h3>

            <p className="mt-3 flex-1 text-sm leading-relaxed ">
              {project.body}
            </p>
            <Image
              key={project.image}
              src={project.image}
              alt={project.title}
              width={400}
              height={400}
              className={`md:w-auto md:h-[400px] w-[80%] h-90 mx-auto md:mx-0 mt-7
                rounded ${
                  project.image === "/publis.svg"
                    ? "object-contain"
                    : "object-cover object-[50%-0%]"
                }
                  transition-transform ease-in-out duration-500
                  md:hover:scale-115 hover:scale-110`}
            />
          </motion.article>
        ))}
      </div>

      <p className="mt-15 font-secondary text-xl text-primary/80">
        Votre projet pourrait être le prochain.
      </p>
      <div className="mt-4">
        <PrimaryButton href="#contact">Parlons-en</PrimaryButton>
      </div>
    </div>
  </motion.section>
  );
}
