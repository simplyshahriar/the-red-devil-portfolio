"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const C = {
  bg: "#111315",
  panel: "#191C1F",
  panelLight: "#202428",
  text: "#F0EFEA",
  muted: "#A1A3A5",
  red: "#B83A46",
  redLight: "#E45B66",
  border: "rgba(240,239,234,0.11)",
};

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
    slug: "web-application-security-lab",
    category: "WEB SECURITY",
    title: "Web Application Security Lab",
    description:
      "A learning environment for exploring web security concepts, testing defensive controls, and documenting findings in authorized labs.",
    status: "LEARNING",
    tags: ["Web Security", "Lab", "Documentation"],
  },
  {
    number: "002",
    slug: "recon-research-notes",
    category: "RECONNAISSANCE",
    title: "Recon Research Notes",
    description:
      "A structured collection of reconnaissance concepts, tool references, and responsible research workflows.",
    status: "IN PROGRESS",
    tags: ["OSINT", "Recon", "Research"],
  },
  {
    number: "003",
    slug: "security-workflow-toolkit",
    category: "SECURITY TOOLING",
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
  },
  {
    number: "002",
    slug: "osint-recon-fundamentals",
    category: "OSINT & RECON",
    title: "Reconnaissance and OSINT Fundamentals",
    description:
      "Research methodology, source verification, and responsible use of publicly available information.",
  },
  {
    number: "003",
    slug: "responsible-security-research",
    category: "METHODOLOGY",
    title: "Responsible Security Research",
    description:
      "Scope, authorization, evidence collection, clear reporting, and ethical boundaries.",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 font-mono text-xs tracking-[0.2em] text-[#E45B66]">
      {children}
    </p>
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

export default function Home() {
  const reduceMotion = useReducedMotion();

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  const [contactStatus, setContactStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigation = [
    ["About", "#about"],
    ["Expertise", "#skills"],
    ["Projects", "#projects"],
    ["Research", "#research"],
    ["Journey", "#journey"],
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
        setContactStatus(
          result.message || "Unable to submit your message.",
        );
        return;
      }

      setContactStatus(
        result.message || "Your message was submitted successfully.",
      );

      setContactForm({
        name: "",
        email: "",
        message: "",
        website: "",
      });
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
      className="min-h-screen overflow-x-clip bg-[#111315] text-[#F0EFEA] selection:bg-[#B83A46]/40 selection:text-white"
    >
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#111315]/90 backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
        >
          <a
            href="#home"
            onClick={() => setMobileNavOpen(false)}
            className="flex items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B83A46] font-mono text-sm font-bold text-white">
              R/
            </span>
            <span className="text-base font-semibold tracking-tight">
              Hasnain Shahriar<span className="text-[#E45B66]">.</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navigation.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-[#A1A3A5] transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              onClick={() => setMobileNavOpen(false)}
              className="hidden rounded-lg bg-[#B83A46] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#D14855] sm:inline-flex"
            >
              Get in touch <span className="ml-2">↗</span>
            </a>

            <button
              type="button"
              aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-xl lg:hidden"
            >
              {mobileNavOpen ? "×" : "☰"}
            </button>
          </div>
        </nav>

        {mobileNavOpen && (
          <div className="border-t border-white/10 px-4 py-3 lg:hidden">
            {[...navigation, ["Contact", "#contact"]].map(
              ([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileNavOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm text-[#D0D0CD] hover:bg-white/5 hover:text-white"
                >
                  {label}
                  <span className="float-right text-[#E45B66]">↗</span>
                </a>
              ),
            )}
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-white/[0.07]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#B83A46]/10 blur-[130px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#B83A46]/60 to-transparent"
        />

        <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.7 }}
            className="relative z-10"
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#B83A46]/40 bg-[#B83A46]/10 px-3 py-2 text-xs text-[#F2A0A6]">
              <span className="h-2 w-2 rounded-full bg-[#E45B66]" />
              Independent Security Research
            </div>

            <p className="mb-5 font-mono text-xs tracking-[0.18em] text-[#E45B66]">
              HELLO, WORLD — I AM
            </p>

            <h1 className="text-[clamp(3.8rem,9vw,7.6rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
              THE RED
              <br />
              <span className="text-[#E45B66]">DEVIL</span>
              <span className="text-[#F0EFEA]">.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#D0D0CD] sm:text-xl">
              Exploring what lies beneath the surface.
              <span className="text-[#85888B]">
                {" "}
                Building skills to make the digital world safer.
              </span>
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#A1A3A5] sm:text-base">
              My focus is web application security, penetration testing,
              OSINT, and responsible security research. This portfolio
              documents the work, experiments, and lessons behind that
              journey.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a
                href="#projects"
                whileHover={reduceMotion ? undefined : { y: -3 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-xl bg-[#B83A46] px-5 py-3.5 font-medium text-white transition hover:bg-[#D14855]"
              >
                Explore my work <ArrowIcon />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={reduceMotion ? undefined : { y: -3 }}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3.5 text-[#F0EFEA] transition hover:border-[#B83A46] hover:text-[#F2A0A6]"
              >
                Let&apos;s connect <ArrowIcon />
              </motion.a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-5 font-mono text-[10px] tracking-[0.15em] text-[#85888B] sm:text-xs">
              <span>WEB SECURITY</span>
              <span>OSINT & RECON</span>
              <span>RESEARCH</span>
              <span>LINUX</span>
            </div>
          </motion.div>

          {/* Profile panel */}
          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, x: 24, scale: 0.97 }
            }
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 0.75,
              delay: reduceMotion ? 0 : 0.12,
            }}
            className="relative mx-auto w-full max-w-[440px] lg:ml-auto"
          >
            <div className="rounded-[1.6rem] border border-white/10 bg-[#191C1F] p-3 shadow-2xl shadow-black/30">
              <div className="rounded-[1.2rem] border border-white/[0.07] bg-[#141618] p-5 sm:p-7">
                <div className="mb-5 flex items-center justify-between font-mono text-[10px] tracking-[0.15em] text-[#A1A3A5]">
                  <span>HASNAIN SHAHRIAR / PROFILE</span>
                  <span className="text-[#E45B66]">● ACTIVE</span>
                </div>

                <div className="relative overflow-hidden rounded-xl border border-[#B83A46]/40 bg-[#111315]">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src="/images/profile.jpg"
                      alt="The Red Devil — cybersecurity learner and independent security researcher"
                      fill
                      priority
                      sizes="(max-width: 640px) 85vw, 400px"
                      className="object-cover object-[center_22%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-transparent to-black/10" />

                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="font-mono text-[10px] tracking-[0.2em] text-[#F2A0A6]">
                        THE RED DEVIL
                      </p>
                      <p className="mt-2 text-xl font-semibold">
                        Research. Build. Secure.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="font-mono text-[10px] tracking-[0.18em] text-[#85888B]">
                    CURRENT MISSION
                  </p>
                  <p className="mt-2 text-2xl font-semibold tracking-tight">
                    Understand. Test. Improve.
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-[#85888B]">
                    <span>Learning in public</span>
                    <span className="font-mono text-[#E45B66]">v.2026</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 border-b border-white/[0.07]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-[0.7fr_1.3fr] lg:px-8 lg:py-24">
          <Reveal>
            <SectionLabel>01 / ABOUT</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Curiosity drives
              <br />
              <span className="text-[#85888B]">the research.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="max-w-2xl">
              <h3 className="text-xl font-semibold tracking-tight text-[#F0EFEA]">
                Hasnain Shahriar
              </h3>
              <p className="mt-2 text-sm font-medium leading-7 text-[#E45B66]">
                Cybersecurity Researcher · Penetration Testing · Web Application Security · Reverse Engineering
              </p>
              <p className="mt-4 text-base leading-8 text-[#A1A3A5]">
                I am an aspiring cybersecurity professional focused on penetration testing, web application security, and reverse engineering. My interests include vulnerability analysis, software behavior analysis, application security testing, and understanding the underlying mechanisms of digital systems.
              </p>
              <p className="mt-4 text-base leading-8 text-[#A1A3A5]">
                I actively develop my technical expertise through independent research, hands-on security labs, and open-source tools. My approach emphasizes analytical thinking, continuous learning, and responsible security practices.
              </p>
              <h4 className="mt-6 font-semibold text-[#F0EFEA]">Areas of Focus</h4>
              <ul className="mt-3 space-y-3 text-sm leading-7 text-[#A1A3A5]">
                <li><strong className="text-[#D0D0CD]">Penetration Testing:</strong> Identifying and assessing security vulnerabilities in authorized environments.</li>
                <li><strong className="text-[#D0D0CD]">Web Application Security:</strong> Analyzing application architectures, authentication mechanisms, and common security flaws.</li>
                <li><strong className="text-[#D0D0CD]">Reverse Engineering:</strong> Examining software structure, program behavior, and implementation details.</li>
                <li><strong className="text-[#D0D0CD]">Security Research:</strong> Exploring security tools, vulnerability analysis, and defensive improvements.</li>
              </ul>
              <h4 className="mt-6 font-semibold text-[#F0EFEA]">Professional Objective</h4>
              <p className="mt-3 text-base leading-8 text-[#A1A3A5]">
                To build advanced expertise in cybersecurity through practical research, continuous skill development, and ethical security testing, contributing to the development of more secure and resilient digital systems.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Expertise */}
      <section
        id="skills"
        className="scroll-mt-24 border-b border-white/[0.07] bg-[#191C1F]/50"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal>
            <SectionLabel>02 / EXPERTISE</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Skills in progress.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#A1A3A5] sm:text-base">
              The core areas and tools I&apos;m exploring as I develop a
              stronger foundation in cybersecurity.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <Reveal key={skill} delay={index * 0.035}>
                <div className="group flex min-h-[78px] items-center gap-4 rounded-xl border border-white/[0.08] bg-[#191C1F] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#B83A46]/50 hover:bg-[#202428]">
                  <span className="font-mono text-xs text-[#E45B66]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-[#D0D0CD] transition group-hover:text-white">
                    {skill}
                  </span>
                  <span className="ml-auto text-[#B83A46]">↗</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-24 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <SectionLabel>03 / SELECTED WORK</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Projects & experiments.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#A1A3A5] sm:text-base">
                A growing collection of labs, research notes, and practical
                security workflows.
              </p>
            </div>
            <span className="font-mono text-[10px] tracking-[0.15em] text-[#85888B]">
              PORTFOLIO / 2026
            </span>
          </div>
        </Reveal>

        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: reduceMotion ? 0 : 0.45,
                delay: reduceMotion ? 0 : index * 0.08,
              }}
              whileHover={reduceMotion ? undefined : { y: -5 }}
              className="group overflow-hidden rounded-2xl border border-white/[0.09] bg-[#191C1F] transition-colors hover:border-[#B83A46]/50"
            >
              <div className="relative flex h-48 items-center justify-center overflow-hidden border-b border-white/[0.08] bg-[#151719]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(184,58,70,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(184,58,70,.12) 1px,transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />

                {index === 0 ? (
                  <div className="relative w-[78%] rounded-xl border border-[#B83A46]/35 bg-[#111315] p-4 font-mono text-[10px]">
                    <p className="text-[#85888B]">
                      $ security-lab --scope authorized
                    </p>
                    <p className="mt-3 text-[#E45B66]">
                      [+] request review
                    </p>
                    <p className="mt-1 text-[#D0D0CD]">
                      [+] test / document / improve
                    </p>
                    <div className="mt-4 h-1 w-full bg-white/10">
                      <div className="h-1 w-2/3 bg-[#B83A46]" />
                    </div>
                  </div>
                ) : index === 1 ? (
                  <div className="relative grid w-40 grid-cols-3 gap-2">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div
                        key={i}
                        className={`aspect-square rounded-md border ${
                          i === 4
                            ? "border-[#E45B66]/70 bg-[#B83A46]/30"
                            : "border-[#B83A46]/20 bg-[#B83A46]/[0.05]"
                        }`}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="relative w-[76%] rounded-xl border border-[#B83A46]/30 bg-[#111315] p-4 font-mono text-xs">
                    <p className="text-[#E45B66]">workflow.yml</p>
                    <p className="mt-3 text-[#A1A3A5]">recon:</p>
                    <p className="pl-3 text-[#D0D0CD]">- collect</p>
                    <p className="pl-3 text-[#D0D0CD]">- validate</p>
                    <p className="pl-3 text-[#D0D0CD]">- document</p>
                  </div>
                )}

                <span className="absolute left-4 top-4 font-mono text-[10px] text-[#F2A0A6]">
                  PROJECT / {project.number}
                </span>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-[9px] tracking-[0.16em] text-[#E45B66]">
                    {project.category}
                  </p>
                  <span className="rounded-full border border-white/10 px-2 py-1 font-mono text-[9px] text-[#A1A3A5]">
                    {project.status}
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-semibold text-[#F0EFEA] transition-colors group-hover:text-[#F2A0A6]">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#A1A3A5]">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/[0.05] px-2 py-1 text-[10px] text-[#A1A3A5]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`/projects/${project.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#E45B66] transition hover:text-white"
                >
                  View project details <ArrowIcon />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-5 text-xs leading-6 text-[#85888B]">
          Project cards represent work in progress. Replace each entry with a
          verified repository, write-up, or completed lab when ready.
        </p>
      </section>

      {/* Research */}
      <section
        id="research"
        className="scroll-mt-24 border-y border-white/[0.07] bg-[#191C1F]/50"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal>
            <SectionLabel>04 / RESEARCH NOTES</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Learning in public.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-[#A1A3A5]">
              A space for technical write-ups, lab notes, and practical lessons
              learned while exploring cybersecurity.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {researchNotes.map((note, index) => (
              <motion.article
                key={note.number}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion ? 0 : index * 0.08,
                }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="rounded-2xl border border-white/[0.08] bg-[#191C1F] p-5 transition hover:border-[#B83A46]/50 sm:p-6"
              >
                <p className="font-mono text-xs text-[#E45B66]">
                  NOTE / {note.number}
                </p>
                <p className="mt-4 font-mono text-[10px] tracking-[0.15em] text-[#85888B]">
                  {note.category}
                </p>
                <h3 className="mt-3 font-semibold leading-6 text-[#F0EFEA]">
                  {note.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#A1A3A5]">
                  {note.description}
                </p>
                <a
                  href={`/research/${note.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#E45B66] transition hover:text-white"
                >
                  Read note <ArrowIcon />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section
        id="journey"
        className="scroll-mt-24 border-b border-white/[0.07]"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.78fr_1.22fr] lg:px-8 lg:py-24">
          <Reveal>
            <SectionLabel>05 / THE JOURNEY</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Learning by
              <br />
              <span className="text-[#85888B]">doing.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#A1A3A5] sm:text-base">
              A work in progress. The focus is consistency: learn a concept,
              practice it in a safe environment, document the result, and
              improve the process.
            </p>
          </Reveal>

          <div className="relative border-l border-[#B83A46]/40 pl-6 sm:pl-8">
            {[
              {
                date: "2026 — PRESENT",
                title: "Independent cybersecurity learning",
                description:
                  "Studying web application security, recon, OSINT, Linux, and testing methodology through notes and authorized practice.",
              },
              {
                date: "ONGOING",
                title: "Research notes & practical labs",
                description:
                  "Turning concepts into structured notes, repeatable checklists, and documented experiments.",
              },
              {
                date: "IN PROGRESS",
                title: "The Red Devil portfolio",
                description:
                  "Building a personal space to present projects, share learning, and make security research easier to follow.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="relative border-b border-white/[0.08] py-6 first:pt-0 last:border-b-0">
                  <span className="absolute -left-[31px] top-7 h-3 w-3 rounded-full border-2 border-[#E45B66] bg-[#111315] sm:-left-[39px]" />
                  <p className="font-mono text-[10px] tracking-[0.16em] text-[#E45B66]">
                    {item.date}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#A1A3A5]">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-24 border-b border-white/[0.07] bg-[#191C1F]/50"
      >
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal>
            <div className="text-center">
              <SectionLabel>06 / CONTACT</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Let&apos;s connect.
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-7 text-[#A1A3A5]">
                Interested in cybersecurity, research, or building something
                meaningful? Send me a message or connect through my public
                profiles.
              </p>
            </div>

            <form
              className="mx-auto mt-10 max-w-xl space-y-4"
              onSubmit={handleContactSubmit}
            >
              {/* Honeypot field — keep it empty */}
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
                  onChange={(event) =>
                    setContactForm({
                      ...contactForm,
                      website: event.target.value,
                    })
                  }
                />
              </div>

              <label className="block text-sm text-[#D0D0CD]">
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
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#111315] px-4 py-3 text-base text-white outline-none transition focus:border-[#B83A46] focus:ring-4 focus:ring-[#B83A46]/10"
                  placeholder="Your name"
                />
              </label>

              <label className="block text-sm text-[#D0D0CD]">
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
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#111315] px-4 py-3 text-base text-white outline-none transition focus:border-[#B83A46] focus:ring-4 focus:ring-[#B83A46]/10"
                  placeholder="you@example.com"
                />
              </label>

              <label className="block text-sm text-[#D0D0CD]">
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
                  className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-[#111315] px-4 py-3 text-base text-white outline-none transition focus:border-[#B83A46] focus:ring-4 focus:ring-[#B83A46]/10"
                  placeholder="Tell me what you'd like to discuss..."
                />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-[#B83A46] px-5 py-3.5 font-semibold text-white transition hover:bg-[#D14855] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E45B66] focus-visible:ring-offset-2 focus-visible:ring-offset-[#191C1F] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Submit message"}
              </button>

              {contactStatus && (
                <p
                  role="status"
                  aria-live="polite"
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[#D0D0CD]"
                >
                  {contactStatus}
                </p>
              )}
            </form>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <motion.a
                href="https://github.com/simplyshahriar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduceMotion ? undefined : { y: -3 }}
                className="inline-flex items-center gap-2 rounded-xl bg-[#B83A46] px-5 py-3 font-medium text-white transition hover:bg-[#D14855]"
              >
                GitHub <ArrowIcon />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/simplyshahriar/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduceMotion ? undefined : { y: -3 }}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-[#D0D0CD] transition hover:border-[#B83A46]/60 hover:text-white"
              >
                Instagram <ArrowIcon />
              </motion.a>

              <motion.a
                href="https://www.facebook.com/simplyshahriar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduceMotion ? undefined : { y: -3 }}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-[#D0D0CD] transition hover:border-[#B83A46]/60 hover:text-white"
              >
                Facebook <ArrowIcon />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/hasnainshahriar/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduceMotion ? undefined : { y: -3 }}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-[#D0D0CD] transition hover:border-[#B83A46]/60 hover:text-white"
              >
                LinkedIn <ArrowIcon />
              </motion.a>

              <motion.a
                href="mailto:hasnainshahriar2007@gmail.com"
                whileHover={reduceMotion ? undefined : { y: -3 }}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-[#D0D0CD] transition hover:border-[#B83A46]/60 hover:text-white"
              >
                Email <ArrowIcon />
              </motion.a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-[#85888B] sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            <span className="font-semibold text-[#F0EFEA]">The Red Devil</span>
            {" "}— Research. Build. Secure.
          </p>
          <p>Independent learning. Responsible security research.</p>
        </div>
      </footer>
    </main>
  );
}
