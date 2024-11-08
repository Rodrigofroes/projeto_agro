import { IUsuario } from "./interfaces/usuario.interface";
import {
  forgotPasswordSupabase,
  loginSupabase,
  createAccountSupabase,
  logoutSupabase,
  deleteAccount,
  EditAccount,
} from "../../firebase/authenticator/auth";
import Token from "../token/token";
import { supabase } from "@/firebase/firebase";

export default class UsuarioService implements IUsuario {
  async login(email: string, password: string): Promise<boolean | any> {
    try {
      const data = await loginSupabase(email, password);
      if (data) {
        const token = new Token();
        token.setToken(data);
        return token;
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
    }
  }

  async create(
    nome: string,
    telefone: string,
    email: string,
    senha: string
  ): Promise<boolean | any> {
    try {
      const criar = await createAccountSupabase(nome, telefone, email, senha);
      if (criar) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
    }
  }

  async forgotPassword(email: string): Promise<boolean | undefined> {
    try {
      const senha = await forgotPasswordSupabase(email);
      if (senha) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }

  async logout(): Promise<void> {
    try {
      const log = await logoutSupabase();
      if (log) {
        const token = new Token();
        token.removeToken();
      } else {
        console.log("Erro ao realizar logout");
      }
    } catch (e) {
      console.log(e);
    }
  }

  async delete(id: string): Promise<boolean | undefined> {
    try {
      const deletar = await deleteAccount(id);
      if (deletar) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log("Erro inesperado:", e);
      return false;
    }
  }

  async get(id: string): Promise<any> {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", id);

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

  async edit(id: string, nome: string, telefone: string, email: string, senha: string): Promise<boolean> {
    try {
      const editar = await EditAccount(id, email, senha);
      if (!editar) {
        return false;
      }

      const { error } = await supabase
        .from("profiles")
        .update({ pro_nome: nome, pro_telefone: telefone, pro_email: email })
        .eq("id", id);

      if (error) {
        console.error("Erro ao atualizar profiles:", error.message);
        return false;
      }

      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

}
