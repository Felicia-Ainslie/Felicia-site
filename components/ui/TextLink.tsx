

import Link from "next/link";
import ButtonLink from "./ButtonLink";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function TextLink({ href, children }: TextLinkProps) {
    const isExternal = 
        href.startsWith("http") || 
        href.startsWith("mailto:") ||
        href.endsWith(".pdf");

    if (isExternal) {
    
        return (
            <Link href={href} target="_blank" rel="noopener noreferrer" className="text-[#24324A] hover:text-[#C9A063] hover:border-[#24324A] transition duration-300 border-b-2 border-transparent pb-1">
                {children}
            </Link>
        );
    }
}