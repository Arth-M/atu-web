"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const THEMES = ["classic", "dark", "colorful"] as const;
type Theme = (typeof THEMES)[number];

type ThemeCtx = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  themes: readonly Theme[];
};

const ThemeContext = createContext<ThemeCtx | null>(null);

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("classic");

  // Reconcile with theme-init / localStorage after hydration
  useEffect(() => {
    const stored = document.documentElement.dataset.theme as Theme | undefined;
    if (stored && THEMES.includes(stored)) {
      setThemeState(stored);
    }
  }, []);

  function setTheme(t: Theme) {
    setThemeState(t);
    document.documentElement.dataset.theme = t;
    localStorage.setItem("theme", t);
  }

  return (
    <ThemeContext value={{ theme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext>
  );
}
