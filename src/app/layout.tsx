import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { sans, mono } from "./fonts";
import "./globals.css";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hasnainshahriar.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hasnain Shahriar — SEC_OPS | Offensive Security Researcher",
    template: "%s — SEC_OPS",
  },
  description:
    "SEC_OPS — Terminal Portfolio of Hasnain Shahriar. Offensive Security Researcher & Penetration Tester specializing in Web Application Security, Cloud Penetration Testing, and Reverse Engineering.",
  keywords: [
    "Hasnain Shahriar",
    "SEC_OPS",
    "ethical hacker",
    "cybersecurity portfolio",
    "penetration testing",
    "web application security",
    "OSINT",
    "reverse engineering",
    "cloud security",
    "security research",
  ],
  authors: [{ name: "Hasnain Shahriar", url: "https://github.com/simplyshahriar" }],
  creator: "Hasnain Shahriar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "SEC_OPS — Ethical Hacker Portfolio",
    title: "Hasnain Shahriar — SEC_OPS | Offensive Security Researcher",
    description:
      "Terminal-inspired cybersecurity portfolio of Hasnain Shahriar. Focused on offensive security, attack surface mapping, and responsible research.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasnain Shahriar — SEC_OPS",
    description:
      "Offensive Security Researcher & Penetration Tester | SEC_OPS Portfolio",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon", apple: "/apple-icon" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-[#081010] text-[#e5f2f2] font-mono selection:bg-[#00f2fe]/20 selection:text-[#00f2fe]" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
