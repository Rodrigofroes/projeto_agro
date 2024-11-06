export interface IUsuario {
    login(email: string, password: string): Promise<boolean | undefined>;
    forgotPassword(email: string): Promise<boolean | undefined>;
    logout(): Promise<void>;
}