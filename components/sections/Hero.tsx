//Reusable hero component for the website, includes a heading and subheading to introduce the site and its purpose. Styled with Tailwind CSS for a clean and modern look.

import SectionHeading from "@/components/ui/SectionHeading";

export default function Hero() {
  return (
    <section id="home" className="max-w-5xl text-center pt-16">
    
    <SectionHeading>Felicia Ainslie</SectionHeading>

          <div className="brand-divider"> </div>


          <h2 className="page-title">LEARN.SOLVE.DOCUMENT.DELIVER.</h2>

    </section>
  );
}