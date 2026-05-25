//Reusable component for section headings

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
    return (
        <h2 className="text-5xl md:text-6xl tracking-[0.18em] text-[#163270] mb-6 font-[family-name:var--font-heading)]">  
            {children}
        </h2>
    );
}