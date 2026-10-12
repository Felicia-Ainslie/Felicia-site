// Degree names come from the current résumé; dates and proof URLs come from the Wix student portfolio.
// The saved LinkedIn profile confirms the résumé’s AAS degree name.
// Proof URLs are issuer-hosted; academic examples are local files defined in academicDocuments.ts.
export interface Degree {
  id: string;
  title: string;
  institution: string;
  graduated: string;
  emphasis: string;
  distinction?: string;
  proofUrl: string;
  projectId?: "master" | "bachelor";
}

export const degrees: readonly Degree[] = [
  {
    id: "masters",
    title: "Master of Science in Information Technology",
    institution: "Purdue University Global",
    graduated: "March 2021",
    emphasis: "Information Security & Assurance",
    distinction: "GPA: 4.0",
    proofUrl: "https://www.credential.net/b2fa0d0b-7529-4396-871c-fa0ce663e28e",
    projectId: "master",
  },
  {
    id: "bachelors",
    title: "Bachelor of Science in Information Technology",
    institution: "Purdue University Global",
    graduated: "January 2019",
    emphasis: "Programming & Software Development",
    distinction: "GPA: 4.0 · President’s List · Dean’s List",
    proofUrl: "https://www.credential.net/1b049ea2-6b20-40f9-ac6e-a047c28f2ed0",
    projectId: "bachelor",
  },
  {
    id: "associates",
    title: "Associate of Applied Science in Information Technology",
    institution: "Kaplan University",
    graduated: "February 2017",
    emphasis: "Multiplatform Software Development",
    distinction: "President’s List 2017",
    proofUrl: "https://www.credential.net/05d68ee1-1189-485c-a99f-fe768a407bb3",
  },
];

// Quick reads summarize the original academic documents, not professional deployments.
// Keep the fictional organization context visible wherever these projects are rendered.
export interface AcademicProject {
  id: "master" | "bachelor";
  title: string;
  degree: string;
  organization: string;
  summary: string;
  highlights: readonly string[];
  featuredDocument: string;
  sourceUrl: string;
}

export const academicProjects: readonly AcademicProject[] = [
  {
    id: "master",
    title: "Remote Initiative for a VoIP Infrastructure",
    degree: "Master’s capstone",
    organization: "VoIP Fan · Fictional organization",
    summary: "A secure remote-work environment that lets support staff access the resources they need while maintaining service reliability and protecting company systems.",
    highlights: [
      "Planned VPN and mobile device management, home-network readiness, and acceptable-use policies.",
      "Connected security controls with employee training, support documentation, and usability testing.",
      "Developed the budget, implementation plan, stakeholder communications, and project closure review.",
    ],
    featuredDocument: "/documents/education/masters-project-proposal.pdf",
    sourceUrl: "https://feliciaainslie.wixsite.com/mysite/master-capstone",
  },
  {
    id: "bachelor",
    title: "Future Tech Network",
    degree: "Bachelor’s capstone",
    organization: "Future Tech · Fictional organization",
    summary: "A secure network for a three-story office, giving employees the connectivity, devices, and software needed to serve customers and share information.",
    highlights: [
      "Defined business needs, project scope, network coverage, and security requirements.",
      "Created the charter, network diagram, budget, work breakdown structure, and risk assessment.",
      "Documented change requests, stakeholder reviews, and the final project handoff.",
    ],
    featuredDocument: "/documents/education/bachelors-project-concept.pdf",
    sourceUrl: "https://feliciaainslie.wixsite.com/mysite/bachelor-capstone",
  },
];

export interface Certificate {
  title: string;
  issuer: string;
  group: "Leadership & AI" | "Security & Technical Delivery";
  issued?: string;
  proofUrl?: string;
  downloadHref?: string;
}

// Preserve course/certificate titles: PMP exam education is not a PMP certification.
// The résumé supplies current training; Wix supplies two direct certificate links.
// Proof links and issue dates are recovered from the user-provided LinkedIn webarchive.
// Six résumé training entries are not exposed in the public archive; no URLs are guessed.
// The Udemy credential page exposes its original certificate image, preserved as a local download.
export const certificates: readonly Certificate[] = [
  { title: "Responsible AI Leadership: Ethics, Trust & Accountability", issuer: "Skillsoft", group: "Leadership & AI" },
  { title: "Generative AI Foundations", issuer: "O’Reilly / Credly", group: "Leadership & AI" },
  { title: "Exploring Prompt Engineering Techniques", issuer: "Skillsoft", group: "Leadership & AI" },
  { title: "Inclusive Leadership: The Power of Workplace Diversity", issuer: "University of Colorado System / Coursera", group: "Leadership & AI", issued: "July 2021", proofUrl: "https://www.coursera.org/account/accomplishments/certificate/N8D8QWADSW3H" },
  { title: "The Manager’s Toolkit: A Practical Guide to Managing People at Work", issuer: "University of London / Coursera", group: "Leadership & AI", issued: "July 2021", proofUrl: "https://www.coursera.org/account/accomplishments/certificate/EBDQH3Y8DU8Q" },
  { title: "PMP Education Requirement Completed (35+ PDUs)", issuer: "Udemy", group: "Leadership & AI", issued: "December 2021", proofUrl: "https://www.udemy.com/certificate/UC-55d56e92-675e-4221-a6d0-7cb4a854a2ff/", downloadHref: "/documents/certificates/pmp-exam-prep-35-pdus.jpg" },
  { title: "Foundations of Effective Project Management", issuer: "Pluralsight", group: "Leadership & AI", issued: "December 2021", proofUrl: "https://app.pluralsight.com/learner/user/courses/v2/d18afea8-1dc3-4bbd-9b36-83f5e76b2d2c/certificate" },
  { title: "Managing IT: Metrics and Measurements", issuer: "Pluralsight", group: "Leadership & AI", issued: "November 2022", proofUrl: "https://app.pluralsight.com/learner/user/courses/v2/f2df656a-6221-4d71-a604-608ec1002ca6/certificate" },
  { title: "Intro to Nexus Lifecycle", issuer: "Sonatype", group: "Security & Technical Delivery", issued: "December 2022", proofUrl: "https://learn.sonatype.com/certificates/iq-cert-2/?course_id=25388&cert-nonce=164e2def4c" },
  { title: "Organization Policies in Lifecycle", issuer: "Sonatype", group: "Security & Technical Delivery", issued: "December 2022", proofUrl: "https://learn.sonatype.com/certificates/iq-cert-2/?course_id=26134&cert-nonce=955cfdd910" },
  { title: "Advanced Legal Pack", issuer: "Sonatype", group: "Security & Technical Delivery", issued: "December 2022", proofUrl: "https://learn.sonatype.com/certificates/iq-cert-2/?course_id=40142&cert-nonce=46e79f0a59" },
  { title: "Linux Administration with Ansible", issuer: "Pluralsight", group: "Security & Technical Delivery" },
  { title: "Getting Started with Linux", issuer: "Pluralsight", group: "Security & Technical Delivery", issued: "December 2021", proofUrl: "https://app.pluralsight.com/learner/user/courses/v2/bdd0ab9b-f5fe-4ff2-842f-6268ae140d94/certificate" },
  { title: "Consuming Cisco APIs and Understanding Application DevOps", issuer: "Pluralsight", group: "Security & Technical Delivery" },
  { title: "Managing Cisco Networks via Infrastructure as Code", issuer: "Pluralsight", group: "Security & Technical Delivery" },
  { title: "Scrum Development with Jira", issuer: "Pluralsight", group: "Security & Technical Delivery", issued: "December 2022", proofUrl: "https://app.pluralsight.com/learner/user/courses/v2/3b499494-d712-4309-a951-eb3ed20fbdb3/certificate" },
];
