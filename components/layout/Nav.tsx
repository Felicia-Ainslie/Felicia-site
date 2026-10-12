//Reusable navigation component for the website, includes logo and links to home and portfolio pages. Styled with Tailwind CSS for a clean and modern look.

// The logo is rendered by PageShell; navigation destinations are defined in data/navigation.ts.
// Every exposed destination has an implemented route, including Experience.

import { navigationItems } from "@/data/navigation";
import TextLink from "../ui/TextLink";

export default function Nav() {
  return (
    <nav aria-label="Main navigation" className="site-nav">
      {navigationItems.filter((item) => item.available).map((item) => (
        <TextLink key={item.href} href={item.href}>{item.label}</TextLink>
      ))}
    </nav>
  );
}
