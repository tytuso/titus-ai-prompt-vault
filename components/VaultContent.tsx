"use client";

import { useMemo, useState } from "react";
import SearchBar from "./SearchBar";
import PromptCard from "./PromptCard";

export default function VaultContent({
  prompts,
  selectedCategory,
}: {
  prompts: any[];
  selectedCategory: string;
}) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return prompts.filter((prompt) => {
      const text = `${prompt.title.rendered}
${prompt.acf.category}
${prompt.content.rendered}`
        .replace(/<[^>]+>/g, "")
        .toLowerCase();

      const matchesSearch = text.includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" ||
        prompt.acf.category.toLowerCase() ===
          selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [search, prompts, selectedCategory]);

  const trending = filtered.filter((p) => p.acf.trending);

  const featured = filtered.filter(
    (p) => p.acf.featured && !p.acf.trending
  );

  const regular = filtered.filter(
    (p) => !p.acf.featured && !p.acf.trending
  );

  return (
    <>
      <SearchBar
        value={search}
        onChange={setSearch}
      />

      {/* Trending */}

      {trending.length > 0 && (
        <>
          <div className="mt-10">
            <h2 className="text-2xl font-bold md:text-3xl">
              🔥 Trending Prompts
            </h2>

            <p className="mt-2 text-slate-500">
              The most viewed AI prompts this week.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {trending.map((prompt) => (
              <PromptCard
                key={prompt.id}
                prompt={{
                  id: prompt.id,
                  slug: prompt.slug,
                  title: prompt.title.rendered,
                  description:
                    prompt.content.rendered
                      .replace(/<[^>]+>/g, "")
                      .slice(0, 90) + "...",
                  category: prompt.acf.category,
                  difficulty: prompt.acf.difficulty,
                  featured: prompt.acf.featured,
                  trending: prompt.acf.trending,
                  copyCount: prompt.acf.copy_count,
                }}
              />
            ))}
          </div>
        </>
      )}

      {/* Featured */}

      {featured.length > 0 && (
        <>
          <div className="mt-16">
            <h2 className="text-2xl font-bold md:text-3xl">
              ⭐ Featured Prompts
            </h2>

            <p className="mt-2 text-slate-500">
              Hand-picked prompts recommended by our editors.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((prompt) => (
              <PromptCard
                key={prompt.id}
                prompt={{
                  id: prompt.id,
                  slug: prompt.slug,
                  title: prompt.title.rendered,
                  description:
                    prompt.content.rendered
                      .replace(/<[^>]+>/g, "")
                      .slice(0, 90) + "...",
                  category: prompt.acf.category,
                  difficulty: prompt.acf.difficulty,
                  featured: prompt.acf.featured,
                  trending: prompt.acf.trending,
                  copyCount: prompt.acf.copy_count,
                }}
              />
            ))}
          </div>
        </>
      )}

      {/* Explore */}

      <div className="mt-16">
        <h2 className="text-2xl font-bold md:text-3xl">
          Explore Prompts
        </h2>

        <p className="mt-2 text-slate-500">
          Browse practical AI prompts for work, business and everyday productivity.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {regular.map((prompt) => (
          <PromptCard
            key={prompt.id}
            prompt={{
              id: prompt.id,
              slug: prompt.slug,
              title: prompt.title.rendered,
              description:
                prompt.content.rendered
                  .replace(/<[^>]+>/g, "")
                  .slice(0, 90) + "...",
              category: prompt.acf.category,
              difficulty: prompt.acf.difficulty,
              featured: prompt.acf.featured,
              trending: prompt.acf.trending,
              copyCount: prompt.acf.copy_count,
            }}
          />
        ))}
      </div>
    </>
  );
}