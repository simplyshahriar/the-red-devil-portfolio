export type Project = {
  number: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  status: string;
  tags: string[];
  longDescription?: string;
  objectives?: string[];
  approach?: string[];
  findings?: string[];
  links?: { label: string; href: string }[];
  started?: string;
};

export const projects: Project[] = [
  {
    number: "001",
    slug: "web-application-security-lab",
    category: "WEB SECURITY",
    title: "Web Application Security Lab",
    description:
      "A learning environment for exploring web security concepts, testing defensive controls, and documenting findings in authorized labs.",
    status: "LEARNING",
    tags: ["Web Security", "Lab", "Documentation"],
    started: "2026",
    longDescription:
      "A personal lab environment for building hands-on understanding of web application security. The focus is methodical practice: reproduce common vulnerability classes in authorized targets, understand why they exist, and write clear notes on how each could be detected or mitigated.",
    objectives: [
      "Build fluency with common web vulnerability classes (OWASP Top 10 and beyond).",
      "Practice structured testing — reconnaissance, mapping, exploitation, reporting.",
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
    number: "002",
    slug: "recon-research-notes",
    category: "RECONNAISSANCE",
    title: "Recon Research Notes",
    description:
      "A structured collection of reconnaissance concepts, tool references, and responsible research workflows.",
    status: "IN PROGRESS",
    tags: ["OSINT", "Recon", "Research"],
    started: "2026",
    longDescription:
      "Reconnaissance is where most understanding begins. This collection documents how to map an attack surface responsibly — what to look for, how to verify sources, and how to keep research ethical and scoped.",
    objectives: [
      "Understand how public information contributes to a security assessment.",
      "Practice source verification and structured note-taking.",
      "Build responsible habits: scope, authorization, and privacy awareness.",
    ],
    approach: [
      "Study common OSINT sources and their limitations.",
      "Take structured notes on tools, syntax, and outputs.",
      "Compare passive versus active reconnaissance techniques in lab settings.",
    ],
    findings: [
      "A growing reference of recon concepts, tool usage, and safe practices.",
      "Awareness of where recon stops being research and starts being intrusion.",
    ],
    links: [],
  },
  {
    number: "003",
    slug: "security-workflow-toolkit",
    category: "SECURITY TOOLING",
    title: "Security Workflow Toolkit",
    description:
      "An evolving collection of scripts, checklists, and notes designed to make security learning more organized and repeatable.",
    status: "PLANNED",
    tags: ["Python", "Linux", "Automation"],
    started: "2026",
    longDescription:
      "A planned toolkit of scripts and checklists that reduce repeated work and help keep testing consistent. Built for personal use first — clean, small, and documented — with the aim of sharing once stable.",
    objectives: [
      "Automate repetitive tasks during labs and research.",
      "Keep a single, organized source of checklists and templates.",
      "Learn Python and Linux tooling through practical, small projects.",
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

export const researchNotes = [
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