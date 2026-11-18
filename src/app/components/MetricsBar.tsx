export default function MetricsBar() {
  const metrics = [
    {
      label: "Vulnerabilities Discovered",
      value: "50+",
      sub: "Lab & Scoped Research",
      tag: "VERIFIED",
    },
    {
      label: "Authorized Assessments",
      value: "14+",
      sub: "Simulated & Hands-on Labs",
      tag: "AUDITED",
    },
    {
      label: "Target Classes",
      value: "OWASP",
      sub: "Auth, SSRF, IDOR, Injection",
      tag: "EXPERTISE",
    },
    {
      label: "Research Status",
      value: "ACTIVE",
      sub: "Responsible Coordinated Disclosure",
      tag: "ETHICAL",
    },
  ];

  return (
    <section className="border-b border-[#00f2fe]/15 bg-[#0d1515] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center justify-between text-[11px] font-mono text-[#6c8585]">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00f2fe]" />
            KEY PERFORMANCE & AUDIT TELEMETRY
          </span>
          <span className="uppercase text-[#00f2fe]/80">{"// VERIFIABLE METRICS MATRIX"}</span>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="relative overflow-hidden rounded-md border border-[#00f2fe]/15 bg-[#081010] p-4 transition-all hover:border-[#00f2fe]/40 hover:bg-[#111b1b]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-[#e5f2f2]">
                  {m.value}
                </span>
                <span className="rounded bg-[#00f2fe]/10 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[#00f2fe]">
                  {m.tag}
                </span>
              </div>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#8fa3a3]">
                {m.label}
              </p>
              <p className="mt-0.5 text-[11px] text-[#6c8585]">{m.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
