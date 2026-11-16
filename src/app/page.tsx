"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { projects, researchNotes } from "./lib/data";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "Web Security Inquiry",
    message: "",
    website: "", // Honeypot
  });
  const [status, setStatus] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `[${form.topic}] ${form.name}`,
          email: form.email,
          message: form.message,
          website: form.website,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        setStatus(data.message || "Unable to send message right now.");
        return;
      }

      setStatus(data.message || "Message sent successfully! I'll get back to you soon.");
      setForm({ name: "", email: "", topic: "Web Security Inquiry", message: "", website: "" });
    } catch {
      setStatus("Network error. Please email directly at hasnainshahriar2007@gmail.com.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0B1112] text-[#E8F1EF] teal-grid">
      
      {/* ================= 1. HERO / OVERVIEW ================= */}
      <section
        id="hero"
        className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-[#00E5C3]/15 overflow-hidden"
      >
        {/* Subtle ambient cyan glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[550px] rounded-full bg-[#00E5C3]/[0.06] blur-[150px]"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#00E5C3]/30 bg-[#00E5C3]/[0.08] px-3.5 py-1 font-mono text-xs text-[#00E5C3]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00E5C3] animate-pulse" />
                <span>PRIMARY FOCUS: WEB APPLICATION SECURITY</span>
              </div>

              <div>
                <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#E8F1EF]">
                  Hasnain Shahriar
                </h1>
                <p className="mt-2 font-display text-lg sm:text-2xl font-medium text-[#00E5C3]">
                  Cybersecurity Researcher | Web Application Security | Reverse Engineering
                </p>
              </div>

              <p className="max-w-xl text-base leading-relaxed text-[#91A5A1]">
                Welcome to my personal cybersecurity portfolio. I am dedicated to developing practical expertise across web application penetration testing, software reverse engineering, digital forensics, and AI-assisted development. This space documents my hands-on learning, lab findings, and engineering projects.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
                <a
                  href="#projects"
                  className="rounded border border-[#00E5C3] bg-[#00E5C3] px-6 py-3 font-semibold text-[#0B1112] shadow-[0_0_20px_rgba(0,229,195,0.25)] transition-all hover:bg-[#35BDF2] hover:border-[#35BDF2]"
                >
                  Explore Projects →
                </a>

                <a
                  href="https://github.com/simplyshahriar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-white/[0.12] bg-[#142122] px-6 py-3 text-[#E8F1EF] transition-all hover:border-[#00E5C3]/50 hover:bg-[#1B2B2D]"
                >
                  View GitHub Profile ↗
                </a>

                <a
                  href="#contact"
                  className="rounded border border-transparent px-4 py-3 text-[#00E5C3] hover:underline"
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/* Right: Technical Terminal Card */}
            <div className="rounded-xl border border-[#00E5C3]/20 bg-[#101A1B] p-5 shadow-2xl shadow-black/80 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 text-[#91A5A1]">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#00E5C3]/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#35BDF2]/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>
                <span>research_session.log</span>
                <span className="text-[#00E5C3] text-[10px]">ACTIVE</span>
              </div>

              <div className="mt-4 space-y-3 leading-relaxed text-[#91A5A1]">
                <div className="text-[#E8F1EF]">
                  <span className="text-[#00E5C3] font-bold">researcher@home-lab:~$</span> status --summary
                </div>

                <div className="rounded border border-white/[0.06] bg-[#0B1112] p-3 text-[11px] space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-[#91A5A1]">RESEARCHER:</span>
                    <span className="text-[#E8F1EF]">Hasnain Shahriar</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#91A5A1]">PRIMARY DOMAIN:</span>
                    <span className="text-[#00E5C3]">Web Application Security &amp; Pentesting</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#91A5A1]">METHODOLOGY:</span>
                    <span className="text-[#E8F1EF]">OWASP Top 10 · PortSwigger Lab Practice</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#91A5A1]">LAB PLATFORM:</span>
                    <span className="text-[#35BDF2]">Kali Linux · Burp Suite · Ghidra</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#91A5A1]">LEARNING STANCE:</span>
                    <span className="text-[#00E5C3]">Continuous Practice &amp; Responsible Disclosure</span>
                  </div>
                </div>

                <p className="text-[11px] text-[#91A5A1]">
                  [NOTE] Documenting practical lab experiments, tools, and technical checklists as an open learning record.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. ABOUT ME ================= */}
      <section id="about" className="py-20 border-b border-[#00E5C3]/15 bg-[#101A1B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5C3]">
              {"// Background & Philosophy"}
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#E8F1EF]">
              About Me
            </h2>
            
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#91A5A1]">
              <p>
                I am an aspiring cybersecurity researcher with a deep curiosity for how software functions, breaks, and can be defended. My primary interest lies in web application security—dissecting authentication flows, session handling, access control barriers, and common vulnerability classes in safe, authorized lab environments.
              </p>
              <p>
                Rather than claiming senior-level experience, I approach security through transparent, continuous practice: studying modern attack surfaces, experimenting with reverse engineering in Ghidra, understanding digital forensics fundamentals, and integrating modern AI-assisted development tools into my technical workflow.
              </p>
              <p>
                My guiding philosophy is straightforward: understand the architecture, test assumptions in scoped environments, document findings clearly, and always practice responsible disclosure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. SPECIALIZATIONS (THE 4 PILLARS) ================= */}
      <section id="specializations" className="py-20 border-b border-[#00E5C3]/15 bg-[#0B1112]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5C3]">
              {"// Core Focus Areas"}
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#E8F1EF]">
              My Specializations
            </h2>
            <p className="mt-2 text-sm text-[#91A5A1]">
              Organized around Web Application Security as the primary pillar, supported by software security, DFIR, and modern AI engineering.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            
            {/* PILLAR 1 - PRIMARY */}
            <div className="relative rounded-xl border-2 border-[#00E5C3] bg-[#142122] p-6 sm:p-8 shadow-xl shadow-[#00E5C3]/10">
              <div className="flex items-center justify-between">
                <span className="rounded bg-[#00E5C3] px-2.5 py-1 font-mono text-[11px] font-bold text-[#0B1112] uppercase tracking-wider">
                  PRIMARY SPECIALIZATION
                </span>
                <span className="font-mono text-xs text-[#00E5C3]">Pillar 01</span>
              </div>

              <h3 className="mt-5 font-display text-2xl font-bold text-[#E8F1EF]">
                Web Application Security &amp; Penetration Testing
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#91A5A1]">
                Methodical testing of web application architectures, authentication mechanisms, session states, and business logic. Focused on mapping attack surfaces and finding vulnerabilities before adversaries do.
              </p>

              <div className="mt-6 border-t border-white/[0.08] pt-4">
                <p className="font-mono text-xs uppercase tracking-wider text-[#00E5C3] mb-2">
                  Key Competencies &amp; Concepts:
                </p>
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {[
                    "OWASP Top 10",
                    "API Security Testing",
                    "Authentication & AuthZ",
                    "Access Control Flaws",
                    "Business Logic Flaws",
                    "Recon & Attack Surface",
                    "Vulnerability Assessment",
                    "Responsible Disclosure",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded border border-[#00E5C3]/30 bg-[#00E5C3]/10 px-2 py-0.5 text-[#00E5C3]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* PILLAR 2 */}
            <div className="rounded-xl border border-white/[0.08] bg-[#101A1B] p-6 sm:p-8 transition-all hover:border-[#35BDF2]/40 hover:bg-[#142122]">
              <div className="flex items-center justify-between">
                <span className="rounded bg-[#35BDF2]/15 px-2.5 py-1 font-mono text-[11px] font-semibold text-[#35BDF2] uppercase tracking-wider">
                  SUPPORTING PILLAR
                </span>
                <span className="font-mono text-xs text-[#91A5A1]">Pillar 02</span>
              </div>

              <h3 className="mt-5 font-display text-2xl font-bold text-[#E8F1EF]">
                Reverse Engineering &amp; Software Security
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#91A5A1]">
                Examining software behavior at the binary level. Practicing static and dynamic analysis to uncover hidden routines, analyze compiled programs, and write Python-based security scripts.
              </p>

              <div className="mt-6 border-t border-white/[0.08] pt-4">
                <p className="font-mono text-xs uppercase tracking-wider text-[#35BDF2] mb-2">
                  Key Focus Areas:
                </p>
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {[
                    "Software Reverse Engineering",
                    "Static & Dynamic Analysis",
                    "Binary Analysis",
                    "Application Internals",
                    "Ghidra Decompilation",
                    "Python Security Research",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded border border-[#35BDF2]/30 bg-[#35BDF2]/10 px-2 py-0.5 text-[#35BDF2]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* PILLAR 3 */}
            <div className="rounded-xl border border-white/[0.08] bg-[#101A1B] p-6 sm:p-8 transition-all hover:border-[#00E5C3]/40 hover:bg-[#142122]">
              <div className="flex items-center justify-between">
                <span className="rounded bg-white/[0.06] px-2.5 py-1 font-mono text-[11px] text-[#E8F1EF] uppercase tracking-wider">
                  SUPPORTING PILLAR
                </span>
                <span className="font-mono text-xs text-[#91A5A1]">Pillar 03</span>
              </div>

              <h3 className="mt-5 font-display text-2xl font-bold text-[#E8F1EF]">
                Digital Forensics &amp; Incident Response (DFIR)
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#91A5A1]">
                Studying evidence preservation, forensic artifact acquisition, and post-incident investigation. Exploring malware behavior and security event logs to understand how intrusions occur.
              </p>

              <div className="mt-6 border-t border-white/[0.08] pt-4">
                <p className="font-mono text-xs uppercase tracking-wider text-[#91A5A1] mb-2">
                  Key Focus Areas:
                </p>
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {[
                    "Digital Forensics Basics",
                    "Incident Response",
                    "Log & Event Analysis",
                    "Evidence Handling",
                    "Malware Analysis Learning",
                    "Security Investigation",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded border border-white/[0.1] bg-[#0B1112] px-2 py-0.5 text-[#E8F1EF]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* PILLAR 4 */}
            <div className="rounded-xl border border-white/[0.08] bg-[#101A1B] p-6 sm:p-8 transition-all hover:border-[#00E5C3]/40 hover:bg-[#142122]">
              <div className="flex items-center justify-between">
                <span className="rounded bg-white/[0.06] px-2.5 py-1 font-mono text-[11px] text-[#E8F1EF] uppercase tracking-wider">
                  SUPPORTING PILLAR
                </span>
                <span className="font-mono text-xs text-[#91A5A1]">Pillar 04</span>
              </div>

              <h3 className="mt-5 font-display text-2xl font-bold text-[#E8F1EF]">
                AI-Assisted Development &amp; Vibe Coding
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#91A5A1]">
                Accelerating research, scripting, and full-stack software development by leveraging local LLMs, AI-assisted IDEs, and modern development workflows to build practical tooling rapidly.
              </p>

              <div className="mt-6 border-t border-white/[0.08] pt-4">
                <p className="font-mono text-xs uppercase tracking-wider text-[#91A5A1] mb-2">
                  Key Focus Areas:
                </p>
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {[
                    "AI-Assisted Development",
                    "Local LLM Experimentation",
                    "AI Coding Workflows",
                    "Full-Stack Development",
                    "Development Automation",
                    "Practical Software Prototyping",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded border border-white/[0.1] bg-[#0B1112] px-2 py-0.5 text-[#E8F1EF]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 4. TECHNOLOGY STACK ================= */}
      <section id="stack" className="py-20 border-b border-[#00E5C3]/15 bg-[#101A1B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5C3]">
              {"// Tooling & Environment"}
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#E8F1EF]">
              Technology Stack
            </h2>
            <p className="mt-2 text-sm text-[#91A5A1]">
              Tools and environments I actively use for testing, analysis, research, and engineering.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 font-mono text-xs">
            
            {/* Category 1 */}
            <div className="rounded-xl border border-white/[0.08] bg-[#142122] p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[#00E5C3]">
                <span className="font-bold uppercase">Operating Systems &amp; Labs</span>
                <span className="text-[10px] text-[#91A5A1]">Environment</span>
              </div>
              <ul className="space-y-2 text-[#E8F1EF]">
                <li className="flex justify-between items-center">
                  <span>Kali Linux</span>
                  <span className="text-[10px] rounded bg-[#00E5C3]/10 px-2 py-0.5 text-[#00E5C3]">Primary Lab</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Ubuntu Linux</span>
                  <span className="text-[10px] text-[#91A5A1]">Working Knowledge</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Windows 11 &amp; WSL2</span>
                  <span className="text-[10px] text-[#91A5A1]">Daily Driver</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>VirtualBox</span>
                  <span className="text-[10px] text-[#91A5A1]">Lab Isolation</span>
                </li>
              </ul>
            </div>

            {/* Category 2 */}
            <div className="rounded-xl border border-[#00E5C3]/20 bg-[#142122] p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[#00E5C3]">
                <span className="font-bold uppercase">Web Security &amp; Recon</span>
                <span className="text-[10px] text-[#00E5C3]">Core Focus</span>
              </div>
              <ul className="space-y-2 text-[#E8F1EF]">
                <li className="flex justify-between items-center">
                  <span>Burp Suite Community / Pro</span>
                  <span className="text-[10px] rounded bg-[#00E5C3]/10 px-2 py-0.5 text-[#00E5C3]">Practicing</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Nmap</span>
                  <span className="text-[10px] text-[#91A5A1]">Working Knowledge</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Ghauri</span>
                  <span className="text-[10px] text-[#91A5A1]">Practicing</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>gau &amp; waybackurls</span>
                  <span className="text-[10px] text-[#91A5A1]">Recon Workflow</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>ParamSpider</span>
                  <span className="text-[10px] text-[#91A5A1]">URL Discovery</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>SecretFinder &amp; jsluice</span>
                  <span className="text-[10px] text-[#91A5A1]">JS Triage</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>PortSwigger Academy</span>
                  <span className="text-[10px] rounded bg-[#00E5C3]/10 px-2 py-0.5 text-[#00E5C3]">Active Labs</span>
                </li>
              </ul>
            </div>

            {/* Category 3 */}
            <div className="rounded-xl border border-white/[0.08] bg-[#142122] p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[#35BDF2]">
                <span className="font-bold uppercase">Reverse Engineering</span>
                <span className="text-[10px] text-[#91A5A1]">Analysis</span>
              </div>
              <ul className="space-y-2 text-[#E8F1EF]">
                <li className="flex justify-between items-center">
                  <span>Ghidra</span>
                  <span className="text-[10px] rounded bg-[#35BDF2]/10 px-2 py-0.5 text-[#35BDF2]">Learning</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Python for RE</span>
                  <span className="text-[10px] text-[#91A5A1]">Scripting</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Bash</span>
                  <span className="text-[10px] text-[#91A5A1]">Automation</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Go</span>
                  <span className="text-[10px] text-[#91A5A1]">Learning</span>
                </li>
              </ul>
            </div>

            {/* Category 4 */}
            <div className="rounded-xl border border-white/[0.08] bg-[#142122] p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[#E8F1EF]">
                <span className="font-bold uppercase">Programming &amp; Development</span>
                <span className="text-[10px] text-[#91A5A1]">Languages</span>
              </div>
              <ul className="space-y-2 text-[#E8F1EF]">
                <li className="flex justify-between items-center">
                  <span>Python</span>
                  <span className="text-[10px] text-[#00E5C3]">Project Experience</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>JavaScript &amp; TypeScript</span>
                  <span className="text-[10px] text-[#00E5C3]">Full-Stack</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>React &amp; Next.js</span>
                  <span className="text-[10px] text-[#00E5C3]">Frontend</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Tailwind CSS</span>
                  <span className="text-[10px] text-[#91A5A1]">UI Styling</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Rust</span>
                  <span className="text-[10px] text-[#91A5A1]">Learning</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Electron</span>
                  <span className="text-[10px] text-[#91A5A1]">Desktop Apps</span>
                </li>
              </ul>
            </div>

            {/* Category 5 */}
            <div className="rounded-xl border border-white/[0.08] bg-[#142122] p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[#00E5C3]">
                <span className="font-bold uppercase">AI &amp; Developer Tools</span>
                <span className="text-[10px] text-[#91A5A1]">Workflows</span>
              </div>
              <ul className="space-y-2 text-[#E8F1EF]">
                <li className="flex justify-between items-center">
                  <span>Google Antigravity IDE</span>
                  <span className="text-[10px] text-[#00E5C3]">Primary Agentic IDE</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Visual Studio Code</span>
                  <span className="text-[10px] text-[#91A5A1]">Daily Editor</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Ollama</span>
                  <span className="text-[10px] text-[#00E5C3]">Local LLMs</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Local LLM Experimentation</span>
                  <span className="text-[10px] text-[#91A5A1]">Vibe Coding</span>
                </li>
              </ul>
            </div>

            {/* Category 6 */}
            <div className="rounded-xl border border-white/[0.08] bg-[#142122] p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[#35BDF2]">
                <span className="font-bold uppercase">Version Control &amp; Deploy</span>
                <span className="text-[10px] text-[#91A5A1]">DevOps</span>
              </div>
              <ul className="space-y-2 text-[#E8F1EF]">
                <li className="flex justify-between items-center">
                  <span>Git</span>
                  <span className="text-[10px] text-[#00E5C3]">Working Knowledge</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>GitHub</span>
                  <span className="text-[10px] text-[#00E5C3]">Repositories &amp; CI</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Vercel</span>
                  <span className="text-[10px] text-[#00E5C3]">Production Deploy</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 5. PROJECTS & PRACTICAL WORK ================= */}
      <section id="projects" className="py-20 border-b border-[#00E5C3]/15 bg-[#0B1112]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5C3]">
                {"// Hands-on Engineering"}
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#E8F1EF]">
                Projects &amp; Practical Work
              </h2>
            </div>
            <a
              href="https://github.com/simplyshahriar"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#00E5C3] hover:underline"
            >
              View all repos on GitHub ↗
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <div
                key={p.number}
                className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#142122] p-6 transition-all hover:border-[#00E5C3]/40 hover:bg-[#1B2B2D]"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-[#91A5A1] border-b border-white/[0.06] pb-3">
                    <span className="text-[#00E5C3]">/{p.number}</span>
                    <span className="rounded bg-[#00E5C3]/10 px-2 py-0.5 text-[10px] text-[#00E5C3]">
                      {p.status}
                    </span>
                  </div>

                  <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-[#35BDF2]">
                    {p.category}
                  </p>

                  <h3 className="mt-2 font-display text-xl font-bold text-[#E8F1EF]">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-[#91A5A1]">
                    {p.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[10px]">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-white/[0.08] bg-[#0B1112] px-2 py-0.5 text-[#91A5A1]"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-white/[0.06] pt-4 font-mono text-xs">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="inline-flex items-center gap-1.5 text-[#00E5C3] hover:underline"
                  >
                    <span>Read Details &amp; Notes</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 6. RESEARCH & LEARNING JOURNEY ================= */}
      <section id="research" className="py-20 border-b border-[#00E5C3]/15 bg-[#101A1B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5C3]">
              {"// Active Study & Labs"}
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#E8F1EF]">
              Research &amp; Learning Journey
            </h2>
            <p className="mt-2 text-sm text-[#91A5A1]">
              A log of topics, security research checklists, and lab milestones actively in progress.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "PortSwigger Web Security Academy Labs",
                category: "WEB SECURITY",
                status: "ACTIVE PRACTICE",
                desc: "Working systematically through SQL injection, Cross-Site Scripting (XSS), CSRF, SSRF, and business logic vulnerability tracks.",
              },
              {
                title: "Reconnaissance & Asset Discovery Automation",
                category: "RECON WORKFLOW",
                status: "ONGOING",
                desc: "Exploring sub-domain enumeration, historical parameter gathering (waybackurls/gau), and secrets discovery in JavaScript bundles (jsluice).",
              },
              {
                title: "Ghidra Reverse Engineering & Binary Decompilation",
                category: "SOFTWARE SECURITY",
                status: "LEARNING & RESEARCH",
                desc: "Analyzing C/C++ compiled binaries, identifying buffer validation issues, and learning assembly basics.",
              },
              {
                title: "Digital Forensics & Evidence Handling",
                category: "DFIR",
                status: "STUDY TRACK",
                desc: "Studying forensic image acquisition, volatility analysis, chain of custody rules, and SIEM security log interpretation.",
              },
              {
                title: "Local LLM Tool Integration for Code Audits",
                category: "AI DEVELOPMENT",
                status: "EXPERIMENT",
                desc: "Testing local Ollama models to generate static analysis rules, explain complex decompiled code, and automate repetitive checklists.",
              },
              {
                title: "Responsible Disclosure Protocol Documentation",
                category: "METHODOLOGY",
                status: "ESTABLISHED",
                desc: "Defining clear boundaries: authorized scopes, zero data modification, proof-of-concept preservation, and 90-day coordinated disclosure.",
              },
            ].map((r, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/[0.08] bg-[#142122] p-6 space-y-3"
              >
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="text-[#00E5C3] uppercase">{r.category}</span>
                  <span className="rounded bg-white/[0.06] px-2 py-0.5 text-[#E8F1EF]">{r.status}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-[#E8F1EF]">
                  {r.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#91A5A1]">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 7. NOTES & KNOWLEDGE BASE ================= */}
      <section id="notes" className="py-20 border-b border-[#00E5C3]/15 bg-[#0B1112]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5C3]">
              {"// Technical Write-ups & Docs"}
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#E8F1EF]">
              Notes &amp; Knowledge Base
            </h2>
            <p className="mt-2 text-sm text-[#91A5A1]">
              Summaries, methodologies, and technical documentation written to reinforce my understanding.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {researchNotes.map((n) => (
              <div
                key={n.number}
                className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#142122] p-6 transition-all hover:border-[#35BDF2]/40 hover:bg-[#1B2B2D]"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-[#91A5A1] border-b border-white/[0.06] pb-3">
                    <span className="text-[#35BDF2]">DOC_REF: {n.number}</span>
                    <span className="text-[10px] uppercase text-[#00E5C3]">{n.category}</span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold text-[#E8F1EF]">
                    {n.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#91A5A1]">
                    {n.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/[0.06] pt-4 font-mono text-xs">
                  <Link
                    href={`/research/${n.slug}`}
                    className="inline-flex items-center gap-1.5 text-[#35BDF2] hover:underline"
                  >
                    <span>Read Note</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 8. CONTACT ================= */}
      <section id="contact" className="py-20 bg-[#101A1B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5C3]">
              {"// Get In Touch"}
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#E8F1EF]">
              Contact Me
            </h2>
            <p className="mt-2 text-sm text-[#91A5A1]">
              Open for technical conversations, collaboration on open-source tools, or security discussions.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            
            {/* Direct Connect Info */}
            <div className="space-y-6">
              <div className="rounded-xl border border-white/[0.08] bg-[#142122] p-6 space-y-4 font-mono text-xs">
                <p className="font-bold text-[#E8F1EF] uppercase tracking-wider border-b border-white/[0.08] pb-2">
                  Contact Information &amp; Profiles
                </p>

                <div className="space-y-3 text-[#91A5A1]">
                  <div>
                    <span className="text-[#00E5C3] block">EMAIL:</span>
                    <a
                      href="mailto:hasnainshahriar2007@gmail.com"
                      className="text-[#E8F1EF] hover:underline"
                    >
                      hasnainshahriar2007@gmail.com
                    </a>
                  </div>

                  <div>
                    <span className="text-[#00E5C3] block">GITHUB:</span>
                    <a
                      href="https://github.com/simplyshahriar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E8F1EF] hover:underline"
                    >
                      github.com/simplyshahriar ↗
                    </a>
                  </div>

                  <div>
                    <span className="text-[#00E5C3] block">LINKEDIN:</span>
                    <a
                      href="https://www.linkedin.com/in/hasnainshahriar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E8F1EF] hover:underline"
                    >
                      linkedin.com/in/hasnainshahriar ↗
                    </a>
                  </div>

                  <div>
                    <span className="text-[#00E5C3] block">FACEBOOK:</span>
                    <a
                      href="https://www.facebook.com/simplyshahriar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E8F1EF] hover:underline"
                    >
                      facebook.com/simplyshahriar ↗
                    </a>
                  </div>

                  <div>
                    <span className="text-[#00E5C3] block">INSTAGRAM:</span>
                    <a
                      href="https://www.instagram.com/simplyshahriar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E8F1EF] hover:underline"
                    >
                      instagram.com/simplyshahriar ↗
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#00E5C3]/20 bg-[#142122] p-6 font-mono text-xs text-[#91A5A1] space-y-2">
                <p className="text-[#00E5C3] font-bold">ETHICAL TESTING &amp; SAFE HARBOR PLEDGE</p>
                <p className="leading-relaxed text-[11px]">
                  All testing conducted during my learning and research is strictly authorized, bounded by platform terms or isolated virtual environments. I adhere strictly to responsible disclosure principles.
                </p>
              </div>
            </div>

            {/* Functional Contact Form */}
            <div className="rounded-xl border border-white/[0.08] bg-[#142122] p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-[#E8F1EF] mb-4">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                {/* Honeypot */}
                <div className="hidden">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    value={form.website}
                    onChange={(e) => setForm({ ...form, website: e.target.value })}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label className="block text-[#91A5A1] uppercase mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    minLength={2}
                    maxLength={80}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full rounded border border-white/[0.1] bg-[#0B1112] px-3.5 py-2.5 text-[#E8F1EF] outline-none placeholder:text-[#91A5A1]/50 focus:border-[#00E5C3]"
                  />
                </div>

                <div>
                  <label className="block text-[#91A5A1] uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    maxLength={254}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full rounded border border-white/[0.1] bg-[#0B1112] px-3.5 py-2.5 text-[#E8F1EF] outline-none placeholder:text-[#91A5A1]/50 focus:border-[#00E5C3]"
                  />
                </div>

                <div>
                  <label className="block text-[#91A5A1] uppercase mb-1">
                    Topic / Subject
                  </label>
                  <select
                    value={form.topic}
                    onChange={(e) => setForm({ ...form, topic: e.target.value })}
                    className="w-full rounded border border-white/[0.1] bg-[#0B1112] px-3.5 py-2.5 text-[#E8F1EF] outline-none focus:border-[#00E5C3]"
                  >
                    <option value="Web Security Inquiry">Web Security / Penetration Testing</option>
                    <option value="Reverse Engineering">Reverse Engineering &amp; Binary Analysis</option>
                    <option value="DFIR & Forensics">Digital Forensics / Incident Response</option>
                    <option value="AI Development">AI-Assisted Development / Tools</option>
                    <option value="General Conversation">General Conversation / Networking</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#91A5A1] uppercase mb-1">
                    Message
                  </label>
                  <textarea
                    required
                    minLength={10}
                    maxLength={3000}
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full rounded border border-white/[0.1] bg-[#0B1112] px-3.5 py-2.5 text-[#E8F1EF] outline-none placeholder:text-[#91A5A1]/50 focus:border-[#00E5C3]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded border border-[#00E5C3] bg-[#00E5C3] py-3 text-xs font-semibold text-[#0B1112] shadow-[0_0_15px_rgba(0,229,195,0.2)] transition-all hover:bg-[#35BDF2] hover:border-[#35BDF2] disabled:opacity-50"
                >
                  {submitting ? "Sending Message..." : "Send Message →"}
                </button>

                {status && (
                  <div
                    role="status"
                    className="rounded border border-[#00E5C3]/30 bg-[#00E5C3]/10 p-3 text-xs text-[#00E5C3]"
                  >
                    {status}
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#00E5C3]/15 bg-[#0B1112] py-12 text-[#91A5A1]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2">
            
            <div className="space-y-3">
              <p className="font-display text-base font-bold text-[#E8F1EF]">
                Hasnain Shahriar
              </p>
              <p className="text-xs leading-relaxed text-[#91A5A1]">
                Cybersecurity Researcher exploring Web Application Security, Reverse Engineering, Digital Forensics, and AI-assisted workflows.
              </p>
              <p className="font-mono text-[11px] text-[#00E5C3]">
                Primary: Web Application Security
              </p>
            </div>

            <div className="space-y-2 font-mono text-xs">
              <p className="font-bold uppercase tracking-wider text-[#E8F1EF]">Navigation</p>
              <ul className="space-y-1.5">
                <li><a href="#about" className="hover:text-[#00E5C3]">About Me</a></li>
                <li><a href="#specializations" className="hover:text-[#00E5C3]">Specializations</a></li>
                <li><a href="#stack" className="hover:text-[#00E5C3]">Technology Stack</a></li>
                <li><a href="#projects" className="hover:text-[#00E5C3]">Projects &amp; Labs</a></li>
                <li><a href="#research" className="hover:text-[#00E5C3]">Research Journey</a></li>
              </ul>
            </div>

            <div className="space-y-2 font-mono text-xs">
              <p className="font-bold uppercase tracking-wider text-[#E8F1EF]">Core Pillars</p>
              <ul className="space-y-1.5">
                <li><span className="text-[#00E5C3]">Web Application Security</span></li>
                <li><span>Reverse Engineering</span></li>
                <li><span>Digital Forensics &amp; IR</span></li>
                <li><span>AI-Assisted Development</span></li>
              </ul>
            </div>

            <div className="space-y-2 font-mono text-xs">
              <p className="font-bold uppercase tracking-wider text-[#E8F1EF]">Connect</p>
              <ul className="space-y-1.5">
                <li>
                  <a href="https://github.com/simplyshahriar" target="_blank" rel="noopener noreferrer" className="hover:text-[#00E5C3]">
                    GitHub / simplyshahriar ↗
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/hasnainshahriar/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00E5C3]">
                    LinkedIn / in/hasnainshahriar ↗
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/simplyshahriar" target="_blank" rel="noopener noreferrer" className="hover:text-[#00E5C3]">
                    Facebook / simplyshahriar ↗
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/simplyshahriar/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00E5C3]">
                    Instagram / @simplyshahriar ↗
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 font-mono text-xs sm:flex-row text-[#91A5A1]">
            <p>© 2026 Hasnain Shahriar. Built with Next.js, Tailwind CSS &amp; TypeScript.</p>
            <div className="flex items-center gap-2 text-[#00E5C3]">
              <span className="h-2 w-2 rounded-full bg-[#00E5C3] animate-pulse" />
              <span>Learning in Public · Responsible Security Research</span>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
