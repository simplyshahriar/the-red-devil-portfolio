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
    title: `${project.title} — SEC_OPS Archive`,
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
    <main className="min-h-screen bg-[#081010] text-[#e5f2f2] font-mono py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-[#00f2fe]/20 pb-4 text-xs">
          <Link
            href="/#cases"
            className="inline-flex items-center gap-1.5 text-[#00f2fe] hover:underline"
          >
            <span>&lt;_ RETURN_TO_ARCHIVE</span>
          </Link>

          <span className="text-[#6c8585]">
            RECORD_ID: {project.number} {"//"} {project.category}
          </span>
        </div>

        {/* Header Block */}
        <div>
          <div className="inline-block rounded border border-[#00f2fe]/30 bg-[#00f2fe]/10 px-2 py-0.5 text-[10px] text-[#00f2fe] mb-3">
            STATUS: {project.status}
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase text-[#e5f2f2]">
            {project.title}
          </h1>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#8fa3a3]">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-white/[0.08] bg-[#0d1515] px-2.5 py-1 text-xs text-[#00f2fe]"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Detailed Sections */}
        <div className="space-y-6 border-t border-white/[0.08] pt-6">
          {project.longDescription && (
            <div className="rounded-lg border border-[#00f2fe]/15 bg-[#0d1515] p-6 space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#00f2fe]">
                [SCOPE & OVERVIEW]
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-[#8fa3a3]">
                {project.longDescription}
              </p>
            </div>
          )}

          {project.objectives && project.objectives.length > 0 && (
            <div className="rounded-lg border border-white/[0.08] bg-[#0d1515] p-6 space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#00f2fe]">
                [RESEARCH OBJECTIVES]
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-[#8fa3a3]">
                {project.objectives.map((obj) => (
                  <li key={obj} className="flex gap-2">
                    <span className="text-[#00ff88]">▸</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.findings && project.findings.length > 0 && (
            <div className="rounded-lg border border-[#00ff88]/20 bg-[#0d1515] p-6 space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#00ff88]">
                [VERIFIED FINDINGS & ARTIFACTS]
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-[#8fa3a3]">
                {project.findings.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-[#00ff88]">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer Back */}
        <div className="pt-8 border-t border-[#00f2fe]/20 text-center">
          <Link
            href="/#cases"
            className="inline-block rounded border border-[#00f2fe] bg-[#00f2fe] px-6 py-2.5 text-xs font-bold uppercase text-[#081010] hover:bg-[#4facfe]"
          >
            Back to Case Studies & Audits
          </Link>
        </div>

      </div>
    </main>
  );
}
