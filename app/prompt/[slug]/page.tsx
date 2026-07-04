import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Sparkles } from "lucide-react";

import CopyButton from "@/components/CopyButton";
import { getPrompts } from "@/lib/wordpress";

export const revalidate = 60;

export default async function PromptPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const prompts = await getPrompts();

  const prompt = prompts.find((p: any) => p.slug === slug);

  if (!prompt) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <div className="mx-auto max-w-4xl px-5 py-8 md:px-8 lg:px-10">

        <Link
          href="/vault"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
        >
          <ArrowLeft size={17} />
          Back to Vault
        </Link>

        {/* Badges */}

        <div className="mt-8 flex flex-wrap gap-2">

          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
            {prompt.acf.category}
          </span>

          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
            {prompt.acf.difficulty}
          </span>

          {prompt.acf.trending && (
            <span className="flex items-center gap-1 rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">
              <Sparkles size={12} />
              Trending
            </span>
          )}

        </div>

        {/* Title */}

        <h1 className="mt-6 max-w-3xl text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          {prompt.title.rendered}
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-500">
          {prompt.content.rendered.replace(/<[^>]+>/g, "")}
        </p>

        {/* Prompt */}

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white shadow-sm">

          <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">

            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Prompt
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Copy and paste into your preferred AI assistant.
              </p>
            </div>

            <CopyButton text={prompt.acf.prompt_text} />

          </div>

          <div className="p-6">

            <pre className="overflow-x-auto whitespace-pre-wrap rounded-xl bg-slate-50 p-6 text-[14px] leading-7 text-slate-700">
              {prompt.acf.prompt_text}
            </pre>

          </div>

        </div>

      </div>
    </main>
  );
}