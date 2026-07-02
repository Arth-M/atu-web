"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

const APPEAR_DURATION = 0.06;
const SWEEP_DURATION = 0.8;
const SHRINK_DURATION = 0.3;
const SCALE_TOTAL = APPEAR_DURATION + SWEEP_DURATION + SHRINK_DURATION;
const SWEEP_EASE = [0.4, 0, 0.2, 1];

export default function SectionLabel({ children }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-70px" });
  return (
    <div ref={containerRef} className="relative text-secondary w-fit mb-3">
      <h2 className="mb-1  font-medium tracking-[0.2em]">{children}</h2>
      <motion.hr
        className="border-secondary ml-auto mr-1 mt-2"
        initial={{ scaleX: 0, opacity: 1 }}
        animate={isInView ? { scaleX: 1, width: "75%", opacity: 1 } : undefined}
        style={{ transformOrigin: "left center" }}
        transition={{
          duration: 0.5,
          delay: SWEEP_DURATION + APPEAR_DURATION,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
