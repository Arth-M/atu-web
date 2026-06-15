"use client";

import { useTheme } from "./ThemeProvider";
import { DUREE, init, anim } from "../animate/textAppear";
import { motion } from "motion/react";

const LABELS: Record<string, { label: string }> = {
  classic: { label: "Classique" },
  dark: { label: "Dark" },
  colorful: { label: "Coloré" },
};

export function ThemeSwitch() {
  const { theme, setTheme, themes } = useTheme();

  return (
    <motion.div
      initial={init}
      animate={anim}
      transition={{ duration: DUREE}}
      className="fixed top-3 left-1/2 transform -translate-x-1/2 rounded-2xl font-primary text-primary z-50 grid grid-cols-3 justify-center items-center border border-primary/50 bg-secondary/15 shadow-lg shadow-secondary/40 backdrop-blur-xs">
      {themes.map((t) => {
        const active = t === theme;
        return (
          <button
            key={t}
            onClick={() => setTheme(t)}
            aria-pressed={active}
            className={`
              cursor-pointer px-3 py-1.5 text-xs text-center
              transition-all duration-200 font-light rounded-2xl
              ${active ? "bg-secondary text-white " : "hover:bg-surface-hover"}
            `}
          >
            {LABELS[t].label}
          </button>
        );
      })}
    </motion.div>
  );
}
