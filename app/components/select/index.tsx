interface SelectProps {
    name: string;
    options: Array<{ id: string; name: string }>;
    selected?: string;
    id: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({ name, options, selected, id, onChange }: SelectProps) {
    return (
        <div>
            <label className="form-label" htmlFor={id}>{name}</label>
            <select className="form-control" id={id} value={selected} onChange={onChange}>
                {options.map((item, index) => (
                    <option key={index} value={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    );
}