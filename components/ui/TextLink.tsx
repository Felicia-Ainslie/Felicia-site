

import Link from "next/link";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function TextLink({ href, children }: TextLinkProps) {

    if (!href) {
        console.error("TextLink missing href");
        return null;
    }

    const className="text-[#24324A] underline hover:text-[#C9A063] hover:border-[#24324A] transition duration-300 border-b-2 border-transparent pb-1"

    const isExternal = 
        href?.startsWith("http") || 
        href?.startsWith("mailto:") ||
        href?.endsWith(".pdf");

    if (isExternal) {
    
        return (
            <Link href={href} target="_blank" rel="noopener noreferrer" className="text-[#24324A] underline hover:text-[#C9A063] hover:border-[#24324A] transition duration-300 border-b-2 border-transparent pb-1">
                {children}
            </Link>
        );
    }

    return (
        <Link href={href} className={className}>
            {children}
        </Link>
    );
}