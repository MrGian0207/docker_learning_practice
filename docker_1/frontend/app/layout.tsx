import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Docker Development",
  description: "Next.js with Docker and hot reloading for development",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
