import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learning Tracker - 6-Month Full Stack Journey",
  description: "Track your progress through a comprehensive 6-month full-stack development learning plan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

