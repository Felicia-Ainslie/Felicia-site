import PageShell from "@/components/layout/PageShell"; 
import SectionHeading from "@/components/ui/SectionHeading";
import { siteData } from "@/data/site";
import ButtonLink from "@/components/ui/ButtonLink";

export default function Contact() {
  return (
    <PageShell centered={false}>
      <section id="contact" className="max-w-5xl text-center pt-20">

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
