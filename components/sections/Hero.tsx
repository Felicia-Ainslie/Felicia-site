//Reusable hero component for the website, includes a heading and subheading to introduce the site and its purpose. Styled with Tailwind CSS for a clean and modern look.

import SectionHeading from "@/components/ui/SectionHeading";
import {profile} from "@/data";

export default function Hero() {
  return (

    <section id="home" className="text-center pt-10">
    
    <SectionHeading>{profile.name}</SectionHeading>

          <div className="brand-divider"> </div>


          <h2 className="page-title">{profile.tagline}</h2>

    </section>
  );
}