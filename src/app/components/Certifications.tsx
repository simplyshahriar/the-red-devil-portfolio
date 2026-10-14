"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

type Certification = {
  id: string;
  title: string;
  issuer: string;
  issuedDate: string;
  credentialUrl?: string;
  image: string;
  skills: string[];
};

const certifications: Certification[] = [
  {
    id: "cisco-intro-cybersecurity",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    issuedDate: "October 2026",
    credentialUrl:
      "https://www.credly.com/users/hasnain-shahriar/badges",
    image: "/images/certifications/cisco-intro-cybersecurity.png",
    skills: [
      "Cyber Threat Landscape",
      "Online Safety",
      "Threat Protection",
      "Career Paths in Cybersecurity",
    ],
  },
];

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

export default function Certifications() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="certifications"
      className="scroll-mt-20 border-b border-white/[0.06] bg-[#0A0C10]"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#858B99]">
              Verified Credentials
            </p>
            <h2 className="mt-3 text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.035em] text-[#E7E9EE] sm:text-5xl lg:text-6xl">
              Certifications
            </h2>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#545A66]">
            {certifications.length} Verified
          </span>
        </div>

        <p className="-mt-6 mb-12 max-w-2xl text-base leading-7 text-[#858B99]">
          Formal coursework and credentials that complement my independent
          research and hands-on labs.
        </p>

        <div className="grid gap-6">
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.id}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                delay: reduceMotion ? 0 : index * 0.1,
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#12151A] transition hover:border-[#7B8FE8]/35"
            >
              <div className="grid gap-0 lg:grid-cols-[1.4fr_1fr]">
                <div className="flex flex-col p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#98A7ED]">
                        {cert.issuer}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#E7E9EE] sm:text-3xl">
                        {cert.title}
                      </h3>
                    </div>

                    <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-[#6BCBA4]/30 bg-[#6BCBA4]/[0.08] px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-[#A8D4C0]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#6BCBA4]" />
                      Verified
                    </span>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] text-[#545A66]">
                    <span>
                      <span className="text-[#858B99]">Issued</span> ·{" "}
                      {cert.issuedDate}
                    </span>
                    <span>
                      <span className="text-[#858B99]">Level</span> · Student
                      Credential
                    </span>
                  </div>

                  <div className="mt-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#545A66]">
                      Skills Covered
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-[#858B99]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {cert.credentialUrl && (
                    <div className="mt-6 border-t border-white/[0.06] pt-5">
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#98A7ED] transition hover:text-white"
                      >
                        Verify on Credly
                        <ArrowIcon className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    </div>
                  )}
                </div>

                <div className="relative min-h-[260px] border-t border-white/[0.06] bg-[#0A0C10] lg:border-l lg:border-t-0">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "radial-gradient(rgba(123,143,232,0.15) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />

                  <div className="relative flex h-full items-center justify-center p-6 sm:p-8">
                    <div className="relative w-full max-w-sm">
                      <div className="absolute -inset-3 rounded-lg bg-[#7B8FE8]/[0.06] blur-2xl" />

                      <div className="relative overflow-hidden rounded-lg border border-white/[0.08] bg-white shadow-2xl shadow-black/40">
                        <Image
                          src={cert.image}
                          alt={`${cert.title} — ${cert.issuer} certificate`}
                          width={1200}
                          height={900}
                          className="h-auto w-full object-contain"
                          sizes="(max-width: 768px) 90vw, 400px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}