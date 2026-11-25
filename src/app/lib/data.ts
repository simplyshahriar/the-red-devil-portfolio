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