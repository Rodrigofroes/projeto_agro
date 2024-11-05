export interface ILogin {
    login(email: string, password: string): Promise<any>;
    forgotPassword(email: string): Promise<void>;
}