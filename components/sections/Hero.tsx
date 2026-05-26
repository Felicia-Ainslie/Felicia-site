//Reusable hero component for the website, includes a heading and subheading to introduce the site and its purpose. Styled with Tailwind CSS for a clean and modern look.

import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="max-w-5xl text-center pt-16">
    
    <h1 className="text-6xl md:text-7xl tracking-[0.22em] text-[#163270] mb-6 font-[family-name:var--font-heading)] italic font-medium pt-15">Felicia Ainslie</h1>

      <h2 className="text-2xl tracking-wide text-[#163270] mb-10">
        <Link href="/ask">LEARN.</Link> 
        <Link href="/contact">SOLVE.</Link> 
        <Link href="/portfolio ">DOCUMENT.</Link> 
        <Link href="/contact">DELIVER.</Link>
      </h2>

    </section>
  );
}