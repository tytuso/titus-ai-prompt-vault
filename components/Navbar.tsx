"use client";

import { Menu } from "lucide-react";

export default function Navbar({
  onMenuClick,
}: {
  onMenuClick: () => void;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 transition hover:bg-gray-100 lg:hidden"
        >
          <Menu size={22} />
        </button>

        <h1 className="text-[28px] font-black tracking-tight">
          TITUS<span className="text-emerald-500"> AI</span>
        </h1>

        <div className="hidden items-center gap-8 text-[14px] text-gray-500 lg:flex">

          <a href="#">YouTube</a>

          <a href="#">Community</a>

        </div>

      </div>

    </header>
  );
}