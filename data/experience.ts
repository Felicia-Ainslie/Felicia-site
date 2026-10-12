// Employment details transcribed from public/documents/Felicia_Ainslie_Resume_2026.pdf.
// The résumé groups Nextiva responsibilities across the full tenure; do not interpret
// the displayed range as dates for every individual promotion. Update this content
// and the résumé together when role titles, dates, or accomplishments change.
// Role descriptions and promotion dates are from the user-provided LinkedIn webarchive.
// The obvious typo "Techincal" is corrected in one role title; descriptions are unchanged.
export interface CareerRole {
  title: string;
  period: string;
  description: string;
}

export interface WorkExperience {
  company: string;
  title: string;
  period: string;
  location: string;
  context?: string;
  overview?: string;
  roles?: readonly CareerRole[];
  contributions: readonly string[];
}

export const workExperience: readonly WorkExperience[] = [
  {
    "company": "CVS Health",
    "title": "Senior Manager, Digital Product Management",
    "period": "Aug 2025 – Present",
    "location": "Geneseo, IL · Remote",
    "contributions": [
      "Lead planning, financial estimation, and proposal development for multimillion-dollar cybersecurity, AI, integration, and enterprise platform product portfolios, balancing delivery execution, risk reduction, scalability, and stakeholder priorities.",
      "Directly manage software development (6) and product support (3) teams, setting priorities, removing blockers, coaching execution, and aligning day-to-day delivery with product and portfolio goals.",
      "Lead cross-functional partnership with a 12-person VSE data engineering organization, guiding data quality, reporting strategy, integrations, and platform workflow decisions through influence-based leadership.",
      "Partner with engineering teams across React, TypeScript, Node.js, APIs, cloud infrastructure, and event-driven workflows to guide delivery, technical prioritization, and implementation tradeoffs.",
      "Support engineering collaboration through code review participation, drafting implementation starters, workflow validation, and technical requirement refinement.",
      "Drive governance and remediation workflow improvements focused on ownership visibility, exception handling, escalation management, and operational scalability.",
      "Lead platform modernization efforts consolidating vulnerability data from enterprise security scanners, cloud platforms, infrastructure systems, IoT ecosystems, and external medical devices into centralized remediation, ownership, and operational reporting workflows.",
      "Reduced mean time to resolve (MTTR) from 101 days to 37 days through AI-assisted ownership identification, remediation recommendations, and automated SLA tracking and alerting workflows.",
      "Collaborate with UX and engineering teams using Figma and Miro to prototype workflows, workshop design concepts, and validate implementation approaches before development.",
      "Contribute to executive and operational reporting focused on risk visibility, remediation progress, platform adoption, and workflow performance.",
      "Support AI enablement and automation initiatives including UI-driven agent workflows and process automation designed to reduce operational friction and improve engineering efficiency."
    ],
    "overview": "Senior Manager, AI Cybersecurity Product Management, leading strategy and delivery for enterprise security solutions that improve risk visibility, operational efficiency, and cross-functional collaboration. Driving product execution across engineering, security, and business stakeholders while leading software development and product support teams to deliver scalable, high-impact security capabilities."
  },
  {
    "company": "Nextiva",
    "context": "Progressed from technical support into team leadership, project delivery, and product management. The dates below cover my full Nextiva tenure.",
    "title": "Product Manager",
    "period": "Oct 2018 – Aug 2025",
    "location": "Geneseo, IL · Remote",
    "contributions": [
      "Led product planning, release coordination, and operational delivery for UCaaS, CCaaS, integration, and enterprise platform initiatives across technical and business stakeholders.",
      "Owned and supported 15+ third-party SaaS and voice applications including Five9, Akixi, Go Integrator, Cisco Customer Journey, and Thrio.",
      "Documented and supported the full integration of the Thrio acquisition, including architecture documentation, deployment coordination, runbooks, release planning, and operational readiness.",
      "Led implementation of enterprise vulnerability management workflows integrating Sonatype scanning and Jira automation, reducing mean time to resolve (MTTR) from 87 days to 23 days through improved operational response, visibility, and workflow automation.",
      "Assisted with Cloudflare implementation efforts supporting enterprise performance, reliability, and security improvements with zero downtime.",
      "Collaborated with engineering teams on API integrations, workflow automation, routing logic, and operational tooling enhancements.",
      "Authored and maintained enterprise operational documentation including runbooks, RCA documentation, release notes, onboarding guides, and integration documentation using Markdown, Docusaurus, and Scribe.",
      "Designed and maintained operational dashboards and reporting to improve visibility into escalations, performance trends, workflow throughput, and team accountability.",
      "Partnered with engineering and UX stakeholders to prototype workflow improvements, workshop UI concepts, and validate implementation changes prior to development.",
      "Helped design automation workflows using Automation Anywhere to improve operational efficiency and reduce repetitive manual processes.",
      "Supervised 14-person Tier 2 Advanced Support operations team, mentoring team members, improving onboarding practices, and formalizing post-incident review processes to strengthen operational consistency and escalation management.",
      "Successfully led the BroadWorks R24 platform upgrade with zero downtime, coordinating readiness, stakeholder communication, and deployment execution."
    ],
    "roles": [
      {
        "title": "Product Manager",
        "period": "Nov 2024 – Aug 2025",
        "description": "Owned the strategy, roadmap, delivery, and lifecycle management of SaaS, UCaaS, CCaaS, and PaaS products, including a portfolio of 15+ strategic integrations and global vendor partnerships. Led the Thrio software development team, managed product releases, and partnered with engineering, operations, and executive stakeholders to deliver scalable platform capabilities, customer-facing enhancements, and business-critical initiatives."
      },
      {
        "title": "Project Manager II, Vendor Products",
        "period": "Apr 2024 – Nov 2024",
        "description": "Owned strategic SaaS, UCaaS, CCaaS, and PaaS initiatives, overseeing a portfolio of 15+ platform integrations and international vendor relationships. Led enterprise vulnerability management and security initiatives alongside cross-functional engineering, operations, and business programs, driving platform scalability, operational efficiency, risk reduction, and customer experience improvements."
      },
      {
        "title": "Project Manager I, Vendor Products",
        "period": "Apr 2023 – Apr 2024",
        "description": "Led delivery and lifecycle management for SaaS, UCaaS, CCaaS, and PaaS vendor solutions, owning 15+ strategic integrations and international vendor relationships. Partnered with engineering, operations, and business stakeholders to implement platform enhancements, optimize platform capabilities, and support organizational growth."
      },
      {
        "title": "Information Technology Project Manager",
        "period": "Sep 2021 – Apr 2023",
        "description": "Managed cross-functional SaaS and UCaaS infrastructure initiatives, partnering closely with engineering teams to plan and execute server upgrades, cluster maintenance, platform enhancements, and technology lifecycle programs. Led end-to-end delivery including requirements gathering, project planning, stakeholder communications, risk management, change coordination, execution oversight, and post-implementation validation to improve platform stability, scalability, and operational performance."
      },
      {
        "title": "Advanced Technical Solutions, Supervisor",
        "period": "May 2021 – Sep 2021",
        "description": "Managed a team of senior technical specialists supporting telecommunications hardware, network equipment, SaaS, UCaaS, and CCaaS platforms, driving operational performance, escalation management, talent development, and cross-functional collaboration to improve platform reliability, service delivery, and customer success."
      },
      {
        "title": "Advanced Technical Solutions, Senior Specialist Lead",
        "period": "Feb 2021 – Apr 2021",
        "description": "Led senior technical specialists supporting SaaS, UCaaS, and CCaaS platforms; integrations; telecommunications hardware; and network equipment, coordinating complex technical escalations, mentoring team members, and partnering with engineering teams to resolve high-impact customer and platform challenges."
      },
      {
        "title": "Advanced Technical Solutions, Senior Specialist",
        "period": "Nov 2020 – Feb 2021",
        "description": "Provided advanced technical expertise for SaaS, UCaaS, and CCaaS platforms, leading complex troubleshooting efforts, supporting strategic customer environments, and driving resolution of critical technical and integration-related issue"
      },
      {
        "title": "Advanced Technical Solutions, Specialist",
        "period": "Mar 2020 – Nov 2020",
        "description": "Served as a technical subject matter expert for SaaS, UCaaS, and CCaaS solutions, supporting complex customer environments, troubleshooting integrations, and collaborating with engineering and operations teams to resolve technical challenges."
      },
      {
        "title": "Tier 1 Technical Support Lead",
        "period": "Nov 2019 – Feb 2020",
        "description": "Led frontline support operations for SaaS and cloud communications solutions, mentoring team members, driving issue resolution, and improving service delivery, customer satisfaction, and operational efficiency."
      },
      {
        "title": "Tier 1 Technical Support",
        "period": "Oct 2018 – Nov 2019",
        "description": "Provided first level technical support for SaaS and cloud communications platforms, troubleshooting customer issues, resolving service disruptions, and delivering exceptional customer experiences across voice, messaging, and collaboration solutions."
      }
    ]
  }
];
