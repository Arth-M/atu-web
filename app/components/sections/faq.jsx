"use client";

import { useAnimate } from "motion/react";
import { useEffect } from "react";
import SectionLabel from "../micro/SectionLabel";
import SectionTitle from "../micro/sectionTitle";
import { useTheme } from "../theme/ThemeProvider";

const FAQ = [
  {
    q: "Pourquoi un développeur avec un doctorat en psychologie ?",
    a: "Parce que le web, c'est avant tout des humains qui lisent, hésitent, cliquent ou abandonnent, même quand ils interagissent avec une IA. Ma formation me permet de concevoir des interfaces qui respectent ces mécanismes — pas seulement des tendances visuelles.",
  },
  {
    q: "Quelles technologies utilisez-vous ?",
    a: "Ruby on Rails, Node.js, React et Next.js. Le choix dépend de votre projet, pas de ma préférence.",
  },
  {
    q: "Travaillez-vous seul ?",
    a: "Oui. Vous échangez directement avec la personne qui conçoit, développe et livre. Pour des besoins spécifiques (design graphique poussé, contenu), je peux recommander des collaborateurs de confiance.",
  },
  {
    q: "Intervenez-vous hors Montpellier ?",
    a: "Oui, en visio. La proximité humaine ne dépend pas du code postal.",
  },
  {
    q: "Pouvez-vous reprendre un projet existant ?",
    a: "Oui — audit, refonte partielle ou reconstruction. J'ai l'habitude de naviguer dans du code existant.",
  },
];

export default function Faq() {
  const { theme } = useTheme();
  const [listRef, animate] = useAnimate();

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const items = list.querySelectorAll("[data-faq-item]");
    if (!items.length) return;

    const animations = [...items].map((item) =>
      animate(
        item,
        {
          backgroundColor: ["var(--color-secondary)", "var(--color-tertiary)"],
        },
        {
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }
      )
    );

    return () => {
      animations.forEach((animation) => animation.cancel());
    };
  }, [theme, animate, listRef]);

  return (
    <section
      id="faq"
      className="bg-bg py-20 md:py-28"
    >
      {/* UTILISER https://motion.dev/examples/react-accordion */}
      <div className="mx-auto max-w-3xl px-6 md:px-10 lg:px-12">
        <div className="text-center">
          <SectionLabel>FAQ</SectionLabel>
          <SectionTitle>Questions fréquentes</SectionTitle>
        </div>

        <div ref={listRef} className="mt-12 space-y-3">
          {FAQ.map((item) => (
            <details
              key={item.q}
              data-faq-item
              className="group rounded-xl border border-primary/10 px-5 py-4 open:shadow-sm"
              style={{ backgroundColor: "var(--color-secondary)" }}
            >
              <summary className="cursor-pointer list-none font-medium text-bg [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span
                    className="text-secondary transition group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-bg">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
