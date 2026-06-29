'use client';
import { useRef } from "react";
import { motion, useInView } from "motion/react";

const APPEAR_DURATION = 0.060;
const SWEEP_DURATION = 0.800;
const SHRINK_DURATION = 0.300;
const SCALE_TOTAL = APPEAR_DURATION + SWEEP_DURATION + SHRINK_DURATION;
const SWEEP_EASE = [0.4, 0, 0.2, 1];


export default function SectionLabel({ children }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-70px" });
  return (
    <div ref={containerRef} className="relative text-secondary w-fit mb-3">
      <h1 className="mb-1 text-lg font-medium tracking-[0.2em]">
        {children}
      </h1>
      <motion.hr
        className="border-secondary ml-auto mr-1 mt-2"
        initial={{ scaleX: 0, opacity: 1 }}
        animate={
          isInView ? { scaleX:1,width: "75%", opacity: 1 } : undefined
        }
        style={{ transformOrigin: "left center" }}
        transition={{ duration: 0.5, delay: SWEEP_DURATION+APPEAR_DURATION, ease: "easeInOut" }}
      />
    </div>
  );
}
