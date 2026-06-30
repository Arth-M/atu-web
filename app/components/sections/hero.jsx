'use client';

import { motion, stagger } from "motion/react";
import HeroLottie from "../images/heroLottie";
import { SecondaryLink } from "../PageLinks";
import { useTheme } from "../theme/ThemeProvider";

export default function Hero({ init, anim, duree }) {
  const { theme } = useTheme();
  const container = {
    hidden: {},
    show: {
      transition: {
        // startDelay = délai avant le 1er enfant ; ensuite +staggerStep à chaque enfant
        delayChildren: stagger(0.300, { startDelay: 0.360 }),
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
      <div className="pt-20 relative mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <div className="flex flex-wrap items-center md:justify-between">
          <div className="lg:w-2/3">
            <motion.h1
              variants={item}
              className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-secondary"
            >
              Développeur web · Docteur en psychologie cognitive
            </motion.h1>
            <motion.h2 variants={item} className={`${theme === "colorful" ? "text-shadow-[3px_1px_0px] text-shadow-secondary" : "tracking-tight" } font-secondary text-[2.5rem] font-medium leading-[1.08] text-primary sm:text-5xl`}>
                Un seul interlocuteur pour vos projets - de l&apos;élaboration au
                code en production.
            </motion.h2>
            <motion.div variants={item}>
              <p className="mt-6 text-lg leading-relaxed text-primary/75">
              Expert dans le développement d'applications web et IA sur mesure,
              ma formation en psychologie cognitive me permet aussi de concevoir des
              interfaces qui accompagnent la perception, la mémoire et la décision.
              L'objectif : des applications qui vous ressemblent, pensées pour vos utilisateurs.
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
