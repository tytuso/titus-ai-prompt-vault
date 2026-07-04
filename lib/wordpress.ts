import { Prompt } from "@/types/prompt";

export const WORDPRESS_API =
  "https://cms.titussimplifies.com/wp-json/wp/v2";

export async function getPrompts(): Promise<Prompt[]> {
  const res = await fetch(
    `${WORDPRESS_API}/prompt?_embed&per_page=100`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch prompts");
  }

  return res.json();
}