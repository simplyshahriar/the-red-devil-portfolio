"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

import HorizontalProjects from "./components/HorizontalProjects";
import Magnetic from "./components/Magnetic";
import ScrambleText from "./components/ScrambleText";
import SectionCounter from "./components/SectionCounter";
import CopyEmail from "./components/CopyEmail";
import GrainOverlay from "./components/GrainOverlay";
import CommandPalette from "./components/CommandPalette";
import Certifications from "./components/Certifications";
import { projects } from "./lib/data";
import profilePic from "../../public/images/profile.jpg";

/* ===================== DATA ===================== */

const skillBars = [
  { label: "Web Application Security", value: 90 },
  { label: "Penetration Testing Practice", value: 85 },
  { label: "Linux & Command Line", value: 82 },
  { label: "OSINT & Reconnaissance", value: 80 },
  { label: "Security Tooling & Automation", value: 75 },
];

const marqueeItems = [
  "WEB APPLICATION SECURITY",
  "PENETRATION TESTING",
  "OSINT",
  "RECONNAISSANCE",
  "LINUX",
  "NETWORKING",
  "BURP SUITE",
  "NMAP",
  "REVERSE ENGINEERING",
  "SECURITY RESEARCH",
];

const expertise = [
  {
    category: "Offensive",
    title: "Penetration Testing",
    description:
      "Manual testing in authorized labs — mapping attack surfaces, identifying common vulnerability classes, and writing clear, actionable findings.",
  },
  {
    category: "Engineering",
    title: "Web Application Security",
    description:
      "Understanding application architecture, authentication flows, session handling, and the security assumptions behind modern web apps.",
  },
  {
    category: "Recon",
    title: "OSINT & Reconnaissance",
    description:
      "Attack-surface mapping, source verification, and responsible use of publicly available information for research.",
  },
  {
    category: "Systems",
    title: "Linux & Networking",
    description:
      "Command-line confidence, service enumeration, and understanding how packets, ports, and protocols actually behave.",
  },
  {
    category: "Analysis",
    title: "Reverse Engineering",
    description:
      "Examining software structure, program behavior, and implementation details to understand what runs beneath the surface.",
  },
  {
    category: "Writing",
    title: "Technical Documentation",
    description:
      "Turning labs, notes, and experiments into structured write-ups that are easy to review, reproduce, and learn from.",
  },
];

const experience = [
  {
    role: "Independent Security Researcher",
    org: "Self-directed",
    period: "2026 — Present",
    type: "Ongoing",
    location: "Bangladesh · Remote",
    bullets: [
      "Building a structured learning practice around web application security, reconnaissance, and ethical testing methodology.",
      "Documenting labs, tool notes, and experiment write-ups as part of an open, ongoing research log.",
      "Practicing responsible disclosure habits: scoped testing, evidence collection, and clear reporting.",
    ],
    tags: ["Web Security", "OSINT", "Linux", "Reporting"],
  },
  {
    role: "Security Lab Practice",
    org: "Home Lab & Authorized Platforms",
    period: "2025 — Present",
    type: "Practice",
    location: "Remote",
    bullets: [
      "Working through hands-on labs covering authentication flaws, access control, and common web vulnerability classes.",
      "Using Burp Suite, Nmap, and Linux tooling to practice structured testing and evidence capture.",
      "Turning each lab into repeatable checklists and notes for future reference.",
    ],
    tags: ["Burp Suite", "Nmap", "Linux", "OWASP"],
  },
  {
    role: "Learning in Public",
    org: "The Red Devil Portfolio",
    period: "2026",
    type: "Project",
    location: "Remote",
    bullets: [
      "Designing and building this portfolio as a transparent record of projects, notes, and lessons learned.",
      "Focused on presenting security work clearly — status, scope, and reproducibility.",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

/* ===================== PRIMITIVES ===================== */

function ArrowIcon({ className = "" }: { className?: string }) {
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
      className={className}
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 40,
    restDelta: 0.001,
  });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-[#7B8FE8]"
    />
  );
}

function SectionHeading({
  kicker,
  title,
  count,
}: {
  kicker: string;
  title: string;
  count?: string;
}) {
  return (
    <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#858B99]">
          {kicker}
        </p>
        <h2 className="mt-3 text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.035em] text-[#E7E9EE] sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </div>
      {count && (
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#545A66]">
          {count}
        </span>
      )}
    </div>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SkillBar({ label, value }: { label: string; value: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-[#B5B9C4]">{label}</span>
        <span className="font-mono text-xs tabular-nums text-[#545A66]">
          {value}%
        </span>
      </div>
      <div className="mt-2.5 h-[2px] w-full overflow-hidden bg-white/[0.06]">
        <motion.div
          initial={reduceMotion ? { width: `${value}%` } : { width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: reduceMotion ? 0 : 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full bg-[#7B8FE8]"
        />
      </div>
    </div>
  );
}

/* ===================== PHOTO REVEAL ===================== */

function PhotoReveal({ reduceMotion }: { reduceMotion: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const photoScale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    [0.65, 1, 1, 0.92],
  );
  const photoRotate = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    [-6, 0, 0, 5],
  );
  const photoOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.85, 1],
    [0.25, 1, 1, 0.4],
  );
  const photoY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const ringScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.85, 1.1, 1.25],
  );

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden border-b border-white/[0.06] bg-[#0A0C10]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7B8FE8]/[0.07] blur-[140px]"
      />

      <div className="relative mx-auto grid min-h-[110vh] max-w-7xl items-center gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-8 lg:py-32">
        <motion.div
          style={{ y: reduceMotion ? 0 : textY }}
          className="relative z-10"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#858B99]">
            // Operator
          </p>
          <h2 className="mt-4 text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.035em] text-[#E7E9EE] sm:text-5xl lg:text-6xl">
            Behind
            <br />
            <span className="text-[#545A66]">the handle</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-8 text-[#858B99]">
            Somewhere between the terminal and the notebook — learning in
            public, one lab at a time. Not claiming expertise. Documenting the
            path toward it.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.04] sm:max-w-md">
            {[
              ["Handle", "7H3R3dD3v1L"],
              ["Based in", "Bangladesh"],
              ["Focus", "AppSec · Pentest"],
              ["Since", "2026"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="bg-[#0A0C10] px-4 py-4 font-mono text-[11px]"
              >
                <p className="text-[#545A66]">{k}</p>
                <p className="mt-1.5 text-[#B5B9C4]">{v}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-[480px]">
          {!reduceMotion && (
            <motion.div
              aria-hidden="true"
              style={{ rotate: ringRotate, scale: ringScale }}
              className="pointer-events-none absolute inset-[-8%] rounded-full border border-dashed border-[#7B8FE8]/25"
            />
          )}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[-3%] rounded-full border border-[#7B8FE8]/15"
          />

          <motion.div
            style={{
              scale: reduceMotion ? 1 : photoScale,
              rotate: reduceMotion ? 0 : photoRotate,
              opacity: reduceMotion ? 1 : photoOpacity,
              y: reduceMotion ? 0 : photoY,
            }}
            className="relative origin-center"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-[#7B8FE8]/[0.08] blur-3xl" />
            <div className="relative rounded-[1.6rem] border border-white/[0.08] bg-[#12151A] p-2 shadow-2xl shadow-black/50">
              <div className="overflow-hidden rounded-[1.2rem] border border-white/[0.05] bg-[#0A0C10]">
                <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#545A66]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#545A66]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#7B8FE8]/70" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.14em] text-[#545A66]">
                    reddevil@local
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-[#6BCBA4]">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#6BCBA4]" />
                    ONLINE
                  </span>
                </div>

                <div className="relative aspect-[4/5]">
                  <Image
                    src={profilePic}
                    alt="Hasnain Shahriar — cybersecurity researcher"
                    fill
                    priority
                    sizes="(max-width: 640px) 90vw, 480px"
                    placeholder="blur"
                    className="object-cover object-[center_22%]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[#7B8FE8] mix-blend-color opacity-[0.22]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A0C10]/20 via-transparent to-[#0A0C10]/70"
                  />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#98A7ED]">
                      // The Red Devil
                    </p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-white">
                      Hasnain Shahriar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ===================== MARQUEE ===================== */

function Marquee({ reduceMotion }: { reduceMotion: boolean }) {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-[#0A0C10] py-6">
      <div
        className={`flex w-max gap-10 whitespace-nowrap ${
          reduceMotion ? "" : "animate-marquee"
        }`}
      >
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-mono text-[11px] uppercase tracking-[0.3em] text-[#545A66]"
          >
            {item}
            <span className="text-[#7B8FE8]">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* ===================== PAGE ===================== */

export default function Home() {
  const reduceMotion = Boolean(useReducedMotion());

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  const [contactStatus, setContactStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroNameY = useTransform(heroProgress, [0, 1], [0, -120]);
  const heroNameOpacity = useTransform(heroProgress, [0, 0.9], [1, 0]);
  const heroNameScale = useTransform(heroProgress, [0, 1], [1, 0.92]);
  const heroGlowScale = useTransform(heroProgress, [0, 1], [1, 1.4]);

  const navigation = [
    ["About", "#about"],
    ["Expertise", "#expertise"],
    ["Projects", "#projects"],
    ["Certifications", "#certifications"],
    ["Experience", "#experience"],
  ];

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setContactStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        setContactStatus(result.message || "Unable to submit your message.");
        return;
      }
      setContactStatus(
        result.message || "Your message was submitted successfully.",
      );
      setContactForm({ name: "", email: "", message: "", website: "" });
    } catch {
      setContactStatus(
        "Network error. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main
      id="home"
      className="relative min-h-screen overflow-x-clip bg-[#0A0C10] text-[#E7E9EE] selection:bg-[#7B8FE8]/30 selection:text-white"
    >
      <GrainOverlay />
      <ScrollProgress />
      <SectionCounter />
      <CommandPalette />

      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0A0C10]/85 backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
        >
          <Magnetic strength={0.4}>
            <a
              href="#home"
              onClick={() => setMobileNavOpen(false)}
              className="flex items-center gap-2.5"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#7B8FE8] font-mono text-xs font-bold text-[#0A0C10]">
                R/
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E7E9EE]">
                Red Devil
              </span>
            </a>
          </Magnetic>

          <div className="hidden items-center gap-7 lg:flex">
            {navigation.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#858B99] transition hover:text-[#E7E9EE]"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Magnetic strength={0.3}>
              <a
                href="#contact"
                onClick={() => setMobileNavOpen(false)}
                className="hidden rounded-md bg-[#7B8FE8] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#0A0C10] transition hover:bg-[#98A7ED] sm:inline-flex"
              >
                Contact
              </a>
            </Magnetic>

            <button
              type="button"
              aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen((open) => !open)}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-base lg:hidden"
            >
              {mobileNavOpen ? "✕" : "☰"}
            </button>
          </div>
        </nav>

        {mobileNavOpen && (
          <div className="border-t border-white/[0.06] px-4 py-3 sm:px-6 lg:hidden">
            {[...navigation, ["Contact", "#contact"]].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileNavOpen(false)}
                className="flex items-center justify-between rounded-md px-3 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#B5B9C4] hover:bg-white/[0.04]"
              >
                {label}
                <span className="text-[#98A7ED]">↗</span>
              </a>
            ))}
          </div>
        )}
      </header>

      <section
        ref={heroRef}
        className="relative isolate overflow-hidden border-b border-white/[0.06]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(123,143,232,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(123,143,232,0.05) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse at 50% 30%, black 20%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 50% 30%, black 20%, transparent 70%)",
          }}
        />
        <motion.div
          aria-hidden="true"
          style={{ scale: reduceMotion ? 1 : heroGlowScale }}
          className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#7B8FE8]/[0.08] blur-[160px]"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <motion.div
            style={{
              y: reduceMotion ? 0 : heroNameY,
              opacity: reduceMotion ? 1 : heroNameOpacity,
              scale: reduceMotion ? 1 : heroNameScale,
            }}
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.9, ease: "easeOut" }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#6BCBA4]/25 bg-[#6BCBA4]/[0.06] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#A8D4C0]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6BCBA4] opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#6BCBA4]" />
              </span>
              Available for collaboration
            </div>

            <h1 className="mt-8 font-semibold uppercase leading-[0.82] tracking-[-0.055em] text-[#E7E9EE]">
              <span className="block text-[clamp(4.5rem,17vw,15rem)]">
                <ScrambleText text="HASNAIN" delay={200} />
              </span>
              <span className="block text-[clamp(4.5rem,17vw,15rem)] text-[#545A66]">
                <ScrambleText text="SHAHRIAR" delay={600} />
              </span>
            </h1>

            <div className="mx-auto mt-10 max-w-2xl">
              <p className="text-2xl font-light tracking-tight text-[#B5B9C4] sm:text-3xl">
                Breaking Beyond the Surface
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.28em] text-[#545A66]">
                A Little Bit
              </p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Magnetic strength={0.4}>
                <motion.a
                  href="#projects"
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  className="group inline-flex items-center gap-2 rounded-md bg-[#7B8FE8] px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#0A0C10] shadow-lg shadow-[#7B8FE8]/10 transition hover:bg-[#98A7ED]"
                >
                  View Work
                  <ArrowIcon className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>
              </Magnetic>

              <Magnetic strength={0.4}>
                <motion.a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-md border border-white/12 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#B5B9C4] transition hover:border-[#7B8FE8]/50 hover:text-[#E7E9EE]"
                >
                  Get in Touch
                  <ArrowIcon className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>
              </Magnetic>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.24em] text-[#545A66]"
        >
          <span className="flex flex-col items-center gap-2">
            Scroll
            <motion.span
              animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="block h-6 w-px bg-[#7B8FE8]/60"
            />
          </span>
        </motion.div>
      </section>

      <PhotoReveal reduceMotion={reduceMotion} />

      <Marquee reduceMotion={reduceMotion} />

      <section
        id="about"
        className="scroll-mt-20 border-b border-white/[0.06]"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal>
              <SectionHeading kicker="A Little Bit" title="About Me" />
              <div className="space-y-5 text-base leading-8 text-[#858B99]">
                <p>
                  I&apos;m{" "}
                  <span className="text-[#E7E9EE]">Hasnain Shahriar</span>, an
                  aspiring cybersecurity professional focused on penetration
                  testing, web application security, and reverse engineering.
                  My interests include vulnerability analysis, software
                  behavior analysis, and understanding how the systems we
                  trust actually work.
                </p>
                <p>
                  I develop my skills through independent research, hands-on
                  security labs, and open-source tools. My approach emphasizes
                  analytical thinking, continuous learning, and responsible
                  security practices.
                </p>
                <p className="text-[#B5B9C4]">
                  My goal is to build systems — and an understanding of
                  systems — that are fast, reliable, and hard to break.
                </p>
              </div>

              <div className="mt-10 space-y-6">
                {skillBars.map((skill, i) => (
                  <Reveal key={skill.label} delay={i * 0.06}>
                    <SkillBar label={skill.label} value={skill.value} />
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-[#7B8FE8]/[0.06] blur-3xl" />
                <div className="relative flex h-full items-center rounded-2xl border border-white/[0.07] bg-[#12151A] p-8 sm:p-10">
                  <blockquote className="text-xl leading-9 text-[#B5B9C4] sm:text-2xl sm:leading-[2.6rem]">
                    <span className="mr-2 font-mono text-3xl text-[#7B8FE8]">
                      &ldquo;
                    </span>
                    Learn a concept. Practice it in a safe environment.
                    Document the result. Improve the process. Repeat.
                    <span className="ml-2 font-mono text-3xl text-[#7B8FE8]">
                      &rdquo;
                    </span>
                    <footer className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-[#545A66]">
                      — My approach to security
                    </footer>
                  </blockquote>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="expertise"
        className="scroll-mt-20 border-b border-white/[0.06] bg-[#0A0C10]"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading
              kicker="My Core"
              title="Expertise"
              count={`${expertise.length} Areas`}
            />
            <p className="-mt-6 mb-12 max-w-2xl text-base leading-7 text-[#858B99]">
              I combine security thinking with a builder&apos;s mindset —
              understanding how systems work, how they break, and how to make
              them resilient.
            </p>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.05] sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion ? 0 : index * 0.05,
                }}
                className="group relative flex flex-col bg-[#0A0C10] p-6 transition hover:bg-[#12151A] sm:p-7 lg:p-8"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#7B8FE8]">
                  {item.category}
                </span>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-[#E7E9EE] transition group-hover:text-white sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#858B99]">
                  {item.description}
                </p>
                <span className="mt-6 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-[#545A66] transition group-hover:border-[#7B8FE8]/50 group-hover:text-[#98A7ED]">
                  <ArrowIcon className="h-3.5 w-3.5" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="scroll-mt-20 border-b border-white/[0.06]"
      >
        <HorizontalProjects projects={projects} />

        <div className="lg:hidden">
          <div className="px-4 py-16 sm:px-6 sm:py-20">
            <Reveal>
              <SectionHeading
                kicker="Some Selected"
                title="Projects"
                count={`${projects.length} Projects`}
              />
            </Reveal>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <Reveal key={project.number} delay={index * 0.06}>
                  <article className="rounded-2xl border border-white/[0.07] bg-[#12151A] p-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-3xl font-semibold text-[#7B8FE8]">
                        /{project.number}
                      </span>
                      <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-[#858B99]">
                        {project.status}
                      </span>
                    </div>
                    <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-[#98A7ED]">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-[#E7E9EE]">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#858B99]">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-[#858B99]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`/projects/${project.slug}`}
                      className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#98A7ED]"
                    >
                      View details <ArrowIcon />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Certifications />

      <section
        id="experience"
        className="scroll-mt-20 border-b border-white/[0.06] bg-[#0A0C10]"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading kicker="Career Path" title="Experience" />
            <p className="-mt-6 mb-12 max-w-2xl text-base leading-7 text-[#858B99]">
              A record of learning, labs, and building — focused on turning
              theory into repeatable practice.
            </p>
          </Reveal>

          <div className="space-y-5">
            {experience.map((item, index) => (
              <Reveal key={item.role} delay={index * 0.06}>
                <article className="rounded-2xl border border-white/[0.07] bg-[#12151A] p-6 transition hover:border-[#7B8FE8]/35 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-[#E7E9EE] sm:text-2xl">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm text-[#98A7ED]">{item.org}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#858B99]">
                        {item.period}
                      </p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#545A66]">
                        {item.type} · {item.location}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-sm leading-7 text-[#858B99]"
                      >
                        <span
                          className="mt-3 h-1 w-1 shrink-0 rounded-full bg-[#7B8FE8]"
                          aria-hidden="true"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/[0.06] pt-5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-[#858B99]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal>
              <SectionHeading kicker="Say Hello" title="Contact" />
              <p className="-mt-6 max-w-md text-base leading-7 text-[#858B99]">
                Interested in cybersecurity, research, or building something
                meaningful? Send a message or reach out through any of the
                profiles below.
              </p>

              <div className="mt-10 space-y-2">
                {[
                  {
                    label: "GitHub",
                    handle: "@simplyshahriar",
                    href: "https://github.com/simplyshahriar",
                  },
                  {
                    label: "LinkedIn",
                    handle: "in/hasnainshahriar",
                    href: "https://www.linkedin.com/in/hasnainshahriar/",
                  },
                  {
                    label: "Instagram",
                    handle: "@simplyshahriar",
                    href: "https://www.instagram.com/simplyshahriar/",
                  },
                  {
                    label: "Facebook",
                    handle: "/simplyshahriar",
                    href: "https://www.facebook.com/simplyshahriar",
                  },
                ].map((link) => (
                  <Magnetic
                    key={link.label}
                    strength={0.25}
                    className="block w-full"
                  >
                    <motion.a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-white/[0.07] bg-[#12151A] px-4 py-3.5 transition hover:border-[#7B8FE8]/40 hover:bg-[#1A1E24]"
                    >
                      <span className="flex items-center gap-4">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#545A66]">
                          {link.label}
                        </span>
                        <span className="text-sm text-[#B5B9C4] transition group-hover:text-white">
                          {link.handle}
                        </span>
                      </span>
                      <ArrowIcon className="text-[#545A66] transition group-hover:text-[#98A7ED]" />
                    </motion.a>
                  </Magnetic>
                ))}

                <div className="relative">
                  <CopyEmail
                    email="hasnainshahriar2007@gmail.com"
                    className="w-full"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-2xl border border-white/[0.07] bg-[#12151A] p-6 sm:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#545A66]">
                    // Send a message
                  </p>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase text-[#6BCBA4]">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#6BCBA4]" />
                    Secure
                  </span>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div
                    className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
                    aria-hidden="true"
                  >
                    <label htmlFor="contact-website">Leave empty</label>
                    <input
                      id="contact-website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={contactForm.website}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          website: e.target.value,
                        })
                      }
                    />
                  </div>

                  <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#858B99]">
                    Name
                    <input
                      required
                      minLength={2}
                      maxLength={80}
                      autoComplete="name"
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          name: e.target.value,
                        })
                      }
                      className="mt-2 w-full rounded-xl border border-white/[0.07] bg-[#0A0C10] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#545A66] focus:border-[#7B8FE8] focus:ring-4 focus:ring-[#7B8FE8]/10"
                      placeholder="Your name"
                    />
                  </label>

                  <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#858B99]">
                    Email
                    <input
                      required
                      type="email"
                      maxLength={254}
                      autoComplete="email"
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          email: e.target.value,
                        })
                      }
                      className="mt-2 w-full rounded-xl border border-white/[0.07] bg-[#0A0C10] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#545A66] focus:border-[#7B8FE8] focus:ring-4 focus:ring-[#7B8FE8]/10"
                      placeholder="you@example.com"
                    />
                  </label>

                  <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#858B99]">
                    Message
                    <textarea
                      required
                      minLength={10}
                      maxLength={3000}
                      rows={5}
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          message: e.target.value,
                        })
                      }
                      className="mt-2 w-full resize-y rounded-xl border border-white/[0.07] bg-[#0A0C10] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#545A66] focus:border-[#7B8FE8] focus:ring-4 focus:ring-[#7B8FE8]/10"
                      placeholder="Tell me what you'd like to discuss..."
                    />
                  </label>

                  <Magnetic strength={0.15} className="block w-full">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-xl bg-[#7B8FE8] px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#0A0C10] shadow-lg shadow-[#7B8FE8]/10 transition hover:bg-[#98A7ED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#98A7ED] focus-visible:ring-offset-2 focus-visible:ring-offset-[#12151A] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </Magnetic>

                  {contactStatus && (
                    <p
                      role="status"
                      aria-live="polite"
                      className="rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3 text-sm text-[#B5B9C4]"
                    >
                      {contactStatus}
                    </p>
                  )}
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="flex items-center gap-3 text-xs text-[#545A66]">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#7B8FE8] font-mono text-[10px] font-bold text-[#0A0C10]">
              R/
            </span>
            <span className="font-mono uppercase tracking-[0.18em] text-[#B5B9C4]">
              The Red Devil
            </span>
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#545A66]">
            Independent Learning · Responsible Security Research
          </p>
        </div>
      </footer>
    </main>
  );
}