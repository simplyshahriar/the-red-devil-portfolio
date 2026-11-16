"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Specializations", href: "#specializations" },
  { label: "Tech Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Notes", href: "#notes" },
  { label: "Contact", href: "#contact" },
];

export default function SecOpsHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#00E5C3]/15 bg-[#0B1112]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Mark */}
        <Link
          href="#hero"
          className="group flex items-center gap-2.5 font-display text-base font-bold tracking-tight text-[#E8F1EF] transition-colors hover:text-[#00E5C3]"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded border border-[#00E5C3]/30 bg-[#00E5C3]/10 font-mono text-xs text-[#00E5C3]">
            HS
          </span>
          <span>Hasnain Shahriar</span>
          <span className="hidden sm:inline-block rounded bg-[#00E5C3]/10 px-2 py-0.5 font-mono text-[10px] text-[#00E5C3]">
            SEC_RESEARCH
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 font-mono text-xs uppercase tracking-wider text-[#91A5A1]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-[#00E5C3]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Action */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/simplyshahriar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded border border-white/[0.08] bg-[#142122] px-3 py-1.5 font-mono text-xs text-[#91A5A1] transition-colors hover:border-[#00E5C3]/40 hover:text-[#E8F1EF]"
          >
            <span>GitHub</span>
            <span className="text-[10px]">↗</span>
          </a>

          <Link
            href="#contact"
            className="rounded border border-[#00E5C3] bg-[#00E5C3] px-3.5 py-1.5 font-mono text-xs font-semibold text-[#0B1112] shadow-[0_0_15px_rgba(0,229,195,0.25)] transition-all hover:bg-[#35BDF2] hover:border-[#35BDF2]"
          >
            Contact Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
          className="flex h-9 w-9 items-center justify-center rounded border border-[#00E5C3]/25 text-[#00E5C3] lg:hidden focus:outline-none"
        >
          <span className="font-mono text-sm">{mobileMenuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[#00E5C3]/15 bg-[#0B1112]/98 px-4 py-4 lg:hidden backdrop-blur-xl">
          <div className="flex flex-col space-y-3 font-mono text-xs uppercase tracking-wider text-[#91A5A1]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 transition-colors hover:text-[#00E5C3]"
              >
                &gt; {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
              <a
                href="https://github.com/simplyshahriar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#00E5C3]"
              >
                GitHub Profile ↗
              </a>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded bg-[#00E5C3] px-3 py-1 text-xs font-semibold text-[#0B1112]"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
