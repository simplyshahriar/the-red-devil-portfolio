"use client";

import { useState } from "react";
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
    type: "WEB SECURITY",
    title: "Web Application Security Lab",
    description:
      "A learning environment for exploring web security concepts, testing defensive controls, and documenting findings in authorized labs.",
    status: "LEARNING",
    tags: ["Web Security", "Lab", "Documentation"],
  },
  {
    number: "002",
    type: "RECONNAISSANCE",
    title: "Recon Research Notes",
    description:
      "A structured collection of reconnaissance concepts, tool references, and responsible research workflows.",
    status: "IN PROGRESS",
    tags: ["OSINT", "Recon", "Research"],
  },
  {
    number: "003",
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
    category: "WEB SECURITY",
    title: "Introduction to Web Application Security",
    description:
      "Core concepts, common risks, testing methodology, and a structured learning path.",
    status: "DRAFT TOPIC",
  },
  {
    number: "002",
    category: "OSINT & RECON",
    title: "Reconnaissance and OSINT Fundamentals",
    description:
      "Research methodology, source verification, and responsible use of publicly available information.",
    status: "DRAFT TOPIC",
  },
  {
    number: "003",
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
    <p className="mb-5 font-mono text-xs tracking-[0.22em] text-cyan-400">
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

export default function Home() {
  const reduceMotion = useReducedMotion();

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [contactStatus, setContactStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <main
      id="home"
      className="min-h-screen overflow-hidden bg-[#080d17] text-slate-200"
    >
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#080d17]/85 backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
        >
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 font-mono text-sm font-bold text-cyan-300">
              R/
            </span>
            <span className="font-semibold tracking-wide text-white">
              RedTrace<span className="text-cyan-400">.</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-slate-400 lg:flex">
            {[
              ["About", "#about"],
              ["Expertise", "#skills"],
              ["Projects", "#projects"],
              ["Research", "#research"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="transition-colors duration-200 hover:text-cyan-300"
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-lg border border-cyan-400/40 px-4 py-2 text-sm text-cyan-300 transition duration-300 hover:border-cyan-300 hover:bg-cyan-400/10"
          >
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="redtrace-grid relative">
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/[0.09] blur-[100px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-blue-500/[0.08] blur-[110px]" />

        <div className="relative mx-auto grid min-h-[610px] max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-32">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.75,
              ease: "easeOut",
            }}
            className="relative z-10"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-2 text-xs text-emerald-300">
              <span className="redtrace-glow h-2 w-2 rounded-full bg-emerald-400" />
              Independent Research & Development
            </div>

            <p className="mb-5 font-mono text-xs tracking-[0.15em] text-cyan-400 sm:text-sm">
              HELLO, WORLD. I&apos;M A CYBERSECURITY ENTHUSIAST.
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Exploring the web.
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Securing
              </span>{" "}
              what matters.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              I explore web application security, penetration testing, and
              open-source intelligence. This is where I document my research,
              build practical tools, and share what I learn.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={reduceMotion ? undefined : { y: -3 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-medium text-slate-950 shadow-lg shadow-cyan-500/10 transition-colors hover:bg-cyan-300"
              >
                Explore my work <ArrowIcon />
              </motion.a>

              <motion.a
                href="#about"
                whileHover={reduceMotion ? undefined : { y: -3 }}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-white"
              >
                About me
              </motion.a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 font-mono text-xs text-slate-500">
              <span>WEB SECURITY</span>
              <span>OSINT</span>
              <span>RESEARCH</span>
              <span>DEVELOPMENT</span>
            </div>
          </motion.div>

          {/* Animated Terminal */}
          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, x: 28, scale: 0.97 }
            }
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.2,
              ease: "easeOut",
            }}
            whileHover={reduceMotion ? undefined : { y: -5 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-5 rounded-3xl bg-cyan-500/[0.08] blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-cyan-400/15 bg-[#0c1321] shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
                <div className="flex gap-2" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span className="font-mono text-xs text-slate-500">
                  research.log
                </span>
                <span className="font-mono text-[10px] text-emerald-300">
                  ONLINE
                </span>
              </div>

              <div className="space-y-5 p-6 font-mono text-sm sm:p-8">
                <p className="text-slate-500">
                  $ <span className="text-cyan-300">whoami</span>
                </p>
                <p className="text-white">security_researcher</p>

                <p className="text-slate-500">
                  $ <span className="text-cyan-300">cat focus.txt</span>
                </p>

                <div className="space-y-3 pl-3">
                  {[
                    "Web Application Security",
                    "OSINT & Reconnaissance",
                    "Security Engineering",
                  ].map((item, index) => (
                    <motion.p
                      key={item}
                      initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.4,
                        delay: reduceMotion ? 0 : 0.65 + index * 0.18,
                      }}
                    >
                      <span className="mr-3 text-cyan-400">
                        0{index + 1}.
                      </span>
                      <span className="text-slate-300">{item}</span>
                    </motion.p>
                  ))}
                </div>

                <div className="border-t border-white/[0.08] pt-5">
                  <p className="text-slate-500">
                    $ <span className="text-cyan-300">echo $MISSION</span>
                  </p>
                  <p className="mt-2 text-emerald-300">
                    Research. Build. Secure.
                  </p>
                  <p className="mt-5 text-slate-600">
                    <span className="redtrace-cursor text-cyan-400">▌</span>{" "}
                    Ready to learn.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-center font-mono text-[11px] tracking-wider text-slate-600">
              A PERSONAL SPACE FOR SECURITY RESEARCH
            </p>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-24 border-y border-white/[0.06] bg-white/[0.015]"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 md:grid-cols-[0.7fr_1.3fr]">
          <Reveal>
            <SectionLabel>01 / About</SectionLabel>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
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
                This portfolio will grow alongside my skills — a transparent
                record of projects, experiments, technical notes, and lessons
                learned.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="scroll-mt-24 mx-auto max-w-7xl px-5 py-20 sm:px-8"
      >
        <Reveal>
          <SectionLabel>02 / Expertise</SectionLabel>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Areas I&apos;m exploring
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            A developing toolkit built through study, practice, and responsible
            security research.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: reduceMotion ? 0 : 0.35,
                delay: reduceMotion ? 0 : (index % 5) * 0.07,
              }}
              whileHover={reduceMotion ? undefined : { y: -3 }}
              className="rounded-lg border border-white/[0.09] bg-white/[0.025] px-4 py-3 text-sm text-slate-300 transition-colors hover:border-cyan-400/40 hover:bg-cyan-400/[0.05] hover:text-cyan-300"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-24 border-y border-white/[0.06] bg-white/[0.015]"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <SectionLabel>03 / Selected work</SectionLabel>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Projects & experiments
                </h2>
              </div>
              <span className="font-mono text-xs text-slate-500">
                A WORK IN PROGRESS
              </span>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.number}
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion ? 0 : index * 0.12,
                }}
                whileHover={reduceMotion ? undefined : { y: -5 }}
                className="group flex flex-col rounded-xl border border-white/[0.08] bg-[#0c1321] p-6 transition-colors duration-300 hover:border-cyan-400/30"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-cyan-400">
                    / {project.number}
                  </span>
                  <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[9px] tracking-wider text-slate-400">
                    {project.status}
                  </span>
                </div>

                <p className="mt-8 font-mono text-[10px] tracking-[0.2em] text-slate-500">
                  {project.type}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white transition-colors group-hover:text-cyan-300">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/[0.05] px-2 py-1 text-[11px] text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <p className="mt-6 text-xs leading-6 text-slate-500">
            These are starter portfolio entries. Replace them with your actual
            projects, repositories, and documented research as they develop.
          </p>
        </div>
      </section>

      {/* Research */}
      <section
        id="research"
        className="scroll-mt-24 mx-auto max-w-7xl px-5 py-20 sm:px-8"
      >
        <Reveal>
          <SectionLabel>04 / Research notes</SectionLabel>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Learning in public.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
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
                delay: reduceMotion ? 0 : index * 0.1,
              }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className="rounded-xl border border-white/[0.08] bg-white/[0.015] p-5 transition-colors hover:border-cyan-400/30"
            >
              <p className="font-mono text-xs text-cyan-400">
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
            </motion.article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-24 border-t border-white/[0.08] bg-white/[0.015]"
      >
        <div className="relative mx-auto max-w-4xl overflow-hidden px-5 py-20 text-center sm:px-8">
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.06] blur-[100px]" />

          <Reveal>
            <SectionLabel>05 / Contact</SectionLabel>

            <h2 className="text-3xl font-semibold text-white sm:text-5xl">
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
                  className="mt-2 w-full rounded-lg border border-white/10 bg-[#0c1321] px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-600 focus:border-cyan-400"
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
                  className="mt-2 w-full rounded-lg border border-white/10 bg-[#0c1321] px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-600 focus:border-cyan-400"
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
                  className="mt-2 w-full resize-y rounded-lg border border-white/10 bg-[#0c1321] px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-600 focus:border-cyan-400"
                  placeholder="Tell me what you'd like to discuss..."
                />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-cyan-400 px-5 py-3 font-medium text-slate-950 transition-colors hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
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
                href="https://github.com/simplyshahriar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduceMotion ? undefined : { y: -3 }}
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-medium text-slate-950 transition-colors hover:bg-cyan-300"
              >
                GitHub <ArrowIcon />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/hasnainshahriar/?isSelfProfile=true"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduceMotion ? undefined : { y: -3 }}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-white"
              >
                LinkedIn <ArrowIcon />
              </motion.a>
            </div>

            <p className="mt-5 text-xs text-slate-500">
              Replace these links with your actual profiles before publishing.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>
            <span className="font-semibold text-slate-300">RedTrace</span>
            {" "}— Research. Build. Secure.
          </p>
          <p>Independent learning. Responsible security research.</p>
        </div>
      </footer>
    </main>
  );
}