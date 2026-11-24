import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
    agentUpgrade: "security",
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  // ── Security Headers ───────────────────────────────────────────────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent MIME-type sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Referrer policy – send origin only on same-origin; no referrer cross-origin
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Restrict access to browser APIs via Permissions-Policy
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          // HSTS – 1 year, include sub-domains (Vercel enforces HTTPS)
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          // Content Security Policy
          // Allows: self, Vercel Analytics, Google Fonts, Upstash (rate-limit),
          //         Resend (email send), and the certificate images served from /public.
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // Scripts: self + Vercel Analytics inline bootstrap
              "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
              // Styles: self + Google Fonts + inline styles (Tailwind, motion)
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              // Fonts: self + Google Fonts
              "font-src 'self' https://fonts.gstatic.com",
              // Images: self + data URIs (Next.js image blurs) + blob
              "img-src 'self' data: blob:",
              // Connections: self + Vercel Analytics + Upstash edge API
              "connect-src 'self' https://va.vercel-scripts.com https://*.upstash.io https://api.resend.com",
              // No iframes from external origins
              "frame-src 'none'",
              // No embedding of this page in iframes on other origins
              "frame-ancestors 'none'",
              // No plugin embeds
              "object-src 'none'",
              // Base URI locked to self
              "base-uri 'self'",
              // Form submissions only to self
              "form-action 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
