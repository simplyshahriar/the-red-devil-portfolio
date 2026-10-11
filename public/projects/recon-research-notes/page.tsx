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
        <p className="font-mono text-xs tracking-[0.2em] text-lime-300">PROJECT / RECONNAISSANCE</p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">Recon Research Notes</h1>
          <span className="rounded-full border border-lime-300/20 px-3 py-1 font-mono text-xs text-lime-200">IN PROGRESS</span>
        </div>
        <p className="mt-7 text-lg leading-8 text-slate-300">A structured collection of reconnaissance concepts, tool references, and responsible research workflows.</p>
        <section className="mt-10 border-t border-white/10 pt-7"><h2 className="text-xl font-semibold text-white">Scope and responsible use</h2><p className="mt-3 leading-7 text-slate-400">Keep research within public information and clearly authorized targets. Avoid collecting unnecessary personal information or bypassing access controls.</p></section><section className="mt-10 border-t border-white/10 pt-7"><h2 className="text-xl font-semibold text-white">Workflow / focus</h2><p className="mt-3 leading-7 text-slate-400">Define scope; collect relevant public facts; cross-check sources; timestamp findings; distinguish verified facts from assumptions; stop when scope is reached.</p></section><section className="mt-10 border-t border-white/10 pt-7"><h2 className="text-xl font-semibold text-white">Next step</h2><p className="mt-3 leading-7 text-slate-400">Publish methodology notes and examples using a lab domain or non-sensitive test data.</p></section>
        <p className="mt-10 text-sm text-slate-500">This portfolio documents learning honestly. Update the status when work has verifiable progress.</p>
        <Link href="/#contact" className="mt-7 inline-flex rounded-xl bg-lime-300 px-5 py-3 font-semibold text-[#071008] hover:bg-lime-200">Get in touch ↗</Link>
      </article>
    </main>
  );
}
