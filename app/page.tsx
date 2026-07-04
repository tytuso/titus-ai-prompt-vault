import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FAFAFA]">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 -top-40 h-[500px] w-[500px] rounded-full bg-teal-300/15 blur-3xl" />

        <div className="absolute -right-48 top-0 h-[450px] w-[450px] rounded-full bg-sky-300/15 blur-3xl" />

        <div className="absolute bottom-[-200px] left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-indigo-300/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Footer />
      </div>

    </main>
  );
}