import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LearningHub - Level Up Your Development & Soft Skills",
  description: "Interactive lessons, hands-on projects, and quizzes to prove your expertise. Learn practical skills from industry experts and transform your career.",
  keywords: "online learning, programming courses, skill development, web development, python, soft skills, certification",
  authors: [{ name: "LearningHub" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://learninghub.dev",
    title: "LearningHub - Level Up Your Development & Soft Skills",
    description: "Interactive lessons, hands-on projects, and quizzes to prove your expertise",
    siteName: "LearningHub",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
