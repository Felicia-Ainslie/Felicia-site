// Reusable button component for links with primary and secondary variants

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
    const styles =
        variant === "primary"
            ? "br-[#C9A063] text-[#F8F4EE] hover:opacity-80"
            : "bg-[#163270] text-[#F8F4EE] hover:opacity-80";

    return (
        <a href={href} className={'${styles} px-8 py-4 rounded-x1 text-lr front-medium shadow-me transition duration-300'}>
            {children}
        </a>
    );
}