"use client";

import { useState } from "react";
import Image from "next/image";

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  recipient: string;
  issuedDate?: string;
  status: "Completed" | "In Progress" | "Verified";
  credentialUrl?: string;
  image?: string; // Path if available
  skills: string[];
  type: "certification" | "course";
  note?: string;
};

export const certificatesData: Certificate[] = [
  {
    id: "claude-101",
    title: "Claude 101",
    issuer: "Anthropic",
    recipient: "Hasnain Shahriar",
    status: "Completed",
    image: "/certificates/claude-101.jpg",
    skills: [
      "Claude AI Fundamentals",
      "Prompt Architecture",
      "Model Capabilities & Parameters",
      "Context Management",
    ],
    type: "course",
  },
  {
    id: "cisco-intro-cybersecurity",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    recipient: "Hasnain Shahriar",
    issuedDate: "October 2026",
    status: "Verified",
    credentialUrl: "https://www.credly.com/users/hasnain-shahriar/badges",
    image: "/images/certifications/cisco-intro-cybersecurity.png",
    skills: [
      "Cyber Threat Landscape",
      "Network & Endpoint Protection",
      "Online Safety & Defense",
      "Vulnerability Mitigation Basics",
    ],
    type: "certification",
  },
  {
    id: "codered-cloud-computing",
    title: "A Practical Introduction to Cloud Computing",
    issuer: "Codered Continuous Learning",
    recipient: "Hasnain Shahriar",
    issuedDate: "October 2026",
    status: "Completed",
    image: "/images/certifications/codered-cloud-computing.png",
    skills: [
      "Cloud Architecture",
      "Virtualization & Containerization",
      "Infrastructure Security Basics",
      "Cloud Services Model",
    ],
    type: "course",
  },
  {
    id: "codered-dark-web",
    title: "Introduction to Dark Web, Anonymity, and Cryptocurrency",
    issuer: "Codered Continuous Learning",
    recipient: "Hasnain Shahriar",
    issuedDate: "October 2026",
    status: "Completed",
    image: "/images/certifications/codered-dark-web.png",
    skills: [
      "Dark Web Architecture & Tor",
      "Digital Anonymity Protocols",
      "Cryptocurrency & Blockchain Basics",
      "Threat Intelligence & Recon",
    ],
    type: "course",
  },
];

export default function CertificationsGallery() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    title: string;
    issuer: string;
  } | null>(null);

  return (
    <section id="certifications" className="py-20 border-b border-[#00E5C3]/15 bg-[#101A1B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5C3]">
              {"// Verified Credentials & Learning"}
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#E8F1EF]">
              Certifications &amp; Achievements
            </h2>
            <p className="mt-2 text-sm text-[#91A5A1] max-w-2xl">
              Authentic certifications and completed coursework validating cybersecurity foundations, AI tools, and specialized technical disciplines.
            </p>
          </div>
          <span className="font-mono text-xs text-[#00E5C3] border border-[#00E5C3]/30 bg-[#00E5C3]/10 px-3 py-1.5 rounded-full w-fit">
            {certificatesData.length} Documented Credentials
          </span>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificatesData.map((cert) => {
            const hasImage = Boolean(cert.image);
            return (
              <div
                key={cert.id}
                className="group flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#142122] p-5 transition-all duration-200 hover:border-[#00E5C3]/50 hover:bg-[#18282A] shadow-lg shadow-black/40"
              >
                <div>
                  {/* Image Preview / Placeholder */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden rounded-lg border border-white/[0.08] bg-[#0B1112]">
                    {hasImage ? (
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedImage({
                            src: cert.image!,
                            alt: `${cert.title} Certificate awarded to ${cert.recipient} by ${cert.issuer}`,
                            title: cert.title,
                            issuer: cert.issuer,
                          })
                        }
                        className="group/img relative h-full w-full cursor-zoom-in text-left focus:outline-none"
                      >
                        <Image
                          src={cert.image!}
                          alt={`${cert.title} Certificate awarded to ${cert.recipient} by ${cert.issuer}`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-300 group-hover/img:scale-105"
                          priority={cert.id === "claude-101"}
                        />
                        <div className="absolute inset-0 bg-[#0B1112]/40 opacity-0 transition-opacity duration-200 group-hover/img:opacity-100 flex items-center justify-center">
                          <span className="rounded-md border border-[#00E5C3] bg-[#0B1112]/90 px-3 py-1.5 font-mono text-[11px] font-semibold text-[#00E5C3] shadow-md">
                            🔍 View Full Certificate
                          </span>
                        </div>
                      </button>
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center p-4 text-center">
                        <span className="font-mono text-2xl text-[#91A5A1]/40 mb-2">📜</span>
                        <p className="font-mono text-xs font-semibold text-[#E8F1EF]">{cert.title}</p>
                        <p className="mt-1 font-mono text-[10px] text-[#91A5A1]">{cert.issuer}</p>
                        <span className="mt-2 rounded bg-white/[0.05] px-2 py-0.5 font-mono text-[9px] text-[#91A5A1]">
                          Credential On Record
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Badges Bar */}
                  <div className="mt-4 flex items-center justify-between font-mono text-[10px]">
                    <span className="rounded bg-[#00E5C3]/10 border border-[#00E5C3]/30 px-2 py-0.5 text-[#00E5C3] uppercase">
                      {cert.status}
                    </span>
                    <span className="text-[#91A5A1] uppercase">
                      {cert.type === "certification" ? "Certification" : "Course"}
                    </span>
                  </div>

                  {/* Title & Metadata */}
                  <h3 className="mt-3 font-display text-lg font-bold text-[#E8F1EF] group-hover:text-[#00E5C3] transition-colors">
                    {cert.title}
                  </h3>
                  
                  <div className="mt-1 space-y-0.5 font-mono text-[11px] text-[#91A5A1]">
                    <p><span className="text-[#E8F1EF]">Issuer:</span> {cert.issuer}</p>
                    <p><span className="text-[#E8F1EF]">Recipient:</span> {cert.recipient}</p>
                    {cert.issuedDate && (
                      <p><span className="text-[#E8F1EF]">Issued:</span> {cert.issuedDate}</p>
                    )}
                  </div>

                  {/* Skills Tag Cloud */}
                  <div className="mt-4 flex flex-wrap gap-1 font-mono text-[10px]">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded border border-white/[0.06] bg-[#0B1112] px-2 py-0.5 text-[#91A5A1]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {cert.note && (
                    <p className="mt-3 text-[11px] italic text-[#91A5A1] border-l-2 border-[#00E5C3]/40 pl-2">
                      {cert.note}
                    </p>
                  )}
                </div>

                {/* Card Footer Actions */}
                <div className="mt-5 border-t border-white/[0.06] pt-3.5 flex items-center justify-between font-mono text-xs">
                  {hasImage ? (
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedImage({
                          src: cert.image!,
                          alt: `${cert.title} Certificate awarded to ${cert.recipient} by ${cert.issuer}`,
                          title: cert.title,
                          issuer: cert.issuer,
                        })
                      }
                      className="inline-flex items-center gap-1.5 text-[#00E5C3] hover:underline"
                    >
                      <span>View Certificate</span>
                      <span>↗</span>
                    </button>
                  ) : (
                    <span className="text-[11px] text-[#91A5A1]">Verified Completion</span>
                  )}

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#35BDF2] hover:underline text-[11px]"
                    >
                      Verify Credential ↗
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Modal for High-Resolution Certificate Viewing */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[92vh] max-w-4xl w-full rounded-2xl border border-[#00E5C3]/40 bg-[#101A1B] p-4 sm:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between border-b border-white/[0.1] pb-3 mb-4">
              <div>
                <h4 className="font-display text-lg font-bold text-[#E8F1EF]">
                  {selectedImage.title}
                </h4>
                <p className="font-mono text-xs text-[#00E5C3]">
                  Issued by {selectedImage.issuer} · Hasnain Shahriar
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                aria-label="Close certificate lightbox"
                className="rounded-lg border border-white/[0.15] bg-[#142122] px-3 py-1.5 font-mono text-xs text-[#E8F1EF] transition-colors hover:border-[#00E5C3] hover:text-[#00E5C3]"
              >
                ✕ Close
              </button>
            </div>

            {/* Lightbox Image Preview */}
            <div className="relative aspect-[16/11] max-h-[72vh] w-full overflow-hidden rounded-xl border border-white/[0.1] bg-[#0B1112]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
                priority
              />
            </div>

            {/* Direct Link in Lightbox */}
            <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-[#91A5A1]">
              <span>Asset path: {selectedImage.src}</span>
              <a
                href={selectedImage.src}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00E5C3] hover:underline"
              >
                Open Original in New Tab ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
