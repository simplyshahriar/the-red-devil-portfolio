"use client";

import { useState } from "react";
import Image from "next/image";

type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  status: "VERIFIED" | "IN_PROGRESS" | "PLANNED";
  url?: string;
  image?: string;
};

export default function ExpertiseMatrix() {
  const [activeTab, setActiveTab] = useState<"tools" | "terminal" | "certs">("tools");

  const tools = [
    { name: "Burp Suite Pro", cat: "Proxy & Web Testing", desc: "Custom extension development, repeater triage, intruder payloads, and automated vulnerability scanning." },
    { name: "Nmap & Masscan", cat: "Port & Recon", desc: "Network footprinting, NSE script development, service fingerprinting, and firewall bypass timing." },
    { name: "Ghidra", cat: "Reverse Engineering", desc: "Decompilation, binary diffing, control-flow analysis, and function vulnerability auditing." },
    { name: "Metasploit Framework", cat: "Exploitation Testing", desc: "Exploit staging, payload encoding, meterpreter listener configuration, and post-exploitation workflows." },
    { name: "Python 3", cat: "Tooling & Exploit PoC", desc: "Automating HTTP requests, threading scanners, scraping reconnaissance data, and constructing PoC exploits." },
    { name: "Rust & Bash", cat: "Systems & Memory", desc: "Fast system-level utilities, memory safety research, CLI pipeline automation, and shell script hardening." },
  ];

  const certs: Certification[] = [
    {
      id: "cisco-intro-cybersecurity",
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "October 2026",
      status: "VERIFIED",
      url: "https://www.credly.com/users/hasnain-shahriar/badges",
      image: "/images/certifications/cisco-intro-cybersecurity.png",
    },
    {
      id: "codered-cloud-computing",
      title: "A Practical Introduction to Cloud Computing",
      issuer: "Codered Continuous Learning",
      date: "October 2026",
      status: "VERIFIED",
      image: "/images/certifications/codered-cloud-computing.png",
    },
    {
      id: "codered-dark-web",
      title: "Dark Web, Anonymity, and Cryptocurrency",
      issuer: "Codered Continuous Learning",
      date: "October 2026",
      status: "VERIFIED",
      image: "/images/certifications/codered-dark-web.png",
    },
    {
      id: "oscp",
      title: "Offensive Security Certified Professional (OSCP)",
      issuer: "OffSec",
      date: "Targeted 2027",
      status: "IN_PROGRESS",
    },
    {
      id: "ceh-master",
      title: "CEH Master",
      issuer: "EC-Council",
      date: "Targeted 2027",
      status: "PLANNED",
    },
  ];

  return (
    <section id="expertise" className="border-b border-[#00f2fe]/15 bg-[#0d1515] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00f2fe]">
              {"// TECHNICAL CAPABILITIES MATRIX"}
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#e5f2f2]">
              EXPERTISE & TOOLING
            </h2>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="flex items-center gap-2 border border-[#00f2fe]/20 bg-[#081010] p-1 rounded font-mono text-xs">
            <button
              onClick={() => setActiveTab("tools")}
              className={`px-3 py-1.5 rounded uppercase transition-colors ${
                activeTab === "tools"
                  ? "bg-[#00f2fe] text-[#081010] font-bold"
                  : "text-[#8fa3a3] hover:text-[#e5f2f2]"
              }`}
            >
              [Tooling Stack]
            </button>
            <button
              onClick={() => setActiveTab("terminal")}
              className={`px-3 py-1.5 rounded uppercase transition-colors ${
                activeTab === "terminal"
                  ? "bg-[#00f2fe] text-[#081010] font-bold"
                  : "text-[#8fa3a3] hover:text-[#e5f2f2]"
              }`}
            >
              [Terminal Logs]
            </button>
            <button
              onClick={() => setActiveTab("certs")}
              className={`px-3 py-1.5 rounded uppercase transition-colors ${
                activeTab === "certs"
                  ? "bg-[#00f2fe] text-[#081010] font-bold"
                  : "text-[#8fa3a3] hover:text-[#e5f2f2]"
              }`}
            >
              [Credentials]
            </button>
          </div>
        </div>

        {/* Tab 1: Tooling Stack */}
        {activeTab === "tools" && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((t) => (
              <div
                key={t.name}
                className="rounded-lg border border-[#00f2fe]/15 bg-[#081010] p-5 transition-all hover:border-[#00f2fe]/40 hover:bg-[#111b1b]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#00f2fe]">
                    {t.cat}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00f2fe]" />
                </div>
                <h3 className="mt-3 font-mono text-lg font-bold text-[#e5f2f2]">
                  {t.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#8fa3a3]">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Non-operational Terminal Analysis Logs */}
        {activeTab === "terminal" && (
          <div className="rounded-lg border border-[#00f2fe]/20 bg-[#081010] p-5 font-mono text-xs leading-relaxed">
            <div className="border-b border-white/[0.08] pb-3 mb-4 flex items-center justify-between text-[#6c8585]">
              <span>SIMULATED SECURITY ANALYSIS RUNNER // NON-OPERATIONAL DEMO</span>
              <span className="text-[#00ff88]">SANDBOX_SAFE</span>
            </div>

            <div className="space-y-3 text-[#8fa3a3]">
              <div className="text-[#e5f2f2]">
                <span className="text-[#00f2fe]">root@sec-ops:/research#</span> burpsuite-triage --target test-env --scope authorized
              </div>
              <div className="pl-4 border-l border-[#00f2fe]/20 space-y-1 text-[11px]">
                <div className="text-[#00ff88]">[INFO] Scope validation verified: RFC 2606 reserved lab domain.</div>
                <div>[INFO] Passive crawler mapping 42 endpoints...</div>
                <div className="text-[#ffb300]">[WARN] Endpoint /api/v2/auth/refresh missing Strict-Transport-Security.</div>
                <div>[ANALYZE] Checking JWT claims: alg=RS256, jku header verification enforced.</div>
                <div className="text-[#00f2fe]">[STATUS] Testing completed. 0 unauthorized actions performed.</div>
              </div>

              <div className="text-[#e5f2f2] pt-2">
                <span className="text-[#00f2fe]">root@sec-ops:/research#</span> ghidra --headless /workspace/bin/firmware.bin Analyze
              </div>
              <div className="pl-4 border-l border-[#00f2fe]/20 space-y-1 text-[11px]">
                <div>[INFO] Disassembling binary sections (.text, .rodata, .data)...</div>
                <div>[INFO] Stack canary detection enabled. ASLR compliant.</div>
                <div className="text-[#00ff88]">[STATUS] Firmware entropy analysis: 7.94 bits/byte (encrypted payload).</div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Certifications */}
        {activeTab === "certs" && (
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2">
              {certs.map((c) => (
                <div
                  key={c.id}
                  className="flex flex-col justify-between rounded-lg border border-[#00f2fe]/15 bg-[#081010] p-5"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-[#6c8585]">{c.issuer}</span>
                      <span
                        className={`rounded px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider ${
                          c.status === "VERIFIED"
                            ? "bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/30"
                            : c.status === "IN_PROGRESS"
                            ? "bg-[#00f2fe]/10 text-[#00f2fe] border border-[#00f2fe]/30"
                            : "bg-white/[0.04] text-[#8fa3a3]"
                        }`}
                      >
                        {c.status}
                      </span>
                    </div>

                    <h4 className="mt-3 font-mono text-base font-bold text-[#e5f2f2]">
                      {c.title}
                    </h4>
                    <p className="mt-1 font-mono text-[11px] text-[#8fa3a3]">{c.date}</p>
                  </div>

                  {c.image && (
                    <div className="mt-4 relative h-32 w-full overflow-hidden rounded border border-white/[0.08] bg-black/40">
                      <Image
                        src={c.image}
                        alt={c.title}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  )}

                  {c.url && (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] text-[#00f2fe] hover:underline"
                    >
                      <span>Verify on Credly</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
