import Link from "next/link";
import { notFound } from "next/navigation";

const data: Record<string, { title: string; description: string }> = {
  "web-application-security-lab": {
    title: "Web Application Security Lab",
    description: "A learning project focused on web application security, authorized testing, and documenting findings."
  },
  "recon-research-notes": {
    title: "Recon Research Notes",
    description: "Research notes covering reconnaissance concepts, information gathering, and responsible security research."
  },
  "security-workflow-toolkit": {
    title: "Security Workflow Toolkit",
    description: "A toolkit concept for organizing security workflows, checklists, and research documentation."
  }
};

export function generateStaticParams() {
  return [
    { slug: "web-application-security-lab" },
    { slug: "recon-research-notes" },
    { slug: "security-workflow-toolkit" },
  ];
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = data[slug];
  if (!item) notFound();

  return (
    <main className="min-h-screen bg-[#070a08] px-6 py-16 text-white">
      <article className="mx-auto max-w-3xl">
        <Link href="/#projects" className="text-lime-300">← Back to projects</Link>
        <p className="mt-12 font-mono text-sm text-lime-300">THE RED DEVIL / PROJECT</p>
        <h1 className="mt-4 text-4xl font-bold">{item.title}</h1>
        <p className="mt-6 leading-8 text-slate-300">{item.description}</p>
        <p className="mt-8 text-slate-400">Project details and documentation will be added here.</p>
      </article>
    </main>
  );
}

