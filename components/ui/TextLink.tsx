// Reusable TextLink component for internal and external web links.
//colors:
//primary-text: #24324A navy
//hover-text: #C9A063 gold
//hover-border: #24324A navy


import Link from "next/link";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function TextLink({ href, children, className }: TextLinkProps) {

    if (!href) {
        console.error("TextLink missing href");
        return null;
    }

    const baseClass="relative inline-block underline text-[#24324A] hover:text-[#C9A063] hover:border-[#24324A] transition duration-300 border-b-2 border-transparent pb-1"

    const combinedClassName=`${baseClass} ${className ?? ""}`;

    const isExternal = 
        href?.startsWith("http") || 
        href?.startsWith("mailto:") ||
        href?.endsWith(".pdf");

    if (isExternal) {
        return (
            <Link href={href} target="_blank" rel="noopener noreferrer" className={combinedClassName}>
                {children}
            </Link>
        );
    }

    return (
        <Link href={href} className={combinedClassName}>
            {children}
        </Link>
    );
}