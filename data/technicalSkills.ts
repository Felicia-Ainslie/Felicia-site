export interface TechnicalSkill {
  label: string;
  value: string;
}

// Original homepage categories are preserved; FamJam implementation skills are added below.
// Rendered on Experience and referenced by profile.skills.
// Original competencies are now consolidated into related groups with supported additions.
// Categories read alphabetically down the left column, then down the right.
export const technicalSkills: readonly TechnicalSkill[] = [
  {
    label: "Backend & APIs:",
    value: "Node.js, Express, TypeScript, JavaScript, Python, SQL, REST APIs, event-driven services, workflow orchestration, input validation; AI agent prototyping with reusable agent frameworks, prompt framing and rule-based tokenization",
  },
  {
    label: "Cloud & Infrastructure:",
    value: "Azure, GCP, Databricks, enterprise cloud deployments, Cloudflare Pages; observability and monitoring with Grafana, Splunk and Datadog",
  },
  {
    label: "Developer Collaboration & Quality:",
    value: "Git/GitHub, code review participation, technical planning, release validation, automated and regression testing, dependency auditing; GitHub Actions, Jira, Vitest, React Testing Library, ESLint, Node.js regression testing, Python asset validation",
  },
  {
    label: "Documentation & Enablement:",
    value: "SOP, runbooks, release notes, stakeholder communications, RCA, training materials; Markdown, Docusaurus, Scribe, Confluence, SharePoint",
  },
  {
    label: "Frontend & Web Development:",
    value: "React, TypeScript, JavaScript, HTML5, CSS / Tailwind CSS, Next.js, Carbon Design System; responsive interfaces and browser games, Progressive Web Apps (PWA), service workers, web app manifests, Cache API, offline asset caching and update lifecycles, Canvas 2D, Web Audio, animation loops, touch and pointer input, keyboard controls",
  },
  {
    label: "Product Strategy & Portfolio Leadership:",
    value: "Product strategy, roadmap ownership, prioritization, lifecycle management, financial estimation, proposal development, executive stakeholder alignment, reporting and decision support; Power BI",
  },
  {
    label: "Security & Identity:",
    value: "Vulnerability management, remediation ownership, exception management, escalation workflows, SLA tracking and enterprise security integrations; Sonatype, Cloudflare, Snyk, Ping Identity, ServiceNow CMDB, GitHub Advanced Security",
  },
  {
    label: "Team Leadership & Delivery:",
    value: "Engineering and support team leadership, coaching, mentoring, onboarding, influence-based leadership, vendor partnerships, release coordination, acquisition integration, operational readiness; Salesforce, Jira, Github Projects",
  },
  {
    label: "UX & Product Discovery:",
    value: "Human-centered workflow design, workflow mapping, workshop facilitation, requirements refinement, live-page prototyping and workshop iteration; Figma, Miro",
  },
  {
    label: "Workflow & Automation:",
    value: "Operational process improvement, AI/UI agent workflows; Jira, Asana, Power Automate, Automation Anywhere",
  },
];

// Both columns come from the shared inventory. Keep the same alphabetical reading
// order when the columns stack on mobile; changing the category count splits evenly.
const columnBreak = Math.ceil(technicalSkills.length / 2);
export const skillGroups: readonly { label: string; skills: readonly TechnicalSkill[] }[] = [
  { label: "Skills and tools, first column", skills: technicalSkills.slice(0, columnBreak) },
  { label: "Skills and tools, second column", skills: technicalSkills.slice(columnBreak) },
];
