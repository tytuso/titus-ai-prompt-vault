"use client";

import { Search } from "lucide-react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="sticky top-16 lg:top-0 z-20 bg-[#FAFAFA] pb-5">
      <div className="relative max-w-3xl">
        <Search
          size={20}
          className="absolute left-5 top-1/2 -translate-y-1/2 -translate-x-0 text-slate-400"
        />

        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search prompts..."
          className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-14 pr-5 text-sm outline-none transition focus:border-emerald-500"
        />
      </div>
    </div>
  );
}