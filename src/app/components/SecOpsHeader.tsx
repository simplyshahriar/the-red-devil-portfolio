"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Expertise", href: "#expertise" },
  { label: "Case Studies", href: "#cases" },
  { label: "Contact", href: "#contact" },
];

export default function SecOpsHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#00f2fe]/15 bg-[#081010]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand mark */}
        <Link
          href="#overview"
          className="group flex items-center gap-2 font-mono text-sm sm:text-base font-bold tracking-wider text-[#e5f2f2] transition-colors hover:text-[#00f2fe]"
        >
          <span className="text-[#00f2fe] font-extrabold">&gt;_</span>
          <span>SEC_OPS</span>
          <span className="inline-block h-3.5 w-1.5 bg-[#00f2fe] animate-pulse" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-[0.2em] text-[#8fa3a3]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-[#00f2fe] hover:drop-shadow-[0_0_8px_rgba(0,242,254,0.6)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Header Right Status Pill & CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-2 rounded border border-[#00ff88]/30 bg-[#00ff88]/[0.06] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[#00ff88]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00ff88] animate-pulse" />
            <span>SYS_STATUS: SECURE</span>
          </div>

          <Link
            href="#contact"
            className="group relative rounded border border-[#00f2fe]/40 bg-[#00f2fe]/10 px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.16em] text-[#00f2fe] transition-all hover:bg-[#00f2fe] hover:text-[#081010] hover:shadow-[0_0_16px_rgba(0,242,254,0.4)]"
          >
            <span>[ENCRYPTED CONTACT]</span>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="flex h-9 w-9 items-center justify-center rounded border border-[#00f2fe]/20 text-[#00f2fe] md:hidden focus:outline-none"
        >
          <span className="font-mono text-sm">{mobileMenuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[#00f2fe]/15 bg-[#081010]/95 px-4 py-4 md:hidden backdrop-blur-lg">
          <div className="flex flex-col space-y-3 font-mono text-xs uppercase tracking-[0.2em] text-[#8fa3a3]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 transition-colors hover:text-[#00f2fe]"
              >
                &gt; {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#00ff88]">● SYS_STATUS: SECURE</span>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded border border-[#00f2fe]/40 bg-[#00f2fe]/10 px-3 py-1 font-mono text-[10px] text-[#00f2fe]"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
