import type { Metadata } from "next";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "TITUS AI",
  description: "Stay Ahead in the AI Revolution.",
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