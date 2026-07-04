import Sidebar from "@/components/Sidebar";
import VaultContent from "@/components/VaultContent";
import { getPrompts } from "@/lib/wordpress";

export const revalidate = 60;

export default async function VaultPage() {
  const prompts = await getPrompts();

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <div className="flex">
        <Sidebar />

        <section className="min-w-0 flex-1 px-3 py-5 sm:px-5 md:px-8 lg:px-10 lg:py-8">
          <VaultContent prompts={prompts} />
        </section>
      </div>
    </main>
  );
}