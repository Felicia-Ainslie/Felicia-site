//This page will be the contact page for the website. It will have links to my social media profiles and a contact form for people to reach out to me.
//Layout is imported via "Barrel Export": components > index.ts
//Information is imported via "Barrel Export": data  > index.ts

// Contact uses direct links and one introduction; no form backend is required.
// Social icons are official, unchanged brand assets used only to link to my profiles.
// Contact destinations remain centralized in data/site.ts.
import Image from "next/image";
import { PageShell, TextLink } from "@/components";
import { siteData } from "@/data";

export default function Contact() {
  return (
    <PageShell centered={false}>
      <div className="career-page contact-page">
        <header className="career-intro">
          <h1 className="career-title">Let&apos;s Connect!</h1>
          <p className="contact-introduction">Have a complex product challenge, an idea worth exploring, or a team that could use my perspective? I&apos;m open to conversations about technical product leadership, cybersecurity, AI, and building systems that work for people.</p>
        </header>

        <section id="links" className="contact-panel" aria-label="Contact options">
          <div className="contact-links-row">
          <div className="contact-email-action">
            <a href={siteData.email} className="contact-email-address" aria-label={`Email ${siteData.email.replace(/^mailto:/i, "")}`}>
              <svg className="contact-email-icon" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 6 9 7 9-7" />
              </svg>
              <span>{siteData.email.replace(/^mailto:/i, "")}</span>
            </a>
          </div>

            <div className="contact-social-row">
              <TextLink href={siteData.socialLinks.linkedinUrl}>
                <span className="contact-social-icon" aria-hidden="true">
                  <Image src="/images/social/linkedin-in-blue.png" alt="" width={34} height={29} />
                </span>
                <span>Connect on LinkedIn</span>
              </TextLink>
            </div>
            <div className="contact-social-row">
              <TextLink href={siteData.socialLinks.githubUrl}>
                <span className="contact-social-icon" aria-hidden="true">
                  <Image src="/images/social/github-invertocat-black.svg" alt="" width={48} height={48} />
                </span>
                <span>Explore GitHub</span>
              </TextLink>
            </div>
          </div>
        </section>


      </div>
    </PageShell>
  );
}
