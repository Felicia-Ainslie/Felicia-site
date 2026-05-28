//This page will be the contact page for the website. It will have links to my social media profiles and a contact form for people to reach out to me.
//Layout is imported via "Barrel Export": components > index.ts
//Information is imported via "Barrel Export": data  > index.ts

import {PageShell, SectionHeading, ButtonLink} from "@/components";
import { siteData } from "@/data";

export default function Contact() {
  return (
    <PageShell centered={false}>
        <section className="max-w-5x1 ms-auto px-8 py-10">

        <SectionHeading>Let&apos;s Connect!</SectionHeading>
        <p className="mb-10">
          I am always open to new opportunities and collaborations. <br />
          Feel free to reach out to me through any of the platforms below!
        </p>
      </section>

      <section id="links">
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          <ButtonLink href={siteData.socialLinks.linkedinUrl}>LinkedIn</ButtonLink>
          <ButtonLink href={siteData.socialLinks.githubUrl} variant="secondary">GitHub</ButtonLink>
          <ButtonLink href={siteData.email}>Email</ButtonLink>
          <ButtonLink href={siteData.resumeUrl} variant="secondary">Download Resume</ButtonLink>
        </div>
      </section>
    </PageShell>
  );
}
