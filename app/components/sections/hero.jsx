"use client";

import { motion, stagger } from "motion/react";
import HeroLottie from "../images/heroLottie";
import { SecondaryLink } from "../micro/PageLinks";
import { useTheme } from "../theme/ThemeProvider";

export default function Hero({ init, anim, duree }) {
  const { theme } = useTheme();
  const container = {
    hidden: {},
    show: {
      transition: {
        // startDelay = délai avant le 1er enfant ; ensuite +staggerStep à chaque enfant
        delayChildren: stagger(0.3, { startDelay: 0 }),
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

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      id="accueil"
      className="not-arrow-up relative overflow-hidden"
    >
      <div className="relative lg:pt-20 pt-10 container-perso-x">
        <div className="flex flex-wrap items-center md:justify-between">
          <div className="lg:w-2/3">
            <h1>
              <motion.span
                variants={item}
                className="mb-6 font-medium uppercase tracking-[0.2em] text-secondary"
              >
                Développeur web · Docteur en psychologie cognitive
              </motion.span>
              <motion.span
                variants={item}
                className={`large-text-hero block mt-6 ${theme === "colorful" ? "text-shadow-[3px_1px_0px] text-shadow-secondary" : "tracking-tight"} font-secondary font-medium leading-[1.08] text-primary sm:`}
              >
                Un seul interlocuteur pour vos projets - de l&apos;élaboration
                au code en production.
              </motion.span>
            </h1>
            <motion.div variants={item} className="pt-6">
              <p className=" leading-relaxed text-primary/75">
                Expert dans le développement d'applications web et IA sur
                mesure, ma formation en psychologie cognitive me permet aussi de
                concevoir des interfaces qui accompagnent la perception, la
                mémoire et la décision.
                <br />
                L'objectif : des applications qui vous ressemblent, pensées pour
                vos utilisateurs.
              </p>
              <div className="lg:mt-5 mt-5 flex flex-wrap items-center gap-4">
                <SecondaryLink href="#portfolio">
                  Voir mes réalisations
                </SecondaryLink>
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={item}
            className="self-center mx-auto mt-5 lg:mt-0"
          >
            <HeroLottie />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
