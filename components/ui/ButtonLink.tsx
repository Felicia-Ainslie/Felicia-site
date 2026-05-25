// Reusable button component for links with primary and secondary variants

import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
    const styles =
        variant === "secondary"
            ? "bg-[#C9A063] text-[#F8F4EE] hover:opacity-80"
            : "bg-[#163270] text-[#F8F4EE] hover:opacity-80";

    const isExternal = href.startsWith("http") || href.startsWith("mailto:");

    return (
        <Link href={href} 
        target={isExternal ? "_blank" : undefined}
        className={`${styles} px-8 py-4 rounded-xl text-lg font-medium shadow-md transition duration-300 inline-block`}>
            {children}
        </Link>
    );
}