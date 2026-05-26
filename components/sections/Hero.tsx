//Reusable hero component for the website, includes a heading and subheading to introduce the site and its purpose. Styled with Tailwind CSS for a clean and modern look.

import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Hero() {
  return (
    <section id="home" className="max-w-5xl text-center pt-16">
    
    <SectionHeading>Felicia Ainslie</SectionHeading>

          <div className="brand-divider"> </div>


          <h2 className="page-title">
            <Link href="/ask">LEARN.</Link> 
            <Link href="/contact">SOLVE.</Link> 
            <Link href="/portfolio ">DOCUMENT.</Link> 
            <Link href="/contact">DELIVER.</Link>
          </h2>

    </section>
  );
}