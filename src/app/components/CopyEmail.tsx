"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function CopyEmail({
  email,
  className = "",
}: {
  email: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: open mailto
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy email ${email}`}
      className={`group flex items-center justify-between rounded-xl border border-white/[0.07] bg-[#12100E] px-4 py-3.5 text-left transition hover:border-[#D97757]/40 hover:bg-[#1A1714] ${className}`}
    >
      <span className="flex items-center gap-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5A554C]">
          Email
        </span>
        <span className="text-sm text-[#C9C2B4] transition group-hover:text-white">
          {email}
        </span>
      </span>

      <span className="relative flex h-4 w-4 items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.svg
              key="check"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.15 }}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7EA88A"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m5 13 4 4L19 7" />
            </motion.svg>
          ) : (
            <motion.svg
              key="copy"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.15 }}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#5A554C] transition group-hover:text-[#E89B7B]"
              aria-hidden="true"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </motion.svg>
          )}
        </AnimatePresence>
      </span>

      {/* Toast */}
      <AnimatePresence>
        {copied && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-[#7EA88A]/30 bg-[#0A0908] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#7EA88A]"
          >
            Copied
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}