'use client'

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useTheme } from "../ThemeProvider";

export default function HeroLottie() {
  const { theme } = useTheme();
  const LOTTIE_BY_THEME = {
    classic: "/hero.lottie",
    dark: "/hero_dark.lottie",
    // colorful: "/hero_colorful.lottie", // si tu l’ajoutes
  };
  const src = LOTTIE_BY_THEME[theme] ?? "/hero.lottie";

  return (
    <DotLottieReact
      key={src}
      src={src}
      loop
      autoplay
      className="h-70 w-70"
    />
  );
}
