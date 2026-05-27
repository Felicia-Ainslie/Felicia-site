// Portfolio page - coming soon! For now, this page provides a link to download my resume and will be updated with project highlights and case studies in the near future.

import PageShell from "@/components/layout/PageShell"; 
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { projects } from "@/data/projects";
import { siteData } from "@/data/site";
import ButtonLink from "@/components/ui/ButtonLink";
import TextLink from "@/components/ui/TextLink";

export default function Portfolio() {
  return (
    <PageShell centered={false}>

        <section className="max-w-5x1 ms-auto px-8 py-10">
        <SectionHeading>Portfolio</SectionHeading>

        <p className="text-xl leading-relaxed max-w-4x1 mb-12 text-[#24324A]">
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

      <section id="projects" className="max-w-6x1 mx-auto px-8 py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              chldren={
                <>
                  <p className="text-sm uppercase tracking-wide text-[#C9A063] mb-3">{project.status}</p>
                  <p className="leading-relaxed mb-6 text-[#24324A]">
                    {project.description}
                  </p>

                  <p className="mb-4 italic">
                    <TextLink href={project.repositoryUrl}>View Repository
                    </TextLink>
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm bg-[#F8F4EE] text-[#163A70] px-3 py-1 rounded-full border border-[#E7DDCC8]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              }
            />
          ))}
        </div>
      </section>

    </PageShell>
  );
}
