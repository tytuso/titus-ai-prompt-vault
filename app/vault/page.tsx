import Sidebar from "@/components/Sidebar";
import VaultContent from "@/components/VaultContent";
import { getPrompts } from "@/lib/wordpress";
import ScrollToTop from "@/components/ScrollToTop";

export const revalidate = 60;

export default async function VaultPage({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string;
  }>;
}) {
  const { category } = await searchParams;

  const prompts = await getPrompts();

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <div className="block lg:flex">

        <Sidebar />

        <section className="w-full min-w-0 flex-1 px-4 py-5 lg:px-10 lg:py-8">

          <VaultContent
            prompts={prompts}
            selectedCategory={category ?? "all"}
          />

        </section>

      </div>
      <ScrollToTop />
    </main>
  );
}