export interface IConfiguracao {
    profiles(): Promise<any>;
    categorias(): Promise<any>;
}