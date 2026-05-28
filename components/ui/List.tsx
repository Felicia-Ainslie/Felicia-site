//Reusable list component

type ListItem = {
    label: string;
    value: string;
};

type ListProps = {
    items: ListItem[];
};

export default function List({ items }: ListProps) {
    return (
        <ul className="space-y-2 text-md leading-relaxed text-[#24324A] list-disc pl-10">
            {items.map((item) => (
                <li key ={item.label}>
                    <strong>{item.label}</strong> {item.value}
                </li>
            ))}
        </ul>
    )
}