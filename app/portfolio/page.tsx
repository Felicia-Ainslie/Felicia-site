import Image from "next/image";


export default function Portfolio() {
  return (
    <main className="min-h-screen relative flex items-center justify-center px-6">
      
      <nav className="absolute top-0 left-0 w-full px-10 py-6 flex items-center justify-between">
        
        <div className="flex items-center">
          <Image src="/images/fa-logo.jpg" alt="Felicia Ainslie 'FA-Logo'" width={62} height={62} priority className="object-contain"/>
        </div>

        <div className="flex gap-8 text-sm font-medium tracking-wide [&_a]:text-[#24324A] [&_a]:hover:text-[#C9A063] [&_a]:hover:border-[#24324A] [&_a]:transition [&_a]:duration-300 [&_a]:border-b-2 [&_a]:border-transparent [&_a]:pb-1">
        
          <a href="/home">Home</a>
          <a href="/contact">Contact</a>
          
        </div>

      </nav>

      <section id="portfolio" className="max-w-5xl text-center pt-20">
 

      </section>

    </main>
  );
}
