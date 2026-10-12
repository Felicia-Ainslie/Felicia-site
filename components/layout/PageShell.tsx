//Reusable component for page layout, includes navigation and styling.
//Layout is imported via "Barrel Export": components > index.ts

// The shared shell owns the logo, name, navigation, and footer for every page.
// Page-specific headings belong in each page. Header/footer changes affect all routes.
// The logo URL must match public/images/FA-logo.jpg exactly, including capitalization.

import Image from "next/image";
import { Nav } from "@/components";
import Footer from "./Footer";

type PageShellProps = {
  children: React.ReactNode;
  centered?: boolean;
};

export default function PageShell({ children, centered = true }: PageShellProps) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-brand">
          <Image src="/images/FA-logo.jpg" alt="Felicia Ainslie 'FA-Logo'" width={84} height={84} priority className="object-contain" />
          <div>
            <p className="brand-name">Felicia Ainslie</p>
            <p className="brand-descriptor">TECHNICAL PRODUCT LEADER</p>
          </div>
        </div>
        <Nav />
      </header>
      <main className={`site-main ${centered ? "flex items-center justify-center" : ""}`}>
        <div className="max-w-7xl mx-auto w-full">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
