"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

const CHARS = "!<>-_\\/[]{}—=+*^?#@$%&";

export default function ScrambleText({
  text,
  delay = 0,
  speed = 42,
  className = "",
}: {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? text : "");

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(text);
      return;
    }
    let frame = 0;
    const totalFrames = text.length + 26;
    let intervalId: ReturnType<typeof setInterval>;

    const start = () => {
      intervalId = setInterval(() => {
        frame++;
        const next = text
          .split("")
          .map((c, i) => {
            const lockAt = Math.floor((i / text.length) * 26) + 6;
            if (frame >= lockAt) return c;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
        setDisplay(next);
        if (frame >= totalFrames) clearInterval(intervalId);
      }, speed);
    };

    const t = setTimeout(start, delay);
    return () => {
      clearTimeout(t);
      clearInterval(intervalId);
    };
  }, [text, delay, speed, reduceMotion]);

  return (
    <span className={className} aria-label={text}>
      {display || "\u00A0".repeat(text.length)}
    </span>
  );
}