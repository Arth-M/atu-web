"use client";

import { useTheme } from "./ThemeProvider";

const LABELS: Record<string, { label: string }> = {
  classic: { label: "Classique" },
  dark: { label: "Dark" },
  colorful: { label: "Coloré" },
};

export function ThemeSwitch() {
  const { theme, setTheme, themes } = useTheme();

  return (
    <div className="fixed top-3 left-1/2 transform -translate-x-1/2 rounded-2xl
    font-secondary z-50 grid grid-cols-3 justify-items-center border
    border-primary/50 bg-secondary/15 shadow-lg shadow-secondary/40 backdrop-blur-xs">
      {themes.map((t) => {
        const active = t === theme;
        return (
          <button
            key={t}
            onClick={() => setTheme(t)}
            aria-pressed={active}
            className={`
              tiny min-w-full cursor-pointer px-3 py-1.5  text-center
              transition-all tracking-wide duration-200 font-normal rounded-2xl
              ${!active ? "text-primary hover:bg-surface-hover" : theme === "dark" ? "bg-secondary text-black " : "bg-secondary text-white "}
            `}
          >
            {LABELS[t].label}
          </button>
        );
      })}
    </div>
  );
}
