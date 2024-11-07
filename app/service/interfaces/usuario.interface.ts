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
}
