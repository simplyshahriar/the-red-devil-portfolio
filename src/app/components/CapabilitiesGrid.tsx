import Link from "next/link";

export default function CapabilitiesGrid() {
  const capabilities = [
    {
      id: "01",
      title: "Web Application Security",
      category: "OFFENSIVE",
      desc: "Comprehensive testing of client & server architectures, authentication vulnerabilities, session handling, state bypasses, IDORs, and GraphQL/REST API security.",
      frameworks: ["OWASP Top 10", "ASVS Level 2", "WSTG"],
      link: "#cases",
    },
    {
      id: "02",
      title: "Cloud & Container Penetration Testing",
      category: "INFRASTRUCTURE",
      desc: "Auditing AWS/GCP cloud configurations, IAM privilege escalation vectors, misconfigured storage buckets, Docker container breakout, and Kubernetes API exposure.",
      frameworks: ["CIS Benchmarks", "Cloud Security Alliance", "MITRE ATT&CK"],
      link: "#cases",
    },
    {
      id: "03",
      title: "Red Teaming & Adversary Emulation",
      category: "OPERATIONS",
      desc: "Simulating realistic adversary tactics, active reconnaissance, payload staging, lateral movement scenarios, and defensive posture evaluation without operational downtime.",
      frameworks: ["NIST 800-115", "PTES", "MITRE ATT&CK"],
      link: "#cases",
    },
    {
      id: "04",
      title: "Reverse Engineering & Cryptographic Review",
      category: "ANALYSIS",
      desc: "Dissecting compiled binaries using Ghidra and IDA, inspecting software communication protocols, identifying cryptographic implementation flaws and weak entropy.",
      frameworks: ["Cryptographic Standards", "Static Analysis", "Dynamic Hooks"],
      link: "#cases",
    },
  ];

  return (
    <section className="border-b border-[#00f2fe]/15 bg-[#081010] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00f2fe]">
              {"// CORE DOMAINS"}
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#e5f2f2]">
              FEATURED CAPABILITIES
            </h2>
          </div>
          <span className="font-mono text-xs text-[#6c8585]">
            STANDARDS-BASED METHODOLOGY
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {capabilities.map((c) => (
            <div
              key={c.id}
              className="group relative flex flex-col justify-between rounded-lg border border-[#00f2fe]/15 bg-[#0d1515] p-6 sm:p-8 transition-all hover:border-[#00f2fe]/50 hover:bg-[#111b1b]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#00f2fe]">
                    [{c.id}] {c.category}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[#00f2fe]/40 group-hover:bg-[#00f2fe] transition-colors" />
                </div>

                <h3 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-[#e5f2f2] group-hover:text-white">
                  {c.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#8fa3a3]">
                  {c.desc}
                </p>
              </div>

              <div className="mt-6 border-t border-white/[0.06] pt-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {c.frameworks.map((f) => (
                    <span
                      key={f}
                      className="rounded border border-white/[0.08] bg-[#081010] px-2 py-0.5 font-mono text-[10px] text-[#6c8585]"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <Link
                  href={c.link}
                  className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-[#00f2fe] transition-transform group-hover:translate-x-1"
                >
                  <span>Review Methodology & Cases</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
