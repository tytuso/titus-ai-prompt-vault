export interface Prompt {
  id: number;
  slug: string;

  title: {
    rendered: string;
  };

  content: {
    rendered: string;
  };

  acf: {
    category: string;
    difficulty: string;
    prompt_text: string;
    ai_model: string;
    featured: boolean;
    trending: boolean;
    copy_count: number;
  };
}