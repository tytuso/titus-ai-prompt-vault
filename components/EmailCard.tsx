export default function EmailCard() {
  return (
    <div className="mx-auto max-w-3xl rounded-[30px] border border-gray-200 bg-white p-8 shadow-lg shadow-gray-100">
      <div className="space-y-5">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-2xl border border-gray-200 px-5 py-4 text-[15px] outline-none transition-all focus:border-teal-500 focus:shadow-sm"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-2xl border border-gray-200 px-5 py-4 text-[15px] outline-none transition-all focus:border-teal-500 focus:shadow-sm"
        />

        <select
          className="w-full rounded-2xl border border-gray-200 px-5 py-4 text-[15px] outline-none transition-all focus:border-teal-500 focus:shadow-sm"
        >
          <option>🌍 Detecting Country...</option>
        </select>

        <a
  href="/vault"
  className="block w-full rounded-2xl bg-[#111827] py-4 text-center text-[15px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-[#1F2937]"
>
  Continue →
</a>

        <p className="text-center text-xs text-gray-400">
          No spam • Free forever
        </p>
      </div>
    </div>
  );
}