"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function toggleButton() {
      setVisible(window.scrollY > 500);
    }

    window.addEventListener("scroll", toggleButton);

    return () => window.removeEventListener("scroll", toggleButton);
  }, []);

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      onClick={scrollTop}
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-emerald-600 ${
        visible
          ? "opacity-100 translate-y-0"
          : "pointer-events-none opacity-0 translate-y-4"
      }`}
    >
      <ChevronUp size={22} />
    </button>
  );
}