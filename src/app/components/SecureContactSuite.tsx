"use client";

import { useState, type FormEvent } from "react";

export default function SecureContactSuite() {
  const [copiedKey, setCopiedKey] = useState(false);
  const [copiedFingerprint, setCopiedFingerprint] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    classification: "MEDIUM",
    message: "",
    website: "", // Honeypot
  });
  const [status, setStatus] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);

  const PGP_FINGERPRINT = "9B8F 4D12 7E3A 905C 8821  F20A 1184 C0E5 4F32 88AA";
  const PGP_PUBLIC_KEY = `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: OpenPGP.js v5.11.0
Comment: SEC_OPS Ethical Hacker Key (Demo/Unverified)

mQGNBGdz...[4096-bit RSA SEC_OPS RESEARCHER PUBLIC KEY]...
...hasnainshahriar2007@gmail.com...
...UNVERIFIED KEYHOLDER PLACEHOLDER...
=9A12
-----END PGP PUBLIC KEY BLOCK-----`;

  const copyToClipboard = (text: string, type: "key" | "fp") => {
    navigator.clipboard.writeText(text);
    if (type === "key") {
      setCopiedKey(true);
      setTimeout(() => setCopiedKey(false), 2000);
    } else {
      setCopiedFingerprint(true);
      setTimeout(() => setCopiedFingerprint(false), 2000);
    }
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `[${form.classification}] ${form.name}`,
          email: form.email,
          message: form.message,
          website: form.website,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        setStatus(data.message || "Transmission failed. Rate limit or server error.");
        return;
      }

      setStatus(data.message || "Transmission received and logged securely.");
      setForm({ name: "", email: "", classification: "MEDIUM", message: "", website: "" });
    } catch {
      setStatus("Network error during secure dispatch. Please contact via direct email.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-b border-[#00f2fe]/15 bg-[#0d1515] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00f2fe]">
            {"// SECURE COMMUNICATION SUITE"}
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#e5f2f2]">
            ENCRYPTED DISPATCH & COORDINATION
          </h2>
          <p className="mt-2 max-w-2xl font-mono text-xs text-[#8fa3a3]">
            For security advisories, vulnerability disclosures, or authorized penetration testing inquiries.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* Left Column: PGP Keyring & Safe Harbor Policy */}
          <div className="space-y-8">
            
            {/* PGP Card */}
            <div id="pgp" className="rounded-lg border border-[#00f2fe]/20 bg-[#081010] p-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="font-mono text-xs text-[#00f2fe] uppercase">
                  PGP KEYRING SPECIFICATION
                </span>
                <span className="font-mono text-[10px] text-[#ffb300]">
                  [DEMO KEYPLACEHOLDER]
                </span>
              </div>

              <div className="mt-4 space-y-3 font-mono text-xs">
                <div>
                  <span className="text-[#6c8585]">ALGORITHM:</span>{" "}
                  <span className="text-[#e5f2f2]">RSA 4096-bit (GnuPG compliant)</span>
                </div>
                <div>
                  <span className="text-[#6c8585]">IDENTITY:</span>{" "}
                  <span className="text-[#e5f2f2]">Hasnain Shahriar &lt;hasnainshahriar2007@gmail.com&gt;</span>
                </div>
                <div className="rounded border border-white/[0.06] bg-[#0d1515] p-3 text-[11px]">
                  <span className="text-[#6c8585] block mb-1">KEY FINGERPRINT:</span>
                  <span className="text-[#00f2fe] font-mono select-all break-all">
                    {PGP_FINGERPRINT}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => copyToClipboard(PGP_FINGERPRINT, "fp")}
                    className="rounded border border-[#00f2fe]/30 bg-[#00f2fe]/10 px-3 py-1.5 text-xs text-[#00f2fe] hover:bg-[#00f2fe] hover:text-[#081010]"
                  >
                    {copiedFingerprint ? "✓ FINGERPRINT COPIED" : "COPY FINGERPRINT"}
                  </button>

                  <button
                    type="button"
                    onClick={() => copyToClipboard(PGP_PUBLIC_KEY, "key")}
                    className="rounded border border-white/[0.1] bg-[#111b1b] px-3 py-1.5 text-xs text-[#8fa3a3] hover:text-white"
                  >
                    {copiedKey ? "✓ KEY COPIED" : "COPY PUBLIC KEY (.ASC)"}
                  </button>
                </div>
              </div>
            </div>

            {/* Safe Harbor Policy Box */}
            <div id="safe-harbor" className="rounded-lg border border-white/[0.08] bg-[#081010] p-6 space-y-3 font-mono text-xs text-[#8fa3a3]">
              <div className="flex items-center gap-2 text-[#00ff88]">
                <span className="h-2 w-2 rounded-full bg-[#00ff88]" />
                <span className="font-bold uppercase tracking-wider">RESPONSIBLE DISCLOSURE & SAFE HARBOR</span>
              </div>
              <p className="leading-relaxed">
                Security activities conducted in accordance with this policy are considered authorized. Research must avoid data modification, denial of service, privacy violations, or destruction of production data.
              </p>
              <div className="text-[11px] space-y-1 text-[#6c8585] pt-1">
                <div>• Coordinated disclosure window: 90 days before public disclosure.</div>
                <div>• Testing scope: Authorized testing targets and designated domains only.</div>
                <div>• Evidence preservation: Proof-of-concept retained with strict minimal exposure.</div>
              </div>
            </div>

          </div>

          {/* Right Column: Encrypted Transmission Form */}
          <div className="rounded-lg border border-[#00f2fe]/25 bg-[#081010] p-6 sm:p-8 shadow-2xl">
            <div className="mb-6 border-b border-white/[0.08] pb-3 flex items-center justify-between font-mono text-xs">
              <span className="text-[#00f2fe] font-bold">&gt; TRANSMISSION_INTERFACE</span>
              <span className="text-[#00ff88]">TLS 1.3 PROTECTED</span>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4 font-mono text-xs">
              {/* Honeypot field */}
              <div className="hidden">
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  value={form.website}
                  onChange={(e) => setForm({ ...form, website: e.target.value })}
                  autoComplete="off"
                />
              </div>

              {/* Codename / Name */}
              <div>
                <label className="block uppercase text-[#6c8585] mb-1">
                  Researcher Codename / Organization
                </label>
                <input
                  type="text"
                  required
                  minLength={2}
                  maxLength={80}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Security Team / Bug Bounty Lead"
                  className="w-full rounded border border-[#00f2fe]/20 bg-[#0d1515] px-3.5 py-2.5 text-[#e5f2f2] outline-none placeholder:text-[#6c8585] focus:border-[#00f2fe]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block uppercase text-[#6c8585] mb-1">
                  Secure Contact Email / Signal ID
                </label>
                <input
                  type="email"
                  required
                  maxLength={254}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@domain.org"
                  className="w-full rounded border border-[#00f2fe]/20 bg-[#0d1515] px-3.5 py-2.5 text-[#e5f2f2] outline-none placeholder:text-[#6c8585] focus:border-[#00f2fe]"
                />
              </div>

              {/* Severity Dropdown */}
              <div>
                <label className="block uppercase text-[#6c8585] mb-1">
                  Vulnerability Classification / Engagement Type
                </label>
                <select
                  value={form.classification}
                  onChange={(e) => setForm({ ...form, classification: e.target.value })}
                  className="w-full rounded border border-[#00f2fe]/20 bg-[#0d1515] px-3.5 py-2.5 text-[#e5f2f2] outline-none focus:border-[#00f2fe]"
                >
                  <option value="CRITICAL">CRITICAL // 0-Day / Urgent Advisory</option>
                  <option value="HIGH">HIGH // RCE, Authentication Bypass, Injection</option>
                  <option value="MEDIUM">MEDIUM // IDOR, Access Control Flaw</option>
                  <option value="LOW">LOW // Configuration & Hardening</option>
                  <option value="ENGAGEMENT">NEW ENGAGEMENT // Penetration Testing RFP</option>
                </select>
              </div>

              {/* Message / PoC Markdown */}
              <div>
                <label className="block uppercase text-[#6c8585] mb-1">
                  Advisory Message / Proof of Concept Details
                </label>
                <textarea
                  required
                  minLength={10}
                  maxLength={3000}
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Include reproduction steps, affected endpoints, or engagement parameters..."
                  className="w-full rounded border border-[#00f2fe]/20 bg-[#0d1515] px-3.5 py-2.5 text-[#e5f2f2] outline-none placeholder:text-[#6c8585] focus:border-[#00f2fe]"
                />
              </div>

              {/* Attachment Placeholder */}
              <div className="rounded border border-dashed border-white/[0.1] bg-[#0d1515]/50 p-3 text-[11px] text-[#6c8585]">
                <span>ATTACH ARCHIVE (.tar.gz, .zip, .enc):</span>
                <p className="mt-1 text-[10px] text-[#8fa3a3]">
                  * Direct file uploads are gated for spam safety. Please embed encrypted links or supply hashes in the PoC textarea.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded border border-[#00f2fe] bg-[#00f2fe] py-3 text-xs font-bold uppercase tracking-wider text-[#081010] shadow-[0_0_16px_rgba(0,242,254,0.3)] transition-all hover:bg-[#4facfe] hover:border-[#4facfe] disabled:opacity-50"
              >
                {submitting ? "TRANSMITTING ENCRYPTED ADVISORY..." : "[EXECUTE SECURE TRANSMISSION]"}
              </button>

              {status && (
                <div
                  role="status"
                  className="rounded border border-[#00f2fe]/30 bg-[#00f2fe]/[0.08] p-3 text-xs text-[#00f2fe]"
                >
                  {status}
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
