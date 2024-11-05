interface ButtonProps {
    name: string;
    entrar?: () => void;
    isLoading?: boolean;
}

export default function ButtonPrimary({ name, entrar, isLoading }: ButtonProps) {
    return (
        <button type="button" className="btn btn-primary w-100" disabled={isLoading} onClick={entrar}>
            {isLoading ? (
                <div className="spinner-border spinner-border-sm" role="status">
                </div>
            ) : (
                name
            )}
        </button>
    );
}