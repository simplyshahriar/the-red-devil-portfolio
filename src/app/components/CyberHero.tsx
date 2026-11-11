"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

interface CyberHeroProps {
  /** Text on left side of character; defaults to "RED" */
  heroTitleLeft?: string;
  /** Text on right side of character; defaults to "DEVIL" */
  heroTitleRight?: string;
  /** Hero image path; defaults to "/images/hero-character.png" */
  imageSrc?: string;
  /** Bottom bar version text; defaults to "V.2026" */
  versionText?: string;
}

const navItems = [
  { id: "about", label: "ABOUT", href: "#about" },
  { id: "portfolio", label: "PORTFOLIO", href: "#projects" },
  { id: "journal", label: "JOURNAL", href: "#experience" },
  { id: "services", label: "SERVICES", href: "#expertise" },
  { id: "contact", label: "CONTACT", href: "#contact" },
];

export default function CyberHero({
  heroTitleLeft = "RED",
  heroTitleRight = "DEVIL",
  imageSrc = "/images/hero-character.png",
  versionText = "V.2026",
}: CyberHeroProps) {
  const [activeNav, setActiveNav] = useState("portfolio");
  const [activeDot, setActiveDot] = useState(0);

  // Smooth mouse parallax physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const charParallaxX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const charParallaxY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);
  const textParallaxX = useTransform(smoothX, [-0.5, 0.5], [10, -10]);
  const circleParallaxX = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    mouseX.set((clientX - left) / width - 0.5);
    mouseY.set((clientY - top) / height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen h-[100dvh] bg-[#121212] text-white overflow-hidden flex flex-col justify-between select-none"
    >
      {/* ================= 1. SUBTLE DARK GRID PATTERN ================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12] z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(circle at 50% 50%, black 45%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 50%, black 45%, transparent 85%)",
        }}
      />

      {/* Atmospheric depth vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#121212]/70 via-transparent to-[#121212]/90 z-0"
      />

      {/* ================= 2. FLOATING GHOST LETTERS ================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden font-black select-none z-[1]"
      >
        <span className="absolute top-[16%] left-[8%] text-[10rem] sm:text-[14rem] lg:text-[19rem] text-white/[0.03] leading-none tracking-tighter">
          R
        </span>
        <span className="absolute top-[7%] right-[12%] text-[9rem] sm:text-[13rem] lg:text-[17rem] text-white/[0.03] leading-none tracking-tighter">
          E
        </span>
        <span className="absolute bottom-[12%] left-[10%] text-[10rem] sm:text-[14rem] lg:text-[19rem] text-white/[0.03] leading-none tracking-tighter">
          D
        </span>
      </div>

      {/* ================= 3. GLITCHY HORIZONTAL LINES ================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2] overflow-hidden"
      >
        {/* Upper Orange Glitch Line */}
        <motion.div
          animate={{ x: [-8, 8, -8], opacity: [0.65, 0.95, 0.65] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[26%] left-[18%] sm:left-[26%] w-28 sm:w-48 h-[2px] bg-[#FF5C00] shadow-[0_0_10px_#FF5C00]"
        />

        {/* Upper Blue Glitch Line */}
        <motion.div
          animate={{ x: [6, -6, 6], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[32%] right-[20%] sm:right-[28%] w-24 sm:w-40 h-[1.5px] bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]"
        />

        {/* Mid Orange Glitch Line */}
        <motion.div
          animate={{ x: [-12, 12, -12], opacity: [0.55, 0.9, 0.55] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[50%] left-[12%] sm:left-[20%] w-36 sm:w-64 h-[2px] bg-[#FF5C00]/80 shadow-[0_0_12px_#FF5C00]"
        />

        {/* Mid Blue Glitch Line */}
        <motion.div
          animate={{ x: [8, -8, 8], opacity: [0.45, 0.85, 0.45] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[56%] right-[14%] sm:right-[22%] w-28 sm:w-52 h-[1.5px] bg-[#00F0FF]/80 shadow-[0_0_10px_#00F0FF]"
        />

        {/* Lower Orange Glitch Line */}
        <motion.div
          animate={{ x: [-10, 10, -10], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[24%] right-[24%] w-28 sm:w-48 h-[2px] bg-[#FF5C00]/80 shadow-[0_0_10px_#FF5C00]"
        />
      </div>

      {/* ================= 4. TOP BAR ================= */}
      <header className="relative z-50 w-full px-6 sm:px-10 lg:px-14 pt-6 sm:pt-8 flex items-center justify-between">
        {/* Left: Logo "THE RED DEVIL" */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          {/* Cyber square badge */}
          <div className="relative flex items-center justify-center w-8 h-8 bg-[#FF5C00]/15 border border-[#FF5C00]/50 rounded-sm group-hover:border-[#FF5C00] group-hover:shadow-[0_0_14px_rgba(255,92,0,0.6)] transition-all">
            <span className="font-mono text-xs font-black tracking-widest text-[#FF5C00]">
              RD
            </span>
            <span className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-[#FF5C00]" />
            <span className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-[#FF5C00]" />
          </div>

          <div className="flex flex-col">
            <span className="font-black text-lg sm:text-xl tracking-[0.2em] uppercase text-white group-hover:text-[#FF5C00] group-hover:drop-shadow-[0_0_10px_rgba(255,92,0,0.7)] transition-all leading-none">
              THE RED DEVIL
            </span>
            <span className="font-mono text-[9px] tracking-[0.35em] text-[#A0A0A0] uppercase mt-1">
              CYBER_PORTFOLIO
            </span>
          </div>
        </motion.div>

        {/* Right: Pill "CONTACT" & Circular "EN" Toggle */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="flex items-center gap-3"
        >
          {/* Pill Shaped CONTACT Button with Orange Accent */}
          <a
            href="#contact"
            className="relative group px-6 py-2 rounded-full border border-[#FF5C00]/40 bg-[#FF5C00] backdrop-blur-md text-xs sm:text-[13px] font-mono font-bold uppercase tracking-[0.18em] text-black hover:bg-[#FF7A2E] hover:border-[#FF7A2E] hover:shadow-[0_0_24px_#FF5C00] transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              CONTACT
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
            </span>
          </a>

          {/* Circular EN Toggle with Orange Hover Glow */}
          <button
            type="button"
            aria-label="Language Toggle"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 bg-white/[0.04] backdrop-blur-md flex items-center justify-center font-mono text-xs font-bold uppercase tracking-wider text-[#A0A0A0] hover:text-[#FF5C00] hover:border-[#FF5C00] hover:shadow-[0_0_20px_#FF5C00] transition-all duration-300"
          >
            <span>EN</span>
          </button>
        </motion.div>
      </header>

      {/* ================= 5. LEFT SIDEBAR (VERTICAL NAV) ================= */}
      <motion.nav
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="hidden md:flex fixed left-6 lg:left-10 top-1/2 -translate-y-1/2 z-40 flex-col items-start gap-6"
      >
        {navItems.map((item) => {
          const isActive = activeNav === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setActiveNav(item.id)}
              className="group relative flex items-center gap-3 py-1 transition-transform duration-200 hover:translate-x-1"
            >
              {/* Active indicator dot */}
              <span
                className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-[#FF5C00] shadow-[0_0_10px_#FF5C00] scale-100"
                    : "bg-white/20 scale-75 group-hover:bg-white/50 group-hover:scale-100"
                }`}
              />

              <span
                className={`font-mono text-[11px] font-bold tracking-[0.22em] transition-all duration-300 ${
                  isActive
                    ? "text-[#FF5C00]"
                    : "text-[#A0A0A0] group-hover:text-white"
                }`}
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </motion.nav>

      {/* ================= 6. RIGHT SIDEBAR (VERTICAL PAGINATION DOTS) ================= */}
      <motion.aside
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="hidden md:flex fixed right-6 lg:right-9 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-5"
      >
        {[0, 1, 2].map((dotIndex) => {
          const isActive = activeDot === dotIndex;
          return (
            <button
              key={dotIndex}
              onClick={() => setActiveDot(dotIndex)}
              aria-label={`Go to slide ${dotIndex + 1}`}
              className="relative p-1.5 focus:outline-none group"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-2.5 h-2.5 bg-[#FF5C00] shadow-[0_0_14px_#FF5C00] ring-4 ring-[#FF5C00]/25"
                    : "w-2 h-2 bg-white/30 group-hover:bg-[#FF5C00]/80 group-hover:shadow-[0_0_8px_#FF5C00]"
                }`}
              />
            </button>
          );
        })}
      </motion.aside>

      {/* ================= 7. CENTER STAGE ================= */}
      <div className="relative flex-1 flex items-center justify-center w-full px-4 sm:px-8 z-20 overflow-visible">
        {/* A. MASSIVE GLOWING ORANGE CIRCLE (Lowest Center Stage: z-10) */}
        <motion.div
          style={{ x: circleParallaxX }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute z-10 w-[290px] h-[290px] sm:w-[440px] sm:h-[440px] md:w-[520px] md:h-[520px] lg:w-[600px] lg:h-[600px] rounded-full bg-[#FF5C00] shadow-[0_0_90px_rgba(255,92,0,0.5),0_0_180px_rgba(255,92,0,0.25)] pointer-events-none"
        >
          {/* Subtle radial sheen */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.25),transparent_60%)]" />
        </motion.div>

        {/* B. HUGE TYPOGRAPHY: "RED DEVIL" (Middle Layer: z-20, Below image, Above orange circle) */}
        <motion.div
          style={{ x: textParallaxX }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="absolute z-20 inset-0 flex items-center justify-center pointer-events-none select-none px-2 sm:px-6"
        >
          <div className="w-full flex items-center justify-between sm:justify-around max-w-[1550px]">
            {/* Left Word: RED */}
            <h1 className="font-sans font-black tracking-tight uppercase text-white text-[18vw] sm:text-[15vw] md:text-[13vw] lg:text-[11vw] xl:text-[12rem] leading-none drop-shadow-[0_12px_32px_rgba(0,0,0,0.95)]">
              {heroTitleLeft}
            </h1>

            {/* Right Word: DEVIL */}
            <h1 className="font-sans font-black tracking-tight uppercase text-white text-[18vw] sm:text-[15vw] md:text-[13vw] lg:text-[11vw] xl:text-[12rem] leading-none drop-shadow-[0_12px_32px_rgba(0,0,0,0.95)]">
              {heroTitleRight}
            </h1>
          </div>
        </motion.div>

        {/* C. HERO CHARACTER IMAGE (Top Layer: z-30, Overlapping circle and intersecting text) */}
        <motion.div
          style={{ x: charParallaxX, y: charParallaxY }}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-30 flex items-center justify-center pointer-events-auto"
        >
          {/* Continuous Floating Motion Animation (10px up and down) */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-[300px] h-[370px] sm:w-[400px] sm:h-[490px] md:w-[480px] md:h-[570px] lg:w-[540px] lg:h-[640px]"
          >
            <Image
              src={imageSrc}
              alt="Cyberpunk Hero Character"
              fill
              priority
              sizes="(max-width: 640px) 300px, (max-width: 1024px) 480px, 540px"
              className="object-contain object-bottom drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)] filter"
            />

            {/* Bottom smooth fade to ground the character */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>

      {/* ================= 8. BOTTOM BAR ================= */}
      <footer className="relative z-50 w-full px-6 sm:px-10 lg:px-14 pb-6 sm:pb-8 flex items-center justify-between text-xs sm:text-sm font-mono text-[#A0A0A0]">
        {/* Left: Text "V.2026" & Status Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex items-center gap-3 sm:gap-4"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white/[0.04] border border-white/10 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
            <span className="w-2 h-2 rounded-full bg-[#FF5C00] animate-ping" />
            <span className="font-bold tracking-widest text-white uppercase text-[11px]">
              {versionText}
            </span>
          </div>

          <span className="hidden sm:inline-block tracking-widest text-[11px] text-[#A0A0A0] uppercase">
            {"// SYSTEM_ONLINE"}
          </span>
        </motion.div>

        {/* Mobile Center Hint */}
        <div className="md:hidden flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00]" />
          <span className="text-[10px] uppercase tracking-widest text-[#A0A0A0]">
            EXPLORE
          </span>
        </div>

        {/* Right: Social Icons with Orange Hover Glow Effect */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex items-center gap-4 sm:gap-6"
        >
          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="group relative p-1.5 text-[#A0A0A0] hover:text-[#FF5C00] transition-colors"
          >
            <svg
              className="w-5 h-5 fill-current transition-transform duration-200 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_#FF5C00]"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#FF5C00] opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_6px_#FF5C00]" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="group relative p-1.5 text-[#A0A0A0] hover:text-[#FF5C00] transition-colors"
          >
            <svg
              className="w-5 h-5 fill-current transition-transform duration-200 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_#FF5C00]"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#FF5C00] opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_6px_#FF5C00]" />
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
            className="group relative p-1.5 text-[#A0A0A0] hover:text-[#FF5C00] transition-colors"
          >
            <svg
              className="w-5 h-5 fill-current transition-transform duration-200 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_#FF5C00]"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
            </svg>
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#FF5C00] opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_6px_#FF5C00]" />
          </a>
        </motion.div>
      </footer>
    </section>
  );
}
