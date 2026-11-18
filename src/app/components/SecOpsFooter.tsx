import Link from "next/link";

export default function SecOpsFooter() {
  return (
    <footer className="border-t border-[#00f2fe]/15 bg-[#081010] py-12 text-[#8fa3a3]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2">
          {/* Col 1: System info */}
          <div className="space-y-3">
            <p className="flex items-center gap-2 font-mono text-sm font-bold text-[#e5f2f2]">
              <span className="text-[#00f2fe]">&gt;_</span>
              <span>SEC_OPS PLATFORM</span>
            </p>
            <p className="text-xs leading-relaxed text-[#6c8585]">
              Offensive Security Research, Technical Assessments, and Vulnerability Analysis by Hasnain Shahriar.
            </p>
            <div className="font-mono text-[10px] text-[#00f2fe]/70 pt-2 space-y-1">
              <div>PROTOCOL: SSH-2.0-SEC_OPS</div>
              <div>ENVIRONMENT: PRODUCTION_HARDENED</div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-2 font-mono text-xs">
            <p className="font-semibold uppercase tracking-wider text-[#e5f2f2]">Navigation</p>
            <ul className="space-y-1.5 text-[#8fa3a3]">
              <li><Link href="#overview" className="hover:text-[#00f2fe]">/overview</Link></li>
              <li><Link href="#expertise" className="hover:text-[#00f2fe]">/expertise</Link></li>
              <li><Link href="#cases" className="hover:text-[#00f2fe]">/case-studies</Link></li>
              <li><Link href="#contact" className="hover:text-[#00f2fe]">/secure-contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Policy & Security */}
          <div className="space-y-2 font-mono text-xs">
            <p className="font-semibold uppercase tracking-wider text-[#e5f2f2]">Policy & Standards</p>
            <ul className="space-y-1.5 text-[#8fa3a3]">
              <li><a href="#safe-harbor" className="hover:text-[#00f2fe]">Responsible Disclosure</a></li>
              <li><a href="#safe-harbor" className="hover:text-[#00f2fe]">Safe Harbor Terms</a></li>
              <li><a href="#pgp" className="hover:text-[#00f2fe]">PGP Keyring (4096-bit)</a></li>
              <li><span className="text-[#6c8585]">CVSS v3.1 / OWASP Top 10</span></li>
            </ul>
          </div>

          {/* Col 4: Network & Channels */}
          <div className="space-y-2 font-mono text-xs">
            <p className="font-semibold uppercase tracking-wider text-[#e5f2f2]">Communication Channels</p>
            <ul className="space-y-1.5 text-[#8fa3a3]">
              <li>
                <a href="https://github.com/simplyshahriar" target="_blank" rel="noopener noreferrer" className="hover:text-[#00f2fe]">
                  [GH] GitHub / simplyshahriar
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/hasnainshahriar/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00f2fe]">
                  [LI] LinkedIn / hasnainshahriar
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/simplyshahriar" target="_blank" rel="noopener noreferrer" className="hover:text-[#00f2fe]">
                  [FB] Facebook / simplyshahriar
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/simplyshahriar/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00f2fe]">
                  [IG] Instagram / @simplyshahriar
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#00f2fe]/10 pt-6 text-[11px] font-mono sm:flex-row text-[#6c8585]">
          <p>© 2026 Hasnain Shahriar. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#00ff88]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00ff88]" />
              CIPHER: AES-256-GCM
            </span>
            <span>|</span>
            <span>LATENCY: 14ms</span>
            <span>|</span>
            <span className="text-[#00f2fe]">TLS 1.3 READY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
