import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xolvyn — Build the Future",
  description: "Full-stack digital agency crafting next-gen web experiences, AI solutions, and scalable platforms.",
  keywords: "web development, AI, agency, full-stack, digital, xolvyn, Bangladesh",
  openGraph: {
    title: "Xolvyn — Build the Future",
    description: "Full-stack digital agency crafting next-gen web experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0a0a0f] text-[#e8e8f0] min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
