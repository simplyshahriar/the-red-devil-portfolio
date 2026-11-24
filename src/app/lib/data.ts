export type Project = {
  number: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  status: string;
  tags: string[];
  longDescription?: string;
  target?: string;
  activity?: string;
  methodology?: string;
  findingsSummary?: string[];
  documentation?: string[];
  responsibleDisclosure?: string;
  objectives?: string[];
  approach?: string[];
  findings?: string[];
  links?: { label: string; href: string }[];
  started?: string;
};

export const projects: Project[] = [
  {
    number: "001",
    slug: "goedu-security-assessment",
    category: "SECURITY RESEARCH",
    title: "GoEdu — Website Security Assessment & Vulnerability Discovery",
    description:
      "Conducted security-related testing and analysis on the GoEdu platform, identified potential security issues during research, documented observations with technical evidence, and performed responsible disclosure communication.",
    status: "DISCLOSED",
    tags: ["Web Security", "Responsible Disclosure", "Vulnerability Discovery", "Evidence Collection"],
    started: "2026",
    target: "GoEdu Learning Platform",
    activity: "Website security assessment and potential vulnerability analysis",
    methodology: "Security scanning, manual verification, and response header analysis",
    longDescription:
      "A focused website security assessment conducted on the GoEdu platform. During this independent research, security-related testing and analysis were executed to evaluate web application exposure and posture. Potential security issues identified during the testing were methodically recorded, technical evidence and scanning details were documented into structured archives, and observations were communicated through responsible disclosure channels.",
    objectives: [
      "Conduct authorized security assessment and analysis of the web application surface.",
      "Identify, observe, and distinguish detected scanner observations from manually validated findings.",
      "Document observations with clear reproduction evidence without disclosing sensitive operational details.",
      "Practice professional, responsible disclosure by communicating observations to relevant platform stakeholders.",
    ],
    approach: [
      "Security scanning combined with focused manual request analysis.",
      "Strict scope containment adhering to safe harbor and non-destructive testing boundaries.",
      "Preparation of technical evidence registers, scanning logs, and structured findings reports.",
      "Direct responsible communication and reporting to the instructor or platform stakeholders.",
    ],
    findings: [
      "Potential security issues identified and documented during platform testing.",
      "Observed surface configurations analyzed and compiled into a technical report.",
      "Technical evidence preserved in scanning details archives for review.",
      "Responsible disclosure communication conducted with platform stakeholders.",
    ],
    links: [],
  },
  {
    number: "002",
    slug: "web-application-security-lab",
    category: "WEB SECURITY",
    title: "Web Application Security Lab",
    description:
      "A dedicated learning environment for exploring web security concepts, testing defensive controls, and documenting findings in authorized labs.",
    status: "LEARNING",
    tags: ["Web Security", "OWASP", "Lab Practice", "Documentation"],
    started: "2026",
    longDescription:
      "A personal lab environment for building hands-on understanding of web application security. The focus is methodical practice: reproduce common vulnerability classes in authorized targets, understand why they exist, and write clear notes on how each could be detected or mitigated.",
    objectives: [
      "Build fluency with common web vulnerability classes (OWASP Top 10 and beyond).",
      "Practice structured testing — reconnaissance, mapping, vulnerability evaluation, and reporting.",
      "Develop repeatable checklists that can be reused across future assessments.",
    ],
    approach: [
      "Set up isolated labs and authorized targets for safe testing.",
      "Use Burp Suite, browser dev tools, and manual requests to analyze application behavior.",
      "Document each finding with reproduction steps, impact, and remediation notes.",
    ],
    findings: [
      "Working notes on authentication flaws, access control, and input-handling issues.",
      "A growing checklist for consistent, evidence-based testing.",
    ],
    links: [],
  },
  {
    number: "003",
    slug: "recon-research-notes",
    category: "OSINT & RECON",
    title: "Recon Research Notes & Attack Surface Mapping",
    description:
      "A structured collection of reconnaissance concepts, tool references, and responsible research workflows for attack surface mapping.",
    status: "IN PROGRESS",
    tags: ["OSINT", "Recon", "Asset Discovery", "Automation"],
    started: "2026",
    longDescription:
      "Reconnaissance is where thorough security understanding begins. This collection documents how to map an attack surface responsibly — what to look for, how to verify sources, and how to keep research ethical and strictly scoped.",
    objectives: [
      "Understand how public information contributes to a security assessment.",
      "Practice source verification and structured note-taking.",
      "Build responsible habits: scope, authorization, and privacy awareness.",
    ],
    approach: [
      "Study common OSINT sources and their limitations.",
      "Take structured notes on tools, syntax, and outputs (Nmap, gau, waybackurls, ParamSpider).",
      "Compare passive versus active reconnaissance techniques in lab settings.",
    ],
    findings: [
      "A growing reference of recon concepts, tool usage, and safe practices.",
      "Awareness of where recon stops being research and starts being intrusion.",
    ],
    links: [],
  },
  {
    number: "004",
    slug: "security-workflow-toolkit",
    category: "SECURITY TOOLING",
    title: "Security Workflow Toolkit",
    description:
      "An evolving collection of Python scripts, checklists, and automation designed to make security learning and assessments repeatable.",
    status: "PLANNED",
    tags: ["Python", "Linux", "Automation", "Workflow"],
    started: "2026",
    longDescription:
      "A planned toolkit of scripts and checklists that reduce repeated work and help keep testing consistent. Built for personal use first — clean, small, and documented — with the aim of sharing once stable.",
    objectives: [
      "Automate repetitive tasks during labs and security research.",
      "Keep a single, organized source of checklists and templates.",
      "Learn Python, Bash, and Linux tooling through practical, small projects.",
    ],
    approach: [
      "Start with small, single-purpose scripts.",
      "Document each script with usage notes and example output.",
      "Refactor into a cohesive toolkit once patterns emerge.",
    ],
    findings: ["Currently in planning — code coming soon."],
    links: [],
  },
];

export type ResearchNote = {
  number: string;
  slug: string;
  category: string;
  title: string;
  description: string;
};

export const researchNotes: ResearchNote[] = [
  {
    number: "001",
    slug: "web-application-security",
    category: "WEB SECURITY",
    title: "Introduction to Web Application Security",
    description:
      "Core concepts, common risks, testing methodology, and a structured learning path.",
  },
  {
    number: "002",
    slug: "osint-recon-fundamentals",
    category: "OSINT & RECON",
    title: "Reconnaissance and OSINT Fundamentals",
    description:
      "Research methodology, source verification, and responsible use of publicly available information.",
  },
  {
    number: "003",
    slug: "responsible-security-research",
    category: "METHODOLOGY",
    title: "Responsible Security Research",
    description:
      "Scope, authorization, evidence collection, clear reporting, and ethical boundaries.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getResearchNoteBySlug(slug: string): ResearchNote | undefined {
  return researchNotes.find((n) => n.slug === slug);
}