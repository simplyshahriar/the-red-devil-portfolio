import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { display, sans, mono } from "./fonts";
import "./globals.css";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hasnainshahriar.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hasnain Shahriar — Cybersecurity Researcher | Web Security | Reverse Engineering",
    template: "%s — Hasnain Shahriar",
  },
  description:
    "Personal Cybersecurity Portfolio of Hasnain Shahriar. Developing technical expertise across Web Application Security, Penetration Testing, Reverse Engineering, DFIR, and AI-assisted development.",
  keywords: [
    "Hasnain Shahriar",
    "Cybersecurity Researcher",
    "Web Application Security",
    "Penetration Testing",
    "Reverse Engineering",
    "DFIR",
    "Digital Forensics",
    "OWASP Top 10",
    "Burp Suite",
    "Ghidra",
    "AI Development",
  ],
  authors: [{ name: "Hasnain Shahriar", url: "https://github.com/simplyshahriar" }],
  creator: "Hasnain Shahriar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Hasnain Shahriar — Cybersecurity Portfolio",
    title: "Hasnain Shahriar — Cybersecurity Researcher",
    description:
      "Documenting a genuine learning and engineering journey across Web Application Security, Reverse Engineering, and Digital Forensics.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasnain Shahriar — Cybersecurity Researcher",
    description:
      "Web Application Security | Reverse Engineering | DFIR | AI-Assisted Development",
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
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-[#0B1112] text-[#E8F1EF] font-sans selection:bg-[#00E5C3]/20 selection:text-[#00E5C3]" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
