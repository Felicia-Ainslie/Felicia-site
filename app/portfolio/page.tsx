// Portfolio page - coming soon! For now, this page provides a link to download my resume and will be updated with project highlights and case studies in the near future.

import Nav from "@/components/layout/Nav";

export default function Portfolio() {
  return (
    <main className="min-h-screen relative flex items-center justify-center px-6">
      
<Nav />

      <section id="portfolio" className="max-w-5xl text-center pt-20">

        <div className="resume-page">

          <h1><em><strong>Portfolio Coming Soon!</strong></em></h1>

          <p>
            <br />
            <a href="/FeliciaAinslie_Resume.pdf" download className="text-[#C9A063] hover:text-[#163270] text-sm font-medium tracking-wide">
              Download  Resume
            </a>
          </p>

        </div>
      </section>
    </main>
  );
}
