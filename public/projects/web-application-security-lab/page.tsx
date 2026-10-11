import Link from "next/link";

export default function DetailPage() {
  return (
    <main className="min-h-screen bg-[#030806] text-slate-200">
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5">
          <Link href="/" className="font-semibold text-white hover:text-lime-300">THE RED DEVIL<span className="text-lime-300">.</span></Link>
          <Link href="/#projects" className="text-sm text-slate-400 hover:text-lime-300">← All projects</Link>
        </nav>
      </header>
      <article className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
        <p className="font-mono text-xs tracking-[0.2em] text-lime-300">PROJECT / WEB SECURITY</p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">Web Application Security Lab</h1>
          <span className="rounded-full border border-lime-300/20 px-3 py-1 font-mono text-xs text-lime-200">LEARNING</span>
        </div>
        <p className="mt-7 text-lg leading-8 text-slate-300">A learning environment for exploring web security concepts, testing defensive controls, and documenting findings in authorized labs.</p>
        <section className="mt-10 border-t border-white/10 pt-7"><h2 className="text-xl font-semibold text-white">Scope and responsible use</h2><p className="mt-3 leading-7 text-slate-400">This is a learning project, not a claim of a completed professional assessment. Use intentionally vulnerable training apps or systems you own or have written permission to test.</p></section><section className="mt-10 border-t border-white/10 pt-7"><h2 className="text-xl font-semibold text-white">Workflow / focus</h2><p className="mt-3 leading-7 text-slate-400">Define authorized scope; review HTTP requests and responses; study input validation, authentication, sessions, and access-control concepts; document observations and remediation ideas.</p></section><section className="mt-10 border-t border-white/10 pt-7"><h2 className="text-xl font-semibold text-white">Next step</h2><p className="mt-3 leading-7 text-slate-400">Add a dated lab log with sanitized evidence, observed behavior, impact, and remediation ideas after each practice session.</p></section>
        <p className="mt-10 text-sm text-slate-500">This portfolio documents learning honestly. Update the status when work has verifiable progress.</p>
        <Link href="/#contact" className="mt-7 inline-flex rounded-xl bg-lime-300 px-5 py-3 font-semibold text-[#071008] hover:bg-lime-200">Get in touch ↗</Link>
      </article>
    </main>
  );
}
