//This is the home page of my portfolio site, which serves as an introduction to my background, skills, and experience. It includes a brief bio, a summary of my technical and product leadership skills, and links to my portfolio and contact pages. The design is clean and professional, with a focus on readability and clear communication of my value proposition as a product leader in the tech industry.
//Layout is imported via "Barrel Export": components > index.ts

// colors;
// #F8F4EE - light cream background / overall background color
// #24324A - dark slate text / primary text color
// #163a70 - deep blue accent / heading & primary button
// #C9A063 - warm gold accent / button

// Homepage V1: the introduction and buttons appear first, followed by the operating philosophy.
// The introduction uses profile.summary unchanged.
// The complete technical skills are in data/technicalSkills.ts and referenced by profile.skills
// for the Experience page; they are not rendered here. Update that module to change skills.

import { ButtonLink, PageShell } from "@/components";
import { profile } from "@/data";

const philosophy = [
  { title: "Learn.", description: "Understand the people, the systems, and the problem before choosing a solution." },
  { title: "Solve.", description: "Identify friction, evaluate tradeoffs, and build solutions that address real needs." },
  { title: "Document.", description: "Capture the decisions, reasoning, and knowledge that help teams move forward." },
  { title: "Deliver.", description: "Turn ideas into working outcomes, gather feedback, and improve through iteration." },
];

export default function Home() {
  return (
    <PageShell centered={false}>
      <div className="homepage">

        <section className="executive-intro" aria-labelledby="intro-heading">
          <h1 id="intro-heading">About Me</h1>
          <p className="intro-copy">{profile.summary}</p>
          <div className="home-actions">
            <ButtonLink href="/portfolio">Explore My Work</ButtonLink>
            <ButtonLink href="/ask" variant="secondary">Ask Felicia AI</ButtonLink>
          </div>
        </section>

        <section className="operating-philosophy brand-panel" aria-labelledby="philosophy-heading">
          <h2 id="philosophy-heading">OPERATING PHILOSOPHY</h2>
          <div className="philosophy-grid">
            {philosophy.map((item) => (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </PageShell>
  );
}
