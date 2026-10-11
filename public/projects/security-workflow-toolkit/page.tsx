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
        <p className="font-mono text-xs tracking-[0.2em] text-lime-300">PROJECT / SECURITY TOOLING</p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">Security Workflow Toolkit</h1>
          <span className="rounded-full border border-lime-300/20 px-3 py-1 font-mono text-xs text-lime-200">PLANNED</span>
        </div>
        <p className="mt-7 text-lg leading-8 text-slate-300">An evolving collection of scripts, checklists, and notes designed to make security learning more organized and repeatable.</p>
        <section className="mt-10 border-t border-white/10 pt-7"><h2 className="text-xl font-semibold text-white">Scope and responsible use</h2><p className="mt-3 leading-7 text-slate-400">This item is planned work. Do not describe it as a released tool until a working repository and documentation are available.</p></section><section className="mt-10 border-t border-white/10 pt-7"><h2 className="text-xl font-semibold text-white">Workflow / focus</h2><p className="mt-3 leading-7 text-slate-400">Choose a small workflow; use safe input handling; avoid logging secrets; add tests and clear help output; document limitations.</p></section><section className="mt-10 border-t border-white/10 pt-7"><h2 className="text-xl font-semibold text-white">Next step</h2><p className="mt-3 leading-7 text-slate-400">Implement one small utility, test it, then publish a README explaining setup, usage, and safe-use boundaries.</p></section>
        <p className="mt-10 text-sm text-slate-500">This portfolio documents learning honestly. Update the status when work has verifiable progress.</p>
        <Link href="/#contact" className="mt-7 inline-flex rounded-xl bg-lime-300 px-5 py-3 font-semibold text-[#071008] hover:bg-lime-200">Get in touch ↗</Link>
      </article>
    </main>
  );
}
