export default function Features() {
  const items = [
    "Premium AI Prompts",
    "AI Tutorials",
    "AI Tools",
    "Weekly Updates",
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-6 md:grid-cols-4">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h3 className="font-semibold">{item}</h3>

            <p className="mt-2 text-sm text-gray-500">
              Built to help you stay ahead in AI.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}