"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EmailCard() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function continueToVault() {
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email.");
      return;
    }

    setLoading(true);

    // We'll replace this URL after creating Google Sheets
    await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    });

    setTimeout(() => {
      router.push("/vault");
    }, 700);
  }

  return (
    <div className="mx-auto max-w-3xl rounded-[30px] border border-gray-200 bg-white p-8 shadow-lg shadow-gray-100">

      <div className="space-y-5">

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full Name"
          className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-emerald-500"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email Address"
          className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-emerald-500"
        />

        <button
          onClick={continueToVault}
          className="w-full rounded-2xl bg-[#111827] py-4 font-semibold text-white hover:bg-[#1F2937]"
        >
          {loading ? "Opening Vault..." : "Unlock Free Prompt Vault →"}
        </button>

        <p className="text-center text-xs text-gray-400">
          ✓ Free forever • No spam • Unsubscribe anytime
        </p>

      </div>

    </div>
  );
}