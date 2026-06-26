"use client";

import { useAnimate } from "motion/react";
import { useEffect } from "react";
import SectionLabel from "../micro/SectionLabel";
import SectionTitle from "../micro/sectionTitle";
import { useTheme } from "../theme/ThemeProvider";

const FAQ = [
  {
    q: "Pourquoi un développeur avec un doctorat en psychologie ?",
    a: "Parce que le web, c'est avant tout des humains qui se repèrent dans l'espace, lisent, hésitent, cliquent, même quand ils interagissent avec une IA. Mon expérience me permet de concevoir des interfaces prenant en compte ces mécanismes — pas seulement des tendances visuelles.",
  },
  {
    q: "Quelles technologies utilisez-vous ?",
    a: "Ruby on Rails, Node.js, React, Next.js, Vite, et bien d'autres ! Le choix dépend de votre projet, pas de ma préférence.",
  },
  {
    q: "Travaillez-vous seul ?",
    a: "Oui, vous échangez directement avec la personne qui développe, livre, et maintient votre projet. Pour des besoins spécifiques (e.g. design graphique poussé, création de contenu), je peux recommander des collaborateurs de confiance.",
  },
  {
    q: "Intervenez-vous hors Montpellier ?",
    a: "Oui, en visio ou en présentiel selon les besoins. Notre proximité ne dépendra pas du code postal.",
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
        },
      ),
    );

    return () => {
      animations.forEach((animation) => animation.cancel());
    };
  }, [theme, animate, listRef]);

  return (
    <section id="faq" className="bg-bg py-20 md:py-32">
      {/* UTILISER https://motion.dev/examples/react-accordion */}
      <div className="mx-auto max-w-3xl px-6 md:px-10 lg:px-12">
        <div className="text-center">
          <SectionLabel>FAQ</SectionLabel>
          <SectionTitle>Questions fréquentes</SectionTitle>
        </div>

        <div ref={listRef} className="mt-12">
          {FAQ.map((item, index) => (
            <details
              key={item.q}
              data-faq-item
              className={`group px-5 pt-4 open:shadow-sm ${index === 0 ? "rounded-t-xl" : index === FAQ.length - 1 ? "rounded-b-xl" : ""}`}
              style={{ backgroundColor: "var(--color-secondary)" }}
            >
              <summary className="cursor-pointer list-none font-medium text-bg [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between">
                  {item.q}
                  <span
                    className="text-secondary transition rotate-90 group-open:-rotate-90"
                    aria-hidden="true"
                  >
                    <svg
                      fill=""
                      className="w-5 h-5 fill-bg/20 stroke-bg/20"
                      height="512"
                      viewBox="0 0 25 24"
                      width="512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m7.5 17.8802v-11.76039c0-.86296.83605-1.40063 1.50177-.96581l9.00283 5.8802c.6605.4314.6605 1.5002 0 1.9316l-9.00283 5.8802c-.66572.4348-1.50177-.1029-1.50177-.9658z" />
                    </svg>
                  </span>
                </span>
                <hr className="mt-4 mx-auto border-0 border-t border-bg/15 block group-open:hidden" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-bg">{item.a}</p>
              <hr className="mt-4 w-full border-0 border-t border-bg/15 hidden group-open:block" />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
