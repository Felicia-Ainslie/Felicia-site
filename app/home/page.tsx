//page.tsx is the main page of the website and is the first thing that users will see when they visit the site. It is designed to be a simple and clean introduction to Felicia, with a focus on her experience and skills as a senior product leader. The page is structured with a main element that contains a section with a heading, subheading, and a list of bullet points describing Felicia's experience and skills, as well as two buttons for viewing her portfolio and asking her questions.

// colors;
// #F8F4EE - light cream background / overall background color
// #24324A - dark slate text / primary text color
// #163a70 - deep blue accent / heading & primary button
// #C9A063 - warm gold accent / button

import Image from "next/image";


export default function Home() {
  return (
    <main className="min-h-screen relative flex items-center justify-center px-6">
      
      <nav className="absolute top-0 left-0 w-full px-10 py-6 flex items-center justify-between">
        
        <div className="flex items-center">
          <Image src="/images/fa-logo.jpg" alt="Felicia Ainslie 'FA-Logo'" width={62} height={62} priority className="object-contain"/>
        </div>

        <div className="flex gap-8 text-sm font-medium tracking-wide [&_a]:text-[#24324A] [&_a]:hover:text-[#C9A063] [&_a]:hover:border-[#24324A] [&_a]:transition [&_a]:duration-300 [&_a]:border-b-2 [&_a]:border-transparent [&_a]:pb-1">
        
          <a href="/portfolio">Portfolio</a>
          <a href="/contact">Contact</a>
          
        </div>

      </nav>

      <section id="home" className="max-w-5xl text-center pt-20">
      
        <h1 
          className="text-5xl tracking-widest text-[#163270] mb-1">
            Felicia Ainslie
          </h1>

        <br />

            <h2 className="text-2xl tracking-wide text-[#C9A063] mb-6">
              LEARN. SOLVE. DOCUMENT. DELIVER.
          </h2>

        <br />

        <p className="align-text-left max-w-4xl mx-auto text-left leading-relaxed mb-10 text-md">
          I am a Senior Product Leader specializing in cybersecurity, AI-enabled workflows, enterprise integrations, and operational platform modernization. My 8+ year background spans enterprise SaaS, UCaaS, PaaS, vulnerability management, workflow automation, release management, and large-scale technical operations, with experience leading initiatives across engineering, UX, infrastructure, and product strategy. I thrive at the intersection of systems thinking, technical collaboration, and human-centered design. Transforming complex operational challenges into scalable solutions that improve security, efficiency, and user experience. Throughout my career, I have worked closely with cross-functional teams, enterprise vendors, infrastructure providers, and integration partners internationally to align technical execution with business impact while improving operational clarity and scalability. I enjoy solving messy problems, uncovering operational friction, and building systems that teams can actually adopt, trust, and scale. I naturally gravitate toward jumping in the deep end, learning enough to be dangerous, identifying gaps, documenting more than just the solution, and delivering results that exceed expectations.

        </p>

        <br />

          <div 
            className="max-w-4xl mx-auto text-left leading-relaxed mb-10">
            
            <h4><strong>TECHNICAL & PRODUCT LEADERSHIP</strong></h4>

            <br />

            <ul className="space-y-2 text-md leading-relaxed text-[#24324A] list-disc pl-6">
              <li><strong>Frontend collaboration:</strong> React, TypeScript, JavaScript, CSS, Carbon Design System</li>
              <li><strong>Backend & APIs:</strong> Node.js, TypeScript, JavaScript, Python, SQL, REST APIs, event-driven services, workflow orchestration</li>
              <li><strong>Cloud & Infrastructure:</strong> Azure, GCP, Databricks, enterprise cloud deployments</li>
              <li><strong>Security & Identity:</strong> Vulnerability management and enterprise security integrations including Snyk,Qualys, Wiz, Sonatype, Ping Identity, Cloudflare, and ServiceNow CMDB </li>
              <li><strong>Developer Collaboration:</strong> GitHub, Jira, code reviews, release coordination, technical planning</li>
              <li><strong>Documentation & Enablement:</strong> Markdown, Docusaurus, Scribe, runbooks, release notes, RCA, documentation</li>
              <li><strong>Workflow & Automation:</strong> Jira automation, Power Automate, Automation Anywhere, AI/UI agent workflows, operational process improvement</li>
              <li><strong>UX & Product Collaboration:</strong> Figma, Miro, workflow mapping, live-page prototyping and workshop iteration</li>
              <li><strong>Observability & Reporting:</strong> Grafana, Splunk, DataDog, Power BI</li> 
            </ul>
          </div>        
      </section>
    </main>
  );
}
