//Reusable Card component for consistent styling across the application. 

type CardProps = {
    title: string;
    chldren: React.ReactNode;
};

export default function Card ({ 
    title, 
    chldren 
    }: CardProps) {
    return (
        <article className="rounded-2xl bg-[#E6EEF8] shadow-lg p-6">

            <h2 className="font-extrabbold text-2xl mb-4">{title}</h2>

            <div className="leading-relaxed">
                {chldren}
            </div>
        </article>
    );
}