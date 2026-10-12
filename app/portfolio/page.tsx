// Portfolio page - coming soon! For now, this page provides a link to download my resume and will be updated with project highlights and case studies in the near future.
//Layout is imported via "Barrel Export": components > index.ts
//Information is imported via "Barrel Export": data  > index.ts
// Updated: repository work appears first; academic projects and original downloads follow.
// The résumé download now lives on Experience and Contact; project-card footers align technologies and actions.
// Shared academic descriptions come from data/education.ts, also used on Experience.
// Document titles, formats, sizes, and original Wix URLs live in data/academicDocuments.ts.

import {PageShell, Card, TextLink} from "@/components";
import { projects } from "@/data";
import { academicProjects } from "@/data/education";
import { academicDocuments } from "@/data/academicDocuments";

export default function Portfolio() {
  return (
    <PageShell centered={false}>

      <div className="career-page">
      <section className="career-intro">
      
        <h1 className="career-title">Portfolio</h1>

        <p className="body">
          A growing collection of product concepts, AI-enabled workflow prototypes, cybersecurity operations models, and technical product artifacts that demonstrate how I approach complex systems.
        </p>
      </section>

      <section id="projects" className="career-section" aria-labelledby="repositories-heading">
        <h2 id="repositories-heading">Independent Projects &amp; Repositories</h2>
        <p className="section-introduction">Repositories, prototypes, and work in progress.</p>
        <div className="project-grid">
          {projects.map((project) => (
            <Card key={project.title} title={project.title} headingLevel={3} className="project-card">
              <p className="project-status">{project.status}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-footer">
                <p className="project-tech-label">Technology &amp; Focus</p>
                <ul className="project-tags" aria-label={`${project.title} technologies and focus`}>
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <div className="project-action">
                  {project.comingSoon ? (
                    <em>Coming Soon!</em>
                  ) : project.liveUrl ? (
                    <TextLink href={project.liveUrl}>Play Now</TextLink>
                  ) : project.repositoryPrivate ? (
                    <span>Private repository</span>
                  ) : project.repositoryUrl ? (
                    <TextLink href={project.repositoryUrl}>
                      View Github Repository
                    </TextLink>
                  ) : null}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="career-section" aria-labelledby="academic-heading">
        <h2 id="academic-heading">Academic Projects</h2>
        <p className="section-introduction">Practice in school: capstone work for fictional organizations, with the original planning, security, and delivery documents.</p>
        {academicProjects.map((project) => (
          <article className="academic-project" id={`${project.id}-capstone`} key={project.id}>
            <p className="career-kicker">{project.degree}</p>
            <h3>{project.title}</h3>
            <p className="career-meta">{project.organization}</p>
            <p>{project.summary}</p>
            <ul className="contribution-list">
              {project.highlights.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <TextLink href={project.featuredDocument}>Read {project.id === "master" ? "project proposal" : "project concept"} (PDF)</TextLink>
            <details className="career-details">
              <summary>All {project.degree.toLowerCase()} documents ({academicDocuments.filter((item) => item.group === project.id).length})</summary>
              <ul className="document-list">
                {academicDocuments.filter((item) => item.group === project.id).map((document) => (
                  <li key={document.href}>
                    <div><p className="certificate-title">{document.title}</p><p className="career-meta">{document.format} · {document.size}</p></div>
                    <div className="document-actions">
                      {document.format === "PDF" && <TextLink href={document.href}>Read<span className="sr-only"> {document.title}</span></TextLink>}
                      <TextLink href={document.href} download>Download<span className="sr-only"> {document.title}</span></TextLink>
                    </div>
                  </li>
                ))}
              </ul>
            </details>
          </article>
        ))}
      </section>
      </div>
    </PageShell>
  );
}
