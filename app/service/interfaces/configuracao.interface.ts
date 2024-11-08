import { categoria, usuario } from "@/app/types/type";

export interface IConfiguracao {
    profiles(): Promise<usuario[] | null>;
    categorias(): Promise<categoria[] | null>;
    deleteProfile(id: string): Promise<boolean>;
}