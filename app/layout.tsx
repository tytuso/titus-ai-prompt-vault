import type { Metadata } from "next";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "TITUS AI Prompt Vault",
  description: "Premium AI Prompt Vault by Titus Simplifies AI.",

  manifest: "/manifest.json",

  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },

  applicationName: "TITUS AI",

  keywords: [
    "AI",
    "ChatGPT",
    "Gemini",
    "Claude",
    "AI Prompts",
    "Prompt Vault",
    "Artificial Intelligence",
  ],

  authors: [
    {
      name: "Titus Simplifies AI",
      url: "https://titussimplifies.com",
    },
  ],

  creator: "Titus Simplifies AI",

  metadataBase: new URL("https://prompts.titussimplifies.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "Poppins, sans-serif",
          background: "#FAFAFA",
          color: "#111827",
        }}
      >
        {children}
      </body>
    </html>
  );
}