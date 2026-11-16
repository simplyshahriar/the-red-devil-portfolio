export default function SecOpsFooter() {
  return (
    <footer className="border-t border-[#00E5C3]/15 bg-[#0B1112] py-12 text-[#91A5A1]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2">
          
          {/* Identity */}
          <div className="space-y-3">
            <p className="font-display text-base font-bold text-[#E8F1EF]">
              Hasnain Shahriar
            </p>
            <p className="text-xs leading-relaxed text-[#91A5A1]">
              Cybersecurity Researcher exploring Web Application Security, Reverse Engineering, Digital Forensics, and AI-assisted workflows.
            </p>
            <p className="font-mono text-[11px] text-[#00E5C3]">
              Primary: Web Application Security
            </p>
          </div>

          {/* Site Navigation */}
          <div className="space-y-2 font-mono text-xs">
            <p className="font-bold uppercase tracking-wider text-[#E8F1EF]">Navigation</p>
            <ul className="space-y-1.5">
              <li><a href="#about" className="hover:text-[#00E5C3]">About Me</a></li>
              <li><a href="#specializations" className="hover:text-[#00E5C3]">Specializations</a></li>
              <li><a href="#stack" className="hover:text-[#00E5C3]">Technology Stack</a></li>
              <li><a href="#projects" className="hover:text-[#00E5C3]">Projects & Labs</a></li>
              <li><a href="#research" className="hover:text-[#00E5C3]">Research Journey</a></li>
            </ul>
          </div>

          {/* Focus Areas */}
          <div className="space-y-2 font-mono text-xs">
            <p className="font-bold uppercase tracking-wider text-[#E8F1EF]">Core Pillars</p>
            <ul className="space-y-1.5">
              <li><span className="text-[#00E5C3]">Web Application Security</span></li>
              <li><span>Reverse Engineering</span></li>
              <li><span>Digital Forensics & IR</span></li>
              <li><span>AI-Assisted Development</span></li>
            </ul>
          </div>

          {/* Channels */}
          <div className="space-y-2 font-mono text-xs">
            <p className="font-bold uppercase tracking-wider text-[#E8F1EF]">Connect</p>
            <ul className="space-y-1.5">
              <li>
                <a href="https://github.com/simplyshahriar" target="_blank" rel="noopener noreferrer" className="hover:text-[#00E5C3]">
                  GitHub / simplyshahriar ↗
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/hasnainshahriar/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00E5C3]">
                  LinkedIn / in/hasnainshahriar ↗
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/simplyshahriar" target="_blank" rel="noopener noreferrer" className="hover:text-[#00E5C3]">
                  Facebook / simplyshahriar ↗
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/simplyshahriar/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00E5C3]">
                  Instagram / @simplyshahriar ↗
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 font-mono text-xs sm:flex-row text-[#91A5A1]">
          <p>© 2026 Hasnain Shahriar. Built with Next.js, Tailwind CSS &amp; TypeScript.</p>
          <div className="flex items-center gap-2 text-[#00E5C3]">
            <span className="h-2 w-2 rounded-full bg-[#00E5C3] animate-pulse" />
            <span>Learning in Public · Responsible Security Research</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
