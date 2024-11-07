import { supabase } from "@/firebase/firebase";
import { IConfiguracao } from "./interfaces/configuracao.interface"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default class ConfiguracaoService implements IConfiguracao {
    async profiles(): Promise<any> {
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

    async categorias(): Promise<any> {
        try {
            const { data, error } = await supabase
                .from('category')
                .select('*');

            if (error) {
                console.error("Erro ao consultar categorias:", error.message);
                return null;
            }

            return data;
        } catch (e) {
            console.log(e);
            return null;
        }
    }
}
