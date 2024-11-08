export type erro = {
    nome?: string;
    telefone?: string;
    email?: string;
    senha?: string;
}

export type usuario = {
    id: string;
    pro_id: string;
    pro_nome: string;
    pro_telefone: string;
    pro_email: string;
}

export type categoria = {
    cat_id: string;
    cat_name: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
}

export interface UserContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}