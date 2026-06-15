"use client";

import { useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";

const APPEAR_DURATION = 0.120;
const SWEEP_DURATION = 1.320;
const SHRINK_DURATION = 0.660;
const SCALE_TOTAL = APPEAR_DURATION + SWEEP_DURATION + SHRINK_DURATION;
const SWEEP_EASE = [0.4, 0, 0.2, 1];

const headingClass =
  "mb-1 text-medium font-medium tracking-[0.2em]";

export default function AnimatedSectionLabel({ children }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [textWidth, setTextWidth] = useState(0);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    function update() {
      if (textRef.current) {
        setTextWidth(textRef.current.offsetWidth);
      }
    }

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [children]);

  if (reduceMotion) {
    return (
      <div className="relative text-secondary w-fit mb-3">
        <h1 className={headingClass}>{children}</h1>
        <hr className="border-secondary w-full" />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="text-secondary w-fit mb-3">
      <div className="relative">
        <h1
          ref={textRef}
          className={`${headingClass} text-transparent select-none`}
          aria-hidden="true"
        >
          {children}
        </h1>

        <motion.h1
          className={`absolute inset-0 ${headingClass}`}
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={
            isInView ? { clipPath: "inset(0 0% 0 0)" } : undefined
          }
          transition={{ duration: APPEAR_DURATION + SWEEP_DURATION, ease: SWEEP_EASE }}
        >
          {children}
        </motion.h1>

        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-red-500 z-10 pointer-events-none"
          initial={{ x: 0, rotate: 0, scale: 0, opacity: 1 }}
          animate={
            isInView
              ? { x: textWidth, rotate: 360, scale: [0, 1, 1, 0], opacity: 1 }
              : undefined
          }
          transition={{
            x: { duration: SWEEP_DURATION, delay: APPEAR_DURATION, ease: SWEEP_EASE },
            rotate: { duration: SWEEP_DURATION, delay: APPEAR_DURATION, ease: SWEEP_EASE },
            scale: {
              duration: SCALE_TOTAL,
              times: [
                0,
                APPEAR_DURATION / SCALE_TOTAL,
                (APPEAR_DURATION + SWEEP_DURATION) / SCALE_TOTAL,
                1,
              ],
              ease: ["easeOut", "linear", "linear", "linear"],
            },
          }}
        />
      </div>

      <motion.hr
        className="border-secondary"
        initial={{ width: "0%"}}
        animate={
          isInView ? { width: "75%", delay: 1.4, opacity: 1 } : undefined
        }
        transition={{ duration: 0.5, delay: SWEEP_DURATION+APPEAR_DURATION, ease: "easeInOut" }}
      />
    </div>
  );
}
