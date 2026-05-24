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

          <div 
            className="max-w-4xl mx-auto text-left leading-relaxed mb-10">

            <ul className="space-y-2 text-md leading-relaxed text-[#24324A] list-disc pl-6">
              <li>
                <strong>Senior Technical Product Leader</strong> focused on AI, cybersecurity, operational modernization, reusable and scalable enterprise systems.
                </li>
              <li>
                8+ years of experience and a proven track record of driving innovation and delivering documented results in <em>chaotic</em> or otherwise fast-paced environments.
                </li>
              <li>
                Naturally gravitates toward jumping in the deep end, learning enough to be dangerous, identifying gaps, documenting more than just the solution, and delivering results that exceed expectations.
                </li>
            </ul>
          </div>

        <br />
        <br />
        <br />

        <div className="flex flex-wrap justify-center gap-4">

            <button className="bg-[#163a70] text-white px-6 py-4 rounded-xl text-md font-medium shadow-md hover:opacity-90 transition duration-300">
              View Portfolio
            </button>

            <br />

            <button className="bg-[#C9A063] text-white px-6 py-4 rounded-xl text-md font-medium shadow-md hover:opacity-90 transition duration-300">
              Contact Felicia
            </button>

        </div>

      </section>

    </main>
  );
}
