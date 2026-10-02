"use client";
import { useRef } from "react";
import { motion, useInView, stagger } from "motion/react";
import SectionLabel from "../micro/SectionLabel";
import SectionTitle from "../micro/sectionTitle";
import { PrimaryButton } from "../micro/PageLinks";
import { LINKS } from "../../../lib/site";
import Image from "next/image";
import useIsMobile from "../theme/isMobile";
import { useTheme } from "../theme/ThemeProvider";

export default function Portfolio({ init, anim, duree }) {
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const isMobile = useIsMobile();
  const isInView = useInView(sectionRef, {
    once: true,
    margin: isMobile ? "-150px 0px" : "-350px",
  });

  const container = {
    hidden: {},
    show: {
      transition: {
        // startDelay = délai avant le 1er enfant ; ensuite +staggerStep à chaque enfant
        delayChildren: stagger(0.3, { startDelay: 1 }),
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
      title: "K-Yoga",
      tag: "Application web · RGPD",
      body: "Plateforme de Yoga - pratique en ligne, cours live et replays sur abonnement. ",
      realisation:"Gestion des failles de sécurité, modernisation de l'application, optimisation de la base de donnée, migration vers Render, ajout de fonctionnalités",
      href: LINKS.kyoga,
      hrefLabel: "k-yoga.fr",
      image: "/sites/k-yoga.webp",
    },
    {
      title: "NumDiag",
      tag: "Application web · RGPD",
      body: "Start-up CNRS dédiée à la sensibilisation et au diagnostique des risques liés à la confidentialité des données personnelles.",
      realisation: "De la conception à la mise en ligne, avec SEO. Hébergement machine virtuelle CNRS",
      href: LINKS.numdiag,
      hrefLabel: "NumDiag.fr",
      image: "/sites/numdiag.webp",
    },
    {
      title: "K. Nicolas",
      tag: "Site web · Psychologue",
      body: "Site personnalisé pour un psychologue basé à Baillargues",
      realisation: "De la conception à la mise en ligne, avec SEO. Hébergement Vercel",
      href: LINKS.kevin,
      hrefLabel: "Psychologue-Baillargues.fr",
      image: "/sites/kev_site.webp",
    },
    {
      title: "Recherche & publications",
      tag: "Cognition · Interaction humain–machine",
      body: "Travaux sur l'expérience utilisateur, le langage et les environnements intelligents.",
      realisation:"Publiés et cités internationalement.",
      href: LINKS.scholar,
      hrefLabel: "Google Scholar",
      image: "/sites/publis.webp",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : undefined}
      id="portfolio"
      className="z-0 relative container-perso-y padding-bottom-container-large bg-secondary/20 text-secondary"
    >
      <motion.div
        className="absolute inset-0 w-full h-full bg-secondary hidden md:block"
        animate={
          isInView
            ? {
                scale: [1, 0.6, 0.2, 0.1, 0],
                rotate: [0, 0, 180, 0, 0],
                opacity: [1, 1, 1, 1, 0.3],
                borderRadius: ["0%", "0%", "50%", "50%", "50%"],
              }
            : undefined
        }
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
      />
      <motion.div
        className="absolute inset-0 w-full h-full bg-secondary md:hidden"
        initial={{ scale: 1 }}
        animate={
          isInView
            ? {
                scale: 0,
              }
            : undefined
        }
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
      <div className="container-perso-x z-90">
        <motion.div variants={item}>
          <SectionLabel>Portfolio</SectionLabel>
          <SectionTitle>Un aperçu de mon travail</SectionTitle>
        </motion.div>
        <motion.p variants={item} className="mt-2 text-primary">
          Jetez un oeil !
        </motion.p>

        <div className="mt-7 grid lg:grid-cols-2 md:grid-cols-2 gap-x-15 gap-y-15">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.title}
              variants={item}
              className={`flex flex-col ${index != 0 ? "mt-10 md:mt-0" : ""}`}
            >
              <p
                className="text-tertiary/90 text-shadow-[0.5px_0.5px_0px]
              text-shadow-secondary/60 font-medium uppercase tracking-wide"
              >
                {project.tag}
              </p>
              <h4 className="font-secondary  font-medium">{project.title}</h4>

              <p className="mt-2 flex-1  leading-relaxed ">{project.body}</p>
              <p className="mt-1 flex-1 leading-relaxed text-tertiary/90 text-shadow-[0.5px_0px_0px]
              text-shadow-secondary/60">{project.realisation}</p>
              <Image
                key={project.image}
                src={project.image}
                alt={project.title}
                width={400}
                height={400}
                className={`md:w-auto md:h-[400px] md:w-[80%] h-90 mx-auto md:mx-0 md:mt-9 mt-3
                rounded ${
                  project.image === "/publis.svg"
                    ? "object-contain"
                    : "object-cover object-[50%-0%]"
                }
                  transition-transform ease-in-out duration-500
                  md:hover:scale-115 hover:scale-110`}
                preload={false}
              />
            </motion.article>
          ))}
        </div>
        <motion.div variants={item} className="z-90">
          <p className="z-50 mt-15 font-secondary text-primary/80">
            Votre projet pourrait être le prochain.
          </p>
          <div className="mt-4">
            <PrimaryButton href="#contact">Parlons-en</PrimaryButton>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
