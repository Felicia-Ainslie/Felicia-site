// Reusable button component for links with primary and secondary variants
//colors:
//primary: #163270 (dark blue), text: #F8F4EE (off-white)
//secondary: #C9A063 (gold), text: #F8F4EE (off-white) 

import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
    const className =
        variant === "secondary"
            ? "bg-[#C9A063] text-[#F8F4EE] hover:opacity-80 px-8 py-4 rounded-xl text-lg font-medium shadow-md transition duration-300 inline-block"
            : "bg-[#163270] text-[#F8F4EE] hover:opacity-80 px-8 py-4 rounded-xl text-lg font-medium shadow-md transition duration-300 inline-block";

    const isExternal = 
        href.startsWith("http") || 
        href.startsWith("mailto:") ||
        href.endsWith(".pdf");

    if (isExternal) {
    
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
                {children}
            </a>
        );
    }

        return(
            <Link href={href} className={className}>
                {children}
            </Link>
        );
}