"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const items = [
  { label: "All Prompts", value: "all" },
  { label: "ChatGPT", value: "ChatGPT" },
  { label: "Gemini", value: "Gemini" },
  { label: "Claude", value: "Claude" },
  { label: "Business", value: "Business" },
  { label: "Marketing", value: "Marketing" },
  { label: "Students", value: "Students" },
  { label: "Programming", value: "Programming" },
  { label: "Writing", value: "Writing" },
  { label: "Productivity", value: "Productivity" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MOBILE HEADER */}

      <header className="sticky top-0 z-40 flex h-16 items-center border-b border-slate-200 bg-white px-4 lg:hidden">
        <button
          onClick={() => setOpen(true)}
          className="rounded-lg p-2 transition hover:bg-slate-100"
        >
          <Menu size={22} />
        </button>

        <Link
          href="/vault"
          className="ml-3 text-xl font-extrabold tracking-tight"
        >
          TITUS <span className="text-emerald-500">AI</span>
        </Link>
      </header>

      {/* MOBILE DRAWER */}

      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          open
            ? "pointer-events-auto bg-black/40 opacity-100"
            : "pointer-events-none bg-black/0 opacity-0"
        }`}
        onClick={() => setOpen(false)}
      >
        <aside
          onClick={(e) => e.stopPropagation()}
          className={`absolute left-0 top-0 h-full w-72 overflow-y-auto bg-white px-6 py-6 shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight">
                TITUS <span className="text-emerald-500">AI</span>
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                AI Prompt Vault
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="rounded-lg p-2 transition hover:bg-slate-100"
            >
              <X size={20} />
            </button>
          </div>

          {/* Buttons */}

          <div className="mb-8 space-y-3">
            <a
              href="https://forms.gle/oLaL7wwRNhWoD5rg9"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl bg-emerald-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              ✨ Request Prompt
            </a>

            <a
              href="https://forms.gle/m8y3omPVZpBMc5oD7"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-slate-300 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              💡 Submit Prompt
            </a>
          </div>

          {/* Categories */}

          <nav className="space-y-1">
            {items.map((item) => (
              <Link
                key={item.value}
                href={`/vault?category=${item.value}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-[16px] font-medium text-slate-700 transition hover:bg-slate-100 hover:text-emerald-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
      </div>

      {/* DESKTOP */}

      <aside className="hidden w-64 shrink-0 bg-[#FAFAFA] lg:block">
        <div className="sticky top-0 h-screen overflow-y-auto px-8 py-10">

          <Link href="/vault">
            <h1 className="text-4xl font-extrabold tracking-tight">
              TITUS <span className="text-emerald-500">AI</span>
            </h1>
          </Link>

          <p className="mt-2 text-sm text-slate-500">
            AI Prompt Vault
          </p>

          <div className="mt-6 space-y-3">
            <a
              href="https://forms.gle/oLaL7wwRNhWoD5rg9"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl bg-emerald-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              ✨ Request Prompt
            </a>

            <a
              href="https://forms.gle/m8y3omPVZpBMc5oD7"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-slate-300 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              💡 Submit Prompt
            </a>
          </div>

          <nav className="mt-10 space-y-2">
            {items.map((item) => (
              <Link
                key={item.value}
                href={`/vault?category=${item.value}`}
                className="block rounded-lg px-3 py-3 text-[16px] font-medium text-slate-700 transition hover:bg-slate-100 hover:text-emerald-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

        </div>
      </aside>
    </>
  );
}