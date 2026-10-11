import Link from "next/link";

export default function DetailPage() {
  return (
    <main className="min-h-screen bg-[#030806] text-slate-200">
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5">
          <Link href="/" className="font-semibold text-white hover:text-lime-300">THE RED DEVIL<span className="text-lime-300">.</span></Link>
          <Link href="/#research" className="text-sm text-slate-400 hover:text-lime-300">← Research notes</Link>
        </nav>
      </header>
      <article className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
        <p className="font-mono text-xs tracking-[0.2em] text-lime-300">RESEARCH NOTE / WEB SECURITY</p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">Introduction to Web Application Security</h1>
          
        </div>
        <p className="mt-7 text-lg leading-8 text-slate-300">Core concepts, common risks, testing methodology, and a structured learning path.</p>
        <section className="mt-10 border-t border-white/10 pt-7"><h2 className="text-xl font-semibold text-white">Scope and ethics</h2><p className="mt-3 leading-7 text-slate-400">Start with HTTP methods, status codes, headers, cookies, sessions, input handling, and access control. Practice only in a local lab or an environment where testing is authorized.</p></section><section className="mt-10 border-t border-white/10 pt-7"><h2 className="text-xl font-semibold text-white">Suggested methodology</h2><p className="mt-3 leading-7 text-slate-400">Map the application flow; observe requests and responses; identify trust boundaries; compare expected and actual behavior in a safe lab; document findings.</p></section><section className="mt-10 border-t border-white/10 pt-7"><h2 className="text-xl font-semibold text-white">Documentation checklist</h2><p className="mt-3 leading-7 text-slate-400">Record scope, steps, observations, potential impact, and remediation. Never publish credentials or sensitive user data.</p></section>
        <p className="mt-10 text-sm text-slate-500">This portfolio documents learning honestly. Update the status when work has verifiable progress.</p>
        <Link href="/#contact" className="mt-7 inline-flex rounded-xl bg-lime-300 px-5 py-3 font-semibold text-[#071008] hover:bg-lime-200">Get in touch ↗</Link>
      </article>
    </main>
  );
}
