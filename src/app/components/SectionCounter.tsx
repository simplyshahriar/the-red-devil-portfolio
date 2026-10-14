"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "home", label: "Intro" },
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function SectionCounter() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach(({ id }, i) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(i);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      aria-label="Section progress"
      className="pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ol className="flex flex-col items-end gap-3">
        {SECTIONS.map((section, i) => (
          <li key={section.id} className="flex items-center gap-3">
            <span
              className={`font-mono text-[10px] uppercase tracking-[0.2em] transition-opacity duration-300 ${
                active === i
                  ? "text-[#7B8FE8] opacity-100"
                  : "text-[#545A66] opacity-0"
              }`}
            >
              {section.label}
            </span>
            <span
              className={`h-px transition-all duration-500 ${
                active === i ? "w-8 bg-[#7B8FE8]" : "w-3 bg-white/20"
              }`}
            />
          </li>
        ))}
      </ol>
      <p className="mt-4 text-right font-mono text-[10px] tracking-[0.22em] text-[#545A66]">
        <span className="text-[#7B8FE8]">
          {String(active + 1).padStart(2, "0")}
        </span>
        <span className="mx-1">/</span>
        {String(SECTIONS.length).padStart(2, "0")}
      </p>
    </nav>
  );
}