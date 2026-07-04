"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

type Prompt = {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  difficulty: string;
  featured?: boolean;
  trending?: boolean;
  copyCount?: number;
};

export default function PromptCard({
  prompt,
}: {
  prompt: Prompt;
}) {
  return (
    <Link
      href={`/prompt/${prompt.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
    >
      {/* Top */}

      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
          {prompt.category}
        </span>

        {prompt.trending && (
          <span className="flex items-center gap-1 rounded-full bg-violet-100 px-2.5 py-1 text-[11px] font-medium text-violet-700">
            <Sparkles size={12} />
            Trending
          </span>
        )}
      </div>

      {/* Title */}

      <h2 className="mt-5 text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-emerald-600">
        {prompt.title}
      </h2>

      {/* Description */}

      <p className="mt-3 flex-1 text-sm leading-7 text-slate-500">
        {prompt.description}
      </p>

      {/* Bottom */}

      <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
        <div>
          <p className="text-xs text-slate-400">
            {prompt.difficulty}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            {prompt.copyCount ?? 100}+ copies
          </p>
        </div>

        <span className="flex items-center gap-1 font-semibold text-emerald-600 transition-all group-hover:gap-2">
          Open
          <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}