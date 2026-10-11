"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const skills = [
  "Web Application Security",
  "Penetration Testing",
  "OSINT",
  "Reconnaissance",
  "Linux",
  "Networking",
  "Burp Suite",
  "Nmap",
  "Git & GitHub",
  "Security Research",
];

const projects = [
  {
    number: "001",
    slug: "web-application-security",
    type: "WEB SECURITY",
    title: "Web Application Security Lab",
    description:
      "A learning environment for exploring web security concepts, testing defensive controls, and documenting findings in authorized labs.",
    status: "LEARNING",
    tags: ["Web Security", "Lab", "Documentation"],
  },
  {
    number: "002",
    slug: "osint-recon-fundamentals",
    type: "RECONNAISSANCE",
    title: "Recon Research Notes",
    description:
      "A structured collection of reconnaissance concepts, tool references, and responsible research workflows.",
    status: "IN PROGRESS",
    tags: ["OSINT", "Recon", "Research"],
  },
  {
    number: "003",
    slug: "responsible-security-research",
    type: "SECURITY TOOLING",
    title: "Security Workflow Toolkit",
    description:
      "An evolving collection of scripts, checklists, and notes designed to make security learning more organized and repeatable.",
    status: "PLANNED",
    tags: ["Python", "Linux", "Automation"],
  },
];

const researchNotes = [
  {
    number: "001",
    slug: "web-application-security",
    category: "WEB SECURITY",
    title: "Introduction to Web Application Security",
    description:
      "Core concepts, common risks, testing methodology, and a structured learning path.",
    status: "DRAFT TOPIC",
  },
  {
    number: "002",
    slug: "osint-recon-fundamentals",
    category: "OSINT & RECON",
    title: "Reconnaissance and OSINT Fundamentals",
    description:
      "Research methodology, source verification, and responsible use of publicly available information.",
    status: "DRAFT TOPIC",
  },
  {
    number: "003",
    slug: "responsible-security-research",
    category: "METHODOLOGY",
    title: "Responsible Security Research",
    description:
      "Scope, authorization, evidence collection, clear reporting, and ethical boundaries.",
    status: "DRAFT TOPIC",
  },
];

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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 font-mono text-xs tracking-[0.22em] text-lime-400">
      {children}
    </p>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const matrixRainColumns = [
  { left: "4%", delay: 0, duration: 13, text: "01ã‚¢ã‚¤ã‚¦ã‚¨ã‚ª0101" },
  { left: "13%", delay: 3, duration: 17, text: "1010ã‚«ã‚­ã‚¯ã‚±ã‚³10" },
  { left: "26%", delay: 1, duration: 15, text: "010ã‚µã‚·ã‚¹ã‚»ã‚½101" },
  { left: "39%", delay: 5, duration: 18, text: "101ã‚¿ãƒãƒ„ãƒ†ãƒˆ01" },
  { left: "56%", delay: 2, duration: 14, text: "010ãƒŠãƒ‹ãƒŒãƒãƒŽ101" },
  { left: "68%", delay: 4, duration: 16, text: "101ãƒãƒ’ãƒ•ãƒ˜ãƒ›010" },
  { left: "82%", delay: 1.5, duration: 19, text: "010ãƒžãƒŸãƒ ãƒ¡ãƒ¢101" },
  { left: "94%", delay: 6, duration: 15, text: "101ãƒ¤ãƒ¦ãƒ¨0101" },
];

function MatrixRain({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
    >
      {matrixRainColumns.map((column, index) => (
        <motion.span
          key={column.left}
          className="absolute top-[-35%] font-mono text-[10px] leading-[1.8] tracking-[0.35em] text-lime-300/[0.24] sm:text-xs"
          style={{ left: column.left, writingMode: "vertical-rl", textShadow: "0 0 10px rgba(178,255,53,0.22)" }}
          initial={false}
          animate={reduceMotion ? { y: 0, opacity: 0.12 } : { y: ["-4%", "58%"], opacity: [0.08, index % 2 ? 0.35 : 0.22, 0.06] }}
          transition={reduceMotion ? { duration: 0 } : { duration: column.duration, delay: column.delay, repeat: Infinity, ease: "linear" }}
        >
          {column.text}
        </motion.span>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030806]/10 via-[#030806]/30 to-[#030806]" />
    </div>
  );
}

export default function Home() {
  const reduceMotion = useReducedMotion();

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // Honeypot: real visitors should leave this empty.
  });

  const [contactStatus, setContactStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <main
      id="home"
      className="min-h-screen overflow-x-clip bg-[#030806] text-slate-200 selection:bg-lime-300/25 selection:text-lime-50"
    >
      {/* Responsive navigation */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#030806]/90 shadow-lg shadow-black/10 backdrop-blur-2xl supports-[backdrop-filter]:bg-[#030806]/75">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6 lg:px-8"
        >
          <a href="#home" onClick={() => setMobileNavOpen(false)} className="group flex shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-lime-400/30 bg-lime-400/[0.09] font-mono text-sm font-bold text-lime-300 shadow-[0_0_24px_rgba(178,255,53,0.10)] transition duration-300 group-hover:border-lime-300/70 group-hover:bg-lime-400/15">
              R/
            </span>
            <span className="text-sm font-semibold tracking-wide text-white sm:text-base">
              RedTrace<span className="text-lime-400">.</span>
            </span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-400 lg:flex xl:gap-8">
            {[
              ["About", "#about"],
              ["Expertise", "#skills"],
              ["Projects", "#projects"],
              ["Research", "#research"],
              ["Journey", "#journey"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="relative py-2 transition-colors duration-200 hover:text-lime-300 focus-visible:outline-none focus-visible:text-lime-300"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href="#contact"
              onClick={() => setMobileNavOpen(false)}
              className="hidden rounded-lg border border-lime-400/35 px-3 py-2 text-xs text-lime-200 transition duration-300 hover:border-lime-300 hover:bg-lime-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 sm:inline-flex sm:text-sm sm:px-4"
            >
              Get in touch <span className="ml-1" aria-hidden="true">â†—</span>
            </a>
            <button
              type="button"
              aria-label={mobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileNavOpen}
              aria-controls="redtrace-mobile-navigation"
              onClick={() => setMobileNavOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-200 transition hover:border-lime-400/40 hover:text-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 lg:hidden"
            >
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                {mobileNavOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </nav>

        <motion.div
          id="redtrace-mobile-navigation"
          initial={false}
          animate={mobileNavOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
          className="overflow-hidden border-t border-white/[0.06] lg:hidden"
          aria-hidden={!mobileNavOpen}
        >
          <div className="mx-auto grid max-w-7xl gap-1 px-4 py-3 sm:px-6">
            {[
              ["About", "#about"],
              ["Expertise", "#skills"],
              ["Projects", "#projects"],
              ["Research", "#research"],
              ["Journey", "#journey"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                tabIndex={mobileNavOpen ? 0 : -1}
                onClick={() => setMobileNavOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-slate-300 transition hover:bg-lime-400/[0.07] hover:text-lime-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300"
              >
                {label}<span className="float-right text-slate-600" aria-hidden="true">â†—</span>
              </a>
            ))}
          </div>
        </motion.div>
      </header>

      {/* Hero â€” bold editorial split inspired by the reference layout */}
      <section className="redtrace-grid relative isolate overflow-hidden">
        <MatrixRain reduceMotion={Boolean(reduceMotion)} />
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-lime-400/[0.08] blur-[110px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-emerald-500/[0.07] blur-[120px]" />
        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:px-8 lg:py-24">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.75, ease: "easeOut" }} className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/[0.06] px-3 py-2 text-xs text-lime-200">
              <span className="redtrace-glow h-2 w-2 rounded-full bg-lime-300" /> Independent Security Research
            </div>
            <p className="mb-4 font-mono text-[10px] tracking-[0.18em] text-lime-400 sm:text-xs">HELLO, WORLD â€” I AM</p>
            <h1 className="max-w-3xl text-[clamp(3.4rem,8.4vw,7.2rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-white">
              THE RED<br /><span className="text-lime-300">DEVIL</span><span className="text-white">.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
              Exploring what lies beneath the surface. <span className="text-slate-500">Building skills to make the digital world safer.</span>
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              My focus is web application security, penetration testing, OSINT, and responsible security research. This portfolio documents the work, experiments, and lessons behind that journey.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a href="#projects" whileHover={reduceMotion ? undefined : { y: -3 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }} className="inline-flex items-center gap-2 rounded-xl bg-lime-300 px-5 py-3 font-semibold text-[#071008] shadow-lg shadow-lime-500/10 transition hover:bg-lime-200">Explore my work <ArrowIcon /></motion.a>
              <motion.a href="#contact" whileHover={reduceMotion ? undefined : { y: -3 }} className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-slate-200 transition hover:border-lime-300/50 hover:text-lime-200">Letâ€™s connect <ArrowIcon /></motion.a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/[0.08] pt-5 font-mono text-[10px] tracking-[0.15em] text-slate-500 sm:gap-x-7 sm:text-xs">
              <span>WEB SECURITY</span><span>OSINT & RECON</span><span>RESEARCH</span><span>LINUX</span>
            </div>
          </motion.div>
          <motion.div initial={reduceMotion ? false : { opacity: 0, x: 24, scale: 0.97 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.15, ease: "easeOut" }} className="relative mx-auto w-full max-w-[470px] lg:ml-auto">
            <div className="absolute -inset-5 rounded-[2rem] bg-lime-400/[0.07] blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.7rem] border border-lime-300/20 bg-[#07100b] p-3 shadow-2xl shadow-black/40">
              <div className="relative flex min-h-[390px] flex-col justify-between overflow-hidden rounded-[1.2rem] border border-white/[0.07] bg-[radial-gradient(ellipse_at_50%_30%,rgba(163,230,53,0.15),transparent_52%),linear-gradient(145deg,#101b13,#030806_68%)] p-6 sm:min-h-[470px] sm:p-8">
                <div className="absolute inset-0 opacity-30" aria-hidden="true" style={{ backgroundImage: "linear-gradient(rgba(190,242,100,.09) 1px,transparent 1px),linear-gradient(90deg,rgba(190,242,100,.09) 1px,transparent 1px)", backgroundSize: "30px 30px" }} />
                <div className="relative flex items-center justify-between font-mono text-[10px] tracking-[0.16em] text-lime-300/80"><span>REDTRACE / PROFILE</span><span>â— ACTIVE</span></div>
                <div className="relative mx-auto w-full max-w-[330px] sm:max-w-[360px]">
                  <div className="absolute -inset-3 rounded-[1.6rem] bg-lime-300/10 blur-2xl" />
                  <div className="relative overflow-hidden rounded-[1.35rem] border border-lime-300/30 bg-[#030806] p-1.5 shadow-[0_0_45px_rgba(190,242,100,0.08)]">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-[1rem]">
                      <Image
                        src="/images/profile.jpg"
                        alt="The Red Devil — cybersecurity learner and independent security researcher"
                        fill
                        priority
                        sizes="(max-width: 640px) 80vw, 360px"
                        className="object-cover object-[center_22%]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030806] via-transparent to-black/10" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 sm:bottom-5 sm:left-5 sm:right-5">
                        <div>
                          <p className="font-mono text-[9px] tracking-[0.2em] text-lime-300 sm:text-[10px]">THE RED DEVIL</p>
                          <p className="mt-1 text-base font-semibold tracking-tight text-white sm:text-lg">Research. Build. Secure.</p>
                        </div>
                        <span className="mb-1 shrink-0 rounded-full border border-lime-300/30 bg-[#030806]/70 px-2 py-1 font-mono text-[9px] tracking-wider text-lime-200">PROFILE</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative border-t border-white/10 pt-5">
                  <p className="font-mono text-[10px] tracking-[0.2em] text-slate-500">CURRENT MISSION</p>
                  <p className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">Research. Build. Secure.</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-slate-500"><span>Learning in public</span><span className="font-mono text-lime-300">v.2026</span></div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center font-mono text-[10px] tracking-[0.18em] text-slate-600">INDEPENDENT LEARNING Â· RESPONSIBLE SECURITY</p>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-28 sm:scroll-mt-24 border-y border-white/[0.06] bg-white/[0.015]"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 md:grid-cols-[0.7fr_1.3fr]">
          <Reveal>
            <SectionLabel>01 / About</SectionLabel>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
              Curiosity drives
              <br />
              <span className="text-slate-500">the research.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="max-w-2xl">
              <p className="text-base leading-8 text-slate-400">
                I&apos;m building my knowledge in cybersecurity through
                continuous learning, hands-on labs, and independent research.
                My interests include understanding how web applications work,
                identifying security weaknesses in authorized environments,
                and studying publicly available information responsibly.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-400">
                This portfolio will grow alongside my skills â€” a transparent
                record of projects, experiments, technical notes, and lessons
                learned.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Expertise â€” reference-inspired skill panel */}
      <section id="skills" className="scroll-mt-28 border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 md:grid-cols-[0.78fr_1.22fr] md:gap-16">
            <Reveal>
              <SectionLabel>02 / Expertise</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">What Iâ€™m<br /><span className="text-slate-500">working on.</span></h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-slate-400 sm:text-base">My toolkit is growing through study, hands-on labs, and consistent documentation. These are my current learning and research areasâ€”not claims of professional certification.</p>
              <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-lime-300/15 bg-lime-300/[0.04] px-3 py-2 font-mono text-[10px] tracking-wider text-lime-200"><span className="h-1.5 w-1.5 rounded-full bg-lime-300" /> LEARNING Â· TESTING Â· DOCUMENTING</div>
            </Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["01", "Web Application Security", "Understanding application behavior, common weaknesses, and secure design."],
                ["02", "Penetration Testing", "Practicing structured testing in authorized labs and learning to report findings."],
                ["03", "OSINT & Recon", "Mapping public information, validating sources, and organizing research."],
                ["04", "Linux & Tooling", "Building command-line confidence and repeatable security workflows."],
              ].map(([number, title, description], index) => (
                <Reveal key={number} delay={index * 0.06}>
                  <motion.article whileHover={reduceMotion ? undefined : { y: -4 }} className="group h-full rounded-2xl border border-white/[0.08] bg-[#08100b] p-5 transition-colors hover:border-lime-300/30 sm:p-6">
                    <div className="flex items-center justify-between"><span className="font-mono text-xs text-lime-300">/{number}</span><span className="text-xl text-slate-600 transition-colors group-hover:text-lime-300">â†—</span></div>
                    <h3 className="mt-7 text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
                    <div className="mt-6 h-px w-full bg-white/[0.08]"><div className="h-px w-1/3 bg-lime-300/80 transition-all duration-500 group-hover:w-2/3" /></div>
                    <p className="mt-3 font-mono text-[9px] tracking-[0.16em] text-slate-600">ACTIVE LEARNING AREA</p>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="mt-10 border-t border-white/[0.07] pt-6">
            <p className="mb-4 font-mono text-[10px] tracking-[0.18em] text-slate-500">TOOLS & TECHNOLOGIES Iâ€™M EXPLORING</p>
            <div className="flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-xs text-slate-400 transition hover:border-lime-300/30 hover:text-lime-200">{skill}</span>)}</div>
          </div>
        </div>
      </section>

      {/* Selected work â€” visual project cards */}
      <section id="projects" className="scroll-mt-28 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div><SectionLabel>03 / Selected work</SectionLabel><h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">Projects & experiments.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">A growing collection of labs, research notes, and practical security workflows.</p></div>
            <span className="font-mono text-[10px] tracking-[0.16em] text-slate-500">PORTFOLIO / 2026</span>
          </div>
        </Reveal>
        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article key={project.number} initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.1 }} whileHover={reduceMotion ? undefined : { y: -5 }} className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#08100b] transition-colors hover:border-lime-300/30">
              <div className={`relative flex h-48 items-center justify-center overflow-hidden border-b border-white/[0.07] bg-gradient-to-br ${index === 0 ? "from-lime-300/[0.13] via-[#101a11] to-[#030806]" : index === 1 ? "from-emerald-300/[0.12] via-[#0a1711] to-[#030806]" : "from-green-200/[0.10] via-[#101611] to-[#030806]"}`}>
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(190,242,100,.13) 1px,transparent 1px),linear-gradient(90deg,rgba(190,242,100,.13) 1px,transparent 1px)", backgroundSize: "24px 24px" }} />
                {index === 0 ? <div className="relative w-[78%] rounded-xl border border-lime-300/25 bg-[#061009]/90 p-4 font-mono text-[10px] shadow-2xl shadow-black/30"><p className="text-slate-500">$ security-lab --scope authorized</p><p className="mt-3 text-lime-200">[+] request review</p><p className="mt-1 text-emerald-300">[+] test Â· document Â· improve</p><div className="mt-4 h-1 w-full bg-white/10"><div className="h-1 w-2/3 bg-lime-300" /></div></div> : index === 1 ? <div className="relative grid w-40 grid-cols-3 gap-2">{Array.from({ length: 9 }).map((_, i) => <div key={i} className={`aspect-square rounded-md border ${i === 4 ? "border-lime-200/70 bg-lime-300/20 shadow-[0_0_22px_rgba(190,242,100,.14)]" : "border-lime-300/15 bg-lime-300/[0.04]"}`} />)}</div> : <div className="relative w-[76%] rounded-xl border border-lime-300/20 bg-[#071009]/90 p-4 font-mono text-xs"><p className="text-lime-200">workflow.yml</p><p className="mt-3 text-slate-400">recon:</p><p className="pl-3 text-emerald-300">- collect</p><p className="pl-3 text-emerald-300">- validate</p><p className="pl-3 text-emerald-300">- document</p></div>}
                <span className="absolute left-4 top-4 font-mono text-[10px] text-lime-200/80">PROJECT / {project.number}</span>
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3"><p className="font-mono text-[9px] tracking-[0.18em] text-lime-300">{project.type}</p><span className="rounded-full border border-white/10 px-2 py-1 font-mono text-[9px] text-slate-500">{project.status}</span></div>
                <h3 className="mt-3 text-xl font-semibold text-white transition-colors group-hover:text-lime-200">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-md bg-white/[0.05] px-2 py-1 text-[10px] text-slate-400">{tag}</span>)}</div>
                <a href={`/projects/${project.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-lime-300 transition hover:text-lime-200">View project details <ArrowIcon /></a>
              </div>
            </motion.article>
          ))}
        </div>
        <p className="mt-5 text-xs leading-6 text-slate-500">Project cards currently represent work in progress. Replace each entry with a verified repository, write-up, or completed lab when ready.</p>
      </section>

      {/* Research */}
      <section
        id="research"
        className="scroll-mt-28 sm:scroll-mt-24 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <Reveal>
          <SectionLabel>04 / Research notes</SectionLabel>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            Learning in public.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            A space for technical write-ups, lab notes, and practical lessons
            learned while exploring cybersecurity.
          </p>
        </Reveal>

        <div className="mt-7 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {researchNotes.map((note, index) => (
            <motion.article
              key={note.number}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reduceMotion ? 0 : 0.45,
                delay: reduceMotion ? 0 : index * 0.1,
              }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className="h-full rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.035] to-white/[0.01] p-5 shadow-lg shadow-black/10 transition-[border-color,background-color,box-shadow] duration-300 hover:border-lime-400/35 hover:shadow-xl hover:shadow-green-950/25 sm:p-6"
            >
              <p className="font-mono text-xs text-lime-400">
                NOTE / {note.number}
              </p>
              <p className="mt-3 font-mono text-[10px] tracking-[0.16em] text-slate-500">
                {note.category}
              </p>
              <h3 className="mt-3 font-medium leading-6 text-white">
                {note.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {note.description}
              </p>
              <span className="mt-5 inline-block rounded-md border border-white/[0.08] px-2 py-1 font-mono text-[10px] text-slate-500">
                {note.status}
              </span>
              <a href={`/research/${note.slug}`} className="mt-4 flex items-center gap-2 text-sm font-medium text-lime-300 transition hover:text-lime-200">Read note <ArrowIcon /></a>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Journey / experience timeline */}
      <section id="journey" className="scroll-mt-28 border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.78fr_1.22fr] lg:px-8 lg:py-24">
          <Reveal><SectionLabel>05 / The journey</SectionLabel><h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">Learning by<br /><span className="text-slate-500">doing.</span></h2><p className="mt-5 max-w-md text-sm leading-7 text-slate-400 sm:text-base">A work in progress. The focus is consistency: learn a concept, practice it in a safe environment, document the result, and improve the process.</p></Reveal>
          <div className="relative space-y-0 border-l border-lime-300/20 pl-6 sm:pl-8">
            {[
              ["2026 â€” PRESENT", "Independent cybersecurity learning", "Studying web application security, recon, OSINT, Linux, and testing methodology through notes and authorized practice."],
              ["ONGOING", "Research notes & practical labs", "Turning concepts into structured notes, repeatable checklists, and documented experiments."],
              ["IN PROGRESS", "RedTrace portfolio", "Building a personal space to present projects, share learning, and make security research easier to follow."],
            ].map(([date, title, description], index) => <Reveal key={date + title} delay={index * 0.08}><article className="relative border-b border-white/[0.07] py-6 first:pt-0 last:border-b-0"><span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-lime-300 bg-[#030806] shadow-[0_0_14px_rgba(190,242,100,.25)] sm:-left-[39px]" /><p className="font-mono text-[10px] tracking-[0.17em] text-lime-300">{date}</p><h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">{title}</h3><p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">{description}</p></article></Reveal>)}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-28 sm:scroll-mt-24 border-t border-white/[0.08] bg-white/[0.015]"
      >
        <div className="relative mx-auto max-w-4xl overflow-hidden px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/[0.06] blur-[100px]" />

          <Reveal>
            <SectionLabel>06 / Contact</SectionLabel>

            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              Let&apos;s connect.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
              Interested in cybersecurity, research, or building something
              meaningful? Send me a message or connect through my public
              profiles.
            </p>

            {/* Contact Form */}
            <form
              className="relative z-10 mx-auto mt-10 max-w-xl space-y-4 text-left"
              onSubmit={async (event) => {
                event.preventDefault();

                if (isSubmitting) return;

                setIsSubmitting(true);
                setContactStatus("");

                try {
                  const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(contactForm),
                  });

                  const result = await response.json();

                  if (!response.ok || !result.success) {
                    setContactStatus(
                      result.message || "Unable to submit your message."
                    );
                    return;
                  }

                  setContactStatus(
                    result.message ||
                      "Your message passed validation."
                  );

                  setContactForm({
                    name: "",
                    email: "",
                    message: "",
                    website: "",
                  });
                } catch {
                  setContactStatus(
                    "Network error. Please check your connection and try again."
                  );
                } finally {
                  setIsSubmitting(false);
                }
              }}
            >
              {/* Honeypot anti-spam field: hidden from people, available to basic bots. */}
              <div
                className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
                aria-hidden="true"
              >
                <label htmlFor="contact-website">
                  Leave this field empty
                </label>
                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={contactForm.website}
                  onChange={(event) =>
                    setContactForm({
                      ...contactForm,
                      website: event.target.value,
                    })
                  }
                />
              </div>

              <label className="block text-sm text-slate-300">
                Name
                <input
                  required
                  minLength={2}
                  maxLength={80}
                  autoComplete="name"
                  value={contactForm.name}
                  onChange={(event) =>
                    setContactForm({
                      ...contactForm,
                      name: event.target.value,
                    })
                  }
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#09130e]/90 px-4 py-3 text-base text-white outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-slate-600 hover:border-white/20 focus:border-lime-400 focus:ring-4 focus:ring-lime-400/10"
                  placeholder="Your name"
                />
              </label>

              <label className="block text-sm text-slate-300">
                Email
                <input
                  required
                  type="email"
                  maxLength={254}
                  autoComplete="email"
                  value={contactForm.email}
                  onChange={(event) =>
                    setContactForm({
                      ...contactForm,
                      email: event.target.value,
                    })
                  }
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#09130e]/90 px-4 py-3 text-base text-white outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-slate-600 hover:border-white/20 focus:border-lime-400 focus:ring-4 focus:ring-lime-400/10"
                  placeholder="you@example.com"
                />
              </label>

              <label className="block text-sm text-slate-300">
                Message
                <textarea
                  required
                  minLength={10}
                  maxLength={3000}
                  rows={5}
                  value={contactForm.message}
                  onChange={(event) =>
                    setContactForm({
                      ...contactForm,
                      message: event.target.value,
                    })
                  }
                  className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-[#09130e]/90 px-4 py-3 text-base text-white outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-slate-600 hover:border-white/20 focus:border-lime-400 focus:ring-4 focus:ring-lime-400/10"
                  placeholder="Tell me what you'd like to discuss..."
                />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-lime-300 px-5 py-3.5 font-semibold text-slate-950 shadow-lg shadow-green-950/25 transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-lime-200 hover:shadow-lime-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030806] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
              >
                {isSubmitting ? "Sending..." : "Submit message"}
              </button>

              {contactStatus && (
                <p
                  role="status"
                  aria-live="polite"
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
                >
                  {contactStatus}
                </p>
              )}
            </form>

            {/* Social Links */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <motion.a
                href="https://github.com/7H3R3dD3v1L"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduceMotion ? undefined : { y: -3 }}
                className="inline-flex items-center gap-2 rounded-lg bg-lime-400 px-5 py-3 font-medium text-slate-950 transition-colors hover:bg-lime-300"
              >
                GitHub <ArrowIcon />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/hasnainshahriar/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduceMotion ? undefined : { y: -3 }}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-slate-300 transition-[border-color,color,background-color] duration-200 hover:border-lime-400/40 hover:bg-white/[0.03] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300"
              >
                LinkedIn <ArrowIcon />
              </motion.a>
            </div>

            <p className="mt-5 text-xs text-slate-500">
              Connect with me for cybersecurity learning, research, and collaboration.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-slate-500 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
          <p>
            <span className="font-semibold text-slate-300">RedTrace</span>
            {" "}â€” Research. Build. Secure.
          </p>
          <p>Independent learning. Responsible security research.</p>
        </div>
      </footer>
      <style jsx global>{`
        .redtrace-grid {
          background-color: #030806;
          background-image:
            linear-gradient(rgba(178, 255, 53, 0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(178, 255, 53, 0.045) 1px, transparent 1px);
          background-size: 44px 44px;
        }
        .redtrace-glow {
          box-shadow: 0 0 8px rgba(178, 255, 53, 0.8), 0 0 18px rgba(178, 255, 53, 0.22);
          animation: redtrace-matrix-pulse 2.4s ease-in-out infinite;
        }
        .redtrace-cursor {
          animation: redtrace-matrix-blink 1s steps(2, start) infinite;
        }
        @keyframes redtrace-matrix-pulse {
          0%, 100% { opacity: 0.65; }
          50% { opacity: 1; }
        }
        @keyframes redtrace-matrix-blink {
          to { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .redtrace-glow, .redtrace-cursor { animation: none !important; }
        }
      `}</style>
    </main>
  );
}
