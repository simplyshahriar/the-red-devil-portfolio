"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";

export default function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (reduceMotion) return;
    const mq = window.matchMedia("(pointer: fine)");
    setEnabled(mq.matches);
    const handler = (e: MediaQueryListEvent) => setEnabled(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [reduceMotion]);

  useEffect(() => {
    if (!enabled) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      setHovering(Boolean(t.closest("a, button, [data-cursor-hover]")));
    };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    document.documentElement.classList.add("cursor-none");
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.classList.remove("cursor-none");
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <style jsx global>{`
        html.cursor-none,
        html.cursor-none * {
          cursor: none !important;
        }
      `}</style>

      {/* trailing ring */}
      <motion.div
        aria-hidden="true"
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[99]"
      >
        <motion.div
          animate={{
            scale: hovering ? 1.7 : 1,
            opacity: hovering ? 0.9 : 0.35,
          }}
          transition={{ type: "spring", stiffness: 250, damping: 22 }}
          className="-ml-4 -mt-4 h-8 w-8 rounded-full border border-[#D97757]"
        />
      </motion.div>

      {/* instant dot */}
      <motion.div
        aria-hidden="true"
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[100]"
      >
        <motion.div
          animate={{ scale: hovering ? 2.2 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="-ml-1 -mt-1 h-2 w-2 rounded-full bg-[#D97757]"
        />
      </motion.div>
    </>
  );
}