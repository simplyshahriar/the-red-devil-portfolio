"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function SecOpsHero() {
  return (
    <section
      id="overview"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[#00f2fe]/15 bg-[#081010] terminal-grid overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] rounded-full bg-[#00f2fe]/[0.05] blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-center">
          
          {/* Left Column: Identity & Mission */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded border border-[#00f2fe]/30 bg-[#00f2fe]/[0.06] px-3 py-1 font-mono text-xs uppercase tracking-widest text-[#00f2fe]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00f2fe] animate-ping" />
              <span>OFFENSIVE SECURITY & RESEARCH</span>
            </div>

            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-[#e5f2f2]">
                HASNAIN
                <br />
                <span className="text-[#00f2fe] drop-shadow-[0_0_20px_rgba(0,242,254,0.4)]">
                  SHAHRIAR
                </span>
              </h1>
              <p className="mt-3 font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#6c8585]">
                {"// ETHICAL HACKER & PENETRATION TESTER"}
              </p>
            </div>

            <p className="max-w-xl text-sm sm:text-base leading-relaxed text-[#8fa3a3]">
              Specializing in authorized web application security assessments, attack-surface mapping, vulnerability research, and systems reverse engineering. Combining defensive architecture intuition with offensive methodology.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#cases"
                className="group relative inline-flex items-center justify-center rounded border border-[#00f2fe] bg-[#00f2fe] px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-[#081010] shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all hover:bg-[#4facfe] hover:border-[#4facfe]"
              >
                <span>[EXPLORE CASE STUDIES]</span>
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded border border-[#00f2fe]/40 bg-[#111b1b] px-6 py-3 font-mono text-xs uppercase tracking-wider text-[#00f2fe] transition-all hover:bg-[#162424] hover:border-[#00f2fe]"
              >
                <span>&gt; SECURE CONTACT</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Live Terminal Status Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full rounded-lg border border-[#00f2fe]/25 bg-[#0d1515] p-1 shadow-2xl shadow-black/80"
          >
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between border-b border-[#00f2fe]/15 bg-[#081010] px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff3366]/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffb300]/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#00ff88]/80" />
              </div>
              <span className="font-mono text-[11px] text-[#6c8585]">
                root@sec-ops:~# terminal_session
              </span>
              <span className="font-mono text-[10px] text-[#00ff88] uppercase">
                ACTIVE
              </span>
            </div>

            {/* Terminal Console Output */}
            <div className="space-y-3 p-4 sm:p-5 font-mono text-xs leading-relaxed text-[#8fa3a3]">
              <div className="flex items-center gap-2 text-[#e5f2f2]">
                <span className="text-[#00f2fe] font-bold">root@sec-ops:~#</span>
                <span className="text-[#00f2fe]">status --online --verbose</span>
              </div>

              <div className="rounded border border-white/[0.06] bg-[#081010]/80 p-3 space-y-1.5 text-[11px]">
                <div className="flex justify-between">
                  <span className="text-[#6c8585]">OPERATOR:</span>
                  <span className="text-[#e5f2f2]">Hasnain Shahriar (simplyshahriar)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6c8585]">CLEARANCE:</span>
                  <span className="text-[#00ff88]">AUTHORIZED_RESEARCHER</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6c8585]">ACTIVE FOCUS:</span>
                  <span className="text-[#00f2fe]">WebSec · Pentest · OSINT · Ghidra</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6c8585]">LOCATION:</span>
                  <span className="text-[#e5f2f2]">Bangladesh (Remote Active)</span>
                </div>
              </div>

              <div className="space-y-1 text-[11px]">
                <div className="text-[#6c8585]">
                  [00:00:01] <span className="text-[#00ff88]">INIT</span> Core security environment verified.
                </div>
                <div className="text-[#6c8585]">
                  [00:00:02] <span className="text-[#00f2fe]">ENCRYPTION</span> TLS 1.3 transport readiness: OK.
                </div>
                <div className="text-[#6c8585]">
                  [00:00:03] <span className="text-[#ffb300]">AUDIT_LOG</span> Coordinated disclosure protocol: ENGAGED.
                </div>
              </div>

              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-[#6c8585]">
                <span>MEM_USAGE: 42.8%</span>
                <span>SHA-256: 7f83b1657ff1...</span>
                <span className="text-[#00ff88]">READY</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
