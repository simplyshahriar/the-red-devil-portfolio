import Link from "next/link";
import { notFound } from "next/navigation";

const data: Record<string, { title: string; description: string }> = {
  "web-application-security": {
    title: "Introduction to Web Application Security",
    description: "An introductory note covering web application security concepts, authorized testing, and responsible reporting."
  },
  "osint-recon-fundamentals": {
    title: "Reconnaissance and OSINT Fundamentals",
    description: "An introduction to passive reconnaissance, reliable public sources, and responsible OSINT practices."
  },
  "responsible-security-research": {
    title: "Responsible Security Research",
    description: "Notes on authorization, defining scope, documenting findings, and responsible vulnerability disclosure."
  }
};

export function generateStaticParams() {
  return [
    { slug: "web-application-security" },
    { slug: "osint-recon-fundamentals" },
    { slug: "responsible-security-research" },
  ];
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = data[slug];
  if (!item) notFound();

  return (
    <main className="min-h-screen bg-[#070a08] px-6 py-16 text-white">
      <article className="mx-auto max-w-3xl">
        <Link href="/#research" className="text-lime-300">← Back to research</Link>
        <p className="mt-12 font-mono text-sm text-lime-300">THE RED DEVIL / RESEARCH</p>
        <h1 className="mt-4 text-4xl font-bold">{item.title}</h1>
        <p className="mt-6 leading-8 text-slate-300">{item.description}</p>
      </article>
    </main>
  );
}

