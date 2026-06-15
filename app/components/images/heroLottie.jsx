"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useTheme } from "../theme/ThemeProvider";
import { motion } from "motion/react";

export default function HeroLottie({ init, anim, duree, delay }) {
  const { theme } = useTheme();
  const LOTTIE_BY_THEME = {
    classic: "/hero/hero_classic.lottie",
    dark: "/hero/hero_dark.lottie",
    colorful: "/hero/hero_colorful.lottie", // si tu l’ajoutes
  };
  const src = LOTTIE_BY_THEME[theme] ?? "/hero.lottie";

  return (
    <motion.div
      initial={init}
      animate={anim}
      transition={{ duration: duree, delay: delay }}
     >
      <DotLottieReact
        key={src} src={src}
        loop autoplay
        className="h-70 w-70" />
    </motion.div>
  );
}
