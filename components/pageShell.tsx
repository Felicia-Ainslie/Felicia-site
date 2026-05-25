//Reusable component for page layout, includes navigation and styling

import Nav from "./nav";

type PageShellProps = {
  children: React.ReactNode;
  centered?: boolean;
};

export default function PageShell({ children, centered = false }: PageShellProps) {
    <main className={`min-h-screen relative bg-[#F8F4EE] text-[#243270] px-6 ${centered ? "flex items-center justify-center" : ""}`}>
        <Nav />
        {children}
    </main>
}