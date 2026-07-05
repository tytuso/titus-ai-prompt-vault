"use client";

import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
  }>;
}

export default function InstallAppButton() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handler(e: Event) {
      e.preventDefault();

      setDeferredPrompt(
        e as BeforeInstallPromptEvent
      );

      setVisible(true);
    }

    window.addEventListener(
      "beforeinstallprompt",
      handler
    );

    return () =>
      window.removeEventListener(
        "beforeinstallprompt",
        handler
      );
  }, []);

  async function install() {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();

    await deferredPrompt.userChoice;

    setVisible(false);

    setDeferredPrompt(null);
  }

  if (!visible) return null;

  return (
    <button
      onClick={install}
      className="fixed bottom-24 right-6 z-50 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:scale-105"
    >
      📲 Install App
    </button>
  );
}