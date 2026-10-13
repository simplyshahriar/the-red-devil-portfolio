
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const data: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  "web-application-security": {
    title: "Introduction to Web Application Security",
    description:
      "An introductory note covering web application security concepts, authorized testing, and responsible reporting.",
  },
  "osint-recon-fundamentals": {
    title: "Reconnaissance and OSINT Fundamentals",
    description:
      "An introduction to passive reconnaissance, reliable public sources, and responsible OSINT practices.",
  },
  "responsible-security-research": {
    title: "Responsible Security Research",
    description:
      "Notes on authorization, defining scope, documenting findings, and responsible vulnerability disclosure.",
  },
};

export function generateStaticParams() {
  return Object.keys(data).map((slug) => ({ slug }));
}

async function ResearchContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = data[slug];

  if (!item) {
    notFound();
  }

  return (
    <article className="mx-auto w-full max-w-3xl">
      <Link
        href="/#research"
        className="inline-flex items-center text-[#E45B66] transition-colors hover:text-[#F2A0A6]"
      >
        ← Back to research
      </Link>

      <p className="mt-12 font-mono text-sm tracking-widest text-[#E45B66]">
        THE RED DEVIL / RESEARCH
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#F0EFEA] sm:text-5xl">
        {item.title}
      </h1>

      <p className="mt-6 text-base leading-8 text-[#D0D0CD]">
        {item.description}
      </p>

      <div className="mt-10 rounded-xl border border-white/[0.09] bg-[#191C1F] p-6">
        <h2 className="text-lg font-semibold text-[#F0EFEA]">
          Research Documentation
        </h2>

        <p className="mt-3 leading-7 text-[#A1A3A5]">
          Detailed research notes, methodology, references, and findings will
          be added here.
        </p>
      </div>

      <Link
        href="/#research"
        className="mt-8 inline-flex rounded-lg border border-[#B83A46]/50 px-4 py-2 text-sm text-[#E45B66] transition-colors hover:bg-[#B83A46]/10 hover:text-[#F2A0A6]"
      >
        Back to all research
      </Link>
    </article>
  );
}

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <main className="min-h-screen bg-[#111315] px-6 py-16 text-[#F0EFEA] sm:px-10">
      <Suspense
        fallback={
          <p className="mx-auto max-w-3xl font-mono text-sm text-[#E45B66]">
            Loading research...
          </p>
        }
      >
        <ResearchContent params={params} />
      </Suspense>
    </main>
  );
}
