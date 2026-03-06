import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ALT FIT - AI Fashion Assistant",
  description: "Discover your perfect style with ALT FIT. AI-powered outfit recommendations, wardrobe management, and personalized fashion insights.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
