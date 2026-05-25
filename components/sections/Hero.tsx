//Reusable hero component for the website, includes a heading and subheading to introduce the site and its purpose. Styled with Tailwind CSS for a clean and modern look.

import SectionHeading from "./SectionHeading";

export default function Hero() {
  return (
    <section id="home" className="max-w-5xl text-center pt-16">
      <SectionHeading>Felicia Ainslie</SectionHeading>

      <div className="text-xl tracking-[0.18em] text-[#243270] mb-10"></div>

      <h2 className="text-3xl tracking-wide text-[#163270] mb-10">LEAEN. SOLVE.DOCUMENT. DELIVER.</h2>

    </section>
  );
}