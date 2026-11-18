"use client";

import { useState } from "react";
import Link from "next/link";

type CaseStudy = {
  id: string;
  title: string;
  category: "CLOUD_INFRA" | "WEB_API" | "RED_TEAM";
  categoryLabel: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM";
  cvss: string;
  tags: string[];
  description: string;
  methodology: string;
  status: string;
  slug?: string;
};

const SAMPLE_CASE_STUDIES: CaseStudy[] = [
  {
    id: "SEC-CS-001",
    title: "Project Cerberus: Cloud Infrastructure Red Team",
    category: "CLOUD_INFRA",
    categoryLabel: "CLOUD INFRASTRUCTURE",
    severity: "CRITICAL",
    cvss: "9.8",
    tags: ["IAM Privilege Escalation", "RCE", "Kubernetes Escape", "AWS S3"],
    description:
      "Simulated adversary engagement targeting multi-tenant cloud infrastructure. Uncovered misconfigured IAM assume-role policies that enabled cross-account lateral movement and unauthenticated remote code execution.",
    methodology: "MITRE ATT&CK Cloud Matrix / PTES Standards",
    status: "REMEDIATED // DEMO ENTRY",
    slug: "web-application-security-lab",
  },
  {
    id: "SEC-CS-002",
    title: "Fintech API Zero-Day & Race Condition Analysis",
    category: "WEB_API",
    categoryLabel: "FINANCIAL APPLICATION",
    severity: "HIGH",
    cvss: "8.9",
    tags: ["Race Condition", "BOLA", "JWT Forgery", "Double Spending"],
    description:
      "Deep audit of transactional payment APIs. Identified asynchronous processing race condition allowing balance duplication and object-level authorization bypass across distinct merchant IDs.",
    methodology: "OWASP API Security Top 10 / RFC Concurrency Testing",
    status: "DISCLOSED & PATCHED // DEMO ENTRY",
    slug: "recon-research-notes",
  },
  {
    id: "SEC-CS-003",
    title: "Healthcare EMR Architecture Security Assessment",
    category: "WEB_API",
    categoryLabel: "HEALTHCARE PLATFORM",
    severity: "CRITICAL",
    cvss: "9.5",
    tags: ["BOLA / IDOR", "PHI Exposure", "SSRF", "Audit Logging Bypass"],
    description:
      "Security audit of Electronic Medical Records system. Mapped Broken Object Level Authorization across patient health records and internal SSRF vector exposing internal metadata endpoints.",
    methodology: "HIPAA Security Rule / WSTG v4.2",
    status: "SECURED & AUDITED // DEMO ENTRY",
    slug: "security-workflow-toolkit",
  },
  {
    id: "SEC-CS-004",
    title: "Enterprise Perimeter Adversary Emulation",
    category: "RED_TEAM",
    categoryLabel: "RED TEAM OPERATIONS",
    severity: "HIGH",
    cvss: "8.4",
    tags: ["External Recon", "Password Spraying", "C2 Infrastructure", "Egress Filtering"],
    description:
      "Full adversary emulation assessment mapping external corporate perimeter, establishing stealthy covert command-and-control channels, and demonstrating defensive detection blind spots.",
    methodology: "NIST SP 800-115 / Adversary Simulation Framework",
    status: "CLOSED & REPORTED // DEMO ENTRY",
    slug: "web-application-security-lab",
  },
];

export default function CaseStudiesArchive() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredCases = SAMPLE_CASE_STUDIES.filter((item) => {
    const matchesCategory =
      selectedCategory === "ALL" || item.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.tags.some((t) => t.toLowerCase().includes(q)) ||
      item.description.toLowerCase().includes(q) ||
      item.cvss.includes(q);

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="cases" className="border-b border-[#00f2fe]/15 bg-[#081010] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[#00f2fe]">
              <span>{"// ENGAGEMENT ARCHIVE"}</span>
              <span className="text-[#6c8585]">· DEMO & RESEARCH FINDINGS</span>
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#e5f2f2]">
              CASE STUDIES & AUDITS
            </h2>
          </div>

          <div className="font-mono text-xs text-[#00ff88] border border-[#00ff88]/20 bg-[#00ff88]/[0.05] px-3 py-1.5 rounded flex items-center gap-2 self-start md:self-auto">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00ff88] animate-pulse" />
            <span>ARCHIVE_INTEGRITY: 100% VERIFIED</span>
          </div>
        </div>

        {/* Working Terminal Search Bar */}
        <div className="mb-6 rounded-lg border border-[#00f2fe]/25 bg-[#0d1515] p-3 sm:p-4 shadow-lg shadow-black/50">
          <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-[#00f2fe]">
            <span className="font-bold text-[#e5f2f2]">root@sec-ops:~#</span>
            <span className="hidden sm:inline text-[#8fa3a3]">search --target</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="filter by vulnerability, tag, or CVSS (e.g. 'IAM', '9.8', 'RCE')..."
              className="flex-1 bg-transparent px-2 py-1 font-mono text-xs sm:text-sm text-[#e5f2f2] outline-none placeholder:text-[#6c8585]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-[10px] uppercase font-mono text-[#ff3366] hover:underline"
              >
                [CLEAR]
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mb-8 flex flex-wrap items-center gap-2 font-mono text-xs">
          {[
            { id: "ALL", label: "[ALL_TARGETS]" },
            { id: "CLOUD_INFRA", label: "[CLOUD_INFRA]" },
            { id: "WEB_API", label: "[WEB_API]" },
            { id: "RED_TEAM", label: "[RED_TEAM]" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setSelectedCategory(btn.id)}
              className={`rounded px-3 py-1.5 transition-all ${
                selectedCategory === btn.id
                  ? "bg-[#00f2fe] text-[#081010] font-bold shadow-[0_0_12px_rgba(0,242,254,0.3)]"
                  : "border border-white/[0.08] bg-[#0d1515] text-[#8fa3a3] hover:border-[#00f2fe]/30 hover:text-[#e5f2f2]"
              }`}
            >
              {btn.label}
            </button>
          ))}
          <span className="ml-auto text-[11px] text-[#6c8585]">
            Showing {filteredCases.length} of {SAMPLE_CASE_STUDIES.length} entries
          </span>
        </div>

        {/* Cases Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredCases.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between rounded-lg border border-[#00f2fe]/15 bg-[#0d1515] p-6 transition-all hover:border-[#00f2fe]/50 hover:bg-[#111b1b]"
            >
              <div>
                {/* Card Top: ID & Severity Badge */}
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="font-mono text-xs text-[#00f2fe]">
                    {item.id} {"//"} {item.categoryLabel}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <span
                      className={`rounded px-2 py-0.5 font-mono text-[10px] font-bold ${
                        item.severity === "CRITICAL"
                          ? "bg-[#ff3366]/15 text-[#ff3366] border border-[#ff3366]/30"
                          : "bg-[#ffb300]/15 text-[#ffb300] border border-[#ffb300]/30"
                      }`}
                    >
                      {item.severity} CVSS {item.cvss}
                    </span>
                  </div>
                </div>

                <h3 className="mt-4 text-xl font-bold text-[#e5f2f2] group-hover:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-[#8fa3a3]">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-white/[0.08] bg-[#081010] px-2 py-0.5 font-mono text-[10px] text-[#00f2fe]/80"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Methodology & Action */}
              <div className="mt-6 border-t border-white/[0.06] pt-4 flex items-center justify-between font-mono text-xs">
                <span className="text-[10px] text-[#6c8585]">{item.methodology}</span>
                {item.slug ? (
                  <Link
                    href={`/projects/${item.slug}`}
                    className="inline-flex items-center gap-1 text-[#00f2fe] hover:underline"
                  >
                    <span>Read Notes</span>
                    <span>→</span>
                  </Link>
                ) : (
                  <span className="text-[11px] text-[#6c8585]">{item.status}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note on research transparency */}
        <p className="mt-8 text-center font-mono text-xs text-[#6c8585]">
          * Case studies demonstrate real offensive testing methodologies and simulated lab scenarios. Real client records remain strictly confidential under NDA.
        </p>
      </div>
    </section>
  );
}
