"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import SectionTitle from "components/micro/sectionTitle";
import SectionLabel from "components/micro/SectionLabel";

const INTERVAL_MS = 4000;

const temoignages = [
  {
    name: "Gwenaëlle",
    company: "NumDiag",
    text: (<>J'ai eu le plaisir de travailler avec Arthur pendant plusieurs années
    avec Numdiag, pour qui il a développé plusieurs applications web.
    Arthur est un développeur <span className="font-bold">talentueux</span>,{" "}
    <span className="font-bold">rigoureux</span>{" "} et{" "}
    <span className="font-bold">toujours à l'écoute des besoins</span>.
    Il a su s'approprier nos enjeux techniques et métier en livrant des
    projets de qualité dans les délais. Je le recommande sans hésitation à quiconque
    cherche un développeur web fiable et impliqué.</>),
  },
  {
    name: "Kevin",
    company: "Psychologue",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    name: "Céline",
    company: "Psychologue",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
];

export default function Temoignages() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  }, [active]);

  const next = useCallback(() => {
    setDirection(1);
    setActive((i) => (i + 1) % temoignages.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive((i) => (i - 1 + temoignages.length) % temoignages.length);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion || temoignages.length <= 1) return;
    const id = setInterval(next, INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, reduceMotion, next]);

  const slideOffset = reduceMotion ? 0 : 60;

  const slideVariants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir * -slideOffset,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir * slideOffset,
    }),
  };

  return (
    <section id="temoignages" className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24 lg:px-12">
      <SectionLabel>Témoignages</SectionLabel>
      <SectionTitle>Ils nous font confiance</SectionTitle>

      <div
        className="relative mt-14"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
        }}
      >
        <div
          className="relative min-h-[280px] overflow-hidden sm:min-h-[335px]"
          aria-live="polite"
          aria-atomic="true"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.blockquote
              key={active}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-3xl text-center"
            >
              <div className="flex items-start justify-center">
                  <span
                    aria-hidden="true"
                    className="align-top font-secondary text-5xl leading-none text-secondary sm:text-6xl"
                  >
                    &ldquo;
                  </span>
                <p className="font-secondary inline-block leading-relaxed text-primary/85 lg:leading-[1.55]">
                  {temoignages[active].text}
                </p>
              </div>
              <div className="mt-8">
                <cite className="not-italic">
                  <p className="font-secondary font-medium text-secondary">
                    {temoignages[active].name}
                  </p>
                  <p className="mt-1 text-sm text-primary/55">
                    {temoignages[active].company}
                  </p>
                </cite>
              </div>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {temoignages.length > 1 && (
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={prev}
              aria-label="Témoignage précédent"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 text-primary/60 transition-colors hover:border-secondary/40 hover:text-secondary"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Témoignages">
              {temoignages.map((temoignage, index) => (
                <button
                  key={temoignage.name}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  aria-label={`Témoignage de ${temoignage.name}`}
                  onClick={() => goTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === active
                      ? "w-8 bg-secondary"
                      : "w-2 bg-primary/20 hover:bg-primary/35"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Témoignage suivant"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 text-primary/60 transition-colors hover:border-secondary/40 hover:text-secondary"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
