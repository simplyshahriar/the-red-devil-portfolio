
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RedTrace | Cybersecurity Portfolio",
  description:
    "Personal portfolio for cybersecurity research and web application security.",
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
