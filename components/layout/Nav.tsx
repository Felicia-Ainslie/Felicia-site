//Reusable navigation component for the website, includes logo and links to home and portfolio pages. Styled with Tailwind CSS for a clean and modern look.

import Image from "next/image";
import TextLink from "../ui/TextLink";

export default function Nav() {
  return (      
      <nav className="absolute top-0 left-0 w-full px-10 py-6 flex items-center justify-between">
        
        <div className="flex items-center">
          <Image src="/images/fa-logo.jpg" alt="Felicia Ainslie 'FA-Logo'" width={62} height={62} priority className="object-contain"/>
        </div>

        <div className="flex gap-8 text-sm font-medium tracking-wide">
        
          <TextLink href="/home">Home</TextLink>
          <TextLink href="/ask">Ask Felicia AI</TextLink>
          <TextLink href="/portfolio">Portfolio</TextLink>
          <TextLink href="/contact">Contact</TextLink>

        </div>
      </nav>
  );
}
