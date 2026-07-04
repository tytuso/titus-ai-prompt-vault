import EmailCard from "./EmailCard";

export default function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-24 pb-16 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-teal-600">
        TITUS AI
      </p>

      <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-[#111827] md:text-7xl">
        Stay Ahead in
        <br />
        the AI Revolution.
      </h1>

      <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-8 text-gray-600">
        Discover practical AI prompts, tools and resources that help you learn
faster, work smarter and stay ahead of everyone else.
      </p>

      <div className="mt-14">
        <EmailCard />
      </div>

      <p className="mt-5 text-xs text-gray-400">
        No spam • Free forever
      </p>
    </section>
  );
}