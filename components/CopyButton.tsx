"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyButton({
  text,
}: {
  text: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={`
        inline-flex
        items-center
        gap-2
        rounded-xl
        px-4
        py-2.5
        text-sm
        font-medium
        transition-all
        duration-200
        ${
          copied
            ? "bg-emerald-600 text-white"
            : "border border-slate-200 bg-white text-slate-700 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
        }
      `}
    >
      {copied ? (
        <>
          <Check size={16} />
          Copied!
        </>
      ) : (
        <>
          <Copy size={16} />
          Copy Prompt
        </>
      )}
    </button>
  );
}