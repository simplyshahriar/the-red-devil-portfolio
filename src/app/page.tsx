"use client";

import SecOpsHeader from "./components/SecOpsHeader";
import SecOpsHero from "./components/SecOpsHero";
import MetricsBar from "./components/MetricsBar";
import CapabilitiesGrid from "./components/CapabilitiesGrid";
import ExpertiseMatrix from "./components/ExpertiseMatrix";
import CaseStudiesArchive from "./components/CaseStudiesArchive";
import SecureContactSuite from "./components/SecureContactSuite";
import SecOpsFooter from "./components/SecOpsFooter";

const marqueeItems = [
  "OFFENSIVE SECURITY",
  "PENETRATION TESTING",
  "OWASP TOP 10",
  "REVERSE ENGINEERING",
  "CLOUD SECURITY",
  "KUBERNETES ESCAPES",
  "GHIDRA",
  "BURP SUITE PRO",
  "CVE RESEARCH",
  "RESPONSIBLE DISCLOSURE",
];

export default function Home() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <main className="min-h-screen bg-[#081010] text-[#e5f2f2]">
      {/* 1. Global App Header */}
      <SecOpsHeader />

      {/* 2. Overview / Cinematic Hero */}
      <SecOpsHero />

      {/* 3. High-Density Telemetry Metrics Bar */}
      <MetricsBar />

      {/* 4. Marquee Cyber Bar */}
      <section className="border-b border-[#00f2fe]/15 bg-[#081010] py-4 overflow-hidden select-none">
        <div className="flex w-max gap-8 whitespace-nowrap animate-marquee">
          {items.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-8 font-mono text-xs uppercase tracking-[0.25em] text-[#6c8585]"
            >
              <span>{item}</span>
              <span className="text-[#00f2fe]">◆</span>
            </span>
          ))}
        </div>
      </section>

      {/* 5. Featured Capabilities */}
      <CapabilitiesGrid />

      {/* 6. Technical Expertise & Tooling Stack */}
      <ExpertiseMatrix />

      {/* 7. Case Studies & Engagement Archive with Terminal Search */}
      <CaseStudiesArchive />

      {/* 8. Secure Communication Suite (PGP Keyring + Transmission Form) */}
      <SecureContactSuite />

      {/* 9. SEC_OPS Technical Footer */}
      <SecOpsFooter />
    </main>
  );
}
