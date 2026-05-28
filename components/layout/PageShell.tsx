//Reusable component for page layout, includes navigation and styling.
//Layout is imported via "Barrel Export": components > index.ts

import Image from "next/image";
import {Nav, Hero} from "@/components";

type PageShellProps = {
  children: React.ReactNode;
  centered?: boolean;
};

export default function PageShell({ children, centered = true }: PageShellProps) {
    return (
        <main className={`min-h-screen relative bg-[#F8F4EE] text-[#24324A] px-6 ${centered ? "flex items-center justify-center" : ""}`}>
        
        <div className="flex items-center">
          <Image src="/images/fa-logo.jpg" alt="Felicia Ainslie 'FA-Logo'" width={84} height={84} priority className="object-contain pt-10 mt-4 ml-auto"/>
        </div>
        <Nav />
              <Hero />    
        
        
        <div className="max-w-7xl mx-auto w-full">
            {children}
        </div>
        
        </main>
    );
}