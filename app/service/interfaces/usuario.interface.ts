import { usuario } from "@/app/types/type";

export interface IUsuario {
  login(email: string, password: string): Promise<boolean | undefined>;

  create(
    nome: string,
    telefone: string,
    email: string,
    senha: string
  ): Promise<boolean | undefined>;

  forgotPassword(email: string): Promise<boolean | undefined>;
  logout(): Promise<void>;
  delete(id: string): Promise<boolean | undefined>;
  get(id: string): Promise<usuario[]>;
  edit(id: string, nome: string, telefone: string, email: string, senha: string): Promise<boolean | undefined>;
}
