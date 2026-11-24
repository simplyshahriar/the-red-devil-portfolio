import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { display, sans, mono } from "./fonts";
import "./globals.css";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hasnainshahriar.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hasnain Shahriar — Cybersecurity Researcher | Penetration Tester | WordPress Security",
    template: "%s — Hasnain Shahriar",
  },
  description:
    "Personal Cybersecurity Portfolio of Hasnain Shahriar. Cybersecurity Researcher & Penetration Tester focusing on WordPress Malware Removal, Web App Pentesting, System Security, and OSINT.",
  keywords: [
    "Hasnain Shahriar",
    "Cybersecurity Researcher",
    "Penetration Tester",
    "WordPress Security",
    "WordPress Malware Removal",
    "Web Application Penetration Testing",
    "System Hacking",
    "Linux Security",
    "OSINT",
    "Reconnaissance",
    "OWASP Top 10",
    "Burp Suite",
    "GoEdu Vulnerability Discovery",
  ],
  authors: [{ name: "Hasnain Shahriar", url: "https://github.com/simplyshahriar" }],
  creator: "Hasnain Shahriar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Hasnain Shahriar — Cybersecurity Portfolio",
    title: "Hasnain Shahriar — Cybersecurity Researcher | Penetration Tester",
    description:
      "Cybersecurity Researcher & Penetration Tester focusing on WordPress Malware Removal, Web Application Security, System Hacking, and OSINT.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasnain Shahriar — Cybersecurity Researcher | Penetration Tester",
    description:
      "WordPress Security | Web Application Penetration Testing | System Hacking | OSINT",
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
