// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IConfiguracao {
    profiles(): Promise<any>;
    categorias(): Promise<any>;
}