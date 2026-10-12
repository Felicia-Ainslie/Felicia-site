//Reusable Card component for consistent styling across the application.
// Optional className scopes page-specific layouts; headingLevel keeps nested project headings semantic.

type CardProps = {
    title: string;
    children: React.ReactNode;
    className?: string;
    headingLevel?: 2 | 3;
};

export default function Card({ title, children, className = "", headingLevel = 2 }: CardProps) {
    const Heading = headingLevel === 3 ? "h3" : "h2";
    
    return (
        <article className={`rounded-2xl bg-[#E6EEF8] shadow-lg p-6 ${className}`}>

            <Heading className="font-semibold text-2xl mb-4">{title}</Heading>

            <div className="card-content leading-relaxed">{children}</div>
        </article>
    );
}