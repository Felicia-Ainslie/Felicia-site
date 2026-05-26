//Reusable component for section headings

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
    return (
        <h2 className="page-title text-4xl md:text-6x1 mb-6 mt-6">  
            {children} 
        </h2>
    );
}