"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

type Item = {
  id: string;
  label: string;
  hint?: string;
  action: () => void;
  group: string;
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function go(hash: string) {
    setOpen(false);
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      router.push(hash);
    }
  }

  const items: Item[] = [
    { id: "home", label: "Go to Intro", hint: "Top", group: "Navigate", action: () => go("#home") },
    { id: "about", label: "Go to About", group: "Navigate", action: () => go("#about") },
    { id: "expertise", label: "Go to Expertise", group: "Navigate", action: () => go("#expertise") },
    { id: "projects", label: "Go to Projects", group: "Navigate", action: () => go("#projects") },
    { id: "experience", label: "Go to Experience", group: "Navigate", action: () => go("#experience") },
    { id: "contact", label: "Go to Contact", group: "Navigate", action: () => go("#contact") },
    {
      id: "github",
      label: "Open GitHub",
      hint: "@simplyshahriar",
      group: "Links",
      action: () => {
        window.open("https://github.com/simplyshahriar", "_blank");
        setOpen(false);
      },
    },
    {
      id: "linkedin",
      label: "Open LinkedIn",
      group: "Links",
      action: () => {
        window.open("https://www.linkedin.com/in/hasnainshahriar/", "_blank");
        setOpen(false);
      },
    },
    {
      id: "email",
      label: "Copy Email Address",
      hint: "hasnainshahriar2007@gmail.com",
      group: "Actions",
      action: () => {
        navigator.clipboard.writeText("hasnainshahriar2007@gmail.com");
        setOpen(false);
      },
    },
    {
      id: "print",
      label: "Print this page",
      group: "Actions",
      action: () => {
        window.print();
        setOpen(false);
      },
    },
  ];

  const groups = Array.from(new Set(items.map((i) => i.group)));

  return (
    <>
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open command palette"
        className="fixed bottom-6 left-6 z-40 hidden items-center gap-2 rounded-xl border border-white/[0.09] bg-[#12100E]/90 px-3.5 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#8E887B] backdrop-blur-md transition hover:border-[#D97757]/40 hover:text-[#F0EBE0] sm:flex"
      >
        <span className="text-[#5A554C]">⌘</span>
        <span>K</span>
        <span className="ml-1 hidden text-[#5A554C] md:inline">· Menu</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] flex items-start justify-center bg-[#0A0908]/70 px-4 pt-[15vh] backdrop-blur-md"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl"
            >
              <Command
                label="Command menu"
                className="overflow-hidden rounded-2xl border border-white/[0.09] bg-[#12100E] shadow-2xl shadow-black/50"
              >
                <div className="flex items-center gap-3 border-b border-white/[0.07] px-4 py-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="text-[#5A554C]"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  <Command.Input
                    autoFocus
                    placeholder="Search actions, sections, links..."
                    className="w-full bg-transparent text-sm text-[#F0EBE0] outline-none placeholder:text-[#5A554C]"
                  />
                  <kbd className="rounded border border-white/10 bg-white/[0.03] px-1.5 py-0.5 font-mono text-[10px] text-[#5A554C]">
                    ESC
                  </kbd>
                </div>

                <Command.List className="max-h-[400px] overflow-y-auto p-2">
                  <Command.Empty className="px-3 py-6 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-[#5A554C]">
                    No results
                  </Command.Empty>

                  {groups.map((group) => (
                    <Command.Group
                      key={group}
                      heading={group}
                      className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pb-1.5 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.2em] [&_[cmdk-group-heading]]:text-[#5A554C]"
                    >
                      {items
                        .filter((i) => i.group === group)
                        .map((item) => (
                          <Command.Item
                            key={item.id}
                            onSelect={item.action}
                            className="flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-[#C9C2B4] transition data-[selected=true]:bg-white/[0.04] data-[selected=true]:text-white"
                          >
                            <span>{item.label}</span>
                            {item.hint && (
                              <span className="font-mono text-[10px] text-[#5A554C]">
                                {item.hint}
                              </span>
                            )}
                          </Command.Item>
                        ))}
                    </Command.Group>
                  ))}
                </Command.List>

                <div className="flex items-center justify-between border-t border-white/[0.07] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#5A554C]">
                  <span>↑↓ navigate</span>
                  <span>↵ select</span>
                </div>
              </Command>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}