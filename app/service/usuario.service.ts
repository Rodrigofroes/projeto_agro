import { IUsuario } from "./interfaces/usuario.interface";
import {
  forgotPasswordSupabase,
  loginSupabase,
  createAccountSupabase,
  logoutSupabase,
} from "../../firebase/authenticator/auth";
import Token from "../token/token";

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
      let criar = await createAccountSupabase(nome, telefone, email, senha);
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
      let senha = await forgotPasswordSupabase(email);
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
      let log = await logoutSupabase();
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
}
