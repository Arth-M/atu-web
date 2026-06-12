'use client'

import { useLayoutEffect, useRef, useState } from "react";

export default function SectionLabel({ children }) {
  const ref = useRef(null);
  const [widthPct, setWidthPct] = useState(33);

  useLayoutEffect(() => {
    function update() {
      const el = ref.current;
      if (!el) return;

      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const top = el.getBoundingClientRect().top + window.scrollY;
      const ratio = docHeight > 0 ? top / docHeight : 0;

      // setWidthPct(20 + ratio * 90);
      setWidthPct(Math.min(100, Math.max(30, ratio * 120)))
    }

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div ref={ref} className="relative text-secondary w-fit mb-3">
      <h1 className="mb-1 text-medium font-medium tracking-[0.2em]">
        {children}
      </h1>
      <hr
        className="border-secondary"
        style={{ width: `${widthPct}%` }}
      />
    </div>
  );
}
