// Portfolio page - coming soon! For now, this page provides a link to download my resume and will be updated with project highlights and case studies in the near future.
//Layout is imported via "Barrel Export": components > index.ts
//Information is imported via "Barrel Export": data  > index.ts


import {PageShell, SectionHeading, Card, ButtonLink, TextLink} from "@/components";
import { projects, siteData } from "@/data";

export default function Portfolio() {
  return (
    <PageShell centered={false}>

      <section className="max-w-5x1 ms-auto px-8 py-10">
      
        <SectionHeading>Portfolio</SectionHeading>

        <p className="body">
          A growing collection of product concepts, AI-enabled workflow prototypes, cybersecurity operations models, and technical product artifacts that demonstrate how I approach complex systems.
        </p>
      </section>

        <div className="resume-page text-center">
          <h1>
            <em>
              <strong>Portfolio Coming Soon!</strong>
            </em>
          </h1>
          <p>
            <br />
            <ButtonLink href={siteData.resumeUrl}>
              Download Resume
            </ButtonLink>
          </p>
        </div>

      <section id="projects" className="content-width">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
            >
              <p className="gold-text text-sm uppercase font-medium tracking-wide mb-3">
                {project.status}
              </p>

              <p>
                {project.description}
              </p>

              <br />

              <p className="mb-4 italic text-center">
                <TextLink href={project.repositoryUrl}>
                  View Repository
                </TextLink>
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm bg-[#163A70] text-[#F8F4EE] mt-2 px-2 py-2 rounded-full border border-[#E7DDCC8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

    </PageShell>
  );
}
