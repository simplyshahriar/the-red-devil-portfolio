import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { sans, mono } from "./fonts";
import "./globals.css";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://yourdomain.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hasnain Shahriar — The Red Devil | Cybersecurity Portfolio",
    template: "%s — The Red Devil",
  },
  description:
    "Portfolio of Hasnain Shahriar — cybersecurity researcher focused on web application security, penetration testing, OSINT, and reverse engineering.",
  keywords: [
    "Hasnain Shahriar",
    "cybersecurity",
    "penetration testing",
    "web application security",
    "OSINT",
    "reverse engineering",
    "The Red Devil",
    "security research",
  ],
  authors: [{ name: "Hasnain Shahriar" }],
  creator: "Hasnain Shahriar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "The Red Devil",
    title: "Hasnain Shahriar — The Red Devil",
    description:
      "Cybersecurity researcher focused on web application security, penetration testing, and OSINT.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasnain Shahriar — The Red Devil",
    description:
      "Cybersecurity researcher focused on web application security, penetration testing, and OSINT.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon", apple: "/apple-icon" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}