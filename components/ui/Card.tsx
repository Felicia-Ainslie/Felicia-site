//Reusable Card component for consistent styling across the application. The Card component accepts a title and children as props, allowing for flexible content while maintaining a cohesive design. It features a light cream background, rounded corners, and a subtle shadow for depth. The border color changes on hover to provide visual feedback, enhancing the user experience. The title is styled with a deep blue accent color to make it stand out, while the content uses the primary text color for readability. This component can be used throughout the application to display various types of information in a visually appealing and consistent manner.

type CardProps = {
    title: string;
    chldren: React.ReactNode;
};

export const Card = ({ title, chldren }: CardProps) => {
    return (
        <div className="bg-[#F8F4EE] rounded-2xl shadow-sm p-6 border-[#e7dcc8] hover:border-[#C9A063] transition duration-300 ease-in-out">

            <h2 className="text-2xl mb-4 text-[#163a70]">{title}</h2>

            <div className="text-[#24324A] leading-relaxed">
                {chldren}
            </div>
        </div>
    );
}