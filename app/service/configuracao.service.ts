import { supabase } from "@/firebase/firebase";
import { IConfiguracao } from "./interfaces/configuracao.interface"
import { categoria, usuario } from "../types/type";
export default class ConfiguracaoService implements IConfiguracao {
    async profiles(): Promise<usuario[] | null> {
        try {
            const { data, error } = await supabase
                .from('profiles')
                .select('*');

            if (error) {
                console.error("Erro ao consultar profiles:", error.message);
                return null;
            }

            return data;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    async categorias(): Promise<categoria[] | null> {
        try {
            const { data, error } = await supabase
                .from('category')
                .select('*');

            if (error) {
                console.error("Erro ao consultar categorias:", error.message);
                return [];
            }

            return data;
        } catch (e) {
            console.log("Erro inesperado:", e);
            return [];
        }
    }

    async deleteProfile(id: string): Promise<boolean> {
        try {
            const { error } = await supabase
                .from('profiles')
                .delete()
                .eq('id', id);

            if (error) {
                console.error("Erro ao deletar profile:", error.message);
                return false;
            }

            return true;
        } catch (e) {
            console.log("Erro inesperado:", e);
            return false;
        }
    }
}

