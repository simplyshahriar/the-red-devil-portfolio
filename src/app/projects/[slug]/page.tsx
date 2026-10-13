import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const projects = {
  "recon-research-notes": {
    title: "Recon Research Notes",
    category: "RECONNAISSANCE / OSINT",
    description:
      "A structured collection of reconnaissance research, methodology, tools, and responsible information-gathering notes.",
    details:
      "This project organizes reconnaissance learning into clear research notes, helping document methodology, observations, and useful references.",
    status: "Research & Documentation",
  },
  "security-workflow-toolkit": {
    title: "Security Workflow Toolkit",
    category: "SECURITY / WORKFLOW",
    description:
      "A project focused on organizing security workflows, assessment notes, and repeatable documentation processes.",
    details:
      "The goal is to make security work easier to track through structured notes, consistent workflows, and responsible assessment documentation.",
    status: "Project in Development",
  },
  "web-application-security-lab": {
    title: "Web Application Security Lab",
    category: "WEB APPLICATION SECURITY",
    description:
      "A learning-focused lab for exploring web application security concepts and authorized testing techniques.",
    details:
      "The lab is intended for controlled environments and applications where testing permission has been granted. Findings should be documented with clear explanations and remediation guidance.",
    status: "Learning & Practice",
  },
} as const;

type ProjectSlug = keyof typeof projects;

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!Object.prototype.hasOwnProperty.call(projects, slug)) {
    notFound();
  }

  const project = projects[slug as ProjectSlug];

  return (
    <article className="mx-auto w-full max-w-3xl">
      <Link
        href="/#projects"
        className="inline-flex text-sm text-[#B83A46] transition-colors hover:text-[#F0EFEA]"
      >
        &larr; Back to projects
      </Link>

      <p className="mt-12 font-mono text-xs tracking-[0.2em] text-[#B83A46]">
        THE RED DEVIL / PROJECTS
      </p>

      <p className="mt-6 text-xs uppercase tracking-[0.18em] text-white/50">
        {project.category}
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
        {project.title}
      </h1>

      <p className="mt-6 text-lg leading-8 text-white/70">
        {project.description}
      </p>

      <section className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.18em] text-[#B83A46]">
          {project.status}
        </p>
        <h2 className="mt-4 text-xl font-semibold">About this project</h2>
        <p className="mt-4 leading-8 text-white/65">{project.details}</p>
      </section>

      <Link
        href="/#projects"
        className="mt-8 inline-flex rounded-lg border border-white/15 px-4 py-3 text-sm transition-colors hover:border-[#B83A46] hover:text-[#B83A46]"
      >
        Return to portfolio
      </Link>
    </article>
  );
}

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <main className="min-h-screen bg-[#111315] px-6 py-16 text-[#F0EFEA] sm:px-10">
      <Suspense
        fallback={
          <p className="mx-auto max-w-3xl font-mono text-sm text-[#B83A46]">
            Loading project...
          </p>
        }
      >
        <ProjectDetails params={params} />
      </Suspense>
    </main>
  );
}
