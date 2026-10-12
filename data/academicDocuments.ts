// Original academic work downloaded from the two Wix capstone pages.
// Keep sourceUrl for provenance; href points to the preserved local file.
// Exception: the oversized master's presentation downloads from Wix; archivePath
// preserves its original bytes outside public/ so Cloudflare Pages can publish the site.
// PDFs support browser reading; spreadsheets and presentations download in their original formats.
export interface AcademicDocument {
  group: "bachelor" | "master";
  title: string;
  href: string;
  sourceUrl: string;
  format: string;
  size: string;
  archivePath?: string;
}

export const academicDocuments: readonly AcademicDocument[] = [
  {
    "group": "bachelor",
    "title": "Project Concept",
    "sourceUrl": "https://2ce4a178-75d1-45dc-aaad-b0158d04a88d.filesusr.com/ugd/2c56df_4b74335745d145fa926aba9eaf704a37.pdf",
    "href": "/documents/education/bachelors-project-concept.pdf",
    "format": "PDF",
    "size": "118 KB"
  },
  {
    "group": "bachelor",
    "title": "Project Scope Statement",
    "sourceUrl": "https://2ce4a178-75d1-45dc-aaad-b0158d04a88d.filesusr.com/ugd/2c56df_cfe2220698fa4ddcb3a2b82dc5d37711.pdf",
    "href": "/documents/education/bachelors-project-scope-statement.pdf",
    "format": "PDF",
    "size": "185 KB"
  },
  {
    "group": "bachelor",
    "title": "Project Charter",
    "sourceUrl": "https://2ce4a178-75d1-45dc-aaad-b0158d04a88d.filesusr.com/ugd/2c56df_f02f18caac39469caa1017e81072b12e.pdf",
    "href": "/documents/education/bachelors-project-charter.pdf",
    "format": "PDF",
    "size": "142 KB"
  },
  {
    "group": "bachelor",
    "title": "Project Exec Review Email",
    "sourceUrl": "https://2ce4a178-75d1-45dc-aaad-b0158d04a88d.filesusr.com/ugd/2c56df_fd38d23114db48209b7d7b02756f9ab6.pdf",
    "href": "/documents/education/bachelors-project-exec-review-email.pdf",
    "format": "PDF",
    "size": "85 KB"
  },
  {
    "group": "bachelor",
    "title": "Network Diagram",
    "sourceUrl": "https://2ce4a178-75d1-45dc-aaad-b0158d04a88d.filesusr.com/ugd/2c56df_f2171ca0eaf44e54ba560b5bbd959027.pdf",
    "href": "/documents/education/bachelors-network-diagram.pdf",
    "format": "PDF",
    "size": "286 KB"
  },
  {
    "group": "bachelor",
    "title": "Change Request",
    "sourceUrl": "https://2ce4a178-75d1-45dc-aaad-b0158d04a88d.filesusr.com/ugd/2c56df_d19d4a1a6c894bef8364c78c52c05ab4.pdf",
    "href": "/documents/education/bachelors-change-request.pdf",
    "format": "PDF",
    "size": "571 KB"
  },
  {
    "group": "bachelor",
    "title": "Project Final Status Report",
    "sourceUrl": "https://2ce4a178-75d1-45dc-aaad-b0158d04a88d.filesusr.com/ugd/2c56df_72cd323e0a2b45c5b0d4301699fee783.pdf",
    "href": "/documents/education/bachelors-project-final-status-report.pdf",
    "format": "PDF",
    "size": "103 KB"
  },
  {
    "group": "bachelor",
    "title": "Project Completion Email",
    "sourceUrl": "https://2ce4a178-75d1-45dc-aaad-b0158d04a88d.filesusr.com/ugd/2c56df_047761e6ea1540dfbbb07481cfe7074f.pdf",
    "href": "/documents/education/bachelors-project-completion-email.pdf",
    "format": "PDF",
    "size": "83 KB"
  },
  {
    "group": "bachelor",
    "title": "Budget",
    "sourceUrl": "https://2ce4a178-75d1-45dc-aaad-b0158d04a88d.filesusr.com/ugd/2c56df_06e1b2cee8b4426ca681ecca0123c46e.xlsx?dn=Bachelors%20Budget.xlsx",
    "href": "/documents/education/bachelors-budget.xlsx",
    "format": "XLSX",
    "size": "41 KB"
  },
  {
    "group": "bachelor",
    "title": "Project WBS",
    "sourceUrl": "https://2ce4a178-75d1-45dc-aaad-b0158d04a88d.filesusr.com/ugd/2c56df_a173def3c038437086448e536519184e.xlsx?dn=Bachelors%20Project%20WBS.xlsx",
    "href": "/documents/education/bachelors-project-wbs.xlsx",
    "format": "XLSX",
    "size": "30 KB"
  },
  {
    "group": "bachelor",
    "title": "Product Completion Review",
    "sourceUrl": "https://2ce4a178-75d1-45dc-aaad-b0158d04a88d.filesusr.com/ugd/2c56df_de775da44990490f980665c9280b4e10.pdf",
    "href": "/documents/education/bachelors-product-completion-review.pdf",
    "format": "PDF",
    "size": "29 KB"
  },
  {
    "group": "bachelor",
    "title": "Planning Review Presentation",
    "sourceUrl": "https://2ce4a178-75d1-45dc-aaad-b0158d04a88d.filesusr.com/ugd/2c56df_096d372a3c9045eb99d56b3776bd179b.pptx?dn=Bachelors%20Planning%20Review%20Presentation.pptx",
    "href": "/documents/education/bachelors-planning-review-presentation.pptx",
    "format": "PPTX",
    "size": "1.5 MB"
  },
  {
    "group": "bachelor",
    "title": "Product Review Presentation",
    "sourceUrl": "https://2ce4a178-75d1-45dc-aaad-b0158d04a88d.filesusr.com/ugd/2c56df_9ac45880e769465a8730f7f6828f427a.pptx?dn=Bachelors%20Product%20Review%20Presentation.pptx",
    "href": "/documents/education/bachelors-product-review-presentation.pptx",
    "format": "PPTX",
    "size": "9.3 MB"
  },
  {
    "group": "bachelor",
    "title": "Risk Assessment",
    "sourceUrl": "https://2ce4a178-75d1-45dc-aaad-b0158d04a88d.filesusr.com/ugd/2c56df_afb957ea568a4b3282b2303d331c5743.xlsx?dn=Bachelors%20Risk%20Assessment.xlsx",
    "href": "/documents/education/bachelors-risk-assessment.xlsx",
    "format": "XLSX",
    "size": "23 KB"
  },
  {
    "group": "master",
    "title": "Project Proposal",
    "sourceUrl": "https://2ce4a178-75d1-45dc-aaad-b0158d04a88d.filesusr.com/ugd/2c56df_615bed96575a4f87ab5b92e46de62b65.pdf",
    "href": "/documents/education/masters-project-proposal.pdf",
    "format": "PDF",
    "size": "105 KB"
  },
  {
    "group": "master",
    "title": "Project Review Meeting",
    "sourceUrl": "https://2ce4a178-75d1-45dc-aaad-b0158d04a88d.filesusr.com/ugd/2c56df_c6b0ec08b2544d5c8b2638ca65fd246b.pdf",
    "href": "/documents/education/masters-project-review-meeting.pdf",
    "format": "PDF",
    "size": "225 KB"
  },
  {
    "group": "master",
    "title": "Project Closure Report",
    "sourceUrl": "https://2ce4a178-75d1-45dc-aaad-b0158d04a88d.filesusr.com/ugd/2c56df_55376cfa4d2c46579db2b11868e0225b.pdf",
    "href": "/documents/education/masters-project-closure-report.pdf",
    "format": "PDF",
    "size": "169 KB"
  },
  {
    "group": "master",
    "title": "Project Implementation Plan",
    "sourceUrl": "https://2ce4a178-75d1-45dc-aaad-b0158d04a88d.filesusr.com/ugd/2c56df_a3d18b8f2b294e558fc71affbf1240de.pdf",
    "href": "/documents/education/masters-project-implementation-plan.pdf",
    "format": "PDF",
    "size": "366 KB"
  },
  {
    "group": "master",
    "title": "Project Review Meeting 2 - Unplanned Event",
    "sourceUrl": "https://2ce4a178-75d1-45dc-aaad-b0158d04a88d.filesusr.com/ugd/2c56df_22a914b3845e49258dfff9dffc4e0bf0.pdf",
    "href": "/documents/education/masters-project-review-meeting-2-unplanned-event.pdf",
    "format": "PDF",
    "size": "271 KB"
  },
  {
    "group": "master",
    "title": "Final Project Presentation",
    "sourceUrl": "https://2ce4a178-75d1-45dc-aaad-b0158d04a88d.filesusr.com/ugd/2c56df_d941fb5466b545a6a86405d29eaaa68e.pptx?dn=Masters%20Final%20Project%20Presentation.pptx",
    "href": "https://2ce4a178-75d1-45dc-aaad-b0158d04a88d.filesusr.com/ugd/2c56df_d941fb5466b545a6a86405d29eaaa68e.pptx?dn=Masters%20Final%20Project%20Presentation.pptx",
    "archivePath": "assets/education/masters-final-project-presentation.pptx",
    "format": "PPTX",
    "size": "32.3 MB"
  },
  {
    "group": "master",
    "title": "WBS",
    "sourceUrl": "https://2ce4a178-75d1-45dc-aaad-b0158d04a88d.filesusr.com/ugd/2c56df_cdbbc962be85400ca9a805cb6ae54e58.xlsx?dn=Masters%20WBS.xlsx",
    "href": "/documents/education/masters-wbs.xlsx",
    "format": "XLSX",
    "size": "13 KB"
  }
];
