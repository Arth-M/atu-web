"use client";

import { useTheme } from "./ThemeProvider";

const LABELS: Record<string, { label: string}> = {
  classic:  { label: "Classique" },
  dark:     { label: "Dark" },
  colorful: { label: "Coloré" },
};

export function ThemeSwitch() {
  const { theme, setTheme, themes } = useTheme();

  return (
    <div className="fixed bottom-5 right-5 z-50 grid grid-cols-3 divide-x divide-border justify-center items-center border border-border bg-surface/80 shadow-lg backdrop-blur-md">
      {themes.map((t) => {
        const active = t === theme;
        return (
          <button
            key={t}
            onClick={() => setTheme(t)}
            aria-pressed={active}
            className={`
              cursor-pointer px-3 py-1.5 text-xs text-center
              transition-all duration-200 stack-sans-text font-light
              ${active
                ? "bg-primary text-white"
                : "text-text-soft hover:bg-surface-hover"
              }
            `}
          >
            {LABELS[t].label}
          </button>
        );
      })}
    </div>
  );
}
