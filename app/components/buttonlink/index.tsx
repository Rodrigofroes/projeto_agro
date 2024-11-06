interface ButtonProps {
    text?: string;
    senha?: () => void;
    icon?: string;
}

export default function ButtonLink({ text, senha, icon }: ButtonProps) {
    return (
        <div>
            {
                text ? <button onClick={senha} className="btn btn-link">{text}</button>
                    :
                    <button onClick={senha} className="btn btn-link text-white"><i className={icon}></i></button>
            }

        </div>
    )
}