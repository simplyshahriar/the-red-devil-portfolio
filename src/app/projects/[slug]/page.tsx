import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects, getProjectBySlug } from "../../lib/data";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} — The Red Devil`,
    description: project.description,
  };
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[#0A0908] text-[#F0EBE0]">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* back */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#8E887B] transition hover:text-[#F0EBE0]"
        >
          <span aria-hidden="true">←</span> Back to portfolio
        </Link>

        {/* header */}
        <header className="mt-10 border-b border-white/[0.07] pb-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#E89B7B]">
              {project.category}
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[#8E887B]">
              {project.status}
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#C9C2B4]">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-[#8E887B]"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.started && (
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-[#5A554C]">
              Started · {project.started}
            </p>
          )}
        </header>

        {/* body */}
        <div className="mt-12 space-y-14">
          {project.longDescription && (
            <section>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#8E887B]">
                Overview
              </h2>
              <p className="mt-4 text-base leading-8 text-[#C9C2B4]">
                {project.longDescription}
              </p>
            </section>
          )}

          {project.objectives && project.objectives.length > 0 && (
            <section>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#8E887B]">
                Objectives
              </h2>
              <ul className="mt-4 space-y-3">
                {project.objectives.map((o) => (
                  <li key={o} className="flex gap-3 text-base leading-8 text-[#C9C2B4]">
                    <span className="mt-4 h-1 w-1 shrink-0 rounded-full bg-[#D97757]" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.approach && project.approach.length > 0 && (
            <section>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#8E887B]">
                Approach
              </h2>
              <ul className="mt-4 space-y-3">
                {project.approach.map((a) => (
                  <li key={a} className="flex gap-3 text-base leading-8 text-[#C9C2B4]">
                    <span className="mt-4 h-1 w-1 shrink-0 rounded-full bg-[#D97757]" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.findings && project.findings.length > 0 && (
            <section>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#8E887B]">
                Notes &amp; Findings
              </h2>
              <ul className="mt-4 space-y-3">
                {project.findings.map((f) => (
                  <li key={f} className="flex gap-3 text-base leading-8 text-[#C9C2B4]">
                    <span className="mt-4 h-1 w-1 shrink-0 rounded-full bg-[#D97757]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.links && project.links.length > 0 && (
            <section>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#8E887B]">
                Links
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/[0.07] bg-[#12100E] px-4 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[#E89B7B] transition hover:border-[#D97757]/50 hover:text-white"
                  >
                    {l.label} <ArrowIcon />
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* footer */}
        <div className="mt-16 border-t border-white/[0.07] pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#E89B7B] transition hover:text-white"
          >
            ← Back to all projects
          </Link>
        </div>
      </div>
    </main>
  );
}