// Experience brings professional history, the complete skills inventory, and education together.
// Content lives in data/experience.ts, data/technicalSkills.ts, and data/education.ts.
// The saved LinkedIn archive supplies Nextiva promotion dates and direct credential links.
// Academic files are stored in public/documents/education; Portfolio holds the full collections.
// Editing these shared content modules updates both degree previews and academic portfolio entries.
import { ButtonLink, PageShell, TextLink } from "@/components";
import { siteData } from "@/data";
import { skillGroups } from "@/data/technicalSkills";
import { workExperience } from "@/data/experience";
import { academicProjects, certificates, degrees } from "@/data/education";

export default function Experience() {
  return (
    <PageShell centered={false}>
      <div className="career-page">
        <header className="career-intro">
          <h1 className="career-title">Experience</h1>
          <p className="body">A closer look at the hands-on work and training that shape how I approach product decisions and technical delivery.</p>

        </header>

        <section id="skills" className="career-section" aria-labelledby="skills-heading">
          <div className="skills-box brand-panel">
            <h2 id="skills-heading">Skills &amp; Tools</h2>
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <dl key={group.label} className="skills-column" aria-label={group.label}>
                  {group.skills.map((skill) => (
                    <div key={skill.label}>
                      <dt>{skill.label}</dt>
                      <dd>{skill.value}</dd>
                    </div>
                  ))}
                </dl>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="career-section" aria-labelledby="work-heading">
          <h2 id="work-heading">Work Experience</h2>
          <div className="work-resume-action">
            <ButtonLink href={siteData.resumeUrl}>Download Resume</ButtonLink>
          </div>
          {workExperience.map((job) => (
            <article key={job.company} id={job.company === "CVS Health" ? "cvs" : "nextiva"} className="experience-entry">
              <header className="entry-heading">
                <div>
                  <h3>{job.company}</h3>
                  <p className="role-title">{job.title}</p>
                </div>
                <div className="career-meta"><p>{job.period}</p><p>{job.location}</p></div>
              </header>
              {job.overview && <p className="career-context">{job.overview}</p>}
              {job.context && <p className="career-context">{job.context}</p>}
              <ul className="contribution-list">
                {job.contributions.slice(0, 5).map((item) => <li key={item}>{item}</li>)}
              </ul>
              {job.roles && (
                <details className="career-details">
                  <summary>Career progression at {job.company} ({job.roles.length} roles)</summary>
                  <ol className="career-progression">
                    {job.roles.map((role) => (
                      <li key={`${role.title}-${role.period}`}>
                        <h4>{role.title}</h4>
                        <p className="career-meta">{role.period}</p>
                        <p>{role.description}</p>
                      </li>
                    ))}
                  </ol>
                </details>
              )}
              <details className="career-details">
                <summary>More contributions at {job.company}</summary>
                <ul className="contribution-list">
                  {job.contributions.slice(5).map((item) => <li key={item}>{item}</li>)}
                </ul>
              </details>
            </article>
          ))}
        </section>

        <section id="education" className="career-section" aria-labelledby="education-heading">
          <h2 id="education-heading">Education</h2>
          {degrees.map((degree) => {
            const project = academicProjects.find((item) => item.id === degree.projectId);
            return (
              <article className="degree-entry" key={degree.id}>
                <h3>{degree.title}</h3>
                <p className="role-title">{degree.emphasis}</p>
                <p className="career-meta">{degree.institution} · {degree.graduated}</p>
                {degree.distinction && <p className="career-meta">{degree.distinction}</p>}
                <TextLink href={degree.proofUrl}>View degree credential</TextLink>
                {project && (
                  <div className="academic-preview">
                    <p className="career-kicker">{project.degree} · Academic project</p>
                    <h4>{project.title}</h4>
                    <p className="career-meta">{project.organization}</p>
                    <p>{project.summary}</p>
                    <div className="document-actions">
                      <TextLink href={project.featuredDocument}>Read {project.id === "master" ? "project proposal" : "project concept"} (PDF)</TextLink>
                      <TextLink href={project.featuredDocument} download>Download PDF</TextLink>
                      <TextLink href={`/portfolio#${project.id}-capstone`}>Explore all project documents</TextLink>
                    </div>
                  </div>
                )}
              </article>
            );
          })}

          <div className="certificate-divider" aria-hidden="true" />
          <section id="certificates" className="certificate-section brand-panel" aria-labelledby="certificates-heading">
            <h3 id="certificates-heading">Certificates &amp; Professional Development</h3>
            <p className="credentials-link">
              <TextLink href="https://www.linkedin.com/in/feliciaainslie">View LinkedIn credentials</TextLink>
            </p>
            <div className="certificate-grid">
              {(["Leadership & AI", "Security & Technical Delivery"] as const).map((group) => (
                <div key={group}>
                  <h4>{group}</h4>
                  <ul className="certificate-list">
                    {certificates.filter((item) => item.group === group).map((item) => (
                      <li key={item.title}>
                        <p className="certificate-title">{item.title}</p>
                        <p className="career-meta">{item.issuer}{item.issued ? ` · ${item.issued}` : ""}</p>
                        <div className="document-actions">
                          {item.proofUrl && <TextLink href={item.proofUrl}>View certificate</TextLink>}
                          {item.downloadHref && <TextLink href={item.downloadHref} download>Download certificate (JPG)</TextLink>}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

        </section>
      </div>
    </PageShell>
  );
}
