//This is the home page of my portfolio site, which serves as an introduction to my background, skills, and experience. It includes a brief bio, a summary of my technical and product leadership skills, and links to my portfolio and contact pages. The design is clean and professional, with a focus on readability and clear communication of my value proposition as a product leader in the tech industry.
//Layout is imported via "Barrel Export": components > index.ts

// colors;
// #F8F4EE - light cream background / overall background color
// #24324A - dark slate text / primary text color
// #163a70 - deep blue accent / heading & primary button
// #C9A063 - warm gold accent / button

import {PageShell, SectionHeading, List }from "@/components";
import { profile } from "@/data";

export default function Home() {
  return (
    <PageShell centered={false}>
      <section className="max-w-5x1 ms-auto px-8 py-10">
      
        <SectionHeading>Professional Summary</SectionHeading>      
        
        <p className="body-copy">
          {profile.summary}
        </p>

        <br />

          <div className="body-copy">
            
            <h4 className="page-title">TECHNICAL & PRODUCT LEADERSHIP</h4>

              <List items={profile.skills} className="body"/>

          </div>        
      </section>
    </PageShell>
  );
}
