//Reusable navigation component for the website, includes logo and links to home and portfolio pages. Styled with Tailwind CSS for a clean and modern look.

import TextLink from "../ui/TextLink";

export default function Nav() {
  return (      
      <header className="flex items-center mt-4">

          <nav className="ml-auto flex gap-8 text-sm font-medium tracking-wide">
          
            <TextLink href="/home">Home</TextLink>
            <TextLink href="/ask">Ask Felicia AI</TextLink>
            <TextLink href="/portfolio">Portfolio</TextLink>
            <TextLink href="/contact">Contact</TextLink>

          </nav>
        </header>
      );
}
