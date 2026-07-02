"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { DUREE, LITTLEDELAY } from "../animate/textAppear";

const APPEAR_DURATION = 0.06;
const SWEEP_DURATION = 0.8;
const SHRINK_DURATION = 0.3;
const SCALE_TOTAL = APPEAR_DURATION + SWEEP_DURATION + SHRINK_DURATION;
const SWEEP_EASE = [0.4, 0, 0.2, 1];

const headingClass = "mb-1  font-medium tracking-[0.2em]";

export default function AnimatedSectionLabel2({ children }) {
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
        <h2 className={headingClass}>{children}</h2>
        <hr className="border-secondary w-full" />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="text-primary w-fit">
      <div className="relative">
        <h2
          ref={textRef}
          className={`${headingClass} text-transparent select-none`}
          aria-hidden="true"
        >
          {children}
        </h2>

        <motion.h2
          className={`absolute inset-0 ${headingClass}`}
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : undefined}
          transition={{
            delay: LITTLEDELAY * 4 + DUREE,
            duration: APPEAR_DURATION + SWEEP_DURATION,
            ease: SWEEP_EASE,
          }}
        >
          {children}
        </motion.h2>

        {/* <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-tertiary z-10 pointer-events-none"
          initial={{ x: 0, scale: 0, opacity: 1 }}
          animate={
            isInView
              ? { x: textWidth, scale: [0.5, 1, 2.5, 0], opacity: 1 }
              : undefined
          }
          transition={{
            x: { duration: SWEEP_DURATION, delay: APPEAR_DURATION, ease: SWEEP_EASE },
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
        /> */}
      </div>

      <motion.hr
        className="border-primary ml-auto mr-1"
        initial={{ scaleX: 0, opacity: 1 }}
        animate={isInView ? { scaleX: 1, width: "75%", opacity: 1 } : undefined}
        style={{ transformOrigin: "left center" }}
        transition={{
          delay: LITTLEDELAY * 4 + DUREE + SWEEP_DURATION + APPEAR_DURATION,
          duration: 0.5,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
