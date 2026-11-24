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
    title: `${project.title} — Hasnain Shahriar`,
    description: project.description,
  };
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
    <main className="min-h-screen bg-[#0B1112] text-[#E8F1EF] py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-[#00E5C3]/15 pb-4 text-xs font-mono">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-[#00E5C3] hover:underline"
          >
            <span>← Return to Projects</span>
          </Link>

          <span className="text-[#91A5A1]">
            PROJECT REF: {project.number} {"//"} {project.category}
          </span>
        </div>

        {/* Header Block */}
        <div>
          <div className="inline-block rounded bg-[#00E5C3]/10 border border-[#00E5C3]/30 px-2.5 py-0.5 text-xs font-mono text-[#00E5C3] mb-3">
            STATUS: {project.status}
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#E8F1EF]">
            {project.title}
          </h1>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#91A5A1]">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-white/[0.08] bg-[#142122] px-2.5 py-1 text-[#00E5C3]"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Detailed Sections */}
        <div className="space-y-6 border-t border-white/[0.08] pt-6">
          {project.target && (
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/[0.08] bg-[#142122] p-5 space-y-1">
                <span className="font-mono text-[10px] uppercase text-[#00E5C3]">Target Platform</span>
                <p className="font-display text-base font-semibold text-[#E8F1EF]">{project.target}</p>
              </div>
              <div className="rounded-xl border border-white/[0.08] bg-[#142122] p-5 space-y-1">
                <span className="font-mono text-[10px] uppercase text-[#35BDF2]">Assessment Activity</span>
                <p className="font-display text-base font-semibold text-[#E8F1EF]">{project.activity}</p>
              </div>
            </div>
          )}

          {project.methodology && (
            <div className="rounded-xl border border-white/[0.08] bg-[#142122] p-5 space-y-1">
              <span className="font-mono text-[10px] uppercase text-[#00E5C3]">Testing Methodology</span>
              <p className="text-sm text-[#E8F1EF]">{project.methodology}</p>
            </div>
          )}

          {project.longDescription && (
            <div className="rounded-xl border border-white/[0.08] bg-[#142122] p-6 space-y-2">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[#00E5C3]">
                Project Scope &amp; Overview
              </h2>
              <p className="text-sm leading-relaxed text-[#91A5A1]">
                {project.longDescription}
              </p>
            </div>
          )}

          {project.objectives && project.objectives.length > 0 && (
            <div className="rounded-xl border border-white/[0.08] bg-[#142122] p-6 space-y-3">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[#00E5C3]">
                Core Objectives
              </h2>
              <ul className="space-y-2 text-sm text-[#91A5A1]">
                {project.objectives.map((obj) => (
                  <li key={obj} className="flex gap-2">
                    <span className="text-[#00E5C3]">▸</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.approach && project.approach.length > 0 && (
            <div className="rounded-xl border border-white/[0.08] bg-[#142122] p-6 space-y-3">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[#35BDF2]">
                Testing Approach &amp; Methodology
              </h2>
              <ul className="space-y-2 text-sm text-[#91A5A1]">
                {project.approach.map((app) => (
                  <li key={app} className="flex gap-2">
                    <span className="text-[#35BDF2]">▸</span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.findings && project.findings.length > 0 && (
            <div className="rounded-xl border border-[#00E5C3]/20 bg-[#142122] p-6 space-y-3">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[#00E5C3]">
                Key Findings &amp; Outcomes
              </h2>
              <ul className="space-y-2 text-sm text-[#91A5A1]">
                {project.findings.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-[#00E5C3]">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Back Link */}
        <div className="pt-8 border-t border-white/[0.08] text-center font-mono text-xs">
          <Link
            href="/#projects"
            className="inline-block rounded border border-[#00E5C3] bg-[#00E5C3] px-6 py-2.5 font-semibold text-[#0B1112] hover:bg-[#35BDF2] hover:border-[#35BDF2]"
          >
            ← Back to Projects Showcase
          </Link>
        </div>

      </div>
    </main>
  );
}
