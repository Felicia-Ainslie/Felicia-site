import Nav from "@/components/layout/Nav";

export default function Contact() {
  return (
    <main className="min-h-screen relative flex items-center justify-center px-6">
      
      <Nav />

      <section id="contact" className="max-w-5xl text-center pt-20">

        <h1><em><strong>Want to collaborate?</strong></em></h1>

          <br />

          <div className="grid gap-6 max-w-3xl mx-auto text-left">

            <a href="https://www.linkedin.com/in/feliciaainslie" target="_blank" rel="noopener noreferrer" className="text-[#163270] hover:text-[#C9A063] text-sm font-medium tracking-wide">
              Connect on LinkedIn
            </a>

            <a href="https://www.github.com/felicia-ainslie" target="_blank" rel="noopener noreferrer" className="text-[#163270] hover:text-[#C9A063] text-sm font-medium tracking-wide">
              View My GitHub
            </a>

            <a href="mailto:FeliciaAinslie@gmail.com" className="text-[#163270] hover:text-[#C9A063] text-sm font-medium tracking-wide">
              Email Me
            </a>
        </div>
      </section>
    </main>
  );
}
