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
    <main className="min-h-screen bg-[#081010] text-[#e5f2f2] font-mono py-16 px-4 sm:px-6 lg:px-8">
      <article className="mx-auto w-full max-w-3xl space-y-6">
        <div className="flex items-center justify-between border-b border-[#00f2fe]/20 pb-4 text-xs">
          <Link
            href="/#overview"
            className="inline-flex items-center text-[#00f2fe] hover:underline"
          >
            ← RETURN_TO_OVERVIEW
          </Link>
          <span className="text-[#6c8585]">
            DOCUMENT_REF: {item.number} {"//"} {item.category}
          </span>
        </div>

        <div className="pt-4">
          <p className="font-mono text-xs uppercase tracking-widest text-[#00f2fe]">
            SEC_OPS / RESEARCH ADVISORY
          </p>

          <h1 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-[#e5f2f2]">
            {item.title}
          </h1>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#8fa3a3]">
            {item.description}
          </p>
        </div>

        <div className="rounded-lg border border-[#00f2fe]/15 bg-[#0d1515] p-6 space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#00f2fe]">
            [RESEARCH PROTOCOL & SCOPE]
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed text-[#8fa3a3]">
            This advisory document records structured testing methodologies, vulnerability classification standards, and evidence handling frameworks developed through independent security research and authorized lab environments.
          </p>
          <div className="pt-2 text-[11px] text-[#6c8585]">
            STATUS: DOCUMENTED // PEER REVIEW READY
          </div>
        </div>

        <div className="pt-8 border-t border-[#00f2fe]/20 text-center">
          <Link
            href="/#overview"
            className="inline-block rounded border border-[#00f2fe] bg-[#00f2fe] px-6 py-2.5 text-xs font-bold uppercase text-[#081010] hover:bg-[#4facfe]"
          >
            Back to SEC_OPS Portal
          </Link>
        </div>
      </article>
    </main>
  );
}
