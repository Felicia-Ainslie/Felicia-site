//Reusable component for page layout, includes navigation and styling

import Nav from "@/components/layout/Nav";

type PageShellProps = {
  children: React.ReactNode;
  centered?: boolean;
};

export default function PageShell({ children, centered = true }: PageShellProps) {
    return (
        <main className={`min-h-screen relative bg-[#F8F4EE] text-[#24324A] px-6 ${centered ? "flex items-center justify-center" : ""}`}>
        <Nav />
        {children}
    </main>
    );
}