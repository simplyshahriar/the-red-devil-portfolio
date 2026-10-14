"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useScroll, useReducedMotion } from "motion/react";

type Project = {
  number: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  status: string;
  tags: string[];
};

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex w-[min(72vw,600px)] shrink-0 flex-col rounded-2xl border border-white/[0.07] bg-[#12100E] p-8 transition hover:border-[#D97757]/40 hover:bg-[#1A1714] sm:p-10">
      <div className="flex items-start justify-between">
        <span className="font-mono text-6xl font-semibold tracking-tight text-[#D97757] lg:text-7xl">
          /{project.number}
        </span>
        <span className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[#8E887B]">
          {project.status}
        </span>
      </div>

      <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.22em] text-[#E89B7B]">
        {project.category}
      </p>
      <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#F0EBE0] sm:text-4xl">
        {project.title}
      </h3>
      <p className="mt-4 max-w-xl text-base leading-8 text-[#8E887B]">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-[#8E887B]"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={`/projects/${project.slug}`}
        className="group/link mt-auto inline-flex items-center gap-2 pt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-[#E89B7B] transition hover:text-white"
      >
        View details
        <ArrowIcon />
      </a>
    </article>
  );
}

export default function HorizontalProjects({ projects }: { projects: Project[] }) {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    function update(p: number) {
      if (!trackRef.current || reduceMotion) return;
      const trackWidth = trackRef.current.scrollWidth;
      const viewport = window.innerWidth;
      const maxScroll = Math.max(0, trackWidth - viewport + 96);
      x.set(-maxScroll * p);
    }
    update(scrollYProgress.get());
    const unsub = scrollYProgress.on("change", update);
    const onResize = () => update(scrollYProgress.get());
    window.addEventListener("resize", onResize);
    return () => {
      unsub();
      window.removeEventListener("resize", onResize);
    };
  }, [scrollYProgress, x, reduceMotion]);

  // progress bar width
  const progressWidth = useMotionValue(0);
  useEffect(() => {
    const unsub = scrollYProgress.on("change", (p) => {
      progressWidth.set(p);
    });
    return () => unsub();
  }, [scrollYProgress, progressWidth]);

  return (
    <div ref={sectionRef} className="relative hidden h-[300vh] lg:block">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        {/* header */}
        <div className="mx-auto flex w-full max-w-7xl items-end justify-between gap-4 px-8 pb-10 pt-28">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#8E887B]">
              Some Selected
            </p>
            <h2 className="mt-3 text-5xl font-semibold uppercase leading-[0.95] tracking-[-0.035em] text-[#F0EBE0] lg:text-6xl">
              Projects
            </h2>
          </div>
          <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[#5A554C]">
            {projects.length} Projects — Scroll →
          </span>
        </div>

        {/* track */}
        <div className="flex flex-1 items-center">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex w-max gap-6 pl-8 pr-24"
          >
            {projects.map((p) => (
              <ProjectCard key={p.number} project={p} />
            ))}

            <div className="flex w-[min(45vw,420px)] shrink-0 items-center justify-center rounded-2xl border border-dashed border-white/[0.1] p-8">
              <p className="text-center font-mono text-xs uppercase tracking-[0.22em] text-[#5A554C]">
                More
                <br />
                Coming
                <br />
                Soon
              </p>
            </div>
          </motion.div>
        </div>

        {/* progress line */}
        <div className="mx-auto w-full max-w-7xl px-8 pb-10">
          <div className="h-px w-full bg-white/[0.06]">
            <motion.div
              style={{ scaleX: progressWidth }}
              className="h-px origin-left bg-[#D97757]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}