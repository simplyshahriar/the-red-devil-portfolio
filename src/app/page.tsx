"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { projects } from "./lib/data";
import CertificationsGallery from "./components/CertificationsGallery";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "WordPress Security & Malware Removal",
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
      setForm({ name: "", email: "", topic: "WordPress Security & Malware Removal", message: "", website: "" });
    } catch {
      setStatus("Network error. Please email directly at hasnainshahriar2007@gmail.com.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0B1112] text-[#E8F1EF] teal-grid selection:bg-[#00E5C3]/20 selection:text-[#00E5C3]">
      
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
                <span>CYBERSECURITY RESEARCH &amp; DEFENSIVE PRACTICE</span>
              </div>

              <div>
                <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#E8F1EF]">
                  Hasnain Shahriar
                </h1>
                <p className="mt-3 font-display text-lg sm:text-2xl font-semibold text-[#00E5C3]">
                  Cybersecurity Researcher | Penetration Tester | WordPress Security
                </p>
                <p className="mt-1 font-mono text-xs text-[#35BDF2]">
                  Penetration Testing · WordPress Security · OSINT &amp; Reconnaissance
                </p>
              </div>

              <p className="max-w-xl text-base leading-relaxed text-[#91A5A1]">
                Welcome to my cybersecurity portfolio. I am dedicated to ethical security assessments, practical penetration testing, WordPress malware eradication and hardening, and open-source intelligence. This site documents my hands-on research, lab findings, verified credentials, and security discoveries.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2 font-mono text-xs">
                <a
                  href="#projects"
                  className="rounded border border-[#00E5C3] bg-[#00E5C3] px-5 py-3 font-semibold text-[#0B1112] shadow-[0_0_20px_rgba(0,229,195,0.25)] transition-all hover:bg-[#35BDF2] hover:border-[#35BDF2]"
                >
                  Explore My Work →
                </a>

                <a
                  href="#certifications"
                  className="rounded border border-[#00E5C3]/40 bg-[#142122] px-5 py-3 text-[#00E5C3] transition-all hover:border-[#00E5C3] hover:bg-[#1B2B2D]"
                >
                  View Certificates 📜
                </a>

                <a
                  href="https://github.com/simplyshahriar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-white/[0.12] bg-[#142122] px-5 py-3 text-[#E8F1EF] transition-all hover:border-[#35BDF2]/50 hover:bg-[#1B2B2D]"
                >
                  GitHub Profile ↗
                </a>

                <a
                  href="#contact"
                  className="rounded border border-transparent px-3 py-3 text-[#91A5A1] hover:text-[#00E5C3] transition-colors"
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
                <span>security_operator.log</span>
                <span className="text-[#00E5C3] text-[10px]">VERIFIED</span>
              </div>

              <div className="mt-4 space-y-3 leading-relaxed text-[#91A5A1]">
                <div className="text-[#E8F1EF]">
                  <span className="text-[#00E5C3] font-bold">shahriar@sec-terminal:~$</span> status --full
                </div>

                <div className="rounded border border-white/[0.06] bg-[#0B1112] p-3 text-[11px] space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#91A5A1]">RESEARCHER:</span>
                    <span className="text-[#E8F1EF] font-semibold">Hasnain Shahriar</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#91A5A1]">CORE PILLARS:</span>
                    <span className="text-[#00E5C3]">WordPress Security · Pentesting</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#91A5A1]">SPECIALIZATION:</span>
                    <span className="text-[#35BDF2]">System Hacking &amp; OSINT Recon</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#91A5A1]">FEATURED WORK:</span>
                    <span className="text-[#00E5C3]">GoEdu Vulnerability Discovery</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#91A5A1]">NEW CREDENTIAL:</span>
                    <span className="text-[#35BDF2]">Claude 101 (Anthropic)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#91A5A1]">ETHICAL POLICY:</span>
                    <span className="text-[#E8F1EF]">100% Authorized &amp; Responsible</span>
                  </div>
                </div>

                <p className="text-[11px] text-[#91A5A1]">
                  [SAFE HARBOR] All activities adhere to ethical boundaries, non-destructive methodologies, and coordinated disclosure.
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
              {"// Background & Ethical Foundation"}
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#E8F1EF]">
              About Me
            </h2>
            
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#91A5A1]">
              <p>
                I am <span className="text-[#E8F1EF] font-medium">Hasnain Shahriar</span>, a cybersecurity researcher, penetration tester, and WordPress security practitioner with an authentic passion for uncovering security weaknesses and hardening digital infrastructure against threat actors.
              </p>
              <p>
                My hands-on journey encompasses practical website security assessments, deep malware investigations, web application penetration testing using industry-standard tools like Burp Suite and Nmap, and ethical system hacking inside controlled virtual lab environments.
              </p>
              <p>
                I prioritize transparency, continuous practical learning, and strict adherence to ethical standards. When performing vulnerability assessments—such as my security research on the GoEdu platform—I maintain rigorous documentation, preserve technical evidence, and practice responsible communication with relevant stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. EXPERTISE (THE 4 CORE PILLARS) ================= */}
      <section id="expertise" className="py-20 border-b border-[#00E5C3]/15 bg-[#0B1112]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5C3]">
              {"// Core Competencies"}
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#E8F1EF]">
              Areas of Expertise
            </h2>
            <p className="mt-2 text-sm text-[#91A5A1]">
              My primary technical focus areas: defensive website recovery, web penetration testing, ethical system security, and intelligence-driven reconnaissance.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            
            {/* PILLAR A: WORDPRESS MALWARE REMOVAL */}
            <div className="relative rounded-xl border-2 border-[#00E5C3] bg-[#142122] p-6 sm:p-8 shadow-xl shadow-[#00E5C3]/10">
              <div className="flex items-center justify-between">
                <span className="rounded bg-[#00E5C3] px-2.5 py-1 font-mono text-[11px] font-bold text-[#0B1112] uppercase tracking-wider">
                  SPECIALIZATION A
                </span>
                <span className="font-mono text-xs text-[#00E5C3]">Pillar 01</span>
              </div>

              <h3 className="mt-5 font-display text-2xl font-bold text-[#E8F1EF]">
                WordPress Malware Removal &amp; Hardening
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#91A5A1]">
                Comprehensive analysis, detection, and decontamination of compromised WordPress websites. Diagnosing obfuscated backdoors, malicious redirects, unauthorized admin accounts, and implementing long-term defensive hardening.
              </p>

              <div className="mt-6 border-t border-white/[0.08] pt-4">
                <p className="font-mono text-xs uppercase tracking-wider text-[#00E5C3] mb-2.5">
                  Core Skills &amp; Activities:
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-[11px]">
                  {[
                    "WordPress Malware Detection",
                    "Website Security Investigation",
                    "Malicious File Identification",
                    "Suspicious Code Analysis",
                    "WordPress Security Hardening",
                    "Website Cleanup and Recovery",
                    "Security Configuration Review",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded border border-[#00E5C3]/30 bg-[#00E5C3]/10 px-2.5 py-1 text-[#00E5C3]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* PILLAR B: PENETRATION TESTING */}
            <div className="rounded-xl border border-white/[0.08] bg-[#101A1B] p-6 sm:p-8 transition-all hover:border-[#35BDF2]/40 hover:bg-[#142122]">
              <div className="flex items-center justify-between">
                <span className="rounded bg-[#35BDF2]/15 px-2.5 py-1 font-mono text-[11px] font-semibold text-[#35BDF2] uppercase tracking-wider">
                  SPECIALIZATION B
                </span>
                <span className="font-mono text-xs text-[#91A5A1]">Pillar 02</span>
              </div>

              <h3 className="mt-5 font-display text-2xl font-bold text-[#E8F1EF]">
                Penetration Testing &amp; Vulnerability Assessment
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#91A5A1]">
                Systematic, authorized assessment of modern web applications and APIs. Identifying logic flaws, access control oversights, and input-handling vulnerabilities while following strict responsible disclosure workflows.
              </p>

              <div className="mt-6 border-t border-white/[0.08] pt-4">
                <p className="font-mono text-xs uppercase tracking-wider text-[#35BDF2] mb-2.5">
                  Core Skills &amp; Activities:
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-[11px]">
                  {[
                    "Web Application Penetration Testing",
                    "Vulnerability Assessment",
                    "API Security Testing",
                    "OWASP Top 10",
                    "Authentication and Authorization Testing",
                    "Access Control Testing",
                    "Business Logic Testing",
                    "Security Research",
                    "Responsible Disclosure",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded border border-[#35BDF2]/30 bg-[#35BDF2]/10 px-2.5 py-1 text-[#35BDF2]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* PILLAR C: SYSTEM HACKING */}
            <div className="rounded-xl border border-white/[0.08] bg-[#101A1B] p-6 sm:p-8 transition-all hover:border-[#00E5C3]/40 hover:bg-[#142122]">
              <div className="flex items-center justify-between">
                <span className="rounded bg-white/[0.06] px-2.5 py-1 font-mono text-[11px] text-[#E8F1EF] uppercase tracking-wider">
                  SPECIALIZATION C
                </span>
                <span className="font-mono text-xs text-[#91A5A1]">Pillar 03</span>
              </div>

              <h3 className="mt-5 font-display text-2xl font-bold text-[#E8F1EF]">
                System Hacking &amp; Infrastructure Security
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#91A5A1]">
                Ethical cybersecurity work focused exclusively on authorized targets and isolated labs. Evaluating operating system permissions, identifying misconfigurations, and learning system-level defensive techniques.
              </p>

              <div className="mt-6 border-t border-white/[0.08] pt-4">
                <p className="font-mono text-xs uppercase tracking-wider text-[#E8F1EF] mb-2.5">
                  Core Skills &amp; Activities:
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-[11px]">
                  {[
                    "Linux Security",
                    "Windows Security",
                    "System Security Assessment",
                    "Network Reconnaissance",
                    "Security Misconfiguration Analysis",
                    "Practical Security Labs",
                    "System-Level Security Learning",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded border border-white/[0.1] bg-[#0B1112] px-2.5 py-1 text-[#E8F1EF]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* PILLAR D: OSINT & RECONNAISSANCE */}
            <div className="rounded-xl border border-white/[0.08] bg-[#101A1B] p-6 sm:p-8 transition-all hover:border-[#00E5C3]/40 hover:bg-[#142122]">
              <div className="flex items-center justify-between">
                <span className="rounded bg-white/[0.06] px-2.5 py-1 font-mono text-[11px] text-[#E8F1EF] uppercase tracking-wider">
                  SPECIALIZATION D
                </span>
                <span className="font-mono text-xs text-[#91A5A1]">Pillar 04</span>
              </div>

              <h3 className="mt-5 font-display text-2xl font-bold text-[#E8F1EF]">
                OSINT &amp; Attack Surface Reconnaissance
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#91A5A1]">
                Systematic intelligence gathering using open-source data. Mapping an organization&apos;s public exposure, uncovering shadow assets, and automating discovery while maintaining strict ethical boundaries.
              </p>

              <div className="mt-6 border-t border-white/[0.08] pt-4">
                <p className="font-mono text-xs uppercase tracking-wider text-[#91A5A1] mb-2.5">
                  Core Skills &amp; Activities:
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-[11px]">
                  {[
                    "Open Source Intelligence",
                    "Information Gathering",
                    "Domain Reconnaissance",
                    "Subdomain Enumeration",
                    "Attack Surface Mapping",
                    "Publicly Available Information Analysis",
                    "Reconnaissance Automation",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded border border-white/[0.1] bg-[#0B1112] px-2.5 py-1 text-[#E8F1EF]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 4. TOOLS & TECHNOLOGIES ================= */}
      <section id="tools" className="py-20 border-b border-[#00E5C3]/15 bg-[#101A1B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5C3]">
              {"// Tooling & Technical Environment"}
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#E8F1EF]">
              Tools &amp; Technologies
            </h2>
            <p className="mt-2 text-sm text-[#91A5A1]">
              Tools and environments I actively use for assessments, lab practice, analysis, and development.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 font-mono text-xs">
            
            {/* Category 1: Web Security & Reconnaissance */}
            <div className="rounded-xl border border-[#00E5C3]/30 bg-[#142122] p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[#00E5C3]">
                <span className="font-bold uppercase">Web Security &amp; Recon</span>
                <span className="text-[10px] text-[#00E5C3]">Core Focus</span>
              </div>
              <ul className="space-y-2 text-[#E8F1EF]">
                <li className="flex justify-between items-center">
                  <span>Burp Suite</span>
                  <span className="text-[10px] rounded bg-[#00E5C3]/10 px-2 py-0.5 text-[#00E5C3]">Active Testing</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Nmap</span>
                  <span className="text-[10px] text-[#91A5A1]">Network Mapping</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Ghauri</span>
                  <span className="text-[10px] text-[#91A5A1]">SQLi Triage</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>gau &amp; waybackurls</span>
                  <span className="text-[10px] text-[#91A5A1]">Recon Workflow</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>ParamSpider</span>
                  <span className="text-[10px] text-[#91A5A1]">Parameter Recon</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>SecretFinder &amp; jsluice</span>
                  <span className="text-[10px] text-[#91A5A1]">JS Endpoint Analysis</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>PortSwigger Academy</span>
                  <span className="text-[10px] rounded bg-[#00E5C3]/10 px-2 py-0.5 text-[#00E5C3]">Hands-on Labs</span>
                </li>
              </ul>
            </div>

            {/* Category 2: Operating Systems */}
            <div className="rounded-xl border border-white/[0.08] bg-[#142122] p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[#E8F1EF]">
                <span className="font-bold uppercase">Operating Systems</span>
                <span className="text-[10px] text-[#91A5A1]">Lab Environments</span>
              </div>
              <ul className="space-y-2 text-[#E8F1EF]">
                <li className="flex justify-between items-center">
                  <span>Kali Linux</span>
                  <span className="text-[10px] rounded bg-[#00E5C3]/10 px-2 py-0.5 text-[#00E5C3]">Primary Security OS</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Ubuntu Linux</span>
                  <span className="text-[10px] text-[#91A5A1]">Server &amp; Lab</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Windows 11</span>
                  <span className="text-[10px] text-[#91A5A1]">Daily Driver</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>WSL2</span>
                  <span className="text-[10px] text-[#91A5A1]">Linux Integration</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>VirtualBox</span>
                  <span className="text-[10px] text-[#91A5A1]">Isolated Target Labs</span>
                </li>
              </ul>
            </div>

            {/* Category 4: Development */}
            <div className="rounded-xl border border-white/[0.08] bg-[#142122] p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[#E8F1EF]">
                <span className="font-bold uppercase">Development</span>
                <span className="text-[10px] text-[#91A5A1]">Languages &amp; UI</span>
              </div>
              <ul className="space-y-2 text-[#E8F1EF]">
                <li className="flex justify-between items-center">
                  <span>Python</span>
                  <span className="text-[10px] text-[#00E5C3]">Security Scripting</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>JavaScript &amp; React</span>
                  <span className="text-[10px] text-[#91A5A1]">Frontend Dev</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Next.js</span>
                  <span className="text-[10px] text-[#00E5C3]">Production Web</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Tailwind CSS</span>
                  <span className="text-[10px] text-[#91A5A1]">Modern Styling</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Rust</span>
                  <span className="text-[10px] text-[#91A5A1]">Learning</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Electron</span>
                  <span className="text-[10px] text-[#91A5A1]">Desktop GUI</span>
                </li>
              </ul>
            </div>

            {/* Category 5: AI & Developer Tools */}
            <div className="rounded-xl border border-white/[0.08] bg-[#142122] p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[#00E5C3]">
                <span className="font-bold uppercase">AI &amp; Developer Tools</span>
                <span className="text-[10px] text-[#91A5A1]">Productivity</span>
              </div>
              <ul className="space-y-2 text-[#E8F1EF]">
                <li className="flex justify-between items-center">
                  <span>Google Antigravity IDE</span>
                  <span className="text-[10px] text-[#00E5C3]">Agentic Development</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Visual Studio Code</span>
                  <span className="text-[10px] text-[#91A5A1]">Primary Code Editor</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Ollama</span>
                  <span className="text-[10px] text-[#00E5C3]">Local Model Labs</span>
                </li>
              </ul>
            </div>

            {/* Category 6: Version Control & Deployment */}
            <div className="rounded-xl border border-white/[0.08] bg-[#142122] p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[#35BDF2]">
                <span className="font-bold uppercase">Version Control &amp; Deploy</span>
                <span className="text-[10px] text-[#91A5A1]">DevOps</span>
              </div>
              <ul className="space-y-2 text-[#E8F1EF]">
                <li className="flex justify-between items-center">
                  <span>Git</span>
                  <span className="text-[10px] text-[#00E5C3]">Version Tracking</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>GitHub</span>
                  <span className="text-[10px] text-[#00E5C3]">Repository &amp; Workflows</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Vercel</span>
                  <span className="text-[10px] text-[#00E5C3]">Deployment Platform</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 5. FEATURED PROJECTS & RESEARCH ================= */}
      <section id="projects" className="py-20 border-b border-[#00E5C3]/15 bg-[#0B1112]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5C3]">
                {"// Hands-on Engineering & Security Research"}
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#E8F1EF]">
                Featured Projects &amp; Security Research
              </h2>
              <p className="mt-2 text-sm text-[#91A5A1] max-w-2xl">
                Genuine security assessments, hands-on vulnerability laboratories, and practical toolkits.
              </p>
            </div>
            <a
              href="https://github.com/simplyshahriar"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#00E5C3] hover:underline"
            >
              View GitHub Profile ↗
            </a>
          </div>

          {/* FEATURED CASE STUDY: GoEdu Security Assessment */}
          {projects.length > 0 && (
            <div className="mb-10 rounded-2xl border-2 border-[#00E5C3]/60 bg-[#142122] p-6 sm:p-8 shadow-2xl shadow-[#00E5C3]/10">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-[#00E5C3] px-2.5 py-1 font-mono text-[11px] font-bold text-[#0B1112] uppercase tracking-wider">
                    FEATURED RESEARCH
                  </span>
                  <span className="font-mono text-xs text-[#35BDF2]">
                    PROJECT REF: {projects[0].number}
                  </span>
                </div>
                <span className="rounded-full border border-[#00E5C3]/40 bg-[#00E5C3]/10 px-3 py-0.5 font-mono text-xs text-[#00E5C3]">
                  {projects[0].status}
                </span>
              </div>

              <div className="mt-5 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
                <div className="space-y-4">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#E8F1EF]">
                    {projects[0].title}
                  </h3>
                  
                  <p className="text-sm sm:text-base leading-relaxed text-[#91A5A1]">
                    {projects[0].description}
                  </p>

                  <div className="grid gap-3 pt-2 sm:grid-cols-2 font-mono text-xs">
                    <div className="rounded border border-white/[0.06] bg-[#0B1112] p-3">
                      <span className="text-[#00E5C3] block uppercase text-[10px]">Target</span>
                      <span className="text-[#E8F1EF]">{projects[0].target}</span>
                    </div>
                    <div className="rounded border border-white/[0.06] bg-[#0B1112] p-3">
                      <span className="text-[#35BDF2] block uppercase text-[10px]">Activity</span>
                      <span className="text-[#E8F1EF]">{projects[0].activity}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 font-mono text-[11px] pt-1">
                    {projects[0].tags.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-[#00E5C3]/30 bg-[#00E5C3]/10 px-2 py-0.5 text-[#00E5C3]"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-white/[0.08] bg-[#101A1B] p-5 font-mono text-xs space-y-3">
                  <p className="text-xs font-bold uppercase text-[#00E5C3] border-b border-white/[0.06] pb-2">
                    Methodology &amp; Responsible Disclosure
                  </p>
                  <p className="text-[11px] leading-relaxed text-[#91A5A1]">
                    Conducted structured security scanning followed by manual analysis to investigate web application posture. Observations and supporting evidence were preserved in structured reports.
                  </p>
                  <div className="space-y-1 text-[11px] text-[#91A5A1] pt-1 border-t border-white/[0.06]">
                    <p>✓ Potential security issues identified</p>
                    <p>✓ Security report PDF &amp; scanning archive prepared</p>
                    <p>✓ Responsible communication with platform stakeholders</p>
                  </div>
                  <div className="pt-2">
                    <Link
                      href={`/projects/${projects[0].slug}`}
                      className="inline-flex items-center gap-1.5 rounded border border-[#00E5C3] bg-[#00E5C3] px-4 py-2 font-mono text-xs font-semibold text-[#0B1112] hover:bg-[#35BDF2] hover:border-[#35BDF2] transition-colors"
                    >
                      Read Full Case Study →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other Genuine Projects Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {projects.slice(1).map((p) => (
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

      {/* ================= 6. CERTIFICATIONS & ACHIEVEMENTS (GALLERY + LIGHTBOX) ================= */}
      <CertificationsGallery />

      {/* ================= 7. RESEARCH & LEARNING JOURNEY ================= */}
      <section id="journey" className="py-20 border-b border-[#00E5C3]/15 bg-[#0B1112]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5C3]">
              {"// Continuous Technical Learning"}
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#E8F1EF]">
              Research &amp; Learning Journey
            </h2>
            <p className="mt-2 text-sm text-[#91A5A1]">
              A public record of security research tracks, practical labs, and responsible disclosure milestones.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "WordPress Malware Analysis & Remediation",
                category: "WORDPRESS DEFENSE",
                status: "ACTIVE FOCUS",
                desc: "Analyzing obfuscated PHP web shells, infected core files, malicious cron jobs, and establishing hardened security configurations for WordPress deployments.",
              },
              {
                title: "Penetration Testing",
                category: "PENETRATION TESTING",
                status: "ACTIVE PRACTICE",
                desc: "Practicing web application penetration testing through structured security labs, vulnerability assessment, and hands-on learning across OWASP Top 10 security concepts.",
              },
              {
                title: "System Hacking & Infrastructure Labs",
                category: "SYSTEM SECURITY",
                status: "PRACTICAL LABS",
                desc: "Assessing Linux and Windows system security, analyzing misconfigurations, studying network services, and understanding privilege boundaries in controlled environments.",
              },
              {
                title: "OSINT & Attack Surface Enumeration",
                category: "RECONNAISSANCE",
                status: "ONGOING RESEARCH",
                desc: "Building structured reconnaissance workflows using domain enumeration, passive archive lookups (gau, waybackurls), and JavaScript triage (SecretFinder, jsluice).",
              },
              {
                title: "Responsible Disclosure & Reporting Protocol",
                category: "DISCLOSURE",
                status: "ESTABLISHED",
                desc: "Documenting observations, generating structured technical PDF reports, ensuring strict non-destructive testing boundaries, and conducting coordinated disclosures.",
              },
              {
                title: "AI Tools & Workflow Integration (Claude 101)",
                category: "AI & AUTOMATION",
                status: "COMPLETED",
                desc: "Completing Anthropic's Claude 101 curriculum and integrating modern AI reasoning, automated audit checklists, and script development into technical workflows.",
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


      {/* ================= 8. CONTACT ================= */}
      <section id="contact" className="py-24 bg-[#0B1112] relative overflow-hidden">
        {/* Subtle background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 h-[450px] w-[500px] rounded-full bg-[#00E5C3]/[0.03] blur-[140px]"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00E5C3]/30 bg-[#00E5C3]/[0.08] px-3.5 py-1 font-mono text-xs text-[#00E5C3]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00E5C3] animate-pulse" />
              <span>DIRECT CHANNELS &amp; COMMUNICATIONS</span>
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#E8F1EF]">
              Contact Me
            </h2>
            <p className="mt-3 text-base text-[#91A5A1] leading-relaxed">
              Have a security project, collaboration idea, or professional inquiry? Let&apos;s connect. Open for WordPress security cleanup, penetration testing discussions, and authorized vulnerability assessments.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 items-start">
            
            {/* Direct Connect & Info Cards (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl border border-white/[0.08] bg-[#142122]/90 backdrop-blur-md p-6 sm:p-7 shadow-xl shadow-black/40">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <span className="font-mono text-xs font-bold text-[#E8F1EF] uppercase tracking-wider">
                    Verified Contact Channels
                  </span>
                  <span className="font-mono text-[11px] text-[#00E5C3] flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00E5C3]" />
                    ACTIVE
                  </span>
                </div>

                <div className="mt-5 space-y-3 font-mono text-xs">
                  {/* Email */}
                  <a
                    href="mailto:hasnainshahriar2007@gmail.com"
                    className="group flex items-center justify-between rounded-xl border border-white/[0.05] bg-[#0B1112]/80 p-3.5 transition-all hover:border-[#00E5C3]/50 hover:bg-[#101A1B]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00E5C3]/10 text-[#00E5C3] group-hover:bg-[#00E5C3] group-hover:text-[#0B1112] transition-colors">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#91A5A1] uppercase tracking-wider block">Email</span>
                        <span className="text-[#E8F1EF] group-hover:text-[#00E5C3] transition-colors font-sans text-xs">hasnainshahriar2007@gmail.com</span>
                      </div>
                    </div>
                    <span className="text-[#91A5A1] group-hover:text-[#00E5C3] transition-transform group-hover:translate-x-0.5">→</span>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/simplyshahriar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-white/[0.05] bg-[#0B1112]/80 p-3.5 transition-all hover:border-[#00E5C3]/50 hover:bg-[#101A1B]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00E5C3]/10 text-[#00E5C3] group-hover:bg-[#00E5C3] group-hover:text-[#0B1112] transition-colors">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#91A5A1] uppercase tracking-wider block">GitHub</span>
                        <span className="text-[#E8F1EF] group-hover:text-[#00E5C3] transition-colors font-sans text-xs">github.com/simplyshahriar ↗</span>
                      </div>
                    </div>
                    <span className="text-[#91A5A1] group-hover:text-[#00E5C3] transition-transform group-hover:translate-x-0.5">→</span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/hasnainshahriar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-white/[0.05] bg-[#0B1112]/80 p-3.5 transition-all hover:border-[#00E5C3]/50 hover:bg-[#101A1B]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00E5C3]/10 text-[#00E5C3] group-hover:bg-[#00E5C3] group-hover:text-[#0B1112] transition-colors">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#91A5A1] uppercase tracking-wider block">LinkedIn</span>
                        <span className="text-[#E8F1EF] group-hover:text-[#00E5C3] transition-colors font-sans text-xs">linkedin.com/in/hasnainshahriar ↗</span>
                      </div>
                    </div>
                    <span className="text-[#91A5A1] group-hover:text-[#00E5C3] transition-transform group-hover:translate-x-0.5">→</span>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/simplyshahriar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-white/[0.05] bg-[#0B1112]/80 p-3.5 transition-all hover:border-[#00E5C3]/50 hover:bg-[#101A1B]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00E5C3]/10 text-[#00E5C3] group-hover:bg-[#00E5C3] group-hover:text-[#0B1112] transition-colors">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#91A5A1] uppercase tracking-wider block">Facebook</span>
                        <span className="text-[#E8F1EF] group-hover:text-[#00E5C3] transition-colors font-sans text-xs">facebook.com/simplyshahriar ↗</span>
                      </div>
                    </div>
                    <span className="text-[#91A5A1] group-hover:text-[#00E5C3] transition-transform group-hover:translate-x-0.5">→</span>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/simplyshahriar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-white/[0.05] bg-[#0B1112]/80 p-3.5 transition-all hover:border-[#00E5C3]/50 hover:bg-[#101A1B]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00E5C3]/10 text-[#00E5C3] group-hover:bg-[#00E5C3] group-hover:text-[#0B1112] transition-colors">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#91A5A1] uppercase tracking-wider block">Instagram</span>
                        <span className="text-[#E8F1EF] group-hover:text-[#00E5C3] transition-colors font-sans text-xs">@simplyshahriar ↗</span>
                      </div>
                    </div>
                    <span className="text-[#91A5A1] group-hover:text-[#00E5C3] transition-transform group-hover:translate-x-0.5">→</span>
                  </a>
                </div>
              </div>

              {/* Ethical Testing Pledge */}
              <div className="rounded-2xl border border-[#00E5C3]/20 bg-[#142122]/90 backdrop-blur-md p-6 font-mono text-xs text-[#91A5A1] space-y-2.5 shadow-lg">
                <div className="flex items-center gap-2 text-[#00E5C3] font-bold">
                  <span className="h-2 w-2 rounded-full bg-[#00E5C3]" />
                  <span>ETHICAL TESTING &amp; SAFE HARBOR PLEDGE</span>
                </div>
                <p className="leading-relaxed text-[11px]">
                  All testing conducted during my learning and research is strictly authorized, bounded by platform terms or isolated virtual environments. I adhere strictly to responsible disclosure principles and never perform uncoordinated intrusive testing.
                </p>
              </div>
            </div>

            {/* Functional Contact Form Card (7 Cols) */}
            <div className="lg:col-span-7 rounded-2xl border border-white/[0.08] bg-[#142122]/95 backdrop-blur-md p-6 sm:p-9 shadow-2xl shadow-black/50">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#E8F1EF]">
                    Send a Secure Message
                  </h3>
                  <p className="font-mono text-[11px] text-[#91A5A1] mt-0.5">
                    End-to-end encrypted dispatch with rate limiting
                  </p>
                </div>
                <span className="hidden sm:inline-block rounded border border-[#00E5C3]/30 bg-[#00E5C3]/10 px-2.5 py-1 font-mono text-[10px] text-[#00E5C3]">
                  HTTP POST /api/contact
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
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

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-[#91A5A1] uppercase mb-1.5 font-semibold text-[10px] tracking-wider">
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
                      className="w-full rounded-lg border border-white/[0.1] bg-[#0B1112] px-4 py-3 text-[#E8F1EF] outline-none placeholder:text-[#91A5A1]/40 focus:border-[#00E5C3] focus:ring-1 focus:ring-[#00E5C3] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[#91A5A1] uppercase mb-1.5 font-semibold text-[10px] tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      maxLength={254}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-white/[0.1] bg-[#0B1112] px-4 py-3 text-[#E8F1EF] outline-none placeholder:text-[#91A5A1]/40 focus:border-[#00E5C3] focus:ring-1 focus:ring-[#00E5C3] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#91A5A1] uppercase mb-1.5 font-semibold text-[10px] tracking-wider">
                    Topic / Subject
                  </label>
                  <select
                    value={form.topic}
                    onChange={(e) => setForm({ ...form, topic: e.target.value })}
                    className="w-full rounded-lg border border-white/[0.1] bg-[#0B1112] px-4 py-3 text-[#E8F1EF] outline-none focus:border-[#00E5C3] focus:ring-1 focus:ring-[#00E5C3] transition-all"
                  >
                    <option value="WordPress Security & Malware Removal">WordPress Malware Removal &amp; Hardening</option>
                    <option value="Penetration Testing Inquiry">Web Application Penetration Testing</option>
                    <option value="System Security Assessment">System Security &amp; Linux/Windows Labs</option>
                    <option value="OSINT & Reconnaissance">OSINT &amp; Reconnaissance Analysis</option>
                    <option value="Security Research & Collaboration">Security Research &amp; Responsible Disclosure</option>
                    <option value="General Conversation">General Conversation / Networking</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#91A5A1] uppercase mb-1.5 font-semibold text-[10px] tracking-wider">
                    Message
                  </label>
                  <textarea
                    required
                    minLength={10}
                    maxLength={3000}
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your project, security inquiry, or request in detail..."
                    className="w-full rounded-lg border border-white/[0.1] bg-[#0B1112] px-4 py-3 text-[#E8F1EF] outline-none placeholder:text-[#91A5A1]/40 focus:border-[#00E5C3] focus:ring-1 focus:ring-[#00E5C3] transition-all leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-lg border border-[#00E5C3] bg-[#00E5C3] py-3.5 text-xs font-semibold text-[#0B1112] shadow-[0_0_20px_rgba(0,229,195,0.25)] transition-all hover:bg-[#35BDF2] hover:border-[#35BDF2] hover:shadow-[0_0_25px_rgba(53,189,242,0.35)] disabled:opacity-50 cursor-pointer"
                >
                  {submitting ? "Transmitting Message..." : "Send Message →"}
                </button>

                {status && (
                  <div
                    role="status"
                    className="rounded-lg border border-[#00E5C3]/40 bg-[#00E5C3]/10 p-3.5 text-xs text-[#00E5C3]"
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
                Cybersecurity Researcher | Penetration Tester | WordPress Security. Ethical hacking on authorized systems.
              </p>
              <p className="font-mono text-[11px] text-[#00E5C3]">
                Focus: WordPress Defense · Pentesting · OSINT
              </p>
            </div>

            <div className="space-y-2 font-mono text-xs">
              <p className="font-bold uppercase tracking-wider text-[#E8F1EF]">Navigation</p>
              <ul className="space-y-1.5">
                <li><a href="#about" className="hover:text-[#00E5C3]">About Me</a></li>
                <li><a href="#expertise" className="hover:text-[#00E5C3]">Areas of Expertise</a></li>
                <li><a href="#tools" className="hover:text-[#00E5C3]">Tools &amp; Tech</a></li>
                <li><a href="#projects" className="hover:text-[#00E5C3]">Featured Projects</a></li>
                <li><a href="#certifications" className="hover:text-[#00E5C3]">Certifications</a></li>
                <li><a href="#journey" className="hover:text-[#00E5C3]">Research Journey</a></li>
                <li><a href="#contact" className="hover:text-[#00E5C3]">Contact</a></li>
              </ul>
            </div>

            <div className="space-y-2 font-mono text-xs">
              <p className="font-bold uppercase tracking-wider text-[#E8F1EF]">Core Specializations</p>
              <ul className="space-y-1.5">
                <li><span className="text-[#00E5C3]">WordPress Malware Removal</span></li>
                <li><span>Penetration Testing</span></li>
                <li><span>System Hacking (Authorized)</span></li>
                <li><span>OSINT &amp; Reconnaissance</span></li>
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
              <span>Ethical Cybersecurity · Responsible Disclosure</span>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
