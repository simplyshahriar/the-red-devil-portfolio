import Link from "next/link";
import { notFound } from "next/navigation";
import { getResearchNoteBySlug, researchNotes } from "../../lib/data";

export function generateStaticParams() {
  return researchNotes.map((note) => ({ slug: note.slug }));
}

export default async function ResearchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getResearchNoteBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0B1112] text-[#E8F1EF] py-16 px-4 sm:px-6 lg:px-8">
      <article className="mx-auto w-full max-w-3xl space-y-6">
        <div className="flex items-center justify-between border-b border-[#00E5C3]/15 pb-4 text-xs font-mono">
          <Link
            href="/#notes"
            className="inline-flex items-center text-[#00E5C3] hover:underline"
          >
            ← Return to Notes &amp; Knowledge Base
          </Link>
          <span className="text-[#91A5A1]">
            NOTE REF: {item.number} {"//"} {item.category}
          </span>
        </div>

        <div className="pt-4">
          <p className="font-mono text-xs uppercase tracking-widest text-[#00E5C3]">
            Technical Documentation
          </p>

          <h1 className="mt-3 font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#E8F1EF]">
            {item.title}
          </h1>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#91A5A1]">
            {item.description}
          </p>
        </div>

        <div className="rounded-xl border border-white/[0.08] bg-[#142122] p-6 space-y-3">
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[#00E5C3]">
            Methodology &amp; Scope Note
          </h2>
          <p className="text-sm leading-relaxed text-[#91A5A1]">
            This entry documents practical testing checklists, vulnerability classification principles, and research notes gathered through independent laboratory study and authorized security exercises.
          </p>
          <div className="pt-2 font-mono text-[11px] text-[#91A5A1]">
            FOCUS: Responsible Security Research &amp; Continuous Learning
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.08] text-center font-mono text-xs">
          <Link
            href="/#notes"
            className="inline-block rounded border border-[#00E5C3] bg-[#00E5C3] px-6 py-2.5 font-semibold text-[#0B1112] hover:bg-[#35BDF2]"
          >
            Back to Notes &amp; Knowledge Base
          </Link>
        </div>
      </article>
    </main>
  );
}
